import type { Metadata } from 'next';
import Page from '@/migration/pages-source/amenities/index';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Amenities | Sun City Summerlin",
  description: "Community amenities in Sun City Summerlin.",
  alternates: { canonical: "/amenities" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Amenities', path: '/amenities' })} />
      <Page />
    </>
  );
}
