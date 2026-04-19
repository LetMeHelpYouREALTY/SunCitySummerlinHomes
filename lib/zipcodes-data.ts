/** Static zip code content (was getStaticProps in Pages Router). */

export interface ZipcodeData {
  code: string;
  area: string;
  description: string;
  neighborhoods: string[];
  featuredText?: string;
  demographics?: {
    population?: string;
    medianAge?: string;
    medianIncome?: string;
    homeOwnership?: string;
  };
  amenities?: string[];
  schools?: { name: string; type: string; rating?: string }[];
}

export const ZIP_CODE_SLUGS = [
  '89134',
  '89135',
  '89144',
  '89138',
  '89145',
  '89148',
  '89117',
  '89128',
  '89129',
  '89149',
  '89130',
  '89131',
] as const;

const allZipcodeData: ZipcodeData[] = [
  {
    code: '89134',
    area: 'Sun City Summerlin',
    description:
      'Premier 55+ community with golf courses, recreation centers, and luxury single-story homes.',
    neighborhoods: ['Sun City', 'The Arbors', 'Eagle Hills'],
    featuredText:
      "Sun City Summerlin is Las Vegas' premier 55+ active adult community, offering resort-style living with three championship golf courses, four recreation centers, and a variety of social clubs. This master-planned community features luxury single-story homes with stunning views of the Las Vegas valley and surrounding mountains.",
    demographics: {
      population: '13,500+',
      medianAge: '68',
      medianIncome: '$72,000',
      homeOwnership: '87%',
    },
    amenities: [
      'Three championship golf courses',
      'Four recreation centers with pools',
      'Tennis and pickleball courts',
      'Fitness centers and walking trails',
      'On-site shopping and dining',
      'Multiple community centers',
      'Arts and crafts studios',
      'Over 80 social clubs and activities',
    ],
    schools: [
      { name: 'Lummis Elementary School', type: 'Public K-5', rating: '8/10' },
      { name: 'Becker Middle School', type: 'Public 6-8', rating: '7/10' },
      { name: 'Palo Verde High School', type: 'Public 9-12', rating: '8/10' },
      { name: 'Faith Lutheran Academy', type: 'Private K-12', rating: '9/10' },
    ],
  },
  {
    code: '89135',
    area: 'Summerlin South',
    description: 'Upscale master-planned community with parks, trails, and access to Red Rock Canyon.',
    neighborhoods: ['The Ridges', 'The Trails', 'Red Rock Country Club'],
    demographics: {
      population: '24,500+',
      medianAge: '42',
      medianIncome: '$125,000',
      homeOwnership: '72%',
    },
  },
  {
    code: '89144',
    area: 'Summerlin North',
    description: 'Family-friendly area with top schools, shopping centers, and outdoor recreation options.',
    neighborhoods: ['Tournament Hills', 'The Canyons', 'The Gardens'],
  },
  {
    code: '89138',
    area: 'Summerlin West',
    description: 'Newer development with modern homes, community parks, and desert landscape views.',
    neighborhoods: ['Reverence', 'Stonebridge', 'The Paseos'],
  },
  {
    code: '89145',
    area: 'The Lakes',
    description: 'Established community centered around man-made lakes with waterfront properties.',
    neighborhoods: ['The Lakes', 'Section 10', 'Peccole Ranch'],
  },
  {
    code: '89148',
    area: 'Spring Valley',
    description: 'Diverse suburban area with a mix of housing options and convenient amenities.',
    neighborhoods: ['Rhodes Ranch', 'Spanish Trail', 'Chinatown'],
  },
  {
    code: '89117',
    area: 'Canyon Gate',
    description: 'Gated communities with golf courses and luxury homes near the Summerlin area.',
    neighborhoods: ['Canyon Gate', 'Peccole Ranch', 'The Lakes'],
  },
  {
    code: '89128',
    area: 'Centennial Hills',
    description: 'Growing northwest area with new developments and mountain views.',
    neighborhoods: ['Lone Mountain', 'Desert Shores', 'Painted Desert'],
  },
  {
    code: '89129',
    area: 'Centennial Hills North',
    description:
      'Family-oriented neighborhoods with parks and community centers in northwest Las Vegas.',
    neighborhoods: ['Providence', 'Skye Canyon', 'Elkhorn Springs'],
  },
  {
    code: '89149',
    area: 'Centennial Hills West',
    description: 'Expanding area with newer homes and natural desert landscape.',
    neighborhoods: ['Skye Canyon', 'Iron Mountain Ranch', 'Elkhorn'],
  },
  {
    code: '89130',
    area: 'North Las Vegas',
    description: 'Affordable housing options with easy access to the Las Vegas Strip and downtown.',
    neighborhoods: ['Aliante', 'El Dorado', 'Aliante Golf Club'],
  },
  {
    code: '89131',
    area: 'North Las Vegas North',
    description: 'Growing suburban area with new master-planned communities and amenities.',
    neighborhoods: ['Aliante', 'Tule Springs', 'Shadow Creek'],
  },
];

export function getZipcodePageData(zipcode: string): {
  zipcodeData: ZipcodeData;
  nearbyZipcodes: ZipcodeData[];
} {
  const zipcodeData =
    allZipcodeData.find((z) => z.code === zipcode) ??
    ({
      code: zipcode,
      area: 'Las Vegas Area',
      description: 'Explore this Las Vegas neighborhood and find your dream home.',
      neighborhoods: ['Contact for more information'],
    } satisfies ZipcodeData);

  const nearbyZipcodes = allZipcodeData.filter((z) => z.code !== zipcode).slice(0, 3);

  return { zipcodeData, nearbyZipcodes };
}
