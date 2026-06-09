---
name: Consultancy Modern Dark
colors:
  surface: '#111414'
  surface-dim: '#111414'
  surface-bright: '#373a39'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#191c1c'
  surface-container: '#1d2020'
  surface-container-high: '#272b2a'
  surface-container-highest: '#323535'
  on-surface: '#e1e3e2'
  on-surface-variant: '#c0c9bb'
  inverse-surface: '#e1e3e2'
  inverse-on-surface: '#2e3131'
  outline: '#8a9387'
  outline-variant: '#40493e'
  surface-tint: '#8bd88e'
  primary: '#8bd88e'
  on-primary: '#003910'
  primary-container: '#368040'
  on-primary-container: '#e3ffde'
  inverse-primary: '#206c2f'
  secondary: '#67de7f'
  on-secondary: '#003914'
  secondary-container: '#28a64e'
  on-secondary-container: '#003210'
  tertiary: '#c7c5cf'
  on-tertiary: '#2f3037'
  tertiary-container: '#717079'
  on-tertiary-container: '#f8f5ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a6f5a8'
  primary-fixed-dim: '#8bd88e'
  on-primary-fixed: '#002106'
  on-primary-fixed-variant: '#00531b'
  secondary-fixed: '#84fb98'
  secondary-fixed-dim: '#67de7f'
  on-secondary-fixed: '#002108'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#e3e1eb'
  tertiary-fixed-dim: '#c7c5cf'
  on-tertiary-fixed: '#1b1b22'
  on-tertiary-fixed-variant: '#46464e'
  background: '#111414'
  on-background: '#e1e3e2'
  surface-variant: '#323535'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is engineered for a high-end Mexican software consultancy, emphasizing technical precision, architectural stability, and forward-thinking innovation. The brand personality is authoritative yet approachable, positioning the agency as a premium partner for digital transformation.

The visual style follows a **Modern Corporate** aesthetic with heavy **Glassmorphism** and **Minimalist** influences. It utilizes deep ebony backgrounds contrasted with vibrant green accents to create a high-contrast, energetic atmosphere. The interface should feel "engineered"—clean lines, intentional whitespace, and subtle geometric patterns that evoke the structural nature of code and digital architecture.

## Colors
The palette is rooted in a deep "INIT Black" to provide a premium, cinematic foundation. 
- **Primary Green (#368040):** Used for brand identity and primary actions. It represents stability and growth.
- **Accent Bright Green (#21a14a):** Reserved for interactive highlights, success states, and drawing attention to key metrics.
- **Grays:** "Dark Gray" (#45454d) acts as a secondary surface color for cards and section dividers, while "Light Gray" (#d6d8d7) is primarily used for secondary text and borders.
- **Gradients:** Hero sections and primary CTAs should utilize a linear gradient from `#000000` to `#45454d` at a 135-degree angle to create subtle depth.

## Typography
The system uses **Plus Jakarta Sans** exclusively to maintain a cohesive, modern, and slightly geometric feel. 

- **Headlines:** Use Bold (700) or ExtraBold (800) for headlines. Tighten letter spacing on larger display sizes to create a "locked-in" professional look.
- **Body Text:** Standard body text uses Regular (400) for high readability against dark backgrounds.
- **Labels:** Small labels and overlines should use SemiBold (600) with increased letter spacing and uppercase styling to denote hierarchy without bulk.
- **Accessibility:** Ensure a minimum contrast ratio of 4.5:1 for all body text against dark backgrounds.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Margins:** 24px for mobile/tablet and 80px+ for desktop to create a luxurious sense of space.
- **Rhythm:** Spacing follows an 8px base unit. Vertical section spacing should be generous (80px to 120px) to separate distinct consultancy services or case studies.
- **Grid Pattern:** A subtle background grid (1px lines, 40px intervals, 5% opacity) should be used in large sections to reinforce the "software development" and "engineering" narrative.

## Elevation & Depth
Depth is conveyed through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Navigation:** The navbar uses a "Glass" effect: `backdrop-blur: 20px` with a 5% white semi-transparent background and a 1px border of `rgba(255,255,255,0.1)`.
- **Cards:** Use "Dark Gray" (#45454d) for card surfaces. Add a very subtle outer glow in the primary green (2-5% opacity) for hovered states to indicate interactivity.
- **Dividers:** Use 1px solid lines in `rgba(214, 216, 215, 0.1)` to separate content without creating visual noise.

## Shapes
The shape language is sophisticated and friendly, balancing the tech-heavy aesthetic with approachable curves. 

- **Standard Elements:** Buttons and small input fields use a radius of **16px**.
- **Large Elements:** Content cards, hero containers, and modals use a radius of **24px**.
- **Interactive States:** Maintain consistent radii across states (hover, focus) to ensure the UI feels stable.

## Components
- **Buttons:** Primary buttons feature the INIT Green (#368040) background with white text. Secondary buttons use a "Ghost" style with a 1px border of Light Gray. Large CTAs in the hero section can use the Black-to-Gray gradient with a Bright Green glow on hover.
- **Cards:** Cards should have a 1px border (`rgba(255,255,255,0.1)`) to define their edges against the black background. 
- **Inputs:** Dark backgrounds with a subtle Light Gray border. On focus, the border transitions to Bright Green with a soft outer glow.
- **Chips/Tags:** Use for technical stacks (e.g., "React", "Python"). These should be small, semi-transparent gray pills with white text.
- **Navigation:** Fixed at the top, utilizing the glassmorphism effect. Menu items should have a "strikethrough" or "underline" animation in Bright Green on hover.
- **Case Study Preview:** Large-scale components featuring high-resolution imagery with a 24px corner radius and overlaid glassmorphic text blocks.