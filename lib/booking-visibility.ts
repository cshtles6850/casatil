const GUIDE_INLINE_BOOKING_SECTIONS: Record<string, number> = {
  'cappadocia-airport': 3,
  'cappadocia-cave-hotel-airport-transfer': 1,
  'nearest-airport-to-cappadocia': 2,
  'kayseri-or-nevsehir-airport-for-cappadocia': 3,
  'istanbul-to-cappadocia': 3,
  'cappadocia-to-istanbul': 2,
};

const NO_BOOKING_FORM_SLUGS = new Set<string>();

export function pageHasBookingForm(slug: string, isRoutePage: boolean) {
  return isRoutePage || !NO_BOOKING_FORM_SLUGS.has(slug);
}

export function pageUsesGuideInlineBooking(slug: string) {
  return slug in GUIDE_INLINE_BOOKING_SECTIONS;
}

export function guideInlineBookingSectionCount(slug: string) {
  return GUIDE_INLINE_BOOKING_SECTIONS[slug] ?? 1;
}
