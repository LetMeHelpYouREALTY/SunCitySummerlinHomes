
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Services.module.css';
import StructuredData from '@/components/StructuredData';
import ScheduleButton from '@/components/ScheduleButton';

export default function LuxuryHomesPage() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Luxury Home Services</h1>
              <p className={styles.subtitle}>Specialized expertise for premium properties in Sun City Summerlin</p>
            </div>
          </section>

          <section className={styles.serviceIntro}>
            <div className={styles.serviceContent}>
              <h2>Sun City Summerlin's Luxury Home Expert</h2>
              <p>With over 25 years of experience in Sun City Summerlin's luxury market, Dr. Jan Duffy offers unparalleled expertise in buying and selling premium properties, including golf course homes, custom estates, and designer residences.</p>
              
              <div className={styles.serviceHighlights}>
                <div className={styles.highlightCard}>
                  <h3>Golf Course Properties</h3>
                  <p>Specialized knowledge of Sun City Summerlin's premier golf course homes with stunning views.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Custom Estates</h3>
                  <p>Expert representation for unique custom-built homes with premium features and finishes.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Elevated Marketing</h3>
                  <p>Premium marketing packages including professional photography, virtual tours, and targeted luxury buyer outreach.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image 
                src="/golf-course.jpg" 
                alt="Sun City Summerlin Luxury Home" 
                width={500} 
                height={350} 
                className={styles.serviceImg}
              />
            </div>
          </section>

          <section className={styles.marketingStrategy}>
            <h2>Luxury Property Marketing</h2>
            <div className={styles.strategyGrid}>
              <div className={styles.strategyItem}>
                <h3>Architectural Photography</h3>
                <p>Professional architectural photography that showcases your home's design and premium features.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Immersive 3D Tours</h3>
                <p>State-of-the-art virtual tour technology that allows buyers to explore every detail of your home.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Luxury Network Access</h3>
                <p>Direct marketing to Berkshire Hathaway's exclusive network of luxury buyers.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Feature Highlights</h3>
                <p>Detailed documentation of premium materials, finishes, and custom features.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Lifestyle Marketing</h3>
                <p>Showcasing the Sun City Summerlin luxury lifestyle, amenities, and golf course advantages.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Private Showings</h3>
                <p>Exclusive showings and broker events for qualified luxury buyers.</p>
              </div>
            </div>
          </section>

          <section className={styles.testimonialsSection}>
            <h2>What Luxury Clients Say</h2>
            <div className={styles.testimonialCards}>
              <div className={styles.testimonialCard}>
                <p>"Dr. Jan's knowledge of Sun City Summerlin's luxury market is unmatched. She sold our golf course home quickly and for an excellent price."</p>
                <h4>- William & Elizabeth S.</h4>
              </div>
              <div className={styles.testimonialCard}>
                <p>"When purchasing our custom home in Sun City Summerlin, Dr. Jan's attention to detail and expertise in premium properties was invaluable."</p>
                <h4>- Richard & Margaret T.</h4>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Buy or Sell a Luxury Property?</h2>
            <p>Contact Dr. Jan Duffy today for a private consultation about Sun City Summerlin's luxury home market.</p>
            <ScheduleButton
              type="button"
              className={styles.primaryButton}
              aria-label="Contact Dr. Jan Duffy — open scheduling"
            >
              Contact Now
            </ScheduleButton>
          </section>
        </div>

        <StructuredData
          type="Service"
          data={{
            name: "Luxury Home Services in Sun City Summerlin",
            serviceType: "Luxury Real Estate Agent",
            provider: {
              "@type": "RealEstateAgent",
              name: "Dr. Jan Duffy",
              telephone: "(702) 718-0043",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9406 Del Webb Boulevard",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89134"
              }
            },
            areaServed: {
              "@type": "Place",
              name: "Sun City Summerlin, Las Vegas, NV"
            },
            description: "Expert luxury home services specializing in Sun City Summerlin golf course properties and premium homes.",
            offer: {
              "@type": "Offer",
              description: "Premium marketing and representation for luxury properties in Sun City Summerlin"
            }
          }}
        />
      </div>
  );
}
