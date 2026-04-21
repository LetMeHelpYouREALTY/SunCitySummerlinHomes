'use client';

import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Testimonials.module.css';
import { useState, useEffect } from 'react';
import StructuredData from '@/components/StructuredData';
import Header from '@/components/Header';
import ScheduleButton from '@/components/ScheduleButton';
import RealScoutHomeSearchLink from '@/components/RealScoutHomeSearchLink';
import { SITE_ORIGIN } from '@/lib/site-contact';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & David Johnson",
      location: 'Summerlin, Las Vegas',
      text: "Moving to Sun City Summerlin was the best decision we have made. Dr. Jan Duffy understood exactly what we were looking for and found us the perfect single-story home with mountain views. The community is vibrant and the amenities are outstanding.",
      rating: 5,
      date: "October 2023",
      image: "/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Robert Wilson",
      location: "California Transplant",
      text: "After looking at dozens of properties in Las Vegas, Dr. Jan showed us homes in Sun City Summerlin that stood out for their quality finishes and perfect location near the golf course. Her knowledge of California to Nevada transitions made our relocation stress-free.",
      rating: 5,
      date: "September 2023",
      image: "/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Margaret Thompson",
      location: "Sun City Summerlin Resident",
      text: "Dr. Jan made our home buying process so smooth. Her understanding of the 55+ community lifestyle helped us find exactly what we needed - close to recreation centers and with the single-level layout we required. We're loving our new home and the active lifestyle here.",
      rating: 5,
      date: "August 2023",
      image: "/testimonial3.jpg"
    },
    {
      id: 4,
      name: "James & Linda Peterson",
      location: "Golf Course Property Owner",
      text: "As golf enthusiasts, finding a home with direct golf course access was our priority. Dr. Jan's extensive knowledge of Sun City Summerlin's three golf courses helped us select a property with the best views and proximity to the clubhouse. Her negotiation skills saved us thousands!",
      rating: 5,
      date: "July 2023",
      image: "/testimonial4.jpg"
    },
    {
      id: 5,
      name: "Thomas Martinez",
      location: "Recent Retiree",
      text: "Dr. Jan understood my needs as a recent retiree looking for an active community. She showed me properties near the recreation centers and introduced me to several community clubs. Six months after moving in, I'm busier and happier than ever!",
      rating: 5,
      date: "June 2023",
      image: "/testimonial5.jpg"
    },
    {
      id: 6,
      name: "Barbara & Richard Cohen",
      location: "Downsizers from Henderson",
      text: "Downsizing from our large Henderson home, we needed a REALTOR® who understood our emotional journey. Dr. Jan was patient, kind, and incredibly knowledgeable about Sun City Summerlin's floor plans. She found us the perfect size home with all the amenities we wanted.",
      rating: 5,
      date: "May 2023",
      image: "/testimonial6.jpg"
    }
  ];

  const reviewSchema = {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy, REALTOR®",
    image: "/drjan-logo.png",
    url: SITE_ORIGIN,
    telephone: "(702) 718-0043",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 Del Webb Boulevard",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US"
    },
    review: testimonials.map(testimonial => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name
      },
      datePublished: testimonial.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: "5"
      },
      reviewBody: testimonial.text
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length.toString()
    }
  };

  return (
    <div className={styles.container}>
      <StructuredData type="RealEstateAgent" data={reviewSchema} />

      <Header />

      <div className={`${styles.main} ${isVisible ? styles.fadeIn : ''}`}>
        <section className={styles.testimonialHero}>
          <h1 className={styles.pageTitle}>Client Success Stories</h1>
          <p className={styles.pageSubtitle}>
            Hear from homeowners who found their perfect Sun City Summerlin property with Dr. Jan Duffy
          </p>

          <div className={styles.ratingSummary}>
            <div className={styles.overallRating}>
              <div className={styles.ratingStars}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className={styles.ratingText}>5.0 out of 5 stars based on {testimonials.length} reviews</p>
            </div>
          </div>
        </section>

        <section className={styles.testimonialsList}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`${styles.testimonialCard}`} data-aos="fade-up">
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialInfo}>
                  <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                  <p className={styles.testimonialLocation}>{testimonial.location}</p>
                  <div className={styles.testimonialRating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                </div>
                <div className={styles.testimonialDate}>
                  {testimonial.date}
                </div>
              </div>

              <blockquote className={styles.testimonialText}>
                "{testimonial.text}"
              </blockquote>

              <div className={styles.testimonialFooter}>
                <span className={styles.verifiedBadge}>Verified Purchase</span>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.testimonialCTA}>
          <h2>Ready to Experience the Sun City Summerlin Lifestyle?</h2>
          <p>Join the many satisfied homeowners who found their perfect home with Dr. Jan Duffy, your 55+ community specialist with 25+ years of Las Vegas real estate experience</p>
          <div className={styles.ctaButtons}>
            <Link href="/properties" className={styles.primaryBtn}>
              View Available Properties
            </Link>
            <ScheduleButton
              type="button"
              className={styles.secondaryBtn}
              aria-label="Schedule a consultation — open Calendly"
            >
              Schedule a Consultation
            </ScheduleButton>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
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

