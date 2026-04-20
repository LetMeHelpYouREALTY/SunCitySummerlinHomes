'use client';


import { useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Zipcodes.module.css';

// Data for the zipcodes
const zipcodes = [
  {
    code: "89134",
    area: "Sun City Summerlin",
    description: "The primary zipcode for Sun City Summerlin, featuring the main community amenities including Desert Vista, Mountain Shadows, and Sun Shadows community centers, plus Highland Falls and Palm Valley golf courses."
  },
  {
    code: "89135",
    area: "Summerlin South",
    description: "Covers the southern part of Summerlin with access to Red Rock Canyon, nearby shopping at Downtown Summerlin, and proximity to TPC Las Vegas golf course."
  },
  {
    code: "89138",
    area: "Summerlin West",
    description: "The western area of Summerlin, featuring newer developments, parks, and easy access to the 215 Beltway for commuting to other parts of Las Vegas."
  },
  {
    code: "89144",
    area: "Summerlin North",
    description: "Northern Summerlin area with close proximity to the JW Marriott resort, Tournament Players Club (TPC) golf courses, and Downtown Summerlin shopping."
  },
  {
    code: "89145",
    area: "Summerlin East",
    description: "Eastern part of Summerlin with convenient access to the Las Vegas Strip, Boca Park shopping center, and numerous restaurants and entertainment options."
  },
  {
    code: "89128",
    area: "The Lakes",
    description: "Features the Lakes community with its centerpiece lake, close to Angel Park Golf Club and just minutes from Summerlin Parkway for easy commuting."
  },
  {
    code: "89129",
    area: "Centennial Hills South",
    description: "Southern portion of Centennial Hills, offering a mix of established neighborhoods and proximity to the 95 freeway and Centennial Hills Hospital."
  },
  {
    code: "89149",
    area: "Centennial Hills North",
    description: "Northern section of Centennial Hills with newer communities, the Centennial Hills Park, and easy access to the growing northwest valley amenities."
  },
  {
    code: "89117",
    area: "Canyon Gate",
    description: "Features several guard-gated communities including Canyon Gate Country Club, with easy access to Boca Park and Tivoli Village shopping centers."
  },
  {
    code: "89130",
    area: "Sunrise Manor North",
    description: "Northern part of Sunrise Manor with a mix of established neighborhoods and newer developments, close to the Craig Ranch Regional Park."
  },
  {
    code: "89131",
    area: "Aliante",
    description: "Home to the Aliante community and golf course in North Las Vegas, with Aliante Casino and numerous family-friendly parks and trails."
  },
  {
    code: "89148",
    area: "Spring Valley East",
    description: "Eastern portion of Spring Valley with a mix of residential communities and commercial centers, convenient to the 215 Beltway and Rainbow Boulevard corridor."
  }
];

export default function Zipcodes() {
  // For SEO purposes
  useEffect(() => {
    // Structured data for breadcrumbs
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://suncitysummerlin.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Zipcodes',
          'item': 'https://suncitysummerlin.com/zipcodes/'
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <p className={styles.logo}>Sun City Summerlin Homes</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/" passHref legacyBehavior><a>Home</a></Link>
          <Link href="/properties" passHref legacyBehavior><a>Properties</a></Link>
          <Link href="/community" passHref legacyBehavior><a>Community</a></Link>
          <Link href="/lifestyle" passHref legacyBehavior><a>Lifestyle</a></Link>
          <Link href="/amenities" passHref legacyBehavior><a>Amenities</a></Link>
          <Link href="/testimonials" passHref legacyBehavior><a>Testimonials</a></Link>
          <Link href="/zipcodes" passHref legacyBehavior><a>Zipcodes</a></Link>
          <Link href="/contact" passHref legacyBehavior><a>Contact</a></Link>
        </nav>
      </header>

      <div className={styles.main}>
        <div className={styles.zipcodeHeader}>
          <div className={styles.breadcrumbs}>
            <Link href="/" passHref legacyBehavior><a>Home</a></Link> &gt; Zipcodes
          </div>
          <h1 className={styles.pageTitle}>Sun City Summerlin Area Zipcodes</h1>
          <p className={styles.zipcodeDescription}>
            Sun City Summerlin and the surrounding Las Vegas areas are divided into several zipcodes. Each area offers its own unique advantages and amenities. Explore the various zipcodes to find the perfect neighborhood for your lifestyle.
          </p>
        </div>

        <section className={styles.zipcodeGrid}>
          {zipcodes.map((zipcode) => (
            <Link 
              href={`/zipcodes/${zipcode.code}`} 
              passHref
              key={zipcode.code}
              legacyBehavior
            >
              <a className={styles.zipcodeCard}>
                <h2>{zipcode.area}</h2>
                <div className={styles.zipcodeLabel}>{zipcode.code}</div>
                <p>{zipcode.description.substring(0, 100)}...</p>
              </a>
            </Link>
          ))}
        </section>

        <section className={styles.contactSection}>
          <h2>Find Your Perfect Home in These Zipcodes</h2>
          <p>Looking for a home in one of these zipcodes? As a Sun City Summerlin specialist, I can help you find the perfect property in your preferred area.</p>
          <Link href="/contact" passHref legacyBehavior>
            <a className={styles.contactButton}>Contact Dr. Jan Duffy</a>
          </Link>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Dr. Jan Duffy, REALTOR®. All rights reserved.</p>
        <p>Berkshire Hathaway HomeServices Nevada Properties | (702) 718-0043 | DrDuffy@bhhsnv.com</p>
      </footer>
    </div>
  );
}
