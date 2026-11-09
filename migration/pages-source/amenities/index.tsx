'use client';

import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from "react";
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';

export default function Amenities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const amenities = [
    "Three Golf Courses (Highland Falls, Palm Valley, Eagle Crest)",
    "Four Recreation Centers (Mountain Shadows, Sun Shadows, Desert Vista, Pinnacle)",
    "Multiple Swimming Pools",
    "Tennis &amp; Pickleball Courts",
    "Fitness Centers with Classes",
    "Woodworking &amp; Ceramics Studios",
    "Over 100 Social Clubs &amp; Activities",
    "Walking &amp; Golf Cart Trails",
    "On-site Shopping &amp; Dining",
    "Association-Managed Recreation &amp; Clubs"
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <p className={styles.logo}>Sun City Summerlin Homes</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/zipcodes">Zipcodes</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </header>

      <div className={styles.main}>
        <h1 className={styles.pageTitle}>Community Amenities</h1>

        <section className={`${styles.amenitiesSection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.amenitiesList}>
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.amenity}>
                <span className={styles.checkmark}>✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          <div className={styles.amenitiesDetail}>
            <div className={styles.amenityFeature}>
              <h2>Golf Courses</h2>
              <Image 
                src="/golf-course.jpg" 
                alt="Sun City Summerlin Golf Course" 
                width={600}
                height={400}
                layout="responsive"
              />
              <p>
                Per the Sun City Summerlin Community Association (November 2026): Highland Falls and
                Palm Valley are 18-hole championship courses, and Eagle Crest is the executive course
                for shorter rounds.
              </p>
            </div>

            <div className={styles.amenityFeature}>
              <h2>Recreation Centers</h2>
              <Image 
                src="/community-center.jpg" 
                alt="Sun City Summerlin Recreation Center" 
                width={600}
                height={400}
                layout="responsive"
              />
              <p>
                Four community centers serve residents: Mountain Shadows at 9107 Del Webb Blvd, Sun
                Shadows at 8700 Del Webb Blvd, Desert Vista at 10360 Sun City Blvd, and Pinnacle at
                2215 Thomas Ryan Blvd. Per suncitysummerlin.com, the association supports four fitness
                centers and five indoor and outdoor pools across the centers, plus club meeting space.
              </p>
            </div>

            <div className={styles.amenityFeature}>
              <h2>Social Clubs & Activities</h2>
              <p>
                With over 100 clubs and activities, there's something for everyone at Sun City Summerlin. From book clubs and card games to hiking groups and dance classes, residents can pursue existing passions or discover new interests alongside neighbors who share their enthusiasm.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LL</p>
          <p>
            Real Estate Las Vegas, NV{' '}
            <RealScoutHomeSearchLink>Live MLS search (RealScout)</RealScoutHomeSearchLink>
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
      </footer>
    </div>
  );
};

