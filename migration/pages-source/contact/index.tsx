'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import CalendlyInline from '@/components/CalendlyInline';
import ScheduleButton from '@/components/ScheduleButton';
import { address, email, gbpLinks, phone } from '@/lib/site-contact';
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <div className={styles.logoText}>
            <p className={styles.logo}>Sun City Summerlin Homes</p>
            <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Community Specialist</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/zipcodes">Zipcodes</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className={styles.main}>
        <section className={`${styles.contactSection} ${isVisible ? styles.fadeIn : ''}`}>
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

          <h1 className={styles.pageTitle}>Contact &amp; Scheduling</h1>
          <div className={styles.contactIntro}>
            <h2>Schedule time with Dr. Jan Duffy</h2>
            <p>
              Choose a private 15-minute conversation below, or call for immediate help with buying, selling, or
              Sun City Summerlin community questions.
            </p>
          </div>

          <div className={styles.contactCalendlyActions}>
            <ScheduleButton type="button" className={styles.primaryButton} aria-label="Open scheduling popup">
              Open scheduling popup
            </ScheduleButton>
          </div>

          <div className={styles.contactCalendlyEmbed}>
            <h2 className={styles.sectionTitle}>Book your 15-minute call</h2>
            <CalendlyInline />
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>{address.singleLine}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>
                <a href={phone.telHref}>{phone.display}</a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>
                <a href={email.mailtoHref}>{email.display}</a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>Office Hours</h3>
              <p>Every day: 6:00 AM–9:00 PM</p>
              <p>
                <small>Closed on major holidays</small>
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>Google Business</h3>
              <p>
                <a href={gbpLinks.profile} target="_blank" rel="noopener noreferrer">
                  View Google Business Profile
                </a>
              </p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <h3>Find Us</h3>
            <div className={styles.map}>
              <div className={styles.mapPlaceholder}>
                <p>Map of Sun City Summerlin Location</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>
            Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las
            Vegas, and Spring Valley Nevada. S.0197614.LL
          </p>
          <p>
            Real Estate Las Vegas, NV{' '}
            <RealScoutHomeSearchLink>Live MLS search (RealScout)</RealScoutHomeSearchLink>
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">
            BHHS.com
          </a>
        </div>
        <div className={styles.socialLinks}>
          <h3>Connect With Dr. Jan</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/drjanduffy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              📸
            </a>
            <a
              href="https://www.facebook.com/DrJanDuffyRealtorCentennialHills/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              👍
            </a>
            <a href="https://www.pinterest.com/bhhsluxury/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              📌
            </a>
            <a href="https://www.youtube.com/@DrDuffy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              🎬
            </a>
            <a href="https://x.com/drjanduffy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              🐦
            </a>
            <a href="https://www.linkedin.com/company/lvrmembers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              💼
            </a>
            <a href="https://www.tiktok.com/@dr.janduffy" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              🎵
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
