/**
 * Single source of truth for NAP, hours, and GBP-related URLs.
 * Update here first when GBP changes, then verify visible copy + JSON-LD match.
 *
 * GBP reconciliation (do in Google Business Profile, then mirror here):
 * - Business name (must match real-world / GBP name; no keyword stuffing)
 * - Primary category + additional categories
 * - Full address, service-area wording if applicable
 * - Primary phone (match tel: and schema telephone)
 * - Hours + special hours + “by appointment” notes
 * - Short name / profile URL, Place ID (optional: add maps embed from Place ID)
 * - Social profiles listed on GBP → keep `sameAsUrls` aligned
 * - Search Console property host (www vs apex) → keep SITE_ORIGIN, canonicals, and sitemap base URL identical
 *
 * Post-deploy: Rich Results Test (/, /contact, /testimonials) + GSC URL Inspection.
 */
export const SITE_ORIGIN = 'https://www.suncitysummerlinhomesforsale.com' as const;

export const NEVADA_REALTOR_LICENSE = 'S.0197614.LLC' as const;

export const businessName = {
  localBusiness: 'Dr. Jan Duffy - Sun City Summerlin REALTOR®',
  realEstateAgent: 'Dr. Jan Duffy, REALTOR®',
} as const;

export const phone = {
  display: '(702) 718-0043',
  e164: '+17027180043',
  telHref: 'tel:+17027180043',
} as const;

export const email = {
  display: 'DrDuffy@bhhsnv.com',
  mailtoHref: 'mailto:DrDuffy@bhhsnv.com',
} as const;

export const address = {
  streetAddress: '9406 Del Webb Boulevard',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89134',
  addressCountry: 'US',
  singleLine: '9406 Del Webb Boulevard, Las Vegas, NV 89134',
} as const;

export const geo = {
  latitude: 36.206,
  longitude: -115.296,
} as const;

/** Match JSON-LD across LocalBusiness + RealEstateAgent */
export const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Saturday'],
    opens: '10:00',
    closes: '15:00',
  },
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Sunday'],
    opens: '09:00',
    closes: '17:00',
    description: 'By appointment only',
  },
];

export const officeHoursLines = [
  'Monday–Friday: 9:00 AM – 5:00 PM',
  'Saturday: 10:00 AM – 3:00 PM',
  'Sunday: By appointment only',
] as const;

/** Internal links for service-area / GBP landing pages (keep updated with real routes). */
export const serviceAreaLinks = [
  { label: 'Sun City Summerlin community overview', path: '/community' },
  { label: 'Las Vegas zip code directory', path: '/zipcodes' },
  { label: 'Sun City Summerlin area (89134)', path: '/zipcodes/89134' },
  { label: '55+ neighborhoods in Las Vegas', path: '/neighborhoods' },
  { label: 'Community map', path: '/map' },
] as const;

export const gbpLinks = {
  /** Short Google Business Profile link (from GBP Share) */
  profile: 'https://g.co/kgs/uwtzcWj',
  mapsEmbedSrc:
    'https://maps.google.com/maps?q=9406+Del+Webb+Boulevard,+Las+Vegas,+NV+89134&output=embed',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=9406+Del+Webb+Boulevard,+Las+Vegas,+NV+89134',
} as const;

/** Profiles linked from primary pages — keep aligned with visible footer */
export const sameAsUrls = [
  'https://www.instagram.com/drjanduffy/',
  'https://www.facebook.com/DrJanDuffyRealtorCentennialHills/',
  'https://www.pinterest.com/bhhsluxury/',
  'https://www.youtube.com/@DrDuffy',
  'https://x.com/drjanduffy',
  'https://www.linkedin.com/company/lvrmembers/',
  'https://www.tiktok.com/@dr.janduffy',
] as const;

export const brokerage = {
  organizationName: 'Berkshire Hathaway HomeServices Nevada',
  organizationUrl: 'https://www.bhhsnv.com/',
  logoUrl: `${SITE_ORIGIN}/bhhs-logo.png`,
} as const;

export const footerLicenseDisclaimer = `Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. ${NEVADA_REALTOR_LICENSE}`;

/** Stable fragment IDs for `@graph` / cross-references (align with SITE_ORIGIN). */
export const jsonLdIds = {
  localBusiness: `${SITE_ORIGIN}/#localbusiness`,
  organization: `${SITE_ORIGIN}/#organization`,
  realEstateAgent: `${SITE_ORIGIN}/#realestateagent`,
} as const;

/** Canonical URL for a route path (no trailing slash; root → SITE_ORIGIN). */
export function canonicalPath(path: string): string {
  const raw = path.startsWith('/') ? path : `/${path}`;
  const trimmed = raw.replace(/\/+$/, '');
  if (trimmed === '' || trimmed === '/') return SITE_ORIGIN;
  return `${SITE_ORIGIN}${trimmed}`;
}

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': jsonLdIds.localBusiness,
    name: businessName.localBusiness,
    image: `${SITE_ORIGIN}/drjan-logo.png`,
    url: SITE_ORIGIN,
    telephone: phone.e164,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification,
  };
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': jsonLdIds.organization,
    name: brokerage.organizationName,
    url: brokerage.organizationUrl,
    logo: brokerage.logoUrl,
    sameAs: [...sameAsUrls],
  };
}
