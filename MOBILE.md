# Mobile Responsive Strategy

> Extracted from CLAUDE.md Section 14. See CLAUDE.md for all other project documentation.

---

### Current State

**Zero responsive support.** No media queries, no Tailwind responsive prefixes in any component. Only `clamp()` on a few font sizes and one `sizes` attribute on ArticleCard provide any fluid behavior. The layout is completely unusable below ~1100px due to fixed 46px sidebars + 38/62 pane split.

### Breakpoints

| Name | Width | Description |
|---|---|---|
| Desktop | `>= 1024px` | Current layout: sidebars, 38/62 pane split |
| Tablet | `768px – 1023px` | Single column, no sidebars, horizontal sidebar bar |
| Mobile | `< 768px` | Single column, compact spacing, horizontal sidebar bar |

Use Tailwind responsive prefixes: `lg:` for desktop-only styles, `md:` for tablet+, default for mobile-first.

### Header (mobile < 1024px)

- Header stays the same: `55px` height, centered "sentieri" logo, fixed at top
- `padding: 0 16px`
- All interactive elements: minimum `44×44px` tap target
- No changes to the header's internal structure — no hamburger icon, no extra buttons

### Sidebar Bar (mobile < 1024px) — replaces vertical sidebars

The two vertical sidebars (`46px` wide, left and right) are **hidden entirely** on mobile (`display: none` or conditional render). They are replaced by a **horizontal navigation bar** fixed directly below the header:

- **Position:** fixed, directly below the header (`top: var(--header-height)`)
- **Width:** `100vw`
- **Height:** `var(--sidebar-bar-height)` (approximately `40–46px`)
- **Background:** `#FFFFFF`
- **Border:** `border-bottom: 1px solid #000000`
- **Z-index:** `50` (same as desktop sidebars)
- **Layout:** Two tappable sections side by side, split 50/50:
  - Left half: **"di Stelle"** — tapping opens the Stelle menu overlay
  - Right half: **"di Sogni"** — tapping opens the Sogni menu overlay
  - Vertical divider between them: `1px solid #000000`
- **Text styling:** Same as desktop sidebar text (`font-size: 1.2rem`, `letter-spacing: -0.07em`), but rendered horizontally (no rotation)
- **Tap targets:** Each half must be at least `44px` tall
- **Always visible:** Fixed/sticky so it's accessible while scrolling

Remove `margin-left` and `margin-right` from `<main>` on mobile (no sidebars = full width). Set `--sidebar-width: 0px` at `< 1024px`.

### Content Area (mobile < 1024px)

- Remove sidebar margins → content is `100vw` wide
- `<main>` margin-top must account for **both** header height and sidebar bar height: `calc(var(--header-height) + var(--sidebar-bar-height))`
- Use `--header-total-height: calc(var(--header-height) + var(--sidebar-bar-height))` at `< 1024px` for convenience
- Change `<body>` and `<main>` overflow from `hidden`/`clip` to `auto` (enable normal scrolling)
- Single scrollable page instead of independently scrolling panes

### ContentPageTemplate (mobile)

- **Single column with interleaved content** — the 38/62 pane split collapses into one scrollable column
- Content flows as: **Title → Image → Body text → Image → Body text → Image → ...** alternating between text blocks and images as the user scrolls
- When mirrored: same interleaved order on mobile (no difference between normal and mirrored)
- Title: `clamp(2rem, 8vw, 3.5rem)`, `margin-bottom: 60px` (down from `160px`), always left-aligned
- Content width: `100%`, padding: `24px 16px`
- Images: full-width, `padding: 0`
- Body text inner padding: `0` (remove the `12px`/`20px` inner padding)
- Quote overlay: reposition to `top: 40px`, `right: 16px`, `left: 20%`
- Image gap: `20px` (down from `35px`)

**Architectural consideration:** The current component receives `images[]` as a flat array and `content` as a single `ReactNode`. For mobile interleaving to work, one of these approaches is needed:
1. **Data restructuring:** Page data provides content as alternating blocks (array of text/image segments) instead of separate `content` + `images` props
2. **CSS-only reorder:** Use CSS techniques (grid/flexbox `order`) to visually interleave the two panes without changing the component data model
3. **Dual render:** Render both layouts (desktop panes + mobile interleaved) and show/hide with responsive classes

This is an **open design decision** that must be resolved during implementation. The choice affects how page files pass data to the template and may require changes to the `ContentPageTemplateProps` interface.

### GridPageTemplate (mobile)

