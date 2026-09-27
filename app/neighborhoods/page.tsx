import type { Metadata } from 'next';
import Page from '@/migration/pages-source/neighborhoods/index';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Neighborhoods | Las Vegas 55+",
  description: "Neighborhoods near Sun City Summerlin.",
  alternates: { canonical: "/neighborhoods" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Neighborhoods', path: '/neighborhoods' })} />
      <Page />
    </>
  );
}
