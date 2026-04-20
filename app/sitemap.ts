import type { MetadataRoute } from 'next';
import { getMetadataSitemap } from '@/lib/sitemap-entries';

/** Regenerate periodically for Google Search Console freshness hints. */
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  return getMetadataSitemap() as MetadataRoute.Sitemap;
}
