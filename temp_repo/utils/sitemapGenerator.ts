
/**
 * This utility generates a sitemap.xml file for SEO
 */
import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

interface SitemapURL {
  url: string;
  changefreq?: string;
  priority?: number;
  lastmod?: string;
}

async function generateSitemap() {
  // Set up the base URL - replace with your actual domain in production
  const baseUrl = 'https://suncitysummerlin.com';
  const today = new Date().toISOString();
  
  // Define all the pages on your site
  const pages: SitemapURL[] = [
    { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: today },
    { url: '/properties', changefreq: 'daily', priority: 0.9, lastmod: today },
    { url: '/community', changefreq: 'monthly', priority: 0.8, lastmod: today },
    { url: '/lifestyle', changefreq: 'monthly', priority: 0.8, lastmod: today },
    { url: '/amenities', changefreq: 'monthly', priority: 0.8, lastmod: today },
    { url: '/zipcodes', changefreq: 'monthly', priority: 0.7, lastmod: today },
    { url: '/testimonials', changefreq: 'weekly', priority: 0.6, lastmod: today },
    { url: '/contact', changefreq: 'monthly', priority: 0.8, lastmod: today },
    { url: '/search', changefreq: 'weekly', priority: 0.9, lastmod: today },
    { url: '/blog', changefreq: 'daily', priority: 0.9, lastmod: today },
    
    // Add specific zip code pages
    { url: '/zipcodes/89134', changefreq: 'weekly', priority: 0.7, lastmod: today },
    { url: '/zipcodes/89135', changefreq: 'weekly', priority: 0.7, lastmod: today },
    { url: '/zipcodes/89144', changefreq: 'weekly', priority: 0.7, lastmod: today },
    { url: '/zipcodes/89138', changefreq: 'weekly', priority: 0.7, lastmod: today },
    
    // Add specific blog posts
    { url: '/blog/2023-market-trends', changefreq: 'monthly', priority: 0.7, lastmod: today },
    { url: '/blog/top-renovations-home-value', changefreq: 'monthly', priority: 0.7, lastmod: today },
    { url: '/blog/hoa-rules-guide', changefreq: 'monthly', priority: 0.7, lastmod: today },
    { url: '/blog/golf-course-living', changefreq: 'monthly', priority: 0.7, lastmod: today },
    { url: '/blog/california-nevada-relocation', changefreq: 'monthly', priority: 0.7, lastmod: today },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: baseUrl });
  
  // Return a promise that resolves with your XML sitemap
  return streamToPromise(Readable.from(pages).pipe(stream)).then((data) => 
    data.toString()
  );
}

export async function writeSitemap() {
  try {
    const sitemap = await generateSitemap();
    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
  } catch (e) {
    console.error('Error generating sitemap:', e);
  }
}

if (process.env.npm_lifecycle_event === 'generate-sitemap') {
  void writeSitemap();
}
