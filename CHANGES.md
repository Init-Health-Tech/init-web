# Resumen de cambios — Redesign & contexto agentes

> Dev: `npm run dev` · Build: `npm run build`.

## Contexto para agentes (cargar fácil)

| Archivo | Para qué |
|---------|----------|
| `AGENTS.md` | Entrada rápida |
| `docs/PROJECT_CONTEXT.md` | Fuente de verdad producto/diseño |
| `.agents/product-marketing.md` | Voz, CTAs, fit consultivo |
| `docs/brand-colors.md` | Paleta LaTeX + contraste AA |
| `.agents/SKILLS.md` | Mapa de skills web/SEO/UI |
| `.cursor/rules/init-web.mdc` | Regla always-on en Cursor |
| `.cursor/rules/init-pages.mdc` | Regla al editar pages/components |

## Skills

Lock: `skills-lock.json`. Mapa: `.agents/SKILLS.md`.

**Ya había:** seo, seo-audit, ai-seo, frontend-design, copywriting, brand, color-*, web-design-guidelines, performance, accessibility, vercel-*, etc.

**Añadidos en esta pasada:** programmatic-seo, schema, analytics, cro, site-architecture, webapp-testing, landing-page-design, seo-geo (+ color-palette / color-expert previos).

## Posicionamiento vigente

Consultora que **evalúa fit**. CTAs: “Evaluar si podemos ayudar” / “¿Podemos ayudar?”. No cotiza/demo gratis/urgencia.

## Visual vigente

Paleta Navy / Green / Teal / Lime / Light / Mint. Superficies navy profundas. Apple space. Tokens en `src/index.css` `@theme`.
