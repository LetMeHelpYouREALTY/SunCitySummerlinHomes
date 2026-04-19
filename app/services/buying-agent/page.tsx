import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/buying-agent';

export const metadata: Metadata = {
  title: "Buying Agent | Dr. Jan Duffy",
  description: "Buyer representation in Sun City Summerlin.",
  alternates: { canonical: "/services/buying-agent" },
};

export default function RoutePage() {
  return <Page />;
}
