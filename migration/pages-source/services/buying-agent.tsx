
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Services.module.css';
import StructuredData from '@/components/StructuredData';

export default function BuyingAgentPage() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Buying Agent Services</h1>
              <p className={styles.subtitle}>Specialized expertise for homebuyers in Sun City Summerlin</p>
            </div>
          </section>

          <section className={styles.serviceIntro}>
            <div className={styles.serviceContent}>
              <h2>Find Your Dream Home in Sun City Summerlin</h2>
              <p>With over 25 years of experience as a REALTOR® in Sun City Summerlin, Dr. Jan Duffy provides unparalleled expertise in helping buyers find their perfect home in Las Vegas' premier 55+ community.</p>
              
              <div className={styles.serviceHighlights}>
                <div className={styles.highlightCard}>
                  <h3>Community Expert</h3>
                  <p>Deep knowledge of all neighborhoods, amenities, and lifestyle opportunities in Sun City Summerlin.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Property Specialist</h3>
                  <p>Expert guidance on single-story homes, golf course properties, and luxury residences.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Personalized Search</h3>
                  <p>Tailored property searches based on your specific needs, preferences, and budget.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image 
                src="/property1.jpg" 
                alt="Sun City Summerlin Home" 
                width={500} 
                height={350} 
                className={styles.serviceImg}
              />
            </div>
          </section>

          <section className={styles.processList}>
            <h2>The Home Buying Process</h2>
            <div className={styles.processStepper}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Initial Consultation</h3>
                <p>We'll discuss your needs, preferences, and budget to create a tailored home search strategy.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Property Search</h3>
                <p>Access to all Sun City Summerlin listings, including exclusive and pre-market opportunities.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Property Tours</h3>
                <p>Personalized tours of selected properties with expert insights on each home's features.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Offer & Negotiation</h3>
                <p>Strategic offer preparation and skilled negotiation to secure your home at the best terms.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Closing Support</h3>
                <p>Guidance through inspections, paperwork, and closing process with attention to detail.</p>
              </div>
            </div>
          </section>

          <section className={styles.testimonialsSection}>
            <h2>What My Clients Say</h2>
            <div className={styles.testimonialCards}>
              <div className={styles.testimonialCard}>
                <p>"Dr. Jan's knowledge of Sun City Summerlin was invaluable in our home search. She knew exactly which neighborhoods would suit our lifestyle."</p>
                <h4>- Michael & Barbara R.</h4>
              </div>
              <div className={styles.testimonialCard}>
                <p>"As California transplants, we needed someone who understood what we were looking for. Dr. Jan found us the perfect home with golf course views."</p>
                <h4>- Thomas & Susan L.</h4>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Contact Dr. Jan Duffy today for a personalized consultation about buying a home in Sun City Summerlin.</p>
            <Link href="/contact" className={styles.primaryButton}>Contact Now</Link>
          </section>
        </main>

        <StructuredData
          type="Service"
          data={{
            name: "Buying Agent Services in Sun City Summerlin",
            serviceType: "Real Estate Buying Agent",
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
            description: "Expert buying agent services specializing in Sun City Summerlin 55+ community homes in Las Vegas.",
            offer: {
              "@type": "Offer",
              description: "Personalized home buying assistance for seniors and active adults looking for homes in Sun City Summerlin"
            }
          }}
        />
      </div>
  );
}
