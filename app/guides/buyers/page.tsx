import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Buyer Guide | Sun City Summerlin',
  description:
    'Use this Sun City Summerlin buyer guide to plan financing, identify fit, and execute offers with stronger local strategy.',
  alternates: { canonical: '/guides/buyers' },
};

export default function BuyerGuidePage() {
  return (
    <GuidePage
      path="/guides/buyers"
      title="Buyer Guide for Sun City Summerlin"
      summary="Use this guide to move from broad searching to confident offer execution with clear criteria, neighborhood fit checks, and financing readiness."
      sections={[
        {
          title: 'Define fit before touring',
          body: 'Clarity before showings helps you decide faster and avoid decision fatigue.',
          bullets: [
            'Prioritize must-haves: layout, accessibility, HOA profile, amenities.',
            'Set your payment comfort zone before viewing premium options.',
            'Shortlist neighborhoods that match day-to-day lifestyle needs.',
          ],
        },
        {
          title: 'Tour and evaluate efficiently',
          body: 'Use a repeatable scoring framework for each property you view.',
          bullets: [
            'Compare condition, floor plan efficiency, and location trade-offs.',
            'Track value against most recent neighborhood comparables.',
            'Separate cosmetic upgrades from structural value contributors.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How quickly should I make an offer?',
          answer:
            'Move quickly when a home matches your predefined criteria and pricing context. A prepared strategy is faster and safer than reactive urgency.',
        },
        {
          question: 'What should I evaluate beyond price?',
          answer:
            'Include HOA structure, monthly carrying costs, floor plan utility, neighborhood convenience, and future resale positioning in your decision framework.',
        },
      ]}
    />
  );
}
