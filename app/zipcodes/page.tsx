import type { Metadata } from 'next';
import Page from '@/migration/pages-source/zipcodes/index';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Las Vegas Zip Codes | Dr. Jan Duffy",
  description: "Las Vegas zip code directory.",
  alternates: { canonical: "/zipcodes" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Zip Codes', path: '/zipcodes' })} />
      <Page />
    </>
  );
}
