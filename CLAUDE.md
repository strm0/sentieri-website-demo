@MOBILE.md

# CLAUDE.md — Sentieri Website

> Last updated: 2026-03-23. All values verified against source code.

---

## 1. Project Overview

Sentieri is a dual-entity organization based in Loreto Aprutino, Abruzzo, Italy. It combines regenerative agriculture (wine & olive oil) with a cultural/artistic collective (residencies, events, ecology). The website communicates both entities with an editorial, high-design aesthetic — never generic or template-like.

**Entities:**
- **Sentieri di Stelle** — Azienda Agricola (agriculture: wine, olive oil, shop)
- **Sentieri di Sogni** — Associazione Culturale (residencies, community, about us, research archive)

**Audience:** Natural wine, artisanal olive oil, experimental art/culture, rural/slow living, ecology, community.

**Aesthetic direction:** Editorial minimalism. Black and white. Kinfolk meets Swiss typography meets hand-drawn Italian rusticity. The site should feel like a beautifully printed independent magazine — not a SaaS landing page.

**Current state:**
- Content is hardcoded in page files and `lib/articles.tsx`
- No internationalization (i18n)
- No mobile responsiveness (desktop only)
- Sanity CMS installed but integration deferred until layouts finalized
- Shopify not yet integrated
- Not yet deployed

---

## 2. Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4 — no component libraries (no shadcn, no MUI, no Chakra)
- **CSS Processing:** PostCSS with `@tailwindcss/postcss` — no `tailwind.config` file; uses `@theme inline` in `globals.css`
- **CMS:** Sanity (installed, not yet integrated)
- **E-commerce:** Shopify (not yet integrated)
- **Deployment:** Vercel (not yet deployed)
- **Fonts:** Loaded via `@font-face` in `globals.css` from `/public/fonts/`
- **Images:** Remote patterns configured for `https://images.unsplash.com/**`

---

## 3. Color System

Strictly monochrome. All legacy entity color names map to white.

| Token | CSS Variable | Value | Usage |
|---|---|---|---|
| Cream | `--cream` | `#FFFFFF` | All backgrounds |
| Header beige | `--header-beige` | `#FFFFFF` | Header background |
| Stelle green | `--stelle-green` | `#FFFFFF` | Left sidebar background |
| Sogni pink | `--sogni-pink` | `#FFFFFF` | Right sidebar background |
| Black | `--black` | `#000000` | All text, all borders |

**Hardcoded colors (not via variables):**
- Quote overlay text: `#FFFFFF` (white on image)
- Landing hero tagline: `#FFFFFF`
- Landing scroll indicator arrows: `stroke: #FFFFFF`
- All borders/dividers: `1px solid #000000` (or `1px solid var(--black)`)

**Rules:**
- No grays, no accent colors, no gradients, no shadows
- The original palette (cream `#FFF8E7`, sage green `#CFDCCB`, pink `#FEECE9`, header beige `#ECE1B9`) has been retired. Do not reintroduce color unless explicitly instructed.

---

## 4. Typography

### Font

**Single font: Noi Grotesk Trial Regular** — used for ALL text across the entire site.

