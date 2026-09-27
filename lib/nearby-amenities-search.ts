import type { AmenityCategoryId } from '@/lib/nearby-amenities-data';
import { SUN_CITY_SUMMERLIN } from '@/lib/community-config';

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  mapsUri?: string;
  category: AmenityCategoryId;
};

const cache = new Map<string, Promise<NearbyPlaceResult[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
  types: string[],
): Promise<NearbyPlaceResult[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: {
          center,
          radius: SUN_CITY_SUMMERLIN.nearbySearchRadiusMeters,
        },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as google.maps.places.SearchNearbyRankPreference,
      });

      const results: NearbyPlaceResult[] = [];
      places.forEach((place, index) => {
        const location = place.location;
        if (!location) return;
        const json = location.toJSON();
        results.push({
          id: `api-${categoryId}-${index}`,
          name: place.displayName ?? 'Nearby place',
          address: place.formattedAddress ?? undefined,
          lat: json.lat,
          lng: json.lng,
          mapsUri: place.googleMapsURI ?? undefined,
          category: categoryId,
        });
      });
      return results;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
