import Link from 'next/link';
import ScheduleButton from '@/components/ScheduleButton';
import { realScoutHomeSearchUrl } from '@/lib/realscout-config';
import styles from '@/styles/Home.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={`${styles.main} ${styles.plainPageMain}`}>
        <h1 className={styles.plainPageTitle}>404 - Page Not Found</h1>
        <p className={styles.plainPageDescription}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Return Home &rarr;</h2>
            <p>Go back to the homepage</p>
          </Link>
          <Link href="/properties" className={styles.card}>
            <h2>View Properties &rarr;</h2>
            <p>Browse sample home profiles on this site</p>
          </Link>
          <a
            href={realScoutHomeSearchUrl}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Search live MLS &rarr;</h2>
            <p>Open Dr. Jan&apos;s RealScout home search in a new tab</p>
          </a>
          <div className={`${styles.card} ${styles.notFoundActionCard}`}>
            <h2>Talk with Dr. Jan</h2>
            <p>Schedule a call or open the contact page for hours, address, and map.</p>
            <ScheduleButton
              type="button"
              className={styles.primaryButton}
              aria-label="Schedule a call — open Calendly"
            >
              Schedule a call
            </ScheduleButton>
            <Link href="/contact" className={styles.notFoundContactLink}>
              Contact page (hours, address &amp; map)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
