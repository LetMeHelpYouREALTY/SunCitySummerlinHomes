import { getMetadataSitemapBySection } from '@/lib/sitemap-entries';
import { buildSitemapXml, sitemapXmlHeaders } from '@/lib/sitemap-xml';

export function GET() {
  const xml = buildSitemapXml(getMetadataSitemapBySection('guides'));
  return new Response(xml, { headers: sitemapXmlHeaders });
}
