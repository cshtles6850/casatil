'use client';

import { useEffect, useRef } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

type Props = {
  href: string;
  ariaLabel: string;
};

const SAFE_GAP = 14;
const PROTECTED_SELECTORS = [
  '.breadcrumb',
  '.eyebrow',
  '.route-page h1',
  '.lead',
  '.quick-facts',
  '.hero-actions',
  '.trust-row',
  '.booking-info-list',
  '.route-prose h2',
  '.route-prose p',
  '.related-grid',
  '.faq',
  '.booking-card',
];

export function FloatingWhatsApp({ href, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    let frame = 0;

    const updateSafePosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const hasStickyBookingCta = Boolean(document.querySelector('.mobile-booking-cta'));
        const isMobile = window.matchMedia('(max-width: 820px)').matches;
        const baseBottom = hasStickyBookingCta && isMobile ? 88 : isMobile ? 16 : 24;

        button.style.setProperty('--wa-safe-bottom', `${baseBottom}px`);
        button.style.setProperty('--wa-collision-lift', '0px');
        button.dataset.collision = 'false';

        const buttonRect = button.getBoundingClientRect();
        const height = buttonRect.height;
        const left = buttonRect.left;
        const right = buttonRect.right;

        const headerBottom = document.querySelector<HTMLElement>('.site-header')?.getBoundingClientRect().bottom ?? 0;
        const stickyTop = hasStickyBookingCta && isMobile
          ? document.querySelector<HTMLElement>('.mobile-booking-cta')?.getBoundingClientRect().top ?? window.innerHeight
          : window.innerHeight;

        const minTop = Math.max(12, headerBottom + SAFE_GAP);
        const baseTop = window.innerHeight - baseBottom - height;
        const maxTop = Math.min(baseTop, stickyTop - SAFE_GAP - height);

        const blocked: DOMRect[] = [];
        for (const selector of PROTECTED_SELECTORS) {
          document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
            const horizontalOverlap = left < rect.right && right > rect.left;
            if (horizontalOverlap) blocked.push(rect);
          });
        }

        let top = maxTop;
        let attempts = 0;
        while (attempts < 24) {
          const collision = blocked.find((rect) =>
            top < rect.bottom + SAFE_GAP && top + height > rect.top - SAFE_GAP
          );
          if (!collision) break;
          top = collision.top - SAFE_GAP - height;
          attempts += 1;
        }

        if (top < minTop) {
          // A narrow viewport can occasionally have no genuine free slot.
          // Protect the page content rather than covering a CTA or text.
          button.dataset.collision = 'true';
          return;
        }

        const requiredBottom = window.innerHeight - top - height;
        button.style.setProperty('--wa-collision-lift', `${Math.max(0, requiredBottom - baseBottom)}px`);
      });
    };

    updateSafePosition();
    window.addEventListener('scroll', updateSafePosition, { passive: true });
    window.addEventListener('resize', updateSafePosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateSafePosition);
      window.removeEventListener('resize', updateSafePosition);
    };
  }, []);

  return (
    <a
      ref={ref}
      className="floating-whatsapp"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      data-collision="false"
    >
      <WhatsAppIcon size={24} />
      <span>WhatsApp</span>
    </a>
  );
}
