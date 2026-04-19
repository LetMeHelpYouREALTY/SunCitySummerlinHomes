import type { Metadata } from 'next';
import Page from '@/migration/pages-source/lifestyle/index';

export const metadata: Metadata = {
  title: "Lifestyle | Sun City Summerlin",
  description: "Active adult lifestyle in Sun City Summerlin.",
  alternates: { canonical: "/lifestyle" },
};

export default function RoutePage() {
  return <Page />;
}
