# PROJECT_STATUS.md — Sentieri Website

**Last updated:** February 6, 2026
**Purpose:** Comprehensive codebase summary for onboarding a new Claude session to brainstorm next approaches.

---

## 0. Changes Made Today (Feb 6, 2026)

### Codebase Cleanup & Refactoring
1. **Deleted `/app/archive/page.tsx`** — removed the duplicate archive route. `/research-archive` is now the sole archive page.
2. **Created `/app/articles/[slug]/page.tsx`** — dynamic article detail route using ContentPageTemplate with placeholder content. Clicking any ArticleCard no longer 404s. Title is derived from the slug.
3. **Created `/components/ui/AnimatedUnderline.tsx`** — extracted the ~12-line animated underline pattern (duplicated in 7 components) into a reusable component. Supports `active` prop (external control) or self-managed hover, and configurable `lineHeight` (default 2px, sidebars use 1px). Replaced in: SidebarLeft, SidebarRight, ArticleCard, LandingPageTemplate, MenuOverlay, ContentPageTemplate (via ProductLinksSection), GridPageTemplate (via ProductLinksSection).
4. **Created `/components/ui/ProductLinksSection.tsx`** — extracted the ~80-line identical product links section from ContentPageTemplate and GridPageTemplate into a shared component. Exports `ProductLink` type.
5. **Refactored `MenuOverlay.tsx`** — collapsed duplicate left/right JSX branches into a single parameterized branch. Reduced from ~399 lines to ~196 lines. Same behavior, half the code.

### Color Scheme Change
6. **Updated all colors to black and white** — changed all four background color tokens in `globals.css` to `#FFFFFF`:
   - `--cream`: #FFF8E7 → #FFFFFF
   - `--header-beige`: #ECE1B9 → #FFFFFF
   - `--stelle-green`: #CFDCCB → #FFFFFF
   - `--sogni-pink`: #FEECE9 → #FFFFFF
   - `--black` stays #000000

   All components use CSS custom properties, so the change propagated automatically everywhere (header, sidebars, content areas, menu overlays, filter pills, Tailwind classes).

### Net Result
- **Routes:** 9 routes (was 10 — removed `/archive`, added `/articles/[slug]`)
- **New components:** 2 (`AnimatedUnderline`, `ProductLinksSection`)
- **Lines of code removed:** ~300+ lines of duplication eliminated
- **Build status:** Passes cleanly. Lint has 5 pre-existing errors (unescaped apostrophes in content) and 4 warnings (unused props, `<img>` usage).

---

## 1. What Is This Project?

Sentieri is a website for a countryside farm and cultural hub in Loreto Aprutino, Abruzzo, Italy. The organization has two interconnected entities:

- **Sentieri di Stelle** (Azienda Agricola) — regenerative wine and olive oil production
- **Sentieri di Sogni** (Associazione Culturale) — artist residencies, workshops, ecological research

The aesthetic is modern + rustic + experimental with hand-drawn elements. 10% of annual farm sales fund the cultural association.

---

## 2. Tech Stack & Dependencies

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.0.8 |
| UI | React | 19.2.1 |
| Language | TypeScript (strict mode) | ^5 |
| Styling | Tailwind CSS + custom CSS + inline styles | ^4 |
| CMS (installed, NOT integrated) | Sanity (`@sanity/client`, `next-sanity`, `@sanity/image-url`) | ^7.13.1 / ^11.6.10 / ^2.0.2 |
| Linting | ESLint 9 (flat config) with Next.js core-web-vitals + TypeScript rules | ^9 |
| CSS Processing | PostCSS with `@tailwindcss/postcss` | ^4 |
| Hosting target | Vercel | — |

**Path alias:** `@/*` maps to project root (in `tsconfig.json`).

