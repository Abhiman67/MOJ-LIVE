# MyOnlineJet — Design System

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + PostCSS + Autoprefixer |
| Icons | Font Awesome 6.4 (CDN) |
| Fonts | Inter (body), Space Grotesk (headings) — Google Fonts |

---

## Brand Identity

### Primary Color

| Token | Hex | Usage |
|---|---|---|
| `primary.red` / `brand.red` / `brandRed` | `#C50000` | Primary actions, links, accents, icons |
| `primary.red-light` / `brand.red-light` | `#FF5252` | Hover states, gradient partners |
| `primary.red-dark` / `brand.red-dark` | `#A00000` | Deep accents |

### Supporting Colors

| Token | Hex | Usage |
|---|---|---|
| `brand.navy` | `#0F1C3F` | Luxury/government accents |
| `success.green` | `#00C853` | Success states |

### Surface Colors

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#0A0A0A` | Page background |
| `elevated` | `#111111` | Section backgrounds |
| `card` | `#141414` | Card backgrounds |
| `hover` | `#1A1A1A` | Hover state backgrounds |

### Text Colors

| Token | Hex | Usage |
|---|---|---|
| `textPrimary` | `#FAFAFA` | Primary body text |
| `textSecondary` | `#A1A1AA` | Secondary/subtle text |
| `textMuted` | `#52525B` | Placeholder, muted text |

### Border Colors

| Token | Hex | Usage |
|---|---|---|
| `borderSubtle` | `#1F1F1F` | Card borders |
| `borderMedium` | `#2A2A2A` | Input borders |

### CSS Custom Properties

```css
:root {
  --primary-red: #c50000;
  --primary-red-light: #ff5252;
  --primary-red-dark: #a00000;
  --luxury-white: #ffffff;
  --luxury-gray-light: #f8f9fa;
  --luxury-gray: #e9ecef;
  --luxury-gray-dark: #6c757d;
  --luxury-navy: #0f1c3f;
  --glass-white: rgba(255, 255, 255, 0.95);
  --glass-border: rgba(255, 255, 255, 0.2);
  --success-green: #00c853;
  --info-blue: #2962ff;
}
```

---

## Typography

### Font Families

| Family | Role | Weights Loaded |
|---|---|---|
| **Inter** | Body, nav, buttons, forms | 300–900 |
| **Space Grotesk** | Headings, display, hero titles | 400–700 |

### Type Scale (Headings)

| Class | Font | Size | Weight | Tracking | Line Height |
|---|---|---|---|---|---|
| `.heading-xl` | Inter | `clamp(2.75rem, 7vw, 5.5rem)` | 800 | -0.03em | 1.05 |
| `.content-hero-title` | Space Grotesk | `clamp(2.75rem, 6vw, 5.5rem)` | 700 | -0.04em | 0.95 |
| `.hero-title` | Space Grotesk | `clamp(2.5rem, 5vw, 4.5rem)` | 700 | -0.03em | 1.1 |
| `.section-title` | Inter | `clamp(1.6rem, 3vw, 2.2rem)` | 700 | -0.01em | — |
| `.card-title` | Space Grotesk | 1.25rem | 700 | -0.01em | 1.3 |
| `.font-display` | Space Grotesk | — | 700 | -0.03em | 0.95 |

### Type Scale (UI)

| Class | Size | Weight | Tracking |
|---|---|---|---|
| `.section-kicker` | 0.75rem | 700 | 0.18em |
| `.nav-link` | 0.875rem | 500 | — |
| `.footer-heading` | 1rem | 700 | 0.08em |
| `.footer-link` | 0.875rem | 400 | — |
| `.luxury-badge` | 0.75rem | 600 | 0.18em |
| `.stat-number` | 3.5rem | 800 | — |

### Text Gradients

