import type { Metadata } from 'next';
import Page from '@/migration/pages-source/map/index';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Community Map | Sun City Summerlin",
  description: "Explore the Sun City Summerlin community map.",
  alternates: { canonical: "/map" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Community Map', path: '/map' })} />
      <Page />
    </>
  );
}
