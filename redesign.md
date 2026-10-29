# PolyTreat Redesign: Target Design System, Rules, and Home Page Spec

Paste Part 1 into `design.md` section 7, Part 2 into section 8, and use Part 3 as the spec for the home page (`/`). Part 4 is the prompt for the coding agent.

**Scope of this pass:** build the foundation (tokens, fonts, `ui/` components) and redesign `/` only. The other 31 routes must look and behave exactly as they do today.

## Decisions made for you (override any of them)

1. **CSS Modules + `--pt-*` tokens, not Tailwind.** Tailwind's base reset would restyle all 31 other pages. Namespaced tokens and CSS Modules cannot collide with the old `globals.css`. Revisit Tailwind only when every page has been migrated.
2. **Navbar and SiteFooter are not touched in this pass.** They are global and their CSS is tangled in `globals.css`. The new home body uses the same brand colors, so they will sit together fine. Restyle them in the next pass.
3. **The "Every product area, at a glance" section is removed from the home page.** It repeats the navbar menu, the footer, and the chips on the range cards. It is replaced by one link: "See all product areas" to `/industries#product-map`.
4. **`ScrollReveal` is not used on the new home page.** Hidden-until-scrolled content is the likely cause of the blank gaps in the screenshot, and it hides content if JS fails.
5. **Fonts (Manrope + Inter) apply only inside the home page wrapper.** Other pages keep Segoe UI until they are migrated.

---

# Part 1: Target Design System (section 7)

## 1.1 Principles

- One component set, two accents. `data-segment="industrial"` (blue, default) or `data-segment="vklin"` (green) re-colors the same components.
- Hierarchy comes from size, weight and whitespace, not from more colors.
- Few values, used everywhere. If a value is not in the token list, it does not belong in the code.
- Content is always visible. Animation may only enhance it.

## 1.2 Tokens: `src/styles/tokens.css`

All new tokens use the `--pt-` prefix so they cannot clash with the old `--color-*` tokens.

```css
:root {
  /* Brand */
  --pt-navy: #0B192C;
  --pt-navy-800: #102D42;
  --pt-brand: #1769A6;
  --pt-brand-hover: #125682;
  --pt-brand-100: #D6E8F3;
  --pt-brand-50: #EAF3F8;

  /* V-Klin accent (700 is used for white-text buttons: #059669 fails contrast with white) */
  --pt-green: #047857;
  --pt-green-hover: #065F46;
  --pt-green-100: #D1FAE5;
  --pt-green-50: #E6F6EE;

  /* Neutrals */
  --pt-text-strong: #0F172A;
  --pt-text-body: #475569;
  --pt-text-muted: #64748B;      /* secondary text only, never below 14px */
  --pt-border: #E2E8F0;
  --pt-border-strong: #CBD5E1;
  --pt-surface: #FFFFFF;
  --pt-surface-subtle: #F8FAFC;
  --pt-on-dark: #F8FAFC;
  --pt-on-dark-muted: #B6C4D2;

  /* Segment accent (default = industrial) */
  --pt-accent: var(--pt-brand);
  --pt-accent-hover: var(--pt-brand-hover);
  --pt-accent-tint: var(--pt-brand-50);
  --pt-accent-soft: var(--pt-brand-100);

  /* Type */
  --pt-font-heading: var(--font-manrope), "Segoe UI", Arial, sans-serif;
  --pt-font-body: var(--font-inter), "Segoe UI", Arial, sans-serif;
  --pt-text-xs: 0.75rem;
  --pt-text-sm: 0.875rem;
  --pt-text-base: 1rem;
  --pt-text-lg: 1.125rem;
  --pt-text-xl: 1.25rem;
  --pt-text-2xl: 1.5rem;
  --pt-text-h2: clamp(1.75rem, 1.2rem + 1.8vw, 2.5rem);
  --pt-text-h1: clamp(2.25rem, 1.4rem + 3.2vw, 3.75rem);

  /* Spacing (4px base) */
  --pt-space-1: 0.25rem;
  --pt-space-2: 0.5rem;
  --pt-space-3: 0.75rem;
  --pt-space-4: 1rem;
  --pt-space-5: 1.5rem;
  --pt-space-6: 2rem;
  --pt-space-7: 3rem;
  --pt-space-8: 4rem;
  --pt-space-9: 6rem;

  /* Radii */
  --pt-radius-sm: 8px;
  --pt-radius-md: 16px;
  --pt-radius-full: 999px;

  /* Shadows */
  --pt-shadow-sm: 0 1px 2px rgba(11, 25, 44, 0.06);
  --pt-shadow-md: 0 8px 24px rgba(11, 25, 44, 0.08);
  --pt-shadow-lg: 0 20px 48px rgba(11, 25, 44, 0.14);

  /* Motion */
  --pt-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --pt-dur-fast: 150ms;
  --pt-dur: 250ms;

  /* Layout */
  --pt-container: 1240px;
  --pt-gutter: clamp(1rem, 4vw, 2rem);
  --pt-section-y: clamp(4rem, 8vw, 6rem);
}

[data-segment="vklin"] {
  --pt-accent: var(--pt-green);
  --pt-accent-hover: var(--pt-green-hover);
  --pt-accent-tint: var(--pt-green-50);
  --pt-accent-soft: var(--pt-green-100);
}

@media (prefers-reduced-motion: reduce) {
  :root { --pt-dur-fast: 0ms; --pt-dur: 0ms; }
}
```

