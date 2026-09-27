import type { Metadata } from 'next';
import Page from '@/migration/pages-source/amenities/index';
import AmenitiesStructuredData from '@/components/amenities/AmenitiesStructuredData';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';
import { SUN_CITY_SUMMERLIN } from '@/lib/community-config';
import { canonicalPath } from '@/lib/site-contact';

const title = `Nearby Amenities in ${SUN_CITY_SUMMERLIN.name}, Las Vegas`;
const description =
  `Interactive map of healthcare, golf, grocery, parks, and shopping near ${SUN_CITY_SUMMERLIN.name} — a 55+ community in northwest Las Vegas. Local FAQ and drive-time notes from Dr. Jan Duffy, REALTOR®.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/amenities' },
  openGraph: {
    title,
    description,
    url: canonicalPath('/amenities'),
    type: 'website',
  },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Amenities', path: '/amenities' })} />
      <AmenitiesStructuredData />
      <Page />
    </>
  );
}
