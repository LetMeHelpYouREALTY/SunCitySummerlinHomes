import type { Metadata } from 'next';
import Page from '@/migration/pages-source/map/index';

export const metadata: Metadata = {
  title: "Community Map | Sun City Summerlin",
  description: "Explore the Sun City Summerlin community map.",
  alternates: { canonical: "/map" },
};

export default function RoutePage() {
  return <Page />;
}
