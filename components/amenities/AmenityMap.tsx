'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AMENITY_CATEGORIES,
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities-data';
import {
  SUN_CITY_SUMMERLIN,
  communityEmbedMapUrl,
  directionsUrlForPlace,
} from '@/lib/community-config';
import styles from '@/styles/AmenityMap.module.css';

export type MapPlace = {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  rating?: number;
  category: AmenityCategoryId;
};

type AmenityMapProps = {
  variant?: 'full' | 'compact';
  showStaticList?: boolean;
  heading?: string;
  lead?: string;
};

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

function buildInfoWindowHtml(place: MapPlace): string {
  const ratingLine =
    place.rating != null ? `<p><strong>Rating:</strong> ${place.rating.toFixed(1)}</p>` : '';
  const addressLine = place.address ? `<p>${place.address}</p>` : '';
  const dest = place.address ? `${place.name}, ${place.address}` : place.name;
  return `
    <div>
      <h3 style="margin:0 0 8px;color:#235d89;font-size:1rem;">${place.name}</h3>
      ${ratingLine}
      ${addressLine}
      <a href="${directionsUrlForPlace(dest)}" target="_blank" rel="noopener noreferrer" style="color:#235d89;font-weight:600;">Directions</a>
    </div>
  `;
}

function curatedForCategory(categoryId: AmenityCategoryId): MapPlace[] {
  const community = CURATED_NEARBY_PLACES.find((p) => p.id === 'community');
  const matches = CURATED_NEARBY_PLACES.filter((p) => p.category === categoryId && p.id !== 'community');
  const list = categoryId === 'recreation' && community ? [community, ...matches] : matches;
  return list.map((p) => ({
    id: p.id,
    name: p.name,
    address: p.address,
    lat: p.lat,
    lng: p.lng,
    category: p.category,
  }));
}

