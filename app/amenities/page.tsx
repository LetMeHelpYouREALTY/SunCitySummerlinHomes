import type { Metadata } from 'next';
import Page from '@/migration/pages-source/amenities/index';

export const metadata: Metadata = {
  title: "Amenities | Sun City Summerlin",
  description: "Community amenities in Sun City Summerlin.",
  alternates: { canonical: "/amenities" },
};

export default function RoutePage() {
  return <Page />;
}
