import Link from 'next/link';
import Header from '@/components/Header';
import { phone } from '@/lib/site-contact';
import styles from '@/styles/MarketPages.module.css';

type Section = {
  title: string;
  text: string;
  bullets: string[];
};

type MarketHubPageProps = {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  sections: Section[];
};

export default function MarketHubPage({
  breadcrumbLabel,
  eyebrow,
  title,
  summary,
  sections,
}: MarketHubPageProps) {
  return (
    <div className={styles.marketPage}>
      <Header />
      <main className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <span>{breadcrumbLabel}</span>
        </nav>

        <section className={styles.heroCard}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.summary}>{summary}</p>
        </section>

        <section className={styles.sectionGrid} aria-label="Market content sections">
          {sections.map((section) => (
            <article key={section.title} className={styles.sectionCard}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              <ul className={styles.bullets}>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.ctaCard}>
          <h2>Get personalized local guidance.</h2>
          <p>
            Discuss your buying, selling, or relocation goals with Dr. Jan Duffy and receive a
            strategy aligned to today&apos;s Sun City Summerlin and Las Vegas market conditions.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryAction}>
              Book a Strategy Call
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
