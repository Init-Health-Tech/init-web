# INIT Web — Agent entry

Sitio marketing de **INIT** (consultora de software a medida, México).  
Stack: **React + Vite + Tailwind v4 + React Router**. Repo: `Init-Health-Tech/init-web`.

## Cargar primero (obligatorio)

Antes de editar UI, copy o SEO, lee en este orden:

1. [`docs/PROJECT_CONTEXT.md`](docs/PROJECT_CONTEXT.md) — fuente de verdad del producto/diseño
2. [`.agents/product-marketing.md`](.agents/product-marketing.md) — voz, CTAs, fit consultivo
3. [`docs/brand-colors.md`](docs/brand-colors.md) — paleta LaTeX + AA
4. Tokens en [`src/index.css`](src/index.css) (`@theme`) — no reinventar colores

## Reglas no negociables

- **Posicionamiento:** consultora que *evalúa fit*. Si no pueden ayudar, lo dicen. No vender por vender.
- **CTAs:** “Evaluar si podemos ayudar” / “¿Podemos ayudar?” — nunca “Cotiza”, “demo gratis”, “sé nuestro caso de éxito”.
- **Visual:** Apple space + navy profundo INIT + green/teal/lime. Sin púrpura genérico, sin oro legacy, sin urgencia falsa.
- **Contraste:** botones con `#146B36` + blanco; texto secundario `#94A3B8` (no Gray crudo `#6B7280` sobre navy).
- **Hero Home:** marca INIT visible; CTA principal explorar trabajo; contacto como filtro.

## Skills (mapa rápido)

Ver [`.agents/SKILLS.md`](.agents/SKILLS.md). Destacados:

| Tarea | Skill |
|-------|--------|
| UI / landing | `frontend-design`, `landing-page-design`, `ui-ux-pro-max`, `web-design-guidelines` |
| Copy / tono | `copywriting`, `copy-editing`, `marketing-psychology`, `landing-page-copywriter` |
| SEO | `seo`, `seo-audit`, `ai-seo`, `programmatic-seo`, `seo-geo`, `schema` |
| Color | `color-palette`, `color-expert`, `brand` |
| Performance / a11y | `performance`, `accessibility`, `webapp-testing` |
| Deploy | `deploy-to-vercel`, `vercel-cli-with-tokens` |
| React calidad | `vercel-react-best-practices`, `vercel-composition-patterns` |

## Comandos

```bash
npm run dev      # localhost
npm run build    # verificar antes de cerrar cambios UI
```

## Dónde está el código

| Área | Path |
|------|------|
| Páginas | `src/pages/` |
| SEO meta | `src/data/seoData.js` |
| Estilos / tokens | `src/index.css` |
| CTA compartido | `src/components/CtaBanner.jsx` |
| Contacto flotante | `src/components/FloatingContactButton.jsx` |