| Class | Gradient |
|---|---|
| `.text-gradient` / `.content-hero-title` | `#ffffff → #ff3333 → #ff6b35` |
| `.text-gradient-red` | `#ff9999 → #c50000 → #800000` |
| `.section-title` | `#fafafa → #a1a1aa` |
| `.gradient-text` | `#fafafa → #c50000` |
| `.stat-number` | `var(--primary-red) → var(--primary-red-light)` |

---

## Layout

### Page Shells

| Class | Width | Padding | Background |
|---|---|---|---|
| `.page-shell` | `min(100%, 80rem)` centered | 7rem 1.5rem 4rem | Inherited |
| `.dark-page-shell` | Full viewport | 7rem 1.5rem 4rem | `#030712` |

### Content Max Width

| Token | Value |
|---|---|
| `max-w-7xl` | 80rem (default) |
| `max-w-8xl` | 90rem (custom) |

### Header

- Glass navbar: `rgba(10,10,10,0.8)` + `backdrop-filter: blur(20px)`
- Bottom border: `1px solid #1f1f1f`
- `.is-scrolled` state: `rgba(10,10,10,0.88)`
- Mobile: Full-screen overlay, hamburger → X animation

### Footer

- Top border: `4px solid var(--primary-red)`
- Background: `#0A0A0A`
- Content: Logo + description + social icons + 4 link groups + legal + copyright
- Social icons: `hover:bg-[#C50000]` with scale

---

## Components

### Buttons

| Variant | Class | Style |
|---|---|---|
| Primary | `.primary-btn` / `.btn-primary` | `bg-[#C50000]` text-white, 14px 36px padding, 8px radius, hover lift + red glow + shine sweep |
| Secondary | `.secondary-btn` / `.btn-secondary` | Transparent, `#FAFAFA` text, `#2A2A2A` border, hover → red border/text |
| Magnetic | `.magnetic-btn` | Pill (9999px), `#C50000 → #FF6B35` gradient, glow shadow |
| Magnetic (ghost) | `.magnetic-btn-secondary` | Transparent, white border |

### Cards

| Class | Background | Border | Radius | Hover |
|---|---|---|---|---|
| `.glass-card` / `.modern-card` | `rgba(20,20,20,0.6)` | `#1F1F1F` | 16px | +4px lift, red border/glow |
| `.glass` | `rgba(17,24,39,0.6)` | `rgba(255,255,255,0.08)` | 16px | +4px lift |
| `.glass-strong` | `rgba(3,7,18,0.8)` | `rgba(255,255,255,0.08)` | — | — |
| `.bento-item` | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.08)` | 1.5rem | +4px lift |
| `.spotlight-card` | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.08)` | 1.5rem | +4px lift, mouse-track red glow |

### Badges

| Class | Style |
|---|---|
| `.luxury-badge` | Pill, dark glass bg, red dot indicator, uppercase 0.75rem |
| `.badge` | Red glass pill, uppercase 12px |
| `.badge-pill` | Same as badge, 100px radius |

### Forms

| Class | Style |
|---|---|
| `.form-input` / `.form-select` / `.form-textarea` | Dark `#111111` bg, `#2A2A2A` border, 12px radius, focus → red border + red ring |
| `.modern-input` | Glass bg, blur border, focus → red border |

---

## Page-Level Backgrounds

### Aurora Background (`.aurora-bg`)
Fixed full-screen animated background with two large blurred radial gradients:
- **Top-left:** `rgba(197,0,0,0.3)` — brand red orb
- **Bottom-right:** `rgba(59,130,246,0.15)` — blue orb
- Animates via `aurora-move` keyframe (20s/25s ease-in-out infinite)

### Grid Overlay (`.grid-background` / `.grid-bg`)
Fixed full-screen subtle red grid:
- `linear-gradient(rgba(197,0,0,0.02) 1px, transparent 1px)`
- Grid size: 50px × 50px

### Noise Overlay (`.noise-overlay`)
Fixed full-screen SVG noise texture at `opacity: 0.03`

### Glow Orbs
Each page defines custom fixed-position radial gradients using scoped `<style>` blocks:
- `radial-gradient(circle, rgba(197,0,0,0.05–0.08), transparent 70%)`
- `filter: blur(120px)`
- 2–3 orbs per page at different corners

