'use client';


import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import neighborhoodStyles from '@/styles/Neighborhoods.module.css';
import { useState, useEffect } from 'react';
import StructuredData from '@/components/StructuredData';
import ScheduleButton from '@/components/ScheduleButton';

export default function DelWebbNorthRanch() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <p className={styles.logo}>Del Webb North Ranch Expert</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/neighborhoods">Neighborhoods</Link>
          <Link href="/services">Services</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className={styles.main}>
        <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''} ${neighborhoodStyles.neighborhoodHero}`}>
          <div className={styles.dualLogoContainer}>
            <Image 
              src="/bhhs-nevada-logo.jpg" 
              alt="Berkshire Hathaway HomeServices Nevada Properties" 
              className={styles.bhhsLogo} 
              width={150}
              height={75}
              unoptimized
            />
            <Image 
              src="/summerlin-logo.jpg" 
              alt="Del Webb North Ranch" 
              className={styles.summerlinLogo} 
              width={200}
              height={150}
              unoptimized
            />
          </div>
          <h1 className={styles.title}>Del Webb North Ranch: Premier 55+ Community in North Las Vegas</h1>
          
          <div id="del-webb-north-ranch" className={neighborhoodStyles.neighborhoodSpotlight}>
            <div className={neighborhoodStyles.neighborhoodImage}>
              <img src="/golf-course.jpg" alt="Del Webb North Ranch Community" className={styles.featuredImage} />
            </div>
            
            <div className={neighborhoodStyles.neighborhoodDetails} itemScope itemType="http://schema.org/Place">
              <h2 itemProp="name">Del Webb North Ranch</h2>
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="addressLocality">North Las Vegas</span>,
                <span itemProp="addressRegion">NV</span>
              </div>
              <p itemProp="description">A vibrant 55+ active adult community featuring luxury homes and resort-style amenities in North Las Vegas.</p>
            </div>

            <div className={styles.communityHighlights}>
              <div className={styles.statsCard}>
                <h3>$425,000+</h3>
                <p>Starting Home Price</p>
              </div>
              <div className={styles.statsCard}>
                <h3>1,600+</h3>
                <p>Homes in Community</p>
              </div>
              <div className={styles.statsCard}>
                <h3>10+</h3>
                <p>Floor Plans</p>
              </div>
              <div className={styles.statsCard}>
                <h3>27 Holes</h3>
                <p>Golf Course</p>
              </div>
            </div>

            <div className={neighborhoodStyles.neighborhoodFeatures}>
              <h3>Community Highlights</h3>
              <ul>
                <li>Resort-style pool and spa facilities</li>
                <li>State-of-the-art fitness center</li>
                <li>Tennis and pickleball courts</li>
                <li>Championship golf course</li>
                <li>Clubhouse with social activities</li>
                <li>Walking and biking trails</li>
                <li>Gated entrance with 24/7 security</li>
                <li>Close to shopping and medical facilities</li>
              </ul>
            </div>

            <div className={neighborhoodStyles.neighborhoodDescription}>
              <h3>About Del Webb North Ranch</h3>
              <p>
                Del Webb North Ranch is the newest 55+ community by Del Webb in North Las Vegas, Nevada. This premier active adult community combines luxury living with an array of resort-style amenities designed for residents seeking an active, social lifestyle in their retirement years.
              </p>
              <p>
                The community features a variety of single-story floor plans ranging from approximately 1,400 to 2,800 square feet, with flexible living spaces, modern designs, and energy-efficient features. Each home is crafted with the needs of active adults in mind, offering low-maintenance exteriors and single-level living.
              </p>
              <p>
                At the heart of Del Webb North Ranch is the spectacular clubhouse, offering residents access to a state-of-the-art fitness center, indoor and outdoor pools, tennis and pickleball courts, and spaces for clubs and social gatherings. The community's full-time lifestyle director coordinates a rich calendar of events, clubs, and activities.
              </p>
              <p>
                Located in North Las Vegas, residents enjoy convenient access to shopping, dining, healthcare facilities, and the entertainment options of the Las Vegas Strip, while living in a peaceful, secure environment with stunning views of the surrounding mountains.
              </p>
            </div>

            <div className={neighborhoodStyles.expertAdvice}>
              <h3>Your Del Webb North Ranch Expert</h3>
              <div className={neighborhoodStyles.expertProfile}>
                <Image
                  src="/drjan-logo.png"
                  alt="Dr. Jan Duffy, REALTOR"
                  width={120}
                  height={120}
                  className={neighborhoodStyles.expertPhoto}
                  unoptimized
                />
                <div className={neighborhoodStyles.expertInfo}>
                  <h4>Dr. Jan Duffy, REALTOR®</h4>
                  <p>With over 25 years specializing in 55+ communities in Las Vegas, Dr. Duffy provides expert guidance for buying and selling homes in Del Webb North Ranch. As your local specialist, she offers personalized tours, comprehensive market analysis, and simplified transactions designed for active adults.</p>
                  <p>Contact Dr. Jan at (702) 718-0043 to schedule a consultation or community tour today.</p>
                </div>
              </div>
            </div>

            <div className={neighborhoodStyles.ctaSection}>
              <h3>Ready to Find Your Perfect Home in Del Webb North Ranch?</h3>
              <div className={neighborhoodStyles.ctaButtons}>
                <Link href="/properties?community=Del+Webb+North+Ranch" className={neighborhoodStyles.primaryButton}>
                  View Available Homes
                </Link>
                <ScheduleButton
                  type="button"
                  className={neighborhoodStyles.secondaryButton}
                  aria-label="Schedule a community tour — open Calendly"
                >
                  Schedule a Tour
                </ScheduleButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Dr Jan Duffy REALTOR® | Del Webb North Ranch Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® specializing in 55+ communities in Las Vegas, North Las Vegas, and Henderson. S.0197614.LL</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
      </footer>

      <StructuredData 
        type="RealEstateAgent" 
        data={{
          name: "Dr. Jan Duffy",
          description: "Real Estate agent specializing in Del Webb North Ranch, a 55+ community in North Las Vegas, Nevada",
          url: "https://drjanduffy.com/neighborhoods/del-webb-north-ranch",
          telephone: "(702) 718-0043",
          address: {
            "@type": "PostalAddress",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89134"
          },
          areaServed: {
            "@type": "City",
            "name": "North Las Vegas, Nevada"
          },
          specialty: "Del Webb North Ranch 55+ Community"
        }}
      />
    </div>
  );
};

