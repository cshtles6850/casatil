'use client';

import { useEffect, useRef, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

type Props = {
  href: string;
  ariaLabel: string;
};

export function FloatingWhatsApp({ href, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const expandedWidthRef = useRef(0);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bookingForm = document.querySelector<HTMLElement>('#booking .booking-card');

        if (!bookingForm) {
          setCollapsed(false);
          return;
        }

        const buttonRect = button.getBoundingClientRect();
        const bookingRect = bookingForm.getBoundingClientRect();

        // Measure the expanded pill once and keep using that width while collapsed,
        // so the button does not flicker between states as its own width changes.
        const expandedWidth = expandedWidthRef.current || buttonRect.width;

        const bookingIsInViewport = bookingRect.bottom > 0 && bookingRect.top < window.innerHeight;
        const expandedLeft = buttonRect.right - expandedWidth;
        const expandedWouldOverlap = bookingIsInViewport
          && expandedLeft < bookingRect.right
          && buttonRect.right > bookingRect.left
          && buttonRect.top < bookingRect.bottom
          && buttonRect.bottom > bookingRect.top;

        setCollapsed(expandedWouldOverlap);
      });
    };

    // Initial expanded-width measurement, then react only to scroll/resize.
    frame = requestAnimationFrame(() => {
      expandedWidthRef.current = button.getBoundingClientRect().width;
      update();
    });

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <a
      ref={ref}
      className={`floating-whatsapp${collapsed ? ' is-collapsed' : ''}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      data-collapsed={collapsed ? 'true' : 'false'}
    >
      <WhatsAppIcon size={24} />
      <span className="floating-whatsapp-label">WhatsApp</span>
    </a>
  );
}
