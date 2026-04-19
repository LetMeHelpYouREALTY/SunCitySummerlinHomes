import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';
import 'aos/dist/aos.css';
import AppProviders from '@/components/AppProviders';
import {
  SITE_ORIGIN,
  getLocalBusinessJsonLd,
  getOrganizationJsonLd,
} from '@/lib/site-contact';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: 'Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy',
    template: '%s | Dr. Jan Duffy',
  },
  description:
    "Sun City Summerlin is Las Vegas' premier 55+ community with homes, golf, and amenities. Dr. Jan Duffy specializes in Sun City Summerlin real estate.",
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#8e1f41',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `,
          }}
        />
      </head>
      <body>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
        />
        <AppProviders>{children}</AppProviders>
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
      </body>
    </html>
  );
}
