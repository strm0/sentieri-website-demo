# CLAUDE.md — Sentieri Website

## Project Overview

Sentieri is a dual-entity organization based in Loreto Aprutino, Abruzzo, Italy. It combines regenerative agriculture (wine & olive oil) with a cultural/artistic collective (residencies, events, ecology). The website must communicate both entities clearly with an editorial, high-design aesthetic — never generic or template-like.

**Entities:**
- **Sentieri di Stelle** — Azienda Agricola (agriculture: wine, olive oil, shop)
- **Sentieri di Sogni** — Associazione Culturale (residencies, community, about us, research archive)

**Audience:** People drawn to natural wine, artisanal olive oil, experimental art/culture, rural/slow living, ecology, and community.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4 — no component libraries (no shadcn, no MUI, no Chakra)
- **CMS:** Sanity (installed, not yet integrated — integration deferred until layouts are finalized)
- **E-commerce:** Shopify (lightweight Buy Button / links for now, headless API later)
- **Deployment:** Vercel
- **Fonts:** Loaded via `@font-face` in `globals.css` from `/public/fonts/`

---

## Design Language

### Aesthetic Direction

Editorial minimalism. Black and white. Think Kinfolk meets Swiss typography meets hand-drawn Italian rusticity. The site should feel like a beautifully printed independent magazine — not a SaaS landing page.

**Current color scheme is strictly monochrome:**
- All backgrounds: `#FFFFFF` (pure white)
- All text: `#000000` (black)
- All borders/dividers: `1px solid #000000`
- No grays, no accent colors, no gradients, no shadows

The original palette (cream `#FFF8E7`, sage green `#CFDCCB`, pink `#FEECE9`, header beige `#ECE1B9`) has been retired. The CSS variables remain in `globals.css` but all map to white or black. Do not reintroduce color unless explicitly instructed.

### Typography

**Single font: Noi Grotesk Trial Regular** — used for ALL text across the entire site (headings, body, captions, nav, sidebars, everything).

Font file: `/public/fonts/NoiGroteskTrial-Regular.ttf`
(A Medium weight variant also exists at `/public/fonts/NoiGroteskTrial-Medium.ttf` but is NOT currently in use.)

The font is loaded via `@font-face` in `globals.css` with `font-family: 'Noi Grotesk'`. Both `--font-display` and `--font-body` CSS variables point to `'Noi Grotesk', sans-serif`.

**Critical: Tailwind CSS 4 font override required.** Tailwind 4 sets its own `--default-font-family` via `--font-sans` in the preflight layer. Without overriding these in the `@theme inline` block, the site falls back to system fonts. The override is:
```css
@theme inline {
  --font-sans: 'Noi Grotesk', sans-serif;
  --default-font-family: 'Noi Grotesk', sans-serif;
}
```

**Previous fonts (Abordage, Meridien LT Std) have been replaced.** Font files for those may still exist in `/public/fonts/` but are no longer referenced anywhere.

| Role | Size | Letter Spacing | Line Height |
|------|------|----------------|-------------|
| H1 (page titles) | 8.5rem | -2px | 100% |
| H2 (section headings) | 3.3rem | -0.1rem | 37pt |
| H3 (card titles, menu) | 22px | 0 | 1.3 |
| Body | 1.7rem (27px) | 0 | 28px |
| Small (dates, captions) | 1.3rem (21px) | 0 | 18pt |
| Header "Sentieri" | 1.5rem | 0 | normal |
| Header nav (SHOP, EN/IT) | 1rem | 0.05em | normal |
| Sidebar text | 0.9rem | 0.1em | normal |

Do NOT use Inter, Roboto, Arial, system fonts, Space Grotesk, or any generic web font.

### Interaction States

All hover effects use **text underline only** — no background color changes, no scale transforms, no box shadows.

```css
.clickable:hover { text-decoration: underline; cursor: pointer; }
```

Transitions: `transition: all 0.2s ease;`
Respect `prefers-reduced-motion` — disable animations when set.

---

## Layout Architecture

### Core Structure

The entire site uses a fixed viewport layout with persistent chrome:

```
┌──────────────────────────────────────────────────────────┐
│  HEADER (55px, white bg, 1px black bottom border)        │
├──┬──────────────────┬────────────────────────────────┬───┤
│  │                  │                                │   │
│  │  LEFT PANE       │  RIGHT PANE                    │   │
│di│  38% width       │  62% width                     │di │
│  │                  │                                │   │
│St│  Independently   │  Independently                 │So │
│el│  scrollable      │  scrollable                    │gn │
│le│                  │                                │i  │
│  │                  │                                │   │
│46│                  │                                │46 │
│px│                  │                                │px │
└──┴──────────────────┴────────────────────────────────┴───┘
```

### Key Measurements

- **Header height:** 55px (fixed/sticky, z-index 100)
- **Sidebar width:** 46px each (fixed, full height below header)
- **Content area width:** `calc(100vw - 92px)` (viewport minus both sidebars)
- **Content area height:** `calc(100vh - 55px)` (viewport minus header)
- **Pane split:** 38% left / 62% right (center divider: 1px solid black)
- **Both panes:** `overflow-y: auto` (independent scrolling)

