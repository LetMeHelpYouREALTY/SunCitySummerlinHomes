'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import PropertyCard from '@/components/PropertyCard';
import styles from '@/styles/Properties.module.css';
import { fetchWithErrorHandling } from '@/utils/client-utils';
import StructuredData from '@/components/StructuredData';
import PropertyListingSchema from '@/components/PropertyListingSchema';
import Link from 'next/link';

// Dynamically import components that might be heavy or use browser APIs
const PropertyFilters = dynamic(() => import('@/components/PropertyFilters'), {
  loading: () => <div className={styles.loadingPlaceholder}>Loading filters...</div>,
  ssr: true
});

// Mock property data (would come from API in production)
const propertiesData = [
  {
    id: 'prop1',
    title: 'Elegant Single-Story Villa',
    price: 548175,
    address: '1234 Sun Valley Dr, Las Vegas, NV 89134',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    image: '/property1.jpg',
    features: ['Golf Course View', 'Pool'],
    isNew: true
  },
  {
    id: 'prop2',
    title: 'Modern Desert Retreat',
    price: 615000,
    address: '5678 Canyon Ridge Ln, Las Vegas, NV 89134',
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 2100,
    image: '/property2.jpg',
    features: ['Single Story', 'Renovated']
  },
  {
    id: 'prop3',
    title: 'Spacious Golf Course Home',
    price: 729000,
    address: '9101 Fairway View Dr, Las Vegas, NV 89134',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    image: '/property3.jpg',
    features: ['Premium View', 'Large Lot']
  },
  {
    id: 'prop4',
    title: 'Charming Villa with Mountain Views',
    price: 499000,
    address: '2468 Red Rock Way, Las Vegas, NV 89134',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1650,
    image: '/property1.jpg',
    features: ['Mountain View', 'Updated Kitchen'],
    isNew: true
  },
  {
    id: 'prop5',
    title: 'Luxurious Desert Oasis',
    price: 875000,
    address: '1357 Palm Spring Ct, Las Vegas, NV 89134',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    image: '/property2.jpg',
    features: ['Premium Lot', 'Custom Design']
  },
  {
    id: 'prop6',
    title: 'Cozy Single Family Home',
    price: 425000,
    address: '3691 Vista Dr, Las Vegas, NV 89134',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    image: '/property3.jpg',
    features: ['Great Value', 'Move-in Ready']
  }
];

// Schema.org data for SEO
const schemaData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dr. Jan Duffy - Sun City Summerlin Specialist",
  "description": "Browse luxury homes for sale in Sun City Summerlin, Las Vegas' premier 55+ community with Dr. Jan Duffy, REALTOR® specialist with 25+ years of experience.",
  "url": "https://suncitysummerlin.com/properties",
  "telephone": "(702) 718-0043",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9406 Del Webb Boulevard",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89134",
    "addressCountry": "US"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sun City Summerlin Properties",
    "itemListElement": propertiesData.map((property, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Residence",
        "name": property.title,
        "description": `${property.bedrooms} bed, ${property.bathrooms} bath, ${property.sqft} sq ft home in Sun City Summerlin`,
        "numberOfRooms": property.bedrooms,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": property.sqft,
          "unitCode": "SQF"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89134"
        },
        "offers": {
          "@type": "Offer",
          "price": property.price,
          "priceCurrency": "USD"
        }
      }
    }))
  }
};

export default function Properties() {
  const [realScoutLoaded, setRealScoutLoaded] = useState(false);

  useEffect(() => {
    // Load RealScout after component mounts to avoid hydration issues
    setRealScoutLoaded(true);
  }, []);

  const [properties, setProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    bedrooms: 0,
    bathrooms: 0,
    features: [] as string[]
  });

  const fetchProperties = async () => {
    setLoading(true);
    try {
      // In a real app, this would be a fetch call to your API
      // const data = await fetchWithErrorHandling('/api/properties');
      // setProperties(data);
      // setFilteredProperties(data);

      // Simulate API delay
      setTimeout(() => {
        setProperties(propertiesData);
        setFilteredProperties(propertiesData);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // Adding type to fix TypeScript error
  const applyFilters = (newFilters: {
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
    bathrooms: number;
    features: string[];
  }) => {
    setFilters(newFilters);

    const filtered = properties.filter(property => {
      const matchesPrice = property.price >= newFilters.minPrice && 
                          property.price <= newFilters.maxPrice;

      const matchesBedrooms = newFilters.bedrooms === 0 || 
                             property.bedrooms >= newFilters.bedrooms;

      const matchesBathrooms = newFilters.bathrooms === 0 || 
                              property.bathrooms >= newFilters.bathrooms;

      const matchesFeatures = newFilters.features.length === 0 || 
                             newFilters.features.some(feature => 
                               property.features.includes(feature));

      return matchesPrice && matchesBedrooms && matchesBathrooms && 
            (newFilters.features.length === 0 || matchesFeatures);
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className={styles.container}>
      <StructuredData type="RealEstateAgent" data={schemaData} />
      <PropertyListingSchema />

      <Header />

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Luxury Homes in Sun City Summerlin</h1>
            <p className={styles.heroSubtitle}>Discover your perfect retirement home in Las Vegas' premier 55+ community</p>
          </div>
        </div>

        <section className={styles.propertiesSection}>
          <div className={styles.filtersContainer}>
            <PropertyFilters 
              currentFilters={filters} 
              onApplyFilters={applyFilters} 
            />
          </div>

          <div className={styles.propertiesResults}>
            <div className={styles.resultsHeader}>
              <h2>Available Properties 
                <span className={styles.resultCount}>
                  ({filteredProperties.length} Homes)
                </span>
              </h2>
              <div className={styles.sortOptions}>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" className={styles.sortSelect}>
                  <option value="newest">Newest</option>
                  <option value="price_high">Price (High to Low)</option>
                  <option value="price_low">Price (Low to High)</option>
                  <option value="beds">Bedrooms</option>
                  <option value="sqft">Square Footage</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Loading properties...</p>
              </div>
            ) : filteredProperties.length === 0 ? (
              <div className={styles.noResults}>
                <h3>No properties match your criteria</h3>
                <p>Try adjusting your filters to see more options.</p>
                <button 
                  className={styles.resetButton}
                  onClick={() => applyFilters({
                    minPrice: 0,
                    maxPrice: 1000000,
                    bedrooms: 0,
                    bathrooms: 0,
                    features: []
                  })}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={styles.propertiesGrid}>
                {filteredProperties.map((property, index) => (
                  <div key={property.id} className={styles.propertyCardWrapper} style={{'--index': index} as React.CSSProperties}>
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
            )}
          </div>
        </section>

        <section className={styles.callToAction}>
          <div className={styles.ctaContent}>
            <h2>Find Your Dream Home Today</h2>
            <p>Work with Dr. Jan Duffy, your Sun City Summerlin specialist with 25+ years of experience</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact/" className={styles.primaryButton}>Schedule a Showing</Link>
              <Link href="tel:7027180043" className={styles.secondaryButton}>Call (702) 718-0043</Link>
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
              <p>Three distinct courses designed by renowned architects with sweeping views of the Las Vegas valley</p>
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
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="NEWEST" 
                listing-status="For Sale" 
                property-types="SFR,MF" 
                price-min="800000" 
                price-max="4000000">
              </realscout-office-listings>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <h3>Sun City Summerlin</h3>
            <p>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
            <p>(702) 718-0043</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/properties/">Properties</Link></li>
              <li><Link href="/community/">Community</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerNewsletter}>
            <h4>Stay Updated</h4>
            <p>Subscribe to receive the latest listings and community news</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
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
