'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import AmenityMap from '@/components/amenities/AmenityMap';
import FAQSection from '@/components/seo/FAQSection';
import ScheduleButton from '@/components/ScheduleButton';
import {
  AMENITY_CONTENT_SECTIONS,
  AMENITIES_FAQ,
} from '@/lib/nearby-amenities-data';
import { SUN_CITY_SUMMERLIN } from '@/lib/community-config';
import {
  NEVADA_REALTOR_LICENSE,
  address,
  businessName,
  footerLicenseDisclaimer,
  phone,
} from '@/lib/site-contact';
import styles from '@/styles/Home.module.css';
import amenityStyles from '@/styles/AmenityMap.module.css';

export default function AmenitiesPage() {
  return (
    <div className={`${styles.container} ${styles.homeWithGlobalNav}`}>
      <Header />

      <div className={styles.main}>
        <h1 className={styles.pageTitle}>
          Nearby Amenities in {SUN_CITY_SUMMERLIN.name}, {SUN_CITY_SUMMERLIN.city}
        </h1>
        <p className={amenityStyles.pageProse}>
          {SUN_CITY_SUMMERLIN.description} Use the interactive map to explore healthcare, golf, grocery, and
          recreation around the community, then read the hyperlocal notes below for context on errands, hospitals,
          and approximate drive times.
        </p>

        <AmenityMap variant="full" showStaticList />

        {AMENITY_CONTENT_SECTIONS.map((section) => (
          <section key={section.id} className={amenityStyles.contentBlock}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <FAQSection
          heading={`${SUN_CITY_SUMMERLIN.name} amenities FAQ`}
          description="Quick answers for buyers comparing 55+ living in northwest Las Vegas."
          faqs={AMENITIES_FAQ}
        />

        <section className={amenityStyles.trustCta} aria-label="Contact Dr. Jan Duffy">
          <h2>{businessName.realEstateAgent}</h2>
          <p>
            Your hyperlocal guide to homes, golf-course lots, and resale value in {SUN_CITY_SUMMERLIN.name}.{' '}
            {footerLicenseDisclaimer}
          </p>
          <p>
            {address.singleLine} ·{' '}
            <a href={phone.telHref}>{phone.display}</a>
          </p>
          <div className={amenityStyles.trustActions}>
            <ScheduleButton type="button" className={amenityStyles.primaryBtn}>
              Schedule a consultation
            </ScheduleButton>
            <a href={phone.telHref} className={amenityStyles.secondaryBtn}>
              Call {phone.display}
            </a>
            <Link href="/contact" className={amenityStyles.secondaryBtn}>
              Contact page
            </Link>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
            <p>Dr. Jan Duffy <br />BHHS Nevada Properties</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h3>Quick Links</h3>
              <Link href="/search">Search</Link>
              <Link href="/properties">Properties</Link>
              <Link href="/community">Community</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.footerCol}>
              <h3>Explore</h3>
              <Link href="/lifestyle">Lifestyle</Link>
              <Link href="/map">Community map</Link>
              <Link href="/amenities">Nearby amenities</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Dr. Jan Duffy. All rights reserved.</p>
          <p>
            BHHS Nevada Properties | Nevada REALTOR® license {NEVADA_REALTOR_LICENSE}
          </p>
        </div>
      </footer>
    </div>
  );
}
