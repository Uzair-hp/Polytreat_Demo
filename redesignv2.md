# PolyTreat Redesign v3: Design System, Rules and Home Page Spec

**This file replaces the earlier `redesign.md`.** It is the source of truth for the home page (`/`). If it conflicts with `DESIGN.md` (the current-state audit), follow this file.

**Scope:** build the foundation (tokens, fonts, `ui/` components) and redesign `/` only. The other 31 routes must look and behave exactly as they do today.

## Decisions carried over

1. CSS Modules + `--pt-*` tokens. No Tailwind (its base reset would restyle the other 31 pages).
2. `Navbar` and `SiteFooter` are **not** touched in this pass. The home hero sits under the existing navbar. (A restyled navbar is a later pass.)
3. The "Every product area, at a glance" section is removed from the home page and replaced by one link, "See all product areas", to `/industries#product-map`.
4. No `ScrollReveal`. Content must be visible without JavaScript.
5. Fonts (Manrope + Inter) apply only inside the home page wrapper.

## Design idea

Professional and clean, with a strict color system: **brand blue carries the structure, and four accent colors each belong to one product range.** The accents appear only in small, deliberate places (icon tiles, tags, thin top bars, markers, arrows), never as large fills. The same four colors form a signature motif: a four-segment color bar under the hero headline and four dots next to the logo (in the later navbar pass).

| Range | Accent | `data-range` |
|---|---|---|
| Industrial water & process | Teal | `water` |
| Construction & protection | Amber | `construction` |
| Specialty products | Indigo | `specialty` |
| V-Klin care | Emerald | `vklin` |

---

# Part 1: Target Design System

## 1.1 Tokens: `src/styles/tokens.css`

```css
:root {
  /* Brand */
  --pt-navy: #0B192C;
  --pt-brand: #1769A6;
  --pt-brand-hover: #125682;
  --pt-brand-50: #EAF3F8;
  --pt-page-tint: #F4F8FB;
  --pt-dot: #C9DCEA;            /* hero dot-grid */

  /* Neutrals */
  --pt-text-strong: #0B192C;
  --pt-text-body: #475569;
  --pt-text-muted: #64748B;     /* secondary text, never below 14px */
  --pt-border: #E2E8F0;
  --pt-border-soft: #DCE6EE;
  --pt-border-strong: #CBD5E1;
  --pt-surface: #FFFFFF;
  --pt-on-dark: #FFFFFF;
  --pt-on-dark-muted: #B6C4D2;
  --pt-dark-surface: #0F2338;
  --pt-dark-border: #27425C;

  /* Range accents: c = decoration only, t = tint background, d = dark text/icon */
  --pt-water-c: #0E9F9A;        --pt-water-t: #DDF5F3;        --pt-water-d: #0B6F6B;
  --pt-construction-c: #D97706; --pt-construction-t: #FEF1DC; --pt-construction-d: #9A5200;
  --pt-specialty-c: #5B4BDB;    --pt-specialty-t: #ECEAFF;    --pt-specialty-d: #4338CA;
  --pt-vklin-c: #059669;        --pt-vklin-t: #DDF6EA;        --pt-vklin-d: #047857;
  --pt-vklin-section: #EEF9F3;
  --pt-vklin-border: #CDEBDD;

  /* Active range (default = brand) */
  --pt-c: var(--pt-brand);
  --pt-t: var(--pt-brand-50);
  --pt-d: var(--pt-brand);

  /* Type */
  --pt-font-heading: var(--font-manrope), "Segoe UI", Arial, sans-serif;
  --pt-font-body: var(--font-inter), "Segoe UI", Arial, sans-serif;
  --pt-text-xs: 0.75rem;
  --pt-text-sm: 0.875rem;
  --pt-text-base: 1rem;
  --pt-text-lg: 1.125rem;
  --pt-text-h3: 1.375rem;
  --pt-text-h3-lg: 1.875rem;
  --pt-text-stat: 2.5rem;
  --pt-text-h2: clamp(1.75rem, 1.2rem + 1.8vw, 2.75rem);
  --pt-text-h1: clamp(2.25rem, 1.3rem + 3vw, 4rem);

  /* Spacing (4px base) */
  --pt-space-1: 0.25rem; --pt-space-2: 0.5rem; --pt-space-3: 0.75rem;
  --pt-space-4: 1rem;    --pt-space-5: 1.5rem; --pt-space-6: 2rem;
  --pt-space-7: 3rem;    --pt-space-8: 4rem;   --pt-space-9: 6.5rem;

  /* Radii */
  --pt-radius-sm: 10px;   /* buttons */
  --pt-radius-md: 14px;   /* chips tiles, small cards */
  --pt-radius-lg: 20px;   /* cards, lists */
  --pt-radius-xl: 24px;   /* hero image */
  --pt-radius-full: 999px;

  /* Shadows */
  --pt-shadow-hover: 0 16px 36px rgba(11, 25, 44, 0.12);
  --pt-shadow-float: 0 16px 36px rgba(11, 25, 44, 0.16);
  --pt-shadow-stat: 0 20px 48px rgba(11, 25, 44, 0.12);

  /* Layout */
  --pt-container: 1240px;
  --pt-gutter: clamp(1rem, 4vw, 2rem);
  --pt-section-y: clamp(4rem, 8vw, 6.5rem);

  /* Motion */
  --pt-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --pt-dur-hover: 250ms;
}

/* Range switch: the same component takes the range's colors */
[data-range="water"]        { --pt-c: var(--pt-water-c);        --pt-t: var(--pt-water-t);        --pt-d: var(--pt-water-d); }
[data-range="construction"] { --pt-c: var(--pt-construction-c); --pt-t: var(--pt-construction-t); --pt-d: var(--pt-construction-d); }
[data-range="specialty"]    { --pt-c: var(--pt-specialty-c);    --pt-t: var(--pt-specialty-t);    --pt-d: var(--pt-specialty-d); }
[data-range="vklin"]        { --pt-c: var(--pt-vklin-c);        --pt-t: var(--pt-vklin-t);        --pt-d: var(--pt-vklin-d); }
```

