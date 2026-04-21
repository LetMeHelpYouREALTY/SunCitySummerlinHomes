import Link from 'next/link';
import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import styles from '@/styles/Home.module.css';
import gb from '@/styles/GbpPages.module.css';
import { address, footerLicenseDisclaimer, gbpLinks, phone, serviceAreaLinks } from '@/lib/site-contact';

export default function ServiceAreaPage() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <article className={gb.wrap}>
          <h1 className={gb.h1}>Real estate service area</h1>
          <p className={gb.lead}>
            Local SEO and Google Business Profile work best when your website clearly states where you help clients buy
            and sell—and links to hyperlocal detail pages. Use the links below to explore Sun City Summerlin and nearby
            Las Vegas communities.
          </p>

          <section className={gb.section}>
            <h2>Primary focus</h2>
            <p className={gb.prose}>
              <strong>Sun City Summerlin</strong> (Las Vegas, NV 89134) is the primary 55+ community focus. Related
              discovery often includes Summerlin West, zip-level guides on this site, and other Las Vegas Valley
              active-adult neighborhoods.
            </p>
          </section>

          <section className={gb.section}>
            <h2>Explore on this site</h2>
            <ul className={gb.linkList}>
              {serviceAreaLinks.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <div className={gb.napBox}>
            <p>
              <strong>Call:</strong>{' '}
              <a href={phone.telHref}>{phone.display}</a>
            </p>
            <p>
              <strong>Office:</strong> {address.singleLine}
            </p>
            <p>
              <a href={gbpLinks.directions} target="_blank" rel="noopener noreferrer">
                Open directions in Google Maps
              </a>
            </p>
          </div>

          <div className={gb.ctaRow}>
            <ScheduleButton type="button" className={gb.cta} aria-label="Get local help — open scheduling with Dr. Jan Duffy">
              Get local help
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
