import type { Metadata } from 'next';
import Page from '@/migration/pages-source/services/luxury-homes';

export const metadata: Metadata = {
  title: "Luxury Homes | Dr. Jan Duffy",
  description: "Luxury homes in Las Vegas and Summerlin.",
  alternates: { canonical: "/services/luxury-homes" },
};

export default function RoutePage() {
  return <Page />;
}