```css
@font-face {
  font-family: 'Noi Grotesk';
  src: url('/fonts/NoiGroteskTrial-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

Both `--font-display` and `--font-body` CSS variables point to `'Noi Grotesk', sans-serif`.

**Critical: Tailwind CSS 4 font override required.** Without this in the `@theme inline` block, the site falls back to system fonts:
```css
@theme inline {
  --font-sans: 'Noi Grotesk', sans-serif;
  --default-font-family: 'Noi Grotesk', sans-serif;
}
```

Font files present in `/public/fonts/`:
- `NoiGroteskTrial-Regular.ttf` (in use)
- `NoiGroteskTrial-Regular.woff2` (not referenced in @font-face)
- `NoiGroteskTrial-Medium.ttf` (not in use)
- `Abordage-Regular.woff2` (deprecated, not referenced)
- `MeridienLTStd-Roman.woff` (deprecated, not referenced)

### CSS Typography Classes

Defined in `globals.css`:

| Class | Font Size | Letter Spacing | Line Height | Margin Top | Margin Bottom |
|---|---|---|---|---|---|
| `.heading-xl` | `6.65rem` (107px) | `-2px` | `90%` | — | `45px` |
| `.heading-lg` | `3.3rem` (53px) | `-1.25rem` ⚠️ | `37pt` | — | `20px` |
| `.heading-md` | `2.3rem` (37px) | `0` | `32pt` | — | `16px` |
| `.subheader-l1` | `1.7rem` | `0` | `28px` | `50px` | `10px` |
| `.subheader-l2` | `clamp(1.1rem, 1.7vw, 1.5rem)` | `0` | `1.2` | `40px` | `10px` |
| `.body-text` | `clamp(0.9rem, 1.4vw, 1.3rem)` | `0` | `1.2` | — | — |
| `.body-text p` | (inherits) | — | — | — | `40px` |
| `.small-text` | `1.3rem` (21px) | `0` | `18pt` | — | — |

> ⚠️ `.heading-lg` has `letter-spacing: -1.25rem` which equals -20px. This is likely a bug — probably should be `-0.125rem` or `-1.25px`.

### Component-Level Typography

Inline styles used directly on elements (not via CSS classes):

| Context | Font Size | Letter Spacing | Line Height | Other |
|---|---|---|---|---|
| Header logo "sentieri" | `2.2rem` | `-0.07em` | default | `font-weight: normal` |
| Sidebar text ("di Stelle"/"di Sogni") | `1.2rem` | `-0.07em` | default | `white-space: nowrap` |
| Menu overlay heading (h2) | `8.5rem` | inherited from `.heading-xl` | inherited | Also has `.heading-xl` class |
| Menu overlay nav links | `1.7rem` | — | `28px` | `white-space: nowrap` |
| Page titles (Content/Grid templates) | `clamp(3rem, 5.5vw, 7.5rem)` | inherited from `.heading-xl` | inherited | Overrides `.heading-xl` font-size |
| Landing hero tagline | `clamp(3rem, 5.5vw, 7.5rem)` | inherited | inherited | `color: #FFFFFF` |
| Entity card title (landing) | `clamp(1.4rem, 2.2vw, 2rem)` | `-0.02em` | `1.2` | — |
| Entity card description (landing) | `clamp(0.9rem, 1.4vw, 1.3rem)` | — | `1.4` | — |
| Entity card nav links (landing) | `1.7rem` | — | `28px` | `white-space: nowrap` |
| ArticleCard title (h3) | `22px` | — | `1.3` | — |
| ArticleList row title (h3) | `1.7rem` | — | `28px` | — |
| ArticleList metadata (author/year) | `14px` | — | `20px` | — |
| FilterPills label + buttons | `20px` | — | default | — |
| AudioPlayer text | `1.2rem` | `-0.07em` | default | — |
| AudioPlayer time display | `0.8rem` | `0` | default | `font-variant-numeric: tabular-nums` |

Do NOT use Inter, Roboto, Arial, system-ui, Space Grotesk, Abordage, Meridien, or any generic font.

---

## 5. Spacing Tokens

Defined as CSS custom properties in `:root` of `globals.css`:

| Token | Value | Common Usage |
|---|---|---|
| `--header-height` | `55px` | Header height, top offset for sidebars/overlays |
| `--sidebar-width` | `46px` | Both sidebar widths, main content margins |
| `--space-xs` | `8px` | — |
| `--space-sm` | `12px` | Body text inner padding-left |
| `--space-md` | `18px` | Content pane side padding |
| `--space-lg` | `40px` | Paragraph spacing, grid padding/gap, overlay padding |
| `--space-xl` | `60px` | — |
| `--space-2xl` | `80px` | — |
| `--space-3xl` | `110px` | — |
| `--space-4xl` | `130px` | — |

### Key Spacing Values Used in Components

| Context | Value | Source |
|---|---|---|
| Title to body text gap | `160px` | `marginBottom` on h1 in templates |
| Between paragraphs | `40px` | `.body-text p` margin-bottom |
| Between stacked images | `35px` | `marginBottom` on image containers |
| Text pane padding (top) | `40px` | Content/Grid templates |
| Text pane padding (bottom) | `20px` | Content/Grid templates |
| Text pane padding (sides) | `18px` | Content/Grid templates |
| Body text inner padding | `12px` left, `20px` right | Body text div in templates |
| Header padding | `0 24px` | Header component |
| ArticleList row padding | `30px` all sides | ArticleRow in ArticleList |
| Menu overlay padding | `40px` top/bottom, `18px`/`calc(46px + 18px)` sides | MenuOverlay |
| Entity card content inset | `30px` from edges, `40px` from bottom | Landing page cards |
| Article grid padding + gap | `40px` | ArticleGrid component |

---

## 6. Layout Architecture

### Core Shell

