import type { Metadata } from 'next';
import Page from '@/migration/pages-source/blog/index';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Blog | Dr. Jan Duffy",
  description: "Real estate news and updates for Sun City Summerlin.",
  alternates: { canonical: "/blog" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Blog', path: '/blog' })} />
      <Page />
    </>
  );
}
