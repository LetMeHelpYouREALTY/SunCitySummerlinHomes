import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/offerings';

export const metadata: Metadata = {
  title: "Service Offerings | Dr. Jan Duffy",
  description: "Real estate service offerings.",
  alternates: { canonical: "/services/offerings" },
};

export default function RoutePage() {
  return <Page />;
}
