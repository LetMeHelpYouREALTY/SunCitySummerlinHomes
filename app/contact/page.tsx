import type { Metadata } from 'next';
import Page from '@/migration/pages-source/contact/index';

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy",
  description: "Contact Dr. Jan Duffy for Sun City Summerlin real estate.",
  alternates: { canonical: "/contact" },
};

export default function RoutePage() {
  return <Page />;
}
