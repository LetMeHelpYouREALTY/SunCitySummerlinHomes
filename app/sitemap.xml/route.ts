import { buildSitemapIndexXml, sitemapXmlHeaders } from '@/lib/sitemap-xml';
import type { SitemapSection } from '@/lib/sitemap-entries';

const sections: SitemapSection[] = ['core', 'inventory', 'location', 'services', 'authority', 'guides'];

export function GET() {
  const xml = buildSitemapIndexXml(sections);
  return new Response(xml, { headers: sitemapXmlHeaders });
}
