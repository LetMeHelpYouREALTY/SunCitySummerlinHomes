declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': any;
  }
}

interface Window {
  google?: any;
  initSunCitySummerlinMap?: () => void;
  filterMapMarkers?: (filter: string) => void;
}
