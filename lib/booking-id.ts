const BOOKING_ID_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function generateBookingId(siteCode: string, now = new Date()) {
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const random = new Uint8Array(4);
  globalThis.crypto.getRandomValues(random);
  const suffix = Array.from(random, (value) => BOOKING_ID_ALPHABET[value % BOOKING_ID_ALPHABET.length]).join('');
  return `${siteCode}-${month}${day}-${suffix}`;
}
