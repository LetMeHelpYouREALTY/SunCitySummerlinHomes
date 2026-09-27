import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/offerings';
import JsonLdBreadcrumbs, { breadcrumbTrail } from '@/components/seo/JsonLdBreadcrumbs';

export const metadata: Metadata = {
  title: "Service Offerings | Dr. Jan Duffy",
  description: "Real estate service offerings.",
  alternates: { canonical: "/services/offerings" },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdBreadcrumbs items={breadcrumbTrail({ name: 'Services', path: '/services' }, { name: 'Offerings', path: '/services/offerings' })} />
      <Page />
    </>
  );
}
