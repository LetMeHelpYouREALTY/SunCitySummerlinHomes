'use client';

import { CALENDLY_EVENT_URL } from '@/lib/calendly-config';
import { forwardRef, type ButtonHTMLAttributes, type MouseEvent } from 'react';

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

export type ScheduleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const ScheduleButton = forwardRef<HTMLButtonElement, ScheduleButtonProps>(
  function ScheduleButton(
    { children = 'Schedule time with me', onClick, type = 'button', ...rest },
    ref,
  ) {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        openCalendlyPopup();
      }
    };

    return (
      <button ref={ref} type={type} onClick={handleClick} {...rest}>
        {children}
      </button>
    );
  },
);

ScheduleButton.displayName = 'ScheduleButton';

export default ScheduleButton;