```
┌──────────────────────────────────────────────────────────┐
│  HEADER (55px, fixed, z-100, white bg, 1px black border) │
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

### Structure (from `layout.tsx`)

| Element | CSS | Value |
|---|---|---|
| `<body>` | margin, padding, overflow | `0`, `0`, `hidden` |
| `<main>` | margin-left | `var(--sidebar-width)` → `46px` |
| `<main>` | margin-right | `var(--sidebar-width)` → `46px` |
| `<main>` | margin-top | `var(--header-height)` → `55px` |
| `<main>` | height | `calc(100vh - var(--header-height))` |
| `<main>` | overflow | `clip` |
| `<main>` | background | `var(--cream)` → `#FFFFFF` |

### Key Measurements

- **Header height:** `55px` (fixed, full-width, z-index 100)
- **Sidebar width:** `46px` each (fixed, full height below header)
- **Content area width:** `calc(100vw - 92px)`
- **Content area height:** `calc(100vh - 55px)`
- **Pane split:** 38% left / 62% right
- **Both panes:** `overflow-y: scroll` with `.no-scrollbar` (hides native scrollbars)

### Header (`components/global/Header.tsx`)

- `height: var(--header-height)` → `55px`
- `position: fixed`, `top: 0`, `left: 0`, `right: 0`
- `z-index: 100`
- `background: var(--header-beige)` → `#FFFFFF`
- `border-bottom: 1px solid var(--black)`
- `display: flex`, `align-items: center`, `justify-content: flex-end`
- `padding: 0 24px`
- Logo "sentieri" centered via `position: absolute`, `left: 50%`, `transform: translateX(-50%)`
- Logo links to `/` with `.clickable` class

**Note:** The old CLAUDE.md references "SHOP" link and "EN / IT" language toggle in the header. Neither exists in the current code. The header contains only the centered logo.

### Sidebars (`components/global/SidebarsContainer.tsx`)

Both managed by a single `SidebarsContainer` component with unified `openSide` state.

**Left sidebar (di Stelle):**
- `width: var(--sidebar-width)` → `46px`
- `height: calc(100vh - var(--header-height))`
- `position: fixed`, `top: var(--header-height)`
- `left: 0` (closed) → `left: calc(62vw - var(--sidebar-width))` (open)
- `z-index: 50`
- `border-right: 1px solid var(--black)`
- `background: var(--stelle-green)` → `#FFFFFF`
- Text "di Stelle" rotated `-90deg`, vertically centered

**Right sidebar (di Sogni):**
- Same dimensions, mirrored positioning
- `right: 0` (closed) → `right: calc(62vw - var(--sidebar-width))` (open)
- `border-left: 1px solid var(--black)`
- `background: var(--sogni-pink)` → `#FFFFFF`
- Text "di Sogni" rotated `90deg`, vertically centered

**Both sidebars:** `cursor: pointer`, `transition-all duration-300 ease-in-out`, uses `AnimatedUnderline` on text with `lineHeight={1}`.

### Menu Overlay (`components/global/MenuOverlay.tsx`)

Opens when a sidebar is clicked. Slides in from the corresponding side.

- `width: 62vw` (open) → `0` (closed)
- `position: fixed`, `z-index: 40`
- `top: var(--header-height)`, `height: calc(100vh - var(--header-height))`
- `background-color: #FFFFFF`
- `transition: all 300ms ease-in-out` (Tailwind `transition-all duration-300`)
- `overflow: hidden`, `pointer-events: auto/none`
- Transparent backdrop at `z-index: 40`, click to close
- ESC key closes the overlay

**Content padding:**
- Left overlay: `paddingLeft: 18px`, `paddingRight: calc(var(--sidebar-width) + 18px)`
- Right overlay: `paddingLeft: calc(var(--sidebar-width) + 18px)`, `paddingRight: 18px`
- `paddingTop: 40px`, `paddingBottom: 40px`

**Heading (h2):** `fontSize: 8.5rem`, uses `.heading-xl` class, wraps in `AnimatedUnderline`

**Nav links (absolutely positioned):**

Left overlay (Stelle):
| Link | Position |
|---|---|
| Wine | `left: 18px`, `top: 50%`, `transform: translateY(-50%)` |
| Olive Oil | `left: 18px`, `bottom: 40px` |
| Shop | `right: calc(var(--sidebar-width) + 18px)`, `bottom: 40px` |

