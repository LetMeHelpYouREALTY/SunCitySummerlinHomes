/**
 * Optional: writes public/sitemap.xml for offline tools.
 * Production crawlers should use the dynamic route
 * `https://www.suncitysummerlinhomesforsale.com/sitemap.xml`.
 */
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { SitemapStream, streamToPromise } from 'sitemap';

const SITE_ORIGIN = 'https://www.suncitysummerlinhomesforsale.com';

type ChangeFrequency = 'daily' | 'weekly' | 'monthly';

type RouteSpec = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const ZIP_CODE_SLUGS = [
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

function getMarketingSitemapRoutes(): RouteSpec[] {
  const zipRoutes: RouteSpec[] = ZIP_CODE_SLUGS.map((code) => ({
    path: `/zipcodes/${code}`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...marketingRoutes, ...zipRoutes];
}

interface SitemapURL {
  url: string;
  changefreq?: string;
  priority?: number;
  lastmod?: string;
}

async function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const pages: SitemapURL[] = getMarketingSitemapRoutes().map((r) => ({
    url: r.path === '/' ? '/' : r.path,
    changefreq: r.changeFrequency,
    priority: r.priority,
    lastmod: today,
  }));

  const stream = new SitemapStream({ hostname: SITE_ORIGIN });

  try {
    return await streamToPromise(Readable.from(pages).pipe(stream)).then((data) => data.toString());
  } catch (e) {
    console.error('Error generating sitemap stream:', e);
    throw e;
  }
}

export async function writeSitemap() {
  try {
    const sitemap = await generateSitemap();
    const outputPath = './public/sitemap.xml';
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(outputPath, sitemap);
    console.log('✅ Sitemap generated successfully!');
  } catch (e) {
    console.error('❌ Error generating sitemap:', e);
  }
}

if (process.env.npm_lifecycle_event === 'generate-sitemap') {
  void writeSitemap();
}
