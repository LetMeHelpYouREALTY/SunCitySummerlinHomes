'use client';


import Link from "next/link";
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from "react";
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';

export default function Lifestyle() {
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
        <h1 className={styles.pageTitle}>Active Adult Lifestyle</h1>

        <section className={`${styles.lifestyleSection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.lifestyleFeatures}>
            <div className={styles.lifestyleFeature}>
              <h3>Golf Paradise</h3>
              <p>Enjoy three distinct courses: Highland Falls with panoramic Vegas views, Palm Valley with mild elevation changes, and the executive Eagle Crest course.</p>
            </div>
            <div className={styles.lifestyleFeature}>
              <h3>Recreation Centers</h3>
              <p>Four recreation centers offer fitness facilities, swimming pools, pickleball courts, and spaces for over 100 different clubs and activities.</p>
            </div>
            <div className={styles.lifestyleFeature}>
              <h3>Golf Cart Community</h3>
              <p>Designated golf cart pathways throughout the community make it easy to travel between courses, recreation centers, and local shopping areas.</p>
            </div>
            <div className={styles.lifestyleFeature}>
              <h3>Shopping &amp; Dining</h3>
              <p>Tucson Plaza features pharmacies, fitness centers, restaurants like My Mother's House Italian cuisine, and Smith's grocery store.</p>
            </div>
          </div>
          
          <div className={styles.lifestyleStories}>
            <h2>Resident Stories</h2>
            
            <div className={styles.storyCard}>
              <h3>The Johnsons</h3>
              <p>
                &ldquo;After 30 years in Chicago, we were ready for sunshine and an active community. We&apos;ve taken up
                golf, joined three clubs, and made more friends in six months than we had in the last decade. The
                lifestyle here keeps us young!&rdquo;
              </p>
            </div>
            
            <div className={styles.storyCard}>
              <h3>Robert & Mary</h3>
              <p>
                &ldquo;We love the convenience of using our golf cart to get around. Between golf outings, club meetings,
                and community events, there&apos;s not a day that goes by when we aren&apos;t busy with something
                enjoyable.&rdquo;
              </p>
            </div>
            
            <div className={styles.storyCard}>
              <h3>The Wilson Family</h3>
              <p>
                &ldquo;The recreation centers are the heart of daily life here. Between pickleball tournaments, swimming,
                and fitness classes, we&apos;ve never been more active. Plus, we&apos;re just a short drive from the
                Strip when we want some excitement!&rdquo;
              </p>
            </div>
          </div>
          
          <div className={styles.lifestyleCalendar}>
            <h2>Community Calendar Highlights</h2>
            <div className={styles.calendarItems}>
              <div className={styles.calendarItem}>
                <h3>Weekly Farmers Market</h3>
                <p>Every Saturday, 8am-12pm at the Mountain Shadows Center</p>
              </div>
              <div className={styles.calendarItem}>
                <h3>Golf Tournament</h3>
                <p>First Tuesday of each month at Highland Falls Course</p>
              </div>
              <div className={styles.calendarItem}>
                <h3>Arts & Crafts Fair</h3>
                <p>Quarterly showcase of resident talents and creations</p>
              </div>
              <div className={styles.calendarItem}>
                <h3>Desert Gardening Workshop</h3>
                <p>Monthly tips and techniques for desert landscaping</p>
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
}

