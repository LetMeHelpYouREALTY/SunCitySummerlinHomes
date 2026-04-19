import type { Metadata } from 'next';
import Page from '@/migration/pages-source/search/index';

export const metadata: Metadata = {
  title: "Search Homes | Sun City Summerlin",
  description: "Search Sun City Summerlin homes for sale.",
  alternates: { canonical: "/search" },
};

export default function RoutePage() {
  return <Page />;
}
