/** Global + side-effect CSS imports (e.g. layout `import '@/styles/tokens.css'`). Required for TS 6+ strict resolution on Vercel. */
declare module '*.css';

interface Window {
  google?: typeof google;
  initSunCitySummerlinMap?: () => void;
  filterMapMarkers?: (filter: string) => void;
}

declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: Record<string, unknown>);
  }
  class Marker {
    constructor(opts?: Record<string, unknown>);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    constructor(opts?: { content?: string; maxWidth?: number });
    open(opts: { map: Map; anchor?: Marker }): void;
  }
  class Size {
    constructor(width: number, height: number);
  }
  interface PlacesLibrary {
    Place: {
      searchNearby: (request: Record<string, unknown>) => Promise<{ places: PlaceResult[] }>;
    };
  }
  interface PlaceResult {
    displayName?: string;
    formattedAddress?: string;
    rating?: number;
    location?: { lat: () => number; lng: () => number };
  }
  function importLibrary(name: 'places'): Promise<PlacesLibrary>;
}

declare const google: {
  maps: typeof google.maps & {
    Map: typeof google.maps.Map;
    Marker: typeof google.maps.Marker;
    InfoWindow: typeof google.maps.InfoWindow;
    importLibrary: typeof google.maps.importLibrary;
  };
};
