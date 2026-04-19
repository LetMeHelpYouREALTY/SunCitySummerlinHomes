import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { getLocalBusinessJsonLd, getOrganizationJsonLd } from '../lib/site-contact'
// Import AOS styles
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
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
          header.style.padding = '0.5rem 1.5rem';
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
          header.style.padding = '0.8rem 1.5rem';
          header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
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
        offset: 100
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `,
            }}
          />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}

      <Component {...pageProps} />

      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessJsonLd()),
        }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationJsonLd()),
        }}
      />
    </div>
  )
}

export default MyApp