import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Market Strategy Guide | Sun City Summerlin',
  description:
    'Use this market strategy guide to align your buying or selling decisions with current Sun City Summerlin and Las Vegas market conditions.',
  alternates: { canonical: '/guides/market-strategy' },
};

export default function MarketStrategyGuidePage() {
  return (
    <GuidePage
      path="/guides/market-strategy"
      title="Market Strategy Guide"
      summary="This guide helps you convert weekly and monthly market signals into practical buying or selling moves, with less guesswork and better timing decisions."
      sections={[
        {
          title: 'Read the right signals',
          body: 'Not all market stats are equally useful. Prioritize local data that affects immediate transaction leverage.',
          bullets: [
            'Track active-to-pending speed in your exact price segment.',
            'Monitor price adjustments to identify softening or momentum shifts.',
            'Review weekly supply trends against seasonal demand patterns.',
          ],
        },
        {
          title: 'Turn data into action',
          body: 'Your strategy should define what to do when specific market thresholds are met.',
          bullets: [
            'Buyers: define offer pace triggers before touring begins.',
            'Sellers: set go-live and adjustment rules before listing launch.',
            'Both: use recurring market check-ins to keep plans current.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Should I wait for a better market window?',
          answer:
            'Waiting can help in some situations, but only when tied to clear triggers and your personal timeline. A defined strategy outperforms open-ended waiting.',
        },
        {
          question: 'Which market data matters most for my decision?',
          answer:
            'Focus on local inventory velocity, comparable sales cadence, and segment-specific pricing behavior. These are usually more predictive than broad headlines.',
        },
      ]}
    />
  );
}
