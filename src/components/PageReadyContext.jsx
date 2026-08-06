import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router";
import { useReducedMotion } from "framer-motion";
import { PAGE_ENTER_MS } from "../lib/motion";

const PageReadyContext = createContext({
  ready: true,
  markReady: () => {},
});

/**
 * Gates scroll-based IntersectionObservers until the route enter fade finishes.
 * Resets on every pathname change so whileInView does not miss above-the-fold nodes.
 */
export function PageReadyProvider({ children }) {
  const location = useLocation();
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(Boolean(reduce));

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return undefined;
    }
    setReady(false);
    const id = window.setTimeout(() => setReady(true), PAGE_ENTER_MS + 40);
    return () => window.clearTimeout(id);
  }, [location.pathname, reduce]);

  const markReady = useCallback(() => setReady(true), []);

  const value = useMemo(() => ({ ready, markReady }), [ready, markReady]);

  return (
    <PageReadyContext.Provider value={value}>
      {children}
    </PageReadyContext.Provider>
  );
}

export function usePageReady() {
  return useContext(PageReadyContext);
}
