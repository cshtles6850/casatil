import { NextRequest, NextResponse } from 'next/server';
import { SITE } from '@/lib/site';
import { privateTotal, shuttleTotal, type AirportPriceKey, type PrivateVehicleKey } from '@/lib/prices';
import { getBookingTiming, isAfterBookingDateTime, todayInIstanbul } from '@/lib/booking-time';
import { isLatinHotel, isLatinName } from '@/lib/booking-input';
import { phoneDigits } from '@/lib/phone';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';


type Passenger = { number?: number; fullName?: string; passport?: string };
type RawBooking = {
  bookingId?: unknown; transferType?: unknown; journey?: unknown; direction?: unknown; airport?: unknown; vehicle?: unknown;
  passengers?: unknown; destination?: unknown; hotel?: unknown; firstTransferDate?: unknown; firstTransferTime?: unknown; arrivalFlight?: unknown;
  departureFlight?: unknown; returnTransferDate?: unknown; returnTransferTime?: unknown; returnFlight?: unknown; whatsapp?: unknown; email?: unknown;
  passengerDetails?: unknown; notes?: unknown; total?: unknown; payment?: unknown; website?: unknown; companyWebsite?: unknown;
  language?: unknown; locale?: unknown; submittedAt?: unknown;
};

const rateWindowMs = 10 * 60 * 1000;
const rateLimit = 12;
const requestBuckets = new Map<string, { count: number; resetAt: number }>();

function reply(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store, max-age=0' } });
}

function isRateLimited(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const key = forwarded || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  const current = requestBuckets.get(key);
  if (!current || now >= current.resetAt) {
    requestBuckets.set(key, { count: 1, resetAt: now + rateWindowMs });
    return false;
  }
  current.count += 1;
  return current.count > rateLimit;
}

function clean(value: unknown, max = 1200) { return String(value ?? '').trim().slice(0, max); }
function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char] || char));
}
function normalizePassengers(value: unknown): Passenger[] {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 16).map((item, index) => {
    const row = item && typeof item === 'object' ? item as Record<string, unknown> : {};
    return { number: index + 1, fullName: clean(row.fullName, 180), passport: clean(row.passport, 80) };
  });
}

