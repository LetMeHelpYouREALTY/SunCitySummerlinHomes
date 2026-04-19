import fs from 'fs';
import path from 'path';

const root = process.cwd();

const routes = [
  { dir: 'app', file: 'page.tsx', importPath: '@/migration/pages-source/index', title: 'Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy', desc: "Sun City Summerlin is Las Vegas' premier 55+ community with stunning homes, golf courses, and amenities. Dr. Jan Duffy specializes in Sun City Summerlin real estate.", canonical: '/' },
  { dir: 'app/amenities', importPath: '@/migration/pages-source/amenities/index', title: 'Amenities | Sun City Summerlin', desc: 'Community amenities in Sun City Summerlin.', canonical: '/amenities' },
  { dir: 'app/blog', importPath: '@/migration/pages-source/blog/index', title: 'Blog | Dr. Jan Duffy', desc: 'Real estate news and updates for Sun City Summerlin.', canonical: '/blog' },
  { dir: 'app/community', importPath: '@/migration/pages-source/community/index', title: 'Sun City Summerlin Community', desc: 'Learn about the Sun City Summerlin 55+ community.', canonical: '/community' },
  { dir: 'app/contact', importPath: '@/migration/pages-source/contact/index', title: 'Contact Dr. Jan Duffy', desc: 'Contact Dr. Jan Duffy for Sun City Summerlin real estate.', canonical: '/contact' },
  { dir: 'app/lifestyle', importPath: '@/migration/pages-source/lifestyle/index', title: 'Lifestyle | Sun City Summerlin', desc: 'Active adult lifestyle in Sun City Summerlin.', canonical: '/lifestyle' },
  { dir: 'app/map', importPath: '@/migration/pages-source/map/index', title: 'Community Map | Sun City Summerlin', desc: 'Explore the Sun City Summerlin community map.', canonical: '/map' },
  { dir: 'app/neighborhoods', importPath: '@/migration/pages-source/neighborhoods/index', title: 'Neighborhoods | Las Vegas 55+', desc: 'Neighborhoods near Sun City Summerlin.', canonical: '/neighborhoods' },
  { dir: 'app/neighborhoods/del-webb-north-ranch', importPath: '@/migration/pages-source/neighborhoods/del-webb-north-ranch', title: 'Del Webb North Ranch | Neighborhood', desc: 'Del Webb North Ranch area information.', canonical: '/neighborhoods/del-webb-north-ranch' },
  { dir: 'app/properties', importPath: '@/migration/pages-source/properties/index', title: 'Properties | Sun City Summerlin', desc: 'Browse homes for sale in Sun City Summerlin.', canonical: '/properties' },
  { dir: 'app/search', importPath: '@/migration/pages-source/search/index', title: 'Search Homes | Sun City Summerlin', desc: 'Search Sun City Summerlin homes for sale.', canonical: '/search' },
  { dir: 'app/services', importPath: '@/migration/pages-source/services/index', title: 'Real Estate Services | Dr. Jan Duffy', desc: 'Buying, selling, and relocation services.', canonical: '/services' },
  { dir: 'app/services/buying-agent', importPath: '@/migration/pages-source/services/buying-agent', title: 'Buying Agent | Dr. Jan Duffy', desc: 'Buyer representation in Sun City Summerlin.', canonical: '/services/buying-agent' },
  { dir: 'app/services/luxury-homes', importPath: '@/migration/pages-source/services/luxury-homes', title: 'Luxury Homes | Dr. Jan Duffy', desc: 'Luxury homes in Las Vegas and Summerlin.', canonical: '/services/luxury-homes' },
  { dir: 'app/services/offerings', importPath: '@/migration/pages-source/services/offerings', title: 'Service Offerings | Dr. Jan Duffy', desc: 'Real estate service offerings.', canonical: '/services/offerings' },
  { dir: 'app/services/relocation', importPath: '@/migration/pages-source/services/relocation', title: 'Relocation | Dr. Jan Duffy', desc: 'Relocation help to Las Vegas and Sun City Summerlin.', canonical: '/services/relocation' },
  { dir: 'app/services/selling-agent', importPath: '@/migration/pages-source/services/selling-agent', title: 'Selling Agent | Dr. Jan Duffy', desc: 'Listing and selling homes in Sun City Summerlin.', canonical: '/services/selling-agent' },
  { dir: 'app/testimonials', importPath: '@/migration/pages-source/testimonials/index', title: 'Testimonials | Dr. Jan Duffy', desc: 'Client testimonials for Dr. Jan Duffy.', canonical: '/testimonials' },
  { dir: 'app/zipcodes', importPath: '@/migration/pages-source/zipcodes/index', title: 'Las Vegas Zip Codes | Dr. Jan Duffy', desc: 'Las Vegas zip code directory.', canonical: '/zipcodes' },
];

const tpl = (importPath, title, desc, canonical) => `import type { Metadata } from 'next';
import Page from '${importPath}';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  alternates: { canonical: ${JSON.stringify(canonical)} },
};

export default function RoutePage() {
  return <Page />;
}
`;

for (const r of routes) {
  const file = r.file ?? 'page.tsx';
  const fullDir = path.join(root, r.dir);
  fs.mkdirSync(fullDir, { recursive: true });
  fs.writeFileSync(path.join(fullDir, file), tpl(r.importPath, r.title, r.desc, r.canonical));
  console.log('wrote', path.join(r.dir, file));
}
