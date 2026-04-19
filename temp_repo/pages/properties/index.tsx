import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import MortgageCalculator from "../../components/MortgageCalculator";

const Properties: NextPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  const propertyImages = [
    "/property1.jpg",
    "/property2.jpg",
    "/property3.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate property images
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % propertyImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [propertyImages.length]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Properties | BHHS Sun City Summerlin</title>
        <meta name="description" content="View our luxury properties in Sun City Summerlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image 
            src="/bhhs-quality-seal-black.png" 
            alt="BHHS Logo" 
            className={styles.bhsLogo}
            width={150}
            height={60}
            priority
          />
          <h1 className={styles.logo}>Sun City Summerlin Homes</h1>
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

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Our Properties</h1>

        <section id="property" className={`${styles.propertySection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionTitleAccent}>Premium</span> Property Highlights
          </h2>

          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <div className={styles.imageOverlay}>
                <span className={styles.imageCount}>{activeImage + 1}/{propertyImages.length}</span>
              </div>
              <Image 
                src={propertyImages[activeImage]} 
                alt="Sun City Summerlin Property" 
                className={styles.featuredImage}
                width={800}
                height={600}
                priority
                layout="responsive"
              />
              <div className={styles.imageNavigation}>
                <button 
                  onClick={() => setActiveImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)}
                  className={styles.navArrow}
                  aria-label="Previous image"
                >
                  <span aria-hidden="true">❮</span>
                </button>
                <button 
                  onClick={() => setActiveImage((prev) => (prev + 1) % propertyImages.length)}
                  className={styles.navArrow}
                  aria-label="Next image"
                >
                  <span aria-hidden="true">❯</span>
                </button>
              </div>
            </div>
            <div className={styles.thumbnails}>
              {propertyImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveImage(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View property image ${index + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveImage(index);
                    }
                  }}
                >
                  <Image 
                    src={image} 
                    alt={`Property view ${index + 1}`} 
                    width={150}
                    height={100}
                    layout="responsive"
                  />
                  <div className={styles.thumbnailCaption}>Property view {index + 1}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.propertyDetails}>
            <div className={styles.detailCard}>
              <div className={styles.priceTag}>
                <p className={styles.propertyPrice}>$548,175</p>
                <span className={styles.priceBadge}>Premium Location</span>
              </div>
              <div className={styles.propertyStats}>
                <div className={styles.statItem}>
                  <span className={styles.statIcon}>🛏️</span>
                  <span className={styles.statValue}>3</span>
                  <span className={styles.statLabel}>Bedrooms</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statIcon}>🚿</span>
                  <span className={styles.statValue}>2</span>
                  <span className={styles.statLabel}>Bathrooms</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statIcon}>📏</span>
                  <span className={styles.statValue}>1,850</span>
                  <span className={styles.statLabel}>Sq Ft</span>
                </div>
              </div>
              <p className={styles.propertyStyle}>Contemporary Mediterranean | Golf Course Views</p>
            </div>

            <div className={styles.descriptionBox}>
              <p className={styles.description}>
                This stunning single-story home in the prestigious Sun City Summerlin community offers the perfect blend of comfort and luxury. Featuring an open floor plan with spacious breakfast nook, gourmet kitchen, and resort-style backyard with Red Rock Canyon views, this property is perfect for those seeking an active 55+ lifestyle in Las Vegas' most established and amenity-rich community.
              </p>
              <p className={styles.description}>
                Many homes in the area include two primary suites and dedicated golf cart garage space, making this an ideal property for retirees who value both convenience and sophistication.
              </p>
              <div className={styles.callToActionBar}>
                <button className={styles.scheduleBtn}>Schedule Viewing</button>
                <button className={styles.virtualTourBtn}>Virtual Tour</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Property Features</h2>

          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Modern Kitchen</h3>
              <p>Granite countertops, stainless steel appliances, and custom cabinetry</p>
            </div>
            <div className={styles.feature}>
              <h3>Primary Suite</h3>
              <p>Spacious bedroom with walk-in closet and en-suite bathroom with dual vanities</p>
            </div>
            <div className={styles.feature}>
              <h3>Outdoor Living</h3>
              <p>Covered patio with built-in BBQ and desert landscaping</p>
            </div>
            <div className={styles.feature}>
              <h3>Energy Efficient</h3>
              <p>Solar panels, smart thermostat, and energy-efficient windows</p>
            </div>
          </div>
        </section>

        <div className={styles.listingsSection}>
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw" 
            sort-order="NEWEST" 
            listing-status="For Sale" 
            property-types="SFR,MF" 
            price-min="800000" 
            price-max="4000000">
          </realscout-office-listings>
        </div>
        
        <section className={styles.calculatorSection}>
          <h2 className={styles.sectionTitle}>Mortgage Calculator</h2>
          <p className={styles.calculatorIntro}>
            Plan your Sun City Summerlin investment with our specialized mortgage calculator that includes HOA fees and local property taxes.
          </p>
          
          <MortgageCalculator defaultPrice={548175} defaultDownPayment={109635} />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <Image 
            src="/bhhs-quality-seal-black.png"
            alt="BHHS Logo" 
            className={styles.footerLogo}
            width={120}
            height={48}
          />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LLC</p>
          <p>Real Estate Las Vegas, NV <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">drjanduffy.realscout.com/onboarding</a></p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Properties;

// Remove duplicate component declaration
/* const Properties = ()=>{ */