**Contrast rule:** `--pt-c` (the saturated accent) is for decoration only (top bars, left markers, dots, borders). Teal, amber and emerald fail contrast as text on white. All accent text and icons use `--pt-d`, usually on a `--pt-t` background.

**Breakpoints:** 640 / 768 / 1024 / 1280 px (write these four literal values in `@media`; no others). Test at 360, 768, 1024, 1440.

## 1.2 Typography

| Role | Font | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| H1 (hero) | Manrope | `--pt-text-h1` | 800 | 1.12 | -0.025em |
| H2 (section) | Manrope | `--pt-text-h2` | 800 | 1.12 | -0.025em |
| H3 (card) | Manrope | `--pt-text-h3` | 800 | 1.12 | -0.025em |
| H3 (specialty row) | Manrope | `--pt-text-h3-lg` | 800 | 1.12 | -0.025em |
| Stat number | Manrope | `--pt-text-stat` | 800 | 1 | -0.025em |
| Lead | Inter | `--pt-text-lg` | 400 | 1.6 | 0 |
| Body | Inter | `--pt-text-base` | 400 | 1.6 | 0 |
| Small / chip | Inter | `--pt-text-sm` | 500 | 1.5 | 0 |
| Eyebrow, tag, card number | Inter | `--pt-text-xs` | 700 | 1.2 | 0.1 to 0.14em, uppercase |

Text is never smaller than `--pt-text-xs` (12px). Load fonts with `next/font/google` (latin, `display: "swap"`) and expose `--font-manrope` and `--font-inter` on `<body>`.

## 1.3 Components: `src/components/ui/` (each with a CSS Module)

