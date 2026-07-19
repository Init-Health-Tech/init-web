# INIT - Neural Fluidity (AI-First)

## Product Overview

**The Pitch:** A vanguard digital presence for INIT technology consulting. Translates complex technical pillars—AI, Cybersecurity, RFID—into an intuitive, fluid visual experience that emphasizes agility, innovation, and humanized technology.

**For:** Enterprise decision-makers and CTOs seeking cutting-edge digital transformation partners. They care about proven expertise, rapid adaptation, and future-proof solutions.

**Device:** desktop

**Design Direction:** Neural Fluidity. Deep abyssal backgrounds cut by vibrant, shifting gradients (emerald to deep forest green with subtle gold) behind glassmorphic surfaces. Geometric typography grounds the ethereal, organic aesthetic.

**Inspired by:** Vercel (for technical precision), Stripe (for fluid gradient micro-interactions)

---

## Screens

- **Home:** High-impact value proposition with fluid background and primary pillar entry points
- **Services Deep-Dive:** Detailed architectural breakdown of Strategy, AI, Dev, Cyber, and RFID offerings
- **Case Studies (Evidencia):** Metric-driven success stories presented in glowing, interactive cards
- **Contact (Iniciar Conversación):** Frictionless, conversational inquiry flow with real-time validation

---

## Key Flows

**Explore Services to Contact:** User discovers capabilities and initiates engagement.

1. User is on **Home** -> sees fluid hero and top-level pillars
2. User clicks **"Explorar Soluciones AI"** -> navigates smoothly to Services AI section
3. User reviews capabilities -> clicks persistent **"Iniciar conversación"** floating action button
4. User fills conversational form -> receives immediate glowing confirmation state

---

<details>
<summary>Design System</summary>

## Color Palette

- **Primary:** `#2E6A3A` - Brand Green (Buttons, active links, primary CTAs)
- **Background:** `#090A0F` - Abyssal Black (Page background)
- **Surface:** `#12141D` - Deep Obsidian (Cards, modals, dropdowns)
- **Text:** `#F3F4F6` - Off-White (Body text, primary headers)
- **Muted:** `#8B949E` - Slate Grey (Secondary text, inactive states, subtle borders)
- **Accent:** `#D4AF37` - Subtle Gold (Hover states, gradient meshes, success indicators)

## Typography

- **Headings:** `Space Grotesk`, 700, 32-64px
- **Body:** `Satoshi`, 400, 16px
- **Small text:** `Satoshi`, 400, 14px
- **Buttons:** `Space Grotesk`, 500, 14px, uppercase tracking 1px

**Style notes:** Heavy use of `backdrop-filter: blur(12px)` for glassmorphic cards over moving gradient meshes. Borders are 1px solid `rgba(255,255,255,0.05)`. Hover states trigger a glow effect using CSS `box-shadow` matching the primary or accent colors.

## Design Tokens

```css
:root {
  --color-primary: #2E6A3A;
  --color-background: #090A0F;
  --color-surface: #12141D;
  --color-text: #F3F4F6;
  --color-muted: #8B949E;
  --color-accent: #D4AF37;
  
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Satoshi', sans-serif;
  
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  
  --shadow-glow: 0 0 20px rgba(46, 106, 58, 0.4);
  --shadow-glow-accent: 0 0 20px rgba(212, 175, 55, 0.3);
  
  --glass-bg: rgba(18, 20, 29, 0.6);
  --glass-border: rgba(255, 255, 255, 0.05);
}
```

</details>

---

<details>
<summary>Screen Specifications</summary>

### Home

**Purpose:** Establish authority, convey the "Neural Fluidity" aesthetic, and route users to specific pillars.

**Layout:** Full viewport hero with background mesh gradient. 5-column grid below for the pillars.

**Key Elements:**
- **Hero Title:** `64px`, `Space Grotesk`, "Transformación Digital con Inteligencia Fluida."
- **Primary CTA:** 48px height, Pill radius, `#2E6A3A` background, white text, "Iniciar conversación"
- **Pillar Grid:** 5 horizontal glassmorphic cards (Strategy, AI, Custom Dev, Cyber, RFID) overlapping the hero gradient section.

**States:**
- **Loading:** Mesh gradient starts dark, fades up to full vibrancy over 1.5s
- **Error:** N/A (Static marketing page)

**Components:**
- **Pillar Card:** `280px x 320px`, `--glass-bg`, 1px solid `--glass-border`, features a minimalist line-art SVG icon.

