# Cappadocia Airport Shuttle — Production Source

This repository contains production website source only.

## Reusable information components

`QuickFacts` and `BookingInfoChecklist` are reusable presentation components. They are not route-only components, but they must never be placed automatically on every page.

### QuickFacts placement policy

Current route pages may use `QuickFacts` for route-specific Distance / Travel Time / Price data.

Do **not** treat the following multi-route / multi-direction hub pages as QuickFacts candidates, because a single distance or travel-time value would be misleading:

- `/goreme-airport-transfer`
- `/kayseri-airport-shuttle`
- `/nevsehir-airport-shuttle`

The only current hub-type QuickFacts candidate is:

- `/airport-transfer-prices` — only as a price-oriented grid; do not present one shared distance/travel-time value for this page.

No hub or non-route page should receive `QuickFacts` or `BookingInfoChecklist` without explicit page-by-page approval.

## Deployment

Install dependencies and run a full production build before deployment:

```bash
npm install
npm run build
```

## Floating WhatsApp UI policy
- The floating WhatsApp control uses one pill component on desktop and mobile: icon + “WhatsApp” in a single horizontal row.
- Base brand color is the official WhatsApp green `#25D366`.
- On route pages, mobile placement stays above the sticky price / Book Now bar.
- A collision guard temporarily fades the floating pill only while it would cover route CTAs, Quick Facts, booking checklist, route headings/text, related cards, FAQ, or the booking form. It reappears automatically when the viewport has a safe slot.