Right overlay (Sogni):
| Link | Position |
|---|---|
| Residencies | `right: 18px`, `top: 50%`, `transform: translateY(-50%)` |
| Archive | `left: calc(var(--sidebar-width) + 18px)`, `bottom: 40px` |
| About us | `right: 18px`, `bottom: 40px` |

---

## 7. Z-Index Stack

| Z-Index | Element | Component |
|---|---|---|
| `100` | Header | `Header.tsx` |
| `50` | Sidebars (left + right) | `SidebarsContainer.tsx` |
| `40` | Menu overlay + backdrop | `MenuOverlay.tsx` |
| `20` | Audio player | `AudioPlayer.tsx` |
| `10` | Quote overlay | `ContentPageTemplate.tsx` |

---

## 8. Animations & Transitions

| Element | Property | Duration | Easing | Delay | Notes |
|---|---|---|---|---|---|
| `.clickable` | `all` | `0.2s` | `ease` | — | Hover underline |
| `AnimatedUnderline` bar | `width` | `0.3s` | `ease` | — | `0` → `100%`, GPU accelerated |
| Sidebar position | `all` | `300ms` | `ease-in-out` | — | Tailwind `transition-all duration-300` |
| Menu overlay width | `all` | `300ms` | `ease-in-out` | — | Tailwind `transition-all duration-300` |
| Entity card width | `width` | `0.4s` | `ease` | — | 50% → 55%/45% on hover |
| Entity card title | `transform, top, left` | `0.5s` | `ease` | — | Rotated → horizontal on hover |
| Entity card description | `opacity` | `0.5s` | `ease` | `0.45s` appear, `0s` disappear | Fade in on hover |
| Entity card nav links | `opacity` | `0.5s` | `ease` | `0.45s` appear, `0s` disappear | Fade in on hover |
| Landing scroll | `scroll-snap-type` | — | — | — | `y mandatory` |

**Interaction rule:** All hover effects use **text underline only** — no background color changes, no scale transforms, no box shadows.

---

## 9. Page Templates

### Template 1: ContentPageTemplate

**File:** `components/templates/ContentPageTemplate.tsx`

**Props:**
```typescript
interface ContentPageTemplateProps {
  title: string
  content: React.ReactNode
  images: { url: string; alt: string }[]
  quote?: React.ReactNode
  mirrored?: boolean    // default false
  audioSrc?: string
}
```

**Text pane:**
- Width: `38%`
- Height: `100%`
- `overflow-y: scroll`, `overflow-x: hidden`, `.no-scrollbar`
- Background: `var(--cream)` → `#FFFFFF`
- Padding: top `40px`, bottom `20px`, left `18px`, right `18px`
- **Title (h1):** class `.heading-xl`, `fontSize: clamp(3rem, 5.5vw, 7.5rem)`, `marginBottom: 160px`
  - Normal: `text-align: right`, `padding-right: 20px`
  - Mirrored: `text-align: left`, `padding-left: 12px`
- **Body text:** class `.body-text`, `padding-left: 12px`, `padding-right: 20px`

**Image pane:**
- Width: `62%`
- Height: `100%`
- `overflow-y: scroll`, `.no-scrollbar`
- Padding: `0` (images bleed to edges)
- `position: relative` (for quote overlay)
- Image dimensions: `width={1200} height={800}`, `sizes="62vw"`, `style={{ width: '100%', height: 'auto', display: 'block' }}`, `unoptimized`
- Image gap: `margin-bottom: 35px` between images (last image has `0`)

**Quote overlay (optional):**
- `position: absolute`, `top: 140px`, `right: 50px`, `left: 35%`
- `z-index: 10`, `color: #FFFFFF`
- `font-size: 1.7rem`, `line-height: 28px`, `text-align: right`
- `pointer-events: none`

**Audio player (optional):** Sticky at bottom of image pane when `audioSrc` provided.

**Mirrored mode:** Image pane renders first (left), text pane second (right). Pane widths swap — text pane becomes 38% and image pane becomes 62% regardless of order.

**Used by:** `/wine`, `/olive-oil`, `/residencies` (mirrored), `/about` (mirrored), `/articles/[slug]` (mirrored when entity is `'sogni'`)

### Template 2: GridPageTemplate

**File:** `components/templates/GridPageTemplate.tsx`

**Props:**
```typescript
interface GridPageTemplateProps {
  title: React.ReactNode     // Can include <br /> for line breaks
  description: React.ReactNode | string
  featuredArticles: Article[]
  mirrored?: boolean         // default false
}
```

**Text pane:** Identical to ContentPageTemplate text pane (38%, same padding, same title/body styling).

