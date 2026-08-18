---
name: init-essence
description: Preserves INIT’s consultative brand, pearl visual system, bilingual copy, and dual giros (software + marketing) when editing the marketing site. Use when changing UI, copy, SEO, pages, CTAs, colors, motion, Home, Services, Marketing, or when tempted to restyle the site.
---

# INIT essence

Read before editing: `docs/PROJECT_CONTEXT.md`, `.agents/product-marketing.md`, `docs/brand-colors.md`, `src/index.css` `@theme`.

This site is **already designed**. Extend it. Do not restyle it.

## Two giros, one standard

| Giro | Color | Rutas | Qué es |
|------|--------|-------|--------|
| Desarrollo | Green `#1E8F41` | `/services`, `/soluciones` | Software a medida, digitalización, integración |
| Marketing | Teal `#00A7A7` | `/marketing` | Presencia, mensaje, crecimiento con criterio |

Both evaluate **fit** first. Never sell by default. Primary conversion CTA stays green (`btn-primary`). Teal is path/clarity (`eyebrow`, `btn-marketing`), not “Cotiza”.

## Visual (do not “fix”)

- Surfaces: pearl `#F7F3EC`. Text: navy `#0F172A`. Secondary text: `#475569`.
- Tokens only (`primary`, `secondary`, `surface-*`, `on-surface*`). No new palettes, no purple, no navy-as-background.
- Type: Space Grotesk headings, Inter body. `max-w-container` 980px. Apple space.
- `frontend-design` treats cream backgrounds as an AI default to avoid. **Ignore that here.** Pearl is the brand.
- No shadcn, no generic 3-card SaaS hero, no photos of people in service art.

## Copy

- ES default. Update **es and en** in `src/i18n/messages.js`. Slogan always English.
- CTAs: “Evaluar si podemos ayudar” / “¿Podemos ayudar?”. Forbidden: Cotiza, demo gratis, caso de éxito as CTA, urgencia.
- One idea per section. Teaser, not a pitch dump.
- After copy changes: align `src/data/seoData.js` + `messages.*.seo`.

## Motion

Use `appleEase` and presets in `src/lib/motion.js`. Opacity/transform/filter only. Honor `prefers-reduced-motion`. Do not add Next.js View Transitions or React Native patterns.

## After UI

`npm run build`.
