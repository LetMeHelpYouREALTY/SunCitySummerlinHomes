import { getAllBlogSlugs } from '@/lib/blog-posts';
import { getSamplePropertyIds } from '@/lib/sample-properties';
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

/** Core public pages */
export const coreRoutes: RouteSpec[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/service-area', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
];

/** Search and inventory hubs */
export const inventoryRoutes: RouteSpec[] = [
  { path: '/properties', changeFrequency: 'daily', priority: 0.9 },
  { path: '/search', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/market-report', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/market-update', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/market-insights', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/estate-collection', changeFrequency: 'monthly', priority: 0.82 },
];

/** Area and lifestyle routes */
export const locationRoutes: RouteSpec[] = [
  { path: '/community', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lifestyle', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/amenities', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/map', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/neighborhoods', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/neighborhoods/del-webb-north-ranch', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/prestige-neighborhoods', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/zipcodes', changeFrequency: 'monthly', priority: 0.7 },
];

/** Service routes */
export const serviceRoutes: RouteSpec[] = [
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/buying-agent', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/selling-agent', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/luxury-homes', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/relocation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/offerings', changeFrequency: 'monthly', priority: 0.8 },
];

/** Authority and trust routes */
export const authorityRoutes: RouteSpec[] = [
  { path: '/testimonials', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/media-highlights', changeFrequency: 'monthly', priority: 0.78 },
];

/** Educational guide routes */
export const guideRoutes: RouteSpec[] = [
  { path: '/guides', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/guides/buyers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/sellers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/relocation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/market-strategy', changeFrequency: 'monthly', priority: 0.8 },
];

/** Marketing URLs only (no routes that do not exist in app/). */
const marketingRoutes: RouteSpec[] = [
  ...coreRoutes,
  ...inventoryRoutes,
  ...locationRoutes,
  ...serviceRoutes,
  ...authorityRoutes,
  ...guideRoutes,
];

export const sitemapRouteSections = {
  core: coreRoutes,
  inventory: inventoryRoutes,
  location: locationRoutes,
  services: serviceRoutes,
  authority: authorityRoutes,
  guides: guideRoutes,
} as const;

export type SitemapSection = keyof typeof sitemapRouteSections;

export function getMarketingSitemapRoutes(): RouteSpec[] {
  const zipRoutes = ZIP_CODE_SLUGS.map((code) => ({
    path: `/zipcodes/${code}`,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  }));

  const samplePropertyRoutes = getSamplePropertyIds().map((id) => ({
    path: `/properties/${id}`,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.72,
  }));

  const blogArticleRoutes = getAllBlogSlugs().map((slug) => ({
    path: `/blog/${slug}`,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.72,
  }));

  // De-duplicate while preserving first occurrence order.
  const seen = new Set<string>();
  return [...marketingRoutes, ...zipRoutes, ...samplePropertyRoutes, ...blogArticleRoutes].filter((route) => {
    if (seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
}

export function getSitemapRoutesBySection(section: SitemapSection): RouteSpec[] {
  return [...sitemapRouteSections[section]];
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

export function getMetadataSitemapBySection(section: SitemapSection): SitemapEntry[] {
  const lastModified = new Date();
  return getSitemapRoutesBySection(section).map((r) => ({
    url: r.path === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
