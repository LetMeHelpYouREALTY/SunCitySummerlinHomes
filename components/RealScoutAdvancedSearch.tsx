'use client';

import { realScoutAgentEncodedId } from '@/lib/realscout-config';

/**
 * MLS advanced search widget — innerHTML mount avoids React/custom-element conflicts.
 */
export default function RealScoutAdvancedSearch() {
  const html = `<realscout-advanced-search agent-encoded-id="${realScoutAgentEncodedId}"></realscout-advanced-search>`;

  return (
    <div
      className="realscout-widget-host"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