| Component | Props | Notes |
|---|---|---|
| `Container` | `as?` | max-width `--pt-container`, padding-inline `--pt-gutter` |
| `Section` | `tone?: "default" \| "tint" \| "dark" \| "vklin"`, `id?`, `labelledBy?` | vertical padding `--pt-section-y` |
| `SectionHeading` | `eyebrow?`, `title`, `intro?`, `align?: "split" \| "left"` | `split` = title left, intro right (bottom-aligned) at ≥1024; stacked below |
| `Button` | `variant: "primary" \| "secondary" \| "inverse"`, `href?`, `range?` | radius `--pt-radius-sm`, min height 46px. `primary` = `--pt-brand` (or `--pt-d` when inside a `data-range`); `secondary` = white, 1px `--pt-border-strong`; `inverse` = white on dark |
| `Chip` | `children`, `range?` | pill; white with `--pt-border-soft`, or `--pt-t` background with `--pt-d` text when a range applies |
| `RangeCard` | `range`, `icon`, `number`, `title`, `text`, `chips`, `href`, `layout?: "tall" \| "wide" \| "compact"`, `media?` | 20px radius, 5px top bar in `--pt-c`, `IconTile`, number in `--pt-d`; whole card is one link |
| `IconTile` | `icon`, `range` | 48px square, radius `--pt-radius-sm`, `--pt-t` background, `--pt-d` icon (Lucide 24px, stroke 1.75) |
| `SpecialtyRow` | `range`, `category`, `name`, `tagline`, `text`, `note`, `chips`, `href` | 4-column row, 5px left marker in `--pt-c` |
| `StatCard` | `items: {value; label}[]` | one white card, 4 columns separated by 1px borders, `--pt-shadow-stat` |
| `CertCard` | `label`, `href?` | white card, 36px emerald check circle |
| `CategoryTile` | `label` | white tile with `--pt-vklin-border` border |
| `ColorBar` | none | 168 x 6px, four equal segments in the four `-c` colors |
| `ContactTile` | `label`, `value`, `href?` | dark tile for the contact section |

---

# Part 2: Rules

1. **Scope.** Only create or change the files listed in Part 3. Do not edit any other page, `Navbar.tsx`, `SiteFooter.tsx`, or any file in `src/data/` (reading is fine; the only allowed addition is `companyInfo.ts`).
2. **Copy and data are fixed.** Reuse every heading, paragraph, label, link target and data import from the current `page.tsx` and `HeroCarousel.tsx`. Only structure and styling change.
3. **Numbers are never invented.** Every figure in the facts bar must come from existing copy or data (e.g. `locationSites.length`, the count of `productMapGroups` items, the year in the existing "since 1987" text). Do not hardcode a number unless it already appears in the current page copy.
4. **Tokens only.** No raw hex, radius, shadow or spacing values outside `tokens.css`.
5. **Accent discipline.** Accent colors appear only as: top bars, left markers, icon tiles, tags, chips, card numbers, arrows. Never as large background fills. Text in accent colors uses `--pt-d`.
6. **Reuse before create.** Use `ui/` components for everything in section 1.3. Do not use old global classes (`.container`, `.btn`, `.section`, `.card`, `.eyebrow`, `.hp-*`) in new markup. Do not add or edit rules in `globals.css`.
7. **Motion.** Only the animations in section 3.1 and the hover effects below. All are CSS-only, play once on page load (no scroll triggers), and are removed entirely under `prefers-reduced-motion: reduce`. Nothing may be invisible without them.
8. **Accessibility.** One `<h1>`, outside the slide loop. Every `<section>` has `aria-labelledby`. Every interactive element has a visible `:focus-visible` (2px outline in `--pt-brand`, 2px offset). Text meets WCAG AA. Tab state is never shown by color alone. Decorative SVG is `aria-hidden`.
9. **Images.** `next/image` with `sizes` and fixed aspect ratios. Meaningful `alt` text.
10. **Verification.** `tsc`, lint and build must pass. The five regression pages (`/about`, `/contact`, `/vklin/products`, `/solutions/industrial-water`, `/specialty/corosil`) must be visually identical before and after.

---

# Part 3: Home Page Spec (`/`)

**Files to create or change**

