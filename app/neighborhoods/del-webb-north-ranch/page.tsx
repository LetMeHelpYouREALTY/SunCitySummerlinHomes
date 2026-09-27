import type { Metadata } from 'next';
import Page from '@/migration/pages-source/neighborhoods/del-webb-north-ranch';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Del Webb North Ranch | Neighborhood",
  description: "Del Webb North Ranch area information.",
  alternates: { canonical: "/neighborhoods/del-webb-north-ranch" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Neighborhoods', path: '/neighborhoods' }, { name: 'Del Webb North Ranch', path: '/neighborhoods/del-webb-north-ranch' })} />
      <Page />
    </>
  );
}
