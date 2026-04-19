import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import '../styles/globals.css'
import PageTransition from '@/components/PageTransition';
import RealEstateAgentSchema from '@/components/RealEstateAgentSchema';
import { useEffect } from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// Import AOS styles
import 'aos/dist/aos.css'
import { suppressExtensionWarnings } from '@/utils/suppress-warnings';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Suppress browser extension warnings (Dashlane, etc.)
    const cleanupWarnings = suppressExtensionWarnings();

    // Improve Core Web Vitals with preconnect and prefetch
    const links = [
      { rel: 'preconnect', href: 'https://em.realscout.com' },
      { rel: 'dns-prefetch', href: 'https://em.realscout.com' },
      // Add Google Fonts preconnect if you're using them
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    links.forEach(link => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value !== undefined) {
          linkElement.setAttribute(key, value);
        }
      });
      document.head.appendChild(linkElement);
    });

    // Add accessibility improvements
    document.documentElement.lang = 'en';

    // Header scroll animation
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add(styles.scrolledHeader);
        } else {
          header.classList.remove(styles.scrolledHeader);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    const setupMobileMenu = () => {
      const menuButton = document.querySelector(`.${styles.mobileMenuButton}`);
      const navLinks = document.querySelector(`.${styles.navLinks}`);

      if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
          navLinks.classList.toggle(styles.navLinksActive);

          // Toggle animation for menu button
          const spans = menuButton.querySelectorAll('span');
          spans.forEach(span => {
            span.classList.toggle(styles.mobileButtonActive);
          });
        });
      }
    };

    // Call after a slight delay to ensure DOM is ready
    setTimeout(setupMobileMenu, 500);

    // Initialize AOS animation library
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
        easing: 'ease-in-out'
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (cleanupWarnings) cleanupWarnings();
    };
  }, []);

  useEffect(() => {
    // This helps address hydration issues by allowing client-side rendering to complete
    document.documentElement.dataset.hydrated = 'true';
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8e1f41" />
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `
        }} />
      </Head>

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />

      <PageTransition key={router.asPath}>
        <Component {...pageProps} />
      </PageTransition>

      {/* LocalBusiness Structured Data */}
      <Script 
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dr. Jan Duffy - Sun City Summerlin REALTOR®",
              "image": "/drjan-logo.png",
              "url": "https://suncitysummerlin.com",
              "telephone": "(702) 718-0043",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9406 Del Webb Boulevard",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89134",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.2043,
                "longitude": -115.2936
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            }
          `
        }}
      />

      {/* Structured data for organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Berkshire Hathaway HomeServices Nevada",
            "url": "https://www.bhhsnv.com/",
            "logo": {/* BHHS logo removed */},
            "sameAs": [
              "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
              "https://www.instagram.com/drjanduffy/",
              "https://www.linkedin.com/company/lvrmembers/"
            ]
          })
        }}
      />
    </div>
  )
}

export default MyApp