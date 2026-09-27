/**
 * Sun City Summerlin — hyperlocal map anchor.
 * Center: Del Webb Boulevard corridor / community core (aligned with existing /map page
 * and 9406 Del Webb Blvd office address in site-contact). Source: site NAP + Google Maps
 * placement for Sun City Summerlin 55+ community, Las Vegas NV 89134.
 */
export const SUN_CITY_SUMMERLIN = {
  name: 'Sun City Summerlin',
  shortName: 'Sun City Summerlin',
  city: 'Las Vegas',
  state: 'NV',
  postalCode: '89134',
  description:
    'A Del Webb 55+ active adult community in northwest Las Vegas with on-site golf, recreation centers, and gated neighborhoods.',
  /** Map search radius (meters) for nearby Places queries */
  nearbySearchRadiusMeters: 8000,
  center: {
    lat: 36.2045,
    lng: -115.2954,
  },
  defaultMapZoom: 14,
} as const;

export function communityEmbedMapUrl(): string {
  const { lat, lng } = SUN_CITY_SUMMERLIN.center;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${SUN_CITY_SUMMERLIN.defaultMapZoom}&output=embed`;
}

export function directionsUrlForPlace(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}