---

## Animations

| Name | Duration | Easing | Purpose |
|---|---|---|---|
| `float` | 6–8s | ease-in-out infinite | Floating elements |
| `aurora-move` | 20–25s | ease-in-out infinite | Aurora orb background |
| `marquee` | 30s | linear infinite | Text marquee |
| `fadeIn` | 0.8s | ease-out | Fade-in on load |
| `pulse-ring` | 2s | ease-out infinite | Avatar pulse ring |
| `rotate` | 4s | linear infinite | Glowing border rotation |

### Scroll Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.active { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.12s; }
.reveal-delay-2 { transition-delay: 0.24s; }
.reveal-delay-3 { transition-delay: 0.36s; }
```

### Interactive

- **Card hover lift:** +4px translateY with red border/glow
- **Button shine sweep:** Pseudoelement slides left → right on hover
- **Hamburger → X:** 3 lines animate to X via `.hamburger-active`
- **3D Tilt:** Cards rotate on mouse position via JS (`transform-style: preserve-3d`)
- **Spotlight:** Mouse-tracked radial gradient on cards via `--mouse-x` / `--mouse-y`
- **Scroll progress:** Fixed top bar, `transform: scaleX()` driven by JS

---

## Responsive Breakpoints

| Breakpoint | Max Width | Key Adjustments |
|---|---|---|
| Tablet landscape | 1024px | Smaller headings, adjusted padding |
| Tablet portrait | 768px | Full-width buttons, smaller stat numbers, reduced card radius |
| Mobile | 640px | Smaller stats, bento grid → 1 column, faster marquee |
| Small mobile | 480px | Further size reductions |
| Very small | 380px | Base font 14px, minimal padding |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Page Structure (Home)

1. **Scroll progress bar** — Fixed top red gradient bar
2. **Background layers** — Aurora orbs + noise texture
3. **Navigation** — Glass navbar with mobile hamburger
4. **Hero** — Full-height, grid layout, badge + h1 + CTA + stats counters + 3D tilt image
5. **Marquee** — Scrolling text with alternating opacity
6. **Vision** — Bento grid with 5 cards (urban, sustainability, safety, network, deployment)
7. **Technology** — Badge + heading + stat cards + 3 spotlight cards
8. **Advisory Network** — 2-column: description + expertise grid
9. **News** — Dark section with external news widget
10. **Careers** — Spotlight card + role cards
11. **Footer** — Logo, links, legal, social icons, disclaimers
12. **Modals** — Advisor interest / career registration forms

---

## File Organization

```
app/
  layout.tsx          # Root layout (fonts, meta, scripts)
  globals.css         # Global styles, utilities, animations
  page.tsx            # Home page → HomeLanding
  (page directories)  # 22 route pages

components/
  home/               # HomeLanding (main landing page)
  layout/             # Header, Footer, SiteShell
  page/               # AAMContent, ContentPage, TechnologyContent
  about/              # AboutPage
  careers/            # CareersEnhancements
  contact/            # ContactEnhancements
  ecosystem/          # EcosystemPage
  shared/             # PageClient
  ui/                 # Button
  vertiports/         # VertiportClient

lib/
  site.ts             # Site config, nav links, footer groups
  page-data.ts        # CMS-like page content data

tailwind.config.ts    # Design tokens, theme extensions
```

---

## Adding a New Page

1. Create `app/<route>/page.tsx` with the page content
2. Use `.dark-page-shell` wrapper for dark pages
3. Add `<style>` block with scoped CSS for glow orbs and custom classes (prefixed per-page)
4. Include `.aurora-bg` / `.noise-overlay` / grid pattern for backgrounds
5. Use Tailwind utility classes for styling (prefer `text-brandRed`, `bg-[#C50000]` over raw hex)
6. Add reveal animations with `.reveal` class and `useEffect` with IntersectionObserver
7. Register nav link in `lib/site.ts` `pageNavLinks` array
