import type { Metadata } from 'next';
import Page from '@/migration/pages-source/service-area/index';

export const metadata: Metadata = {
  title: 'Service Area | Las Vegas & Sun City Summerlin 55+ Real Estate | Dr. Jan Duffy',
  description:
    'Las Vegas Valley and Sun City Summerlin 55+ real estate service area—zip codes, neighborhoods, map, and how to reach Dr. Jan Duffy for local expertise.',
  alternates: { canonical: '/service-area' },
};

export default function ServiceAreaRoute() {
  return <Page />;
}
