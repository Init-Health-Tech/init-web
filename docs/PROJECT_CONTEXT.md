# INIT — Project context (cargar siempre)

> Resumen operativo para agentes. Detalle de marketing → `.agents/product-marketing.md`. Colores → `docs/brand-colors.md`.

## Qué es

**INIT** — *Brilliant minds building the future.*  
Consultora de desarrollo de software a medida, digitalización y **marketing** en Ciudad de México. Sitio: https://init.com.mx

Dos giros, un estándar: **desarrollo** (verde) y **marketing** (teal). No es una fábrica de cotizaciones: **primero evalúan si pueden ayudar**. Si no hay fit, lo dicen y no venden por vender.

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
| Pearl | `#F7F3EC` | Apertura | Fondos / superficies (todo) |
| Navy (on-surface) | `#0F172A` | Confianza | Texto |
| Green | `#1E8F41` | Crecimiento | Desarrollo / CTAs |
| Teal | `#00A7A7` | Claridad | Marketing |
| RFID silver | `#C0C7D1` | Precisión | initlogistics (translúcido) |

Sin navy-as-background. Gradiente marca: green → teal.

## Arquitectura de páginas

| Ruta | Archivo | Notas |
|------|---------|--------|
| `/` | `Home.jsx` | Apple layout, scrim navy, escasez |
| `/services` | `Services.jsx` | Tres caminos de desarrollo, exigencia |
| `/marketing` | `Marketing.jsx` | Giro de marketing (teal) — presencia, mensaje, criterio |
| `/contact` | `Contact.jsx` | Evaluar fit + FAQ honestas |
| `/portfolio` | `Portfolio.jsx` | Casos reales, CTA filtro |
| `/team` | `Team.jsx` | Equipo (ruta oculta de momento) |
| `/soluciones` | `Solutions.jsx` | ERPinit / initlogistics — sin demo gratis |

Componentes clave: `CtaBanner`, `PageHeader`, `PageHead`, `StructuredData`, `FloatingContactButton` (discreto, no “cotiza”).

## SEO

- Metas por ruta: `src/data/seoData.js`
- JSON-LD: `StructuredData.jsx`
- Skills: `seo`, `seo-audit`, `ai-seo`, `schema`, `programmatic-seo`, `seo-geo`

Al cambiar copy de página, alinear `title`/`description` en `seoData.js`.

## Idioma

- ES / EN con toggle en navbar (`src/i18n/`). Preferencia en `localStorage` (`init-lang`).
- **Predeterminado: español.** EN solo tras elección explícita del usuario (no por idioma del navegador).
- Copy UI: `src/i18n/messages.js`. Slogan siempre en inglés.
- SEO por idioma vía `getPageSeo(key, lang)`.
- Alcance: empresas de todo tamaño, en cualquier parte del mundo (base en Estado de México).

## Cómo mantener coherencia

1. Leer este archivo + product-marketing + brand-colors.
2. Usar tokens de `@theme` — no hardcodear hex de otra paleta.
3. Copy corto, calmado; al cambiar textos, actualizar **es y en** en `messages.js`.
4. `npm run build` tras cambios de UI.
5. Actualizar este doc si cambia posicionamiento o tokens.
6. Mobile-first: padding `px-4 sm:px-6`, CTAs full-width en móvil, targets ≥44px.

## Skills instalados

Esencia del sitio: `init-essence`. Mapa: [`.agents/SKILLS.md`](../.agents/SKILLS.md). Lock: `skills-lock.json`.