**Article pane:**
- Width: `62%`, Height: `100%`
- Renders `<ArticleList>` component at full height

**Container:** `display: flex`, `width: 100%`, `height: calc(100vh - var(--header-height))`, `position: relative`

**Mirrored mode:** Article pane left, text pane right.

**Used by:** `/azienda-agricola`, `/associazione-culturale` (mirrored), `/research-archive` (mirrored)

### Template 3: LandingPageTemplate

**File:** `components/templates/LandingPageTemplate.tsx`

**Props:**
```typescript
interface LandingPageTemplateProps {
  heroImage?: string
  agricolaCard: { title: string; description: string; href: string }
  culturaleCard: { title: string; description: string; href: string }
}
```

**Root container:** `width: 100%`, `height: calc(100vh - var(--header-height))`, `overflow-y: auto`, `scroll-snap-type: y mandatory`, `.no-scrollbar`

**Section 1 — Hero:**
- `width: 100%`, `height: calc(100vh - var(--header-height))`, `min-height: calc(100vh - var(--header-height))`
- `scroll-snap-align: start`, `position: relative`, `overflow: hidden`
- Image: `fill`, `object-fit: cover`, `object-position: center 30%`, `filter: grayscale(100%)`, `priority`, `unoptimized`
- Tagline (h1): `position: absolute`, `top: 40px`, `left: 0`, `width: 38%`, `padding: 0 18px`, inner `padding-left: 12px`
  - `fontSize: clamp(3rem, 5.5vw, 7.5rem)`, `text-align: left`, `color: #FFFFFF`, `margin-bottom: 0`
- Scroll indicator: `position: absolute`, `bottom: 24px`, `left: 50%`, `transform: translateX(-50%)`
  - 3 SVG arrows stacked with `gap: 2px`, `opacity: 0.7`, each arrow dims: `14×8`, `stroke: #FFFFFF`, `strokeWidth: 1`

**Section 2 — Entity cards:**
- Same dimensions as hero, `scroll-snap-align: start`, `display: flex`, `background: #FFFFFF`
- Each card: `width: 50%` (default) → `55%` (hovered) / `45%` (other hovered), `transition: width 0.4s ease`
- Card title: centered + rotated (`-90deg` left, `90deg` right) at rest; moves to `top: 40px`, `left: 30px`, horizontal on hover
  - `fontSize: clamp(1.4rem, 2.2vw, 2rem)`, `letter-spacing: -0.02em`, `line-height: 1.2`
  - `transition: transform 0.5s ease, top 0.5s ease, left 0.5s ease`
- Description: `position: absolute`, `top: 90px`, `left: 30px`, `right: 30px`
  - `opacity: 0` → `1` on hover, `transition: opacity 0.5s ease` with `0.45s` delay on appear
  - `fontSize: clamp(0.9rem, 1.4vw, 1.3rem)`, `line-height: 1.4`
- Nav links: scattered absolutely (mid-vertical at `top: 50%`, bottom at `bottom: 40px`), `30px` from edges
  - `fontSize: 1.7rem`, `line-height: 28px`, same opacity transition as description

---

## 10. Component Reference

### AnimatedUnderline (`components/ui/AnimatedUnderline.tsx`)

```typescript
interface AnimatedUnderlineProps {
  children: React.ReactNode
  active?: boolean       // External control (overrides internal hover)
  lineHeight?: number    // Default 2 (px)
}
```

- Container: `position: relative`, `display: inline-block`
- Underline bar: `position: absolute`, `bottom: -2px`, `left: 0`
  - `width: 0` (hidden) → `100%` (visible), `height: {lineHeight}px`
  - `background: var(--black)`, `transition: width 0.3s ease`
  - `transform: translateZ(0)` (GPU acceleration), `will-change: width`
- When `active` prop is provided: controlled mode (ignores internal hover state)
- When `active` is undefined: uses internal `isHovered` state from `onMouseEnter/Leave`

### ArticleList (`components/article/ArticleList.tsx`)

```typescript
interface ArticleListProps {
  articles: Article[]
}
```

- Container: `.no-scrollbar overflow-y-auto`, `height: 100%`, `background: #FFFFFF`
- Each row: `display: flex`, `width: 100%`, `height: calc((100vh - var(--header-height)) / 2.5)`
- Left half (38%): title + author/year metadata, `padding: 30px` all sides, `flex-direction: column`, `justify-content: space-between`
  - Title: `font-size: 1.7rem`, `line-height: 28px`, wrapped in `AnimatedUnderline`
  - Author: `font-size: 14px`, `line-height: 20px`
  - Year: `font-size: 14px`, `line-height: 20px`
