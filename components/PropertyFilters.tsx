'use client';

import Link from 'next/link';
import ScheduleButton from '@/components/ScheduleButton';
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';
import styles from '@/styles/PropertyFilters.module.css';

/** Replaces the former filter form: Calendly-first consultation + link to full scheduler page. */
export default function PropertyFilters() {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filtersContainer}>
        <h2 className={styles.filtersTitle}>Tour and search with Dr. Jan</h2>
        <p className={styles.ctaCopy}>
          Book a private 15-minute call to discuss your criteria, or browse all sample homes below. For live MLS
          inventory, use the office listings on this page or open the full search on RealScout.
        </p>
        <div className={styles.ctaRow}>
          <ScheduleButton type="button" className={styles.primaryCta}>
            Schedule a consultation
          </ScheduleButton>
          <RealScoutHomeSearchLink className={styles.realScoutCta}>
            Open live MLS search (RealScout)
          </RealScoutHomeSearchLink>
          <Link href="/contact" className={styles.contactPageLink}>
            Contact page (hours, address &amp; map)
          </Link>
        </div>
      </div>
    </div>
  );
}
