import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import { phone } from '@/lib/site-contact';
import styles from '@/styles/JadePatterns.module.css';

export const metadata: Metadata = {
  title: 'Estate Collection | Sun City Summerlin',
  description:
    'Explore a curated estate collection pattern with premium presentation, local authority cues, and conversion-first structure for Sun City Summerlin real estate.',
  alternates: { canonical: '/estate-collection' },
};

const estateCards = [
  {
    title: 'Golf-Front Signature Homes',
    text: 'Residences with fairway-facing lots, outdoor entertaining zones, and high-end interior upgrades in Sun City Summerlin.',
    tag: 'Premium Segment',
  },
  {
    title: 'Lock-and-Leave Luxury Villas',
    text: 'Low-maintenance homes designed for seasonal flexibility, privacy, and easy access to community amenities.',
    tag: 'Lifestyle Focus',
  },
  {
    title: 'View-Oriented Custom Properties',
    text: 'Homes optimized for mountain and valley views with refined finishes and strong long-term resale appeal.',
    tag: 'High Demand',
  },
  {
    title: 'Renovated Designer Interiors',
    text: 'Move-in-ready options featuring updated kitchens, spa-inspired baths, and integrated modern systems.',
    tag: 'Turnkey',
  },
  {
    title: 'Entertainer Floor Plans',
    text: 'Wide-open living areas and seamless indoor-outdoor transitions built for hosting and comfort.',
    tag: 'Functional Luxury',
  },
  {
    title: 'Quiet Cul-de-Sac Opportunities',
    text: 'Select homes with calmer street placement, larger lots, and stronger privacy characteristics.',
    tag: 'Privacy Priority',
  },
];

export default function EstateCollectionPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Exclusive Collection Pattern</span>
          <h1>Estate Collection Showcase</h1>
          <p>
            This route clones the strongest Jade Mills pattern: authority-led luxury positioning,
            high-value listing categorization, and immediate action pathways for qualified buyers.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>Premium</strong>
              <span>Luxury-oriented inventory framing</span>
            </div>
            <div className={styles.stat}>
              <strong>Curated</strong>
              <span>Category-driven discovery flow</span>
            </div>
            <div className={styles.stat}>
              <strong>Local</strong>
              <span>Sun City Summerlin adaptation</span>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          {estateCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <span className={styles.tag}>{card.tag}</span>
            </article>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Want private access to matching homes?</h2>
          <p>
            Work directly with Dr. Jan Duffy to receive a curated short list aligned to your
            preferred location, budget, and lifestyle priorities.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryAction}>
              Request Curated List
            </Link>
            <a href={phone.telHref} className={styles.secondaryAction}>
              Call {phone.display}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