function expectedTotal(data: { transferType: string; journey: string; airport: string; vehicle: string; passengerCount: number }) {
  const airport: AirportPriceKey | null = data.airport.includes('(ASR)')
    ? 'kayseri'
    : data.airport.includes('(NAV)')
      ? 'nevsehir'
      : null;
  if (!airport) return null;

  const isRoundTrip = data.journey === 'round-trip';
  if (data.transferType === 'shuttle') return shuttleTotal(airport, data.passengerCount, isRoundTrip);

  const vehicle: PrivateVehicleKey | null = data.vehicle.includes('Vito')
    ? 'vito'
    : data.vehicle.includes('Sprinter')
      ? 'sprinter'
      : null;
  if (!vehicle) return null;
  return privateTotal(airport, vehicle, isRoundTrip);
}

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) return reply({ ok: false, error: 'rate-limited' }, 429);

  let raw: RawBooking;
  try { raw = await request.json(); }
  catch { return reply({ ok: false, error: 'invalid-json' }, 400); }

  if (clean(raw.website, 200) || clean(raw.companyWebsite, 200)) return reply({ ok: true, email: 'honeypot' });

  const passengers = normalizePassengers(raw.passengerDetails);
  const passengerCount = Number.parseInt(clean(raw.passengers, 3), 10);
  const data = {
    bookingId: clean(raw.bookingId, 32),
    transferType: clean(raw.transferType, 30), journey: clean(raw.journey, 30), direction: clean(raw.direction, 60),
    airport: clean(raw.airport, 80), vehicle: clean(raw.vehicle, 80), passengerCount, destination: clean(raw.destination, 40),
    hotel: clean(raw.hotel, 240), firstTransferDate: clean(raw.firstTransferDate, 30), firstTransferTime: clean(raw.firstTransferTime, 10), arrivalFlight: clean(raw.arrivalFlight, 50),
    departureFlight: clean(raw.departureFlight, 50), returnTransferDate: clean(raw.returnTransferDate, 30), returnTransferTime: clean(raw.returnTransferTime, 10), returnFlight: clean(raw.returnFlight, 50),
    whatsapp: clean(raw.whatsapp, 80), email: clean(raw.email, 180), notes: clean(raw.notes, 1200), payment: 'Cash to the driver',
    language: clean(raw.language ?? raw.locale, 20) || 'en', submittedAt: clean(raw.submittedAt, 80),
  };

  const validBookingId = new RegExp(`^${SITE.bookingCode}-\\d{4}-[A-HJ-NP-Z2-9]{4}$`).test(data.bookingId);
  const validTransferType = data.transferType === 'shuttle' || data.transferType === 'private';
  const validJourney = data.journey === 'one-way' || data.journey === 'round-trip';
  const validAirport = data.airport === 'Kayseri Airport (ASR)' || data.airport === 'Nevsehir Airport (NAV)';
  const validDirection = data.journey === 'round-trip'
    ? data.direction === 'Airport ⇄ Hotel'
    : data.direction === 'Airport → Hotel' || data.direction === 'Hotel → Airport';
  const validVehicle = data.transferType === 'shuttle'
    ? data.vehicle === 'Shared shuttle'
    : data.vehicle === 'Mercedes Vito (max 5)' || data.vehicle === 'Mercedes Sprinter (max 16)';
  const validPassengers = Number.isInteger(passengerCount) && passengerCount >= 1 && passengerCount <= 16 && passengers.length === passengerCount;
  const validDestination = ['Goreme', 'Urgup', 'Uchisar', 'Avanos', 'Ortahisar', 'Cavusin'].includes(data.destination);
  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(data.firstTransferDate);
  const companyArrangedPickup = data.transferType === 'shuttle' && data.journey === 'one-way' && data.direction === 'Hotel → Airport';
  const companyArrangedReturnPickup = data.transferType === 'shuttle' && data.journey === 'round-trip';
  const effectiveFirstTransferTime = companyArrangedPickup ? '' : data.firstTransferTime;
  const effectiveReturnTransferTime = companyArrangedReturnPickup ? '' : data.returnTransferTime;
  const validTime = companyArrangedPickup || /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(effectiveFirstTransferTime);
  const firstTiming = validDate && !companyArrangedPickup && validTime ? getBookingTiming(data.firstTransferDate, effectiveFirstTransferTime) : 'incomplete';
  const validFutureTime = companyArrangedPickup ? validDate && data.firstTransferDate >= todayInIstanbul() : firstTiming !== 'incomplete' && firstTiming !== 'past';
  const isVito = data.vehicle === 'Mercedes Vito (max 5)';
  const whatsappDigits = phoneDigits(data.whatsapp);
  const validWhatsApp = Boolean(data.whatsapp) && whatsappDigits.length >= 7 && whatsappDigits.length <= 15;
  const validEmail = !data.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const hasContact = Boolean(data.whatsapp);
  const validLatinFields = isLatinHotel(data.hotel) && passengers.every((p) => isLatinName(p.fullName || ''));
  if (!validBookingId || !validTransferType || !validJourney || !validAirport || !validDirection || !validVehicle || !validPassengers || !validDestination || !validDate || !validTime || !validFutureTime || !data.hotel || !hasContact || !validWhatsApp || !validEmail || !validLatinFields) {
    return reply({ ok: false, error: 'missing-or-invalid-fields' }, 400);
  }
  if (data.journey === 'round-trip' && (!/^\d{4}-\d{2}-\d{2}$/.test(data.returnTransferDate) || (!companyArrangedReturnPickup && !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(effectiveReturnTransferTime)))) return reply({ ok: false, error: 'missing-return-fields' }, 400);
  if (data.journey === 'round-trip' && (companyArrangedReturnPickup
    ? data.returnTransferDate < data.firstTransferDate
    : !isAfterBookingDateTime(data.returnTransferDate, effectiveReturnTransferTime, data.firstTransferDate, data.firstTransferTime))) return reply({ ok: false, error: 'invalid-return-date-time' }, 400);
  if (data.transferType === 'private' && isVito && passengerCount > 5) return reply({ ok: false, error: 'vehicle-capacity' }, 400);
  if (passengers.some((p) => !p.fullName || !p.passport)) return reply({ ok: false, error: 'missing-passenger-fields' }, 400);

  const arrivalRequired = data.journey === 'round-trip' || data.direction.includes('Airport → Hotel');
  const departureRequired = data.journey === 'round-trip' || data.direction.includes('Hotel → Airport');
  if (arrivalRequired && !data.arrivalFlight) return reply({ ok: false, error: 'missing-arrival-flight' }, 400);
  if (data.journey === 'round-trip' && (!data.returnTransferDate || !data.returnFlight)) return reply({ ok: false, error: 'missing-return-fields' }, 400);
  if (data.journey === 'one-way' && departureRequired && !data.departureFlight) return reply({ ok: false, error: 'missing-departure-flight' }, 400);

  const total = expectedTotal(data);
  if (total === null) return reply({ ok: false, error: 'invalid-price-selection' }, 400);

  const journeyLabel = data.journey === 'round-trip' ? 'Gidiş Dönüş Transfer' : 'Tek Yön Transfer';
  const serviceLabel = data.transferType === 'shuttle' ? 'Paylaşımlı Shuttle' : 'Özel Transfer';
  const vehicleLabel = data.transferType === 'private'
    ? data.vehicle.includes('Vito') ? 'Mercedes Vito (maks. 5)' : 'Mercedes Sprinter (maks. 16)'
    : '';
  const directionLabel = data.journey === 'round-trip'
    ? 'Havalimanı ⇄ Otel'
    : data.direction === 'Airport → Hotel' ? 'Havalimanı → Otel' : 'Otel → Havalimanı';
  const airportLabel = data.airport.includes('(ASR)') ? 'Kayseri Havalimanı (ASR)' : 'Nevşehir Havalimanı (NAV)';
  const arrivalValue = arrivalRequired && data.arrivalFlight
    ? `${data.firstTransferDate} ${data.firstTransferTime} · ${data.arrivalFlight}`
    : '';
  const departureValue = data.journey === 'one-way' && departureRequired && data.departureFlight
    ? `${data.firstTransferDate}${effectiveFirstTransferTime ? ` ${effectiveFirstTransferTime}` : ''} · ${data.departureFlight}`
    : '';
  const returnValue = data.journey === 'round-trip' && data.returnTransferDate
    ? `${data.returnTransferDate}${effectiveReturnTransferTime ? ` ${effectiveReturnTransferTime}` : ''}${data.returnFlight ? ` · ${data.returnFlight}` : ''}`
    : '';

  const mainRows: Array<[string, string]> = [
    ['Rezervasyon ID', data.bookingId],
    ['Dil', data.language],
    ['Transfer Tipi', journeyLabel],
    ['Hizmet', serviceLabel],
    ...(vehicleLabel ? [['Araç', vehicleLabel] as [string, string]] : []),
    ['Yön', directionLabel],
    ['Havalimanı', airportLabel],
    ['Destinasyon', data.destination],
    ...(arrivalValue ? [['Varış', arrivalValue] as [string, string]] : []),
    ...(departureValue ? [['Kalkış', departureValue] as [string, string]] : []),
    ...(companyArrangedPickup ? [['Alış Saati', 'Uçuş bilgilerine göre firma tarafından ayarlanacak'] as [string, string]] : []),
    ...(returnValue ? [['Dönüş', returnValue] as [string, string]] : []),
    ...(companyArrangedReturnPickup ? [['Dönüş Alış Saati', 'Uçuş bilgilerine göre firma tarafından ayarlanacak'] as [string, string]] : []),
    ['Otel / Konaklama', data.hotel],
    ['Yolcu Sayısı', String(data.passengerCount)],
  ];
  const finalRows: Array<[string, string]> = [
    ['Toplam Fiyat', `EUR ${total}`],
    ['Ödeme', 'Sürücüye nakit (EUR / USD / TRY)'],
    ['Notlar', data.notes || '—'],
  ];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_EMAIL_TO;
  // Domain verification is not required for this project's current Resend setup.
  // onboarding@resend.dev may send only to the Resend account owner's email address.
  const from = process.env.RESEND_FROM?.trim() || 'Cappadocia Airport Shuttle <onboarding@resend.dev>';
  if (!apiKey || !to) {
    console.error('[booking-email] Resend is not configured', { hasApiKey: Boolean(apiKey), hasRecipient: Boolean(to) });
    return reply({ ok: false, email: 'not-configured', error: 'email-not-configured' }, 503);
  }

  const cellStyle = 'padding:9px 11px;border:1px solid #d5dde8;vertical-align:top;line-height:1.35';
  const labelStyle = `${cellStyle};width:38%;background:#f4f6f8;font-weight:700`;
  const valueStyle = `${cellStyle};background:#ffffff`;
  const renderRow = (label: string, valueHtml: string) =>
    `<tr><td style="${labelStyle}">${escapeHtml(label)}</td><td style="${valueStyle}">${valueHtml}</td></tr>`;

  const regularRows = mainRows.map(([label, value]) => renderRow(label, escapeHtml(value))).join('');
  const whatsappLink = data.whatsapp && validWhatsApp
    ? `<br><a href="https://wa.me/${whatsappDigits}" style="display:inline-block;margin-top:5px;color:#079447;font-weight:700;text-decoration:none">WhatsApp'tan müşteriye yaz →</a>`
    : '';
  const contactRows = [
    renderRow('İletişim Numarası', `${escapeHtml(data.whatsapp || '—')}${whatsappLink}`),
    renderRow('E-posta', escapeHtml(data.email || '—')),
  ].join('');
  const passengerRows = passengers.map((p) => renderRow(
    `Yolcu ${p.number}`,
    `${escapeHtml(p.fullName || '')}<br>Pasaport: ${escapeHtml(p.passport || '')}`
  )).join('');
  const finalHtmlRows = finalRows.map(([label, value]) => renderRow(label, escapeHtml(value))).join('');

  const textPassengers = passengers.map((p) => `Yolcu ${p.number}: ${p.fullName}\nPasaport: ${p.passport}`).join('\n');
  const text = `Yeni rezervasyon talebi\n\n${mainRows.map(([label, value]) => `${label}: ${value}`).join('\n')}\nİletişim Numarası: ${data.whatsapp || '—'}\nE-posta: ${data.email || '—'}\n${textPassengers}\n${finalRows.map(([label, value]) => `${label}: ${value}`).join('\n')}`;
  const airportCode = data.airport.includes('(ASR)') ? 'ASR' : 'NAV';
  const routeLabel = data.journey === 'one-way' && data.direction === 'Hotel → Airport'
    ? `${data.destination} → ${airportCode}`
    : `${airportCode} → ${data.destination}`;
  const leadPassenger = (passengers[0]?.fullName || 'Booking').slice(0, 80);
  const subject = `[${data.bookingId}] ${leadPassenger} | ${routeLabel}`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from, to: [to], subject, text,
      html: `<div style="font-family:Arial,Helvetica,sans-serif;color:#111827;max-width:684px;margin:0 auto"><h2 style="font-size:18px;line-height:1.3;margin:0 0 16px;font-weight:700">Yeni rezervasyon talebi</h2><table role="presentation" style="border-collapse:collapse;width:100%;font-size:14px;border:1px solid #d5dde8">${regularRows}${contactRows}${passengerRows}${finalHtmlRows}</table><p style="margin:18px 0 0;color:#4b5563;font-size:11px;line-height:1.45">Pasaport bilgileri rezervasyon işlemi için gönderilmiştir. Bu e-postayı güvenli şekilde saklayın ve gereksiz yere iletmeyin.</p></div>`,
    }),
  });

  if (!response.ok) {
    console.error('[booking-email] Resend request failed', { status: response.status });
    return reply({ ok: false, email: 'send-failed', error: 'email-send-failed' }, 502);
  }
  return reply({ ok: true, email: 'sent' });
}
