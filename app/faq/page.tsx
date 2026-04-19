import type { Metadata } from 'next';
import Page from '@/migration/pages-source/faq/index';

export const metadata: Metadata = {
  title: 'FAQ | Dr. Jan Duffy | Sun City Summerlin',
  description: 'Frequently asked questions about buying, selling, and relocating in Sun City Summerlin and Las Vegas.',
  alternates: { canonical: '/faq' },
};

export default function FaqRoute() {
  return <Page />;
}