export default function AmenityMap({
  variant = 'full',
  showStaticList = true,
  heading,
  lead,
}: AmenityMapProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const scriptRequestedRef = useRef(false);
  const mapReadyRef = useRef(false);

  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>('healthcare');
  const [places, setPlaces] = useState<MapPlace[]>(() => curatedForCategory('healthcare'));
  const [mapMode, setMapMode] = useState<'idle' | 'loading' | 'interactive' | 'fallback'>('idle');
  const [statusNote, setStatusNote] = useState<string | null>(null);

  const visibleCategories = useMemo(
    () => AMENITY_CATEGORIES.filter((category) => !category.hiddenByDefault),
    [],
  );

  const useIframe = !API_KEY || mapMode === 'fallback';

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  }, []);

  const renderMarkers = useCallback(
    (map: google.maps.Map, nextPlaces: MapPlace[]) => {
      clearMarkers();
      nextPlaces.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        const info = new google.maps.InfoWindow({ content: buildInfoWindowHtml(place) });
        marker.addListener('click', () => {
          info.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers],
  );

  const ensureCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) return;
    communityMarkerRef.current = new google.maps.Marker({
      map,
      position: SUN_CITY_SUMMERLIN.center,
      title: SUN_CITY_SUMMERLIN.name,
      zIndex: 999,
    });
    const info = new google.maps.InfoWindow({
      content: buildInfoWindowHtml({
        id: 'community',
        name: SUN_CITY_SUMMERLIN.name,
        address: `${SUN_CITY_SUMMERLIN.city}, ${SUN_CITY_SUMMERLIN.state} ${SUN_CITY_SUMMERLIN.postalCode}`,
        lat: SUN_CITY_SUMMERLIN.center.lat,
        lng: SUN_CITY_SUMMERLIN.center.lng,
        category: 'recreation',
      }),
    });
    communityMarkerRef.current.addListener('click', () => {
      info.open({ map, anchor: communityMarkerRef.current! });
    });
  }, []);

  const fetchPlacesForCategory = useCallback(async (categoryId: AmenityCategoryId): Promise<MapPlace[]> => {
    const category = AMENITY_CATEGORIES.find((item) => item.id === categoryId);
    if (!category || !window.google?.maps) {
      return curatedForCategory(categoryId);
    }

    try {
      const placesLibrary = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
      const { Place } = placesLibrary;
      const response = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'rating'],
        locationRestriction: {
          center: SUN_CITY_SUMMERLIN.center,
          radius: SUN_CITY_SUMMERLIN.nearbySearchRadiusMeters,
        },
        includedPrimaryTypes: category.placeTypes,
        maxResultCount: 15,
      });

      const fromApi: MapPlace[] = [];
      response.places.forEach((place, index) => {
        const location = place.location;
        if (!location) return;
        fromApi.push({
          id: `api-${categoryId}-${index}`,
          name: place.displayName ?? 'Nearby place',
          address: place.formattedAddress,
          lat: location.lat(),
          lng: location.lng(),
          rating: place.rating,
          category: categoryId,
        });
      });

      if (fromApi.length > 0) return fromApi;
      return curatedForCategory(categoryId);
    } catch {
      return curatedForCategory(categoryId);
    }
  }, []);

  const initInteractiveMap = useCallback(async () => {
    if (!mapDivRef.current || !window.google?.maps) {
      setMapMode('fallback');
      return;
    }

    try {
      if (!mapRef.current) {
        mapRef.current = new google.maps.Map(mapDivRef.current, {
          center: SUN_CITY_SUMMERLIN.center,
          zoom: SUN_CITY_SUMMERLIN.defaultMapZoom,
          mapId: MAP_ID || undefined,
          fullscreenControl: true,
          mapTypeControl: false,
        });
        ensureCommunityMarker(mapRef.current);
      }

      const initialPlaces = await fetchPlacesForCategory(activeCategory);
      setPlaces(initialPlaces);
      renderMarkers(mapRef.current, initialPlaces);
      mapReadyRef.current = true;
      setMapMode('interactive');
      setStatusNote(null);
    } catch {
      setMapMode('fallback');
      setStatusNote('Interactive map unavailable — showing embedded map and curated list.');
    }
  }, [activeCategory, ensureCommunityMarker, fetchPlacesForCategory, renderMarkers]);

  useEffect(() => {
    if (!isInView) return;

    if (!API_KEY) {
      setMapMode('fallback');
      return;
    }

    if (scriptRequestedRef.current) return;
    scriptRequestedRef.current = true;
    setMapMode('loading');

    const onReady = () => {
      void initInteractiveMap();
    };

    const existing = document.querySelector<HTMLScriptElement>('script[data-nearby-amenity-map]');
    if (existing) {
      if (window.google?.maps) {
        onReady();
      } else {
        existing.addEventListener('load', onReady, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.dataset.nearbyAmenityMap = 'true';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&loading=async&libraries=places`;
    script.async = true;
    script.addEventListener('load', onReady, { once: true });
    script.addEventListener('error', () => {
      setMapMode('fallback');
      setStatusNote('Map API could not load — showing embedded map and curated list.');
    });
    document.head.appendChild(script);
  }, [initInteractiveMap, isInView]);

  useEffect(() => {
    if (!mapReadyRef.current || !mapRef.current) {
      setPlaces(curatedForCategory(activeCategory));
      return;
    }

    let cancelled = false;
    void (async () => {
      const nextPlaces = await fetchPlacesForCategory(activeCategory);
      if (cancelled || !mapRef.current) return;
      setPlaces(nextPlaces);
      renderMarkers(mapRef.current, nextPlaces);
    })();

    return () => {
      cancelled = true;
    };
  }, [activeCategory, fetchPlacesForCategory, renderMarkers]);

  useEffect(() => {
    if (mapMode === 'fallback') {
      setPlaces(curatedForCategory(activeCategory));
    }
  }, [activeCategory, mapMode]);

  const onCategorySelect = (categoryId: AmenityCategoryId) => {
    setActiveCategory(categoryId);
  };

  const mapHeightClass =
    variant === 'full' ? `${styles.mapViewport} ${styles.mapViewportFull}` : styles.mapViewport;

  return (
    <section
      ref={sectionRef}
      className={variant === 'compact' ? `${styles.section} ${styles.sectionCompact}` : styles.section}
      aria-labelledby="nearby-amenities-map-heading"
    >
      {heading ? (
        <h2 id="nearby-amenities-map-heading" className={styles.heading}>
          {heading}
        </h2>
      ) : null}
      {lead ? <p className={styles.lead}>{lead}</p> : null}

      <div className={styles.mapShell}>
        <div
          className={styles.filterBar}
          role="tablist"
          aria-label="Filter nearby amenities by category"
        >
          {visibleCategories.map((category) => {
            const selected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="amenity-map-panel"
                className={selected ? `${styles.filterChip} ${styles.filterChipActive}` : styles.filterChip}
                onClick={() => onCategorySelect(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div id="amenity-map-panel" className={mapHeightClass} role="tabpanel">
          {useIframe ? (
            <iframe
              title={`Map centered on ${SUN_CITY_SUMMERLIN.name}, ${SUN_CITY_SUMMERLIN.city}`}
              className={styles.fallbackFrame}
              src={communityEmbedMapUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div ref={mapDivRef} className={styles.fallbackFrame} aria-label="Interactive amenity map" />
          )}
        </div>

        {statusNote ? <p className={styles.statusMessage}>{statusNote}</p> : null}

        {showStaticList ? (
          <div className={styles.staticList}>
            <h3>
              {visibleCategories.find((c) => c.id === activeCategory)?.label ?? 'Nearby'} — featured places
            </h3>
            <ul>
              {places.map((place) => (
                <li key={place.id}>
                  <strong>{place.name}</strong>
                  {place.address ? ` — ${place.address}` : null}
                  {' · '}
                  <a href={directionsUrlForPlace(place.address ? `${place.name}, ${place.address}` : place.name)}>
                    Directions
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
