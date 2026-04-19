import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/index';

export const metadata: Metadata = {
  title: "Real Estate Services | Dr. Jan Duffy",
  description: "Buying, selling, and relocation services.",
  alternates: { canonical: "/services" },
};

export default function RoutePage() {
  return <Page />;
}
