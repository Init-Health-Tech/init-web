# INIT — Project context (cargar siempre)

> Resumen operativo para agentes. Detalle de marketing → `.agents/product-marketing.md`. Colores → `docs/brand-colors.md`.

## Qué es

**INIT** — consultora de desarrollo de software a medida y digitalización en Ciudad López Mateos, Estado de México. Sitio: https://init.com.mx

No es una fábrica de cotizaciones: **primero evalúan si pueden ayudar**. Si no hay fit, lo dicen y no venden por vender.

## Stack

- React 18/19 + Vite 5 + Tailwind CSS v4 (`@theme` en `src/index.css`)
- React Router, Framer Motion, MUI icons
- Deploy típico: Vercel (`deploy-to-vercel`)

## Posicionamiento y CTAs

| Sí | No |
|----|-----|
| Evaluar si podemos ayudar | Cotiza tu proyecto |
| ¿Podemos ayudar? | Demo gratuita |
| Ver el trabajo (explorar) | Sé nuestro próximo caso de éxito |
| Si no podemos ayudar, no vendemos | Urgencia / “¡últimos lugares!” |

Hero Home: marca **INIT** + tesis + subcopy consultivo. CTA primario → portafolio; secundario → contacto (filtro).

## Paleta (LaTeX → CSS)

| Token | Hex | Psicología | Uso |
|-------|-----|------------|-----|
| Navy | `#062D55` | Confianza | Fondos (`#031525` profundo) |
| Green | `#1E8F41` | Crecimiento | Marca; CTA fill AA `#146B36` |
| Teal | `#00A7A7` | Claridad | Eyebrows, focus, hovers |
| Lime | `#7ED957` | Progreso | Acento ~5% |
| Light | `#F4F7FB` | Apertura | Texto principal |
| Mint | `#E8F8F0` | Frescura | Éxito soft |
| Gray | `#6B7280` | Neutro | En dark usar `#94A3B8` |

Sin oro legacy. Gradiente marca: green → teal → lime.

## Arquitectura de páginas

| Ruta | Archivo | Notas |
|------|---------|--------|
| `/` | `Home.jsx` | Apple layout, scrim navy, escasez |
| `/services` | `Services.jsx` | Tres caminos, exigencia |
| `/contact` | `Contact.jsx` | Evaluar fit + FAQ honestas |
| `/portfolio` | `Portfolio.jsx` | Casos reales, CTA filtro |
| `/team` | `Team.jsx` | Equipo |
| `/soluciones` | `Solutions.jsx` | ERPinit / initlogistics — sin demo gratis |

Componentes clave: `CtaBanner`, `PageHeader`, `PageHead`, `StructuredData`, `FloatingContactButton` (discreto, no “cotiza”).

## SEO

- Metas por ruta: `src/data/seoData.js`
- JSON-LD: `StructuredData.jsx`
- Skills: `seo`, `seo-audit`, `ai-seo`, `schema`, `programmatic-seo`, `seo-geo`

Al cambiar copy de página, alinear `title`/`description` en `seoData.js`.

## Cómo mantener coherencia

1. Leer este archivo + product-marketing + brand-colors.
2. Usar tokens de `@theme` — no hardcodear hex de otra paleta.
3. Copy corto, calmado, en español (México).
4. `npm run build` tras cambios de UI.
5. Actualizar este doc si cambia posicionamiento o tokens.

## Skills instalados

Mapa completo: [`.agents/SKILLS.md`](../.agents/SKILLS.md). Lock: `skills-lock.json`.
