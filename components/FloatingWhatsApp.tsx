'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

type Props = {
  href: string;
  ariaLabel: string;
};

const HERO_COLLISION_MARGIN = 24;

type VisualState = {
  ready: boolean;
  collapsed: boolean;
};

function rectsOverlap(a: DOMRect, b: DOMRect) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function expandRect(rect: DOMRect, margin: number) {
  return new DOMRect(
    rect.left - margin,
    rect.top - margin,
    rect.width + margin * 2,
    rect.height + margin * 2,
  );
}

export function FloatingWhatsApp({ href, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const expandedSizeRef = useRef({ width: 0, height: 0 });
  const [visualState, setVisualState] = useState<VisualState>({
    ready: false,
    collapsed: false,
  });

  useLayoutEffect(() => {
    const button = ref.current;
    if (!button) return;

    let frame = 0;

    const shouldCollapse = () => {
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

      // Condition B: at the hero, collapse if the expanded pill would cover a
      // hero CTA button or the trust/checkmark row, including the safety margin.
      const heroTargets = Array.from(
        document.querySelectorAll<HTMLElement>('.hero-actions .btn, .trust-row'),
      );
      const heroWouldBeCovered = heroTargets.some((target) => {
        const rect = target.getBoundingClientRect();
        const targetInView =
          rect.bottom > -HERO_COLLISION_MARGIN &&
          rect.top < window.innerHeight + HERO_COLLISION_MARGIN;
        return targetInView && rectsOverlap(expandedRect, expandRect(rect, HERO_COLLISION_MARGIN));
      });

      return bookingInView || heroWouldBeCovered;
    };

    // Critical initial-load check: measure the expanded pill and determine its
    // correct state synchronously in a layout effect, before making it visible.
    // This prevents a one-frame flash of the expanded label over the hero CTA.
    const initialCollapsed = shouldCollapse();
    setVisualState({ ready: true, collapsed: initialCollapsed });

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nextCollapsed = shouldCollapse();
        setVisualState((current) =>
          current.collapsed === nextCollapsed
            ? current
            : { ready: true, collapsed: nextCollapsed },
        );
      });
    };

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
      className={`floating-whatsapp${visualState.ready ? ' is-ready' : ' is-initializing'}${visualState.collapsed ? ' is-collapsed' : ''}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      data-collapsed={visualState.collapsed ? 'true' : 'false'}
      data-ready={visualState.ready ? 'true' : 'false'}
    >
      <WhatsAppIcon size={24} />
      <span className="floating-whatsapp-label">WhatsApp</span>
    </a>
  );
}
