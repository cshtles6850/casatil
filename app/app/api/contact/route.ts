import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const rateWindowMs = 10 * 60 * 1000;
const rateLimit = 8;
const buckets = new Map<string, { count: number; resetAt: number }>();

function clean(value: unknown, max: number) { return String(value ?? '').trim().slice(0, max); }
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (char) => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[char] || char)); }
function reply(body: Record<string, unknown>, status = 200) { return NextResponse.json(body, { status, headers: { 'Cache-Control':'no-store, max-age=0' } }); }
function limited(request: NextRequest) {
  const key = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now(); const current = buckets.get(key);
  if (!current || now >= current.resetAt) { buckets.set(key, { count:1, resetAt:now+rateWindowMs }); return false; }
  current.count += 1; return current.count > rateLimit;
}

export async function POST(request: NextRequest) {
  if (limited(request)) return reply({ ok:false, error:'rate-limited' }, 429);
  let raw: Record<string, unknown>;
  try { raw = await request.json(); } catch { return reply({ ok:false, error:'invalid-json' }, 400); }

  // Honeypot: bots often fill hidden website fields.
  if (clean(raw.website, 200)) return reply({ ok:true });

  const name = clean(raw.name, 120);
  const email = clean(raw.email, 180);
  const whatsapp = clean(raw.whatsapp, 80);
  const subject = clean(raw.subject, 160).replace(/[\r\n]+/g, ' ');
  const message = clean(raw.message, 3000);
  const language = clean(raw.language, 20) || 'en';
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !subject || message.length < 3) return reply({ ok:false, error:'missing-or-invalid-fields' }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO || process.env.BOOKING_EMAIL_TO || 'cappadociaairportshuttle@gmail.com';
  const from = process.env.RESEND_FROM || 'Cappadocia Airport Shuttle <bookings@cappadociaairportshuttle.com>';
  if (!apiKey) return reply({ ok:false, error:'email-not-configured' }, 503);

  const text = `New website contact message\nLanguage: ${language}\nName: ${name}\nEmail: ${email}\nWhatsApp/phone: ${whatsapp || '-'}\nSubject: ${subject}\n\n${message}`;
  const response = await fetch('https://api.resend.com/emails', {
    method:'POST',
    headers:{ Authorization:`Bearer ${apiKey}`, 'Content-Type':'application/json' },
    body:JSON.stringify({
      from,
      to:[to],
      reply_to:email,
      subject:`Website contact · ${subject}`,
      text,
      html:`<h2>New Cappadocia Airport Shuttle contact message</h2><p><strong>Language:</strong> ${escapeHtml(language)}</p><p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>WhatsApp/phone:</strong> ${escapeHtml(whatsapp || '-')}<br><strong>Subject:</strong> ${escapeHtml(subject)}</p><hr><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });
  if (!response.ok) return reply({ ok:false, error:'send-failed' }, 502);
  return reply({ ok:true });
}
