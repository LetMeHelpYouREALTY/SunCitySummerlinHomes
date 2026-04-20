import { SITE_ORIGIN } from '@/lib/site-contact';
import { ZIP_CODE_SLUGS } from '@/lib/zipcodes-data';

/** Matches Next.js MetadataRoute.Sitemap changeFrequency union. */
type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

type RouteSpec = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

/** Marketing URLs only (no routes that do not exist in app/). */
const marketingRoutes: RouteSpec[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/properties', changeFrequency: 'daily', priority: 0.9 },
  { path: '/community', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lifestyle', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/amenities', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/zipcodes', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/testimonials', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/service-area', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/search', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
  { path: '/market-report', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/market-update', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/market-insights', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/guides', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/guides/buyers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/sellers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/relocation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/market-strategy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/buying-agent', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/selling-agent', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/luxury-homes', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/relocation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/offerings', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/neighborhoods', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/neighborhoods/del-webb-north-ranch', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/map', changeFrequency: 'monthly', priority: 0.8 },
];

export function getMarketingSitemapRoutes(): RouteSpec[] {
  const zipRoutes = ZIP_CODE_SLUGS.map((code) => ({
    path: `/zipcodes/${code}`,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  }));
  return [...marketingRoutes, ...zipRoutes];
}

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
};

/** Absolute URLs aligned with SITE_ORIGIN (same host as GSC property). */
export function getMetadataSitemap(): SitemapEntry[] {
  const lastModified = new Date();
  return getMarketingSitemapRoutes().map((r) => ({
    url: r.path === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
