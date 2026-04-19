import type { Metadata } from 'next';
import Page from '@/migration/pages-source/properties/index';

export const metadata: Metadata = {
  title: "Properties | Sun City Summerlin",
  description: "Browse homes for sale in Sun City Summerlin.",
  alternates: { canonical: "/properties" },
};

export default function RoutePage() {
  return <Page />;
}
