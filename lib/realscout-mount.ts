/** Dispatched by realscout-web-components.umd.js when custom elements are registered. */
export const REALSCOUT_READY_EVENT = 'realscout-web-components-ready';

const REGISTERED_TAGS = [
  'realscout-office-listings',
  'realscout-advanced-search',
  'realscout-home-value',
] as const;

const READY_POLL_MS = 100;
const READY_TIMEOUT_MS = 20000;

function isRealScoutDefined(): boolean {
  if (typeof window === 'undefined') return false;
  return REGISTERED_TAGS.some((tag) => Boolean(customElements.get(tag)));
}

/** Run callback after RealScout script registers web components. */
export function whenRealScoutReady(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => undefined;

  let cancelled = false;

  const tryRun = () => {
    if (cancelled) return false;
    if (!isRealScoutDefined()) return false;
    callback();
    return true;
  };

  if (tryRun()) {
    return () => {
      cancelled = true;
    };
  }

  const onReady = () => {
    tryRun();
  };

  document.addEventListener(REALSCOUT_READY_EVENT, onReady, { once: true });

  const intervalId = window.setInterval(() => {
    if (tryRun()) {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    }
  }, READY_POLL_MS);

  const timeoutId = window.setTimeout(() => {
    window.clearInterval(intervalId);
  }, READY_TIMEOUT_MS);

  return () => {
    cancelled = true;
    document.removeEventListener(REALSCOUT_READY_EVENT, onReady);
    window.clearInterval(intervalId);
    window.clearTimeout(timeoutId);
  };
}

/** Imperative mount — avoids React re-renders wiping upgraded custom elements. */
export function mountRealScoutElement(
  host: HTMLElement,
  tagName: string,
  attributes: Record<string, string>,
): HTMLElement {
  host.replaceChildren();
  const element = document.createElement(tagName);
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
  host.appendChild(element);
  return element;
}
