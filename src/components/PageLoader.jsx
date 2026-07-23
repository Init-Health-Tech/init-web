import React from "react";

/**
 * Minimal fallback shown for the brief moment a lazy-loaded route chunk is
 * being fetched. Kept intentionally quiet (no layout shift, no flash of
 * unrelated content) since most chunks load near-instantly on a warm cache.
 */
const PageLoader = () => (
  <div
    role="status"
    aria-live="polite"
    className="min-h-screen flex items-center justify-center"
  >
    <span className="sr-only">Cargando página…</span>
    <div className="h-10 w-10 border-2 border-primary/30 border-t-primary animate-spin exec-chamfer" />
  </div>
);

export default PageLoader;
