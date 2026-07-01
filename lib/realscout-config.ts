/**
 * RealScout — public home search + widget agent id.
 * Per portfolio rule: shared-search / portal URL for CTAs; never use /onboarding for buyers.
 *
 * @see https://em.realscout.com — script host; https://www.realscout.com — API host
 */

const DEFAULT_HOME_SEARCH = 'https://drjanduffy.realscout.com/';
const DEFAULT_AGENT_ENCODED_ID = 'QWdlbnQtMjI1MDUw';

function trimEnv(value: string | undefined): string | undefined {
  const t = value?.trim();
  return t ? t : undefined;
}

/** RealScout expects base64(`Agent-{numericId}`). Vercel env sometimes stores only the digits. */
function normalizeAgentEncodedId(value: string | undefined): string {
  const t = trimEnv(value);
  if (!t) return DEFAULT_AGENT_ENCODED_ID;
  if (/^\d+$/.test(t)) {
    return btoa(`Agent-${t}`);
  }
  return t;
}

/** Opens Dr. Jan’s RealScout portal (live search / registration). Override per deploy. */
export const realScoutHomeSearchUrl =
  trimEnv(process.env.NEXT_PUBLIC_REALSCOUT_URL) ?? DEFAULT_HOME_SEARCH;

/** Office-listings widget `agent-encoded-id`. */
export const realScoutAgentEncodedId = normalizeAgentEncodedId(
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID,
);

/** Defaults for `<realscout-office-listings>` (homepage + properties). */
export const realScoutOfficeListingsDefaults = {
  sortOrder: 'NEWEST',
  listingStatus: 'For Sale',
  /** Comma-separated RealScout codes — no leading comma (`,SFR` returns zero listings). */
  propertyTypes: 'SFR,MF',
  priceMin: '500000',
  priceMax: '1000000',
} as const;

export type RealScoutPriceTier = {
  label: string;
  description: string;
  priceMin: string;
  priceMax: string;
};

/** Site-wide price tiers for live MLS office-listings widgets. */
export const realScoutFeaturedPriceTiers: readonly RealScoutPriceTier[] = [
  {
    label: 'Single-Story Homes',
    description: '$450K – $650K',
    priceMin: '450000',
    priceMax: '650000',
  },
  {
    label: 'Golf Course Homes',
    description: '$650K – $1M',
    priceMin: '650000',
    priceMax: '1000000',
  },
  {
    label: 'Luxury Estates',
    description: '$1M – $4M',
    priceMin: '1000000',
    priceMax: '4000000',
  },
];

export const realScoutLuxuryPriceTiers: readonly RealScoutPriceTier[] = [
  realScoutFeaturedPriceTiers[2],
];
