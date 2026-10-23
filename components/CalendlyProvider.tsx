'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, type ReactNode } from 'react';
import { calendlyUrlFor } from '@/lib/calendly-config';

/** Brand accent aligned with viewport themeColor / desert-luxury palette */
const BADGE_COLOR = '#8e1f41';

type CalendlyProviderProps = {
  children: ReactNode;
};

export default function CalendlyProvider({ children }: CalendlyProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    const id = 'calendly-widget-css';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
  }, []);

  // Rebuilds the badge so it books the current page's event and utm_campaign after client-side navigation.
  const initBadge = () => {
    if (typeof window === 'undefined' || !window.Calendly) return;
    const widget = window.Calendly as typeof window.Calendly & { destroyBadgeWidget?: () => void };
    if (widget.destroyBadgeWidget) widget.destroyBadgeWidget();
    else document.querySelector('.calendly-badge-widget')?.remove();
    window.Calendly.initBadgeWidget({
      url: calendlyUrlFor(window.location.pathname, 'badge'),
      text: 'Schedule time with me',
      color: BADGE_COLOR,
      textColor: '#ffffff',
      branding: false,
    });
  };

  useEffect(() => {
    initBadge();
  }, [pathname]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initBadge}
      />
      {children}
    </>
  );
}
