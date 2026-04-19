import type { Metadata } from 'next';
import Page from '@/migration/pages-source/index';

export const metadata: Metadata = {
  title: "Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy",
  description: "Sun City Summerlin is Las Vegas' premier 55+ community with stunning homes, golf courses, and amenities. Dr. Jan Duffy specializes in Sun City Summerlin real estate.",
  alternates: { canonical: "/" },
};

export default function RoutePage() {
  return <Page />;
}
