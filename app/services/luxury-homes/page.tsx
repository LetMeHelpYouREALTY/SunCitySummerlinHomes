import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/luxury-homes';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Luxury Homes | Dr. Jan Duffy",
  description: "Luxury homes in Las Vegas and Summerlin.",
  alternates: { canonical: "/services/luxury-homes" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Services', path: '/services' }, { name: 'Luxury Homes', path: '/services/luxury-homes' })} />
      <Page />
    </>
  );
}
