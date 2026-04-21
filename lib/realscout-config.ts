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

/** Opens Dr. Jan’s RealScout portal (live search / registration). Override per deploy. */
export const realScoutHomeSearchUrl =
  trimEnv(process.env.NEXT_PUBLIC_REALSCOUT_URL) ?? DEFAULT_HOME_SEARCH;

/** Office-listings widget `agent-encoded-id`. */
export const realScoutAgentEncodedId =
  trimEnv(process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID) ?? DEFAULT_AGENT_ENCODED_ID;
