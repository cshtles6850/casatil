const LATIN_NAME_ALLOWED = /[^\p{Script=Latin}\p{M}\s.'’\-]/gu;
const LATIN_HOTEL_ALLOWED = /[^\p{Script=Latin}\p{M}\p{N}\s&+.,'’()\/\-–—:#]/gu;

const LATIN_NAME_FULL = /^[\p{Script=Latin}\p{M}\s.'’\-]+$/u;
const LATIN_HOTEL_FULL = /^[\p{Script=Latin}\p{M}\p{N}\s&+.,'’()\/\-–—:#]+$/u;

export function sanitizeLatinName(value: string) {
  return value.replace(LATIN_NAME_ALLOWED, '');
}

export function sanitizeLatinHotel(value: string) {
  return value.replace(LATIN_HOTEL_ALLOWED, '');
}

export function isLatinName(value: string) {
  const clean = value.trim();
  return Boolean(clean) && LATIN_NAME_FULL.test(clean);
}

export function isLatinHotel(value: string) {
  const clean = value.trim();
  return Boolean(clean) && LATIN_HOTEL_FULL.test(clean);
}
