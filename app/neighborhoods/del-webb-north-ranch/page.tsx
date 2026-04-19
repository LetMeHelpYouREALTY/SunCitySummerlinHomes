import type { Metadata } from 'next';
import Page from '@/migration/pages-source/neighborhoods/del-webb-north-ranch';

export const metadata: Metadata = {
  title: "Del Webb North Ranch | Neighborhood",
  description: "Del Webb North Ranch area information.",
  alternates: { canonical: "/neighborhoods/del-webb-north-ranch" },
};

export default function RoutePage() {
  return <Page />;
}
