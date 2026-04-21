'use client';

import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <div className={`${styles.main} ${styles.plainPageMain}`}>
        <h1 className={styles.plainPageTitle}>Something went wrong</h1>
        <p className={styles.plainPageDescription}>{error.message}</p>
        <div className={styles.grid}>
          <button type="button" className={styles.card} onClick={() => reset()}>
            <h2>Try again</h2>
            <p>Reload this section</p>
          </button>
          <Link href="/" className={styles.card}>
            <h2>Return Home →</h2>
            <p>Go back to the homepage</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
