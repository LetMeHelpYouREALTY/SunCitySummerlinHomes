import type { Metadata } from 'next';
import ZipcodePage from '@/migration/pages-source/zipcodes/[zipcode]';
import { ZIP_CODE_SLUGS, getZipcodePageData } from '@/lib/zipcodes-data';
import { canonicalPath } from '@/lib/site-contact';

export function generateStaticParams() {
  return ZIP_CODE_SLUGS.map((zipcode) => ({ zipcode }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zipcode: string }>;
}): Promise<Metadata> {
  const { zipcode } = await params;
  const { zipcodeData } = getZipcodePageData(zipcode);
  return {
    title: `${zipcodeData.area} (${zipcodeData.code}) | Las Vegas Real Estate | Dr. Jan Duffy`,
    description: `Explore homes for sale in ${zipcodeData.area} (${zipcodeData.code}). ${zipcodeData.description} Contact Dr. Jan Duffy for expert real estate guidance in Las Vegas.`,
    alternates: { canonical: `/zipcodes/${zipcodeData.code}` },
    openGraph: {
      title: `${zipcodeData.area} (${zipcodeData.code}) | Las Vegas Real Estate`,
      description: `${zipcodeData.description} Find your dream home in ${zipcodeData.area} with Dr. Jan Duffy.`,
      url: canonicalPath(`/zipcodes/${zipcodeData.code}`),
    },
  };
}

export default async function ZipcodeRoute({ params }: { params: Promise<{ zipcode: string }> }) {
  const { zipcode } = await params;
  const data = getZipcodePageData(zipcode);
  return <ZipcodePage {...data} />;
}
