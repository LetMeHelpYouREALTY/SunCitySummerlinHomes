import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Relocation Guide | Sun City Summerlin',
  description:
    'Plan your move to Sun City Summerlin with this relocation guide covering timing, area selection, and practical transition steps.',
  alternates: { canonical: '/guides/relocation' },
};

export default function RelocationGuidePage() {
  return (
    <GuidePage
      path="/guides/relocation"
      title="Relocation Guide for Sun City Summerlin"
      summary="This relocation guide is designed to reduce uncertainty and help you move into Sun City Summerlin with a clear timeline, neighborhood fit strategy, and transaction plan."
      sections={[
        {
          title: 'Build a staged timeline',
          body: 'Successful relocations are sequenced. Break your move into planning, scouting, contracting, and transition stages.',
          bullets: [
            'Set your move target date and identify hard deadline constraints.',
            'Coordinate financing and sale plans before active house hunting.',
            'Schedule neighborhood scouting with a shortlist, not a broad sweep.',
          ],
        },
        {
          title: 'Choose area fit deliberately',
          body: 'Area fit is more than home specs. Daily convenience and community alignment matter long after closing.',
          bullets: [
            'Compare amenity access, travel patterns, and lifestyle priorities.',
            'Balance purchase budget with total monthly carrying cost.',
            'Use zip code and neighborhood guides to narrow options efficiently.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'When should I start planning a relocation move?',
          answer:
            'Start planning at least 60-90 days before your preferred move date. Early planning improves financing options, inventory match quality, and coordination with any concurrent sale.',
        },
        {
          question: 'How do I avoid choosing the wrong neighborhood?',
          answer:
            'Define your top lifestyle priorities first, then compare neighborhoods against those criteria during focused tours. This avoids decisions based only on listing photos.',
        },
      ]}
    />
  );
}
