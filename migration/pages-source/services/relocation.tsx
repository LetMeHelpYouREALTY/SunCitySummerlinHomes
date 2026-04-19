
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Services.module.css';
import StructuredData from '@/components/StructuredData';

export default function RelocationPage() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Relocation Services</h1>
              <p className={styles.subtitle}>Expert guidance for relocating from California to Las Vegas</p>
            </div>
          </section>

          <section className={styles.serviceIntro}>
            <div className={styles.serviceContent}>
              <h2>Simplify Your Move to Las Vegas</h2>
              <p>Relocating from California to Las Vegas requires specialized knowledge and support. Dr. Jan Duffy provides comprehensive relocation services designed specifically for 55+ buyers looking to make the move to Sun City Summerlin and other Las Vegas communities.</p>
              
              <div className={styles.serviceHighlights}>
                <div className={styles.highlightCard}>
                  <h3>California Connection</h3>
                  <p>With deep experience helping California residents relocate to Las Vegas, Dr. Jan understands your unique needs and concerns.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Tax Advantages</h3>
                  <p>Expert guidance on the significant tax benefits of relocating from California to Nevada.</p>
                </div>
                <div className={styles.highlightCard}>
                  <h3>Lifestyle Transition</h3>
                  <p>Comprehensive support for adapting to the Las Vegas lifestyle and community integration.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image 
                src="/property3.jpg" 
                alt="Sun City Summerlin Community" 
                width={500} 
                height={350} 
                className={styles.serviceImg}
              />
            </div>
          </section>

          <section className={styles.processList}>
            <h2>The Relocation Process</h2>
            <div className={styles.processStepper}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Initial Consultation</h3>
                <p>Video call consultation to understand your needs, preferences, and timeline for relocation.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Community Selection</h3>
                <p>Personalized guidance on choosing the right Las Vegas community based on your lifestyle preferences.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Virtual Home Tours</h3>
                <p>Remote property viewing options before you travel to Las Vegas.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Visit Planning</h3>
                <p>Organized property tours and community visits when you come to Las Vegas.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Relocation Support</h3>
                <p>Connections to trusted movers, service providers, and resources for a smooth transition.</p>
              </div>
            </div>
          </section>

          <section className={styles.testimonialsSection}>
            <h2>What California Transplants Say</h2>
            <div className={styles.testimonialCards}>
              <div className={styles.testimonialCard}>
                <p>"Moving from San Diego to Las Vegas seemed overwhelming until we found Dr. Jan. She made the entire process simple and actually enjoyable."</p>
                <h4>- Robert & Linda C., former San Diego residents</h4>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Dr. Jan's knowledge about both California and Las Vegas real estate made our transition seamless. We're saving thousands in taxes and loving our new Sun City Summerlin lifestyle."</p>
                <h4>- James & Patricia M., former Los Angeles residents</h4>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Make the Move to Las Vegas?</h2>
            <p>Contact Dr. Jan Duffy today for a personalized consultation about relocating from California to Sun City Summerlin.</p>
            <Link href="/contact" className={styles.primaryButton}>Contact Now</Link>
          </section>
        </main>

        <StructuredData
          type="Service"
          data={{
            name: "California to Las Vegas Relocation Services",
            serviceType: "Real Estate Relocation Agent",
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
            description: "Specialized relocation services for California residents moving to Sun City Summerlin and Las Vegas 55+ communities.",
            offer: {
              "@type": "Offer",
              description: "Comprehensive relocation assistance for seniors and active adults relocating from California to Las Vegas"
            }
          }}
        />
      </div>
  );
}
