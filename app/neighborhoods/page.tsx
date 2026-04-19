import type { Metadata } from 'next';
import Page from '@/migration/pages-source/neighborhoods/index';

export const metadata: Metadata = {
  title: "Neighborhoods | Las Vegas 55+",
  description: "Neighborhoods near Sun City Summerlin.",
  alternates: { canonical: "/neighborhoods" },
};

export default function RoutePage() {
  return <Page />;
}
