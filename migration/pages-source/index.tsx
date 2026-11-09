'use client';

import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import FeaturedPropertiesListings from '@/components/FeaturedPropertiesListings';
import { NEVADA_REALTOR_LICENSE, phone } from '@/lib/site-contact';
import { communityFaqItems } from '@/lib/site-faq';

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.homeWithGlobalNav}`}>
      <Header />
      <div className={styles.main}>
        {/* New Enhanced Hero */}
        <EnhancedHero />

        <section className={styles.trustBar} aria-label="Sun City Summerlin highlights">
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>55+</span>
            <span className={styles.trustLabel}>Age-qualified community</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>3</span>
            <span className={styles.trustLabel}>Golf courses (2 championship, 1 executive)</span>
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
        <div className={styles.listingsSection} suppressHydrationWarning>
          <RealScoutOfficeListings />
        </div>

        {/* Feature Section */}
        <FeatureSection />

        <CommunityGuideSection />

        {/* Property Search */}
        <FeaturedPropertiesListings />

        {/* Testimonial Section */}
        <TestimonialSection />

        <section className={styles.faqSection} aria-labelledby="home-faq-heading">
          <h2 id="home-faq-heading">Sun City Summerlin buyer FAQ</h2>
          <p className={styles.faqIntro}>
            Quick answers about buying and living in this age-qualified (55+) Summerlin community.{' '}
            <Link href="/faq">See all FAQs</Link>
          </p>
          <dl className={styles.faqList}>
            {communityFaqItems.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
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
        <h2 className={styles.subtitle}>Age-qualified (55+) community in Summerlin</h2>
        <p className={styles.description}>
          Explore homes, golf, and recreation in Del Webb&apos;s Sun City Summerlin (ZIP 89134) with
          Dr. Jan Duffy, your local real estate guide.
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
        <p className={styles.homeValueCta}>
          <a
            href="https://calendly.com/drjanduffy/listing-consultation?utm_source=suncitysummerlinhomesforsale.com&utm_medium=website&utm_content=home-value"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.homeValueLink}
          >
            What&apos;s my Sun City Summerlin home worth?
            <span className={styles.srOnly}> (opens Calendly in a new tab)</span>
          </a>
        </p>
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
          <p>
            Three golf courses (Highland Falls, Palm Valley, and Eagle Crest), four community
            centers, pools, and club activities across the association.
          </p>
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

const CommunityGuideSection = () => {
  return (
    <section className={styles.communityGuideSection} aria-labelledby="community-guide-heading">
      <h2 id="community-guide-heading" className={styles.sectionTitle}>
        Sun City Summerlin community guide
      </h2>
      <p className={styles.communityGuideLead}>
        Per the Sun City Summerlin Community Association, Del Webb&apos;s Sun City Summerlin has
        operated since 1989 in the Summerlin area of Las Vegas, NV (ZIP 89134), with 7,781 homes and
        association-managed recreation across the neighborhood.
      </p>
      <div className={styles.communityGuideGrid}>
        <div className={styles.communityGuideCard}>
          <h3>Golf</h3>
          <p>
            Highland Falls and Palm Valley are championship courses; Eagle Crest is the executive
            course.
          </p>
        </div>
        <div className={styles.communityGuideCard}>
          <h3>Community centers</h3>
          <ul className={styles.communityGuideList}>
            <li>Mountain Shadows — 9107 Del Webb Blvd</li>
            <li>Sun Shadows — 8700 Del Webb Blvd</li>
            <li>Desert Vista — 10360 Sun City Blvd</li>
            <li>Pinnacle — 2215 Thomas Ryan Blvd</li>
          </ul>
        </div>
      </div>
      <p className={styles.communityGuideNote}>
        Occupancy in this age-qualified (55+) community follows the association&apos;s published rules.
        For current listings, use the search tools on this site or{' '}
        <a href="https://www.suncityvegas.com/" rel="noopener noreferrer">
          suncityvegas.com
        </a>
        .
      </p>
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