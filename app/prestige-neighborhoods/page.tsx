import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import styles from '@/styles/JadePatterns.module.css';

export const metadata: Metadata = {
  title: 'Prestige Neighborhoods | Sun City Summerlin',
  description:
    'Explore prestige neighborhood patterns adapted from high-end real estate sites with local Las Vegas and Sun City Summerlin relevance.',
  alternates: { canonical: '/prestige-neighborhoods' },
};

const neighborhoods = [
  {
    title: 'Sun City Summerlin Core',
    text: 'Established 55+ living with strong amenity access, social activity density, and highly recognizable community identity.',
  },
  {
    title: 'Summerlin West Edge',
    text: 'Newer product mix and elevated outdoor lifestyle appeal for buyers prioritizing parks and newer design language.',
  },
  {
    title: 'The Ridges / Luxury Summerlin',
    text: 'High-end custom and semi-custom enclaves often preferred by buyers seeking privacy and premium architecture.',
  },
  {
    title: 'Red Rock Corridor',
    text: 'Scenic positioning and lifestyle-oriented access that supports long-term desirability in upper-tier segments.',
  },
  {
    title: 'Henderson Prestige Pockets',
    text: 'Alternative high-quality options for buyers comparing school, commute, and value profiles across the valley.',
  },
  {
    title: 'Guard-Gated Lifestyle Nodes',
    text: 'Neighborhoods where security, amenity design, and property standards shape buyer preference and resale narrative.',
  },
];

export default function PrestigeNeighborhoodsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Featured Neighborhood Pattern</span>
          <h1>Prestige Neighborhoods</h1>
          <p>
            This page clones the Jade Mills neighborhood-collection pattern: concise, high-signal
            neighborhood summaries that speed up area comparison and improve route-to-route flow.
          </p>
        </section>

        <section className={styles.grid}>
          {neighborhoods.map((n) => (
            <article key={n.title} className={styles.card}>
              <h2>{n.title}</h2>
              <p>{n.text}</p>
              <span className={styles.tag}>Featured Area</span>
            </article>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Need help narrowing neighborhoods?</h2>
          <p>
            Use the neighborhood shortlist process with Dr. Jan Duffy to compare fit based on
            lifestyle priorities, budget, and move timeline.
          </p>
          <div className={styles.actions}>
            <Link href="/neighborhoods" className={styles.primaryAction}>
              View Neighborhood Hub
            </Link>
            <Link href="/contact" className={styles.secondaryAction}>
              Schedule Area Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
