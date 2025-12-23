# SENTIERI WEBSITE - COMPREHENSIVE TECHNICAL SPECIFICATION

**Project:** Sentieri Farm & Cultural Hub Website  
**Location:** Loreto Aprutino, Abruzzo, Italy  
**Date:** December 2025  
**Version:** 1.0 - Initial Prototype Specification

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Technical Architecture](#2-technical-architecture)
3. [Design System](#3-design-system)
4. [Global Layout Components](#4-global-layout-components)
5. [Page Templates](#5-page-templates)
6. [Sanity CMS Schema](#6-sanity-cms-schema)
7. [Shopify Integration](#7-shopify-integration)
8. [Implementation Roadmap](#8-implementation-roadmap)
9. [Open Questions for Client](#9-open-questions-for-client)

---

## 1. PROJECT OVERVIEW

### 1.1 What is Sentieri?

Sentieri is a countryside-based organization in Abruzzo, Italy that combines:
- **Regenerative agriculture** (wine + olive oil production) - **"Di Stelle"**
- **Cultural/artistic collective** (residencies, events, ecology) - **"Di Sogni"**

The website must communicate both sides clearly with a modern + rustic + experimental aesthetic and strong editorial feel.

### 1.2 Core Requirements

**Primary Goals:**
- Present two distinct entities (Azienda Agricola / Associazione Culturale) with clear visual separation
- Editorial "research/archive" section with tagging and filtering
- E-commerce capability (Shopify integration - Phase 2)
- Bilingual support (English / Italian)
- Strong, unique visual identity with hand-drawn elements

**Target Audience:**
- Natural wine / high-quality olive oil enthusiasts
- Experimental art and culture community
- People interested in rural/slow living, ecology, community

### 1.3 Project Scope - Phase 1 (Prototype)

**In Scope:**
- Core page templates (3 templates covering all pages)
- Sanity CMS integration for content management
- Article system with filtering
- Responsive layout (mobile strategy TBD with client)
- Bilingual structure (translations TBD)

**Out of Scope (Phase 2):**
- Full Shopify integration (start with basic approach)
- Contact forms
- Newsletter integration
- Visit booking system
- Advanced search functionality

---

## 2. TECHNICAL ARCHITECTURE

### 2.1 Technology Stack

**Frontend Framework:**
- **Next.js 14+** (App Router)
  - Server-side rendering for SEO
  - Excellent for content-heavy sites
  - Easy Shopify integration options
  - File-based routing

**CMS:**
- **Sanity.io**
  - Clean Studio UI for content editors
  - Excellent multilingual support
  - Real-time preview capability
  - Portable Text for rich content
  - Flexible schema for our templates

**Styling:**
- **Tailwind CSS** + Custom CSS
  - Quick implementation of design system
  - Custom CSS for unique interactions (dual-pane scrolling, sidebar menus)
  - Easy to maintain spacing/color tokens

**E-commerce (Phase 1 - Lightweight):**
- **Shopify Buy Button** embedded in custom design
  - Products managed in Shopify admin
  - Styled to match site design
  - Phase 2: Migrate to Shopify Storefront API if needed

**Hosting:**
- **Vercel** (recommended for Next.js)
  - Automatic deployments
  - Excellent performance
  - Free tier suitable for launch

### 2.2 Project Structure

```
sentieri-website/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout (header, sidebars)
│   ├── page.tsx                 # Homepage (Template 3)
│   ├── azienda-agricola/        # Entity overview (Template 2)
│   ├── associazione-culturale/  # Entity overview (Template 2)
│   ├── products/                # Product pages (Template 1)
│   │   ├── wine/
│   │   └── olive-oil/
│   ├── archive/                 # Research archive (Template 2b)
│   └── articles/                # Individual articles (Template 1)
│       └── [slug]/
├── components/
│   ├── global/
│   │   ├── Header.tsx
│   │   ├── SidebarLeft.tsx
│   │   ├── SidebarRight.tsx
│   │   ├── MenuOverlay.tsx
│   │   └── LanguageToggle.tsx
│   ├── templates/
│   │   ├── ContentPageTemplate.tsx    # Template 1
│   │   ├── GridPageTemplate.tsx       # Template 2
│   │   └── LandingPageTemplate.tsx    # Template 3
│   ├── article/
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleGrid.tsx
│   │   └── FilterPills.tsx
│   └── ui/
│       └── [reusable UI components]
├── lib/
│   ├── sanity.ts                # Sanity client config
│   └── shopify.ts               # Shopify integration
├── sanity/                      # Sanity Studio
│   ├── schemas/
│   │   ├── article.ts
│   │   ├── page.ts
│   │   └── product.ts
│   └── sanity.config.ts
└── styles/
    └── globals.css              # Custom CSS, Tailwind base
```

### 2.3 Key Technical Challenges

**Challenge 1: Dual-Pane Independent Scrolling**
- Each pane needs its own scroll context
- Requires careful CSS with `overflow-y: scroll` on each pane
- Mouse wheel events must respect hover position

**Solution:**
```jsx
<div className="content-wrapper">
  <div className="left-pane" style={{ overflowY: 'scroll', height: 'calc(100vh - 55px)' }}>
    {/* Left content */}
  </div>
  <div className="right-pane" style={{ overflowY: 'scroll', height: 'calc(100vh - 55px)' }}>
    {/* Right content */}
  </div>
</div>
```

**Challenge 2: Sidebar Menu Overlays**
- Slide-in animations from left/right
- Click-outside-to-close functionality
- Keyboard accessibility (ESC key)

**Solution:** Use React state + CSS transitions or Framer Motion

**Challenge 3: Responsive Behavior**
- Desktop: Dual-pane layout
- Mobile: TBD with client (likely stack vertically)

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette

```css
/* Primary Colors */
--cream: #FFF8E7;           /* Main background, content areas */
--header-beige: #ECE1B9;    /* Header background */
--stelle-green: #CFDCCB;    /* Di Stelle (agriculture) - left sidebar */
--sogni-pink: #FEECE9;      /* Di Sogni (culture) - right sidebar */
--black: #000000;           /* Text, borders, illustrations */

/* Usage */
- Cream: Primary background for all content panes
- Header beige: Top navigation bar only
- Stelle green: Left sidebar, agriculture-related elements, filter active state
- Sogni pink: Right sidebar, culture-related elements, filter active state
- Black: All text, dividers, borders, hand-drawn illustrations
```

### 3.2 Typography

**Fonts:**
- **Abordage Regular** - Display/Headlines (H1)
- **Meridien LT Std Roman** - Body text, subheadings (H2, H3, P)

**Font Stack (with fallbacks):**
```css
--font-display: 'Abordage', Georgia, serif;
--font-body: 'Meridien LT Std', 'Times New Roman', serif;
```

**Type Scale:**

| Element | Font | Size | Letter Spacing | Line Height | Usage |
|---------|------|------|----------------|-------------|-------|
| H1 | Abordage Regular | 80pt | -20 | 75pt | Page titles |
| H2 | Meridien LT Std Roman | 40pt | -20 | 37pt | Section headings |
| H3 | Meridien LT Std Roman | 28pt | 0 | 32pt | Card titles, menu items |
| Body | Meridien LT Std Roman | 20pt | 0 | 21pt | Paragraphs, descriptions |
| Small | Meridien LT Std Roman | 16pt | 0 | 18pt | Date badges, captions |

**Note:** Convert pt to px/rem for web:
- 80pt ≈ 107px ≈ 6.65rem
- 40pt ≈ 53px ≈ 3.3rem
- 28pt ≈ 37px ≈ 2.3rem
- 20pt ≈ 27px ≈ 1.7rem
- 16pt ≈ 21px ≈ 1.3rem

### 3.3 Spacing System

**Base Unit:** 4px

**Spacing Scale:**
```css
--space-xs: 8px;    /* 2 units */
--space-sm: 12px;   /* 3 units */
--space-md: 18px;   /* 4.5 units */
--space-lg: 40px;   /* 10 units */
--space-xl: 60px;   /* 15 units */
--space-2xl: 80px;  /* 20 units */
--space-3xl: 110px; /* 27.5 units */
--space-4xl: 130px; /* 32.5 units */
```

**Component-Specific Spacing:**
- Header height: `55px`
- Sidebar width: `46px`
- Content padding (left pane left): `18px`
- Content padding (left pane right): `130px`
- Content padding (left pane top): `110px`
- Content padding (left pane bottom): `80px`
- Content padding (right pane): `40px` (all sides when grid, 0 top/bottom when images)
- H1 to paragraph: `45px`
- Between paragraphs: `40px`
- Between images: `35px`
- Grid gap (article cards): `40px`

### 3.4 Layout Grid

**Desktop Layout:**
```
Total viewport width = 100vw
├── Left sidebar: 46px
├── Content area: calc(100vw - 92px)
│   ├── Left pane: 50%
│   └── Right pane: 50%
└── Right sidebar: 46px

Total viewport height = 100vh
├── Header: 55px
└── Content: calc(100vh - 55px)
```

**Key Measurements:**
- Sidebar width: `46px`
- Header height: `55px`
- Center divider: `1px solid black`
- Content area width: `calc(100vw - 92px)` (accounting for both sidebars)

### 3.5 Interaction States

**Global Hover Pattern:**
All clickable elements use **text underline** on hover (no background changes).

```css
.clickable:hover {
  text-decoration: underline;
  cursor: pointer;
}
```

**Specific Hover Behaviors:**
- **Article cards:** Title underlines when hovering anywhere on card
- **Navigation links:** Underline on hover
- **Filter pills:** Text underlines on hover, background changes when active
- **Entity cards (homepage):** Heading underlines on hover
- **Wine/Olive oil sections:** Heading underlines on hover
- **Menu items:** Underline on hover

**Active States:**
- **Filter pills:** Filled with entity color (green/pink/cream)
- **Language toggle:** Current language bold or underlined
- **Current page:** Could use underline or bold in menu

**Transitions:**
```css
transition: all 0.2s ease;
```

### 3.6 Hand-Drawn Elements

**Required Assets:**
1. **Sentieri logo** (header) - Handwritten text
2. **"di Stelle"** (left sidebar) - Rotated -90deg
3. **"di Sogni"** (right sidebar) - Rotated 90deg
4. **Hero illustration** (homepage) - Large landscape drawing
5. **Article illustrations** - Various hand-drawn nature elements

**Format:**
- **Preferred:** SVG (scalable, small file size)
- **Fallback:** High-res PNG with transparent background
- **Process:** Scan → trace in Illustrator → export SVG → optimize with SVGO

**Placeholder Strategy:**
For prototype, use:
- Text placeholders for handwritten elements
- Placeholder images for illustrations
- Replace with actual assets when client provides

---

## 4. GLOBAL LAYOUT COMPONENTS

### 4.1 Header

**Specifications:**
```css
height: 55px;
background: #ECE1B9;
border-bottom: 1px solid #000000;
position: fixed (or sticky);
z-index: 100;
width: 100%;
```

**Content Layout:**
```
┌────────────────────────────────────────────────┐
│ [Sentieri Logo]              [SHOP] [EN / IT]  │
└────────────────────────────────────────────────┘
```

**Elements:**
- **Left:** Sentieri logo (handwritten SVG/PNG)
  - Position: 18px from left edge
  - Vertical center aligned
- **Right:** 
  - "SHOP" link → navigates to shop page (TBD) or Shopify store
  - Language toggle: "EN / IT"
  - Spacing: 24px from right edge, 20px between elements

**Behavior:**
- Fixed to top of viewport (stays visible on scroll)
- Links have hover underline
- Language toggle shows current language (bold or underlined)

**Component Structure:**
```jsx
<header className="global-header">
  <div className="logo">
    <Link href="/">
      <img src="/logo.svg" alt="Sentieri" />
    </Link>
  </div>
  <nav className="header-nav">
    <Link href="/shop">SHOP</Link>
    <LanguageToggle />
  </nav>
</header>
```

### 4.2 Sidebars

**Left Sidebar (Di Stelle):**
```css
width: 46px;
background: #CFDCCB;
height: calc(100vh - 55px);
position: fixed;
left: 0;
top: 55px;
z-index: 50;
cursor: pointer;
```

**Text:** "di Stelle"
- Transform: `rotate(-90deg)`
- Orientation: "e" points upward toward header
- Vertical center aligned
- Font: Handwritten (SVG/PNG)

**Right Sidebar (Di Sogni):**
```css
width: 46px;
background: #FEECE9;
height: calc(100vh - 55px);
position: fixed;
right: 0;
top: 55px;
z-index: 50;
cursor: pointer;
```

**Text:** "di Sogni"
- Transform: `rotate(90deg)`
- Orientation: "i" points downward
- Vertical center aligned
- Font: Handwritten (SVG/PNG)

**Behavior:**
- Entire sidebar is clickable
- Click → Opens menu overlay (see section 4.3)
- Hover: Subtle visual cue (optional: slight opacity change)

### 4.3 Menu Overlays

**Di Stelle Menu (Left):**

**Trigger:** Click left sidebar

**Specifications:**
```css
width: 320px (or 40vw);
height: 100vh;
background: #CFDCCB;
position: fixed;
left: 0;
top: 0;
z-index: 200;
padding: 60px 40px;
```

**Animation:** Slide in from left
```css
transform: translateX(-100%);  /* Initial state */
transform: translateX(0);      /* Active state */
transition: transform 0.3s ease;
```

**Menu Items:**
```
Azienda Agricola
Wine
Olive oil
Shop
```

**Styling:**
- Font: Meridien LT Std Roman, 28-32pt
- Line-height: 1.4
- Spacing: 24px between items
- Hover: Underline
- Each item is a link to respective page

**Close Triggers:**
- Click outside overlay (on backdrop)
- Press ESC key
- Click close button (X in top right, optional)

---

**Di Sogni Menu (Right):**

**Trigger:** Click right sidebar

**Specifications:**
```css
width: 320px (or 40vw);
height: 100vh;
background: #FEECE9;
position: fixed;
right: 0;
top: 0;
z-index: 200;
padding: 60px 40px;
```

**Animation:** Slide in from right
```css
transform: translateX(100%);   /* Initial state */
transform: translateX(0);      /* Active state */
transition: transform 0.3s ease;
```

**Menu Items:**
```
Associazione Culturale
Residencies
Community
About us
```

**Styling:** Same as Di Stelle menu

**Close Triggers:** Same as Di Stelle menu

---

**Backdrop/Overlay:**
```css
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.3);
z-index: 150;
```

**Component Structure:**
```jsx
<MenuOverlay 
  isOpen={isMenuOpen}
  side="left" // or "right"
  onClose={() => setIsMenuOpen(false)}
>
  <nav>
    <Link href="/azienda-agricola">Azienda Agricola</Link>
    <Link href="/wine">Wine</Link>
    <Link href="/olive-oil">Olive oil</Link>
    <Link href="/shop">Shop</Link>
  </nav>
</MenuOverlay>
```

### 4.4 Language Toggle

**Position:** Header, right side

**Display:** "EN / IT"

**Behavior:**
- Current language: Bold or underlined
- Click to switch language
- Updates all content on page

**Implementation (Next.js):**
- Use next-intl or similar i18n library
- Language preference stored in cookie/localStorage
- Sanity queries filtered by language

**Initial Scope:**
- Build structure for bilingual content
- Populate with English content only
- Add Italian translations later

---

## 5. PAGE TEMPLATES

### 5.1 Template 1: Content Page (Dual-Pane, Text + Images)

**Used For:**
- Product pages (Wine, Olive Oil)
- Individual article pages
- Informational pages (Residencies, Community, About Us, Heritage, Ecology, etc.)

**Reference Images:**
- `Olive_oil.jpg` - Primary reference for this template

---

**Layout Structure:**
```
┌────────────────────────────────────────────────┐
│  HEADER (55px)                                  │
├──┬─────────────────────────┬──────────────────┬──┤
│  │ LEFT PANE (Text)        │ RIGHT PANE (Img) │  │
│L │                         │                  │R │
│  │ [Independently          │ [Independently   │  │
│S │  scrollable]            │  scrollable]     │S │
│i │                         │                  │i │
│d │ H1: Page Title          │ [Image 1]        │d │
│e │   ↓                     │   ↓              │e │
│b │ Paragraph 1             │ [Image 2]        │b │
│a │   ↓                     │   ↓              │a │
│r │ Paragraph 2             │ [Image 3]        │r │
│  │   ↓                     │                  │  │
│  │ [Pull quote]            │                  │  │
│  │   ↓                     │                  │  │
│  │ Paragraph 3             │                  │  │
└──┴─────────────────────────┴──────────────────┴──┘
```

---

**Left Pane Specifications:**

```css
.left-pane {
  width: 50%;
  height: calc(100vh - 55px);
  overflow-y: scroll;
  background: #FFF8E7;
  padding-left: 18px;
  padding-right: 130px;
  padding-top: 110px;
  padding-bottom: 80px;
}
```

**Content Structure:**
```
[110px top padding]
↓
H1: Page Title (80pt Abordage)
↓ [45px]
Paragraph 1 (20pt Meridien)
↓ [40px]
Paragraph 2 (20pt Meridien)
↓ [40px]
[Pull quote - centered, italic] (optional)
↓ [40px]
Paragraph 3 (20pt Meridien)
↓ [continues...]
↓ [80px bottom padding]
```

**Typography:**
- H1: 80pt Abordage, letter-spacing: -20, line-height: 75pt
- Body: 20pt Meridien, letter-spacing: 0, line-height: 21pt
- Pull quotes: 20pt Meridien Italic, centered, increased line-height

**Scrolling:**
- Independent scroll (does not affect right pane)
- Smooth scroll behavior

---

**Right Pane Specifications:**

```css
.right-pane {
  width: 50%;
  height: calc(100vh - 55px);
  overflow-y: scroll;
  background: #FFF8E7;
  padding: 0 40px; /* No top/bottom padding for images to bleed */
}
```

**Image Layout:**
```
[Image 1 - full width, bleeds to top]
↓ [35px gap]
[Image 2 - full width]
↓ [35px gap]
[Image 3 - full width]
↓ [35px gap]
[Image 4 - full width]
...
```

**Image Specifications:**
- Width: 100% of pane (minus 80px for side padding)
- Height: Auto (maintain aspect ratio)
- Object-fit: cover (if fixed heights needed)
- Vertical spacing: 35px between images

**Scrolling:**
- Independent scroll (does not affect left pane)
- Smooth scroll behavior

---

**Center Divider:**
```css
.center-divider {
  position: absolute;
  width: 1px;
  height: 100%;
  background: #000000;
  left: 50%;
  transform: translateX(-50%);
}
```

---

**Responsive Behavior (TBD with Client):**
- Desktop (>1024px): Dual-pane as specified
- Tablet/Mobile: Likely stack vertically (left pane on top, right pane below)

---

**Example Component Structure:**

```jsx
<ContentPageTemplate>
  <LeftPane>
    <h1>{page.title}</h1>
    <PortableText value={page.content} />
  </LeftPane>
  
  <CenterDivider />
  
  <RightPane>
    {page.images.map((image, i) => (
      <img key={i} src={image.url} alt={image.alt} />
    ))}
  </RightPane>
</ContentPageTemplate>
```

---

**Sanity Content Model:**
```javascript
{
  name: 'contentPage',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
    { name: 'images', type: 'array', of: [{ type: 'image' }] },
    // ... metadata, SEO, etc.
  ]
}
```

---

### 5.2 Template 2: Grid Page (Entity Overviews)

**Used For:**
- Azienda Agricola overview page
- Associazione Culturale overview page

**Reference Images:**
- `Azienda_Agricola.jpg`
- `Associazione_Culturale.jpg`

---

**Layout Structure:**
```
┌────────────────────────────────────────────────┐
│  HEADER (55px)                                  │
├──┬─────────────────────────┬──────────────────┬──┤
│  │ LEFT PANE (Text)        │ RIGHT PANE       │  │
│L │                         │ (Article Grid)   │R │
│  │ H1: Entity Name         │                  │  │
│S │   ↓                     │ [Card] [Card]    │S │
│i │ Tagline (italic)        │                  │i │
│d │   ↓                     │ [Card] [Card]    │d │
│e │ Paragraph 1             │                  │e │
│b │   ↓                     │                  │b │
│a │ [Pull quote]            │                  │a │
│r │   ↓                     │                  │r │
│  │ Paragraph 2             │                  │  │
│  │   ↓                     │                  │  │
│  │ [--- scroll down ---]   │                  │  │
│  │   ↓                     │                  │  │
│  │ [Divider line]          │                  │  │
│  │ [Wine]    [Olive oil]   │                  │  │
│  │ (2-column section)      │                  │  │
└──┴─────────────────────────┴──────────────────┴──┘
```

---

**Left Pane Specifications:**

Same padding as Template 1:
```css
.left-pane {
  padding-left: 18px;
  padding-right: 130px;
  padding-top: 110px;
  padding-bottom: 80px;
  overflow-y: scroll;
}
```

**Content Structure:**
```
[110px top padding]
↓
H1: Azienda Agricola / Associazione Culturale (80pt Abordage)
↓ [20px]
Tagline: "At Sentieri, agriculture is a form of imagination." (20pt Meridien Italic)
↓ [45px]
Paragraph 1 (20pt Meridien)
↓ [40px]
Pull Quote (centered, italic)
↓ [40px]
Paragraph 2 (20pt Meridien)
↓ [lots of vertical space - user scrolls]
↓
[--- Below fold ---]
↓ [60px]
[Horizontal divider - 1px black, full width]
↓ [60px]
[Two-column section:]
  Wine (H2 - 40pt)     |     Olive oil (H2 - 40pt)
  [snippet text]       |     [snippet text]
  [clickable column]   |     [clickable column]
↓ [80px bottom padding]
```

**Wine/Olive Oil Section:**
- Appears below fold (user must scroll down left pane)
- Two equal-width columns
- Each column is fully clickable → navigates to product page
- Column gap: 40px
- Hover state: Heading underlines

```css
.product-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  border-top: 1px solid #000;
  padding-top: 60px;
}

.product-column:hover h2 {
  text-decoration: underline;
}
```

---

**Right Pane Specifications:**

**Article Grid:**
```css
.right-pane-grid {
  padding: 40px; /* Equal on all sides */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;
  height: calc(100vh - 55px);
  overflow: hidden; /* No scroll - always shows 4 cards */
}
```

**Grid Layout:**
- 2 columns × 2 rows = **4 article cards**
- Cards are square (1:1 aspect ratio)
- Equal spacing all around: 40px padding + 40px gaps

**Article Card Structure:**
```
┌─────────────────────┐
│                     │
│  [Illustration]     │
│                     │
│  ┌──────────────┐   │
│  │ 29.10.2025   │   │ ← Date badge (bottom left)
│  └──────────────┘   │
└─────────────────────┘
Article Title
```

**Card Specifications:**
- **Aspect ratio:** 1:1 (square)
- **Background:** Hand-drawn illustration (fills card)
- **Date badge:**
  - Position: Bottom left, 12px from edges
  - Background: `rgba(255, 248, 231, 0.9)` (semi-transparent cream)
  - Padding: 8px 12px
  - Font: 16pt Meridien
  - Border-radius: 4px
- **Title:**
  - Position: Below card, 12px spacing
  - Font: 24-28pt Meridien
  - Color: Black
  - Hover: Underline

**Card Interaction:**
- Hover over card → Title underlines
- Click anywhere on card → Navigate to article page
- Cursor: pointer

```css
.article-card {
  aspect-ratio: 1 / 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.article-card:hover .article-title {
  text-decoration: underline;
}
```

---

**Content Strategy:**
- **4 featured articles** shown in grid
- Articles can be:
  - Manually curated (marked as "featured" in CMS)
  - Or: 4 most recent articles from entity category
  - Different featured articles for Azienda vs Associazione

---

**Example Component Structure:**

```jsx
<GridPageTemplate>
  <LeftPane>
    <h1>{entity.name}</h1>
    <p className="tagline">{entity.tagline}</p>
    <PortableText value={entity.description} />
    
    {/* Below fold */}
    <ProductSection>
      <ProductColumn href="/wine">
        <h2>Wine</h2>
        <p>{wineSnippet}</p>
      </ProductColumn>
      <ProductColumn href="/olive-oil">
        <h2>Olive oil</h2>
        <p>{oliveOilSnippet}</p>
      </ProductColumn>
    </ProductSection>
  </LeftPane>
  
  <RightPane>
    <ArticleGrid articles={featuredArticles} />
  </RightPane>
</GridPageTemplate>
```

---

### 5.3 Template 2b: Archive Page (Research Archive)

**Used For:**
- Research Archive / All Articles page

**Similar to Template 2, but with key differences:**
- Right pane **scrolls** (shows all articles, not just 4)
- Left pane includes **filter controls**
- Simpler left pane content (no product section below fold)

---

**Layout Structure:**
```
┌────────────────────────────────────────────────┐
│  HEADER (55px)                                  │
├──┬─────────────────────────┬──────────────────┬──┤
│  │ LEFT PANE               │ RIGHT PANE       │  │
│L │                         │ (Scrollable Grid)│R │
│  │ H1: Research Archive    │                  │  │
│S │   ↓                     │ [Card] [Card]    │S │
│i │ [Filter Pills]          │                  │i │
│d │  ● All  ○ Di Stelle     │ [Card] [Card]    │d │
│e │         ○ Di Sogni      │                  │e │
│b │   ↓                     │ [Card] [Card]    │b │
│a │ Intro paragraph         │      ↓           │a │
│r │                         │ [Scrolls down]   │r │
│  │                         │      ↓           │  │
│  │                         │ [Card] [Card]    │  │
│  │                         │                  │  │
│  │                         │ [Card] [Card]    │  │
└──┴─────────────────────────┴──────────────────┴──┘
```

---

**Left Pane Content:**

```
[110px top padding]
↓
H1: Research Archive (80pt Abordage)
↓ [20px]
[Filter Pills Component]
  [All] [Di Stelle] [Di Sogni]
↓ [40px]
Intro paragraph (optional):
"Exploring the intersections of agriculture, art, 
ecology, and community through research and reflection."
↓ [80px bottom padding]
```

**Filter Pills Component:**

```jsx
<div className="filter-pills">
  <span className="filter-label">Filter by:</span>
  <button 
    className={activeFilter === 'all' ? 'pill active' : 'pill'}
    onClick={() => setActiveFilter('all')}
  >
    All
  </button>
  <button 
    className={activeFilter === 'stelle' ? 'pill active stelle' : 'pill'}
    onClick={() => setActiveFilter('stelle')}
  >
    Di Stelle
  </button>
  <button 
    className={activeFilter === 'sogni' ? 'pill active sogni' : 'pill'}
    onClick={() => setActiveFilter('sogni')}
  >
    Di Sogni
  </button>
</div>
```

**Filter Pills Styling:**
```css
.pill {
  padding: 10px 20px;
  border: 1px solid #000;
  background: #FFF8E7;
  border-radius: 20px;
  cursor: pointer;
  font: 20pt Meridien;
  margin: 0 8px;
  transition: all 0.2s ease;
}

.pill:hover {
  text-decoration: underline;
}

.pill.active {
  font-weight: bold;
}

.pill.active.stelle {
  background: #CFDCCB; /* Di Stelle green */
}

.pill.active.sogni {
  background: #FEECE9; /* Di Sogni pink */
}

.pill.active:not(.stelle):not(.sogni) {
  background: #FFF8E7; /* Cream for "All" */
}
```

---

**Right Pane (Scrollable Grid):**

```css
.right-pane-archive {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  overflow-y: scroll;
  height: calc(100vh - 55px);
}
```

**Key Differences from Template 2:**
- `overflow-y: scroll` enabled (Template 2 has `overflow: hidden`)
- **Infinite rows** - as many cards as there are articles (not limited to 4)
- Same card design as Template 2

**Expected Article Volume:**
- Phase 1: ~10-20 articles
- Year 2-3: ~50-100 articles
- Grid scales infinitely

---

**Filter Logic:**

**Filter Options:**
1. **All** - Shows all articles (both Di Stelle and Di Sogni)
2. **Di Stelle** - Shows only agriculture/farm-related articles
3. **Di Sogni** - Shows only culture/art-related articles

**Sanity Queries:**
```javascript
// All articles
const allArticles = await sanity.fetch(`
  *[_type == "article"] | order(publishDate desc)
`)

// Di Stelle articles
const stelleArticles = await sanity.fetch(`
  *[_type == "article" && entity == "stelle"] | order(publishDate desc)
`)

// Di Sogni articles
const sogniArticles = await sanity.fetch(`
  *[_type == "article" && entity == "sogni"] | order(publishDate desc)
`)
```

**Client-Side Filtering:**
- If article count < 100: Load all articles, filter in browser
- If article count > 100: Fetch filtered results from Sanity

**Sorting:**
- **Chronological order** (newest first)
- `publishDate desc`

---

**Example Component Structure:**

```jsx
<ArchivePageTemplate>
  <LeftPane>
    <h1>Research Archive</h1>
    <FilterPills 
      activeFilter={activeFilter} 
      onChange={setActiveFilter} 
    />
    <p className="intro">{archiveIntro}</p>
  </LeftPane>
  
  <RightPane>
    <ArticleGrid 
      articles={filteredArticles} 
      scrollable={true}
    />
  </RightPane>
</ArchivePageTemplate>
```

---

### 5.4 Template 3: Landing Page (Homepage)

**Used For:**
- Homepage only

**Reference Image:**
- `Landing_page.jpg`

---

**Key Characteristics:**
- **Single viewport** - no scrolling
- Full-width hero illustration
- Two-column entity introduction cards
- Simplest template (no dual-pane complexity)

---

**Layout Structure:**
```
┌────────────────────────────────────────────────┐
│  HEADER (55px)                                  │
├──┬──────────────────────────────────────────┬──┤
│  │                                           │  │
│  │     FULL-WIDTH HERO ILLUSTRATION          │  │
│L │     (Hand-drawn landscape)                │R │
│  │     Height: Dynamic (fills space)         │  │
│S │                                           │S │
│i │                                           │i │
│d │                                           │d │
│e │                                           │e │
│b │                                           │b │
│a ├───────────────────────────────────────────┤a │
│r │        [1px horizontal divider]           │r │
│  ├───────────────────┬───────────────────────┤  │
│  │                   │                       │  │
│  │  Azienda          │  Associazione         │  │
│  │  Agricola         │  Culturale            │  │
│  │                   │                       │  │
│  │  [Description]    │  [Description]        │  │
│  │                   │                       │  │
│  │  [Clickable]      │  [Clickable]          │  │
└──┴───────────────────┴───────────────────────┴──┘
```

---

**Hero Section:**

**Hero Illustration:**
- Spans full width (between left and right sidebars)
- Hand-drawn landscape (pen-and-ink style)
- No text overlay
- Height: Dynamic to fill remaining space

**Height Calculation:**
```
Hero height = 100vh - 55px (header) - [entity card section height]

Entity card section ≈ 200-250px
Therefore: Hero ≈ 60-65vh
```

**CSS:**
```css
.hero-illustration {
  width: calc(100vw - 92px); /* Account for sidebars */
  height: 65vh; /* Or calculated dynamically */
  margin-left: 46px; /* Left sidebar width */
  background-image: url('/hero-illustration.svg');
  background-size: cover;
  background-position: center;
}
```

---

**Entity Cards Section:**

**Layout:**
```css
.entity-cards-section {
  display: grid;
  grid-template-columns: 1fr 1px 1fr; /* Left card | Divider | Right card */
  height: calc(100vh - 55px - 65vh); /* Remaining space */
  margin-left: 46px;
  margin-right: 46px;
  border-top: 1px solid #000; /* Horizontal divider above */
}
```

**Left Card (Azienda Agricola):**
```css
.entity-card-left {
  padding: 40px 18px 40px 18px; /* Top, Right, Bottom, Left */
  cursor: pointer;
  background: #FFF8E7;
}
```

**Content:**
```
Azienda Agricola (H2 - 40pt Meridien)
↓ [20px]
"Our small-batch wine and single-varietal extra virgin 
olive oil are driven by the belief that great food and 
wine begin in the field."
```

**Interaction:**
- Entire card is clickable → `/azienda-agricola`
- Hover: Heading underlines
- Cursor: pointer

---

**Center Divider:**
```css
.center-divider {
  width: 1px;
  background: #000;
}
```

---

**Right Card (Associazione Culturale):**
```css
.entity-card-right {
  padding: 40px 40px 40px 18px; /* Top, Right, Bottom, Left */
  cursor: pointer;
  background: #FFF8E7;
}
```

**Content:**
```
Associazione Culturale (H2 - 40pt Meridien)
↓ [20px]
"Our small-batch wine and single-varietal extra virgin 
olive oil are driven by the belief that great food and 
wine begin in the field. Our work is guided by hand 
management and low-intervention practices..."
```

**Interaction:**
- Entire card is clickable → `/associazione-culturale`
- Hover: Heading underlines
- Cursor: pointer

---

**Responsive Behavior:**
- Desktop: As specified above
- Mobile: TBD with client (likely stack: hero on top, cards below)

---

**Example Component Structure:**

```jsx
<LandingPageTemplate>
  <HeroSection>
    <img src="/hero-illustration.svg" alt="Sentieri landscape" />
  </HeroSection>
  
  <EntityCardsSection>
    <EntityCard 
      href="/azienda-agricola"
      title="Azienda Agricola"
      description={agricolaDescription}
    />
    
    <CenterDivider />
    
    <EntityCard 
      href="/associazione-culturale"
      title="Associazione Culturale"
      description={culturaleDescription}
    />
  </EntityCardsSection>
</LandingPageTemplate>
```

---

**Open Question for Client:**

**Sentieri Intro Text:**
From copy PDF: "Situated among the vineyards, olive groves, and rolling hills of Loreto Aprutino, Abruzzo, Sentieri is where regenerative agriculture, art, ecology, and community come together."

**Where should this appear?**
- Option 1: Above hero illustration (adds a text section at top)
- Option 2: Overlaid on hero illustration (as centered text)
- Option 3: Omitted from homepage (users discover through entity pages)

**Current design:** No intro text visible - need client decision

---

## 6. SANITY CMS SCHEMA

### 6.1 Content Architecture

**Content Types:**
1. **Page** - Flexible pages (Template 1)
2. **Entity Overview** - Azienda/Associazione pages (Template 2)
3. **Article** - Blog/research articles
4. **Product** - Wine/Olive Oil (could mirror Shopify or be standalone)

### 6.2 Article Schema

```javascript
// sanity/schemas/article.ts

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'it', type: 'string', title: 'Italian' }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96
      }
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'entity',
      title: 'Entity',
      type: 'string',
      options: {
        list: [
          { title: 'Di Stelle (Agriculture)', value: 'stelle' },
          { title: 'Di Sogni (Culture)', value: 'sogni' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        { name: 'en', type: 'text', title: 'English' },
        { name: 'it', type: 'text', title: 'Italian' }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'block' }]
        },
        {
          name: 'it',
          title: 'Italian',
          type: 'array',
          of: [{ type: 'block' }]
        }
      ]
    },
    {
      name: 'images',
      title: 'Images (Right Pane)',
      type: 'array',
      of: [{ 
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt Text' }
        ]
      }]
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Show in entity overview grids?'
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'featuredImage',
      date: 'publishDate'
    },
    prepare(selection) {
      const { title, date } = selection
      return {
        title: title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date'
      }
    }
  }
}
```

### 6.3 Page Schema (Template 1)

```javascript
// sanity/schemas/page.ts

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'it', type: 'string', title: 'Italian' }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en'
      }
    },
    {
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Product Page', value: 'product' },
          { title: 'Info Page', value: 'info' }
        ]
      }
    },
    {
      name: 'content',
      title: 'Content (Left Pane)',
      type: 'object',
      fields: [
        {
          name: 'en',
          type: 'array',
          of: [{ type: 'block' }],
          title: 'English'
        },
        {
          name: 'it',
          type: 'array',
          of: [{ type: 'block' }],
          title: 'Italian'
        }
      ]
    },
    {
      name: 'images',
      title: 'Images (Right Pane)',
      type: 'array',
      of: [{ 
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt Text' }
        ]
      }]
    }
  ]
}
```

### 6.4 Entity Overview Schema (Template 2)

```javascript
// sanity/schemas/entityOverview.ts

export default {
  name: 'entityOverview',
  title: 'Entity Overview',
  type: 'document',
  fields: [
    {
      name: 'entityType',
      title: 'Entity Type',
      type: 'string',
      options: {
        list: [
          { title: 'Azienda Agricola', value: 'agricola' },
          { title: 'Associazione Culturale', value: 'culturale' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'it', type: 'string', title: 'Italian' }
      ]
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'it', type: 'string', title: 'Italian' }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          type: 'array',
          of: [{ type: 'block' }],
          title: 'English'
        },
        {
          name: 'it',
          type: 'array',
          of: [{ type: 'block' }],
          title: 'Italian'
        }
      ]
    },
    {
      name: 'featuredArticles',
      title: 'Featured Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
      validation: Rule => Rule.max(4)
    }
  ]
}
```

### 6.5 Querying Content

**Example Queries:**

```javascript
// Get all articles for Research Archive
const allArticles = await sanity.fetch(`
  *[_type == "article"] | order(publishDate desc) {
    _id,
    "title": title.${locale},
    "slug": slug.current,
    publishDate,
    entity,
    "featuredImage": featuredImage.asset->url,
    "excerpt": excerpt.${locale}
  }
`)

// Get featured articles for Entity Overview
const featuredArticles = await sanity.fetch(`
  *[_type == "entityOverview" && entityType == $type][0] {
    featuredArticles[]-> {
      _id,
      "title": title.${locale},
      "slug": slug.current,
      publishDate,
      "featuredImage": featuredImage.asset->url
    }
  }
`, { type: 'agricola' })

// Get page content
const page = await sanity.fetch(`
  *[_type == "page" && slug.current == $slug][0] {
    "title": title.${locale},
    "content": content.${locale},
    "images": images[].asset->url
  }
`, { slug: 'olive-oil' })
```

---

## 7. SHOPIFY INTEGRATION

### 7.1 Phase 1 Approach: Shopify Buy Button

**Strategy:**
- Keep it simple for prototype
- Products managed in Shopify admin
- Embed Buy Button styled to match site design
- Checkout handled by Shopify (redirect or modal)

**Products:**
1. Extra Virgin Olive Oil (~600L / 1,200 bottles)
2. Vino Rosato (~4,000 bottles)
3. Vino Rosso (~5,000 bottles)

**Implementation:**

```jsx
// components/ShopifyBuyButton.tsx

'use client'

import { useEffect } from 'react'

export default function ShopifyBuyButton({ productId }) {
  useEffect(() => {
    // Load Shopify Buy Button SDK
    const script = document.createElement('script')
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize Buy Button
      window.ShopifyBuy.UI.onReady(client => {
        client.createComponent('product', {
          id: productId,
          node: document.getElementById('product-component'),
          options: {
            // Custom styling to match Sentieri design
            product: {
              styles: {
                button: {
                  'background-color': '#000000',
                  'color': '#FFF8E7',
                  'font-family': 'Meridien LT Std',
                  'font-size': '20px',
                  'padding': '12px 24px',
                  'border': '1px solid #000',
                  ':hover': {
                    'text-decoration': 'underline'
                  }
                }
              }
            }
          }
        })
      })
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [productId])

  return <div id="product-component"></div>
}
```

**Where to Display:**
- Product pages (Wine, Olive Oil) - bottom of left pane or in right pane
- Dedicated shop page (TBD design with client)
- Could add "Shop" CTA on entity overview pages

### 7.2 Phase 2: Headless Shopify (Future)

**If needed later:**
- Use Shopify Storefront API
- Full control over product display and cart
- Custom checkout experience
- More seamless integration with site design

**Not in scope for initial prototype.**

---

## 8. IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Week 1-2)

**Goals:** Set up project structure, design system, global components

**Tasks:**
1. ✅ Initialize Next.js 14 project with TypeScript
2. ✅ Set up Tailwind CSS + custom CSS structure
3. ✅ Configure Sanity Studio
4. ✅ Create global layout components:
   - Header
   - Sidebars (left/right)
   - Menu overlays
5. ✅ Implement design system:
   - Color tokens
   - Typography styles
   - Spacing utilities
6. ✅ Set up font loading (Abordage, Meridien)
7. ✅ Create placeholder handwritten SVGs/PNGs

**Deliverable:** Basic site shell with header, sidebars, working navigation

---

### Phase 2: Templates (Week 3-4)

**Goals:** Build all page templates

**Tasks:**
1. ✅ Template 3 (Landing Page)
   - Hero section with illustration
   - Entity cards with linking
2. ✅ Template 1 (Content Page)
   - Dual-pane layout
   - Independent scrolling
   - Test with Olive Oil content
3. ✅ Template 2 (Grid Page)
   - Entity overview layout
   - Article grid component
   - Wine/Olive oil section (below fold)
4. ✅ Template 2b (Archive Page)
   - Scrollable article grid
   - Filter pills component

**Deliverable:** All templates functional, populated with sample content

---

### Phase 3: Content & CMS (Week 4-5)

**Goals:** Connect Sanity, populate real content

**Tasks:**
1. ✅ Define Sanity schemas (article, page, entity overview)
2. ✅ Create Sanity queries for each template
3. ✅ Populate CMS with content from Website_Copy_V2.pdf
4. ✅ Add placeholder images and illustrations
5. ✅ Test content editing workflow in Sanity Studio
6. ✅ Implement basic i18n structure (English only for now)

**Deliverable:** Site populated with real content from CMS

---

### Phase 4: Interactions & Polish (Week 5-6)

**Goals:** Perfect interactions, add animations, responsive basics

**Tasks:**
1. ✅ Implement all hover states (underlines, etc.)
2. ✅ Add menu overlay animations (slide in/out)
3. ✅ Implement filter functionality (Research Archive)
4. ✅ Test and refine scrolling behavior
5. ✅ Add loading states and transitions
6. ✅ Basic responsive adjustments (if strategy determined)
7. ✅ Performance optimization (image loading, etc.)

**Deliverable:** Polished, interactive prototype

---

### Phase 5: Shopify & Deployment (Week 6-7)

**Goals:** Add e-commerce, deploy to production

**Tasks:**
1. ✅ Set up Shopify store (if not already)
2. ✅ Add products (Wine, Olive Oil) to Shopify
3. ✅ Implement Buy Button on product pages
4. ✅ Style Buy Button to match site design
5. ✅ Set up Vercel hosting
6. ✅ Configure domain
7. ✅ Deploy prototype
8. ✅ QA testing

**Deliverable:** Live prototype ready for client review

---

### Post-Launch Phases (Future)

**Phase 6: Multilingual (Italian)**
- Add Italian translations to all content
- Implement language switching
- Test both languages

**Phase 7: Mobile Optimization**
- Finalize mobile responsive strategy with client
- Implement mobile layouts
- Test on various devices

**Phase 8: Advanced Features**
- Contact forms
- Newsletter integration
- Visit booking system
- Advanced search
- Headless Shopify (if needed)

---

## 9. OPEN QUESTIONS FOR CLIENT

### Critical Questions (Need Answers Before Build)

**Design & Content:**

1. **Homepage Intro Text**
   - Should the Sentieri intro ("Situated among the vineyards...") appear on the homepage?
   - If yes, where? Above hero, overlaid on hero, or skip it?

2. **Handwritten Assets**
   - Can client provide scanned handwritten elements (logo, "di Stelle", "di Sogni")?
   - If not, should we create temporary text-based versions?

3. **Hero Illustration**
   - Can client provide the large landscape illustration for homepage hero?
   - What format? (SVG, PNG, JPG?)

4. **Article Illustrations**
   - Are hand-drawn illustrations available for article cards?
   - How many do we need for prototype? (Minimum 8 for testing)

**Research Archive:**

5. **Article Categories**
   - Are "Di Stelle" and "Di Sogni" the only two categories for now?
   - Or should we plan for more? (Ecology, Heritage, etc.)

6. **Featured Articles**
   - How should featured articles be selected for entity overview pages?
   - Manual curation or most recent?

**E-commerce:**

7. **Shop Page Design**
   - What should the main shop page look like?
   - Product grid? List? Or just links to individual products?

8. **Shopify Store**
   - Does client already have a Shopify store, or do we set one up?
   - Are product descriptions, prices, images ready?

**Responsive Strategy:**

9. **Mobile Layout**
   - Stack dual-pane vertically on mobile?
   - Simplified mobile navigation?
   - Different mobile homepage design?

**Multilingual:**

10. **Translation Timeline**
    - When will Italian translations be available?
    - Should we build Italian structure now, or add later?

### Nice-to-Know (Can Be Decided Later)

11. **Contact Form** - Where should this live? Separate page or footer?
12. **Newsletter Signup** - What service? (Mailchimp, etc.)
13. **Social Media Links** - Instagram, others? Where to display?
14. **Visit Booking** - Needed for Phase 1 or Phase 2?
15. **Blog Author Info** - Should articles show author names/bios?

---

## 10. REFERENCE MATERIALS

### Files to Review

**Design References:**
- `Landing_page.jpg` - Homepage layout
- `Azienda_Agricola.jpg` - Entity overview (Di Stelle)
- `Associazione_Culturale.jpg` - Entity overview (Di Sogni)
- `Olive_oil.jpg` - Content page template (product)
- `Pop_up_menu_Agricola.jpg` - Left sidebar menu
- `Pop_up_menu_Culturale.jpg` - Right sidebar menu

**Copy:**
- `Website_Copy_V2.pdf` - All website copy and content

### Color Hex Codes (Quick Reference)

```
Cream:          #FFF8E7
Header Beige:   #ECE1B9
Stelle Green:   #CFDCCB
Sogni Pink:     #FEECE9
Black:          #000000
```

### Key Measurements (Quick Reference)

```
Header height:          55px
Sidebar width:          46px
Left pane padding:      18px (left), 130px (right), 110px (top), 80px (bottom)
Right pane padding:     40px (all sides for grid), 0 (top/bottom for images)
H1 to paragraph:        45px
Between paragraphs:     40px
Between images:         35px
Grid gap:               40px
```

---

## END OF SPECIFICATION

**This document is the master reference for building the Sentieri website prototype.**

For questions or clarifications during development, refer back to:
- This specification document (source of truth)
- Design reference images (visual confirmation)
- Copy PDF (actual content)

**Next Steps:**
1. Review open questions with client
2. Begin Phase 1 implementation
3. Iterate based on feedback

---

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Prepared for:** Claude Code Implementation
