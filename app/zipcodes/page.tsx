import type { Metadata } from 'next';
import Page from '@/migration/pages-source/zipcodes/index';

export const metadata: Metadata = {
  title: "Las Vegas Zip Codes | Dr. Jan Duffy",
  description: "Las Vegas zip code directory.",
  alternates: { canonical: "/zipcodes" },
};

export default function RoutePage() {
  return <Page />;
}