**Interactions:**
- **Hover Pillar Card:** `transform: translateY(-8px)`, border color transitions to `--color-primary`, reveals `--shadow-glow`.
- **Click CTA:** Smooth scroll to Contact section or routes to Contact page.

**Responsive:**
- **Desktop:** 5-column grid for pillars
- **Tablet:** 3-column wrap
- **Mobile:** Single column stack, hero text drops to `40px`

### Services Deep-Dive

**Purpose:** Detail the 5 technological pillars with architectural precision.

**Layout:** Vertical scrolling list. Alternating left/right alignment. Sticky left-sidebar navigation on desktop.

**Key Elements:**
- **Sticky Sidebar:** 240px width, list of 5 pillars. Active state highlighted in `#2E6A3A`.
- **Service Blocks:** Large `H2` (`48px`), paragraph description (`18px`, `Satoshi`), bulleted capabilities.
- **Visual Node Diagram:** Next to each text block, an abstract animated SVG network representing the service (e.g., locking nodes for Cyber, expanding neural nets for AI).

**States:**
- **Empty:** N/A

**Components:**
- **Nav Link:** `16px`, `--color-muted`, transitions to `--color-primary` on active intersection.

**Interactions:**
- **Scroll:** Scrollspy updates sticky sidebar active state. Visual Node Diagrams trigger subtle drawing animation on intersecting viewport.
- **Hover Nav Link:** Text color brightens to `#FFF`, left border expands from 0 to 4px width in `#2E6A3A`.

**Responsive:**
- **Desktop:** Sticky sidebar + content area
- **Tablet:** Top sticky horizontal scrolling nav
- **Mobile:** Top sticky horizontal scrolling nav, text reduced to `16px`

### Case Studies (Evidencia)

**Purpose:** Prove competency through real-world metrics and stories.

**Layout:** Masonry grid of metric-first cards.

**Key Elements:**
- **Header:** `48px`, center aligned, "Resultados Tangibles."
- **Metric Highlights:** Massive typography (`56px`, `#2E6A3A`) denoting the main win (e.g., "300%", "50ms", "0 Breaches").
- **Case Title:** `20px`, `Space Grotesk`, client name or industry.

**States:**
- **Hover:** Card background shifts opacity, revealing a subtle brand pattern watermark.

**Components:**
- **Case Card:** Masonry sizing (auto-height), `--color-surface` background, `--radius-lg`.

**Interactions:**
- **Hover Case Card:** `scale(1.02)`, soft `--shadow-glow-accent`.

**Responsive:**
- **Desktop:** 3-column masonry
- **Tablet:** 2-column masonry
- **Mobile:** 1-column list

### Contact (Iniciar Conversación)

**Purpose:** Capture high-quality enterprise leads with zero friction.

**Layout:** Split screen. Left: Floating brand messaging. Right: Conversational form inside a glass panel.

**Key Elements:**
- **Form Inputs:** Borderless bottom-line inputs (`#8B949E`), big text (`24px`, `Satoshi`). No traditional boxes.
- **Progress Bar:** 2px high line at the top of the form panel, fills in `#D4AF37` as fields are completed.
- **Submit Button:** `100%` width, `#2E6A3A` background, white text.

**States:**
- **Active Input:** Bottom line turns `#2E6A3A`, label floats up `12px`.
- **Loading:** Submit button text replaced with a pulsing 3-dot animation.
- **Success:** Form fades out, replaced by an emerald green checkmark and "Señal recibida. Hablamos pronto."

**Components:**
- **Input Field:** `64px` height, bottom border 1px solid, transparent background.

**Interactions:**
- **Focus Input:** Bottom border glows `box-shadow: 0 2px 10px rgba(46,106,58,0.4)`.

**Responsive:**
- **Desktop:** 50/50 split screen.
- **Tablet:** Stacked, form on bottom.
- **Mobile:** Full screen form, fluid typography scaling.

</details>

---

<details>
<summary>Build Guide</summary>

**Stack:** HTML + Tailwind CSS v3 + Framer Motion (for fluid gradients and SVG animations)

**Build Order:**
1. **Design System & Shell (Tailwind config):** Establish base colors, Space Grotesk/Satoshi fonts, and glassmorphic utilities (`bg-opacity-60 backdrop-blur-xl`).
2. **Home Screen:** Builds the complex fluid background mesh and sets the primary layout pacing.
3. **Contact Screen:** Perfects the micro-interactions on the form inputs (essential for the AI-first, high-tech feel).
4. **Services Screen:** Implements the scroll-spy logic and layout architecture.
5. **Case Studies:** Finalizes masonry grid and metric typography scale.

</details>