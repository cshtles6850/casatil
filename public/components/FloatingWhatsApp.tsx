'use client';

import { useEffect, useRef, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

type Props = {
  href: string;
  ariaLabel: string;
};

function rectsOverlap(a: DOMRect, b: DOMRect) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

export function FloatingWhatsApp({ href, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const expandedSizeRef = useRef({ width: 0, height: 0 });
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const currentRect = button.getBoundingClientRect();
        if (!expandedSizeRef.current.width) {
          expandedSizeRef.current = { width: currentRect.width, height: currentRect.height };
        }

        const { width, height } = expandedSizeRef.current;
        const expandedRect = new DOMRect(
          currentRect.right - width,
          currentRect.bottom - height,
          width,
          height,
        );

        // Condition A: collapse whenever the booking form is visible in the viewport.
        const bookingForm = document.querySelector<HTMLElement>('#booking .booking-card');
        const bookingInView = bookingForm
          ? (() => {
              const rect = bookingForm.getBoundingClientRect();
              return rect.bottom > 0 && rect.top < window.innerHeight;
            })()
          : false;

        // Condition B: at the hero, collapse only if the expanded pill would cover
        // a hero CTA button or the trust/checkmark row. No other page elements matter.
        const heroTargets = Array.from(
          document.querySelectorAll<HTMLElement>('.hero-actions .btn, .trust-row'),
        );
        const heroWouldBeCovered = heroTargets.some((target) => {
          const rect = target.getBoundingClientRect();
          const targetInView = rect.bottom > 0 && rect.top < window.innerHeight;
          return targetInView && rectsOverlap(expandedRect, rect);
        });

        setCollapsed(bookingInView || heroWouldBeCovered);
      });
    };

    // Measure the expanded pill first so collapsing never causes width-based flicker.
    frame = requestAnimationFrame(() => {
      const rect = button.getBoundingClientRect();
      expandedSizeRef.current = { width: rect.width, height: rect.height };
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
