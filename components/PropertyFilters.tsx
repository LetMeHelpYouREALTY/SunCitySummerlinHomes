'use client';

import Link from 'next/link';
import ScheduleButton from '@/components/ScheduleButton';
import styles from '@/styles/PropertyFilters.module.css';

/** Replaces the former filter form: Calendly-first consultation + link to full scheduler page. */
export default function PropertyFilters() {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filtersContainer}>
        <h2 className={styles.filtersTitle}>Tour and search with Dr. Jan</h2>
        <p className={styles.ctaCopy}>
          Book a private 15-minute call to discuss your criteria, or browse all sample homes below. For live MLS
          search, use the office listings embed on this page.
        </p>
        <div className={styles.ctaRow}>
          <ScheduleButton type="button" className={styles.primaryCta}>
            Schedule a consultation
          </ScheduleButton>
          <Link href="/contact" className={styles.secondaryCta}>
            Open full scheduler page
          </Link>
        </div>
      </div>
    </div>
  );
}
