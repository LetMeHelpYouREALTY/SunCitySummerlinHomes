
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

interface ErrorProps {
  statusCode?: number;
}

export default function Error({ statusCode }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{statusCode ? `Error ${statusCode}` : 'Error'} | Sun City Summerlin</title>
        <meta name="description" content="Error page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {statusCode ? `Error ${statusCode}` : 'An Error Occurred'}
        </h1>

        <p className={styles.description}>
          {statusCode
            ? `A server-side error occurred (${statusCode})`
            : 'An error occurred on the client'}
        </p>

        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Return Home &rarr;</h2>
            <p>Go back to the homepage</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

