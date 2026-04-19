import Link from 'next/link';
import Header from '@/components/Header';
import StructuredData from '@/components/StructuredData';
import styles from '@/styles/Home.module.css';
import gb from '@/styles/GbpPages.module.css';
import { address, footerLicenseDisclaimer, phone } from '@/lib/site-contact';

const faqItems = [
  {
    q: 'What areas does Dr. Jan Duffy serve?',
    a: 'Sun City Summerlin and the broader Las Vegas Valley, with a specialty in 55+ communities and Summerlin-area homes.',
  },
  {
    q: 'How do I schedule a showing?',
    a: 'Call the office number listed on this site or use the contact page to request a showing or a consultation.',
  },
  {
    q: 'Do you help with relocation?',
    a: 'Yes. Many clients relocate to Las Vegas for retirement. Dr. Jan Duffy can help you plan tours, timing, and next steps.',
  },
  {
    q: 'Where is the office located?',
    a: `The office address is ${address.singleLine}. Use the contact page for a map and directions.`,
  },
  {
    q: 'How can I verify licensing?',
    a: 'Nevada real estate license information is shown in the site footer and on the About page. You can also verify credentials with the Nevada Real Estate Division.',
  },
  {
    q: 'What should I bring to a buyer consultation?',
    a: 'Bring your questions, preferred timeline, budget range, and any must-have home features (single story, golf proximity, HOA preferences, etc.).',
  },
  {
    q: 'Do you work with sellers?',
    a: 'Yes. Listing services include pricing guidance, marketing preparation, and negotiation support aligned with your goals.',
  },
  {
    q: 'Is Sun City Summerlin only for seniors?',
    a: 'Sun City Summerlin is an active adult community with age restrictions. If you are unsure whether you qualify, ask during your consultation.',
  },
  {
    q: 'How quickly can I get a response?',
    a: 'For the fastest response, call during posted business hours. Email inquiries are typically answered as soon as possible during business days.',
  },
  {
    q: 'Can I browse listings online?',
    a: 'Yes. Use the search and properties sections of this site to explore listings and connect when you are ready for the next step.',
  },
];

export default function FaqPage() {
  const mainEntity = faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  }));

  return (
    <div className={styles.container}>
      <StructuredData type="FAQPage" data={{ mainEntity }} />
      <Header />

      <main className={styles.main}>
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
            <Link href="/contact" className={gb.cta}>
              Contact
            </Link>
            <Link href="/about" className={gb.ctaSecondary}>
              About
            </Link>
          </div>
        </article>
      </main>

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
