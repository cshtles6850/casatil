const NO_BOOKING_FORM_SLUGS = new Set([
  'cappadocia-airport',
  'nearest-airport-to-cappadocia',
  'kayseri-or-nevsehir-airport-for-cappadocia',
  'cappadocia-cave-hotel-airport-transfer',
  'istanbul-to-cappadocia',
  'cappadocia-to-istanbul',
]);

export function pageHasBookingForm(slug: string, isRoutePage: boolean) {
  return isRoutePage || !NO_BOOKING_FORM_SLUGS.has(slug);
}