### Sidebar Details

- Left sidebar: "di Stelle" text, rotated -90deg, vertically centered, white background
- Right sidebar: "di Sogni" text, rotated 90deg, vertically centered, white background
- Both sidebars are clickable — they expand into full slide-in menu overlays from their respective sides

### Header

- Logo ("Sentieri") centered via absolute positioning
- "SHOP" link and "EN / IT" language toggle on the right
- The header is fixed, full-width, z-index 100

---

## Spacing System

Base unit: 4px

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 18px;
--space-lg: 40px;
--space-xl: 60px;
--space-2xl: 80px;
--space-3xl: 110px;
--space-4xl: 130px;
```

### Content Page (ContentPageTemplate) Padding

**Text pane:**
- Top: 40px
- Bottom: 80px
- Left: 18px
- Right: 18px
- Body text div has additional internal padding: left 12px, right 20px

**Title:**
- Font size: 8.5rem
- Alignment: right-aligned on normal pages, left-aligned on mirrored pages
- Margin-bottom: 160px (large gap before body text)
- Padding-right: 20px (normal) or padding-left: 12px (mirrored) — aligns title edge with body text edge

**Image pane:**
- Padding: 0 (images bleed to edges)
- Image vertical gap: 35px between stacked images

**Quote overlay (on image pane):**
- Position: absolute, top 140px, right 50px, left 35%
- Color: white (#FFFFFF)
- Font size: 1.7rem (same as body text)
- Line height: 28px
- Text align: right
- Pointer events: none

### Grid Page (GridPageTemplate) Padding

**Text pane:**
- Top: 300px
- Bottom: 80px
- Left: 18px
- Right: 130px

**Article grid pane:**
- Uniform 40px padding and gap

### Text Spacing

- H1 to body text: 160px
- Between paragraphs: 40px
- Between images: 35px
- Grid gap (article cards): 40px

---

## Page Templates

### Template 1: Content Page (ContentPageTemplate)

Used for: product pages (Wine, Olive Oil), individual articles, info pages (Residency, About Us)

- **Normal layout:** Text pane left (38%), image pane right (62%). Title right-aligned.
- **Mirrored layout** (`mirrored={true}`): Image pane left, text pane right. Title left-aligned. Used for Residency and About pages.
- Text pane: H1 title → body paragraphs
- Image pane: Stacked images, full-width, 35px vertical gap
- Optional `quote` prop (ReactNode): White text overlaid absolutely on the image pane
- Both panes scroll independently
- **ProductLinksSection has been removed** from this template (will be redesigned later). The component file still exists at `components/ui/ProductLinksSection.tsx`.

### Template 2: Grid Page (GridPageTemplate)

Used for: Azienda Agricola overview, Associazione Culturale overview, Research Archive

- Text pane: H1 → italic tagline → body text
- Article pane: 2×2 article card grid (4 featured articles) with uniform 40px spacing
- Research Archive variant: `scrollable={true}` — right pane scrolls to show all articles
- **ProductLinksSection has been removed** from this template (will be redesigned later).

### Template 3: Landing Page (LandingPageTemplate, homepage only)

- Single viewport, no scrolling
- Full-width hero illustration (hand-drawn, spans both panes)
- Below: horizontal divider, then two-column entity cards
- Left card: Azienda Agricola intro + link
- Right card: Associazione Culturale intro + link
- Entity cards are fully clickable

---

## Project Structure

```
sentieri-website/
├── app/
│   ├── layout.tsx                    # Root layout (header, sidebars, dual-pane shell)
│   ├── page.tsx                      # Homepage (Template 3)
│   ├── globals.css                   # CSS variables, @font-face, base styles, Tailwind theme
│   ├── azienda-agricola/
│   │   └── page.tsx                  # Template 2
│   ├── associazione-culturale/
│   │   └── page.tsx                  # Template 2 (mirrored)
│   ├── wine/
│   │   └── page.tsx                  # Template 1
│   ├── olive-oil/
│   │   └── page.tsx                  # Template 1
│   ├── residencies/
│   │   └── page.tsx                  # Template 1 (mirrored)
│   ├── about/
│   │   └── page.tsx                  # Template 1 (mirrored)
│   ├── research-archive/
│   │   └── page.tsx                  # Template 2 variant (scrollable, mirrored)
│   └── articles/
│       └── [slug]/page.tsx           # Template 1 (dynamic)
├── components/
│   ├── global/
│   │   ├── Header.tsx
│   │   ├── SidebarLeft.tsx
│   │   ├── SidebarRight.tsx
│   │   ├── MenuOverlay.tsx
│   │   └── LanguageToggle.tsx
│   ├── templates/
│   │   ├── ContentPageTemplate.tsx   # Template 1 (supports quote overlay, mirrored layout)
│   │   ├── GridPageTemplate.tsx      # Template 2
│   │   └── LandingPageTemplate.tsx   # Template 3
│   ├── article/
│   │   ├── ArticleCard.tsx           # No border-radius, no gradients
│   │   ├── ArticleGrid.tsx           # No gradient placeholders
│   │   └── FilterPills.tsx
│   └── ui/
│       ├── AnimatedUnderline.tsx      # Extracted shared component
│       └── ProductLinksSection.tsx    # NOT currently used — removed from templates, kept for future redesign
├── lib/
│   ├── sanity.ts
│   └── shopify.ts
├── public/
│   └── fonts/                        # Noi Grotesk Trial (Regular + Medium .ttf and .woff2)
├── temporary_screenshots/            # Visual comparison screenshots (gitignored)
└── sanity/                           # Sanity studio config + schemas
```

---

## Component Conventions

- All components are React functional components with TypeScript
- Use Tailwind utility classes — no inline `style` attributes unless absolutely necessary
- Use CSS custom properties (defined in `globals.css`) for any repeated design tokens
- No `className` string concatenation — use `clsx` or template literals
- All interactive elements must be keyboard-accessible
- Images: use `next/image` with proper `alt` text, `object-fit: cover` where needed
- Scrollbar styling: hide default scrollbars on the dual panes (custom CSS or `scrollbar-width: none`)

---

## Article Cards

Each card contains:
- Hand-drawn illustration (fills card, aspect ratio ~1:1, NO border-radius)
- Date badge overlay (bottom-left): format "DD.MM.YYYY"
- Title below illustration
- Optional category tag ("Agriculture", "Community", etc.)
- Entire card is clickable → navigates to article page
- Hover: title underlines
- Placeholder cards use flat white background (no gradients)

---

## DO NOT

- Use any color other than black and white (no grays, no accents, no entity colors)
- Use rounded corners, box shadows, or drop shadows anywhere
- Use gradient backgrounds
- Use Inter, Roboto, Arial, system-ui, Space Grotesk, or any generic font
- Use Abordage or Meridien fonts (replaced by Noi Grotesk)
- Use component libraries (shadcn, MUI, Radix, Chakra, etc.)
- Add placeholder images — use solid white blocks or leave empty
- Change the pane ratio (38/62) without explicit instruction
- Hardcode article/product content — structure for future CMS integration
- Use `<img>` tags — always use `next/image`
- Add animations beyond simple CSS transitions (no Framer Motion, no GSAP, no spring physics)
- Break the independent scrolling behavior of the two panes
- Touch Sanity integration until layouts are fully finalized

---

## Completed Work (as of 2026-03-15)

1. **Font switch to Noi Grotesk:** Replaced Abordage + Meridien with Noi Grotesk Trial Regular for all text site-wide. Fixed Tailwind CSS 4 font override issue (must set `--font-sans` and `--default-font-family` in `@theme inline`).
2. **B&W color scheme:** All backgrounds white, all text black. Done.
3. **Pane ratio:** 38/62 split. Done.
4. **CLAUDE.md violations fixed:** Removed `borderRadius: '9px'` from ArticleCard, removed gradient backgrounds from ArticleCard and ArticleGrid placeholders, replaced `<img>` tags with `next/image` in ContentPageTemplate.
5. **ProductLinksSection removed:** Removed from both ContentPageTemplate and GridPageTemplate (and all 8 page files that passed the prop). Component file kept for future redesign.
6. **Quote overlay implemented:** ContentPageTemplate now supports an optional `quote` prop (ReactNode) that renders white text absolutely positioned over the image pane. Wine page uses this for its opening quote.
7. **Content page layout refined:** Title position, padding, and spacing adjusted to match designer mockups. Mirrored pages (Residency, About) have left-aligned titles.
8. **Residencies → Residency:** Page title changed to singular "Residency" per designer mockup.
9. **AnimatedUnderline extraction:** Shared component created, replacing duplicated hover underline code.

## Remaining Work

1. **Article card layout mismatch:** The Azienda Agricola mockup shows a different article layout (horizontal rows with title/author/date + landscape photo) vs the current 2x2 square grid. Needs new component or rework.
2. **Article page quote overlay:** The article page mockup shows a quote overlay similar to the wine page — needs per-article quote support.
3. **Title overflow on long titles:** Some titles (e.g., multi-word article titles) can overflow the 38% pane width at 8.5rem font size. May need responsive scaling.
4. **Design reference screenshots:** Comparison screenshots stored in `temporary_screenshots/` (gitignored). Reference mockups are in `SENTIERI_PROJECT/02_DESIGN_REFERENCES/newDesigns/`.

---

## Git Workflow

- Commit after each meaningful change with descriptive messages
- Branch naming: `feature/[description]` or `fix/[description]`
- Keep commits atomic — one logical change per commit

---

## Handwritten / Drawn Assets

The site uses hand-drawn SVG/PNG assets for:
- "Sentieri" logo (header)
- "di Stelle" sidebar text
- "di Sogni" sidebar text
- Hero illustration (landing page)
- Article card illustrations

These are custom assets — do not generate or substitute them. Use placeholder white blocks where assets are missing.
