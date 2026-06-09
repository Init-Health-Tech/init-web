# Prompt para Google Stitch — Sitio web INIT

Documento basado en el export de Stitch **`stitch_init_software_website_design/`** (diseño **Consultancy Modern Dark**). Incluye identidad visual, sistema de diseño, animaciones en profundidad, contenido real de INIT y prompts listos para copiar.

---

## Referencia visual (export Stitch)

Usa estos archivos como **baseline obligatorio** al generar o refinar:

| Página | HTML | Captura |
|--------|------|---------|
| Home | `stitch_init_software_website_design/init_home/code.html` | `init_home/screen.png` |
| Equipo | `stitch_init_software_website_design/init_equipo/code.html` | `init_equipo/screen.png` |
| Servicios | `stitch_init_software_website_design/init_servicios/code.html` | `init_servicios/screen.png` |
| Soluciones | `stitch_init_software_website_design/init_soluciones/code.html` | `init_soluciones/screen.png` |
| Proyectos | `stitch_init_software_website_design/init_proyectos_y_clientes/code.html` | `init_proyectos_y_clientes/screen.png` |
| Contacto | `stitch_init_software_website_design/init_contacto/code.html` | `init_contacto/screen.png` |
| Design system | `stitch_init_software_website_design/consultancy_modern_dark/DESIGN.md` | — |

**Importante:** El export de Stitch tiene copy y datos de contacto incorrectos (ej. `hola@init.software`, "Ciudad de México"). **Usa siempre el contenido de este documento**, no el del HTML exportado.

---

## Cómo usar en Stitch

