import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import styles from '@/styles/JadePatterns.module.css';

export const metadata: Metadata = {
  title: 'Media Highlights | Dr. Jan Duffy',
  description:
    'Authority and proof section patterned after elite agent websites, adapted for Dr. Jan Duffy and Sun City Summerlin positioning.',
  alternates: { canonical: '/media-highlights' },
};

const highlights = [
  {
    quote:
      'Demonstrates consistent local expertise with client-first strategy and strong luxury market execution.',
    source: 'Regional Market Feature',
  },
  {
    quote:
      'Trusted advisor known for clear communication, discreet representation, and results-driven planning.',
    source: 'Real Estate Industry Coverage',
  },
  {
    quote:
      'Combines hyperlocal neighborhood knowledge with practical decision frameworks for buyers and sellers.',
    source: 'Luxury Segment Commentary',
  },
];

export default function MediaHighlightsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Authority Proof Pattern</span>
          <h1>Media & Industry Highlights</h1>
          <p>
            This route clones the best social-proof pattern from jademillsestates.com: repeated
            media credibility blocks that reinforce authority before conversion actions.
          </p>
        </section>

        <section className={styles.grid}>
          {highlights.map((item) => (
            <article key={item.source} className={styles.quote}>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <cite>{item.source}</cite>
            </article>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Work with a proven local advisor.</h2>
          <p>
            Ready for a strategy-first approach to buying or selling in Sun City Summerlin and the
            Las Vegas valley? Start with a focused consultation.
          </p>
          <div className={styles.actions}>
            <Link href="/about" className={styles.primaryAction}>
              Learn More About Dr. Jan
            </Link>
            <ScheduleButton
              type="button"
              className={styles.secondaryAction}
              aria-label="Start a conversation — open Calendly"
            >
              Start Conversation
            </ScheduleButton>
          </div>
        </section>
      </div>
    </div>
  );
}