**Breakpoints:** 640, 768, 1024, 1280 px. CSS cannot read custom properties inside `@media`, so write these four literal values and no others. Test at 360, 768, 1024 and 1440.

## 1.3 Typography

| Role | Font | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| H1 (hero only) | Manrope | `--pt-text-h1` | 800 | 1.08 | -0.025em |
| H2 (section) | Manrope | `--pt-text-h2` | 800 | 1.15 | -0.02em |
| H3 (card title) | Manrope | `--pt-text-xl` | 700 | 1.3 | -0.01em |
| Lead paragraph | Inter | `--pt-text-lg` | 400 | 1.6 | 0 |
| Body | Inter | `--pt-text-base` | 400 | 1.6 | 0 |
| Small / meta | Inter | `--pt-text-sm` | 500 | 1.5 | 0 |
| Eyebrow | Inter | `--pt-text-xs` | 700 | 1.2 | 0.12em, uppercase |

Rules: body text is never below 1rem. Text below `--pt-text-sm` is allowed only for eyebrows and badges. Max line length for paragraphs is 65ch. Load fonts with `next/font/google` (`display: "swap"`, latin subset, weights above) and expose them as the `--font-manrope` and `--font-inter` variables on `<body>`. Adding the variable classes does not change how old pages render.

## 1.4 Components: `src/components/ui/` (each with its own `*.module.css`)

| Component | Props | Notes |
|---|---|---|
| `Container` | `as?`, `className?` | max-width `--pt-container`, padding-inline `--pt-gutter` |
| `Section` | `tone?: "default" \| "subtle" \| "dark"`, `id?`, `labelledBy?`, `segment?` | vertical padding `--pt-section-y`; renders `<section>`; sets `data-segment` when given |
| `SectionHeading` | `eyebrow?`, `title`, `intro?`, `align?: "split" \| "left" \| "center"`, `id?` | `split` = title left, intro right on desktop; stacked on mobile |
| `Button` | `variant: "primary" \| "secondary" \| "ghost"`, `size?: "md" \| "lg"`, `href?`, `icon?` | primary uses `--pt-accent` (so it turns green inside a vklin segment). Min height 44px. Renders `<a>` via `next/link` when `href` is set |
| `TextLink` | `href`, `children` | always underlined on hover and focus; arrow icon 16px |
| `Badge` | `tone?: "neutral" \| "accent" \| "dark"` | pill, `--pt-text-xs`, used for categories and numbers |
| `Chip` | `children`, `icon?` | small pill for tags and fact items |
| `Card` | `variant: "media" \| "feature" \| "link"`, `href?` | surface, 1px `--pt-border`, `--pt-radius-md`, `--pt-shadow-sm`; hover lifts 2px and uses `--pt-shadow-md`; with `href`, the whole card is one link (title link with a stretched `::after`) |
| `IconTile` | `icon`, `tone?` | 48px rounded square, `--pt-accent-tint` background, Lucide icon 24px, stroke 1.75 |
| `FactList` | `items: {label; value}[]` | semantic `<dl>` |
| `ContactTile` | `icon`, `label`, `value`, `href` | link tile for the contact band, with on-dark colors |

Icon rule: Lucide only, sizes 16 / 20 / 24, one stroke width of 1.75.

---

# Part 2: Redesign Rules (section 8)