- Right half (62%): landscape image, `padding: 30px`
  - Image: `fill`, `object-cover`, `sizes="(max-width: 768px) 100vw, 31vw"`, `unoptimized`
  - `objectPosition: article.imagePosition || 'center center'`
- Divider between rows: `width: 100%`, `height: 1px`, `background: #000000`
- Entire row clickable → `/articles/{slug}`

### ArticleCard (`components/article/ArticleCard.tsx`)

```typescript
interface ArticleCardProps {
  title: string
  slug: string
  publishDate: string
  featuredImage?: string
  entity?: 'stelle' | 'sogni'
}
```

- Square aspect ratio (`1:1`), `width: 100%`, `overflow: hidden`
- Image: `fill`, `object-cover`, `sizes="(max-width: 768px) 100vw, 50vw"`, `unoptimized`
- Placeholder: `background: var(--cream)` (white, no gradient)
- Title: below image, `font-size: 22px`, `line-height: 1.3`, `margin-top: 5%`
- Title wrapped in `AnimatedUnderline` (active on hover)
- NO border-radius

### ArticleGrid (`components/article/ArticleGrid.tsx`)

```typescript
interface ArticleGridProps {
  articles: Article[]
  scrollable?: boolean
}
```

- `display: grid`, `grid-cols-2`, `.no-scrollbar`
- `background: var(--cream)`, `padding: 40px`, `gap: 40px`, `height: calc(100vh - 55px)`
- Non-scrollable: `overflow: hidden`, `grid-rows-2` (2×2 grid, max 4 articles)
- Scrollable: `overflow-y: scroll` (unlimited articles)
- Placeholder cells: `aspect-square`, `background: var(--cream)`

### FilterPills (`components/article/FilterPills.tsx`)

```typescript
interface FilterPillsProps {
  activeFilter: 'all' | 'stelle' | 'sogni'
  onChange: (filter: 'all' | 'stelle' | 'sogni') => void
}
```

- Container: `flex`, `items-center`, `gap-2`
- Label + buttons: `font-size: 20px`
- Button padding: `10px 20px`
- ⚠️ Uses `rounded-[20px]` which violates the no-rounded-corners rule
- Active state uses entity color variables (all currently white) + `font-bold`

### AudioPlayer (`components/ui/AudioPlayer.tsx`)

```typescript
interface AudioPlayerProps {
  src: string
  title: string
}
```

- `position: sticky`, `bottom: 0`, `z-index: 20`
- `height: 46px`, `background: #FFFFFF`
- `display: flex`, `align-items: center`, `gap: 12px`, `padding-left: 14px`
- Play/pause SVG icons: `14×16` viewport, `fill: #000000`
- Scrubber track: `height: 2px`, `background: #000000`, `flex: 1`, `min-width: 60px`
- Progress bar: `height: 6px`, `background: #000000`
- Playhead: `width: 10px`, `height: 10px`, `border-radius: 50%` (acceptable exception for audio control)
- Time display: `font-size: 0.8rem`, `font-variant-numeric: tabular-nums`

### ProductLinksSection (`components/ui/ProductLinksSection.tsx`)

**Status: DEPRECATED — not currently used in any template or page. Kept for future redesign.**

---

## 11. Page Route Map

| Route | Template | Mirrored | Entity | Notes |
|---|---|---|---|---|
| `/` | LandingPageTemplate | — | — | Homepage, scroll-snap, hero + entity cards |
| `/azienda-agricola` | GridPageTemplate | `false` | stelle | ArticleList in right pane |
| `/associazione-culturale` | GridPageTemplate | `true` | sogni | ArticleList in left pane |
| `/wine` | ContentPageTemplate | `false` | stelle | 5 images |
| `/olive-oil` | ContentPageTemplate | `false` | stelle | 4 images |
| `/residencies` | ContentPageTemplate | `true` | sogni | 4 images |
| `/about` | ContentPageTemplate | `true` | sogni | 5 images |
| `/research-archive` | GridPageTemplate | `true` | both | Full article list, mirrored |
| `/articles/[slug]` | ContentPageTemplate | dynamic | dynamic | `mirrored={entity === 'sogni'}`, optional `audioSrc` |

---

## 12. Data Types

From `lib/types.ts`:

