import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/selling-agent';

export const metadata: Metadata = {
  title: "Selling Agent | Dr. Jan Duffy",
  description: "Listing and selling homes in Sun City Summerlin.",
  alternates: { canonical: "/services/selling-agent" },
};

export default function RoutePage() {
  return <Page />;
}
