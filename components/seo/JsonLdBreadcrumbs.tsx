import { SITE_ORIGIN } from '@/lib/site-contact';

export type JsonLdBreadcrumbItem = {
  name: string;
  href: string;
};

type JsonLdBreadcrumbsProps = {
  items: JsonLdBreadcrumbItem[];
};

/** Server-rendered BreadcrumbList JSON-LD (not next/script). */
export default function JsonLdBreadcrumbs({ items }: JsonLdBreadcrumbsProps) {
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${SITE_ORIGIN}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function breadcrumbTrail(
  ...segments: { name: string; path: string }[]
): JsonLdBreadcrumbItem[] {
  return [
    { name: 'Home', href: '/' },
    ...segments.map((segment) => ({ name: segment.name, href: segment.path })),
  ];
}
