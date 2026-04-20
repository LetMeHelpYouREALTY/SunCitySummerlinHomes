'use client';

import Script from 'next/script';
import { useEffect, useRef, type ReactNode } from 'react';
import { CALENDLY_EVENT_URL } from '@/lib/calendly-config';

/** Brand accent aligned with viewport themeColor / desert-luxury palette */
const BADGE_COLOR = '#8e1f41';

type CalendlyProviderProps = {
  children: ReactNode;
};

export default function CalendlyProvider({ children }: CalendlyProviderProps) {
  const badgeStarted = useRef(false);

  useEffect(() => {
    const id = 'calendly-widget-css';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
  }, []);

  const initBadge = () => {
    if (badgeStarted.current || typeof window === 'undefined' || !window.Calendly) {
      return;
    }
    badgeStarted.current = true;
    window.Calendly.initBadgeWidget({
      url: CALENDLY_EVENT_URL,
      text: 'Schedule time with me',
      color: BADGE_COLOR,
      textColor: '#ffffff',
      branding: false,
    });
  };

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