**Scripts:**
```bash
npm run dev      # Next.js dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

---

## 3. Folder Structure

```
sentieri-website/
├── app/                                  # Next.js App Router pages
│   ├── layout.tsx                        # Root layout: Header + 2 sidebars + main area
│   ├── page.tsx                          # / — Homepage (LandingPageTemplate)
│   ├── globals.css                       # Design system: tokens, fonts, typography, utilities
│   ├── about/page.tsx                    # /about — ContentPageTemplate (mirrored)
│   ├── articles/[slug]/page.tsx          # /articles/:slug — ContentPageTemplate (placeholder content)
│   ├── azienda-agricola/page.tsx         # /azienda-agricola — GridPageTemplate
│   ├── associazione-culturale/page.tsx   # /associazione-culturale — GridPageTemplate (mirrored)
│   ├── wine/page.tsx                     # /wine — ContentPageTemplate
│   ├── olive-oil/page.tsx                # /olive-oil — ContentPageTemplate
│   ├── residencies/page.tsx              # /residencies — ContentPageTemplate (mirrored)
│   └── research-archive/page.tsx         # /research-archive — GridPageTemplate (mirrored, scrollable)
│
├── components/
│   ├── global/
│   │   ├── Header.tsx                    # Fixed top bar: centered logo, SHOP link, EN/IT toggle
│   │   ├── SidebarLeft.tsx               # Left sidebar (di Stelle), toggles left MenuOverlay
│   │   ├── SidebarRight.tsx              # Right sidebar (di Sogni), toggles right MenuOverlay
│   │   └── MenuOverlay.tsx               # Parameterized slide-in menu panel, hardcoded menu items
│   ├── templates/
│   │   ├── LandingPageTemplate.tsx       # Hero image (75vh) + 2 entity cards (25vh)
│   │   ├── ContentPageTemplate.tsx       # Dual-pane: text left + images right (supports mirrored)
│   │   └── GridPageTemplate.tsx          # Dual-pane: text left + article grid right (supports mirrored, scrollable)
│   ├── article/
│   │   ├── ArticleCard.tsx              # Square card with image + title, links to /articles/[slug]
│   │   ├── ArticleGrid.tsx              # 2-column grid of ArticleCards (fixed 2x2 or scrollable)
│   │   └── FilterPills.tsx              # All / Di Stelle / Di Sogni filter buttons
│   └── ui/
│       ├── AnimatedUnderline.tsx         # Reusable hover underline effect (active prop or self-managed)
│       └── ProductLinksSection.tsx       # Below-fold product links grid with dividers
│
├── lib/                                  # Empty — reserved for Sanity client, Shopify helpers
│
├── public/
│   ├── fonts/
│   │   ├── Abordage-Regular.woff2       # Display/headline font
│   │   └── MeridienLTStd-Roman.woff     # Body text font
│   └── images/
│       ├── landingPage/                  # hero-landscape.jpg, hero-landscape.tif
│       ├── aboutUs/                      # aboutUs-1.jpg through aboutUs-5.jpg
│       ├── azienda/                      # article-1.jpg through article-4.jpg
│       ├── culturale/                    # culturale-1.jpg through culturale-4.jpg
│       ├── wine/                         # wine-1.jpg through wine-5.jpg
│       ├── oliveOil/                     # oliveOil-1.jpg through oliveOil-4.jpg
│       └── residencies/                  # residency-1.jpg through residency-4.jpg
│
├── SENTIERI_PROJECT/                     # Project documentation (spec, client questions, design refs, copy)
│   ├── 00_SENTIERI_TECHNICAL_SPECIFICATION.md   # Master reference: all design decisions, spacing, CMS schemas
│   ├── 01_CLIENT_QUESTIONS.md                   # 30 open questions (none answered yet)
│   ├── 02_DESIGN_REFERENCES/                    # Design mockup images
│   └── 03_Website Copy_V2.pdf                   # All website copy text
│
├── package.json
├── tsconfig.json
├── next.config.ts                        # Remote image patterns: images.unsplash.com
├── postcss.config.mjs
├── eslint.config.mjs
├── CLAUDE.md                             # Guidance for Claude Code sessions
└── PROJECT_STATUS.md                     # This file
```

---

## 4. Architecture & Layout System

### Root Layout (`app/layout.tsx`)

The entire site uses a fixed viewport layout with **no body scrolling** (`overflow: hidden` on body and main). The structure:

```
┌──────────────────────────────────────────────────┐
│  HEADER (55px, fixed, z-100, white background)   │
├──┬────────────────────────────────────────────┬──┤
│  │                                            │  │
│L │           MAIN CONTENT AREA                │R │
│E │      (fills remaining viewport)            │I │
│F │                                            │G │
│T │      Each page manages its own             │H │
│  │      internal scrolling.                   │T │
│S │                                            │  │
│I │      marginLeft: 46px (sidebar)            │S │
│D │      marginRight: 46px (sidebar)           │I │
│E │      marginTop: 55px (header)              │D │
│B │      height: calc(100vh - 55px)            │E │
│A │      overflow: hidden                      │B │
│R │                                            │A │
│  │                                            │R │
│46│                                            │46│
│px│                                            │px│
└──┴────────────────────────────────────────────┴──┘
```

- The **Header** is a server component (no `'use client'`). Centered "Sentieri" text logo, "SHOP" link, "EN / IT" language toggle (non-functional).
- The **Sidebars** are client components. Each manages its own `isMenuOpen` state. When clicked, the sidebar slides to the viewport center and a `MenuOverlay` expands to fill half the screen.
- The **MenuOverlay** is a single parameterized component (handles both left and right via props). Hardcoded navigation links. Closes on ESC or backdrop click.

### Three Page Templates

#### 1. LandingPageTemplate (homepage only)
- Column flex: hero image at 75vh, entity cards section at 25vh
- Two clickable cards in a 2-column grid with 1px center divider
- Uses AnimatedUnderline for card heading hover

#### 2. ContentPageTemplate (wine, olive-oil, residencies, about, articles/[slug])
- 50/50 dual-pane split with center divider
- Left pane: scrollable text content (paddingTop: 300px, paddingLeft: 18px, paddingRight: 130px)
- Right pane: scrollable image gallery (edge-to-edge images, 35px gaps)
- Uses ProductLinksSection for optional below-fold product links
- `mirrored` prop swaps pane order

#### 3. GridPageTemplate (azienda-agricola, associazione-culturale, research-archive)
- 50/50 dual-pane split with center divider
- Left pane: scrollable text (title, optional tagline, description)
- Right pane: ArticleGrid component
- Uses ProductLinksSection for optional below-fold product links
- `scrollable` prop passed to ArticleGrid (false = fixed 2x2, true = unlimited scroll)
- `mirrored` prop swaps pane order

### Shared UI Components

#### AnimatedUnderline (`components/ui/AnimatedUnderline.tsx`)
- Wraps children with an absolutely-positioned underline bar
- **`active` prop** — external control (parent manages hover state). Used by sidebars, article cards, landing page cards, menu items, product links
- **Self-managing mode** — if no `active` prop, handles its own `onMouseEnter`/`onMouseLeave`
- **`lineHeight` prop** — defaults to 2px; sidebars pass 1px

#### ProductLinksSection (`components/ui/ProductLinksSection.tsx`)
- Full-bleed horizontal divider + 2-column grid of product links with vertical divider
- Each link has AnimatedUnderline on the heading
- Manages its own hover state for the links
- Exports `ProductLink` type interface

---

## 5. Design System (`app/globals.css`)

### Colors (CSS custom properties)
Currently **black and white** scheme:
```
--cream:          #FFFFFF   (main background everywhere)
--header-beige:   #FFFFFF   (header bar)
--stelle-green:   #FFFFFF   (left sidebar)
--sogni-pink:     #FFFFFF   (right sidebar)
--black:          #000000   (all text, borders, dividers)
```

Original palette (for reference):
```
--cream:          #FFF8E7   --header-beige:   #ECE1B9
--stelle-green:   #CFDCCB   --sogni-pink:     #FEECE9
```

Colors are also exposed to Tailwind via `@theme inline` block: `bg-cream`, `bg-header-beige`, `bg-stelle-green`, `bg-sogni-pink`.

### Fonts
- **Abordage Regular** — display/headline font. Loaded from `/public/fonts/Abordage-Regular.woff2`.
- **Meridien LT Std Roman** — body text font. Loaded from `/public/fonts/MeridienLTStd-Roman.woff`.

### Typography Classes
| Class | Font | Size | Letter-spacing | Line-height | Usage |
|-------|------|------|---------------|-------------|-------|
| `.heading-xl` | Abordage | 6.65rem (107px) | -2px | 100% | Page titles |
| `.heading-lg` | Meridien | 3.3rem (53px) | -1.25rem | 37pt | Section headings |
| `.heading-md` | Meridien | 2.3rem (37px) | 0 | 32pt | Card titles |
| `.body-text` | Meridien | 1.7rem (27px) | 0 | 28px | Body paragraphs |
| `.small-text` | Meridien | 1.3rem (21px) | 0 | 18pt | Captions, dates |

**Note:** Many components override `.body-text` inline with `fontSize: '18px'; lineHeight: '26px'`. This inconsistency persists.

### Spacing Variables
```
--header-height: 55px     --sidebar-width:  46px
--space-xs:  8px          --space-sm: 12px    --space-md: 18px
--space-lg: 40px          --space-xl: 60px    --space-2xl: 80px
--space-3xl: 110px        --space-4xl: 130px
```

---

## 6. Component Details

### Component Overview
| Component | Lines | Client? | Notes |
|-----------|-------|---------|-------|
| MenuOverlay.tsx | ~196 | Yes | Parameterized for left/right |
| ContentPageTemplate.tsx | ~123 | Yes | Uses ProductLinksSection |
| GridPageTemplate.tsx | ~127 | Yes | Uses ProductLinksSection |
| LandingPageTemplate.tsx | ~172 | Yes | Uses AnimatedUnderline |
| ArticleCard.tsx | ~83 | Yes | Uses AnimatedUnderline |
| ProductLinksSection.tsx | ~100 | Yes | Uses AnimatedUnderline |
| AnimatedUnderline.tsx | ~42 | Yes | Core shared component |
| SidebarLeft.tsx | ~57 | Yes | Uses AnimatedUnderline |
| SidebarRight.tsx | ~57 | Yes | Uses AnimatedUnderline |
| Header.tsx | ~84 | No | Server component |
| FilterPills.tsx | ~66 | Yes | |
| ArticleGrid.tsx | ~55 | No | Server component |

---

## 7. Per-Page Content Summary

All page content is currently **hardcoded** — no CMS integration.

| Route | Template | Images | Notes |
|-------|----------|--------|-------|
| `/` | LandingPageTemplate | `/images/landingPage/hero-landscape.jpg` | |
| `/azienda-agricola` | GridPageTemplate | `/images/azienda/article-*.jpg` | 4 sample articles, 2 product links |
| `/associazione-culturale` | GridPageTemplate (mirrored) | `/images/culturale/culturale-*.jpg` | 4 sample articles, 2 product links |
| `/wine` | ContentPageTemplate | `/images/wine/wine-*.jpg` (5 images) | 2 product links |
| `/olive-oil` | ContentPageTemplate | `/images/oliveOil/oliveOil-*.jpg` (4 images) | Has duplicate paragraphs |
| `/residencies` | ContentPageTemplate (mirrored) | `/images/residencies/residency-*.jpg` (4 images) | 2 product links |
| `/about` | ContentPageTemplate (mirrored) | `/images/aboutUs/aboutUs-*.jpg` (5 images) | Has dev note in content |
| `/articles/[slug]` | ContentPageTemplate | Mix of azienda + culturale images | Placeholder content, title from slug |
| `/research-archive` | GridPageTemplate (mirrored, scrollable) | Local `/images/` paths | 8 articles, 2 product links |

---

## 8. What's Working

- All 9 page routes render correctly
- Article detail pages work (clicking any ArticleCard navigates to a working page)
- Three page templates work with dual-pane scrolling
- Sidebar menus open/close with animation, ESC key, backdrop click
- AnimatedUnderline hover states throughout (via shared component)
- ProductLinksSection renders identically in both template types
- Local images load from `/public/images/`
- Custom fonts (Abordage, Meridien) load and display
- Black and white color scheme applied consistently
- Build passes, TypeScript compiles

---

## 9. What's NOT Working / Not Implemented

### Critical Gaps
1. **No Sanity CMS integration** — packages installed but no schemas, client config, queries, or Studio. `lib/` folder empty.
2. **No `/shop` route** — header "SHOP" link and menu "Shop" link both 404.
3. **Language toggle is cosmetic only** — no click handler, no i18n library, no translated content.
4. **No mobile/responsive design** — fixed viewport calculations with no media queries.
5. **No Shopify integration** — Phase 2.

### Content Issues
6. **Olive oil page has duplicate paragraphs** — paragraphs 2, 3, and 4 are identical.
7. **About page has a dev note** in rendered content: "Maybe it's time to have a little photoshoot..."
8. **Article detail pages show placeholder content** — same generic text for every article.
9. **Typography inconsistency** — `.body-text` class says 1.7rem, inline styles say 18px.

### Missing Features from Spec
10. **ArticleCard doesn't display `publishDate`** — date badge from design spec not implemented.
11. **Menu overlay backdrop has no visible background color** — backdrop div exists but is transparent.
12. **`next.config.ts`** only allows `images.unsplash.com` — needs Sanity CDN when CMS is integrated.
13. **ContentPageTemplate uses `<img>`** instead of Next.js `<Image>` for gallery.

---

## 10. Design Spec vs. Implementation

Based on `SENTIERI_PROJECT/00_SENTIERI_TECHNICAL_SPECIFICATION.md`:

| Spec Feature | Status |
|-------------|--------|
| Dual-pane independent scrolling | **Done** |
| Sidebar slide-in menus | **Done** |
| ESC key menu close | **Done** |
| Click-outside menu close | **Done** |
| Animated hover underlines | **Done** (shared component) |
| Article detail pages (`/articles/[slug]`) | **Done** (placeholder content) |
| Article date badge on card | NOT done |
| Menu overlay backdrop (semi-transparent) | NOT done (transparent) |
| Sanity CMS schemas & queries | NOT done |
| i18n / bilingual structure | NOT done |
| Shopify Buy Button integration | NOT done |
| Shop page | NOT done |
| Mobile responsive layouts | NOT done |
| Contact forms | NOT done |
| Newsletter signup | NOT done |
| SEO meta tags | NOT done |

---

## 11. Architectural Decisions

1. **No body scrolling** — `<body>` and `<main>` both `overflow: hidden`. Each pane scrolls independently.
2. **Client components for interactivity** — all templates and interactive components use `'use client'`. Only Header and ArticleGrid are server components.
3. **Inline styles for layout** — complex layout properties use React inline styles. Tailwind for utility classes.
4. **No component library** — everything built from scratch.
5. **CSS custom properties as design tokens** — colors and spacing in `:root`, referenced via `var()` throughout.
6. **Shared UI components** — AnimatedUnderline and ProductLinksSection eliminate duplication.
7. **Black and white color scheme** — all background tokens set to #FFFFFF. Original palette preserved in comments for easy reverting.

---

## 12. Open Client Questions

`SENTIERI_PROJECT/01_CLIENT_QUESTIONS.md` contains **30 unanswered questions** covering: homepage content placement, handwritten assets, article illustrations, archive categories, featured article selection, shop page design, Shopify status, mobile strategy, Italian translations, contact forms, newsletter, visit booking, domain name, analytics, launch timeline.

---

## 13. Suggested Next Steps

### Immediate Wins
- Create a `/shop` page (header + menu both link there)
- Fix the about page dev note and olive oil duplicate paragraphs
- Add date badges to ArticleCard (data already passed as prop)
- Add semi-transparent backdrop to MenuOverlay
- Use Next.js `<Image>` in ContentPageTemplate gallery

### Refactoring
- Normalize body text sizing (CSS class says 1.7rem, inline styles say 18px)
- Consider whether menu items should come from config instead of being hardcoded

### Major Feature Work
- **Sanity CMS integration** — schemas exist in spec doc; need client config in `lib/`, schema definitions, GROQ queries, connect pages to CMS data
- **i18n** — library selection (next-intl?), language context, bilingual content structure
- **Responsive/mobile** — currently desktop-only with hardcoded viewport math
- **Shopify** — Buy Button or Storefront API for wine/olive oil purchase
- **SEO** — page-specific metadata, OpenGraph, sitemap
- **Article detail pages** — connect to CMS data instead of placeholder content