1. **Scope.** Only the files listed in Part 3 may be created or changed. Do not edit any other page, `Navbar.tsx`, `SiteFooter.tsx`, or any file in `src/data/` (reading them is fine).
2. **Copy and data are fixed.** Reuse every heading, paragraph, label, link target and data import from the current `src/app/page.tsx` and `HeroCarousel.tsx`. Only structure and styling change. The one allowed omission is the product-map section (decision 3).
3. **Tokens only.** No raw hex, no px or rem values for color, radius, shadow or spacing outside `tokens.css`. Layout sizes such as grid column counts and image aspect ratios are fine.
4. **Reuse before create.** Use a `ui/` component for anything in section 1.4. Create a home-specific component only for what is genuinely unique to the home page, and keep it in `src/components/home/`.
5. **No collisions.** Do not add or edit rules in `globals.css`, and do not reuse old global classes (`.container`, `.btn`, `.section`, `.card`, `.eyebrow`, `.hp-*`) in new markup.
6. **Accessibility is part of done.** One `<h1>`, in the hero and outside the slide loop. Every `<section>` has `aria-labelledby`. Every interactive element has a visible `:focus-visible` (2px outline in `--pt-accent`, 2px offset). Text contrast meets WCAG AA. Link and tab state is never shown by color alone.
7. **Motion.** One 250ms fade-up on the hero copy at page load. Card hover lift. Nothing else. No infinite animations, no floating shapes, no gradient-shifting text. The hero autoplay must pause on hover, on focus, and under reduced motion.
8. **Images.** `next/image` with `sizes`, fixed aspect ratios (hero 4:3, card media 16:9), and meaningful `alt` text.
9. **Cleanup.** After the new home is verified, grep for each `hp-*` class and for `HeroCarousel` and `ScrollReveal`. Delete CSS blocks and components only if the grep proves nothing else uses them.
10. **Verification.** `tsc`, lint and build must pass. Capture before and after screenshots of `/about`, `/contact`, `/vklin/products`, `/solutions/industrial-water` and `/specialty/corosil`. They must be visually identical.

---

# Part 3: Home Page Spec (`/`)

**Files to create or change**

```
src/styles/tokens.css                  new
src/app/layout.tsx                     add next/font variables and import tokens.css (no other change)
src/components/ui/*                    new (section 1.4)
src/components/home/HomeHero.tsx       new, client (carousel logic)
src/components/home/home.module.css    new, home-only layout styles
src/data/companyInfo.ts                new (email, phone, WhatsApp, office address for the contact band)
src/app/page.tsx                       rewritten as composition; keep existing `metadata`
src/app/design-system/page.tsx         new, dev-only, calls notFound() in production
```

The page wrapper is `<main className={home}>` and applies `font-family: var(--pt-font-body)` and heading font only inside it.

**Section order:** Hero, Trust strip, Ranges, Applications, Specialty, V-Klin, Story and PQRS, Contact. Eight sections instead of today's nine.

## 3.1 Hero

- **Background:** white to `--pt-brand-50`, one linear gradient. No blobs or particles.
- **Desktop (≥1024):** two columns, 6/6. **Mobile:** copy first, then image.
- **Left:** eyebrow "POLYTREAT CHEMICALS PVT. LTD."; `h1` "Applied chemistry for water, structures, and everyday care." with the words after "for" set in `--pt-brand` (solid color, not gradient text); lead paragraph (existing subhead); three `Chip`s with 16px icons (Manufacturing since 1987, Three sites in Maharashtra, In-house QC laboratory); two buttons: primary "Explore solutions", secondary "Talk to our team".
- **Right:** image card (radius md, `--pt-shadow-lg`, 4:3, `next/image` with `priority` on the first slide). A caption pill sits bottom-left over the image with the slide title and its descriptor. Below the image is a three-option segmented control (Water, Construction, V-Klin). The active tab has a filled `--pt-accent` background with white text and `aria-selected`, so state is not color-only.
- **Behavior:** keep the existing logic: 3 slides, 6800 ms autoplay, pause on hover, focus and reduced motion, tab buttons, `aria-live="polite"` lead line. Slide content comes from the existing `HeroCarousel` data.

## 3.2 Trust strip

- Thin band with top and bottom `--pt-border`, white background.
- Left: eyebrow "QUALITY & COMPLIANCE" and the line "Certificates and their scope". Middle: the four certificate `Chip`s with a shield or file icon (ISO 9001:2015 QMS, UKcert WHO-GMP reference, Private FDA reference, UKcert Eco-Friendly certificate). Right: `TextLink` "View Certifications" to `/certifications`.
- Mobile: label on top, chips wrap into two columns, link below.

## 3.3 Ranges ("Four ranges, one manufacturer.")

- `SectionHeading align="split"`, eyebrow "What we make".
- Grid: 2 columns at ≥768, one column on mobile.
- Card (`variant="media"`): 16:9 image on top, number `Badge` (01 to 04) top-left on the image, category `Badge` bottom-left on the image, `h3`, description, up to four chips, `TextLink` at the bottom. The whole card is one link.
- Card 04 (V-Klin) sits in a `data-segment="vklin"` wrapper so its chips and link turn green.
- Card 03 (specialty) has no photo today. Use the same 16:9 area with an `--pt-accent-tint` panel and a centered 48px Lucide icon so card heights stay equal. Replace it with a real photo when one exists.
- V-Klin card image: use a clean product-on-white shot with `object-fit: contain` on a white or `--pt-green-50` background, not the cropped label art.
- Below the grid, one muted line: "Not sure which range fits your requirement?" with the WhatsApp link, right-aligned. A second link, "See all product areas", goes to `/industries#product-map`.

