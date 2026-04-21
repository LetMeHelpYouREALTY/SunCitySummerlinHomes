'use client';

import { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';
import styles from '@/styles/Properties.module.css';
import StructuredData from '@/components/StructuredData';
import PropertyListingSchema from '@/components/PropertyListingSchema';
import Link from 'next/link';
import ScheduleButton from '@/components/ScheduleButton';
import { canonicalPath, phone } from '@/lib/site-contact';
import { SAMPLE_PROPERTIES } from '@/lib/sample-properties';
import { realScoutAgentEncodedId } from '@/lib/realscout-config';

export default function Properties() {
  const [realScoutLoaded, setRealScoutLoaded] = useState(false);

  const schemaData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy - Sun City Summerlin Specialist',
      description:
        "Browse luxury homes for sale in Sun City Summerlin, Las Vegas' premier 55+ community with Dr. Jan Duffy, REALTOR® specialist with 25+ years of experience.",
      url: canonicalPath('/properties'),
      telephone: phone.e164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9406 Del Webb Boulevard',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89134',
        addressCountry: 'US',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sun City Summerlin sample property profiles',
        itemListElement: SAMPLE_PROPERTIES.map((property) => ({
          '@type': 'Offer',
          url: canonicalPath(`/properties/${property.id}`),
          itemOffered: {
            '@type': 'Residence',
            name: property.title,
            url: canonicalPath(`/properties/${property.id}`),
            description: `${property.bedrooms} bed, ${property.bathrooms} bath, ${property.sqft} sq ft illustrative sample in Sun City Summerlin area`,
            numberOfRooms: property.bedrooms,
            floorSize: {
              '@type': 'QuantitativeValue',
              value: property.sqft,
              unitCode: 'SQF',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89134',
            },
            offers: {
              '@type': 'Offer',
              price: property.price,
              priceCurrency: 'USD',
            },
          },
        })),
      },
    }),
    []
  );

  useEffect(() => {
    setRealScoutLoaded(true);
  }, []);

  return (
    <div className={styles.container}>
      <StructuredData type="RealEstateAgent" data={schemaData} />
      <PropertyListingSchema />

      <Header />

      <div className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Luxury Homes in Sun City Summerlin</h1>
            <p className={styles.heroSubtitle}>
              Discover your perfect retirement home in Las Vegas&apos; premier 55+ community
            </p>
          </div>
        </div>

        <section className={styles.propertiesSection}>
          <div className={styles.filtersContainer}>
            <PropertyFilters />
          </div>

          <div className={styles.propertiesResults}>
            <div className={styles.resultsHeader}>
              <h2>
                Sample properties
                <span className={styles.resultCount}>({SAMPLE_PROPERTIES.length} sample profiles)</span>
              </h2>
            </div>

            <div className={styles.propertiesGrid}>
              {SAMPLE_PROPERTIES.map((property, index) => (
                <div
                  key={property.id}
                  className={styles.propertyCardWrapper}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <PropertyCard
                    id={property.id}
                    title={property.title}
                    price={property.price}
                    address={property.address}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    sqft={property.sqft}
                    image={property.image}
                    features={property.features}
                    isNew={property.isNew}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.callToAction}>
          <div className={styles.ctaContent}>
            <h2>Find Your Dream Home Today</h2>
            <p>Work with Dr. Jan Duffy, your Sun City Summerlin specialist with 25+ years of experience</p>
            <div className={styles.ctaButtons}>
              <ScheduleButton type="button" className={styles.primaryButton}>
                Schedule a showing
              </ScheduleButton>
              <a href={phone.telHref} className={styles.secondaryButton}>
                Call {phone.display}
              </a>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>Featured in Sun City Summerlin</h2>
            <p>Explore the amenities and lifestyle of this premier community</p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⛳</div>
              <h3>Championship Golf</h3>
              <p>
                Three distinct courses designed by renowned architects with sweeping views of the Las Vegas valley
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏊</div>
              <h3>Resort-Style Pools</h3>
              <p>Multiple swimming pools for year-round enjoyment with dedicated lap lanes and relaxation areas</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Active Community</h3>
              <p>Over 80 clubs and activities for residents, from tennis to woodworking to social gatherings</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌄</div>
              <h3>Mountain Views</h3>
              <p>Breathtaking vistas of Red Rock Canyon and the Las Vegas valley from many properties</p>
            </div>
          </div>
        </section>

        <div className={styles.listingsSection}>
          {realScoutLoaded && (
            <div suppressHydrationWarning>
              <realscout-office-listings
                agent-encoded-id={realScoutAgentEncodedId}
                sort-order="NEWEST"
                listing-status="For Sale"
                property-types="SFR,MF"
                price-min="800000"
                price-max="4000000"
              ></realscout-office-listings>
            </div>
          )}
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <h3>Sun City Summerlin</h3>
            <p>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
            <p>{phone.display}</p>
          </div>
          <div className={styles.footerLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/properties">Properties</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerNewsletter}>
            <h3>Stay Updated</h3>
            <p>Schedule a call for the latest listings and community news.</p>
            <div className={styles.newsletterForm}>
              <ScheduleButton type="button" className={styles.newsletterScheduleBtn}>
                Schedule a call
              </ScheduleButton>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} All rights reserved. Berkshire Hathaway HomeServices Nevada Properties.</p>
        </div>
      </footer>
    </div>
  );
}
