import { getMetadataSitemapBySection } from '@/lib/sitemap-entries';
import { buildSitemapXml, sitemapXmlHeaders } from '@/lib/sitemap-xml';

export function GET() {
  const xml = buildSitemapXml(getMetadataSitemapBySection('authority'));
  return new Response(xml, { headers: sitemapXmlHeaders });
}
