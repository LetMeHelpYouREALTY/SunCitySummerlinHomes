import type { Metadata } from 'next';
import Page from '@/migration/pages-source/properties/index';

export const metadata: Metadata = {
  title: 'Properties | Sun City Summerlin',
  description:
    'Sample property profiles and live office listings for Sun City Summerlin 55+ homes. For current MLS inventory, use RealScout or call Dr. Jan Duffy.',
  alternates: { canonical: '/properties' },
};

export default function RoutePage() {
  return <Page />;
}
