import { CURATED_NEARBY_PLACES } from '@/lib/nearby-amenities-data';
import { SUN_CITY_SUMMERLIN } from '@/lib/community-config';
import {
  businessName,
  canonicalPath,
  jsonLdIds,
  phone,
  SITE_ORIGIN,
} from '@/lib/site-contact';

export default function AmenitiesStructuredData() {
  const pageUrl = canonicalPath('/amenities');

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Nearby amenities near ${SUN_CITY_SUMMERLIN.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        url: place.sourceUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.streetAddress,
          addressLocality: SUN_CITY_SUMMERLIN.city,
          addressRegion: SUN_CITY_SUMMERLIN.state,
          postalCode: place.postalCode,
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: place.lat,
          longitude: place.lng,
        },
      },
    })),
  };

  const communityPlace = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: SUN_CITY_SUMMERLIN.name,
    description: SUN_CITY_SUMMERLIN.description,
    url: `${SITE_ORIGIN}/community`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SUN_CITY_SUMMERLIN.city,
      addressRegion: SUN_CITY_SUMMERLIN.state,
      postalCode: SUN_CITY_SUMMERLIN.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SUN_CITY_SUMMERLIN.center.lat,
      longitude: SUN_CITY_SUMMERLIN.center.lng,
    },
  };

  const agentExtension = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': jsonLdIds.realEstateAgent,
    name: businessName.realEstateAgent,
    url: pageUrl,
    telephone: phone.e164,
    areaServed: {
      '@type': 'Place',
      name: SUN_CITY_SUMMERLIN.name,
      geo: communityPlace.geo,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(communityPlace) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agentExtension) }} />
    </>
  );
}
