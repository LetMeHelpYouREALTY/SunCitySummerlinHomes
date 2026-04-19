import type { Metadata } from 'next';
import Page from '@/migration/pages-source/about/index';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Sun City Summerlin REALTOR® | Las Vegas 55+',
  description:
    'Meet Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties—Sun City Summerlin 55+ community specialist, Nevada license, hours, and contact.',
  alternates: { canonical: '/about' },
};

export default function AboutRoute() {
  return <Page />;
}