```
src/styles/tokens.css                  new
src/app/layout.tsx                     add next/font variables + tokens.css import only
src/components/ui/*                    new (section 1.3)
src/components/home/HomeHero.tsx       new, client (carousel logic)
src/components/home/home.module.css    new, home-only layout and keyframes
src/data/companyInfo.ts                new (email, phone, WhatsApp, office address)
src/app/page.tsx                       rewritten as composition; keep existing `metadata`
src/app/design-system/page.tsx         new, dev-only, notFound() in production
```

**Section order:** Hero, Facts bar, Ranges, Applications, Specialty, Certificates, V-Klin, Story & PQRS, Contact. (This order moves the certificate strip from just under the hero to after Specialty; it becomes its own section.)

## 3.1 Hero

- Background: `--pt-page-tint` with a dot grid (`radial-gradient(var(--pt-dot) 1.2px, transparent 1.2px)`, 26px tile). Bottom padding 150px so the facts bar overlaps.
- ≥1024: two equal columns, gap 64px, vertically centered. Mobile: copy first, then image.
- **Left (stagger classes in order):**
  1. Eyebrow "POLYTREAT CHEMICALS PVT. LTD." (`--pt-brand`)
  2. `h1`: "Applied chemistry for **water, structures, and everyday care.**" (the bold words in `--pt-brand`, solid color)
  3. `ColorBar` directly under the h1
  4. Lead paragraph (existing subhead)
  5. Three `Chip`s (Manufacturing since 1987, Three sites in Maharashtra, In-house QC laboratory)
  6. Buttons: primary "Explore solutions →", secondary "Talk to our team"
- **Right:** hero image (radius `--pt-radius-xl`, height 440px, `next/image` with `priority`) with a floating caption card overlapping its left-bottom edge (white, radius 14px, `--pt-shadow-float`, shows slide title and descriptor). Below the image, a tab row (Water, Construction, V-Klin): plain text tabs with a 3px bottom border; the active tab has strong text and an amber (`--pt-construction-c`) border, and `aria-selected="true"`.
- **Carousel behavior (keep from `HeroCarousel`):** 3 slides, 6800 ms autoplay, pause on hover, focus and reduced motion, `aria-live="polite"` on the lead line. The caption card text and image change with the slide.
- **Mobile:** the caption card sits inside the image at the bottom (no negative offsets).

**Animations (CSS only, once on load):**

| Name | Effect | Timing | Used on |
|---|---|---|---|
| `up` | fade in + rise 16px | 0.7s, delays 0.05 / 0.18 / 0.3 / 0.42s | eyebrow, h1, lead + chips, buttons, facts bar |
| `draw` | scaleX 0 → 1 from the left | 0.9s, delay 0.6s | `ColorBar` |
| `wipe` | clip-path reveal left to right | 1s, delay 0.2s | hero image |
| `bob` | translateY 0 → -6px → 0, infinite | 6s ease-in-out | caption card only |

Hover (all cards, rows, cert and contact tiles that link): lift 4px, `--pt-shadow-hover`, and the arrow moves 5px right; 250ms.

## 3.2 Facts bar

`StatCard` overlapping the hero (margin-top -80px), four items: **1987** "Manufacturing since", **3** "Sites in Maharashtra", **4** "Product ranges", **28** "Product areas". Values derive from data or existing copy (Rule 3). Mobile: 2 x 2.

## 3.3 Ranges ("Four ranges, one manufacturer.")

`SectionHeading align="split"`, eyebrow "What we make". Then a bento grid, 3 columns x 2 rows, gap 24px, each card a `RangeCard`:

| Card | Layout | Grid position |
|---|---|---|
| 01 Water (`data-range="water"`) | `tall`: photo on top (240px), then body | column 1, spans both rows |
| 02 Construction (`construction`) | `wide`: photo left (44% width), body right | columns 2 to 3, row 1 |
| 03 Specialty (`specialty`) | `compact`: no photo | column 2, row 2 |
| 04 V-Klin (`vklin`) | `compact`: no photo | column 3, row 2 |

Icons (Lucide): Droplet, Layers, Hexagon, Leaf. Card number format: "01 · INDUSTRIAL WATER & PROCESS". Chips use the card's range colors. The link line at the bottom of each card reads like "Explore water treatment →". All copy and chip lists come from the existing `ranges[]`. Compact cards show up to 2 chips. Mobile and tablet: one column, photo cards keep their photo on top.

