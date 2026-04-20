import Link from 'next/link';
import { getRelatedPages } from '@/lib/related-pages';

export default function RelatedPages({ path, heading = 'Related Guides' }: { path: string; heading?: string }) {
  const pages = getRelatedPages(path);
  if (pages.length === 0) return null;

  return (
    <section className="related-pages" aria-label="Related guide links">
      <h2>{heading}</h2>
      <div className="related-pages-grid">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="related-page-card">
            <h3>{page.title}</h3>
            <p>{page.description}</p>
            <span>Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
