import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import '@/styles/tokens.css';
import '@/styles/globals.css';
import 'aos/dist/aos.css';
import AppProviders from '@/components/AppProviders';
import { REALSCOUT_BOOTSTRAP_SCRIPT } from '@/lib/realscout-bootstrap';
import JsonLdScript from '@/components/seo/JsonLdScript';
import {
  SITE_ORIGIN,
  getLocalBusinessJsonLd,
  getOrganizationJsonLd,
} from '@/lib/site-contact';

const defaultOgTitle = 'Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy';
const defaultOgDescription =
  "Sun City Summerlin is Las Vegas' premier 55+ community with homes, golf, and amenities. Dr. Jan Duffy specializes in Sun City Summerlin real estate.";
const defaultOgImage = '/golf-course.jpg';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body-loaded',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: defaultOgTitle,
    template: '%s | Dr. Jan Duffy',
  },
  description: defaultOgDescription,
  icons: { icon: '/favicon.ico' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_ORIGIN,
    siteName: 'Sun City Summerlin Homes For Sale',
    title: defaultOgTitle,
    description: defaultOgDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Sun City Summerlin golf and community lifestyle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultOgTitle,
    description: defaultOgDescription,
    images: [defaultOgImage],
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: '#8e1f41',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link
          rel="preload"
          href="/images/hero/SunCitySummerlinOutside.jpg"
          as="image"
          fetchPriority="high"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
            realscout-advanced-search {
              width: 100%;
            }
          `,
          }}
        />
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          async
        />
        <JsonLdScript id="local-business-schema" data={getLocalBusinessJsonLd()} />
        <JsonLdScript id="organization-schema" data={getOrganizationJsonLd()} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Script
          id="realscout-bootstrap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: REALSCOUT_BOOTSTRAP_SCRIPT }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