## 3.4 Applications

- Section tone `subtle`. Heading from the existing copy.
- Three `Card variant="link"` in a row at ≥1024, stacked below. Each has an `IconTile`, `h3`, short text and an arrow. They keep their existing link targets: Process & manufacturing, Utilities & infrastructure, Facilities & institutions.

## 3.5 Specialty products ("Specialty products, in detail.")

- `SectionHeading align="split"`, then three `Card variant="feature"` in one row at ≥1024 (one column below 768, two columns between).
- Each card: `IconTile` and a category `Badge` in one row (CORROSION CONTROL, ODOUR CONTROL, HVAC COIL CARE); product name as `h3`; tagline in `--pt-text-strong`; description; chips; a callout box (`--pt-surface-subtle`, radius sm, 16px info icon) holding the existing note; `TextLink` pinned to the card bottom. Cards stretch to equal height.
- Under the cards: "Also in the specialty range:" with the existing four names as plain text separated by a dot, then a `TextLink` "Open the specialty hub".

## 3.6 V-Klin spotlight

- `Section` with `segment="vklin"` and background `--pt-green-50`.
- Two columns at ≥1024: product image group on the left (white rounded panel, existing product images, `object-fit: contain`), copy on the right. The V-Klin logo (`/vklin-logo.webp`) sits above the eyebrow.
- Reuse the existing copy and category chips from `page.tsx`. Primary `Button` (green via accent) "Explore the V-Klin range" to `/vklin/products`, and a secondary button to `/vklin`.

## 3.7 Story and PQRS

- Two columns at ≥1024. Left: heading, story paragraphs from the existing copy, `FactList` of the existing story facts. Right: the four PQRS principles as a 2×2 grid of small cards, each with a large letter (P, Q, R, S) in `--pt-accent`, its title and one-line description, plus a `TextLink` to `/quality`.

## 3.8 Contact band

- `Section tone="dark"` (`--pt-navy`). Text uses `--pt-on-dark` and `--pt-on-dark-muted`.
- Left: heading and short text from the existing copy, with a primary and a secondary `Button` (on dark, the secondary has a white outline).
- Right: four `ContactTile`s: email, technical & sales phone, WhatsApp, corporate office. Values come from `companyInfo.ts`. Tiles have a visible border, a 20px icon, and an arrow icon on the right for links.

## 3.9 Home acceptance checklist

- [ ] All eight sections render with no blank gaps at 360 / 768 / 1024 / 1440
- [ ] Works with JavaScript disabled, except hero autoplay and tab switching
- [ ] All copy and links match the previous page (except the removed product-map section)
- [ ] No raw hex, radius, shadow or spacing literals in new CSS
- [ ] One `<h1>`, headings in order, every section labelled
- [ ] Keyboard: every control reachable, focus ring visible, tab switcher usable with arrow keys
- [ ] Reduced motion: no autoplay, no animation
- [ ] Contrast checked for white-on-green, muted text, and the dark contact band
- [ ] Lighthouse accessibility ≥ 95 on `/`
- [ ] The five regression pages are visually unchanged

---

# Part 4: Prompt for the coding agent

```
Read DESIGN.md (current state), then design-target-and-home.md (target system, rules, home spec). Redesign the home page only. Do not touch any other route, Navbar.tsx, SiteFooter.tsx, or src/data/ files (except adding companyInfo.ts).

Step 0: Before changing anything, capture screenshots of /, /about, /contact, /vklin/products, /solutions/industrial-water and /specialty/corosil at 360, 768, 1024 and 1440. Read src/app/page.tsx and src/components/HeroCarousel.tsx and list all copy, data imports and links that must be preserved. Show me the list and your file plan. Stop and wait for my OK.

Step 1: Foundation. Create tokens.css exactly as specified, add next/font variables and the tokens import in layout.tsx, and build the ui/ components (each with a CSS Module). Add the dev-only /design-system route showing every component and variant, including the vklin segment. Run tsc, lint and build. Stop and show me the /design-system route.

Step 2: Home. Rebuild one section at a time in the order in Part 3, with one commit per section. After each section, run tsc and lint.

Step 3: Cleanup and verification. Grep hp-* classes, HeroCarousel and ScrollReveal; remove only what is proven unused. Re-capture the regression screenshots and confirm they match. Report the acceptance checklist with pass or fail for each item, and list anything you were unsure about as TODO: confirm.

Hard rules: do not edit globals.css except to delete proven-dead hp-* blocks in Step 3; no raw hex or ad-hoc spacing in new CSS; no scroll-reveal; do not change copy.
```