```typescript
export interface Article {
  _id?: string
  title: string
  slug: string
  publishDate: string
  featuredImage?: string
  entity?: 'stelle' | 'sogni'
  author?: string
  imagePosition?: string     // CSS object-position value, e.g. 'center 15%'
}
```

---

## 13. Project Structure

```
sentieri-website/
├── app/
│   ├── layout.tsx                    # Root layout (header, sidebars, main shell)
│   ├── page.tsx                      # Homepage (LandingPageTemplate)
│   ├── globals.css                   # CSS variables, @font-face, @theme inline, typography classes
│   ├── azienda-agricola/
│   │   └── page.tsx                  # GridPageTemplate
│   ├── associazione-culturale/
│   │   └── page.tsx                  # GridPageTemplate (mirrored)
│   ├── wine/
│   │   └── page.tsx                  # ContentPageTemplate
│   ├── olive-oil/
│   │   └── page.tsx                  # ContentPageTemplate
│   ├── residencies/
│   │   └── page.tsx                  # ContentPageTemplate (mirrored)
│   ├── about/
│   │   └── page.tsx                  # ContentPageTemplate (mirrored)
│   ├── research-archive/
│   │   └── page.tsx                  # GridPageTemplate (mirrored)
│   └── articles/
│       └── [slug]/page.tsx           # ContentPageTemplate (dynamic mirrored)
├── components/
│   ├── global/
│   │   ├── Header.tsx                # Fixed header with centered "sentieri" logo
│   │   ├── SidebarsContainer.tsx     # Both sidebars + menu overlays, unified state
│   │   └── MenuOverlay.tsx           # Slide-in menu with scattered nav links
│   ├── templates/
│   │   ├── ContentPageTemplate.tsx   # Text + image panes, quote overlay, audio
│   │   ├── GridPageTemplate.tsx      # Text + article list panes
│   │   └── LandingPageTemplate.tsx   # Hero + entity cards with scroll snap
│   ├── article/
│   │   ├── ArticleCard.tsx           # Square card with image + title
│   │   ├── ArticleGrid.tsx           # 2×2 grid of ArticleCards
│   │   ├── ArticleList.tsx           # Horizontal row layout (38/62 split per row)
│   │   └── FilterPills.tsx           # Entity filter buttons
│   └── ui/
│       ├── AnimatedUnderline.tsx     # Shared hover underline animation
│       ├── AudioPlayer.tsx           # Sticky audio player with scrubber
│       └── ProductLinksSection.tsx   # DEPRECATED — not in use
├── lib/
│   ├── articles.tsx                  # Hardcoded article data + getArticleBySlug()
│   └── types.ts                     # Article interface
├── public/
│   ├── fonts/                        # Noi Grotesk Trial (.ttf + .woff2), deprecated fonts
│   └── images/                       # Article and page images
├── sanity/                           # Sanity studio config + schemas (not yet integrated)
├── temporary_screenshots/            # Visual comparison screenshots (gitignored)
├── next.config.ts                    # Image remote patterns (unsplash)
└── postcss.config.mjs                # @tailwindcss/postcss plugin
```

**Files that do NOT exist** (referenced in old CLAUDE.md):
- `components/global/LanguageToggle.tsx` — never created
- `components/global/SidebarLeft.tsx` — sidebar logic is in `SidebarsContainer.tsx`
- `components/global/SidebarRight.tsx` — sidebar logic is in `SidebarsContainer.tsx`
- `lib/sanity.ts` — may have been removed or never created
- `lib/shopify.ts` — may have been removed or never created

---

## 14. Mobile Responsive Strategy

See @MOBILE.md for the full mobile responsive strategy.

---

## 15. Component Conventions

- All components are React functional components with TypeScript
- Use Tailwind utility classes — minimize inline `style` attributes (note: current codebase uses heavy inline styles)
- Use CSS custom properties (defined in `globals.css`) for repeated design tokens
- All interactive elements must be keyboard-accessible
- Images: use `next/image` with proper `alt` text, `object-fit: cover` where needed, `unoptimized`
- Scrollbar styling: `.no-scrollbar` class hides native scrollbars
- Use Tailwind responsive prefixes (`md:`, `lg:`) for mobile adaptations
- Never rely on hover states for essential functionality — all information must be accessible without hover on touch devices

---

## 16. DO NOT

