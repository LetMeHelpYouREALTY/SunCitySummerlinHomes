'use client';

import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import searchStyles from '@/styles/Search.module.css';
import { useEffect, useState } from 'react';
import ScheduleButton from '@/components/ScheduleButton';

type SearchProperty = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  propertyType: string;
  address: string;
  image: string;
  features: string[];
};

const sampleProperties: SearchProperty[] = [
  {
    id: 1,
    title: 'Elegant Single-Story Home',
    price: 548175,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    propertyType: 'Single-Story',
    address: '10243 Sun City Blvd, Las Vegas, NV 89134',
    image: '/property1.jpg',
    features: ['Golf Course View', 'Patio', 'Updated Kitchen'],
  },
  {
    id: 2,
    title: 'Golf Course Paradise',
    price: 625000,
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 2100,
    propertyType: 'Single-Story',
    address: '9876 Del Webb Blvd, Las Vegas, NV 89134',
    image: '/property2.jpg',
    features: ['Pool', 'Spa', 'Mountain View'],
  },
  {
    id: 3,
    title: 'Contemporary Desert Oasis',
    price: 485000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1750,
    propertyType: 'Patio Home',
    address: '2468 Sunshine Way, Las Vegas, NV 89134',
    image: '/property3.jpg',
    features: ['Updated Flooring', 'Open Floor Plan', 'Desert Landscaping'],
  },
];

export default function PropertySearch() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
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
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/zipcodes">Zipcodes</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={`${styles.main} ${isVisible ? styles.fadeIn : ''}`}>
        <section className={searchStyles.searchSection}>
          <h1 className={styles.pageTitle}>Find Your Dream Home in Sun City Summerlin</h1>
          <p className={searchStyles.leadCopy}>
            Search filters have been replaced with personal guidance. Schedule a call to refine your criteria, browse
            featured sample homes below, or open the full properties page and live office listings.
          </p>
          <div className={`${styles.ctaButtons} ${searchStyles.searchCtaRow}`}>
            <ScheduleButton type="button" className={styles.primaryButton}>
              Schedule a search call
            </ScheduleButton>
            <Link href="/properties" className={styles.secondaryButton}>
              View all properties
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Full scheduling page
            </Link>
          </div>

          <div className={searchStyles.searchResults} style={{ marginTop: '2rem' }}>
            <div className={searchStyles.resultsGrid}>
              {sampleProperties.map((property) => (
                <div key={property.id} className={searchStyles.propertyCard}>
                  <div className={searchStyles.propertyImage}>
                    <img src={property.image} alt="" />
                  </div>
                  <div className={searchStyles.propertyInfo}>
                    <h3>{property.title}</h3>
                    <p className={searchStyles.propertyPrice}>{formatPrice(property.price)}</p>
                    <p className={searchStyles.propertyAddress}>{property.address}</p>
                    <div className={searchStyles.propertyStats}>
                      <span>{property.bedrooms} bd</span>
                      <span>{property.bathrooms} ba</span>
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                    <div className={searchStyles.propertyFeatures}>
                      {property.features.map((feature, i) => (
                        <span key={i} className={searchStyles.featureTag}>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link href="/properties" className={searchStyles.viewPropertyBtn}>
                      View listings hub
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={searchStyles.searchTips}>
          <h2>Home Search Tips for Sun City Summerlin</h2>
          <div className={searchStyles.tipsGrid}>
            <div className={searchStyles.tipCard}>
              <h3>Golf Course Views</h3>
              <p>
                Properties along Eagle Crest, Highland Falls, or Palm Valley courses command premium prices but offer
                stunning views and direct golf access.
              </p>
            </div>
            <div className={styles.tipCard}>
              <h3>Single-Story Living</h3>
              <p>
                Most Sun City Summerlin homes are single-story, perfect for aging in place with accessible layouts and
                no stairs to navigate.
              </p>
            </div>
            <div className={styles.tipCard}>
              <h3>Community Location</h3>
              <p>
                Consider proximity to recreation centers, shopping, and medical facilities when selecting your ideal
                neighborhood within Sun City.
              </p>
            </div>
            <div className={styles.tipCard}>
              <h3>Updated Properties</h3>
              <p>
                Many homes have been renovated with modern finishes. Look for updated kitchens, bathrooms, and
                energy-efficient features.
              </p>
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
          <p>
            Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las
            Vegas, and Spring Valley Nevada. S.0197614.LL
          </p>
          <p>
            Real Estate Las Vegas, NV{' '}
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">
              drjanduffy.realscout.com/onboarding
            </a>
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
