'use client';

import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';
import CommunityStructuredData from '@/components/CommunityStructuredData';
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';

export default function Community() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <p className={styles.logo}>Sun City Summerlin Homes</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties/">Properties</Link>
          <Link href="/community/">Community</Link>
          <Link href="/lifestyle/">Lifestyle</Link>
          <Link href="/amenities/">Amenities</Link>
          <Link href="/zipcodes/">Zipcodes</Link>
          <Link href="/testimonials/">Testimonials</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
      </header>

      <div className={styles.main}>
        <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.logoContainer}>
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
                alt="Sun City Summerlin A Del Webb Community" 
                className={styles.summerlinLogo} 
                width={200}
                height={150}
                unoptimized
              />
            </div>
          </div>
          <h1 className={styles.title}>Sun City Summerlin Community</h1>

          <div className={styles.communitySection}>
            <img src="/community-center.jpg" alt="Sun City Summerlin Community Center" className={styles.featuredImage} />

            <div className={styles.communityHighlights}>
              <div className={styles.statsCard}>
                <h3>1989</h3>
                <p>Community established</p>
              </div>
              <div className={styles.statsCard}>
                <h3>7,781</h3>
                <p>Homes (association)</p>
              </div>
              <div className={styles.statsCard}>
                <h3>89134</h3>
                <p>ZIP code</p>
              </div>
              <div className={styles.statsCard}>
                <h3>4</h3>
                <p>Community centers</p>
              </div>
            </div>

            <div className={styles.communityDescription}>
              <p>
                Sun City Summerlin is an age-qualified (55+) Del Webb community within the
                Summerlin master plan on the western edge of Las Vegas. The association reports
                tree-lined streets, on-site services, and recreation including golf, fitness centers,
                and pools (source: suncitysummerlin.com, November 2026).
              </p>
              <p>
                The community opened in 1989 and includes 7,781 homes in ZIP 89134. Golf includes
                championship courses Highland Falls and Palm Valley plus the executive Eagle Crest
                course. Recreation centers include Mountain Shadows (9107 Del Webb Blvd), Sun Shadows
                (8700 Del Webb Blvd), Desert Vista (10360 Sun City Blvd), and Pinnacle (2215 Thomas
                Ryan Blvd). Occupancy rules are published in the association&apos;s Rules &amp;
                Regulations.
              </p>
              <div className={styles.realtorProfile}>
                <h3>Your Sun City Summerlin Expert</h3>
                <p>
                  Dr. Jan Duffy helps buyers and sellers navigate Sun City Summerlin with local
                  market guidance, tours, and transaction support focused on this age-qualified (55+)
                  community—golf-adjacent homes, single-story floor plans, and the association&apos;s
                  clubs and recreation centers.
                </p>
                <p>
                  As both a veteran-owned and women-owned business, Dr. Duffy's practice is dedicated to accessible, inclusive service for all clients. Contact (702) 500-1955 to schedule a consultation today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
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


/* The duplicate component declaration has been removed 
   This was causing a deployment issue
*/