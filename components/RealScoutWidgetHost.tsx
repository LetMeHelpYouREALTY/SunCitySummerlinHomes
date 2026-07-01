'use client';

type RealScoutWidgetHostProps = {
  tagName: string;
  attributes: Record<string, string>;
  className?: string;
};

/**
 * Placeholder host for the global RealScout bootstrap in app/layout.tsx.
 * Mount runs outside React (after realscout-web-components-ready) so hydration
 * and PageTransition re-renders cannot leave an empty host on production.
 */
export default function RealScoutWidgetHost({
  tagName,
  attributes,
  className = 'realscout-widget-host',
}: RealScoutWidgetHostProps) {
  return (
    <div
      className={className}
      data-realscout-tag={tagName}
      data-realscout-attrs={JSON.stringify(attributes)}
      suppressHydrationWarning
    />
  );
}