- Use any color other than black and white (no grays, no accent colors, no entity colors)
- Use rounded corners, box shadows, or drop shadows anywhere
- Use gradient backgrounds
- Use Inter, Roboto, Arial, system-ui, Space Grotesk, Abordage, Meridien, or any generic font
- Use component libraries (shadcn, MUI, Radix, Chakra, etc.)
- Add placeholder images — use solid white blocks or leave empty
- Change the pane ratio (38/62) on desktop without explicit instruction
- Hardcode article/product content — structure for future CMS integration
- Use `<img>` tags — always use `next/image`
- Add animations beyond simple CSS transitions (no Framer Motion, no GSAP, no spring physics)
- Break the independent scrolling behavior of the two panes on desktop
- Touch Sanity integration until layouts are fully finalized
- Use `display: none` to hide content from screen readers — use `sr-only` pattern when hiding visually
- Rely on hover states for essential functionality — all info must be accessible on touch devices

---

## 17. Known Issues & Technical Debt

1. **`heading-lg` letter-spacing bug:** `-1.25rem` equals -20px, which is extremely negative. Likely should be `-0.125rem` or `-1.25px`. Verify with designer before fixing.
2. **FilterPills `rounded-[20px]`:** Violates the no-rounded-corners design rule. Should be addressed.
3. **No LanguageToggle or SHOP link:** Referenced in old CLAUDE.md but never implemented. Header contains only the centered logo.
4. **AudioPlayer playhead `border-radius: 50%`:** Acceptable exception for audio control UI.
5. **Heavy inline styles:** Most components use inline `style` objects rather than Tailwind classes, making responsive design harder. Consider migrating to Tailwind classes during mobile work.
6. **ProductLinksSection:** Component file exists but is unused. Kept for future redesign.
7. **All article data hardcoded:** In page files and `lib/articles.tsx`. Will be replaced with Sanity CMS data.
8. **Deprecated font files:** Abordage and Meridien font files still in `/public/fonts/`. Can be removed.

---

## 18. Completed Work (as of 2026-03-23)

1. **Font switch to Noi Grotesk:** Replaced Abordage + Meridien with Noi Grotesk Trial Regular for all text site-wide. Fixed Tailwind CSS 4 font override issue.
2. **B&W color scheme:** All backgrounds white, all text black. All entity color variables map to white.
3. **Pane ratio:** 38/62 split implemented across all templates.
4. **CLAUDE.md violations fixed:** Removed `borderRadius` from ArticleCard, removed gradient backgrounds, replaced `<img>` with `next/image`.
5. **ProductLinksSection removed:** Removed from templates and pages. Component file kept.
6. **Quote overlay:** ContentPageTemplate supports optional `quote` prop with white text over image pane.
7. **Content page layout refined:** Title position, padding, spacing match designer mockups. Mirrored pages have left-aligned titles.
8. **Residencies → Residency:** Page title changed to singular per designer mockup.
9. **AnimatedUnderline extraction:** Shared component created for hover underline.
10. **ArticleList component:** Horizontal row layout (38/62 per row) replacing the 2×2 grid for GridPageTemplate.
11. **AudioPlayer component:** Sticky audio player with play/pause, scrubber, and time display.
12. **Landing page redesign:** Hero with grayscale image + white tagline, entity cards with hover-reveal content and scattered nav links.

---

## 19. Remaining Work

1. **Mobile responsive implementation:** The primary next milestone. See Section 14 for full strategy.
2. **Article page quote overlay:** Per-article quote support (similar to wine page).
3. **Title overflow on long titles:** Multi-word article titles can overflow at `clamp(3rem, 5.5vw, 7.5rem)`.
4. **SHOP link / Language toggle:** Not yet implemented — may be added to header later.
5. **Sanity CMS integration:** Deferred until layouts (including mobile) are finalized.
6. **Shopify integration:** Not yet started.
7. **Deployment to Vercel:** Not yet done.
8. **Design reference screenshots:** Comparison screenshots in `temporary_screenshots/` (gitignored). Reference mockups in `SENTIERI_PROJECT/02_DESIGN_REFERENCES/newDesigns/`.

---

## 20. Git Workflow

- Commit after each meaningful change with descriptive messages
- Branch naming: `feature/[description]` or `fix/[description]`
- Keep commits atomic — one logical change per commit

---

## 21. Handwritten / Drawn Assets

The site uses hand-drawn assets for:
- Article card illustrations
- Hero illustration (landing page)

The logo "sentieri" and sidebar text ("di Stelle", "di Sogni") are currently rendered as styled text, not hand-drawn assets.

These are custom assets — do not generate or substitute them. Use placeholder white blocks where assets are missing.