Below the grid: the existing WhatsApp prompt line on the left and "See all product areas →" (to `/industries#product-map`) on the right.

## 3.4 Applications

**Not designed in the mockup.** Before building it, the agent must report the exact data behind the current section (see the question the agent was asked earlier) and propose a layout using these patterns, then wait for my OK:
- If the items belong to 3 environments: 3 `RangeCard compact` style cards (no photo, using neutral `--pt-brand` accent) with their items listed inside.
- If it is a flat list of 12: a grid of 12 compact link tiles (4 columns desktop, 2 tablet, 1 mobile).
No content may be dropped. Section tone `tint`.

## 3.5 Specialty ("Specialty products, in detail.")

Section tone `tint` (`--pt-page-tint`). `SectionHeading align="split"`. One bordered container (radius 20px, white) holding three `SpecialtyRow`s separated by 1px borders:

| Row | Range accent | Category tag |
|---|---|---|
| COROSIL | `construction` (amber) | CORROSION CONTROL |
| POLYDOR-WS | `specialty` (indigo) | ODOUR CONTROL |
| POLYKLIN | `water` (teal) | HVAC COIL CARE |

Row columns (≥1024): `200px | 1.1fr | 1fr | 44px`. Column 1: tag pill + product name (h3, 30px). Column 2: tagline (strong, 18px), description, and the existing note in muted 14px. Column 3: chips. Column 4: circular arrow button in `--pt-t` / `--pt-d`. Mobile: stack all columns, arrow at the bottom right.

## 3.6 Certificates

Heading "Certificates and their scope" with eyebrow "Quality & compliance" and the "View Certifications →" link on the right. Four `CertCard`s in a row (2 x 2 on tablet, 1 column on mobile): ISO 9001:2015 QMS, UKcert WHO-GMP reference, Private FDA reference, UKcert Eco-Friendly certificate. Use the existing link targets.

## 3.7 V-Klin

`Section tone="vklin"` (`--pt-vklin-section`, `data-range="vklin"`). Two columns at ≥1024: left, eyebrow, h2, lead, and a primary `Button` in `--pt-vklin-d`; right, the product image panel (white, radius 20px, 230px high, `object-fit: contain`, existing V-Klin lineup image) with the seven `CategoryTile`s below in two columns (last tile spans both). Copy and links come from the existing V-Klin section.

## 3.8 Story & PQRS

**Not designed in the mockup.** Build it with the same patterns: two columns, the existing story copy and `FactList` on the left, and the four PQRS principles as a 2 x 2 grid of small white cards on the right, each with a large letter (P, Q, R, S) in `--pt-d` using the four range accents in order (water, construction, specialty, vklin). Link to `/quality`. Show me a screenshot before moving on.

## 3.9 Contact

`Section tone="dark"` (`--pt-navy`). Two columns: left, eyebrow, h2, lead and two buttons (`inverse`, and a secondary with a 1px `#6F8AA3`-equivalent token outline; add `--pt-dark-outline: #6F8AA3` to tokens). Right: four `ContactTile`s (email, technical & sales phone, WhatsApp, corporate office) with values from `companyInfo.ts`. Existing copy for heading and lead.

## 3.10 Acceptance checklist

- [ ] All sections render with no blank gaps at 360 / 768 / 1024 / 1440
- [ ] Page is fully readable with JavaScript and CSS animation disabled
- [ ] All copy and links match the previous page (except the removed product-map section)
- [ ] Facts bar numbers all come from data or existing copy
- [ ] No raw hex, radius, shadow or spacing literals in new CSS
- [ ] Accent colors are used only where Rule 5 allows; accent text uses `--pt-d`
- [ ] One `<h1>`, headings in order, every section labelled
- [ ] Keyboard: all controls reachable, focus ring visible, hero tabs usable with arrow keys
- [ ] `prefers-reduced-motion`: no animation, no autoplay
- [ ] Lighthouse accessibility ≥ 95 on `/`
- [ ] The five regression pages are visually unchanged