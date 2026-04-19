import type { Metadata } from 'next';
import Page from '@/migration/pages-source/community/index';

export const metadata: Metadata = {
  title: "Sun City Summerlin Community",
  description: "Learn about the Sun City Summerlin 55+ community.",
  alternates: { canonical: "/community" },
};

export default function RoutePage() {
  return <Page />;
}
