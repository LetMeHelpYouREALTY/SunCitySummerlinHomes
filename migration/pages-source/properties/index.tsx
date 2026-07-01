'use client';

import Header from '@/components/Header';
import PropertyFilters from '@/components/PropertyFilters';
import FeaturedPropertiesListings from '@/components/FeaturedPropertiesListings';
import styles from '@/styles/Properties.module.css';
import StructuredData from '@/components/StructuredData';
import Link from 'next/link';
import ScheduleButton from '@/components/ScheduleButton';
import { phone } from '@/lib/site-contact';

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Dr. Jan Duffy - Sun City Summerlin Specialist',
  description:
    "Browse luxury homes for sale in Sun City Summerlin, Las Vegas' premier 55+ community with Dr. Jan Duffy, REALTOR® specialist with 25+ years of experience.",
  url: 'https://suncitysummerlin.com/properties',
  telephone: '(702) 718-0043',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9406 Del Webb Boulevard',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89134',
    addressCountry: 'US',
  },
};

export default function Properties() {
  return (
    <div className={styles.container}>
      <StructuredData type="RealEstateAgent" data={schemaData} />

      <Header />

      <div className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Luxury Homes in Sun City Summerlin</h1>
            <p className={styles.heroSubtitle}>
              Discover your perfect retirement home in Las Vegas&apos; premier 55+ community
            </p>
          </div>
        </div>

        <section className={styles.propertiesSection}>
          <div className={styles.filtersContainer}>
            <PropertyFilters />
          </div>

          <FeaturedPropertiesListings
            id="live-listings"
            title="Live MLS Listings"
            showViewAll={false}
          />
        </section>

        <section className={styles.callToAction}>
          <div className={styles.ctaContent}>
            <h2>Find Your Dream Home Today</h2>
            <p>Work with Dr. Jan Duffy, your Sun City Summerlin specialist with 25+ years of experience</p>
            <div className={styles.ctaButtons}>
              <ScheduleButton type="button" className={styles.primaryButton}>
                Schedule a showing
              </ScheduleButton>
              <a href={phone.telHref} className={styles.secondaryButton}>
                Call {phone.display}
              </a>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>Featured in Sun City Summerlin</h2>
            <p>Explore the amenities and lifestyle of this premier community</p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⛳</div>
              <h3>Championship Golf</h3>
              <p>
                Three distinct courses designed by renowned architects with sweeping views of the Las Vegas valley
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏊</div>
              <h3>Resort-Style Pools</h3>
              <p>Multiple swimming pools for year-round enjoyment with dedicated lap lanes and relaxation areas</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Active Community</h3>
              <p>Over 80 clubs and activities for residents, from tennis to woodworking to social gatherings</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌄</div>
              <h3>Mountain Views</h3>
              <p>Breathtaking vistas of Red Rock Canyon and the Las Vegas valley from many properties</p>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <h3>Sun City Summerlin</h3>
            <p>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
            <p>{phone.display}</p>
          </div>
          <div className={styles.footerLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/properties/">Properties</Link>
              </li>
              <li>
                <Link href="/community/">Community</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerNewsletter}>
            <h3>Stay Updated</h3>
            <p>Schedule a call for the latest listings and community news.</p>
            <div className={styles.newsletterForm}>
              <ScheduleButton type="button" className={styles.newsletterScheduleBtn}>
                Schedule a call
              </ScheduleButton>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} All rights reserved. Berkshire Hathaway HomeServices Nevada Properties.</p>
        </div>
      </footer>
    </div>
  );
}
