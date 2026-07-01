'use client';

import RealScoutWidgetHost from '@/components/RealScoutWidgetHost';
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

export default function RealScoutOfficeListings({
  sortOrder = realScoutOfficeListingsDefaults.sortOrder,
  listingStatus = realScoutOfficeListingsDefaults.listingStatus,
  propertyTypes = realScoutOfficeListingsDefaults.propertyTypes,
  priceMin = realScoutOfficeListingsDefaults.priceMin,
  priceMax = realScoutOfficeListingsDefaults.priceMax,
}: RealScoutOfficeListingsProps) {
  const attributes = {
    'agent-encoded-id': realScoutAgentEncodedId,
    'sort-order': sortOrder,
    'listing-status': listingStatus,
    'property-types': propertyTypes,
    'price-min': priceMin,
    'price-max': priceMax,
  };

  return <RealScoutWidgetHost tagName="realscout-office-listings" attributes={attributes} />;
}