1. Sube `public/Init-Logo.svg` y las capturas `screen.png` de cada página como referencia.
2. Copia el [Prompt principal](#prompt-principal-copiar-y-pegar).
3. Para cada página, usa el prompt de seguimiento correspondiente.
4. Pide explícitamente la sección de [Animaciones](#sistema-de-animaciones-obligatorio) en cada iteración.

---

## Prompt principal (copiar y pegar)

```
Rediseña el sitio web completo de INIT siguiendo EXACTAMENTE el estilo "Consultancy Modern Dark" del export stitch_init_software_website_design/ (dark mode, glassmorphism, grid pattern 40px, Material Symbols, Plus Jakarta Sans).

El sitio debe sentirse VIVO: muchísimas animaciones sutiles pero perceptibles — elementos que respiran, flotan, brillan, reaccionan al scroll y al cursor. Premium, cinematográfico, ingeniería de software mexicana de alto nivel.

---

MARCA

Empresa: INIT
Sector: Desarrollo de software a medida, consultoría en digitalización, soluciones digitales
Ubicación: Ciudad López Mateos, Estado de México, México
Teléfono: +52 55 4761 7977
Email: support@init.com.mx
Web: init.com.mx
Equipo: 4 cofundadores + 1 consultora senior + 2 becarios (7 personas)
Fundada: 2024
Público: Pymes, instituciones, logística, servicios, sector institucional en México
Idioma: 100% español (México)

---

DESIGN SYSTEM — Consultancy Modern Dark

Fondo base: #111414 (surface/background)
Texto principal: #e1e3e2 (on-surface)
Texto secundario: #c0c9bb (on-surface-variant)
Primary UI: #8bd88e (surface-tint / primary)
Primary acción: #368040 (primary-container)
Acento brillante: #21a14a / #28a64e (secondary-container)
Superficies: surface-container-low #191c1c, surface-container #1d2020, surface-container-highest #323535
Bordes: rgba(255,255,255,0.1), outline #8a9387

Tipografía: Plus Jakarta Sans exclusivamente
- display-lg: 64px / 800 / -0.02em
- display-lg-mobile: 40px
- headline-xl: 48px / 700
- headline-lg: 32px
- headline-md: 24px / 600
- body-lg: 18px
- body-md: 16px
- label-md: 14px / 600 / uppercase / 0.05em letter-spacing

Layout: grid 12 columnas desktop, 4 mobile. container-max 1200px. Spacing base 8px. Secciones py 80–120px. Gutter 24px, márgenes desktop 80px.

Componentes:
- Navbar fija 80px: bg-surface/95 backdrop-blur-md border-b border-white/10. Links UPPERCASE label-md. Activo: border-b-2 border-primary. CTA Contacto: pill bg-primary-container.
- glass-card: rgba(69,69,77,0.4) blur 12px border white/10 rounded-3xl
- grid-pattern: líneas o dots cada 40px al 5% opacidad
- hero-gradient: radial-gradient verde 15% opacity → #111414
- text-gradient-green en highlights
- Chips tech: pills semi-transparentes grises
- Botón primario: bg-primary-container o primary, hover scale-105 + glow verde
- Botón ghost: border outline, hover bg-white/5

---

ANIMACIONES (OBLIGATORIO — el sitio debe respirar)

Implementa TODAS las categorías siguientes. Prioridad: suaves, 60fps, prefers-reduced-motion respetado.

GLOBAL / FONDO:
1. Grid pattern con parallax ligero al mover el mouse (translate 10–20px)
2. Orbes de luz verdes (#368040 / #8bd88e) con animación "breathe" (scale 0.95↔1.05 + opacity 0.3↔0.6, 4–6s ease-in-out infinite)
3. Blobs morphing en hero y CTA final (border-radius animado, 8–12s)
4. Gradiente del hero que rota o desplaza lentamente (background-position animation)
5. Partículas/nodos conectados flotando en el hero (líneas SVG que pulsan)
6. Barra de progreso de scroll fina (2px, verde) en top bajo el navbar
7. Fade-in de página al cargar (opacity 0→1, 400ms)

NAVBAR:
8. Al scroll >50px: navbar reduce altura a 64px + sombra más profunda (transition 300ms)
9. Links: underline verde que crece de izquierda a derecha en hover
10. Logo INIT: micro-bounce al hover (scale 1.05)
11. Botón Contacto: glow pulsante suave en el borde (box-shadow breathe)

HERO:
12. Logo en caja blanca: entrada scale 0→1 spring + hover rotate-3°
13. H1: stagger por palabra o línea (fade-up 30px, delay 80ms entre tokens)
14. Palabra "México": shimmer/glow verde animado (text-shadow o gradient slide)
15. Subtítulo: fade-up con delay 400ms
16. CTAs: entrada desde abajo + hover magnetic (cursor proximity) + ripple al click
17. Scroll indicator animado (chevron bounce infinito abajo del hero)

SCROLL REVEAL (todas las secciones):
18. Intersection Observer: fade-up + translateY(40px→0), duration 700ms, ease-out
19. Stagger en grids: hijos con delay 100ms incremental
20. Línea divisoria verde bajo H2: width 0→80px al entrar en viewport

MÉTRICAS:
21. Contador numérico animado (2 y 24/7) count-up al visible
22. Iconos en círculo: float vertical ±8px, 3s, desfase entre items
23. Glow ring alrededor del número que respira

TARJETAS (servicios, beneficios, equipo):
24. hover: scale 1.02 + translateY -8px + border verde + outer glow 20px primary/15%
25. Icono: rotate 5° + scale 1.1 en hover del card
26. Tilt 3D sutil siguiendo el mouse (perspective 1000px)
27. Borde gradiente animado rotando en cards premium (conic-gradient spin 4s)

CASOS DE ÉXITO / IMÁGENES:
28. Imagen: Ken Burns lento (scale 1→1.08 en 8s) + overlay gradient slide-up en hover
29. Título cliente: color shift a primary en hover
30. Cursor custom opcional: círculo verde semitransparente que sigue el mouse en sección portfolio

LOGOS CLIENTES (CONFE, JOFRA, etc.):
31. Marquee infinito horizontal lento (30s linear) o fade-in stagger
32. Grayscale→color + scale 1.05 en hover

SOBRE INIT / MISIÓN:
33. Círculos decorativos flotantes (float 6s, delays distintos)
34. Tarjeta misión: orbes internos con pulse + cita en itálica con fade lateral
35. Métricas 6 / 100%: pop-in con bounce

CTA FINAL:
36. Fondo: orbe gigante blur 120px con breathe
37. Botón principal: shadow-primary/20 pulsante + hover scale 105
38. Borde del contenedor: gradient border animado

FORMULARIO (contacto):
39. Inputs: focus ring verde con glow breathe
40. Labels: slide-up al focus
41. Botón enviar: loading spinner + success check animado
42. FAQ acordeón: height smooth + icono rotate 180° + contenido fade

FOOTER:
43. Links: underline offset animado en hover
44. Logo: opacity pulse muy sutil

PÁGINA SERVICIOS:
45. Timeline proceso: línea que se "dibuja" al scroll (stroke-dashoffset)
46. Pasos: números que scale-in secuencialmente
47. Layout imagen-texto alternado: imagen parallax vertical al scroll
48. Pills de tecnología: stagger pop-in + hover bounce

PÁGINA EQUIPO:
49. Fotos: zoom suave 1→1.05 en hover + overlay gradiente verde desde abajo
50. Foto grupal: reveal con clip-path circle expand
51. Tarjetas cofundadores: entrada en cascada desde abajo

PÁGINA SOLUCIONES:
52. Cards ERPinit/initlogistics: borde luminoso que recorre el perímetro (snake animation)
53. Features: checkmarks que dibujan el tick al visible

MICRO-INTERACCIONES:
54. Todos los botones: active scale 0.97
55. Material icons: FILL 0→1 en hover
56. Transiciones globales: cubic-bezier(0.4, 0, 0.2, 1)

Tecnología sugerida para implementar: CSS @keyframes, Framer Motion (React), GSAP ScrollTrigger, o CSS scroll-driven animations. Nunca bloquear LCP del hero.

---

NAVEGACIÓN

Inicio (/) | Equipo (/team) | Servicios (/services) | Soluciones (/soluciones) | Proyectos y Clientes (/portfolio) | Contacto (/contact)

Footer: logo, navegación, empresa, contacto real (support@init.com.mx, +52 55 4761 7977, Ciudad López Mateos, Estado de México), copyright 2024–2026.

---

PRIORIDAD: Homepage con TODAS las animaciones listadas, luego replicar sistema en las 5 páginas restantes manteniendo el mismo ADN visual y motion design.
```

---

## Sistema de diseño — Consultancy Modern Dark

Basado en `consultancy_modern_dark/DESIGN.md` y los `code.html` exportados.

### Paleta (Material Design 3 + INIT)

| Token | Hex | Uso |
|-------|-----|-----|
| `background` / `surface` | `#111414` | Fondo principal (INIT Black cinematográfico) |
| `on-surface` | `#e1e3e2` | Texto principal |
| `on-surface-variant` | `#c0c9bb` | Texto secundario, párrafos |
| `primary` / `surface-tint` | `#8bd88e` | Highlights, iconos, nav activo |
| `primary-container` | `#368040` | Botones, identidad INIT |
| `secondary` | `#67de7f` | Métricas, acentos secundarios |
| `secondary-container` | `#28a64e` | Equivalente a init-green-bright #21a14a |
| `surface-container-low` | `#191c1c` | Secciones alternas |
| `surface-container-lowest` | `#0c0f0f` | Footer, fondos profundos |
| `surface-container-highest` | `#323535` | Cards elevadas |
| `outline` | `#8a9387` | Bordes ghost buttons |

### Tipografía

| Token | Tamaño | Peso | Uso |
|-------|--------|------|-----|
| display-lg | 64px | 800 | Hero H1 desktop |
| display-lg-mobile | 40px | 800 | Hero H1 mobile |
| headline-xl | 48px | 700 | H2 secciones |
| headline-lg | 32px | 700 | H3 bloques |
| headline-md | 24px | 600 | Títulos tarjetas |
| body-lg | 18px | 400 | Lead paragraphs |
| body-md | 16px | 400 | Cuerpo |
| label-md | 14px | 600 UPPERCASE | Nav, etiquetas, sectores |

### Componentes Stitch

```css
/* Glass card */
.glass-card {
  background: rgba(69, 69, 77, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
}

/* Grid pattern */
.grid-pattern {
  background-image: radial-gradient(rgba(139, 216, 142, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Hero glow */
.hero-gradient {
  background: radial-gradient(circle at 50% 50%, rgba(54, 128, 64, 0.15) 0%, #111414 70%);
}

/* Text gradient */
.text-gradient-green {
  background: linear-gradient(135deg, #8bd88e 0%, #28a64e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Navbar (como en export)

- Fija `top-0`, `h-[80px]`, `z-50`
- `bg-surface/95 backdrop-blur-md border-b border-white/10`
- Links: `font-label-md uppercase tracking-wider`
- Página activa: `text-primary border-b-2 border-primary`
- CTA Contacto: pill `bg-primary-container text-on-primary-container rounded-full`

---

## Sistema de animaciones (obligatorio)

### Keyframes CSS de referencia

```css
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.08); opacity: 0.7; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(54, 128, 64, 0.2); }
  50% { box-shadow: 0 0 40px rgba(139, 216, 142, 0.4); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes draw-line {
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blob-morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Mapa animación → elemento

| # | Elemento | Animación | Duración | Trigger |
|---|----------|-----------|----------|---------|
| 1 | Orbes de fondo | breathe | 4–6s loop | siempre |
| 2 | Grid pattern | parallax mouse | — | mousemove |
| 3 | Hero H1 palabras | fade-up stagger | 80ms/palabra | load |
| 4 | "México" | shimmer verde | 3s loop | siempre |
| 5 | Logo hero | scale spring | 800ms | load |
| 6 | CTAs | fade-up + magnetic hover | — | load / hover |
| 7 | Scroll chevron | bounce | 2s loop | siempre |
| 8 | Secciones | fade-up | 700ms | scroll into view |
| 9 | Grid hijos | stagger 100ms | — | scroll into view |
| 10 | Línea bajo H2 | width expand | 500ms | scroll into view |
| 11 | Números métricas | count-up | 1.5s | scroll into view |
| 12 | Iconos métricas | float | 3s loop | siempre |
| 13 | glass-card | hover lift+glow | 300ms | hover |
| 14 | Iconos en card | rotate+scale | 300ms | card hover |
| 15 | Cards premium | tilt 3D | — | mousemove |
| 16 | Casos éxito img | Ken Burns | 8s | hover |
| 17 | Logos clientes | marquee | 30s loop | siempre |
| 18 | Círculos decorativos | float + breathe | 6s | siempre |
| 19 | CTA container | blob morph bg | 10s | siempre |
| 20 | Navbar | shrink height | 300ms | scroll >50px |
| 21 | Timeline servicios | draw line | — | scroll |
| 22 | FAQ items | accordion + rotate icon | 400ms | click |
| 23 | Form inputs | focus glow breathe | 2s loop | focus |
| 24 | Fotos equipo | zoom + overlay | 400ms | hover |
| 25 | Progress scroll | width 0→100% | — | scroll |

### Reglas de motion design

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` para UI; `ease-in-out` para loops orgánicos.
- **Duración:** micro 150–300ms, entradas 500–800ms, ambientales 4–12s.
- **Accesibilidad:** `@media (prefers-reduced-motion: reduce)` → desactivar parallax, marquee, breathe; mantener solo opacity fades.
- **Performance:** animar solo `transform` y `opacity`; evitar animar `width/height` en loop.
- **Jerarquía:** hero = más motion; footer = menos.

---

## Mapa del sitio

| Ruta | Página | Title SEO |
|------|--------|-----------|
| `/` | Home | INIT \| Desarrollo de Software a Medida y Consultoría Digital \| México |
| `/team` | Equipo | Nuestro Equipo de Desarrollo y Consultoría |
| `/services` | Servicios | Servicios de Desarrollo de Software y Consultoría Digital |
| `/soluciones` | Soluciones | ERPinit e initlogistics: Software Listo para Usar |
| `/portfolio` | Proyectos y Clientes | Proyectos y Clientes: Casos de Éxito |
| `/contact` | Contacto | Contacto \| Solicita tu Proyecto de Software |

---

## Página: Home (`/`)

> Estructura visual: `init_home/code.html` + contenido real abajo + animaciones completas.

### Meta

- **Description:** Desarrollo de software a medida y consultoría en digitalización para empresas en México. Aplicaciones web, sistemas empresariales y soluciones digitales que generan resultados.

### 1. Hero (min-h-screen, hero-gradient + grid-pattern)

- Logo INIT en caja blanca `rounded-2xl shadow-xl` (usar `Init-Logo.svg`)
- **H1:** `Desarrollo de Software a Medida para Empresas en` **`México`** ← verde #21a14a con shimmer
- **Subtítulo:** En INIT transformamos los procesos de tu empresa con aplicaciones web, sistemas empresariales y consultoría en digitalización. Basados en Estado de México, trabajamos con empresas de logística, servicios y sector institucional.
- **CTA 1:** `Solicitar una propuesta` → `/contact`
- **CTA 2 (ghost):** `Ver nuestros servicios` → `/services`
- **Decoración animada:** 3 orbes breathe, partículas/nodos SVG, scroll chevron bounce

### 2. Métricas (`bg-surface-container-low border-y border-white/5`)

| Número (count-up) | Label | Sublabel |
|-------------------|-------|----------|
| 2 | Años de Experiencia | entregando software a medida |
| 24/7 | Soporte Técnico | post-lanzamiento incluido |

### 3. Qué hacemos (grid 2 cols: texto + imagen con glow breathe)

- **H2:** Qué hacemos por las empresas
- **Párrafo:** Trabajamos con pymes, instituciones y empresas que necesitan soluciones digitales a medida: desde aplicaciones web y sistemas de gestión hasta consultoría en digitalización y APIs de alto rendimiento.
- **Bullets** (Material check_circle verde, stagger reveal):
  - Desarrollo de aplicaciones web y portales a medida
  - Sistemas empresariales (gestión, inventario, ventas, expedientes)
  - APIs e integraciones para conectar tus sistemas
  - Consultoría en digitalización y optimización de procesos
  - Proyectos en México y Estado de México
- **CTA:** `Ver todos nuestros servicios` → `/services`
- **Imagen derecha:** workspace tech / equipo (glow verde `blur-3xl` con breathe en hover)

### 4. Nuestros servicios (grid 3 glass-card)

**H2:** Nuestros servicios + línea verde animada centrada

#### Card 1 — Desarrollo de Software (icon: code)
- Desarrollamos software a medida: aplicaciones web, sistemas de gestión y APIs escalables. Desde portales corporativos hasta ERPs adaptados a tu operación.
- Bullets: Aplicaciones web y portales · Sistemas empresariales · APIs e integraciones

#### Card 2 — Consultoría en Digitalización (icon: insights)
- Te acompañamos en la transformación digital: análisis de procesos, roadmap y priorización. Más eficiencia, menos errores manuales.
- Bullets: Análisis de procesos · Roadmap digital · Optimización de flujos

#### Card 3 — Soluciones Digitales (icon: rocket_launch)
- Automatización, integración de sistemas, cloud y herramientas usables desde el día uno.
- Bullets: Integración de sistemas · Cloud y despliegue · Automatización

### 5. Sobre INIT (grid 2 cols)

**Izquierda:**
- **H2:** Sobre INIT
- Somos una empresa de desarrollo de software y consultoría en digitalización. Transformamos la forma en que las empresas trabajan, con soluciones prácticas y trato cercano.
- Equipo: 4 cofundadores, consultora senior y dos becarios.
- **CTA:** `Conocer a nuestro equipo` → `/team`

**Derecha — glass-card Misión:**
- **H3:** Nuestra Misión
- Transformar empresas a través de la innovación tecnológica, proporcionando soluciones digitales que impulsen el crecimiento y la competitividad.
- **7** Miembros del Equipo | **100%** Compromiso
- Orbes flotantes + pulse en esquinas

### 6. Casos de éxito (grid 3, imagen + hover Ken Burns)

**H2:** Casos de éxito

| Cliente | Sector | Título card | Resultado |
|---------|--------|-------------|-----------|
| TRANSCOM | Logística / Transporte | Control de operaciones y trazabilidad | Operaciones ordenadas, seguimiento en tiempo real |
| Geller Abogados | Despacho jurídico | Gestión documental y expedientes | Mejor organización, menos tareas repetitivas |
| JOFRA | Empresa | Optimización y digitalización | Operaciones eficientes, soporte continuo |

**CTA:** `Ver todos los proyectos y clientes` → `/portfolio`

### 7. Logos clientes (marquee o strip)

CONFE · JOFRA · TRANSCOM · Geller Abogados — grayscale → color en hover, marquee lento

### 8. ¿Por qué elegirnos? (grid 3×2, glass-card hover)

**H2:** ¿Por qué elegirnos?  
**Sub:** Beneficios que importan: plazos claros, código mantenible y soporte en español

| Icono | Título | Texto |
|-------|--------|-------|
| event_available | Plazos Definidos | Plazos y alcance definidos desde el inicio |
| settings_suggest | Código Mantenible | Código y arquitectura mantenibles a largo plazo |
| support_agent | Soporte en Español | Soporte técnico y comunicación en español |
| security | Seguridad Primero | Enfoque en seguridad y buenas prácticas |
| trending_up | Escalabilidad | Escalabilidad cuando tu negocio crezca |
| groups | Equipo Cercano | Equipo estable y trato cercano |

### 9. CTA final (rounded-[3rem], orbe breathe, borde gradient animado)

- **H2:** ¿Listo para transformar tu empresa?
- Cuéntanos tu proyecto o agenda una llamada. Te proponemos una solución a medida sin compromiso.
- **CTA 1:** `Agenda una llamada` → `/contact`
- **CTA 2:** `Cuéntanos tu proyecto` → `/contact`

---

## Página: Equipo (`/team`)

> Baseline: `init_equipo/code.html`

### Header

- **H1:** Nuestro Equipo
- Conoce a los profesionales que hacen posible la transformación digital. 7 personas: 4 cofundadores, consultora senior y dos becarios.

### Foto grupal

- `public/empleados-fotos/init-team.jpg` — reveal clip-path + caption "Los 4 cofundadores de INIT"

### Cofundadores (grid 4, glass-card, foto hover zoom)

| Nombre | Cargo | Bio corta | Email |
|--------|-------|-----------|-------|
| Enrique Jimenez Guevara | Cofundador | Liderazgo estratégico, ventas B2B/B2C, transformación digital | enrique.jimenez@init.com.mx |
| Iñaki Guerrero Negrete | Cofundador | Arquitecto de soluciones, cloud, arquitecturas escalables | inaki.guerrero@init.com.mx |
| Javier Corona del Rio | Cofundador | Desarrollo de negocio, relaciones con clientes, web avanzada | javier.corona@init.com.mx |
| Luken Eguiluz del Angel | Cofundador | Operaciones, calidad, RFID y logística | luken.eguiluz@init.com.mx |

### Consultoría (centrada)

- **Carolina Martinez** — Consultora Senior — Procesos de calidad, levantamiento de necesidades, seguimiento

### Talento joven

- **Xoan Pablo Rodriguez** — Becario en Desarrollo — Documentación, QA, levantamiento de necesidades
- **Diego Luna** — Becario en Desarrollo — Documentación, QA, levantamiento de necesidades

### ¿Por qué trabajar con nosotros?

- Tiempo de respuesta ágil
- Equipo de 7 personas, trato cercano
- Metodología: análisis, alcance definido, entregas iterativas

### Valores (fondo oscuro gradient, fade-up stagger)

Innovación · Excelencia · Colaboración

---

## Página: Servicios (`/services`)

> Baseline: `init_servicios/code.html`

### Header

- **H1:** Nuestros Servicios
- En INIT diseñamos soluciones que ayudan a empresas a **automatizar procesos, escalar operaciones y tomar decisiones basadas en datos**.

### 3 bloques alternados imagen ↔ texto (parallax en imágenes)

**1. Desarrollo de Software a Medida** — img: `servicios/desarrollo-software-a-medida.png`
- Para empresas que han crecido más allá de Excel y procesos manuales.
- Features: Apps web empresariales · Portales · Sistemas gestión · APIs · Apps móviles · SaaS
- Resultado: Procesos automatizados, menos errores, mayor control.

**2. Consultoría en Transformación Digital** — img: `servicios/consultoria-transformacion-digital.png`
- Diagnóstico, roadmap, priorización con impacto real.
- Features: Diagnóstico procesos · Cuellos de botella · Arquitectura · Roadmap · Priorización
- Resultado: Estrategia tecnológica alineada al negocio.

**3. Soluciones Tecnológicas e Integración** — img: `servicios/soluciones-tecnologicas-integracion.png`
- Automatización, integración, cloud, BI, datos en tiempo real.
- Features: Automatización · Integración sistemas · Cloud · Dashboards BI · IA
- Resultado: Eficiencia operativa, decisiones con datos confiables.

### Tecnologías (pills con pop-in stagger)

Frontend: React, Vue.js · Backend: Node.js, Python, Django · DB: PostgreSQL, MongoDB · Infra: AWS, Docker, K8s · IA/BI: TensorFlow, Power BI, Tableau

### Proceso (timeline animado — línea draw-on-scroll)

| # | Título | Tiempo |
|---|--------|--------|
| 1 | Análisis y Planificación | 1–2 semanas |
| 2 | Diseño y Prototipado | 1–3 semanas |
| 3 | Desarrollo e Implementación | 4–12 semanas |
| 4 | Pruebas y Despliegue | 1–2 semanas |
| 5 | Soporte y Mejora Continua | Continuo |

---

## Página: Soluciones (`/soluciones`)

> Baseline: `init_soluciones/code.html`

### Header

- **H1:** Soluciones listas
- Productos terminados que puedes usar desde el primer día sin desarrollo a medida.

### ERPinit (card grande, borde snake animation)

- **Tagline:** Sistema de planificación de recursos empresariales
- Finanzas, inventario, ventas, compras y reportes en una plataforma.
- Features: Gestión financiera · Inventario · Ventas/compras · Reportes · Multiempresa · Soporte incluido
- Para: Pymes ERP integrado · Multi-almacén · Dejar Excel
- **CTA:** Solicitar demo → `/contact`

### initlogistics (card grande)

- **Tagline:** Gestión logística y trazabilidad RFID
- Envíos, rutas, almacenes, seguimiento en tiempo real.
- Features: Trazabilidad RFID · Envíos/rutas · Almacenes · Lectores RFID · Facturación · Panel reportes
- Para: Logística/transporte · Trazabilidad activos · Almacenes RFID
- **CTA:** Solicitar demo → `/contact`

---

## Página: Proyectos y Clientes (`/portfolio`)

> Baseline: `init_proyectos_y_clientes/code.html`

### Header

- **H1:** Proyectos y Clientes
- Empresas e instituciones con las que hemos trabajado. Desglose de cada proyecto.

### Cards expandibles (glass-card hover glow)

**CONFE** — Sector social/institucional
- Entregables: Análisis · Procesos · Apps a medida · Consultoría · Seguimiento
- Stack: React, Node.js, SQL
- Resultado: Procesos y atención mejorados

**JOFRA** — Empresa servicios
- Entregables: Software empresarial · Automatización · Integración · Consultoría · Formación
- Stack: Python, Django, APIs
- Resultado: Operaciones eficientes, soporte continuo

**TRANSCOM** — Logística, Edo. Méx.
- Entregables: Gestión · Trazabilidad · Apps web · APIs · Calidad
- Stack: React, Node.js, REST, DB
- Resultado: Seguimiento en tiempo real

**GELLER ABOGADOS** — Despacho jurídico
- Entregables: Gestión documental · Automatización legal · Productividad · Casos
- Stack: Web apps, documental, workflows
- Resultado: Menos tareas repetitivas

**CTA:** `¿Tienes un proyecto similar? Contáctanos` → `/contact`

---

## Página: Contacto (`/contact`)

> Baseline: `init_contacto/code.html`

### Header

- **H1:** Contáctanos
- ¿Tienes un proyecto en mente? Conversemos sobre cómo transformar tu visión en solución digital.

### Info contacto (iconos en círculo verde, stagger)

| Campo | Valor |
|-------|-------|
| Email | support@init.com.mx |
| Teléfono | 55 4761 7977 |
| Oficina | Ciudad López Mateos, Estado de México, México |
| Horario | Lun–vie 7:00–22:00 (hora México central) |

### Formulario (glass-card, inputs con focus glow breathe)

| Campo | Tipo | Opciones |
|-------|------|----------|
| Nombre Completo * | text | — |
| Email * | email | — |
| Tipo de proyecto | select | Aplicación web, Sistema empresarial, Consultoría, ERPinit, initlogistics, Otro |
| Presupuesto | select | < $50k MXN, $50k–$150k MXN, > $150k MXN, Prefiero no indicar |
| Asunto * | text | — |
| Mensaje * | textarea | — |
| Enviar | button | `Enviar Mensaje` + loading/success animation |

### FAQ (acordeón animado)

1. ¿Cuánto tiempo toma una aplicación web? — 4–8 semanas básica, 3–6 meses compleja
2. ¿Mantenimiento post-lanzamiento? — Sí, soporte continuo
3. ¿Cualquier tamaño de empresa? — Startups, pymes, corporaciones
4. ¿Tecnologías? — React, Node.js, Python, Django, AWS, Azure
5. ¿Fuera de CDMX/Edo. Méx.? — Sí, remoto en México y LATAM
6. ¿RFID y logística? — Sí, vía initlogistics

---

## Assets disponibles

| Asset | Ruta |
|-------|------|
| Logo | `public/Init-Logo.svg` |
| Foto grupal | `public/empleados-fotos/init-team.jpg` |
| Fotos equipo | `public/empleados-fotos/*.jpg` |
| Imágenes servicios | `public/servicios/*.png` |
| Exports Stitch | `stitch_init_software_website_design/**` |

---

## Prompts de seguimiento para Stitch

### Home con animaciones máximas

```
Toma init_home/screen.png y code.html como base. Reemplaza TODO el copy con el contenido real de INIT (support@init.com.mx, López Mateos, bullets correctos de "Qué hacemos"). Añade las 56 animaciones del brief: orbes breathe, parallax grid, stagger H1, shimmer en "México", count-up métricas, glass-card tilt, Ken Burns casos, marquee logos, CTA con blob morph. El sitio debe sentirse vivo y premium dark.
```

### Equipo

```
Diseña /team como init_equipo/screen.png. Fotos reales del equipo, glass-cards con hover zoom, reveal foto grupal, cascada en cofundadores, valores en fondo oscuro con stagger. Mismas animaciones breathe en orbes de fondo.
```

### Servicios

```
Diseña /services como init_servicios/screen.png. Layout imagen-texto alternado con parallax, timeline de 5 pasos con línea draw-on-scroll, pills de tecnología con pop-in. Contenido real de los 3 servicios INIT.
```

### Soluciones

```
Diseña /soluciones como init_soluciones/screen.png. 2 cards ERPinit e initlogistics con borde luminoso animado, checks stagger, CTAs demo. Dark glass style.
```

### Portfolio

```
Diseña /portfolio como init_proyectos_y_clientes/screen.png. 4 clientes expandibles CONFE JOFRA TRANSCOM GELLER con stack, entregables, resultado. Hover glow + cursor follower verde opcional.
```

### Contacto

```
Diseña /contact como init_contacto/screen.png. Formulario glass con focus glow breathe, FAQ acordeón animado, datos reales support@init.com.mx y López Mateos. Success state animado al enviar.
```

### Refinamiento motion

```
Aumenta la intensidad de animaciones "respiración": todos los orbes y glows deben tener breathe 4-6s. Añade parallax al grid en cada página. Navbar shrink on scroll. Respetar prefers-reduced-motion.
```

---

## Checklist de entregables

- [ ] 6 páginas en estilo Consultancy Modern Dark (como exports Stitch)
- [ ] Copy y contacto REAL de INIT (no hola@init.software)
- [ ] Glassmorphism + grid 40px en todas las páginas
- [ ] Orbes/blobs con animación breathe
- [ ] Scroll reveal stagger en todas las secciones
- [ ] Hero con shimmer, parallax, partículas
- [ ] Métricas con count-up
- [ ] Cards con hover lift + glow + tilt
- [ ] Casos éxito con Ken Burns
- [ ] Marquee o animación en logos clientes
- [ ] Timeline draw-on-scroll en servicios
- [ ] FAQ acordeón animado en contacto
- [ ] Navbar shrink + underline hover
- [ ] prefers-reduced-motion implementado
- [ ] Responsive 375 / 768 / 1280px

---

*Basado en `stitch_init_software_website_design/` + contenido de producción `initpagina` — junio 2026.*
