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
- **Visual:** Apple space sobre **perla** `#F7F3EC`; texto navy `#0F172A`; verde = desarrollo / CTAs; teal = giro marketing. Sin púrpura genérico, sin urgencia falsa.
- **Giros:** `/services` software; `/marketing` comunicación. Home no mezcla marketing dentro de “Tres caminos”.
- **Contraste:** CTAs verdes `#1E8F41` + perla; texto secundario `#475569` sobre perla. RFID = plateado translúcido.
- **Hero Home:** marca INIT visible; CTA principal explorar trabajo; contacto como filtro.

## Skills (mapa rápido)

Ver [`.agents/SKILLS.md`](.agents/SKILLS.md). Destacados:

| Tarea | Skill |
|-------|--------|
| Esencia INIT | `init-essence` (antes que skills genéricos de UI) |
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
| Páginas | `src/pages/` (`Marketing.jsx` = giro marketing) |
| SEO meta | `src/data/seoData.js` |
| Estilos / tokens | `src/index.css` |
| CTA compartido | `src/components/CtaBanner.jsx` |
| Contacto flotante | `src/components/FloatingContactButton.jsx` |
