import type { Metadata } from 'next';
import Page from '@/migration/pages-source/index';
import JsonLdScript from '@/components/seo/JsonLdScript';
import { getFaqPageJsonLd } from '@/lib/site-faq';

export const metadata: Metadata = {
  title: "Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy",
  description:
    "Sun City Summerlin is Las Vegas' premier 55+ community with golf, recreation, and homes. Dr. Jan Duffy specializes in Sun City Summerlin real estate.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy",
    description:
      "Explore Sun City Summerlin homes, golf, and amenities with Dr. Jan Duffy, your Las Vegas 55+ community specialist.",
    url: "/",
    images: [{ url: "/golf-course.jpg", width: 1200, height: 630, alt: "Sun City Summerlin community" }],
  },
};

export default function RoutePage() {
  return (
    <>
      <JsonLdScript id="home-faq-schema" data={getFaqPageJsonLd()} />
      <Page />
    </>
  );
}
