# Skills map — INIT web

Skills viven en `.agents/skills/`. Lock: `skills-lock.json` en la raíz.

## Usar según la tarea

### Diseño / UI
| Skill | Cuándo |
|-------|--------|
| `frontend-design` | Dirección visual, tipografía, layout no genérico |
| `landing-page-design` | Estructura de landing / secciones |
| `ui-ux-pro-max` | Paletas, tipografías, patrones UX (DB local) |
| `ui-styling` / `design-system` | Tokens, componentes, Tailwind |
| `web-design-guidelines` | Auditoría UI/a11y Vercel |
| `design-taste-frontend` / `improve-ui` | Pulir look & feel |
| `color-palette` / `color-expert` | Escalas, contraste, psicología de color |
| `brand` | Identidad, consistencia de marca |

### Copy / marketing
| Skill | Cuándo |
|-------|--------|
| `copywriting` / `copy-editing` | Textos de página |
| `landing-page-copywriter` | Landing completa |
| `marketing-psychology` | Escasez, fit, persuasión ética |
| `content-strategy` / `offers` | Mensaje y oferta |
| `cro` | Optimizar conversión sin romper tono consultivo |

### SEO
| Skill | Cuándo |
|-------|--------|
| `seo` / `seo-audit` | Base y auditoría |
| `ai-seo` | Visibilidad en AI/answer engines |
| `programmatic-seo` | Páginas escalables por keyword |
| `seo-geo` | SEO local / geo (México, Edo. Méx.) |
| `schema` | JSON-LD / rich results |
| `site-architecture` | IA de información / rutas |
| `fixing-metadata` | Meta tags / OG |

### Calidad / performance
| Skill | Cuándo |
|-------|--------|
| `performance` | CWV, peso, LCP |
| `accessibility` / `fixing-accessibility` | a11y |
| `webapp-testing` | Pruebas de flujos UI |
| `fixing-motion-performance` | Animaciones |

### React / Vercel
| Skill | Cuándo |
|-------|--------|
| `vercel-react-best-practices` | Perf React/Next patterns |
| `vercel-composition-patterns` | Composición de componentes |
| `vercel-react-view-transitions` | View Transitions |
| `deploy-to-vercel` / `vercel-cli-with-tokens` | Deploy |
| `vercel-optimize` | Coste/perf en Vercel (proyecto ya desplegado) |

### Analytics
| Skill | Cuándo |
|-------|--------|
| `analytics` | Eventos / medición (GA4 ya en `index.html`) |

## Instalar más

```bash
npx skills find <keyword>
npx skills add <owner/repo@skill> -y
```

## Contexto del proyecto (no skills)

- `AGENTS.md` — entrada rápida
- `docs/PROJECT_CONTEXT.md` — verdad del producto
- `.agents/product-marketing.md` — voz y CTAs
- `docs/brand-colors.md` — colores
- `.cursor/rules/init-web.mdc` — regla always-on
