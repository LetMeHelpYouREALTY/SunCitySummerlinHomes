import type { Metadata } from 'next';
import MarketHubPage from '@/components/MarketHubPage';

export const metadata: Metadata = {
  title: 'Las Vegas Market Insights | Dr. Jan Duffy',
  description:
    'Read strategic market insights for Sun City Summerlin and Las Vegas real estate, including local demand shifts, inventory patterns, and buyer-seller opportunities.',
  alternates: { canonical: '/market-insights' },
};

export default function MarketInsightsPage() {
  return (
    <MarketHubPage
      breadcrumbLabel="Market Insights"
      eyebrow="Market Intelligence"
      title="Las Vegas Real Estate Market Insights"
      summary="This page brings together the highest-impact market themes influencing Sun City Summerlin and nearby Las Vegas communities so you can make better real estate decisions with confidence."
      sections={[
        {
          title: 'Demand and inventory direction',
          text: 'Market momentum is shaped by the balance between active inventory and serious buyer demand. Neighborhood-level trends matter more than broad city headlines.',
          bullets: [
            'Track weekly listing velocity in your target area before writing offers.',
            'Compare new listings versus pending activity to judge negotiating leverage.',
            'Focus on homes that align with long-term livability, not just short-term timing.',
          ],
        },
        {
          title: 'Relocation and local lifestyle fit',
          text: 'Relocation buyers continue to prioritize tax efficiency, low-maintenance homes, and access to amenities. In 55+ segments, daily lifestyle fit often drives final purchase decisions.',
          bullets: [
            'Prioritize single-story inventory and lock-and-leave convenience when needed.',
            'Evaluate proximity to golf, clubs, medical care, and shopping corridors.',
            'Use neighborhood-level tours to validate quality-of-life assumptions.',
          ],
        },
        {
          title: 'Sellers: positioning strategy',
          text: 'Sellers can still win strong outcomes when pricing, presentation, and launch timing are aligned with current buyer behavior.',
          bullets: [
            'Set list pricing from current comparable pace, not older peak assumptions.',
            'Use visual prep and clear feature messaging to reduce days on market.',
            'Plan an offer-review strategy before go-live to handle early traction.',
          ],
        },
        {
          title: 'Buyers: decision framework',
          text: 'The best buyer outcomes come from combining fast execution with disciplined evaluation of value, monthly cost, and neighborhood fit.',
          bullets: [
            'Define your must-have list before touring to move faster on the right home.',
            'Model total payment scenarios with taxes, insurance, and HOA before offer.',
            'Use inspection and contingency strategy that protects you without slowing momentum.',
          ],
        },
      ]}
    />
  );
}
