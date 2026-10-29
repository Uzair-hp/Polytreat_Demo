# PolyTreat — Design System & Current-State Audit

> **Purpose of this document:** record the *current* state of the PolyTreat website codebase — the tech stack, every route, every component, the tokens that exist today, and the problems that exist today.
>
> **Nothing in this file is aspirational.** Sections 7 (Target Design System) and 8 (Redesign Rules) are intentionally empty placeholders for the user to fill in later. Section 9 is a checklist template; every page is marked `not started`.
>
> **Method:** all values were extracted from source code (`src/`), not from memory or from the brand guidelines. Where a value is inferred or ambiguous it is marked **`TODO: confirm`**.
>
> **Last audited:** 2026-10-26 · Branch state at commit `e3e89e4` · no code was modified to produce this document.

---

## Table of contents

1. [Overview](#1-overview)
2. [Page inventory](#2-page-inventory)
3. [Component inventory](#3-component-inventory)
4. [Shared components across both segments](#4-shared-components-across-both-segments)
5. [Current design tokens](#5-current-design-tokens)
6. [Current problems](#6-current-problems)
7. [Target Design System](#7-target-design-system-empty--to-be-filled)
8. [Redesign Rules](#8-redesign-rules-empty--to-be-filled)
9. [Per-page redesign checklist](#9-per-page-redesign-checklist)

---

## 1. Overview

### 1.1 What the product is

PolyTreat Chemicals Pvt. Ltd. is an Indian (Mumbai / Tarapur MIDC, Maharashtra) manufacturer of applied chemistry. The site presents **three commercial divisions** in two segments:

| Segment | Name | What it sells | Site area |
|---|---|---|---|
| **A** | Company & industrial services | Industrial water treatment, construction chemistry, surface protection, specialty chemistry; quality/certification assurance; locations; contact/enquiry | `/`, `/about`, `/contact`, `/quality`, `/certifications`, `/industries`, `/solutions/*`, `/specialty/*` — **20 routes** |
| **B** | V-Klin products catalog | Branded packaged cleaning products for home / institutional / facility care, 10 SKUs in 7 care categories | `/vklin`, `/vklin/products`, `/vklin/products/<slug>` — **12 routes** |

The two segments are visually distinguished by a **green vs blue** accent system (green = V-Klin, blue = industrial) rather than by separate codebases — they share the same `Navbar`, `SiteFooter`, `globals.css`, and most visual primitives.

### 1.2 Tech stack

Extracted from `package.json`, `tsconfig.json`, `next.config.ts`:

| Concern | Choice | Source |
|---|---|---|
| Framework | **Next.js 16.4.2** (App Router, `src/app/`) | `package.json` |
| UI runtime | **React 19.3.0** / `react-dom` 19.3.0 | `package.json` |
| Language | **TypeScript 5**, `strict: true`, `noEmit` (type-check only, no bundler step) | `tsconfig.json` |
| Path alias | `@/*` → `./src/*` | `tsconfig.json` |
| Next config flags | `cacheComponents: true`, `partialPrefetching: true`, `devIndicators: false` | `next.config.ts` |
| Remote images allowed | `images.unsplash.com`, `images.pexels.com` | `next.config.ts` |
| Iconography | **`lucide-react` ^1.58.0** (only icon library) | `package.json` |
| Styling | **Vanilla CSS** — one global stylesheet, no CSS-in-JS, **no Tailwind**, no CSS Modules, no Sass | `README.md`, `src/app/globals.css` |
| Linting | ESLint 9 flat config + `eslint-config-next` (core-web-vitals + typescript) | `eslint.config.mjs` |
| Routing | Static file-system routing; no `middleware.ts`, no API routes, no `app/api` directory | `src/app/` |
| Package manager | npm (`package-lock.json` present) | repo root |
| Runtime / CI | Not defined in-repo. No `.github/`, no CI config, no test runner, no test script | repo listing |

### 1.3 Styling approach

- **One global stylesheet:** `src/app/globals.css` — **17,206 lines / ~379 KB**, imported once in `src/app/layout.tsx:2`.
- **Approx. 2,742 CSS rule blocks** in that one file.
- **Plain class-name semantic convention** (`.btn-accent`, `.vklin-product-card`, `.hp-hero-slide`) — no build-time CSS Modules, no scoped styles, no atomic CSS.
- **CSS custom properties** on `:root` define the design tokens (see §5), but they are used **only inside `globals.css`** — no token is consumed from TSX.
- **Variant styling by class concatenation in JSX**, e.g. `className={`industrial-family-card${isWide ? " is-wide" : ""}`}` (`src/components/IndustrialFamilyPage.tsx:126`).
- **Layout primitives:** `.container` (max-width + gutter), `.section` (vertical rhythm), `.section-dark`, `.section-heading`, `.section-heading-split`, `.section-heading-center`, `.text-link`, `.btn` + `.btn-*`, `.badge` + `.badge-*`, `.card`, `.eyebrow` + `.eyebrow-dark/-light/-green`.
- **Client/server split:** *every* page file under `src/app` is a **server component**; interactivity comes only from 7 client components (see §3).
- **Images:** `next/image` with `fill` + `sizes` is used on product and hero imagery; certificate images and a few others use **raw `<img>`** (deliberate, so the browser can load them lazily outside the Image optimizer) — `src/app/about/page.tsx`, `src/app/certifications/page.tsx`.

### 1.4 UI libraries

| Library | Usage |
|---|---|
| `lucide-react` | **Only** icon library. Used for all iconography (nav chevrons, hero glyphs, card icons, footer contact icons, form icons). Icons are imported per-component and sized ad hoc (`size={14}`, `size={15}`, `size={16}`, `size={17}`, `size={18}`, `size={19}`, `size={22}`, `size={40}`, `strokeWidth={1.4}`, `strokeWidth={1.8}`, `strokeWidth={1.9}`, `strokeWidth={2}`). |
| — | **No component library.** No MUI / Chakra / shadcn / Radix / Headless UI. Every card, button, badge, form field, breadcrumb, tab, accordion and table is hand-rolled in `globals.css`. |

### 1.5 Content & data layer

All long-form content lives in plain typed modules under `src/data/` — **no CMS, no API, no database**:

| Module | Exports | Purpose |
|---|---|---|
| `homeImages.ts` | `homeStockImages` (`ImageOption`, `SectionImage`) | Hero + homepage image sources & alt text |
| `industrialFamilies.ts` | `industrialFamilies`, `IndustrialFamily`, `IndustrialFamilyCategory`, `findIndustrialFamily(id)` | 4 catalogue families without their own page (paint preservatives, sugar-process, fireside, automotive) |
| `industrialWater.ts` | `industrialSystems`, `industrialChallenges`, `industrialCategoryGroups`, `industrialExtraFamilies`, `industrialAnchors` | Industrial water treatment content + shared anchor ids |
| `industries.ts` | `operatingEnvironments`, `industrySectors` (12), `productMapGroups` (4), `environmentIcons` | Industries page content |
| `locations.ts` | `locationSites`, `primaryContactSite` | 3 sites: Goregaon West, Goregaon East, Tarapur |
| `specialtyProducts.ts` | `specialtyProducts` (3), `specialtyOtherLines`, `specialtyApplicationGroups`, `corosilProcessSteps`, `corosilSpecifications`, `corosilFinishingSystems`, `polyklinMethod`, `polyklinEquipment`, `findSpecialtyProduct(slug)` | Flagship specialty products |
| `vklinProducts.ts` | `vklinProductGroups` (7 groups / 10 products), `VKlinProduct`, `vklinProductCount`, `findVKlinProduct(id)`, `findVKlinProducts(shortNames[])` | V-Klin catalog |
| `constructionRange.ts` | `constructionFamilies`, `ConstructionFamily`, `ConstructionProduct`, `findConstructionFamilies(ids[])`, `constructionRangeNote` | Construction product families + individual products |

---

## 2. Page inventory

**32 routes total** (30 → `page.tsx` count is 32 files; 1 additional `layout.tsx`).

**Segment A — Company / services (20 routes)**

### 2.A.1 Global chrome

| Route | File | Purpose | Components used | Client? |
|---|---|---|---|---|
| (root layout) | `src/app/layout.tsx` | `<html>`/`<body>` shell, global metadata (`title`, `description`, `keywords`), viewport (`themeColor: #0B192C`), mounts Navbar + SiteFooter around every page | `Navbar` (client), `SiteFooter` (server) | server |

### 2.A.2 Top-level pages

| Route | File | Purpose | Main sections (class names) | Components used |
|---|---|---|---|---|
| `/` | `src/app/page.tsx` (661 ln) | Corporate homepage: hero, quality strip, four product ranges, full product map, applications, flagship specialty, V-Klin spotlight, story + PQRS, contact band | `section.hp-hero`, `section.certifications-strip`, `section.hp-section.hp-section-tint#ranges`, `section.hp-section#range-map`, `section.hp-section.hp-section-tint#applications`, `section.hp-section.hp-section-flagship#flagship`, `section.hp-section.hp-section-vklin#vklin`, `section.hp-section.hp-section-story#story`, `section.hp-section.hp-section-contact#contact` | `HeroCarousel`, `ScrollReveal`; local `WhatsAppCta` |
| `/about` | `src/app/about/page.tsx` (391 ln) | Company profile: hero + fact strip, at-a-glance panel, trust-proof bar, story + timeline, 4 brands, 3 facilities, QC/R&D panel, ISO certificate, contact band | `section.about-hero`, `.trust-proof-bar`, `section.section.about-band#story`, `section.section#brands`, `section.section.about-band-alt#infrastructure`, `section.section#quality`, `section.section.about-band#certification`, `section.contact-section` | none (raw `<img>` for the certificate) |
| `/certifications` | `src/app/certifications/page.tsx` (174 ln) | Card library of the 4 supplied compliance documents + how to read them + request block | `section.certs-hero`, `section.section#certificate-library`, `section.section.about-band` | none (inline `certificates[]` data) |
| `/contact` | `src/app/contact/page.tsx` (118 ln) | Contact hub: head office, email/phone channels, other branches, enquiry form, embedded Google Map with location switcher | `section.contact-reference-hero`, `section.contact-reference-main` (`#contact-form` on `.contact-reference-form-wrap`), `section.contact-reference-map-section#locations` | `ContactForm`, `LocationMap` |
| `/industries` | `src/app/industries/page.tsx` (195 ln) | Organise the range by operating environment, full product map, 12 industry sectors, contact band | `section.industries-page-hero`, `section.industries-area-section#industry-areas`, `section.industries-map-section#product-map`, `section.industries-sector-section#industry-sectors`, `section.industries-contact-band` | none |
| `/quality` | `src/app/quality/page.tsx` (95 ln) | Explain the PQRS framework; route to certificates and TDS/SDS requests | `section.quality-hero`, `section.section.quality-pqrs#pqrs`, `section.section.quality-resources` | `QualityPrinciples` |

### 2.A.3 Solutions — industrial water treatment (Segment A core)

| Route | File | Purpose | Components used | Pattern |
|---|---|---|---|---|
| `/solutions/industrial-water` | `src/app/solutions/industrial-water/page.tsx` (243 ln) | Hub: 4 systems (boiler, cooling, RO, effluent), system challenges, treatment categories, catalogue families without their own page | none | Bespoke hub |
| `/solutions/boiler-cooling-water` | `src/app/solutions/boiler-cooling-water/page.tsx` (133 ln) | Boiler water + cooling water contexts | none | Near-clone of `/solutions/ro-effluent` |
| `/solutions/ro-effluent` | `src/app/solutions/ro-effluent/page.tsx` (138 ln) | RO membrane + industrial effluent categories | none | Near-clone of `/solutions/boiler-cooling-water` |

All three reuse the CSS vocabulary `.industrial-water-hero`, `.industrial-water-hero-layout`, `.industrial-water-hero-copy`, `.industrial-water-breadcrumbs`, `.industrial-water-figure`, `.industrial-water-section-heading`, `.boiler-cooling-grid`, `.boiler-cooling-card`, `.boiler-cooling-contexts`, `.boiler-cooling-overview-link`, `.industrial-water-contact`.

### 2.A.4 Solutions — construction chemistry & surface protection

| Route | File | Purpose | Components used | Notes |
|---|---|---|---|---|
| `/solutions/construction-chemistry` | `src/app/solutions/construction-chemistry/page.tsx` (174 ln) | Hub: 4 application areas + full branded construction range | `ConstructionRange` (`familyIds` = 6 families, `showCorosil`, `title`, `intro`) | Bespoke hub |
| `/solutions/waterproofing-repair-coatings` | `src/app/solutions/waterproofing-repair-coatings/page.tsx` (160 ln) | Waterproofing, concrete repair/bonding, building-surface coatings | `ConstructionRange` (4 families, `showCorosil`) | Near-clone of `/solutions/flooring-joint-sealing` |
| `/solutions/flooring-joint-sealing` | `src/app/solutions/flooring-joint-sealing/page.tsx` (145 ln) | Protective flooring/coatings + joint & crack sealants | `ConstructionRange` (2 families, `showCorosil` omitted) | Near-clone of the previous page |

### 2.A.5 Solutions — remaining catalogue families (thin wrappers)

| Route | File | Purpose | Props passed to `IndustrialFamilyPage` |
|---|---|---|---|
| `/solutions/paint-preservatives` | `src/app/solutions/paint-preservatives/page.tsx` (37 ln) | Paint preservatives (wet-state, dry-state, cement paints) | `family={findIndustrialFamily("paint-preservatives")}`, `icon={PaintBucket}`, `categoryIcons` (4), `mainClassName="paint-preservatives-page"`, `figureImage` |
| `/solutions/sugar-process-chemicals` | `src/app/solutions/sugar-process-chemicals/page.tsx` (38 ln) | Sugar-mill hygiene, antiscalants, viscosity reducers, evaporator softeners | `family={findIndustrialFamily("sugar-process-chemicals")}`, `icon={Wheat}`, `categoryIcons` (5), `mainClassName="sugar-process-page"`, `figureImage` |
| `/solutions/fireside-treatment` | `src/app/solutions/fireside-treatment/page.tsx` (37 ln) | Combustion-side boiler treatment | `family={findIndustrialFamily("fireside-treatment")}`, `icon={Flame}`, `categoryIcons` (4), `mainClassName="fireside-page"`, `figureImage` |
| `/solutions/automotive-chemicals` | `src/app/solutions/automotive-chemicals/page.tsx` (34 ln) | Vehicle engine-coolant chemistry | `family={findIndustrialFamily("automotive-chemicals")}`, `icon={Car}`, `categoryIcons` (1), `mainClassName="automotive-chemicals-page"`, `figureImage` |

All four render the identical 3-section shell: `section.industrial-family-hero` → `section.industrial-family-categories#family-categories` → `section.industrial-family-contact`.

### 2.A.6 Specialty products

| Route | File | Purpose | Components used |
|---|---|---|---|
| `/specialty` | `src/app/specialty/page.tsx` (143 ln) | Hub for the 3 flagship specialty products + further specialty lines | none |
| `/specialty/corosil` | `src/app/specialty/corosil/page.tsx` (97 ln) | COROSIL rust converter primer: 3-step method, published data, compatible finishing systems | `SpecialtyProductDetail` (`product`, `icon={ShieldCheck}`) + 3 child sections |
| `/specialty/polydor-ws` | `src/app/specialty/polydor-ws/page.tsx` (71 ln) | POLYDOR-WS odour neutraliser: application areas, "odour control ≠ disinfection" | `SpecialtyProductDetail` (`icon={Wind}`) + 2 child sections |
| `/specialty/polyklin` | `src/app/specialty/polykyin/page.tsx` *(actual path `polyklin`)* | POLYKLIN AHU/FCU coil cleaner: equipment, spray-and-rinse method | `SpecialtyProductDetail` (`icon={Snowflake}`) + 2 child sections |

### 2.B — Products catalog (Segment B: V-Klin)

### 2.B.1 Catalog index pages

| Route | File | Purpose | Main sections | Components used |
|---|---|---|---|---|
| `/vklin` | `src/app/vklin/page.tsx` (169 ln) | V-Klin brand landing: 7 care categories, route into the catalogue | `section.vklin-page-hero`, `section.section.vklin-page-categories#vklin-categories` | none (inline `categories[]`, `/vklin-logo.webp`) |
| `/vklin/products` | `src/app/vklin/products/page.tsx` (102 ln) | Full V-Klin catalogue: 7 groups, product cards, category jump-nav | `section.vklin-products-hero`, `nav.vklin-products-category-nav`, `section.vklin-product-group#<id>` ×7, `.vklin-products-footer-cta` | none (`vklinProductGroups`) |

### 2.B.2 Product detail pages — 10 routes, all thin wrappers

Every one of the 10 files is a ~20-line server component: look up the product → `notFound()` if missing → render `<VklinProductDetail product={product} />`. Only `PRODUCT_ID`, `metadata`, and the component function name differ.

| Route | File | `PRODUCT_ID` passed to `findVKlinProduct` | Category group |
|---|---|---|---|
| `/vklin/products/golden-floor-cleaner` | `src/app/vklin/products/golden-floor-cleaner/page.tsx` | `golden-floor-cleaner` | Floor & surface care |
| `/vklin/products/protector-floor-cleaner-lemon` | `src/app/vklin/products/protector-floor-cleaner-lemon/page.tsx` | `protector-floor-cleaner-lemon` | Floor & surface care |
| `/vklin/products/perfumed-floor-cleaner-floral` | `src/app/vklin/products/perfumed-floor-cleaner-floral/page.tsx` | `perfumed-floor-cleaner-floral` | Floor & surface care |
| `/vklin/products/multipurpose-surface-cleaner` | `src/app/vklin/products/multipurpose-surface-cleaner/page.tsx` | `multipurpose-surface-cleaner` | Surface care |
| `/vklin/products/perfumed-liquid-soap-aqua` | `src/app/vklin/products/perfumed-liquid-soap-aqua/page.tsx` | `perfumed-liquid-soap-aqua` | Hand care & hygiene |
| `/vklin/products/dishwash-liquid-gel-lemon` | `src/app/vklin/products/dishwash-liquid-gel-lemon/page.tsx` | `dishwash-liquid-gel-lemon` | Dishwashing |
| `/vklin/products/glass-cleaner` | `src/app/vklin/products/glass-cleaner/page.tsx` | `streak-free-glass-cleaner` ⚠︎ *folder name ≠ data id* | Glass & window care |
| `/vklin/products/power-plus-toilet-cleaner` | `src/app/vklin/products/power-plus-toilet-cleaner/page.tsx` | `power-plus-toilet-cleaner` | Bathroom & toilet care |
| `/vklin/products/air-freshener-ac-duct-odour-eliminator` | `src/app/vklin/products/air-freshener-ac-duct-odour-eliminator/page.tsx` | `air-freshener-ac-duct-odour-eliminator` | Odour & air care |
| `/vklin/products/herbal-mosquito-repellent` | `src/app/vklin/products/herbal-mosquito-repellent/page.tsx` | `herbal-mosquito-repellent` | Natural wellness |

All 10 render the same 6–7 section shell from `VklinProductDetail`: `section.vklin-product-detail-hero` → `section.vklin-product-detail-overview` → `section.vklin-product-detail-usage` → `section.vklin-product-detail-specs` *(conditional on `specifications.length > 0`)* → `section.vklin-product-detail-handling` → `section.vklin-product-detail-information`.

### 2.C Route-level notes

- **There is no `/solutions` index route.** `SiteFooter` labels the `/solutions/industrial-water` URL as "Solutions" (`src/components/SiteFooter.tsx:6`).
- **No `app/api`, no `middleware.ts`, no sitemap/robots route** — `TODO: confirm` whether SEO routes are planned.
- **Every page declares its own `metadata`** (title + description). Titles are inconsistently suffixed: some use `"| PolyTreat Chemicals"`, some `"| PolyTreat Chemicals Pvt. Ltd."`, the 10 V-Klin detail pages use `"| V-Klin by PolyTreat"`.
- **`generateStaticParams` is not used** for the V-Klin or specialty product routes — the pages are resolved via `find*` lookups at request time (and via `notFound()`).

---

## 3. Component inventory

All components live in `src/components/` (12 files). There is no `src/components/ui/`, no primitives layer, no barrel export.

| # | Component | File | Type | Props | Used by | Variants / states |
|---|---|---|---|---|---|---|
| 1 | `Navbar` | `src/components/Navbar.tsx` (503 ln) | client | none | `layout.tsx` (all routes) | 4 dropdown menus (`products`, `vklin`, `quality`, `company`) × desktop mega-panel + mobile accordion; hover-intent with 180 ms close delay; Escape key close; viewport clamp; 1024 px desktop switch |
| 2 | `SiteFooter` | `src/components/SiteFooter.tsx` (77 ln) | server | none | `layout.tsx` (all routes) | 3 link columns (`Explore`, `Our work`, `Contact`) + bottom bar |
| 3 | `TopBar` | `src/components/TopBar.tsx` (31 ln) | server | none | **UNUSED — not imported anywhere** | Orphan component; CSS `.topbar*` still exists and is fully styled |
| 4 | `HeroCarousel` | `src/components/HeroCarousel.tsx` (192 ln) | client | none | `/` | 3 slides (water / construction / vklin); autoplay 6800 ms; pauses on hover/focus/reduced-motion; tab buttons; `aria-live` lead line |
| 5 | `ScrollReveal` | `src/components/ScrollReveal.tsx` (46 ln) | client | none | `/` | Renders `null`; adds `.is-visible` to `.hp-reveal`, `.hp-reveal-scale`, `.hp-stagger`; disabled under reduced motion |
| 6 | `QualityPrinciples` | `src/components/QualityPrinciples.tsx` (84 ln) | client | none | `/quality` | 4 tiles P/Q/R/S, each with `.quality-principle-{p,q,r,s}`; own IntersectionObserver |
| 7 | `ContactForm` | `src/components/ContactForm.tsx` (243 ln) | client | none | `/contact` | 6 fields (name, company, email, phone, division select, message); per-field validation; `roles`/`aria-invalid`/`aria-describedby`; `mailto:` draft on submit; `noValidate` |
| 8 | `LocationMap` | `src/components/LocationMap.tsx` (69 ln) | client | `locations: { id: string; title: string; address: string }[]` | `/contact` | Active-location state, `aria-pressed` toggle buttons, Google Maps iframe, "Open in Maps" link |
| 9 | `IndustrialFamilyPage` | `src/components/IndustrialFamilyPage.tsx` (171 ln) | server | `family: IndustrialFamily`; `icon: LucideIcon`; `categoryIcons?: Record<string, LucideIcon>`; `mainClassName?: string`; `figureImage?: { src; alt; caption }` | 4 solutions pages | `is-single` grid (1 category), `is-wide` grid (odd count); image panel vs icon placeholder |
| 10 | `ConstructionRange` | `src/components/ConstructionRange.tsx` (89 ln) | server | `familyIds: string[]`; `title: string`; `intro: string`; `showCorosil?: boolean` | 3 construction pages | Optional COROSIL cross-link card (`.is-linked`) |
| 11 | `SpecialtyProductDetail` | `src/components/SpecialtyProductDetail.tsx` (165 ln) | server | `product: SpecialtyProduct`; `icon: LucideIcon`; `children?: ReactNode` | 3 specialty pages | Slot-based: each page injects 2–3 unique middle sections |
| 12 | `VklinProductDetail` | `src/components/VklinProductDetail.tsx` (235 ln) | server | `product: VKlinProduct` | 10 V-Klin detail pages | Conditional specs section; `is-wide` facts; `is-stacked` overview layout; `is-note` handling card |

### 3.1 Inline / page-local components

| Component | File | Notes |
|---|---|---|
| `WhatsAppCta` | `src/app/page.tsx` | Local inline component, props `{ className?: string }`, renders `.hp-whatsapp-link` + `.hp-whatsapp-arrow`. **The only shared-looking piece of CTAs that was not extracted into `src/components/`.** |
| `MenuGroupLinks` | `src/components/Navbar.tsx:155` | Internal (not exported) — renders the 3-column link group inside both the desktop mega-panel and the mobile accordion. |

### 3.2 CSS-only "component" families (no React component exists)

These patterns are fully specified in CSS and repeated in markup but have **no shared React component**:

| Pattern | CSS families (exact class names) | Used on |
|---|---|---|
| Hero | `about-hero`, `certs-hero`, `contact-reference-hero`, `construction-chemistry-hero`, `home-hero`, `hp-hero`, `industrial-family-hero`, `industrial-water-hero`, `industries-page-hero`, `quality-hero`, `specialty-hero`, `specialty-product-hero`, `vklin-page-hero`, `vklin-product-detail-hero`, `vklin-products-hero` — **15 separate hero implementations** | all segments |
| Breadcrumb | `construction-chemistry-breadcrumbs`, `industrial-family-breadcrumbs`, `industrial-water-breadcrumbs`, `industries-breadcrumbs`, `specialty-breadcrumbs`, `specialty-product-breadcrumbs`, `vklin-product-detail-breadcrumbs`, `vklin-products-breadcrumbs` — **8 separate breadcrumb implementations** | Segment A + B |
| Facts / spec table | `about-facts`, `hp-story-facts`, `industrial-family-facts`, `specialty-product-facts`, `specialty-product-specs-table`, `vklin-product-detail-facts`, `vklin-product-specs-table` — **7 `dl`-based fact/table patterns** | Segment A + B |
| Text / back link | `text-link`, `construction-chemistry-text-link`, `construction-detail-back`, `construction-surface-back`, `industrial-family-back`, `industrial-family-text-link`, `industrial-water-text-link`, `specialty-product-back`, `vklin-page-text-link`, `vklin-product-detail-back` — **10 separate link variants** | Segment A + B |
| Contact / CTA band | `construction-contact-band`, `contact-panel`, `hp-contact-panel`, `industries-contact-band`, `specialty-cta`, `specialty-product-information`, `vklin-product-detail-information`, `vklin-products-footer-cta` — **8 separate CTA bands** | Segment A + B |
| Section heading | `section-heading`, `section-heading-split`, `section-heading-center`, `hp-section-heading`, `hp-heading-tight`, `industries-section-heading`, `industrial-water-section-heading`, `construction-areas-heading`, `specialty-section-heading` — **9 variants** | Segment A + B |
| Card | `card`, `cert-card`, `division-gateway-card`, `hp-flag-card`, `hp-map-group`, `hp-range-card`, `industrial-family-card`, `industrial-water-card`, `boiler-cooling-card`, `vklin-page-category-card`, `vklin-product-card`, `specialty-range-card`, `portfolio-card`, `infra-card`, `quality-resource-card`, `contact-reference-card` — **16 card styles** | Segment A + B |
| Badge | `badge`, `badge-blue`, `badge-green`, `badge-amber`, `hp-badge-{blue,slate,teal,green}`, `division-identifier-{industrial,vklin}` | Segment A + B |
| Eyebrow | `eyebrow`, `eyebrow-dark`, `eyebrow-light`, `eyebrow-green`, `cert-strip-eyebrow`, `portfolio-eyebrow`, `specialty-kicker`, `specialty-product-kicker`, `vklin-product-group-kicker`, `quality-resource-kicker`, `hp-map-group-summary` | Segment A + B |

---

## 4. Shared components across both segments

Everything listed here is rendered identically on Segment A and Segment B pages — this is the actual shared surface today.

### 4.1 Global chrome (on all 32 routes)

| Element | Implementation | Notes |
|---|---|---|
| **Header** | `src/components/Navbar.tsx` → `<header class="site-header">` → `.navbar-inner` | Sticky, `z-index: 100`, blur backdrop. Contains: `Link.navbar-brand` (logo `/logo.png` via `next/image` `fill` + `priority`), `nav.desktop-nav`, `.navbar-actions` (`Link.btn.btn-accent.navbar-cta` "Request a Quote" → `/contact#contact-form`, and `button.mobile-menu-btn`). The navbar is **segment-aware** through its menu data: `menuGroups` / `menuLabels` / `menuPromos` records for `products` (label "Solutions"), `vklin` (label "V-Klin"), `quality`, `company` (label "About Us"). |
| **Top utility bar** | `src/components/TopBar.tsx` → `.topbar` | **NOT MOUNTED.** Component exists and is fully styled (`.topbar*` CSS ~120 lines) but is not imported by `layout.tsx` or any page. The contact details it carries are duplicated inside `SiteFooter` and the `/contact` page. |
| **Footer** | `src/components/SiteFooter.tsx` → `<footer class="site-footer">` | `.footer-main` (brand + `Explore` + `Our work` + `Contact`) and `.footer-bottom` (copyright / PQRS strapline / Brightlant credit). Email `polyind2@gmail.com`, phone `+91 98202 35995` are hardcoded here and again in `ContactForm.tsx:6-7` and `TopBar.tsx`. |
| **Global contact details** | Hardcoded in 3 places: `SiteFooter.tsx:61-63`, `ContactForm.tsx:6-7` (`supportEmail`, `supportPhone`), `TopBar.tsx:15,22` | No shared `companyInfo` module. |

### 4.2 Buttons (used across both segments)

Only three button variants are actually used in JSX: `btn btn-accent`, `btn btn-primary`, `btn btn-vklin`.
Defined in CSS: `.btn`, `.btn-primary`, `.btn-accent`, `.btn-bio`, `.btn-outline`, `.btn-outline-dark`, `.btn-vklin`, `.btn-light`, plus `.navbar-cta`, `.mobile-cta`, `.hp-btn-whatsapp`, `.hero-primary-cta`, `.hero-audit-cta`.

| Variant | Definition | Where used |
|---|---|---|
| `.btn` | `globals.css:353` — inline-flex, `padding: 0.75rem 1.5rem`, `border-radius: var(--radius-sm)`, `transition: all` | base for every button |
| `.btn-primary` | `globals.css:370` — flat `--color-water-blue`, white text | `ContactForm` submit, `/about` certificate CTA, `/certifications` request button, `/quality` hero |
| `.btn-accent` | `globals.css:382`, **re-defined at `globals.css:1699`** (background → `var(--gradient-brand)`) | `Navbar` CTA, `HeroCarousel`, `IndustrialFamilyPage`, `SpecialtyProductDetail`, all 6 solutions pages, `/specialty`, `/industries` |
| `.btn-vklin` | `globals.css:2873`, **re-defined at `globals.css:16905`** (box-shadow + transition override) | `VklinProductDetail`, `/vklin`, `/vklin/products`, homepage V-Klin panel |
| `.btn-outline` | `globals.css:406` — transparent, `rgba(255,255,255,.3)` border, white text (designed for dark backgrounds) | **unused in JSX**; overridden inside `.home-hero` to a light style |
| `.btn-outline-dark` | `globals.css:417` | `/about` only |
| `.btn-bio` | `globals.css:395` | **unused in JSX** |
| `.btn-light` | `globals.css:3272` | **unused in JSX** |
| `.hero-primary-cta`, `.hero-audit-cta` | `globals.css:276`, `287` | **unused in JSX** (legacy `.hero-*` block) |
| `.hp-btn-whatsapp` | homepage | `HeroCarousel` |

### 4.3 Cards (used across both segments)

The single generic `.card` class (`globals.css:460`) — white surface, `--color-border-subtle` border, `--radius-md`, `--shadow-sm`, hover lifts `-3px` — is defined but **heavily under-used**. The 16 page-specific card styles listed in §3.2 each hand-roll their own surface, radius, padding and hover behaviour instead of composing `.card`.

### 4.4 Forms

Only **one** form exists in the entire codebase: `ContactForm` (Segment A, `/contact`). **Segment B has no form** — every V-Klin product CTA is a mailto-less `Link` to `/contact#contact-form` (`src/components/VklinProductDetail.tsx:65, 228`).

Form element class family: `.contact-form-panel`, `.contact-redesign-form`, `.contact-form-head`, `.contact-form-grid`, `.contact-field`, `.contact-field-full`, `.contact-form-foot`, `.contact-form-actions`, `.contact-form-status`, `.contact-form-note`, `.contact-field-error`.
Field control styling lives under `.contact-field input/select/textarea` (no shared `.input`/`.select`/`.textarea` primitives).

### 4.5 Other genuinely shared building blocks

| Element | Shared class | Scope |
|---|---|---|
| Section container | `.container` (max-width 1320 px after the "Homepage refresh" override at `globals.css:1597`; originally 1240 px) | Global |
| Section rhythm | `.section` (`padding: 5rem 0`), `.section-dark`, `.hp-section`, `.hp-section-tint`, `.hp-section-flagship`, `.hp-section-vklin`, `.hp-section-story`, `.hp-section-contact`, `.about-band`, `.about-band-alt` | Global |
| Eyebrow label | `.eyebrow` + `.eyebrow-dark` / `.eyebrow-light` / `.eyebrow-green` | Both segments |
| Badge / pill | `.badge` + `.badge-blue` / `.badge-green` / `.badge-amber`; `.sku-pill`, `.application-chips li` | Both segments |
| Text link | `.text-link` (used on homepage, `/about`, `/certifications`) — but **9 other near-variants exist** (see §3.2) | Both segments |
| Primary CTA | `.btn.btn-accent` (both segments) vs `.btn.btn-vklin` (Segment B) | Both |
| Dark theme block | `.section-dark` + `.hero-*` legacy classes | Segment A only in practice |
| Scroll-reveal | `.hp-reveal`, `.hp-reveal-scale`, `.hp-stagger` + `ScrollReveal` component | Homepage only |
| Intersection reveal | `.quality-principles.is-visible` + `QualityPrinciples` component | `/quality` only |

---

## 5. Current design tokens

All extracted verbatim from `src/app/globals.css` `:root` (lines 1–53). These are the **only** design tokens that exist.

### 5.1 Colour

#### Declared custom properties

| Token | Value | Stated role (from the source comment) |
|---|---|---|
| `--color-primary-dark` | `#0B192C` | Deep Navy / Authority / Footer / Hero Dark |
| `--color-primary-navy` | `#1C5F91` | Brand blue for cards / headers |
| `--color-water-blue` | `#1769A6` | Brand blue for links and actions |
| `--color-water-light` | `#B9D9E8` | Pale blue from the card artwork |
| `--color-bio-green` | `#10B981` | Emerald Green / Eco-safe |
| `--color-bio-dark` | `#059669` | Darker Green for buttons & badges |
| `--color-bio-light` | `#D1FAE5` | Light Green badge tint |
| `--color-accent-cta` | `#1769A6` | Keep calls to action on-brand |
| `--color-accent-hover` | `#125682` | — |
| `--color-surface-white` | `#FFFFFF` | Clean card surfaces |
| `--color-surface-light` | `#F8FAFC` | Section background tint |
| `--color-surface-alt` | `#F1F5F9` | Alternate spec tables |
| `--color-border-subtle` | `#E2E8F0` | Border lines |
| `--color-border-dark` | `#1E293B` | Dark mode card borders |
| `--color-scroll-track` | `#EDF4F7` | — |
| `--color-scroll-thumb` | `#2589B8` | — |
| `--color-text-main` | `#0F172A` | High-contrast body text |
| `--color-text-muted` | `#64748B` | Secondary details & specs |
| `--color-text-light` | `#F8FAFC` | Text on dark backgrounds |

#### Declared gradients

| Token | Value |
|---|---|
| `--gradient-brand` | `linear-gradient(135deg, #1769A6 0%, #0F4C75 100%)` |
| `--gradient-vklin` | `linear-gradient(135deg, #10B981 0%, #047857 100%)` |
| `--gradient-hero` | `linear-gradient(115deg, #071320 0%, #0B192C 52%, #123B5B 100%)` — declared, **not referenced anywhere in the stylesheet** |

#### Actual colour usage (measured over the whole stylesheet)

| Hex | Occurrences | Has a token? |
|---|---|---|
| `#FFFFFF` / `#FFF` | 188 / 29 | yes (`--color-surface-white`) |
| `#1769A6` | 119 | yes (`--color-water-blue`, `--color-accent-cta`) |
| `#0B192C` | 53 | yes (`--color-primary-dark`) |
| `#DCE8EE` | 23 | **no token** |
| `#102D42` | 22 | **no token** |
| `#047857` | 21 | partial (a near-duplicate of `--color-bio-dark` `#059669`) |
| `#087A78` | 19 | **no token** (teal, used for "strong" emphasis + navbar CTA gradient) |
| `#5C7182` | 14 | **no token** |
| `#EAF3F8` | 13 | **no token** (the de-facto tint background; used ~30× including inside gradients) |
| `#059669` | 13 | yes (`--color-bio-dark`) |
| `#12372B` | 13 | **no token** |
| `#145987` | 11 | **no token** (darker link colour) |
| `#62798A` / `#657C8D` / `#71837A` / `#526779` / `#526D7E` | 11 / 9 / 6 / 6 / 6 | **no token** — five separate body-text greys |
| `#087A58` | 11 | **no token** (green text) |
| `#F4F8FA` `#F8FBFC` `#F4FAFD` `#F2F8FC` `#EDF7FB` `#F5F9FC` `#F3FAFC` | 11 / 11 / 10 / 7 / 7 / 6 / 6 | **no token** — eight separate near-white section backgrounds |
| `#2589B8` | 9 | **no token** (scrollbar thumb, hero particle) |
| `#7DD3FC` | 7 | **no token** (highlight gradient stop) |
| `#EAF8F0` `#E9F7F1` `#F1FAF5` `#DCEFE4` `#F7FAF9` | 8 / 6 / 8 / 9 / 8 | **no token** — green tints |

**Summary:** ~18 colour tokens exist but **800+ raw hex literals** are in the file. Only 3 greens (`#059669`, `#047857`, `#087A58`) and 4 blues (`#1769A6`, `#1C5F91`, `#145987`, `#2589B8`) are even *nearly* tokenised.

### 5.2 Typography

| Token | Value |
|---|---|
| `--font-heading` | `"Segoe UI", Arial, sans-serif` |
| `--font-body` | `"Segoe UI", Roboto, Arial, sans-serif` |
| `--font-mono` | `"Cascadia Code", "SFMono-Regular", Consolas, monospace` |

- **No web fonts.** No `@font-face`, no `next/font/google`, no font files in `public/`. The site renders in the OS system stack — heading and body are the *same* family (Segoe UI), so typographic hierarchy comes only from size/weight/colour.
- `body { line-height: 1.6; }`
- `h1..h6 { font-weight: 700; line-height: 1.25; letter-spacing: -0.02em; }`
- `p { color: var(--color-text-muted) }` — body copy is muted grey by default.
- `a { color: inherit; text-decoration: none; transition: color var(--transition-fast); }` — **links have no underline by default**, so link affordance relies entirely on colour.

**Measured font-size usage: ~150 distinct values.** Most-used fixed values:

| Size | Uses | | Size | Uses |
|---|---|---|---|---|
| `0.68rem` | 25 | | `0.82rem` | 34 |
| `0.7rem` | 23 | | `0.84rem` | 13 |
| `0.72rem` | 17 | | `0.86rem` | 13 |
| `0.74rem` | 11 | | `0.88rem` | 17 |
| `0.75rem` | 15 | | `0.9rem` | 8 |
| `0.76rem` | 22 | | `0.95rem` | 11 |
| `0.78rem` | 23 | | `1rem` | 9 |
| `0.8rem` | 27 | | `1.05rem` | 9 |

Plus ~150 `clamp()` fluid headings, each authored individually (e.g. `clamp(3.2rem, 5.5vw, 5.35rem)` on the homepage h1, `clamp(1.8rem, 3vw, 2.5rem)` on the division heading). **There is no type scale.**

### 5.3 Spacing

**No spacing tokens exist.** Padding/margin/gap are written as ad-hoc `rem` literals throughout. Most common rhythm values observed: `0.25rem`, `0.5rem`, `0.6rem`, `0.75rem`, `0.85rem`, `1rem`, `1.15rem`, `1.25rem`, `1.4rem`, `1.5rem`, `1.75rem`, `2rem`, `2.5rem`, `3rem`, `5rem`.

```
.container { padding-left: 1.5rem; padding-right: 1.5rem; }
.section   { padding-top: 5rem;  padding-bottom: 5rem; }
```

### 5.4 Radii

Declared tokens: `--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 16px`, `--radius-full: 9999px`.

**Actual radii values used in the stylesheet (by frequency):**

| Value | Uses | Token? |
|---|---|---|
| `999px` | 39 | ~`--radius-full` (but written literally) |
| `50%` | 37 | circles |
| `16px` | 25 | `--radius-lg` ✓ |
| `14px` | 24 | **no token** |
| `12px` | 23 | **no token** |
| `18px` | 22 | **no token** |
| `13px` | 19 | **no token** |
| `10px` | 18 | `--radius-md` ✓ |
| `20px` | 15 | **no token** |
| `11px` | 14 | **no token** |
| `8px` | 13 | **no token** |
| `17px` `22px` `9px` `7px` `3px` `24px` `26px` | 10 / 9 / 6 / 2 / 7 / 4 / 3 | **no token** |

**21 distinct radius values** against 4 tokens; 5 of them (`8px`, `12px`, `14px`, `18px`, `20px`) are used more often than the tokenised `--radius-md`.

### 5.5 Shadows

Declared tokens: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-glow`.

```
--shadow-sm:    0 1px 2px 0 rgba(0,0,0,0.05)
--shadow-md:    0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.05)
--shadow-lg:    0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.03)
--shadow-xl:    0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.04)
--shadow-glow:  0 0 20px rgba(23,105,166,0.22)
```

**Measured: 223 `box-shadow:` declarations**, of which only ~30 use a token. The rest are hand-written literals, e.g. `0 8px 24px rgba(11,25,44,0.055)`, `0 16px 32px rgba(11,25,44,0.1)`, `0 24px 60px rgba(11,25,44,0.16)`, `0 5px 16px rgba(23,105,166,0.24)`, `0 20px 55px rgba(16,91,65,0.08)`.

### 5.6 Transitions

| Token | Value | Used |
|---|---|---|
| `--transition-fast` | `0.15s ease` | widespread |
| `--transition-normal` | `0.25s ease` | `.btn`, `.card` |
| `--transition-slow` | `0.4s cubic-bezier(0.16, 1, 0.3, 1)` | **declared but never referenced** |

`transition: all` appears **5 times** (base `.btn`, `.card`, plus a few card overrides) — `all` transitions properties that should not animate (e.g. `border-color` is fine, but `all` also animates `background-size`, `grid-template-columns`, etc.).

### 5.7 Breakpoints

**19 distinct breakpoint values** are used across the stylesheet — there is no scale:

| Value | Where |
|---|---|
| `280px`, `360px`, `370px`, `380px`, `420px`, `430px` | narrow-phone fallbacks |
| `440px`, `480px`, `560px`, `600px`, `620px`, `640px` | small breakpoints |
| `760px`, `768px` | **both used** — 760 px in ~28 places, 768 px in 5 places |
| `900px`, `1000px`, `1023px`, `1024px` | **both used** for the desktop switch — `1023px` and `1024px` describe the same boundary |
| `1050px`, `1100px`, `1150px`, `1180px`, `1300px`, `1360px`, `1439px`, `1440px` | wide-desktop tweaks |

**Total: 116 `@media` blocks** in one stylesheet. The JS mirrors one of them: `const DESKTOP_BREAKPOINT = 1024;` (`src/components/Navbar.tsx:21`).

### 5.8 Motion

**34 `@keyframes`** in `globals.css`:

`hero-bottle-float`, `hero-card-drift`, `hero-chip-float`, `hero-copy-arrive`, `hero-core-drift`, `hero-core-float`, `hero-highlight-word-arrive`, `hero-layer-shift`, `hero-leaf-sway`, `hero-molecule-circulate`, `hero-node-drift`, `hero-orbit-breathe`, `hero-orbit-spin`, `hero-particle-drift`, `hero-reaction-pulse`, `hero-slide-copy-enter`, `hp-dot-pulse`, `hp-fade-copy`, `hp-gradient-text`, `hp-hero-entrance`, `hp-hero-gradient-shift`, `hp-hero-visual-entrance`, `hp-orb-float`, `hp-reveal-scale`, `hp-reveal-up`, `nav-panel-in`, `pqrs-icon-glow`, `pqrs-icon-glow-green`, `quality-card-reveal`, `quality-track-draw`, `quality-track-travel`, `section-fade-in`.

25 `@media (prefers-reduced-motion: reduce)` blocks guard fragments of these, but they cover only a subset (mostly the `hero-*` family) — see §6.6.

### 5.9 Layout container & spacing constants actually in use

| Value | Where |
|---|---|
| `.container` max-width | `1240px` originally → **overridden to `1320px`** at `globals.css:1597` ("Homepage refresh"). The navbar uses its own `1400px` (also overriding an earlier `1360px`), and the topbar `1360px`. |
| `.navbar-inner` max-width | `1360px` → **overridden to `1400px`** at `globals.css:1662` |
| `.navbar-inner` min-height | `56px` → **overridden to `66px`** at `globals.css:1664` |
| `.section` padding | `5rem` vertical |
| `.site-header` | `position: sticky; top: 0; z-index: 100;` + `backdrop-filter: blur(16px)` |

---

## 6. Current problems

Ordered by impact. Every item is grounded in a specific file/line.

### 6.1 Monolithic stylesheet with layered duplicate definitions

`src/app/globals.css` is **17,206 lines / ~379 KB / ~2,742 rules** — a single global file imported once. It has grown by *appending*, not by refactoring. The same selectors are defined two or three times, with the later definition silently winning.

Confirmed redefinitions:

| Selector | First definition | Redefinition |
|---|---|---|
| `.container` | `:322` (max-width 1240px) | `:1597` (max-width 1320px) |
| `.topbar` | `:150` | `:1601` |
| `.topbar-inner` | `:170` | `:1606` |
| `.topbar-left` / `.topbar-right` / `.topbar-units` | `:176` / `:217` / `:183` | `:1611` / `:1615` / `:1619` |
| `.navbar-inner` | `:807` (max-width 1360, min-height 56) | `:1662` (max-width 1400, min-height 66) |
| `.navbar-brand-copy` | `:844` (display default) | `:1675` (`display: none`) then `:1413` & `:1420` (display: flex) |
| `.nav-dropdown-panel` | `:961` | `:1679` |
| `.nav-feature-card` | `:1010` | `:1686` |
| `.hero-highlight` | `:254` (light blue gradient) | `:1821` (brand/green gradient) |
| `.btn-accent` | `:382` | `:1699` |
| `.btn-vklin` | `:2873` | `:16905` |
| `.site-header` | `:796` | `:1656` |
| `.hero-heading` | `:247` | `:1541` (inside the 760 px query) |

The file also contains **large dead legacy blocks** — the `.hero-*` family (`hero-art`, `hero-orbit*`, `hero-molecule*`, `hero-scene*`, `hero-float-card`, `hero-icon-node*`) is a complete alternative hero implementation that **no component renders**; `.hp-*` replaced it.

Similarly `.topbar*` (≈120 lines) styles a component that is never mounted.

### 6.2 Design tokens exist but are largely bypassed

- ~800+ raw hex literals against 18 colour tokens.
- 21 distinct radius values against 4 radius tokens; `8px / 12px / 14px / 18px / 20px` are used *more often* than `--radius-md`.
- 223 `box-shadow` declarations against 5 shadow tokens.
- ~150 distinct `font-size` values and ~150 individual `clamp()` heading formulas — **no type scale at all**.
- **Zero spacing tokens** — every `padding`/`margin`/`gap` is a literal.
- `--gradient-hero`, `--transition-slow`, `--color-primary-navy` — declared, rarely or never used.
- **Tokens are not exported to JS.** There is no `tokens.ts` / `theme` object, so nothing can read a token at runtime (e.g. to compute a chart colour or set an inline style).

**Net effect:** the `:root` block documents an intention the code does not implement.

### 6.3 Component duplication — the same pattern re-implemented per page

| Pattern | # of implementations | Class families |
|---|---|---|
| **Hero** | **15** | `about-hero`, `certs-hero`, `contact-reference-hero`, `construction-chemistry-hero`, `home-hero`, `hp-hero`, `industrial-family-hero`, `industrial-water-hero`, `industries-page-hero`, `quality-hero`, `specialty-hero`, `specialty-product-hero`, `vklin-page-hero`, `vklin-product-detail-hero`, `vklin-products-hero` |
| **Breadcrumb** | **8** | `*-breadcrumbs` × 8 |
| **Facts / spec `dl` table** | **7** | `about-facts`, `hp-story-facts`, `industrial-family-facts`, `specialty-product-facts`, `specialty-product-specs-table`, `vklin-product-detail-facts`, `vklin-product-specs-table` |
| **Text / back link** | **10** | `text-link` + 9 `-text-link` / `-back` variants |
| **CTA / contact band** | **8** | `*-contact-band`, `*-cta`, `*-information`, `contact-panel`, `hp-contact-panel` |
| **Section heading** | **9** | `section-heading*` + `hp-section-heading` + per-section `-section-heading` |
| **Card** | **16** | see §3.2 |
| **Bottom/footer-CTA CTA block** | 3 different implementations for "contact us" | `hp-contact-panel` (home), `contact-panel` + `.contact-action-card` (`/about`), `specialty-cta`, `construction-contact-band`, `industries-contact-band`, `industrial-water-contact` |

Consequences: a change to "how a card looks" or "how a breadcrumb looks" has to be made in up to 16 places.

### 6.4 Segment B re-implements Segment A's patterns instead of reusing them

- Segment B (`VklinProductDetail`) has its own breadcrumb (`vklin-product-detail-breadcrumbs`), its own facts table (`vklin-product-detail-facts`), its own handling-pair card (`vklin-product-detail-handling-card.is-note`), its own specification table (`vklin-product-specs-table`) — all near-identical in intent to `specialty-product-specs-table`, `specialty-product-handling-card.is-note`, `specialty-product-facts`.
- Segment B's contact CTA (`vklin-product-detail-information`) is a third variant of the "contact us" band already present on Segment A.
- Only the *colour* differs (green vs blue). The structure is duplicated.

### 6.5 Near-duplicate page files

| Group | Pages | Difference |
|---|---|---|
| V-Klin product pages | 10 files, ~20 lines each | `PRODUCT_ID` + `metadata` only |
| `IndustrialFamilyPage` wrappers | 4 files, 34–38 lines | `family` id, `icon`, `categoryIcons`, `mainClassName`, `figureImage` |
| Industrial system pages | `/solutions/boiler-cooling-water`, `/solutions/ro-effluent` | local array + one extra `<p class="ro-effluent-note">` |
| Construction detail pages | `/solutions/waterproofing-repair-coatings`, `/solutions/flooring-joint-sealing` | `familyIds` prop, local areas, grid class `.construction-detail-grid` vs `.flooring-joint-grid` |
| `/about` vs `/certifications` | — | `/certifications` reuses `.about-band`, `.about-rd-layout`, `.about-rd-panel`, `.about-rd-list`, `.about-facts`, `.company-copy`, `.vklin-panel-heading` wholesale |

The 10 V-Klin detail pages could be one dynamic route (`/vklin/products/[slug]`) with `generateStaticParams`; today each is a hand-copied file. Same for the 4 specialty and 4 industrial-family pages.

### 6.6 Accessibility gaps

**Focus visibility**
- `:focus-visible` is defined in **~25 places**, and the rules are scattered across file regions. Selectors covered include `.site-header a/button`, `.site-footer a`, `.market-item`, `.industries-card-link`, `.cert-card-figure`, `.contact-reference-map-options button`, `.vklin-page-category-card`, `.industrial-water-*`, `.construction-*`, `.nav-menu-group a`, `.hp-hero-tab`, `.hp-map-pills a`, `a.hp-contact-card`.
- **Not covered:** `.btn` (globally), `.card`, `.badge`, form `input` / `select` / `textarea` inside `.contact-field`, `.division-shortcut`, `.mobile-menu-btn` (only via `.site-header button`), `.hp-hero-tab` variants beyond the one, `.text-link`, `.vklin-product-card`, `.vklin-page-brand-card`, `.specs-table` links, `.footer-column a` (only `.site-footer a` at `:5076`).
- `.site-header a:focus-visible` is defined **three times** (`:1380`, `:3361`, `:4884`) with **three different outcomes** — later definition wins, earlier two are dead.
- Many custom controls (e.g. `.hp-hero-tab`, `.hp-map-pills a`) are focusable with a bespoke outline, but the *pattern* is inconsistent — a global `:focus-visible` fallback does not exist.

**Reduced motion**
- 25 `@media (prefers-reduced-motion: reduce)` blocks exist, but they only guard fragments: `.nav-dropdown-panel` animation (`:1583`), the `hero-*` family, `hp-reveal`, `quality-track-*`, `pqrs-icon-glow`, `section-fade-in`.
- **Not guarded:** `hp-dot-pulse`, `hp-orb-float`, `hp-fade-copy`, `hp-gradient-text`, `hp-hero-gradient-shift`, `hp-hero-entrance`, `hp-hero-visual-entrance`, `hp-reveal-up`, `nav-panel-in` (partially), `hero-molecule-circulate`, `hero-orbit-spin`, `hero-particle-drift`, `hero-node-drift`, `hero-core-float`, `hero-core-drift`, `hero-layer-shift`, `hero-leaf-sway`, `hero-bottle-float`, `hero-card-drift`, `hero-chip-float`, `hero-copy-arrive`, `hero-highlight-word-arrive`, `hero-icon-node-*`.
- `HeroCarousel` correctly reads `prefers-reduced-motion` and stops autoplay (`src/components/HeroCarousel.tsx:58, 62, 70`) and `ScrollReveal` correctly shows everything immediately (`src/components/ScrollReveal.tsx:18-23`) — the JS is compliant; the CSS is not consistently.

**Colour contrast — suspect pairs (manual review required)**
- `#64748B` (`--color-text-muted`) on `#FFFFFF` — ≈4.7:1, passes AA for body text.
- `#526779` / `#5C7182` / `#62798A` / `#657C8D` on `#FFFFFF` — ≈5.5–6:1, likely passes.
- `#087A58` / `#047857` on `#EAFBF2` / `#D1FAE5` — plausible pass, **TODO: confirm**.
- `#405D70` on the `.topbar` gradient `#E8F4F9 → #F6FBFD → #EAF7F1` — ≈6.4:1, pass.
- **`#7DD3FC` on `#0B192C`** (`.hero-micro-trust b`, `.nav-feature-years span` at 22 % alpha) — `#7DD3FC` is a light sky blue; at low alpha over dark navy it is likely to fail AA. **TODO: confirm by measurement.**
- **`.nav-feature-years { color: rgba(255,255,255,0.09) }`** — 9 % white text is decorative; it is not marked `aria-hidden` in the component but is presumably decorative. **TODO: confirm intent.**
- `.hp-contact-address` and `.footer-principles` use muted greys on dark footer — **TODO: confirm**.

**Semantic / structural**
- **`a` elements have `text-decoration: none` globally** and many links are distinguished by colour alone. The "text link" family relies on the arrow glyph rather than an underline.
- **`<dl>` misuse:** several `dl` implementations mix `dt`/`dd` for *label/value* pairs and for *fact rows* inconsistently; `vklin-product-detail-facts` uses `div > span + strong` inside a `div` with `aria-label` rather than `dl`/`dt`/`dd`.
- **Heading order:** the homepage `h1` lives inside `HeroCarousel`; the rest of the page uses `h2`. The `certifications-strip` uses `h2` for each certification *card* (`.trust-proof-item h2`) — semantically those are card titles, not sections, and repeated `h2`s before the page's real first `h2` break document outline.
- **Raw `<img>` without `width`/`height`** on `/about` and `/certifications` certificate images → layout shift risk. `TODO: confirm`.
- `Navbar` mobile button has `aria-label` + `aria-expanded` + `aria-controls` ✓; desktop triggers have `aria-expanded`/`aria-haspopup`/`aria-controls` ✓; but the dropdown panels are `role="group"` with `aria-label` rather than a `menu` pattern, and are **not** wired with `aria-activedescendant` / arrow-key navigation.
- `Navbar` dropdowns close on `pointerdown` outside and on `Escape` ✓, but focus is **not restored into the panel** on arrow-key entry, and the mega-panel is not keyboard-trapped.
- `ContactForm` uses `noValidate` and custom validation with `aria-invalid` + `aria-describedby` + `role="alert"` ✓ — this is the best accessibility implementation in the codebase.
- `LocationMap` uses `aria-pressed` on the location toggles ✓.
- The `Section` landmark structure is inconsistent: `/about` and `/certifications` use `section.section` (a `<section>` without an accessible name), while other pages use `aria-labelledby`.
- **Missing:** no `skip-to-content` link, no `main` landmark on some pages' `section.contact-section` (the `main` element *is* present per page, so this is OK), no `aria-current="page"` beyond the navbar's explicit links (dropdown children do use `aria-current`).
- **Empty `<button>` without accessible name:** none found — good.

### 6.7 Broken and fragile links / anchors

- **`/#solutions` is a dead anchor in two places:** `src/components/SiteFooter.tsx:6` (`{ label: "Solutions", href: "/#solutions" }`) and `src/app/about/page.tsx` (portfolio/CTA link). The homepage has **no element with `id="solutions"`** — its anchors are `#ranges`, `#range-map`, `#applications`, `#flagship`, `#vklin`, `#story`, `#contact`. There is a CSS selector `.solutions-title` in `globals.css` with no matching element.
- **`/vklin/products/glass-cleaner`**: the folder is `glass-cleaner` but the data `id` is `streak-free-glass-cleaner`. It resolves, but the mismatch is a trap for anyone renaming.
- **Contact details duplicated in 3 files** and hardcoded (`polyind2@gmail.com`, `+91 98202 35995`): `SiteFooter.tsx:61-62`, `ContactForm.tsx:6-7`, `TopBar.tsx:15,22`. No single `companyInfo` source.
- **Metadata title suffixes are inconsistent** (`| PolyTreat Chemicals`, `| PolyTreat Chemicals Pvt. Ltd.`, `| V-Klin by PolyTreat`, and plain `| PolyTreat Chemicals`).
- **No `sitemap.xml` / `robots.txt` / Open Graph / Twitter card metadata** — `layout.tsx` has only `title`, `description`, `keywords`, `viewport`. `TODO: confirm` whether handled elsewhere (e.g. deployment platform).
- The `viewport` export sets `themeColor: "#0B192C"` — a **hardcoded colour** that duplicates `--color-primary-dark` and would silently drift.

### 6.8 Dead code / unused assets

| Item | Evidence |
|---|---|
| `src/components/TopBar.tsx` | Never imported. Its `.topbar*` CSS block (~120 lines) is therefore dead too. |
| `.hero-*` legacy CSS family | ~90 selectors (`hero-art`, `hero-orbit*`, `hero-molecule*`, `hero-scene*`, `hero-float-card`, `hero-icon-node*`, `hero-highlight-word`, `hero-bottom-line`) — no component renders them; superseded by `.hp-*`. |
| `.btn-bio`, `.btn-light`, `.btn-outline` (as authored), `.hero-primary-cta`, `.hero-audit-cta`, `.badge-amber` | Defined but not used in any TSX. |
| `--gradient-hero` | Declared, never referenced. |
| `--transition-slow` | Declared, never referenced. |
| `public/` default Next.js assets | `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` are unused boilerplate. |
| `public/logo.jpg` vs `public/logo.png` vs `public/vkin-logo.png` vs `public/vklin-logo.webp` | Four logo files; only `/logo.png` and `/vklin-logo.webp` appear to be referenced. **TODO: confirm.** |
| V-Klin product images | Each product has `.jpeg` label + `.png` + `.webp` in `public/vklin-products/` — 30 files for 10 products; **only one format appears to be used.** **TODO: confirm.** |
| `homeImages.ts` `ImageOption`/`SectionImage` | Both types exported; `SectionImage` usage **TODO: confirm.** |

### 6.9 Architecture limitations for a design-system rollout

- **No `src/components/ui/` primitives layer.** `Button`, `Card`, `Badge`, `Container`, `SectionHeading`, `Breadcrumb`, `TextLink`, `DataList`, `Callout` all need to be extracted.
- **No CSS file separation.** One file for tokens, one for base, one per component family, one per page.
- **Tokens are CSS-only.** No typed token export → no way to consume them from TS.
- **No Storybook / component preview / visual regression.** Nothing to diff a redesign against.
- **No lint rule enforcing design-system usage.** ESLint is `eslint-config-next` only.
- **No tests of any kind** (no unit, no e2e, no a11y test, no `test` script in `package.json`).
- **The `Navbar` menu definition lives inside the component** (`src/components/Navbar.tsx:23-147`) rather than in `src/data/`, so it cannot be shared with the footer or a sitemap.
- **`data` files are a good pattern** but not used consistently — several pages define their content inline (`certifications/page.tsx` `certificates[]` + `facts[]`; `vklin/page.tsx` `categories[]`; `quality/page.tsx` PQRS copy which is *also* duplicated inside `QualityPrinciples.tsx:6-31`).

---

## 7. Target Design System

<!-- EMPTY ON PURPOSE — to be filled in by the user. -->

_(Reserved)_

---

## 8. Redesign Rules

<!-- EMPTY ON PURPOSE — to be filled in by the user. -->

_(Reserved)_

---

## 9. Per-page redesign checklist

**Template for each page** — copy this block per route and fill in as the redesign proceeds.

```markdown
### <route>
- **File:** `src/app/<path>/page.tsx`
- **Segment:** A (Company/services) | B (Products catalog)
- **Status:** not started
- [ ] Route resolves & renders (build + manual check)
- [ ] Layout sections match the target design system
- [ ] Uses shared components (no page-local re-implementations)
- [ ] All colours resolved from tokens (0 raw hex literals)
- [ ] All spacing resolved from tokens (0 ad-hoc rem literals)
- [ ] All radii resolved from tokens
- [ ] All shadows resolved from tokens
- [ ] Typography uses the type scale (no one-off `clamp()`)
- [ ] Buttons use the shared `Button` component with a supported variant
- [ ] Cards use the shared `Card` component with a supported variant
- [ ] Icons consistent in size and stroke-width
- [ ] Responsive at all breakpoints in the scale (360 / 768 / 1024 / 1440)
- [ ] Keyboard: tab order, visible `:focus-visible` on every interactive element
- [ ] Screen reader: headings in order, landmarks, `alt` text, `aria-*` correct
- [ ] Contrast: all text meets WCAG AA
- [ ] `prefers-reduced-motion` respected (all non-essential animation disabled)
- [ ] Images: `next/image` with correct `sizes`, explicit dimensions, optimised format
- [ ] SEO: `metadata.title` / `description` consistent with the shared template
- [ ] Copy unchanged (claim accuracy preserved)
- [ ] Cross-links verified (no dead anchors)
```

### 9.1 Segment A — Company / services

| # | Route | File | Status |
|---|---|---|---|
| 1 | `/` | `src/app/page.tsx` | **not started** |
| 2 | `/about` | `src/app/about/page.tsx` | **not started** |
| 3 | `/contact` | `src/app/contact/page.tsx` | **not started** |
| 4 | `/quality` | `src/app/quality/page.tsx` | **not started** |
| 5 | `/certifications` | `src/app/certifications/page.tsx` | **not started** |
| 6 | `/industries` | `src/app/industries/page.tsx` | **not started** |
| 7 | `/solutions/industrial-water` | `src/app/solutions/industrial-water/page.tsx` | **not started** |
| 8 | `/solutions/boiler-cooling-water` | `src/app/solutions/boiler-cooling-water/page.tsx` | **not started** |
| 9 | `/solutions/ro-effluent` | `src/app/solutions/ro-effluent/page.tsx` | **not started** |
| 10 | `/solutions/construction-chemistry` | `src/app/solutions/construction-chemistry/page.tsx` | **not started** |
| 11 | `/solutions/waterproofing-repair-coatings` | `src/app/solutions/waterproofing-repair-coatings/page.tsx` | **not started** |
| 12 | `/solutions/flooring-joint-sealing` | `src/app/solutions/flooring-joint-sealing/page.tsx` | **not started** |
| 13 | `/solutions/paint-preservatives` | `src/app/solutions/paint-preservatives/page.tsx` | **not started** |
| 14 | `/solutions/sugar-process-chemicals` | `src/app/solutions/sugar-process-chemicals/page.tsx` | **not started** |
| 15 | `/solutions/fireside-treatment` | `src/app/solutions/fireside-treatment/page.tsx` | **not started** |
| 16 | `/solutions/automotive-chemicals` | `src/app/solutions/automotive-chemicals/page.tsx` | **not started** |
| 17 | `/specialty` | `src/app/specialty/page.tsx` | **not started** |
| 18 | `/specialty/corosil` | `src/app/specialty/corosil/page.tsx` | **not started** |
| 19 | `/specialty/polydor-ws` | `src/app/specialty/polydor-ws/page.tsx` | **not started** |
| 20 | `/specialty/polyklin` | `src/app/specialty/polyklin/page.tsx` | **not started** |

### 9.2 Segment B — Products catalog (V-Klin)

| # | Route | File | Status |
|---|---|---|---|
| 21 | `/vklin` | `src/app/vklin/page.tsx` | **not started** |
| 22 | `/vklin/products` | `src/app/vklin/products/page.tsx` | **not started** |
| 23 | `/vklin/products/golden-floor-cleaner` | `src/app/vklin/products/golden-floor-cleaner/page.tsx` | **not started** |
| 24 | `/vklin/products/protector-floor-cleaner-lemon` | `src/app/vklin/products/protector-floor-cleaner-lemon/page.tsx` | **not started** |
| 25 | `/vklin/products/perfumed-floor-cleaner-floral` | `src/app/vklin/products/perfumed-floor-cleaner-floral/page.tsx` | **not started** |
| 26 | `/vklin/products/multipurpose-surface-cleaner` | `src/app/vklin/products/multipurpose-surface-cleaner/page.tsx` | **not started** |
| 27 | `/vklin/products/perfumed-liquid-soap-aqua` | `src/app/vklin/products/perfumed-liquid-soap-aqua/page.tsx` | **not started** |
| 28 | `/vklin/products/dishwash-liquid-gel-lemon` | `src/app/vklin/products/dishwash-liquid-gel-lemon/page.tsx` | **not started** |
| 29 | `/vklin/products/glass-cleaner` | `src/app/vklin/products/glass-cleaner/page.tsx` | **not started** |
| 30 | `/vklin/products/power-plus-toilet-cleaner` | `src/app/vklin/products/power-plus-toilet-cleaner/page.tsx` | **not started** |
| 31 | `/vklin/products/air-freshener-ac-duct-odour-eliminator` | `src/app/vklin/products/air-freshener-ac-duct-odour-eliminator/page.tsx` | **not started** |
| 32 | `/vklin/products/herbal-mosquito-repellent` | `src/app/vklin/products/herbal-mosquito-repellent/page.tsx` | **not started** |

### 9.3 Cross-cutting (global) work items

| # | Item | File(s) | Status |
|---|---|---|---|
| G1 | Establish the shared component set (`Button`, `Card`, `Badge`, `Container`, `Section`, `SectionHeading`, `Breadcrumb`, `TextLink`, `DataList/SpecTable`, `Callout`, `Field/Input/Select/Textarea`, `CalloutBand`) | `src/components/ui/*` — does not exist | **not started** |
| G2 | Split the 17,206-line `globals.css` into `tokens.css` / `base.css` / `components/*.css` / `pages/*.css`; delete the duplicated and dead blocks | `src/app/globals.css` | **not started** |
| G3 | Expand tokens: add spacing scale, type scale, radius scale, shadow scale, semantic colour roles for both segments (blue + green) | `src/app/globals.css:1-53` | **not started** |
| G4 | Export tokens to TypeScript so they can be consumed at runtime | new `src/design/tokens.ts` — does not exist | **not started** |
| G5 | Consolidate to a real breakpoint scale (currently 19 values: see §5.7) | `src/app/globals.css` (116 `@media` blocks) | **not started** |
| G6 | Add a global `:focus-visible` fallback and remove the three conflicting `.site-header` focus rules | `src/app/globals.css:1380, 3361, 4884` | **not started** |
| G7 | Audit and complete `prefers-reduced-motion` coverage for all 34 keyframes | `src/app/globals.css` | **not started** |
| G8 | Centralise company contact details (email/phone/address) | `SiteFooter.tsx:61-63`, `ContactForm.tsx:6-7`, `TopBar.tsx:15,22` | **not started** |
| G9 | Move navbar menu definitions out of the component into `src/data/` so footer/sitemap can reuse them | `src/components/Navbar.tsx:23-147` | **not started** |
| G10 | Remove or reinstate `TopBar` (currently unused) | `src/components/TopBar.tsx` | **not started** |
| G11 | Delete the dead `.hero-*` legacy CSS family and unused button/badge variants | `src/app/globals.css` | **not started** |
| G12 | Fix the dead `/#solutions` anchors | `src/components/SiteFooter.tsx:6`, `src/app/about/page.tsx` | **not started** |
| G13 | Standardise `metadata` title/description template + add Open Graph | `src/app/layout.tsx:6-18` and all 32 pages | **not started** |
| G14 | Collapse the 10 V-Klin / 3 specialty / 4 industrial-family page files into dynamic routes with `generateStaticParams` | `src/app/vklin/products/*`, `src/app/specialty/*`, `src/app/solutions/{paint-preservatives,sugar-process-chemicals,fireside-treatment,automotive-chemicals}` | **not started** |
| G15 | Establish a component preview / visual-regression harness | not present | **not started** |
| G16 | Add baseline a11y automated checks (contrast, heading order, focus) | not present | **not started** |

---

## Appendix A — Open questions (`TODO: confirm`)

1. Is the `TopBar` component intentionally dormant (planned re-mount) or dead? It is fully styled but not mounted.
2. Should the two segments share one visual language with a colour accent switch (today) or diverge into separate sub-design-systems?
3. Are the ~150 `clamp()` heading formulas intentional per-page art direction, or incidental? A shared type scale would replace most of them.
4. Which logo asset is canonical — `public/logo.png`, `public/logo.jpg`, `public/vkin-logo.png`, `public/vklin-logo.webp`?
5. Which V-Klin product image format is authoritative — `.jpeg` label, `.png`, or `.webp`? Three copies per SKU exist.
6. Are `/sitemap.xml`, `/robots.txt` and Open Graph tags handled outside the repo (deployment platform)?
7. Is there a `context_handover.md` (mentioned in `README.md` but git-ignored) that records pending redesign decisions?
8. Should `prefers-color-scheme` (dark mode) be in scope? There is currently **zero** `prefers-color-scheme` usage in the codebase.
9. Do the four certification documents each need their own downloadable route, or is the image-preview-only treatment intentional?
10. Is a product *search / filtering* catalogue in scope for Segment B? `README.md` states the project "does not currently provide a searchable technical catalogue or TDS download portal."
