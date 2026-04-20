'use client';

import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formStatusMessage, setFormStatusMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setFormStatusMessage('Form submitted successfully. We will get back to you within 24 hours.');
    setFormSubmitted(true);
  };

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
          <Link href="/properties/">Properties</Link>
          <Link href="/community/">Community</Link>
          <Link href="/lifestyle/">Lifestyle</Link>
          <Link href="/amenities/">Amenities</Link>
          <Link href="/zipcodes/">Zipcodes</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href='/contact/'>Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
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

        <h1 className={styles.pageTitle}>Contact Us</h1>
          <div className={styles.contactIntro}>
            <h2>We're Here to Help</h2>
            <p>
              Whether you're looking to buy a home in Sun City Summerlin, sell your current property, or simply have questions about the community, our experienced team is ready to assist you.
            </p>
          </div>

          {formSubmitted ? (
            <div className={styles.formSuccess}>
              <h2>Thank You for Contacting Us!</h2>
              <p>We've received your message and will get back to you within 24 hours.</p>
              <button onClick={() => setFormSubmitted(false)} className={styles.resetButton}>
                Send Another Message
              </button>
            </div>
          ) : (
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit} aria-describedby="contact-form-status">
                <p id="contact-form-status" aria-live="polite">
                  {formStatusMessage}
                </p>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" required aria-describedby="contact-form-status" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" required aria-describedby="contact-form-status" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Your Phone" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="interest">I'm interested in:</label>
                  <select id="interest">
                    <option value="buying">Buying a home</option>
                    <option value="selling">Selling my home</option>
                    <option value="information">Community information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your Message" rows={4} required aria-describedby="contact-form-status"></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          )}

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>9406 Del Webb Boulevard, Las Vegas, NV 89134</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>(702) 718-0043</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>DrDuffy@bhhsnv.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Office Hours</h3>
              <p>Every day: 6:00 AM–9:00 PM</p>
              <p><small>Closed on major holidays</small></p>
            </div>
            <div className={styles.infoItem}>
              <h3>Google Business</h3>
              <p><a href="https://g.co/kgs/uwtzcWj" target="_blank" rel="noopener noreferrer">View Google Business Profile</a></p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <h3>Find Us</h3>
            <div className={styles.map}>
              {/* In a real application, you would embed a Google Map here */}
              <div className={styles.mapPlaceholder}>
                <p>Map of Sun City Summerlin Location</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LL</p>
          <p>Real Estate Las Vegas, NV <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">drjanduffy.realscout.com/onboarding</a></p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
        <div className={styles.socialLinks}>
          <h3>Connect With Dr. Jan</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/drjanduffy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href="https://www.facebook.com/DrJanDuffyRealtorCentennialHills/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">👍</a>
            <a href="https://www.pinterest.com/bhhsluxury/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">📌</a>
            <a href="https://www.youtube.com/@DrDuffy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">🎬</a>
            <a href="https://x.com/drjanduffy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://www.linkedin.com/company/lvrmembers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://www.tiktok.com/@dr.janduffy" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

