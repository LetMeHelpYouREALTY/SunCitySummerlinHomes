import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';
import {
  getSamplePropertyById,
  getSamplePropertyIds,
} from '@/lib/sample-properties';
import { canonicalPath, phone } from '@/lib/site-contact';
import styles from '@/styles/SamplePropertyDetail.module.css';

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getSamplePropertyIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = getSamplePropertyById(id);
  if (!property) {
    return { title: 'Property' };
  }
  const path = `/properties/${property.id}`;
  return {
    title: `${property.title} (sample profile)`,
    description: `Illustrative Sun City Summerlin–style home profile: ${property.bedrooms} bed, ${property.bathrooms} bath. For live MLS inventory, search RealScout or call ${phone.display}.`,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
  };
}

function formatPrice(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

export default async function SamplePropertyPage({ params }: Props) {
  const { id } = await params;
  const property = getSamplePropertyById(id);
  if (!property) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: property.title,
    description: `Sample property profile for ${property.title} in Sun City Summerlin area.`,
    url: canonicalPath(`/properties/${property.id}`),
  };

  return (
    <div className={styles.pageShell}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.wrap}>
        <div className={styles.notice} role="status">
          <strong>Important for buyers</strong>
          This page shows a representative example for planning purposes only. It is not a live MLS
          listing. Availability, price, and terms change daily. For current homes for sale, use the
          live search link below or call Dr. Jan Duffy at{' '}
          <a href={phone.telHref}>{phone.display}</a>.
        </div>

        <div className={styles.hero}>
          <Image
            src={property.image}
            alt={`${property.title} — sample Sun City Summerlin–style home`}
            fill
            sizes="(max-width: 960px) 100vw, 960px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <h1 className={styles.title}>{property.title}</h1>
        <div className={styles.meta}>
          {property.isNew && <span className={styles.tag}>Featured sample</span>}
          <span>{property.bedrooms} bed</span>
          <span>{property.bathrooms} bath</span>
          <span>{property.sqft.toLocaleString()} sq ft</span>
        </div>

        <p className={styles.price}>{formatPrice(property.price)}</p>
        <p className={styles.address}>{property.address}</p>

        <div className={styles.features} aria-label="Highlighted features">
          {property.features.map((f) => (
            <span key={f} className={styles.tag}>
              {f}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/properties" className={styles.back}>
            ← Back to all sample homes
          </Link>
          <RealScoutHomeSearchLink className={styles.cta}>View live MLS search</RealScoutHomeSearchLink>
          <Link href="/contact" className={styles.ctaSecondary}>
            Talk with Dr. Jan
          </Link>
        </div>
      </main>
    </div>
  );
}
