import type { Metadata } from 'next';
import MarketHubPage from '@/components/MarketHubPage';

export const metadata: Metadata = {
  title: 'Weekly Market Update | Dr. Jan Duffy',
  description:
    'Get a weekly Sun City Summerlin and Las Vegas market update with actionable guidance for current buyers and sellers.',
  alternates: { canonical: '/market-update' },
};

export default function MarketUpdatePage() {
  return (
    <MarketHubPage
      breadcrumbLabel="Weekly Market Update"
      eyebrow="Weekly Update"
      title="Las Vegas Weekly Market Update"
      summary="This weekly update highlights near-term shifts in inventory, buyer urgency, and negotiation conditions so you can adjust plans quickly and confidently."
      sections={[
        {
          title: 'What changed this week',
          text: 'Short-term shifts often appear first in showing activity and listing freshness. Weekly tracking helps you react before market headlines catch up.',
          bullets: [
            'Watch for clusters of price improvements in your target neighborhoods.',
            'Monitor active-to-pending conversion speed for key inventory tiers.',
            'Track open-house and showing traffic signals for near-term demand.',
          ],
        },
        {
          title: 'For buyers this week',
          text: 'Buyers can improve outcomes by combining speed with discipline and by staying focused on homes aligned to long-term needs.',
          bullets: [
            'Set offer guardrails in advance to avoid reactive bidding decisions.',
            'Revisit financing terms weekly to preserve buying power.',
            'Prioritize homes with strong fundamentals over cosmetic novelty.',
          ],
        },
        {
          title: 'For sellers this week',
          text: 'Weekly performance data can guide smart adjustments that improve visibility and offer quality without sacrificing strategy.',
          bullets: [
            'Evaluate days-on-market against neighborhood baselines, not assumptions.',
            'Refresh photo order and headline features if showing pace slows.',
            'Coordinate price and presentation updates together for strongest impact.',
          ],
        },
        {
          title: 'Execution checklist',
          text: 'Treat each week as a decision window. Clear next steps keep momentum and reduce uncertainty on both sides of a transaction.',
          bullets: [
            'Buyers: pre-approve, shortlist, and tour with decision criteria ready.',
            'Sellers: review feedback cadence and confirm launch strategy alignment.',
            'Both: schedule a local strategy call when market conditions change.',
          ],
        },
      ]}
    />
  );
}
