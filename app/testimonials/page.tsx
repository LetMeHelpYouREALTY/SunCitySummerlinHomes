import type { Metadata } from 'next';
import Page from '@/migration/pages-source/testimonials/index';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Testimonials | Dr. Jan Duffy",
  description: "Client testimonials for Dr. Jan Duffy.",
  alternates: { canonical: "/testimonials" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Testimonials', path: '/testimonials' })} />
      <Page />
    </>
  );
}
