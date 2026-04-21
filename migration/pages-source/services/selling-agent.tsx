
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Services.module.css';
import StructuredData from '@/components/StructuredData';
import ScheduleButton from '@/components/ScheduleButton';

export default function SellingAgentPage() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Selling Agent Services</h1>
              <p className={styles.subtitle}>Specialized marketing and representation for Sun City Summerlin home sellers</p>
            </div>
          </section>

          <section className={styles.serviceIntro}>
            <div className={styles.serviceContent}>
              <h2>Maximize Your Home's Value</h2>
              <p>With over 25 years of experience selling homes in Sun City Summerlin, Dr. Jan Duffy provides targeted marketing strategies and skilled negotiation to help you achieve the best possible price for your property.</p>
              
              <div className={styles.serviceHighlights}>
                <div className={styles.highlightCard}>
                  <h3>Expert Pricing</h3>
                  <p>Precise property valuation based on deep knowledge of Sun City Summerlin market trends and property values.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Strategic Marketing</h3>
                  <p>Comprehensive marketing plan tailored to showcase your home's unique features to qualified buyers.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Negotiation Skills</h3>
                  <p>Professional representation to secure the best price and terms for your property.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image 
                src="/property2.jpg" 
                alt="Sun City Summerlin Home For Sale" 
                width={500} 
                height={350} 
                className={styles.serviceImg}
              />
            </div>
          </section>

          <section className={styles.processList}>
            <h2>The Home Selling Process</h2>
            <div className={styles.processStepper}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Property Evaluation</h3>
                <p>Comprehensive market analysis to determine the optimal listing price for your home.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Preparation & Staging</h3>
                <p>Expert advice on preparing your home to appeal to Sun City Summerlin buyers.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Marketing Campaign</h3>
                <p>Professional photography, virtual tours, and targeted marketing to qualified buyers.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Offer Management</h3>
                <p>Skilled evaluation of offers and negotiation to secure the best terms.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Closing Coordination</h3>
                <p>Management of all transaction details from contract to closing for a smooth experience.</p>
              </div>
            </div>
          </section>

          <section className={styles.marketingStrategy}>
            <h2>Specialized Marketing Strategy</h2>
            <div className={styles.strategyGrid}>
              <div className={styles.strategyItem}>
                <h3>Professional Photography</h3>
                <p>High-quality images that showcase your home's best features.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Virtual Tours</h3>
                <p>Interactive 3D tours that allow buyers to explore your home remotely.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Targeted Digital Advertising</h3>
                <p>Custom campaigns targeting qualified buyers interested in 55+ communities.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Luxury Network</h3>
                <p>Access to Berkshire Hathaway's exclusive network of luxury buyers.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>California Buyers Network</h3>
                <p>Specialized marketing to California residents looking to relocate to Las Vegas.</p>
              </div>
              <div className={styles.strategyItem}>
                <h3>Open House Events</h3>
                <p>Strategically planned open houses to showcase your property.</p>
              </div>
            </div>
          </section>

          <section className={styles.testimonialsSection}>
            <h2>What My Clients Say</h2>
            <div className={styles.testimonialCards}>
              <div className={styles.testimonialCard}>
                <p>"Dr. Jan sold our home in just 8 days for above asking price. Her marketing strategy and negotiation skills are exceptional."</p>
                <h4>- Richard & Ellen T.</h4>
              </div>
              <div className={styles.testimonialCard}>
                <p>"We interviewed several agents but Dr. Jan's knowledge of Sun City Summerlin was unmatched. She knew exactly how to market our golf course property."</p>
                <h4>- David & Carol M.</h4>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Sell Your Sun City Summerlin Home?</h2>
            <p>Contact Dr. Jan Duffy today for a complimentary home valuation and personalized selling strategy.</p>
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
            name: "Selling Agent Services in Sun City Summerlin",
            serviceType: "Real Estate Selling Agent",
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
            description: "Expert selling agent services specializing in Sun City Summerlin 55+ community homes in Las Vegas.",
            offer: {
              "@type": "Offer",
              description: "Professional home selling representation with specialized marketing for Sun City Summerlin properties"
            }
          }}
        />
      </div>
  );
}
