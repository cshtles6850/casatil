const BOOKING_ID_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function generateBookingId(siteCode: string, now = new Date()) {
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Istanbul',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const month = dateParts.find((part) => part.type === 'month')?.value ?? '00';
  const day = dateParts.find((part) => part.type === 'day')?.value ?? '00';
  const random = new Uint8Array(4);
  globalThis.crypto.getRandomValues(random);
  const suffix = Array.from(random, (value) => BOOKING_ID_ALPHABET[value % BOOKING_ID_ALPHABET.length]).join('');
  return `${siteCode}-${month}${day}-${suffix}`;
}
