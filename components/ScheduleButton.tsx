'use client';

import { CALENDLY_EVENT_URL } from '@/lib/calendly-config';
import type { ButtonHTMLAttributes, MouseEvent } from 'react';

const POPUP_RETRY_MS = 120;
const POPUP_RETRY_CAP = 120;

export function openCalendlyPopup(): void {
  if (typeof window === 'undefined') return;

  const run = () => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_EVENT_URL });
  };

  if (window.Calendly) {
    run();
    return;
  }

  let attempts = 0;
  const id = window.setInterval(() => {
    attempts += 1;
    if (window.Calendly) {
      window.clearInterval(id);
      run();
    } else if (attempts >= POPUP_RETRY_CAP) {
      window.clearInterval(id);
      window.open(CALENDLY_EVENT_URL, '_blank', 'noopener,noreferrer');
    }
  }, POPUP_RETRY_MS);
}

type ScheduleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export default function ScheduleButton({
  children = 'Schedule time with me',
  onClick,
  type = 'button',
  ...rest
}: ScheduleButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (!e.defaultPrevented) {
      openCalendlyPopup();
    }
  };

  return (
    <button type={type} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}
