'use client';


import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import neighborhoodStyles from '@/styles/Neighborhoods.module.css';
import { useState, useEffect } from 'react';
import StructuredData from '@/components/StructuredData';

export default function Neighborhoods() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const neighborhoods = [
    {
      id: "del-webb-north-ranch",
      name: "Del Webb North Ranch",
      location: "North Las Vegas, NV",
      type: "55+ Community",
      description: "Premier 55+ community featuring luxury homes and resort-style amenities in North Las Vegas.",
      image: "/golf-course.jpg"
    },
    // Additional neighborhoods can be added here
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <p className={styles.logo}>Las Vegas 55+ Communities</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties/">Properties</Link>
          <Link href="/community/">Community</Link>
          <Link href="/neighborhoods/">Neighborhoods</Link>
          <Link href="/services/">Services</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href='/contact/'>Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''} ${neighborhoodStyles.heroSection}`}>
          <div className={neighborhoodStyles.heroContent}>
            <h1 className={neighborhoodStyles.title}>Las Vegas 55+ Communities & Neighborhoods</h1>
            <p className={neighborhoodStyles.subtitle}>Discover the finest active adult communities in Las Vegas, North Las Vegas, and Henderson with Dr. Jan Duffy, your local 55+ community expert.</p>
          </div>
        </section>

        <section className={neighborhoodStyles.neighborhoodsGrid}>
          {neighborhoods.map((neighborhood) => (
            <div key={neighborhood.id} className={neighborhoodStyles.neighborhoodCard}>
              <div className={neighborhoodStyles.neighborhoodCardImage}>
                <img src={neighborhood.image} alt={neighborhood.name} />
              </div>
              <div className={neighborhoodStyles.neighborhoodCardContent}>
                <h2>{neighborhood.name}</h2>
                <p className={neighborhoodStyles.neighborhoodLocation}>{neighborhood.location}</p>
                <p className={neighborhoodStyles.neighborhoodType}>{neighborhood.type}</p>
                <p>{neighborhood.description}</p>
                <Link href={`/neighborhoods/${neighborhood.id}`} className={neighborhoodStyles.learnMoreButton}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className={neighborhoodStyles.expertSection}>
          <div className={neighborhoodStyles.expertContent}>
            <h2>Your 55+ Community Expert</h2>
            <div className={neighborhoodStyles.expertProfile}>
              <Image
                src="/drjan-logo.png"
                alt="Dr. Jan Duffy, REALTOR"
                width={150}
                height={150}
                className={neighborhoodStyles.expertPhoto}
                unoptimized
              />
              <div className={neighborhoodStyles.expertInfo}>
                <h3>Dr. Jan Duffy, REALTOR®</h3>
                <p>With over 25 years of experience specializing in Las Vegas 55+ communities, Dr. Jan Duffy provides expert guidance for buyers and sellers in active adult neighborhoods. As both a veteran-owned and women-owned business, Dr. Duffy's practice is dedicated to accessible, inclusive service for all clients.</p>
                <p>Contact (702) 718-0043 to schedule a consultation or community tour today.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Dr Jan Duffy REALTOR® | 55+ Community Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® specializing in 55+ communities in Las Vegas, North Las Vegas, and Henderson. S.0197614.LL</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
      </footer>

      <StructuredData 
        type="RealEstateAgent" 
        data={{
          name: "Dr. Jan Duffy",
          description: "Real Estate agent specializing in 55+ communities in Las Vegas, North Las Vegas, and Henderson",
          url: "https://drjanduffy.com/neighborhoods",
          telephone: "(702) 718-0043",
          address: {
            "@type": "PostalAddress",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89134"
          },
          areaServed: [
            {
              "@type": "City",
              "name": "Las Vegas, Nevada"
            },
            {
              "@type": "City",
              "name": "North Las Vegas, Nevada"
            },
            {
              "@type": "City",
              "name": "Henderson, Nevada"
            }
          ],
          specialty: "Las Vegas 55+ Communities and Active Adult Neighborhoods"
        }}
      />
    </div>
  );
};

