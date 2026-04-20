'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_EVENT_URL } from '@/lib/calendly-config';
import styles from '@/styles/CalendlyInline.module.css';

type CalendlyInlineProps = {
  className?: string;
};

export default function CalendlyInline({ className }: CalendlyInlineProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const init = () => {
      if (!window.Calendly || !parentRef.current) return;
      parentRef.current.replaceChildren();
      window.Calendly.initInlineWidget({
        url: CALENDLY_EVENT_URL,
        parentElement: parentRef.current,
      });
    };

    if (window.Calendly) {
      init();
      return;
    }

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      if (window.Calendly) {
        window.clearInterval(interval);
        init();
      } else if (attempts > 150) {
        window.clearInterval(interval);
      }
    }, 100);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className={[styles.inlineHost, className].filter(Boolean).join(' ')}
      aria-label="Schedule a private 15-minute conversation with Dr. Jan Duffy"
    />
  );
}
