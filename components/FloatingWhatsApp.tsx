'use client';

import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

type Props = {
  href: string;
  ariaLabel: string;
};

const MOBILE_MEDIA = '(max-width: 820px)';
const COLLISION_TARGETS = '#booking .booking-card, .hero-actions, .trust-row';

type VisualState = {
  ready: boolean;
  collapsed: boolean;
};

export function FloatingWhatsApp({ href, ariaLabel }: Props) {
  const [visualState, setVisualState] = useState<VisualState>({
    ready: false,
    collapsed: false,
  });
  useEffect(() => {
    const media = window.matchMedia(MOBILE_MEDIA);
    let observer: IntersectionObserver | null = null;
    const visibleTargets = new Set<Element>();

    const disconnectObserver = () => {
      observer?.disconnect();
      observer = null;
      visibleTargets.clear();
    };

    const setup = () => {
      disconnectObserver();

      // Desktop always keeps the full WhatsApp pill visible. No geometry reads,
      // scroll listeners or resize loops are needed for the desktop state.
      if (!media.matches) {
        setVisualState({ ready: true, collapsed: false });
        return;
      }

      const targets = Array.from(document.querySelectorAll<HTMLElement>(COLLISION_TARGETS));

      // Pages without a booking/hero collision target can show the full mobile pill.
      if (!targets.length || !('IntersectionObserver' in window)) {
        setVisualState({ ready: true, collapsed: false });
        return;
      }

      // Keep the control hidden until the observer reports the initial mobile
      // collision state, preventing an expanded-pill flash during hydration.
      setVisualState({ ready: false, collapsed: false });

      // IntersectionObserver is asynchronous and browser-managed, avoiding the
      // forced synchronous layout caused by geometry reads on scroll.
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleTargets.add(entry.target);
          else visibleTargets.delete(entry.target);
        }

        const collapsed = visibleTargets.size > 0;
        setVisualState({ ready: true, collapsed });
      }, { threshold: 0 });

      for (const target of targets) {
        observer.observe(target);
      }
    };

    setup();
    media.addEventListener('change', setup);

    return () => {
      media.removeEventListener('change', setup);
      disconnectObserver();
    };
  }, []);

  return (
    <a
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
