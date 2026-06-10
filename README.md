# INIT Web

Frontend de [INIT](https://init.com.mx): sitio estático React + Vite + Tailwind v4.

**Repositorio:** [github.com/Init-Health-Tech/init-web](https://github.com/Init-Health-Tech/init-web)

## Desplegar en Vercel (recomendado)

1. Importa el repo en [vercel.com/new](https://vercel.com/new) → `Init-Health-Tech/init-web`.
2. Framework: **Vite** (auto-detectado).
3. Build: `npm run build` · Output: `dist` · Install: `npm ci`.
4. Deploy. Las rutas SPA (`/`, `/team`, `/services`, `/portfolio`, `/contact`, etc.) funcionan con el `vercel.json` incluido.

Guía detallada: **[VERCEL.md](VERCEL.md)**

### CLI

```bash
npm i -g vercel
vercel --prod
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Stack

- React 18 + Vite 5
- Tailwind CSS v4
- React Router · Framer Motion · MUI Icons
- Sitio estático (sin backend en este repo)

## Equipo

4 cofundadores, 1 consultora senior y 2 becarios (7 personas).
