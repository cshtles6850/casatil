type Props = {
  priceLabel: string;
  bookLabel: string;
  ariaLabel: string;
};

export function MobileBookingCta({ priceLabel, bookLabel, ariaLabel }: Props) {
  return (
    <div className="mobile-booking-cta" role="region" aria-label={ariaLabel}>
      <span className="mobile-booking-price">{priceLabel}</span>
      <a className="mobile-booking-button" href="#booking">{bookLabel}</a>
    </div>
  );
}
