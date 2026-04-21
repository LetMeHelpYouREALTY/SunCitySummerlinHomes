import Link from 'next/link';
import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import RealEstateAgentSchema from '@/components/RealEstateAgentSchema';
import styles from '@/styles/Home.module.css';
import gb from '@/styles/GbpPages.module.css';
import {
  NEVADA_REALTOR_LICENSE,
  address,
  brokerage,
  email,
  footerLicenseDisclaimer,
  gbpLinks,
  officeHoursLines,
  phone,
} from '@/lib/site-contact';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <RealEstateAgentSchema />
      <Header />

      <div className={styles.main}>
        <article className={gb.wrap}>
          <h1 className={gb.h1}>About Dr. Jan Duffy</h1>
          <p className={gb.lead}>
            Dr. Jan Duffy is a REALTOR® with {brokerage.organizationName}, focused on Sun City Summerlin and Las Vegas
            55+ real estate. This page summarizes who you are working with, how to reach the office, and how to verify
            licensing.
          </p>

          <section className={gb.section}>
            <h2>Brokerage &amp; license</h2>
            <p className={gb.prose}>
              Dr. Jan Duffy is affiliated with {brokerage.organizationName}. Nevada real estate license:{' '}
              <strong>{NEVADA_REALTOR_LICENSE}</strong>.
            </p>
          </section>

          <section className={gb.section}>
            <h2>Office hours</h2>
            <ul className={gb.linkList}>
              {officeHoursLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <div className={gb.napBox}>
            <p>
              <strong>Call:</strong>{' '}
              <a href={phone.telHref}>{phone.display}</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={email.mailtoHref}>{email.display}</a>
            </p>
            <p>
              <strong>Office:</strong> {address.singleLine}
            </p>
            <p>
              <a href={gbpLinks.profile} target="_blank" rel="noopener noreferrer">
                View Google Business Profile
              </a>
            </p>
            <p>
              <a href={gbpLinks.directions} target="_blank" rel="noopener noreferrer">
                Open directions in Google Maps
              </a>
            </p>
          </div>

          <div className={gb.ctaRow}>
            <ScheduleButton type="button" className={gb.cta} aria-label="Contact Dr. Jan Duffy — open scheduling">
              Contact
            </ScheduleButton>
            <Link href="/faq" className={gb.ctaSecondary}>
              FAQ
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
