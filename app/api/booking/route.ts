import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';


type Passenger = { number?: number; fullName?: string; passport?: string };
type RawBooking = {
  transferType?: unknown; journey?: unknown; direction?: unknown; airport?: unknown; vehicle?: unknown;
  passengers?: unknown; destination?: unknown; hotel?: unknown; firstTransferDate?: unknown; firstTransferTime?: unknown; arrivalFlight?: unknown;
  departureFlight?: unknown; returnTransferDate?: unknown; returnTransferTime?: unknown; returnFlight?: unknown; whatsapp?: unknown;
  passengerDetails?: unknown; notes?: unknown; total?: unknown; payment?: unknown; website?: unknown;
  submittedAt?: unknown;
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
  const multiplier = data.journey === 'round-trip' ? 2 : 1;
  if (data.transferType === 'shuttle') return 15 * data.passengerCount * multiplier;
  const isKayseri = data.airport.includes('(ASR)');
  const isNevsehir = data.airport.includes('(NAV)');
  if (!isKayseri && !isNevsehir) return null;
  const isVito = data.vehicle.includes('Vito');
  const isSprinter = data.vehicle.includes('Sprinter');
  if (!isVito && !isSprinter) return null;
  const oneWay = isKayseri ? (isVito ? 90 : 110) : (isVito ? 80 : 90);
  return oneWay * multiplier;
}

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) return reply({ ok: false, error: 'rate-limited' }, 429);

  let raw: RawBooking;
  try { raw = await request.json(); }
  catch { return reply({ ok: false, error: 'invalid-json' }, 400); }

  const passengers = normalizePassengers(raw.passengerDetails);
  const passengerCount = Number.parseInt(clean(raw.passengers, 3), 10);
  const data = {
    transferType: clean(raw.transferType, 30), journey: clean(raw.journey, 30), direction: clean(raw.direction, 60),
    airport: clean(raw.airport, 80), vehicle: clean(raw.vehicle, 80), passengerCount, destination: clean(raw.destination, 40),
    hotel: clean(raw.hotel, 240), firstTransferDate: clean(raw.firstTransferDate, 30), firstTransferTime: clean(raw.firstTransferTime, 10), arrivalFlight: clean(raw.arrivalFlight, 50),
    departureFlight: clean(raw.departureFlight, 50), returnTransferDate: clean(raw.returnTransferDate, 30), returnTransferTime: clean(raw.returnTransferTime, 10), returnFlight: clean(raw.returnFlight, 50),
    whatsapp: clean(raw.whatsapp, 80), notes: clean(raw.notes, 1200), payment: 'Cash to the driver',
    submittedAt: clean(raw.submittedAt, 80),
  };

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
  const validTime = /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(data.firstTransferTime);
  const isVito = data.vehicle === 'Mercedes Vito (max 5)';
  if (!validTransferType || !validJourney || !validAirport || !validDirection || !validVehicle || !validPassengers || !validDestination || !validDate || !validTime || !data.whatsapp || !data.hotel) {
    return reply({ ok: false, error: 'missing-or-invalid-fields' }, 400);
  }
  if (data.journey === 'round-trip' && (!/^\d{4}-\d{2}-\d{2}$/.test(data.returnTransferDate) || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(data.returnTransferTime))) return reply({ ok: false, error: 'missing-return-fields' }, 400);
  if (data.journey === 'round-trip' && data.returnTransferDate < data.firstTransferDate) return reply({ ok: false, error: 'invalid-return-date' }, 400);
  if (data.transferType === 'private' && isVito && passengerCount > 5) return reply({ ok: false, error: 'vehicle-capacity' }, 400);
  if (passengers.some((p) => !p.fullName || !p.passport)) return reply({ ok: false, error: 'missing-passenger-fields' }, 400);

  const arrivalRequired = data.journey === 'round-trip' || data.direction.includes('Airport → Hotel');
  const departureRequired = data.journey === 'round-trip' || data.direction.includes('Hotel → Airport');
  if (arrivalRequired && !data.arrivalFlight) return reply({ ok: false, error: 'missing-arrival-flight' }, 400);
  if (data.journey === 'round-trip' && (!data.returnTransferDate || !data.returnFlight)) return reply({ ok: false, error: 'missing-return-fields' }, 400);
  if (data.journey === 'one-way' && departureRequired && !data.departureFlight) return reply({ ok: false, error: 'missing-departure-flight' }, 400);

  const total = expectedTotal(data);
  if (total === null) return reply({ ok: false, error: 'invalid-price-selection' }, 400);

  const journeyLabel = data.journey === 'round-trip' ? 'Round Trip Transfer' : '1 Way Transfer';
  const serviceLabel = data.transferType === 'shuttle'
    ? 'Shared Shuttle'
    : data.vehicle.includes('Vito') ? 'Private Vito' : 'Private Sprinter';
  const arrivalValue = data.arrivalFlight
    ? `${data.firstTransferDate} ${data.firstTransferTime} · ${data.arrivalFlight}`
    : '';
  const departureValue = data.departureFlight
    ? `${data.firstTransferDate} ${data.firstTransferTime} · ${data.departureFlight}`
    : '';
  const returnValue = data.returnTransferDate
    ? `${data.returnTransferDate} ${data.returnTransferTime}${data.returnFlight ? ` · ${data.returnFlight}` : ''}`
    : '';

  const mainRows: Array<[string, string]> = [
    ['Transfer Type', journeyLabel],
    ['Service', serviceLabel],
    ['Direction', data.direction],
    ['Airport', data.airport],
    ['Destination', data.destination],
    ...(arrivalValue ? [['Arrival', arrivalValue] as [string, string]] : []),
    ...(departureValue ? [['Departure', departureValue] as [string, string]] : []),
    ...(returnValue ? [['Return', returnValue] as [string, string]] : []),
    ['Hotel / Accommodation', data.hotel],
    ['Passenger Count', String(data.passengerCount)],
    ['Contact WhatsApp', data.whatsapp],
  ];
  const finalRows: Array<[string, string]> = [
    ['Total Price', `EUR ${total}`],
    ['Payment', 'Cash to driver (EUR / USD / TRY)'],
    ['Notes', data.notes || '—'],
  ];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_EMAIL_TO;
  const from = process.env.RESEND_FROM || 'Cappadocia Reservations <onboarding@resend.dev>';
  if (!apiKey || !to) return reply({ ok: true, email: 'not-configured' });

  const regularRows = mainRows.map(([label, value]) =>
    `<tr><td style="padding:8px;border-bottom:1px solid #eee;width:34%"><strong>${escapeHtml(label)}</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(value)}</td></tr>`
  ).join('');
  const passengerRows = passengers.map((p) => `<tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Passenger ${p.number}</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(p.fullName || '')}<br>Passport: ${escapeHtml(p.passport || '')}</td></tr>`).join('');
  const finalHtmlRows = finalRows.map(([label, value]) => `<tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>${escapeHtml(label)}</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(value)}</td></tr>`).join('');
  const textPassengers = passengers.map((p) => `Passenger ${p.number}: ${p.fullName}\nPassport: ${p.passport}`).join('\n');
  const text = `Booking request.\n\n${mainRows.map(([label, value]) => `${label}: ${value}`).join('\n')}\n${textPassengers}\n${finalRows.map(([label, value]) => `${label}: ${value}`).join('\n')}`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from, to: [to], subject: `New transfer request · ${data.airport} · ${journeyLabel}`, text,
      html: `<h2>Booking request.</h2><table style="border-collapse:collapse;width:100%">${regularRows}${passengerRows}${finalHtmlRows}</table><p style="color:#666;font-size:12px">Passenger passport information is included because it is required for the reservation. Handle this email securely and do not forward it unnecessarily.</p>`,
    }),
  });

  if (!response.ok) return reply({ ok: true, email: 'send-failed' });
  return reply({ ok: true, email: 'sent' });
}
