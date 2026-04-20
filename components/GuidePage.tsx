import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import BackToTop from '@/components/BackToTop';
import RelatedPages from '@/components/RelatedPages';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection, { type FAQItem } from '@/components/seo/FAQSection';
import { phone } from '@/lib/site-contact';
import styles from '@/styles/Guides.module.css';

type GuideSection = {
  title: string;
  body: string;
  bullets: string[];
};

export default function GuidePage({
  path,
  title,
  summary,
  sections,
  faqs,
}: {
  path: string;
  title: string;
  summary: string;
  sections: GuideSection[];
  faqs: FAQItem[];
}) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...(path === '/guides' ? [] : [{ name: 'Guides', href: '/guides' }]),
    { name: title, href: path },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <Breadcrumbs items={breadcrumbs} />
        <section className={styles.hero}>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className={styles.heroActions}>
            <ScheduleButton type="button" className={styles.primaryAction}>
              Get Personal Strategy
            </ScheduleButton>
            <a href={phone.telHref} className={styles.secondaryAction}>
              Call {phone.display}
            </a>
          </div>
        </section>

        <section className={styles.grid}>
          {sections.map((section) => (
            <article key={section.title} className={styles.card}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <FAQSection
          heading="Frequently Asked Questions"
          description="Practical answers based on local Sun City Summerlin and Las Vegas real estate experience."
          faqs={faqs}
        />

        <RelatedPages path={path} />
      </div>
      <BackToTop />
    </div>
  );
}
