import { SITE_ORIGIN } from '@/lib/site-contact';
import type { SitemapEntry, SitemapSection } from '@/lib/sitemap-entries';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function buildSitemapXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((entry) => {
      const lastMod = entry.lastModified.toISOString();
      return [
        '<url>',
        `<loc>${escapeXml(entry.url)}</loc>`,
        `<lastmod>${lastMod}</lastmod>`,
        `<changefreq>${entry.changeFrequency}</changefreq>`,
        `<priority>${entry.priority.toFixed(1)}</priority>`,
        '</url>',
      ].join('');
    })
    .join('');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    '</urlset>',
  ].join('');
}

export function buildSitemapIndexXml(sections: SitemapSection[]): string {
  const today = new Date().toISOString();
  const body = sections
    .map((section) => {
      const url = `${SITE_ORIGIN}/sitemap-${section}.xml`;
      return [
        '<sitemap>',
        `<loc>${escapeXml(url)}</loc>`,
        `<lastmod>${today}</lastmod>`,
        '</sitemap>',
      ].join('');
    })
    .join('');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    '</sitemapindex>',
  ].join('');
}

export const sitemapXmlHeaders = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
} as const;
