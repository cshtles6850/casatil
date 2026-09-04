import type { ReactNode } from 'react';

type BookingInfoChecklistProps = {
  heading: ReactNode;
  items: ReactNode[];
  className?: string;
};

export function BookingInfoChecklist({ heading, items, className = '' }: BookingInfoChecklistProps) {
  if (!items.length) return null;

  return <section className={`content-section booking-info-section${className ? ` ${className}` : ''}`}>
    <h2>{heading}</h2>
    <div className="booking-info-list">
      {items.map((item, index) => <div className="booking-info-chip" key={index}>
        <span aria-hidden="true">✓</span><strong>{item}</strong>
      </div>)}
    </div>
  </section>;
}
