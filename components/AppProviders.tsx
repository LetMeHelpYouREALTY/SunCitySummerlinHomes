'use client';

import { useEffect, type ReactNode } from 'react';
import Script from 'next/script';
import PageTransition from '@/components/PageTransition';
import CalendlyProvider from '@/components/CalendlyProvider';
import styles from '@/styles/Home.module.css';
import { suppressExtensionWarnings } from '@/utils/suppress-warnings';

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const cleanupWarnings = suppressExtensionWarnings();

    const links = [
      { rel: 'preconnect', href: 'https://em.realscout.com' },
      { rel: 'dns-prefetch', href: 'https://em.realscout.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' as const },
    ];

    links.forEach((link) => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value !== undefined) {
          linkElement.setAttribute(key, String(value));
        }
      });
      document.head.appendChild(linkElement);
    });

    document.documentElement.lang = 'en';

    const handleScroll = () => {
      const header = document.querySelector('header[data-app-header]') ?? document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add(styles.scrolledHeader);
        } else {
          header.classList.remove(styles.scrolledHeader);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
        easing: 'ease-in-out',
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (cleanupWarnings) cleanupWarnings();
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.hydrated = 'true';
  }, []);

  return (
    <CalendlyProvider>
      {gaId ? (
        <>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
            }}
          />
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        </>
      ) : null}

      <PageTransition>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </PageTransition>
    </CalendlyProvider>
  );
}
