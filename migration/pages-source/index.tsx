'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import { NEVADA_REALTOR_LICENSE, phone } from '@/lib/site-contact';

export default function Home() {
  const [realScoutLoaded, setRealScoutLoaded] = useState(false);
  useEffect(() => {
    // Short delay so layout skeleton shows before RealScout web component mounts
    const timer = setTimeout(() => {
      setRealScoutLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${styles.homeWithGlobalNav}`}>
      <Header />
      <main className={styles.main}>
        {/* New Enhanced Hero */}
        <EnhancedHero />

        <section className={styles.trustBar} aria-label="Sun City Summerlin highlights">
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>55+</span>
            <span className={styles.trustLabel}>Active Adult Community</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>3</span>
            <span className={styles.trustLabel}>Championship Golf Courses</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>4</span>
            <span className={styles.trustLabel}>Community Centers</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>702</span>
            <span className={styles.trustLabel}>
              <a href={phone.telHref} className={styles.trustPhoneLink}>
                Local guidance: {phone.display}
              </a>
            </span>
          </div>
        </section>

        {/* RealScout Listings Section */}
        <div className={styles.listingsSection}>
          {!realScoutLoaded ? (
            <div
              className={styles.listingsSkeleton}
              aria-busy="true"
              aria-live="polite"
              aria-label="Loading featured listings"
            >
              <div className={styles.listingsSkeletonBar} />
              <div className={styles.listingsSkeletonGrid}>
                <div className={styles.listingsSkeletonCard} />
                <div className={styles.listingsSkeletonCard} />
                <div className={styles.listingsSkeletonCard} />
              </div>
            </div>
          ) : (
            <div suppressHydrationWarning>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="NEWEST"
                listing-status="For Sale"
                property-types="SFR,MF"
                price-min="800000"
                price-max="4000000"
              ></realscout-office-listings>
            </div>
          )}
        </div>

        {/* Feature Section */}
        <FeatureSection />

        {/* Property Search */}
        <PropertySearch />

        {/* Testimonial Section */}
        <TestimonialSection />
      </main>

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
              <h3>Services</h3>
              <Link href="/services/buying-agent">Buying</Link>
              <Link href="/services/selling-agent">Selling</Link>
              <Link href="/services/relocation">Relocation</Link>
              <Link href="/services/luxury-homes">Luxury Homes</Link>
            </div>
            <div className={styles.footerCol}>
              <h3>Resources</h3>
              <Link href="/about">About Dr. Jan</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/service-area">Service area</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/map">Community Map</Link>
              <Link href="/testimonials">Testimonials</Link>
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

// Dummy components to avoid errors. Replace with your actual components
const EnhancedHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Las Vegas Real Estate Guidance for 55+ Living</p>
        <h1 className={styles.title}>Sun City Summerlin Real Estate</h1>
        <h2 className={styles.subtitle}>Las Vegas&apos; Premier 55+ Community</h2>
        <p className={styles.description}>
          Find your perfect home in this beautiful active adult community with Dr. Jan Duffy, 
          your Sun City Summerlin real estate specialist.
        </p>
        <div className={styles.heroPills} aria-label="Key benefits">
          <span className={styles.heroPill}>Golf Course Homes</span>
          <span className={styles.heroPill}>Single-Story Living</span>
          <span className={styles.heroPill}>Local Expert Guidance</span>
        </div>
        <div className={styles.ctaButtons}>
          <Link href="/search" className={styles.primaryButton}>
            Search Homes
          </Link>
          <ScheduleButton type="button" className={styles.secondaryButton}>
            Schedule with Dr. Jan
          </ScheduleButton>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Why Choose Sun City Summerlin?</h2>
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Active Lifestyle</h3>
          <p>Four golf courses, multiple community centers, pools, and countless activities.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Beautiful Views</h3>
          <p>Stunning mountain and Las Vegas valley views from many locations.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Convenient Location</h3>
          <p>Minutes from shopping, dining, and entertainment with easy access to Las Vegas.</p>
        </div>
      </div>
    </section>
  );
};

const PropertySearch = () => {
  return (
    <section className={styles.propertiesSection}>
      <h2 className={styles.sectionTitle}>Featured Properties</h2>
      <div className={styles.propertyGrid}>
        <div className={styles.propertyCard}>
          <img
            src="/property1.jpg"
            alt="Sun City Summerlin Home"
            className={styles.propertyImage}
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
          />
          <h3>Beautiful Single Story</h3>
          <p>2 bed | 2 bath | 1,400 sq ft</p>
          <Link href="/properties" className={styles.propertyLink}>
            View Details
          </Link>
        </div>
        <div className={styles.propertyCard}>
          <img
            src="/property2.jpg"
            alt="Sun City Summerlin Home"
            className={styles.propertyImage}
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
          />
          <h3>Golf Course Home</h3>
          <p>3 bed | 2.5 bath | 1,800 sq ft</p>
          <Link href="/properties" className={styles.propertyLink}>
            View Details
          </Link>
        </div>
        <div className={styles.propertyCard}>
          <img
            src="/property3.jpg"
            alt="Sun City Summerlin Home"
            className={styles.propertyImage}
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
          />
          <h3>Luxury Villa</h3>
          <p>2 bed | 2 bath | 1,600 sq ft</p>
          <Link href="/properties" className={styles.propertyLink}>
            View Details
          </Link>
        </div>
      </div>
      <div className={styles.viewAllContainer}>
        <Link href="/properties" className={styles.viewAllButton}>
          View All Properties
        </Link>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What My Clients Say</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <p>"Dr. Jan made our transition to Sun City Summerlin so smooth. Her knowledge of the community is impressive!"</p>
          <p className={styles.testimonialAuthor}>- John & Mary S.</p>
        </div>
        <div className={styles.testimonial}>
          <p>"As a senior buyer, I appreciated Dr. Jan's patience and expertise in finding a home that met all my accessibility needs."</p>
          <p className={styles.testimonialAuthor}>- Robert T.</p>
        </div>
      </div>
      <div className={styles.viewAllContainer}>
        <Link href="/testimonials" className={styles.viewAllButton}>
          Read More Testimonials
        </Link>
      </div>
    </section>
  );
};