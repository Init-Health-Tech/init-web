import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Controla el scroll al cambiar de ruta:
 * - Si la URL trae un hash (#seccion), desplaza a ese elemento.
 * - Si no, vuelve al inicio de la página.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Esperamos al render de la ruta destino antes de buscar el ancla.
      const id = hash.replace("#", "");
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      };
      const raf = requestAnimationFrame(() => requestAnimationFrame(scroll));
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}
