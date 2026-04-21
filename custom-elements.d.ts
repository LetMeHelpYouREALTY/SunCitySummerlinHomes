// This file is used to declare custom elements for TypeScript

type CalendlyBadgeOptions = {
  url: string;
  text: string;
  color: string;
  textColor: string;
  branding: boolean;
};

type CalendlyPopupOptions = {
  url: string;
};

type CalendlyInlineOptions = {
  url: string;
  parentElement: HTMLElement;
};

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: CalendlyBadgeOptions) => void;
      initPopupWidget: (options: CalendlyPopupOptions) => void;
      initInlineWidget: (options: CalendlyInlineOptions) => void;
    };
  }
}

export {};