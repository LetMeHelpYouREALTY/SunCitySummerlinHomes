import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import StructuredData from "../components/StructuredData";

const Home: NextPage = () => {
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

  const amenities = [
    "Three Championship Golf Courses",
    "Four Recreation Centers",
    "Multiple Swimming Pools",
    "Tennis &amp; Pickleball Courts",
    "Fitness Centers with Classes",
    "Woodworking &amp; Ceramics Studios",
    "Over 100 Social Clubs &amp; Activities",
    "Walking &amp; Golf Cart Trails",
    "On-site Shopping &amp; Dining",
    "24/7 Security & Gated Areas"
  ];

  const testimonials = [
    {
      name: "Sarah & David Johnson",
      text: "Moving to Sun City Summerlin was the best decision we've made. The community is vibrant and the amenities are outstanding!",
      rating: 5
    },
    {
      name: "Robert Wilson",
      text: "After looking at dozens of properties, this home stood out for its quality finishes and perfect location near the golf course.",
      rating: 5
    },
    {
      name: "Margaret Thompson",
      text: "The BHHS agent made our buying process so smooth. We're loving our new home and the active lifestyle here.",
      rating: 4
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Sun City Summerlin Las Vegas | Luxury 55+ Community Homes | Dr. Jan Duffy</title>
        <meta name="description" content="Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ Del Webb community. Expert REALTOR® Dr. Jan Duffy brings 25+ years of experience in luxury single-story homes, golf course properties, and active adult living." />
        <meta name="keywords" content="Sun City Summerlin, luxury homes Las Vegas, 55+ community, Del Webb, Dr Jan Duffy Realtor, active adult community, golf course homes, retirement community Las Vegas" />
        <meta name="author" content="Dr. Jan Duffy, REALTOR®" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Sun City Summerlin Las Vegas | Luxury 55+ Community Homes" />
        <meta property="og:description" content="Experience resort-style living in Las Vegas' premier 55+ active adult community with Dr. Jan Duffy, your REALTOR® specialist with 25+ years of experience." />
        <meta property="og:image" content="/property1.jpg" />
        <meta property="og:url" content="https://suncitysummerlin.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sun City Summerlin Las Vegas | Luxury 55+ Living" />
        <meta name="twitter:description" content="Find your dream home in Sun City Summerlin with Dr. Jan Duffy, your local expert REALTOR®." />
        <meta name="twitter:image" content="/property1.jpg" />
        <link rel="canonical" href="https://suncitysummerlin.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `
        }} />
        <StructuredData 
          type="RealEstateAgent"
          data={{
            name: "Dr. Jan Duffy, REALTOR®",
            image: "/drjan-logo.png",
            url: "https://suncitysummerlin.com",
            telephone: "(702) 718-0043",
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
            sameAs: [
              "https://www.instagram.com/drjanduffy/",
              "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
              "https://www.linkedin.com/company/lvrmembers/",
              "https://www.youtube.com/@DrDuffy",
              "https://x.com/drjanduffy",
              "https://www.tiktok.com/@dr.janduffy",
              "https://www.pinterest.com/bhhsluxury/"
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              opens: "09:00",
              closes: "19:00"
            },
            priceRange: "$$$",
            areaServed: ["Sun City Summerlin", "Las Vegas", "Clark County", "Nevada"],
            description: "Dr. Jan Duffy is a REALTOR® specialist with 25+ years of experience in Sun City Summerlin, Las Vegas' premier 55+ Del Webb community. Specializing in luxury single-story homes and golf course properties.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Sun City Summerlin Real Estate Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Senior Home Buying Services",
                    description: "Specialized home buying assistance for 55+ adults in Sun City Summerlin"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Luxury Home Selling",
                    description: "Expert marketing and representation for Sun City Summerlin home sellers"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "California to Las Vegas Relocation",
                    description: "Specialized support for homebuyers relocating from California to Las Vegas"
                  }
                }
              ]
            }
          }}
        />
      </Head>

      <Script 
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="lazyOnload"
      />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoContainer}>
            <div className={styles.logoText}>
              <h1 className={styles.logo}>Sun City Summerlin</h1>
            <div className={styles.subLogoContainer}>
              <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.headerLogo} />
              <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
            </div>
            </div>
          </div>

          <div className={styles.headerRight}>
            <nav className={styles.nav}>
              <div className={styles.navLinks}>
                <Link href="/" className={styles.navLink}><span>Home</span></Link>
                <Link href="/properties" className={styles.navLink}><span>Properties</span></Link>
                <Link href="/search" className={styles.navLink}><span>Search</span></Link>
                <Link href="/community" className={styles.navLink}><span>Community</span></Link>
                <Link href="/lifestyle" className={styles.navLink}><span>Lifestyle</span></Link>
                <Link href="/amenities" className={styles.navLink}><span>Amenities</span></Link>
                <Link href="/zipcodes" className={styles.navLink}><span>Zipcodes</span></Link>
                <Link href="/blog" className={styles.navLink}><span>Blog</span></Link>
                <Link href="/testimonials" className={styles.navLink}><span>Testimonials</span></Link>
                <Link href="/contact" className={styles.navLink}><span>Contact</span></Link>
              </div>
            </nav>

            <div className={styles.headerActions}>
              <a href="tel:7027180043" className={styles.phoneButton}>
                <span className={styles.phoneIcon}>📞</span>
                <span className={styles.phoneNumber}>(702) 718-0043</span>
              </a>
              <button className={styles.mobileMenuButton} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.topBanner}>
        <h1 className={styles.topTitle}>Luxury Living in Sun City Summerlin</h1>
        <p className={styles.topSubtitle}>
          Experience resort-style living in Las Vegas' premier 55+ active adult community with Dr. Jan Duffy, your REALTOR® specialist with 25+ years of experience
        </p>
        <div className={styles.topCredentials}>
          <span className={styles.topCredentialItem}>📍 Del Webb Community Expert</span>
          <span className={styles.topCredentialItem}>🏠 Low-Maintenance Single-Story Homes</span>
          <span className={styles.topCredentialItem}>⛳ Golf Course Properties</span>
          <span className={styles.topCredentialItem}>👥 80+ Social Clubs</span>
        </div>
      </div>

      <div className={styles.listingsSection} suppressHydrationWarning>
        {/* RealScout Office Listings - Added suppressHydrationWarning to handle browser extensions */}
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="NEWEST" 
          listing-status="For Sale" 
          property-types="SFR,MF" 
          price-min="800000" 
          price-max="4000000">
        </realscout-office-listings>
      </div>

      <main className={styles.main}>
        <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.heroContent}>
            <div className={styles.homeValueWidgetContainer}>
              <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
              <style dangerouslySetInnerHTML={{
                __html: `
                  realscout-home-value {
                    --rs-hvw-background-color: #ffffff;
                    --rs-hvw-title-color: #000000;
                    --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
                    --rs-hvw-primary-button-text-color: #ffffff;
                    --rs-hvw-primary-button-color: rgb(35, 93, 137);
                    --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
                    --rs-hvw-secondary-button-color: #ffffff;
                    --rs-hvw-widget-width: 87.5%;
                  }
                `
              }} />
              <div className={styles.widgetWrapper}>
                <h2 className={styles.widgetTitle}>Get Your Sun City Summerlin Home Value</h2>
                <realscout-home-value 
                  agent-encoded-id="QWdlbnQtMjI1MDUw" 
                  include-name 
                  include-phone
                  loading="eager"
                ></realscout-home-value>
              </div>
            </div>

            <div className={styles.ctaContainer}>
              <button className={styles.cta}>Schedule a Viewing</button>
              <button 
                className={styles.virtualTourBtn} 
                onClick={() => setShowVirtualTour(true)}
              >
                Virtual Tour <span className={styles.tourIcon}>🔍</span>
              </button>
            </div>
          </div>

          {showVirtualTour && (
            <div className={styles.virtualTourModal}>
              <div className={styles.modalContent}>
                <button 
                  className={styles.closeModal}
                  onClick={() => setShowVirtualTour(false)}
                >
                  ×
                </button>
                <h2>Virtual Tour</h2>
                <div className={styles.tourPlaceholder}>
                  <div className={styles.tourMessage}>
                    <p>360° Virtual Tour</p>
                    <p className={styles.tourInstructions}>Use your mouse to look around</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="property" className={`${styles.propertySection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>Property Highlights</h2>

          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <div className={styles.imageOverlay}>
                <span className={styles.imageCount}>{activeImage + 1}/{propertyImages.length}</span>
              </div>
              <img 
                src={propertyImages[activeImage]} 
                alt="Sun City Summerlin Property" 
                className={styles.featuredImage}
              />
              <div className={styles.imageNavigation}>
                <button 
                  onClick={() => setActiveImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)}
                  className={styles.navArrow}
                >
                  &#10094;
                </button>
                <button 
                  onClick={() => setActiveImage((prev) => (prev + 1) % propertyImages.length)}
                  className={styles.navArrow}
                >
                  &#10095;
                </button>
              </div>
            </div>
            <div className={styles.thumbnails}>
              {propertyImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`Property view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.propertyDetails}>
            <div className={styles.detailCard}>
              <p className={styles.propertyPrice}>$548,175</p>
              <p>3 Beds | 2 Baths | 1,850 Sq Ft</p>
              <p>Contemporary Mediterranean | Golf Course Views</p>
            </div>

            <p className={styles.description}>
              This stunning single-story home in the prestigious Sun City Summerlin community offers the perfect blend of comfort and luxury. Featuring an open floor plan with spacious breakfast nook, gourmet kitchen, and resort-style backyard with Red Rock Canyon views, this property is perfect for those seeking an active 55+ lifestyle in Las Vegas' most established and amenity-rich community. Many homes in the area include two primary suites and dedicated golf cart garage space.
            </p>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Residence",
                  "name": "Luxury Single-Story Home in Sun City Summerlin",
                  "description": "Stunning single-story home with open floor plan, gourmet kitchen, and resort-style backyard with Red Rock Canyon views",
                  "numberOfRooms": "3",
                  "floorSize": {
                    "@type": "QuantitativeValue",
                    "value": "1850",
                    "unitCode": "SQF"
                  },
                  "numberOfBathroomsTotal": 2,
                  "amenityFeature": [
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Golf Course Views",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Single-Story",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Gourmet Kitchen",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Open Floor Plan",
                      "value": true
                    }
                  ],
                  "offers": {
                    "@type": "Offer",
                    "price": "548175",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 36.2043,
                    "longitude": -115.2936
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Las Vegas",
                    "addressRegion": "NV",
                    "postalCode": "89134",
                    "addressCountry": "US"
                  }
                }
              `
            }}/>
          </div>
        </section>

        <section id="features" className={styles.featuresSection}>
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

        <section id="community" className={styles.communitySection}>
          <h2 className={styles.sectionTitle}>Sun City Summerlin Community</h2>

          <div className={styles.communityHighlights}>
            <div className={styles.statsCard}>
              <h3>$548,175</h3>
              <p>Average Home Value</p>
            </div>
            <div className={styles.statsCard}>
              <h3>$331</h3>
              <p>Average Price per Sq Ft</p>
            </div>
            <div className={styles.statsCard}>
              <h3>8,000+</h3>
              <p>Homes in Community</p>
            </div>
            <div className={styles.statsCard}>
              <h3>20,000+</h3>
              <p>Active Residents</p>
            </div>
          </div>

          <div className={styles.communityDescription}>
            <p>
              Sun City Summerlin is a 55-plus, active adult community brimming with amenities. Located just beyond the foothills of the Spring Mountains, residents enjoy stunning backyard views of Red Rock Canyon and adjacent rocky peaks. As Las Vegas' oldest and largest community of its kind, Sun City Summerlin is truly "a city within a city," offering convenient access to doctors, banks, florists, and various stores right within the community.
            </p>
            
            <div className={styles.communityStats}>
              <div className={styles.communityStat}><span>⏱️</span> Established 1989</div>
              <div className={styles.communityStat}><span>🏘️</span> 8,000+ Homes</div>
              <div className={styles.communityStat}><span>📏</span> 1,000-2,900 sq ft</div>
              <div className={styles.communityStat}><span>👥</span> 20,000+ Residents</div>
            </div>
            
            <div className={styles.communityImageRow}>
              <div className={styles.communityImage}>
                <img src="/property1.jpg" alt="Sun City Summerlin Home" />
              </div>
              <div className={styles.communityImage}>
                <img src="/golf-course.jpg" alt="Sun City Summerlin Golf Course" />
              </div>
              <div className={styles.communityImage}>
                <img src="/community-center.jpg" alt="Sun City Summerlin Community Center" />
              </div>
            </div>
            
            <p>
              Built in three phases starting in 1989, the community consists of almost 8,000 attached and single-family homes. With more than two dozen floor plans ranging from 1,000 to 2,900 square feet, homes feature contemporary Mediterranean bungalow designs with characteristic terracotta roofing and stucco siding. Many properties front one of the community's renowned golf courses, with garage space specifically for golf carts.
            </p>
            
            <div className={styles.communityDescriptionGrid}>
              <div className={styles.communityFeature}>
                <h3 data-icon="🏡">Mediterranean Design</h3>
                <p>Elegant homes with characteristic terracotta roofing, stucco siding, and open floor plans that maximize natural light and desert views. Each home is designed for comfort and low-maintenance living.</p>
              </div>
              
              <div className={styles.communityFeature}>
                <h3 data-icon="⛳">Golf Course Living</h3>
                <p>Many properties offer direct frontage to one of the community's championship golf courses, with convenient dedicated golf cart garages allowing residents easy access to greens and fairways.</p>
              </div>
              
              <div className={styles.communityFeature}>
                <h3 data-icon="🏔️">Mountain Views</h3>
                <p>Strategically positioned at the foothills of the Spring Mountains, homes provide breathtaking vistas of Red Rock Canyon and the Las Vegas valley from patios and backyards.</p>
              </div>
              
              <div className={styles.communityFeature}>
                <h3 data-icon="🛎️">Full-Service Community</h3>
                <p>A true "city within a city" featuring medical offices, banking, restaurants, shopping, and services all within the community boundaries, accessible by golf cart or a short drive.</p>
              </div>
            </div>
            
            <div className={styles.communityLearnMore}>
              <button 
                className={styles.communityLearnMoreBtn}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Community Tour
              </button>
            </div>
          </div>
        </section>

        <section id="lifestyle" className={styles.lifestyleSection}>
          <div className={styles.lifestyleHeading}>
            <h2 className={styles.lifestyleTitle}>Active Adult Lifestyle</h2>
            <p className={styles.lifestyleSubtitle}>Experience the best of resort-style living with premium amenities and activities designed for an active 55+ community</p>
          </div>

          <div className={styles.lifestyleFeatures}>
            <div className={styles.lifestyleFeature}>
              <div className={styles.lifestyleFeatureIcon}>⛳</div>
              <div className={styles.lifestyleFeatureImage}>
                <img src="/golf-course.jpg" alt="Sun City Summerlin Golf Course" />
              </div>
              <div className={styles.lifestyleFeatureContent}>
                <h3>Golf Paradise</h3>
                <p>Enjoy three distinct championship courses: Highland Falls with panoramic Vegas Strip views, Palm Valley with mild elevation changes perfect for all skill levels, and the executive Eagle Crest course ideal for quick rounds.</p>
              </div>
            </div>

            <div className={styles.lifestyleFeature}>
              <div className={styles.lifestyleFeatureIcon}>🏊</div>
              <div className={styles.lifestyleFeatureImage}>
                <img src="/community-center.jpg" alt="Sun City Summerlin Recreation Center" />
              </div>
              <div className={styles.lifestyleFeatureContent}>
                <h3>Recreation Centers</h3>
                <p>Four state-of-the-art recreation centers feature indoor and outdoor swimming pools, modern fitness facilities with classes for all levels, pickleball courts, and dedicated spaces for over 100 different clubs and social activities.</p>
              </div>
            </div>

            <div className={styles.lifestyleFeature}>
              <div className={styles.lifestyleFeatureIcon}>🛺</div>
              <div className={styles.lifestyleFeatureImage}>
                <img src="/golf-cart-path.jpg" alt="Sun City Summerlin Golf Cart Paths" />
              </div>
              <div className={styles.lifestyleFeatureContent}>
                <h3>Golf Cart Community</h3>
                <p>Designated golf cart pathways throughout the community create a unique transportation network, making it easy and enjoyable to travel between courses, recreation centers, and local shopping areas without ever needing your car.</p>
              </div>
            </div>

            <div className={styles.lifestyleFeature}>
              <div className={styles.lifestyleFeatureIcon}>🍽️</div>
              <div className={styles.lifestyleFeatureImage}>
                <img src="/shopping-plaza.jpg" alt="Sun City Summerlin Shopping and Dining" />
              </div>
              <div className={styles.lifestyleFeatureContent}>
                <h3>Shopping &amp; Dining</h3>
                <p>Tucson Plaza offers convenient access to pharmacies, fitness centers, and diverse dining options including My Mother's House Italian cuisine. Smith's grocery store and numerous specialty shops ensure everything you need is just minutes away.</p>
              </div>
            </div>
          </div>

          <div className={styles.lifestyleCtaContainer}>
            <button className={styles.lifestyleCta} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule a Lifestyle Tour
            </button>
          </div>
        </section>

        <section id="amenities" className={styles.amenitiesSection}>
          <h2 className={styles.sectionTitle}>Community Amenities</h2>

          <div className={styles.amenitiesIntro}>
            <p>Sun City Summerlin offers world-class amenities in a resort-style setting. Residents enjoy access to all these premium features included with their home ownership:</p>
          </div>

          <div className={styles.amenitiesGrid}>
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.amenityCard}>
                <div className={styles.amenityIconContainer}>
                  <span className={styles.amenityIcon}>
                    {index === 0 ? '⛳' : 
                     index === 1 ? '🏊' : 
                     index === 2 ? '💦' : 
                     index === 3 ? '🎾' : 
                     index === 4 ? '💪' : 
                     index === 5 ? '🔨' : 
                     index === 6 ? '👥' : 
                     index === 7 ? '🚶' : 
                     index === 8 ? '🛒' : '🔒'}
                  </span>
                </div>
                <div className={styles.amenityContent}>
                  <h3 className={styles.amenityTitle}>{amenity.replace(/^[^a-zA-Z]+/, '')}</h3>
                  <p className={styles.amenityDescription}>
                    {index === 0 ? 'Designed by renowned architects with sweeping views of the Las Vegas valley' : 
                     index === 1 ? 'State-of-the-art facilities for gatherings, events, and activities' : 
                     index === 2 ? 'Year-round swimming in heated pools for fitness and relaxation' : 
                     index === 3 ? 'Professional courts for all skill levels with regular tournaments' : 
                     index === 4 ? 'Modern equipment with personal trainers and group classes' : 
                     index === 5 ? 'Fully-equipped studios for hobbyists and artisans' : 
                     index === 6 ? 'Vibrant social scene with clubs for every interest and hobby' : 
                     index === 7 ? 'Miles of scenic paths connecting the entire community' : 
                     index === 8 ? 'Convenient access to restaurants, stores, and services' : 
                     'Professional security team monitoring the community 24/7'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.amenitiesCta}>
            <p>Experience the unparalleled lifestyle that Sun City Summerlin offers.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                    className={styles.amenitiesCtaButton}>
              Schedule a Tour
            </button>
          </div>
        </section>

        <section id="testimonials" className={`${styles.testimonialsSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>What Homeowners Say</h2>
          
          <div className={styles.reviewRating}>
            <div className={styles.googleInfo}>
              <img src="/google-logo.png" alt="Google" className={styles.googleLogo} />
              <span className={styles.reviewText}>Based on Google Reviews</span>
            </div>
            <div className={styles.starRating}>★★★★★</div>
          </div>

          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialCardRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className={styles.testimonialCardQuote}>{testimonial.text}</p>
                <p className={styles.testimonialCardAuthor}>- {testimonial.name}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.testimonialCta}>
            <h3>Ready to Experience Sun City Summerlin?</h3>
            <p>Join our growing community of satisfied homeowners today.</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className={styles.testimonialCtaButton}
            >
              Schedule a Showing
            </button>
          </div>
        </section>

        <section id="contact" className={`${styles.contactSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>

          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Your Phone" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" rows={4}></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>9406 Del Webb Boulevard, Las Vegas, NV 89134</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>(702) 718-0043</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>DrDuffy@bhhsnv.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Google Business</h3>
              <p><a href="https://g.co/kgs/uwtzcWj" target="_blank" rel="noopener noreferrer">View Google Business Profile</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* Widget optimization - removed debug section */}

      <section className={styles.faqSection} id="faqs">
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <h3>What is the average home price in Sun City Summerlin?</h3>
            <p>The average home price in Sun City Summerlin is around $548,175, though prices vary based on size, location, and amenities. Golf course properties typically command higher prices.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Is Sun City Summerlin a 55+ community?</h3>
            <p>Yes, Sun City Summerlin is an age-restricted community where at least one resident must be 55 years or older, and no permanent residents can be under 19 years of age.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What amenities are available in Sun City Summerlin?</h3>
            <p>Sun City Summerlin offers three championship golf courses, four recreation centers, multiple swimming pools, tennis and pickleball courts, fitness centers, woodworking studios, over 100 social clubs, walking trails, and on-site shopping and dining.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>How do I contact Dr. Jan Duffy for property viewings?</h3>
            <p>You can contact Dr. Jan Duffy at (702) 718-0043, email at DrDuffy@bhhsnv.com, or fill out the contact form on this website to schedule a viewing or consultation.</p>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the average home price in Sun City Summerlin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The average home price in Sun City Summerlin is around $548,175, though prices vary based on size, location, and amenities. Golf course properties typically command higher prices."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Sun City Summerlin a 55+ community?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sun City Summerlin is an age-restricted community where at least one resident must be 55 years or older, and no permanent residents can be under 19 years of age."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What amenities are available in Sun City Summerlin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sun City Summerlin offers three championship golf courses, four recreation centers, multiple swimming pools, tennis and pickleball courts, fitness centers, woodworking studios, over 100 social clubs, walking trails, and on-site shopping and dining."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I contact Dr. Jan Duffy for property viewings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Dr. Jan Duffy at (702) 718-0043, email at DrDuffy@bhhsnv.com, or fill out the contact form on this website to schedule a viewing or consultation."
                  }
                }
              ]
            }
          `
        }}/>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LLC</p>
          <p>Real Estate Las Vegas, NV <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">drjanduffy.realscout.com/onboarding</a></p>
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
      <Script id="realscout-listings-init" strategy="lazyOnload">
        {`
          document.addEventListener('realscout-web-components-ready', () => {
            const container = document.querySelector('.listingsSection');
            if (container) {
              const listingsElement = document.createElement('realscout-office-listings');
              if (listingsElement && listingsElement.setAttribute) {
                listingsElement.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
                listingsElement.setAttribute('sort-order', 'NEWEST');
                listingsElement.setAttribute('listing-status', 'For Sale');
                listingsElement.setAttribute('property-types','SFR,MF');
                listingsElement.setAttribute('price-min', '800000');
                listingsElement.setAttribute('price-max', '4000000');
                container.appendChild(listingsElement);
              }
            }
          });
        `}
      </Script>
    </div>
  );
};

export default Home;