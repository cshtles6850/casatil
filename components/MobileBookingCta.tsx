'use client';

import { useEffect, useState } from 'react';

type Props = {
  priceLabel: string;
  bookLabel: string;
  ariaLabel: string;
};

const MOBILE_MEDIA = '(max-width: 820px)';

export function MobileBookingCta({ priceLabel, bookLabel, ariaLabel }: Props) {
  const [hiddenForBooking, setHiddenForBooking] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_MEDIA);
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      observer = null;

      if (!media.matches) {
        setHiddenForBooking(false);
        return;
      }

      const bookingCard = document.querySelector<HTMLElement>('#booking-form');
      if (!bookingCard || !('IntersectionObserver' in window)) {
        setHiddenForBooking(false);
        return;
      }

      observer = new IntersectionObserver(([entry]) => {
        setHiddenForBooking(Boolean(entry?.isIntersecting));
      }, { threshold: 0 });

      observer.observe(bookingCard);
    };

    setup();
    media.addEventListener('change', setup);

    return () => {
      media.removeEventListener('change', setup);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`mobile-booking-cta${hiddenForBooking ? ' is-hidden-for-booking' : ''}`}
      role="region"
      aria-label={ariaLabel}
      aria-hidden={hiddenForBooking ? 'true' : undefined}
    >
      <span className="mobile-booking-price">{priceLabel}</span>
      <a
        className="mobile-booking-button"
        href="#booking-form"
        tabIndex={hiddenForBooking ? -1 : undefined}
      >
        {bookLabel}
      </a>
    </div>
  );
}
