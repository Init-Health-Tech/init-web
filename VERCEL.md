# Despliegue en Vercel – INIT Web

Repositorio: **git@github.com:Init-Health-Tech/init-web.git**

## Requisitos

- Cuenta en [vercel.com](https://vercel.com)
- Acceso al org **Init-Health-Tech** en GitHub

## Opción 1: Desde el dashboard (recomendado)

1. [vercel.com/new](https://vercel.com/new) → Import **Init-Health-Tech/init-web**.
2. **Root Directory:** raíz del repo (vacío).
3. Verifica la configuración (Vercel la detecta del `vercel.json`):

| Campo | Valor |
|-------|--------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm ci` |
| Node.js | 18.x o superior |

4. **Deploy**. Cada push a `main` redeploya automáticamente.

## Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel link    # vincular al proyecto Init-Health-Tech
vercel --prod
```

## Qué incluye la optimización

- **`vercel.json`**: rewrites SPA (solo rutas sin extensión → `index.html`), caché largo en `/assets`, caché en medios estáticos, cabeceras de seguridad.
- **`.vercelignore`**: excluye Docker, diseño Stitch, docs y assets duplicados del upload de build (~30 MB menos).
- **`vite.config.ts`**: chunks separados (react, mui, router), terser, sin sourcemaps en prod.
- **Videos**: solo clips optimizados `hero-bg-*` (~7 MB total); eliminados orb legacy no usados.

## Rutas SPA

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/team` | Equipo |
| `/services` | Servicios |
| `/soluciones` | Soluciones |
| `/portfolio` | Proyectos y clientes |
| `/contact` | Contacto |

## Variables de entorno

No son obligatorias: el sitio es 100 % estático. Si más adelante conectas API:

```
VITE_API_BASE_URL=https://tu-api.com/api
```

Configúralas en **Project → Settings → Environment Variables**.

## Dominio propio

**Settings → Domains** → añade `init.com.mx` (o el dominio que uses). Vercel indica los registros DNS.

## Soporte

- [Vercel + Vite](https://vercel.com/docs/frameworks/vite)
- [Rewrites](https://vercel.com/docs/project-configuration#rewrites)
