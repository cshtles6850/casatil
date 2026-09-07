export type BookingTiming = 'incomplete' | 'past' | 'urgent' | 'short-notice' | 'normal';

const ISTANBUL_OFFSET = '+03:00';
const EIGHT_HOURS_MS = 8 * 60 * 60 * 1000;
const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

function parseIstanbulDateTime(date: string, time: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time)) return Number.NaN;
  return Date.parse(`${date}T${time}:00${ISTANBUL_OFFSET}`);
}

export function todayInIstanbul(nowMs = Date.now()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(nowMs));
  const get = (type: string) => parts.find((part) => part.type === type)?.value || '';
  return `${get('year')}-${get('month')}-${get('day')}`;
}

export function getBookingTiming(date: string, time: string, nowMs = Date.now()): BookingTiming {
  const targetMs = parseIstanbulDateTime(date, time);
  if (!Number.isFinite(targetMs)) return 'incomplete';

  const remainingMs = targetMs - nowMs;
  if (remainingMs < 0) return 'past';
  if (remainingMs <= EIGHT_HOURS_MS) return 'urgent';
  if (remainingMs <= TWENTY_FOUR_HOURS_MS) return 'short-notice';
  return 'normal';
}

export function isAfterBookingDateTime(
  laterDate: string,
  laterTime: string,
  earlierDate: string,
  earlierTime: string,
) {
  const laterMs = parseIstanbulDateTime(laterDate, laterTime);
  const earlierMs = parseIstanbulDateTime(earlierDate, earlierTime);
  if (!Number.isFinite(laterMs) || !Number.isFinite(earlierMs)) return false;
  return laterMs > earlierMs;
}
