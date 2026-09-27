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
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader';
import { searchCategory, type NearbyPlaceResult } from '@/lib/nearby-amenities-search';
import styles from '@/styles/AmenityMap.module.css';

export type MapPlace = {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
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

function formatDisplayAddress(place: CuratedPlaceLike): string {
  return `${place.streetAddress}, ${SUN_CITY_SUMMERLIN.city}, ${SUN_CITY_SUMMERLIN.state} ${place.postalCode}`;
}

type CuratedPlaceLike = {
  streetAddress: string;
  postalCode: string;
};

function buildInfoWindowContent(place: MapPlace): HTMLElement {
  const root = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = place.name;
  title.style.margin = '0 0 8px';
  title.style.color = '#235d89';
  title.style.fontSize = '1rem';
  root.appendChild(title);

  if (place.address) {
    const addr = document.createElement('p');
    addr.textContent = place.address;
    root.appendChild(addr);
  }

  const dest = place.address ? `${place.name}, ${place.address}` : place.name;
  const link = document.createElement('a');
  link.href = directionsUrlForPlace(dest);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Directions';
  link.style.color = '#235d89';
  link.style.fontWeight = '600';
  root.appendChild(link);

  return root;
}

function curatedForCategory(categoryId: AmenityCategoryId): MapPlace[] {
  const community = CURATED_NEARBY_PLACES.find((p) => p.id === 'community');
  const matches = CURATED_NEARBY_PLACES.filter((p) => p.category === categoryId && p.id !== 'community');
  const list = categoryId === 'recreation' && community ? [community, ...matches] : matches;
  return list.map((p) => ({
    id: p.id,
    name: p.name,
    address: formatDisplayAddress(p),
    lat: p.lat,
    lng: p.lng,
    category: p.category,
  }));
}

function toMapPlaces(results: NearbyPlaceResult[]): MapPlace[] {
  return results.map((place) => ({
    id: place.id,
    name: place.name,
    address: place.address,
    lat: place.lat,
    lng: place.lng,
    category: place.category,
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
  const mapReadyRef = useRef(false);
  const loadStartedRef = useRef(false);

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

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  }, []);

  const enterFallback = useCallback(
    (note?: string) => {
      if (mapRef.current) {
        mapRef.current = null;
      }
      clearMarkers();
      communityMarkerRef.current?.setMap(null);
      communityMarkerRef.current = null;
      mapReadyRef.current = false;
      setMapMode('fallback');
      setPlaces(curatedForCategory(activeCategory));
      if (note) setStatusNote(note);
    },
    [activeCategory, clearMarkers],
  );

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

  const renderMarkers = useCallback(
    (map: google.maps.Map, nextPlaces: MapPlace[]) => {
      clearMarkers();
      nextPlaces.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        const info = new google.maps.InfoWindow({ content: buildInfoWindowContent(place) });
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
      content: buildInfoWindowContent({
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

  const fetchPlacesForCategory = useCallback(
    async (categoryId: AmenityCategoryId): Promise<MapPlace[]> => {
      const category = AMENITY_CATEGORIES.find((item) => item.id === categoryId);
      if (!category) return curatedForCategory(categoryId);

      try {
        const results = await searchCategory(
          SUN_CITY_SUMMERLIN.center,
          categoryId,
          category.placeTypes,
        );
        if (results.length > 0) return toMapPlaces(results);
        return curatedForCategory(categoryId);
      } catch {
        return curatedForCategory(categoryId);
      }
    },
    [],
  );

  const initInteractiveMap = useCallback(async () => {
    if (!mapDivRef.current) {
      enterFallback();
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
      enterFallback('Interactive map unavailable — showing embedded map and curated list.');
    }
  }, [activeCategory, ensureCommunityMarker, enterFallback, fetchPlacesForCategory, renderMarkers]);

  useEffect(() => {
    if (!isInView) return;

    const onAuthFailure = () => {
      enterFallback('Map authentication failed — showing embedded map and curated list.');
    };

    window.addEventListener('gmaps:auth-failure', onAuthFailure);

    if (mapsAuthFailed) {
      enterFallback();
      return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
    }

    if (!API_KEY) {
      setMapMode('fallback');
      return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
    }

    if (loadStartedRef.current) return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
    loadStartedRef.current = true;
    setMapMode('loading');

    loadGoogleMaps(API_KEY)
      .then(() => {
        if (mapsAuthFailed) {
          enterFallback();
          return;
        }
        void initInteractiveMap();
      })
      .catch(() => {
        enterFallback('Map API could not load — showing embedded map and curated list.');
      });

    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback, initInteractiveMap, isInView]);

  useEffect(() => {
    if (!mapReadyRef.current || !mapRef.current || mapMode !== 'interactive') {
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
  }, [activeCategory, fetchPlacesForCategory, mapMode, renderMarkers]);

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
