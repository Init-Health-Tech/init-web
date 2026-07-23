# Resumen de cambios — Redesign & Auditoría (sesión actual)

> Generado automáticamente a partir de `git diff` sobre el último commit (`0fd2244`) más los cambios de esta sesión. El sitio corre con `npm run dev` (localhost:5173) o `npm run build && npm run preview`.

## 1. Nuevos componentes compartidos (`src/components/`)

| Componente | Propósito |
|---|---|
| `CtaBanner.jsx` | Banner de llamada a la acción reutilizable (título, texto, botón). Reemplaza los bloques de CTA que cada página repetía a mano. Ahora usado en **Home, Services, Portfolio, Team y Solutions**. |
| `FadeIn.jsx` | Wrapper de scroll-reveal con Framer Motion (`delay`, `duration`, `y`, `as`). Centraliza la variante `fadeUp` que antes se redeclaraba en cada página. |
| `IconFeatureCard.jsx` | Tarjeta de "icono + título + texto" (usa `FadeIn` internamente). Reutilizada en la grilla "¿Por qué elegirnos?" de Home. |
| `StructuredData.jsx` | Inserta JSON-LD (`Organization`/`ProfessionalService`) sin duplicar el bloque `<script>` en cada página. Usado en Home, Team, Portfolio, Services, Solutions, Contact. |
| `PageLoader.jsx` | Fallback de `<Suspense>` para las rutas cargadas con `React.lazy`. |
| `SkipLink.jsx` | Enlace "saltar al contenido" (accesibilidad de teclado) antes del `<Navbar>`. |

## 2. Enrutamiento y carga (`src/App.jsx`)

- Las páginas (`Home`, `Services`, `Solutions`, `Portfolio`, `Team`, `Contact`) ahora se cargan con `React.lazy` + `Suspense` (`PageLoader`) en vez de import estático, reduciendo el bundle inicial.
- Se agregó `SkipLink` para navegación por teclado.
- Se integró `FloatingContactButton` a nivel de App (visible en todas las páginas salvo `/contact`).
- Se quitó el componente `StitchBackground` del árbol global (ya no se usaba de esa forma).

## 3. Estilos y design tokens (`src/index.css`, `tailwind.config.js`)

- **Fuente Inter**: se dejó de importar vía `@import url(...)` dentro de `index.css` y se movió a `<link rel="preconnect">` + `<link rel="stylesheet">` en `index.html`, para que la descarga de la fuente empiece antes de que se parsee el CSS.
- **`--exec-clip`**: se creó una variable CSS con el `clip-path` de esquina achaflanada ("chamfer") que `exec-chamfer`, `exec-frame`, `btn-primary`, `btn-secondary` e `icon-badge` repetían textualmente 5 veces. Ahora todos referencian `var(--exec-clip)`.
- **Accesibilidad**: se agregó un anillo de foco visible (`:focus-visible`) para links, botones, inputs, selects, textareas y elementos con `tabindex`, usando `--color-primary`. Antes no había indicador de foco por teclado.
- Se eliminó la clase `.card-luxury` (no se usaba en ninguna página tras el redesign).
- `tailwind.config.js` se redujo (~38 líneas) quitando configuración/tokens que ya no se referencian tras la migración a `@theme` en CSS.

## 4. Páginas (`src/pages/`)

- **Home.jsx**
  - Grilla "¿Por qué elegirnos?" migrada de `motion.div` inline con clase `benefit-card` a `<IconFeatureCard>` (mismo look, código centralizado).
  - Limpieza general de imports/JSX redundante (~139 líneas de diferencia, principalmente simplificación).
- **Solutions.jsx**
  - El CTA final (sección custom `gradient-bg` con `StoreIcon` y copy propio) se reemplazó por `<CtaBanner title="¿Necesitas algo a medida?" ... to="/services" />`, unificando el tratamiento visual con el resto de páginas. Se quitó el import de `Store` (ya no se usa).
- **Services.jsx / Portfolio.jsx / Team.jsx**
  - Adopción de `PageHeader`, `StructuredData` y `CtaBanner` compartidos (antes cada página tenía su propio hero/CTA con markup casi idéntico pero clases levemente distintas).
- **Contact.jsx**
  - Ajustes de accesibilidad y validación del formulario (labels, `aria-invalid`, `aria-describedby`, `autoComplete`, mensajes de error por campo) y de estructura del acordeón de FAQ.

## 5. Navbar (`src/components/Navbar.jsx`)

- Ajustes menores de accesibilidad/interacción (aria-label del botón de menú móvil, estados activos con `isHome`/`isActive`, transición del subrayado de enlaces).

## 6. Dependencias (`package.json`)

- Se removió `axios` (no quedaban usos reales en el código; `fetch` cubre las llamadas existentes a Web3Forms).

## 7. Imágenes / assets (`public/`)

- **Fotos de equipo** (`empleados-fotos/*.jpg`): optimizadas/comprimidas — de ~6–8 MB cada una a decenas de KB, sin cambiar el contenido visual.
- **Imágenes de servicios**: se sustituyeron los `.png` pesados (~2.4 MB cada uno) por versiones `.jpg` optimizadas:
  - `consultoria-transformacion-digital.png` → `.jpg`
  - `desarrollo-software-a-medida.png` → `.jpg`
  - `soluciones-tecnologicas-integracion.png` → `.jpg`
  - Los `.png` originales quedaron marcados para borrar del control de versiones.

## 8. Estado del build

- `npm run build` corre limpio (Vite) después de cada cambio aplicado en esta sesión; no hay errores de módulos ni warnings nuevos.
- El servidor de desarrollo (`localhost:5173`) fue **detenido** a pedido explícito al finalizar esta sesión.

---

### Cómo volver a levantar el sitio

```bash
npm run dev       # desarrollo, http://localhost:5173
# o
npm run build && npm run preview   # build de producción + preview
```