- **Single column** — the text/image content area follows the same interleaved flow as ContentPageTemplate on mobile (Title → Image → Body text → Image → ...)
- Below all the interleaved content, articles appear as **tappable cards** in a vertically scrollable list
- Each card shows: featured image (full-width, landscape aspect ratio), then title below it
- Tapping a card navigates to the article page
- Cards are stacked vertically with consistent spacing between them (e.g., `24px` gap)
- This replaces the desktop ArticleList horizontal row layout (38/62 split per row)
- Title: same mobile scaling as ContentPageTemplate
- Content width: `100%`, padding: `24px 16px`

### LandingPageTemplate (mobile)

- **Hero section:**
  - Tagline: `width: 80%` (instead of `38%`), `font-size: clamp(1.8rem, 6vw, 2.5rem)`
  - Position: adjust to stay readable over image
- **Entity cards section:**
  - Stack vertically (not side-by-side): each card `width: 100%`, `height: 50vh`
  - Titles: always horizontal (no rotation), positioned at top-left
  - Descriptions: always visible (no hover dependency on touch devices)
  - Nav links: displayed in a vertical list below description (not scattered with absolute positioning)
  - Remove all hover-dependent interactions — use `@media (hover: hover)` to gate hover effects

### ArticleList (mobile)

- Stack vertically: title/metadata above, full-width image below
- Row height: `auto` (not fixed `calc((100vh - header) / 2.5)`)
- Image: full width, aspect ratio `16:9`
- Padding: `16px`
- Divider between rows: keep `1px solid #000000`

### MenuOverlay (mobile)

- Triggered by tapping the respective section in the horizontal sidebar bar ("di Stelle" or "di Sogni")
- Each overlay opens **independently** — Stelle overlay or Sogni overlay, not a combined overlay
- Full-width: `100vw` (instead of desktop's `62vw`)
- Height: `calc(100vh - var(--header-total-height))` (accounts for header + sidebar bar)
- Top: `var(--header-total-height)` (below both header and sidebar bar)
- Heading: `clamp(2.5rem, 8vw, 5rem)` (scaled down from desktop `8.5rem`), keep `AnimatedUnderline` behavior
- Nav links: stacked vertically with `16px` gap, not absolutely positioned
- Adequate touch targets: `44px` minimum height per link

### Typography Scaling

| Role | Desktop | Mobile (< 768px) |
|---|---|---|
| Page titles (templates) | `clamp(3rem, 5.5vw, 7.5rem)` | `clamp(2rem, 8vw, 3.5rem)` |
| `.heading-xl` | `6.65rem` | `3rem` |
| `.heading-lg` | `3.3rem` | `2rem` |
| `.heading-md` | `2.3rem` | `1.6rem` |
| `.subheader-l1` | `1.7rem` | `1.4rem` |
| `.body-text` | `clamp(0.9rem, 1.4vw, 1.3rem)` | `1rem` |
| `.small-text` | `1.3rem` | `1rem` |
| Menu heading | `8.5rem` | `clamp(2.5rem, 8vw, 5rem)` |
| ArticleList title | `1.7rem` | `1.4rem` |
| ArticleList metadata | `14px` | `14px` (unchanged) |

### Spacing Adjustments

| Context | Desktop | Mobile (< 768px) |
|---|---|---|
| Title to body text | `160px` | `60px` |
| Between paragraphs | `40px` | `24px` |
| Between stacked images | `35px` | `20px` |
| Content pane side padding | `18px` | `16px` |
| Body text inner padding | `12px` left, `20px` right | `0` |
| ArticleList row padding | `30px` | `16px` |

### Implementation Approach

1. **CSS classes in `globals.css`:** Add `@media` queries for typography utility classes (`.heading-xl`, `.body-text`, etc.) to scale font sizes, margins, and spacing at breakpoints
2. **Tailwind responsive prefixes in JSX:** For layout changes (hiding sidebars, stacking panes), add `lg:` and `md:` prefixes to component JSX
3. **Inline style challenges:** Many components use heavy inline styles. For these, either:
   - Migrate critical layout properties to Tailwind classes with responsive variants, or
   - Use CSS custom properties that change at breakpoints (e.g., `--sidebar-width: 0px` on mobile)
4. **Hover gating:** Wrap hover-dependent interactions with `@media (hover: hover)` to prevent issues on touch devices
5. **Test at:** `375px` (iPhone SE), `390px` (iPhone 14), `768px` (iPad), `1024px` (desktop transition)

### Touch Targets

- All clickable elements: minimum `44×44px` tap area
- Header links: ensure `44px` height
- Menu links: ensure adequate spacing (minimum `12px` gap between links)
- ArticleList rows: naturally large enough
- FilterPills: current `10px 20px` padding likely sufficient, verify on device

### Key Principle

**Mobile styles must be additive.** Always preserve the desktop design — use responsive classes to layer on mobile behavior. Never change desktop styles to accommodate mobile.
