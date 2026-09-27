import type { Metadata } from 'next';
import Page from '@/migration/pages-source/faq/index';
import JsonLdScript from '@/components/seo/JsonLdScript';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';
import { getAgentFaqPageJsonLd } from '@/lib/site-faq';

export const metadata: Metadata = {
  title: 'FAQ | Sun City Summerlin Real Estate | Dr. Jan Duffy',
  description:
    'Answers about buying, selling, and relocating in Sun City Summerlin and Las Vegas with Dr. Jan Duffy, REALTOR® and 55+ community specialist.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Sun City Summerlin Real Estate',
    description:
      'Common questions about Sun City Summerlin homes, showings, relocation, and working with Dr. Jan Duffy.',
    url: '/faq',
    images: [{ url: '/golf-course.jpg', width: 1200, height: 630, alt: 'Sun City Summerlin community' }],
  },
};

export default function FaqRoute() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'FAQ', path: '/faq' })} />
      <JsonLdScript id="faq-page-schema" data={getAgentFaqPageJsonLd()} />
      <Page />
    </>
  );
}
