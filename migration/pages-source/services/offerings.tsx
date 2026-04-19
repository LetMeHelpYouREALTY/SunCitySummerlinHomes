
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Services.module.css';
import StructuredData from '@/components/StructuredData';

export default function ServiceOfferings() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Specialized Services</h1>
              <p className={styles.subtitle}>Tailored real estate solutions for Sun City Summerlin's 55+ community residents</p>
            </div>
          </section>

          <section className={styles.serviceIntro}>
            <div className={styles.serviceContent}>
              <h2>Expert Services for Sun City Summerlin's Unique Market</h2>
              <p>With over 25 years of specialized experience in Sun City Summerlin real estate, Dr. Jan Duffy provides tailored services designed specifically for the unique needs of 55+ community residents and prospective buyers.</p>
            </div>
          </section>

          <section className={styles.processList}>
            <div className={`${styles.servicesContainer} services-container`} itemScope itemType="http://schema.org/LocalBusiness">
              <meta itemProp="name" content="Dr. Jan Duffy, REALTOR - 55+ Community Specialist" />
              <meta itemProp="telephone" content="(702) 718-0043" />
              <meta itemProp="url" content="https://suncitysummerlinhomesforsale.com" />
              
              <div className="service-item" itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog">
                <div className={styles.serviceCard}>
                  <div className="service" itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                    <h3 itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                      <span itemProp="name">Sun City Summerlin Buyer Representation</span>
                    </h3>
                    <p itemProp="description">Expert buyer representation for 55+ homebuyers in Sun City Summerlin. Our senior-focused services save you an average of 3.2% while finding accessible, low-maintenance properties. Includes golf community expert guidance, HOA evaluation, and Sun City-specific neighborhood tours.</p>
                    <Link href="/services/buying-agent" className={styles.ctaButton}>Learn More</Link>
                  </div>
                </div>

                <div className={styles.serviceCard}>
                  <div className="service" itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                    <h3 itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                      <span itemProp="name">Luxury Property Sales in Sun City Summerlin</span>
                    </h3>
                    <p itemProp="description">Specialized luxury home marketing for discerning 55+ sellers and buyers. Expert in golf course properties, mountain view homes, and premium Del Webb designs with professional photography, virtual tours, and targeted campaigns to qualified active adult buyers.</p>
                    <Link href="/services/luxury-homes" className={styles.ctaButton}>Learn More</Link>
                  </div>
                </div>

                <div className={styles.serviceCard}>
                  <div className="service" itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                    <h3 itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                      <span itemProp="name">Senior Downsizing Specialist</span>
                    </h3>
                    <p itemProp="description">Complete downsizing coordination for 55+ homeowners transitioning to right-sized retirement living in Sun City Summerlin. Services include sorting belongings, estate sales coordination, packing assistance, and finding your perfect low-maintenance property.</p>
                    <Link href="/services/relocation" className={styles.ctaButton}>Learn More</Link>
                  </div>
                </div>
                
                <div className={styles.serviceCard}>
                  <div className="service" itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                    <h3 itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                      <span itemProp="name">Veterans Housing Benefits Expert</span>
                    </h3>
                    <p itemProp="description">Specialized assistance for senior veterans using VA loan benefits for Sun City Summerlin properties. Expert in navigating VA requirements for 55+ communities, securing COE verification, and maximizing entitlement benefits for Las Vegas retirement homes.</p>
                    <Link href="/contact" className={styles.ctaButton}>Contact For Details</Link>
                  </div>
                </div>
                
                <div className={styles.serviceCard}>
                  <div className="service" itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                    <h3 itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                      <span itemProp="name">HOA Navigation Specialist</span>
                    </h3>
                    <p itemProp="description">Expert guidance for understanding Sun City Summerlin's HOA structure, fees, and regulations. Services include HOA financial health assessment, age-verification requirement assistance, and architectural guideline review for 55+ community buyers.</p>
                    <Link href="/contact" className={styles.ctaButton}>Contact For Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to work with Sun City Summerlin's most experienced REALTOR®?</h2>
            <p>Contact Dr. Jan Duffy today for a personalized consultation about your real estate needs in Las Vegas' premier 55+ community.</p>
            <Link href="/contact" className={styles.primaryButton}>Contact Now</Link>
          </section>
        </main>

        <StructuredData
          type="LocalBusiness"
          data={{
            name: "Dr. Jan Duffy, REALTOR® - Sun City Summerlin 55+ Community Specialist",
            telephone: "(702) 718-0043",
            url: "https://suncitysummerlin.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "9406 Del Webb Boulevard",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89134",
              addressCountry: "US"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 36.2043,
              longitude: -115.2936
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Sun City Summerlin Real Estate Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sun City Summerlin Buyer Representation",
                    description: "Expert buyer representation for 55+ homebuyers in Sun City Summerlin."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Luxury Property Sales in Sun City Summerlin",
                    description: "Specialized luxury home marketing for discerning 55+ sellers and buyers."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Senior Downsizing Specialist",
                    description: "Complete downsizing coordination for 55+ homeowners transitioning to right-sized retirement living."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Veterans Housing Benefits Expert",
                    description: "Specialized assistance for senior veterans using VA loan benefits for Sun City Summerlin properties."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "HOA Navigation Specialist",
                    description: "Expert guidance for understanding Sun City Summerlin's HOA structure, fees, and regulations."
                  }
                }
              ]
            }
          }}
        />
      </div>
  );
}
