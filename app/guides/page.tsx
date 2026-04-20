import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Real Estate Guides | Sun City Summerlin',
  description:
    'Explore buyer, seller, relocation, and market strategy guides for Sun City Summerlin and Las Vegas real estate decisions.',
  alternates: { canonical: '/guides' },
};

export default function GuidesHubPage() {
  return (
    <GuidePage
      path="/guides"
      title="Sun City Summerlin Real Estate Guides"
      summary="This guide hub helps buyers, sellers, and relocators move through each stage of a real estate decision with a practical, locally-informed process."
      sections={[
        {
          title: 'How to use this guide hub',
          body: 'Choose the path that best matches your immediate goal. Each guide is structured as an action-first checklist, not generic advice.',
          bullets: [
            'Start with your highest-priority decision in the next 30-60 days.',
            'Use the linked pages to build a complete plan, not isolated tasks.',
            'Schedule a strategy call when your timeline becomes specific.',
            'Use the buyer/seller/relocation paths in order when handling multiple goals.',
          ],
        },
        {
          title: 'Why this framework works',
          body: 'This framework mirrors the strongest reusable pattern from turnberryplaceforsale.com: strong internal linking, contextual FAQs, and clear navigation between related decisions.',
          bullets: [
            'Related guides reduce missed steps between planning and execution.',
            'FAQ sections answer high-intent questions at the right moment.',
            'Breadcrumbs improve navigation clarity for users and crawlers.',
            'Route-to-route internal linking improves topical authority sitewide.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Which guide should I start with?',
          answer:
            'Start with Buyers if you are actively searching, Sellers if you are preparing to list, Relocation if moving from another market, and Market Strategy if you need timing and leverage guidance.',
        },
        {
          question: 'Are these guides specific to Sun City Summerlin?',
          answer:
            'Yes. The recommendations are written for Sun City Summerlin and nearby Las Vegas areas, with practical considerations for 55+ communities and local buying/selling patterns.',
        },
      ]}
    />
  );
}
