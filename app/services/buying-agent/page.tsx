import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/buying-agent';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Buying Agent | Dr. Jan Duffy",
  description: "Buyer representation in Sun City Summerlin.",
  alternates: { canonical: "/services/buying-agent" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Services', path: '/services' }, { name: 'Buying Agent', path: '/services/buying-agent' })} />
      <Page />
    </>
  );
}
