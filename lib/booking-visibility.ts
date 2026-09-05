const NO_BOOKING_FORM_SLUGS = new Set([
  'nearest-airport-to-cappadocia',
  'kayseri-or-nevsehir-airport-for-cappadocia',
  'istanbul-to-cappadocia',
  'cappadocia-to-istanbul',
]);

const GUIDE_INLINE_BOOKING_SLUGS = new Set([
  'cappadocia-airport',
  'cappadocia-cave-hotel-airport-transfer',
]);

export function pageHasBookingForm(slug: string, isRoutePage: boolean) {
  return isRoutePage || !NO_BOOKING_FORM_SLUGS.has(slug);
}

export function pageUsesGuideInlineBooking(slug: string) {
  return GUIDE_INLINE_BOOKING_SLUGS.has(slug);
}
