import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog-posts';
import { canonicalPath } from '@/lib/site-contact';
import articleStyles from '@/styles/BlogArticle.module.css';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: 'Article' };
  }
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    image: canonicalPath(post.image),
    url: canonicalPath(`/blog/${post.slug}`),
    description: post.excerpt,
  };

  return (
    <div className={articleStyles.pageShell}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <article className={articleStyles.wrap}>
        <p className={articleStyles.meta}>
          {post.date} · {post.category}
        </p>
        <h1 className={articleStyles.title}>{post.title}</h1>
        <p className={articleStyles.meta}>By {post.author}</p>

        <div className={articleStyles.hero}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className={articleStyles.body}>
          <p>{post.excerpt}</p>
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <nav className={articleStyles.nav} aria-label="Article">
          <Link href="/blog">← Back to blog</Link>
          {' · '}
          <Link href="/contact">Contact Dr. Jan</Link>
        </nav>
      </article>
    </div>
  );
}
