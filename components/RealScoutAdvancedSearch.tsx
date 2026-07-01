'use client';

import RealScoutWidgetHost from '@/components/RealScoutWidgetHost';
import { realScoutAgentEncodedId } from '@/lib/realscout-config';

export default function RealScoutAdvancedSearch() {
  return (
    <RealScoutWidgetHost
      tagName="realscout-advanced-search"
      attributes={{ 'agent-encoded-id': realScoutAgentEncodedId }}
    />
  );
}
