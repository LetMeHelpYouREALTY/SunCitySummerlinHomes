import type { ReactNode } from 'react';
import { realScoutHomeSearchUrl } from '@/lib/realscout-config';

type RealScoutHomeSearchLinkProps = {
  className?: string;
  children?: ReactNode;
};

/**
 * External link to the agent’s RealScout home search (primary listing conversion).
 * Default label is plain language; pass children for footer-specific wording.
 */
export default function RealScoutHomeSearchLink({
  className,
  children = 'Search homes on RealScout',
}: RealScoutHomeSearchLinkProps) {
  return (
    <a href={realScoutHomeSearchUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
