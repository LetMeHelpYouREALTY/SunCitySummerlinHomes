import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
          'sort-order'?: string;
          'listing-status'?: string;
          'property-types'?: string;
          'price-min'?: string;
          'price-max'?: string;
        },
        HTMLElement
      >;
      'realscout-advanced-search': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
