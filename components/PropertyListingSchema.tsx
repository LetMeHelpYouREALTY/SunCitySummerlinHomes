import React from 'react';
import StructuredData from './StructuredData';
import { SAMPLE_PROPERTIES } from '@/lib/sample-properties';
import { canonicalPath } from '@/lib/site-contact';

/**
 * ItemList aligned with on-site sample property URLs (not live MLS rows).
 */
const PropertyListingSchema: React.FC = () => {
  const propertyListings = {
    '@type': 'ItemList',
    itemListElement: SAMPLE_PROPERTIES.map((property, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'RealEstateListing',
        name: property.title,
        description: `Illustrative sample profile: ${property.bedrooms}-bedroom, ${property.bathrooms}-bath home in the Sun City Summerlin area. Verify availability with Dr. Jan Duffy.`,
        url: canonicalPath(`/properties/${property.id}`),
        image: canonicalPath(property.image),
        numberOfRooms: property.bedrooms,
        floorSize: {
          '@type': 'QuantitativeValue',
          value: property.sqft,
          unitCode: 'SqFt',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: property.address.split(',')[0]?.trim() ?? property.address,
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89134',
          addressCountry: 'US',
        },
        offers: {
          '@type': 'Offer',
          price: property.price,
          priceCurrency: 'USD',
        },
        amenityFeature: property.features.map((name) => ({
          '@type': 'LocationFeatureSpecification',
          name,
          value: true,
        })),
      },
    })),
  };

  return <StructuredData type="ItemList" data={propertyListings} />;
};

export default PropertyListingSchema;
