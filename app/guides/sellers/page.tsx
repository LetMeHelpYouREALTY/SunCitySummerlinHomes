import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Seller Guide | Sun City Summerlin',
  description:
    'Use this seller guide for Sun City Summerlin to align pricing, preparation, and launch strategy with current local buyer behavior.',
  alternates: { canonical: '/guides/sellers' },
};

export default function SellerGuidePage() {
  return (
    <GuidePage
      path="/guides/sellers"
      title="Seller Guide for Sun City Summerlin"
      summary="This seller guide helps you plan a stronger listing launch by aligning prep, pricing, and negotiation strategy with today’s local market conditions."
      sections={[
        {
          title: 'Position before pricing',
          body: 'Great listing outcomes begin with positioning. Buyers compare condition, usability, and value signals instantly.',
          bullets: [
            'Prioritize improvements that directly affect perceived value and speed.',
            'Build your feature narrative around lifestyle and functionality.',
            'Stage launch assets to tell a clear, buyer-focused story.',
          ],
        },
        {
          title: 'Price with local precision',
          body: 'Pricing should reflect current neighborhood pace, not historical highs or broad metro averages.',
          bullets: [
            'Use recent sold and pending comparables from the same micro-area.',
            'Model multiple pricing scenarios based on days-on-market goals.',
            'Pre-plan response thresholds for early feedback and offer quality.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How do I know if my asking price is realistic?',
          answer:
            'A realistic ask is supported by recent local comparables, current listing competition, and your target time-to-contract window. A data-backed range is stronger than a single aspirational number.',
        },
        {
          question: 'What should I do if activity is slow after launch?',
          answer:
            'Reassess listing positioning, photo order, and pricing together. Coordinated adjustments usually outperform isolated changes.',
        },
      ]}
    />
  );
}
