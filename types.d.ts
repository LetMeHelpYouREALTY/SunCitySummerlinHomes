/** Global + side-effect CSS imports (e.g. layout `import '@/styles/tokens.css'`). Required for TS 6+ strict resolution on Vercel. */
declare module '*.css';

interface Window {
  initSunCitySummerlinMap?: () => void;
  filterMapMarkers?: (filter: string) => void;
  gm_authFailure?: () => void;
  __gmapsReady?: () => void;
}
