'use client';

import {
  realScoutAgentEncodedId,
  realScoutOfficeListingsDefaults,
} from '@/lib/realscout-config';

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
  sortOrder = realScoutOfficeListingsDefaults.sortOrder,
  listingStatus = realScoutOfficeListingsDefaults.listingStatus,
  propertyTypes = realScoutOfficeListingsDefaults.propertyTypes,
  priceMin = realScoutOfficeListingsDefaults.priceMin,
  priceMax = realScoutOfficeListingsDefaults.priceMax,
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
