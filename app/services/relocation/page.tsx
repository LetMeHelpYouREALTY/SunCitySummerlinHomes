import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/relocation';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Relocation | Dr. Jan Duffy",
  description: "Relocation help to Las Vegas and Sun City Summerlin.",
  alternates: { canonical: "/services/relocation" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Services', path: '/services' }, { name: 'Relocation', path: '/services/relocation' })} />
      <Page />
    </>
  );
}
