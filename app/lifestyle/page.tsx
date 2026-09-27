import type { Metadata } from 'next';
import Page from '@/migration/pages-source/lifestyle/index';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Lifestyle | Sun City Summerlin",
  description: "Active adult lifestyle in Sun City Summerlin.",
  alternates: { canonical: "/lifestyle" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Lifestyle', path: '/lifestyle' })} />
      <Page />
    </>
  );
}
