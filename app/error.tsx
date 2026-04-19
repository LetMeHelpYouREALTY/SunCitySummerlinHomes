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
      <main className={styles.main}>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.description}>{error.message}</p>
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
      </main>
    </div>
  );
}
