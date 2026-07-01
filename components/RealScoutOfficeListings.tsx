'use client';

import { realScoutAgentEncodedId } from '@/lib/realscout-config';

type RealScoutOfficeListingsProps = {
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
};

/**
 * Office listings feed — rendered via innerHTML so React does not manage the
 * custom element lifecycle (required for RealScout web components).
 */
export default function RealScoutOfficeListings({
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR,MF',
  priceMin = '800000',
  priceMax = '4000000',
}: RealScoutOfficeListingsProps) {
  const html = `<realscout-office-listings
    agent-encoded-id="${realScoutAgentEncodedId}"
    sort-order="${sortOrder}"
    listing-status="${listingStatus}"
    property-types="${propertyTypes}"
    price-min="${priceMin}"
    price-max="${priceMax}"
  ></realscout-office-listings>`;

  return (
    <div
      className="realscout-widget-host"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
