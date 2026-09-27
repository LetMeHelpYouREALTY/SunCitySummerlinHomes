import Link from 'next/link';
import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import styles from '@/styles/Home.module.css';
import gb from '@/styles/GbpPages.module.css';
import { agentFaqItems } from '@/lib/site-faq';
import { address, footerLicenseDisclaimer, phone } from '@/lib/site-contact';

const faqItems = agentFaqItems;

export default function FaqPage() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <article className={gb.wrap}>
          <h1 className={gb.h1}>Frequently asked questions</h1>
          <p className={gb.lead}>
            Answers to common questions about working with Dr. Jan Duffy in Sun City Summerlin and the Las Vegas area.
          </p>

          <dl className={gb.faq}>
            {faqItems.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>

          <div className={gb.napBox}>
            <p>
              <strong>Call:</strong>{' '}
              <a href={phone.telHref}>{phone.display}</a>
            </p>
            <p>
              <strong>Office:</strong> {address.singleLine}
            </p>
          </div>

          <div className={gb.ctaRow}>
            <ScheduleButton type="button" className={gb.cta} aria-label="Contact Dr. Jan Duffy — open scheduling">
              Contact
            </ScheduleButton>
            <Link href="/about" className={gb.ctaSecondary}>
              About
            </Link>
          </div>
        </article>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>{footerLicenseDisclaimer}</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
