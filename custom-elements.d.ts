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

declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'agent-encoded-id'?: string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
    }, HTMLElement>;
  }
}

export {};