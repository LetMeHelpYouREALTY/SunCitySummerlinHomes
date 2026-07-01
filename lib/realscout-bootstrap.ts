/** Inline bootstrap for app/layout.tsx — mounts [data-realscout-tag] hosts after script ready. */
export const REALSCOUT_BOOTSTRAP_SCRIPT = `
(function () {
  var TAGS = ['realscout-office-listings', 'realscout-advanced-search', 'realscout-home-value'];

  function isReady() {
    return TAGS.some(function (tag) {
      return !!customElements.get(tag);
    });
  }

  function mountHosts() {
    if (!isReady()) return;
    document.querySelectorAll('[data-realscout-tag]').forEach(function (host) {
      var tag = host.getAttribute('data-realscout-tag');
      if (!tag) return;
      var attrs = {};
      try {
        attrs = JSON.parse(host.getAttribute('data-realscout-attrs') || '{}');
      } catch (e) {
        return;
      }
      var attrsKey = JSON.stringify(attrs);
      if (
        host.getAttribute('data-realscout-mounted') === 'true' &&
        host.getAttribute('data-realscout-attrs-key') === attrsKey
      ) {
        return;
      }
      host.replaceChildren();
      var el = document.createElement(tag);
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
      host.appendChild(el);
      host.setAttribute('data-realscout-mounted', 'true');
      host.setAttribute('data-realscout-attrs-key', attrsKey);
    });
  }

  function onReady() {
    mountHosts();
  }

  document.addEventListener('realscout-web-components-ready', onReady);
  if (isReady()) onReady();

  var attempts = 0;
  var pollId = setInterval(function () {
    onReady();
    if (isReady() || ++attempts > 200) clearInterval(pollId);
  }, 100);

  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function () {
      if (isReady()) onReady();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () {
      observer.disconnect();
    }, 30000);
  }
})();
`;
