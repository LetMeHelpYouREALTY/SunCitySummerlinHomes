'use client';

import { useEffect, useMemo, useRef } from 'react';
import { mountRealScoutElement, whenRealScoutReady } from '@/lib/realscout-mount';

type RealScoutWidgetHostProps = {
  tagName: string;
  attributes: Record<string, string>;
  className?: string;
};

/**
 * Mounts a RealScout custom element once after the global script fires
 * `realscout-web-components-ready`. Do not render the tag in JSX or via
 * render-time innerHTML — React reconciliation can destroy upgraded widgets.
 */
export default function RealScoutWidgetHost({
  tagName,
  attributes,
  className = 'realscout-widget-host',
}: RealScoutWidgetHostProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const attributeKey = useMemo(() => JSON.stringify(attributes), [attributes]);
  const tagRef = useRef(tagName);
  tagRef.current = tagName;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const parsedAttributes = JSON.parse(attributeKey) as Record<string, string>;
    const mount = () => {
      if (!hostRef.current) return;
      mountRealScoutElement(hostRef.current, tagRef.current, parsedAttributes);
    };

    return whenRealScoutReady(mount);
  }, [attributeKey]);

  return <div ref={hostRef} className={className} suppressHydrationWarning />;
}
