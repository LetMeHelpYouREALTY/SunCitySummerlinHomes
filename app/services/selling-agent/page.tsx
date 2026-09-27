import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/selling-agent';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Selling Agent | Dr. Jan Duffy",
  description: "Listing and selling homes in Sun City Summerlin.",
  alternates: { canonical: "/services/selling-agent" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Services', path: '/services' }, { name: 'Selling Agent', path: '/services/selling-agent' })} />
      <Page />
    </>
  );
}
