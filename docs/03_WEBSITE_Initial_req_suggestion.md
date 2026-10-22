# PolyTreat Website: Current Homepage and Design Direction

> **Status:** This document records the homepage as it is currently implemented and sets evidence-aware design guidance for future work. It replaces the older kickoff blueprint, which described many features that were never built.
>
> **Business source of truth:** [`polytreat_study.md`](../polytreat_study.md). This design brief is not evidence for company or product claims.

## 1. Project scope

The project is a responsive PolyTreat marketing site. The homepage introduces the company's broad work areas; dedicated pages cover Industries, Quality, About, Contact, and the V-Klin range. It is not a searchable technical document portal, account system, or online quote-submission backend.

### Implemented homepage structure

1. **Navbar:** PolyTreat logo; Home, Solutions, Industries, V-Klin, Quality, About Us, and Contact in that order; dropdowns for Solutions, V-Klin, Quality, and About Us; Request a Quote action; mobile drawer. Industries opens its dedicated overview page; the homepage keeps a shorter preview. All four dropdowns share one menu system (see item 10).
2. **Hero:** Light chemistry-inspired background, animated orbit/molecule illustration, concise company introduction, “Explore solutions” and “Talk to team” CTAs, and direct phone link.
3. **Quality & compliance strip:** A slim bar directly under the hero listing the four supplied certificate documents by issuer and scope, with a link to `/certifications`. Wording must not read as blanket or government approval.
4. **Three areas of work:** Industrial water treatment; construction and surface protection; V-Klin facility care.
5. **Applications:** Broad groupings for process/manufacturing, utilities/infrastructure, and facilities/institutions.
6. **V-Klin overview:** Separate introduction to the cleaning and facility-care range.
7. **PQRS:** Performance, Quality, Reliability, Service, using the client's corrected meaning.
8. **Contact panel and footer:** Current email and phone, site navigation, work areas, and locations as currently displayed. The footer's Instagram, LinkedIn, and Facebook glyphs are placeholders, not working social links; add links only after the client supplies official profiles.
9. **Footer navigation:** The Explore column links to the homepage solutions anchor, industries, the V-Klin overview and product range, quality, certifications, about, and contact. The Our Work column links to the six dedicated solution pages. There is no `/solutions` index page, so the Solutions entry points at the homepage anchor; do not link to `/solutions` directly.
10. **Header menu system:** Every dropdown is one panel anchored under its own trigger and flush with the bottom of the sticky header, never centred on the page. Each panel uses the same parts: group headings as small uppercase eyebrows with a fading rule, link rows as light cards with a trailing arrow, and a bottom prompt strip with a next step. V-Klin keeps its green accent; the other menus use brand blue. Panels are clamped to the viewport in code, so a panel must stay narrower than the desktop range. Add new menus on this system rather than per-menu CSS.

Implementation references: `src/app/page.tsx`, `src/components/Navbar.tsx`, and `src/app/globals.css`. Re-check these files before changing this status list.

## 2. Visual direction

The current design should feel clear, modern, approachable, and credible for a specialty-chemicals company. It should remain easy to scan on phones and avoid a crowded enterprise-dashboard feel.

- **Surfaces:** Mostly white and pale blue/green section gradients; use dark navy sparingly for contrast and emphasis.
- **Brand accents:** Industrial blue and V-Klin green distinguish the two routes without making them feel like unrelated businesses.
- **Typography:** Plus Jakarta Sans for headings, Inter for body/UI, JetBrains Mono only when a technical identifier needs it. These are configured with `next/font` in `src/app/layout.tsx`.
- **Icons:** Existing `lucide-react` outline icons. Keep icon sizes, stroke weight, and color consistent; decorative icons should be hidden from assistive technology.
- **Motion:** CSS-based reveal and orbit movement should be subtle, responsive, and disabled/reduced under `prefers-reduced-motion`. Avoid adding animation that delays reading or interaction.
- **Header:** Compact responsive navigation; desktop dropdowns and mobile drawer should remain usable by keyboard, pointer, and touch.
- **Footer:** Mobile-first spacing, clear Explore / Our Work / Contact groups, readable contact links, and a visible Brightlant credit. Do not present placeholder social symbols as linked profiles.
- **CSS policy:** Strict Vanilla CSS and existing tokens in `src/app/globals.css`. No Tailwind.

The current token values are defined in code and may evolve; do not copy an old palette table as the source of truth. Current anchors include brand blue `#1769A6`, pale blue `#B9D9E8`, navy `#0B192C`, and V-Klin green `#10B981`.

## 3. Content and claims policy

Use [`polytreat_study.md`](../polytreat_study.md) to check the cited source and uncertainty before adding company-specific copy.

- The client confirmed that PolyTreat is a Pvt. Ltd. and that both “PolyTreat Chemical Industries” and “PolyTreat Chemicals Pvt. Ltd.” may be used publicly.
- The client believes 1987 is most probably the year the business started. Do not present it as the incorporation year or assert an exact tenure until confirmed.
- Use **V-Klin** as the current cleaning-range brand. Altra Care is discontinued legacy branding.
- Use **PQRS = Performance, Quality, Reliability, Service**. Do not reuse the earlier incorrect “Price / Regularity” interpretation.
- Describe the supported broad solution areas clearly; do not make visitors read internal confirmation caveats throughout the homepage. The client confirmed that the former Altra Care products continue under V-Klin with only the brand name changed. For other historic exact SKUs, technical specifications, safety/performance claims, and certificate wording, follow the evidence limits in the study wiki. Keep those internal uncertainties out of general category copy; use enquiry links for real next steps such as quotes, TDS/SDS, or technical support.
- The industrial water pages publish **treatment categories and roles only, never product codes**. The client industrial product profile is undated and which products are currently active is still an open question, so a published code could point at something discontinued. Do not republish the profile's "non-oxidizing / oxidizing" biocide split — its headings contradict the bases it lists (a hypochlorite base appears under non-oxidizing) and a chemist must confirm the classification first. Do not publish dosage, water-analysis limits, handling or safety text, "incorporated in 1987", export markets, "eco-friendly/biodegradable" product claims, or laboratory and pilot-reactor capability. What a system has to manage is general engineering context, not a product performance claim. Source of truth: `src/data/industrialWater.ts`.
- Avoid unsupported claims about efficacy, safety, “non-toxic” or “100% eco-friendly” status, guaranteed results, stock guarantees, export markets, laboratory capability, or performance metrics.
- Certificate images need careful scope and status review. In particular, do not claim “FDA approved”; the reviewed FDA-named certificate is private third-party material and is not an FDA-issued approval. See Study Wiki Sections 13–16.
- Do not publish formulas, exact dosage, proprietary process steps, or internal technical/safety content.
- Keep enquiry actions simple and honest. Current CTAs link to page sections, email, phone, or WhatsApp; do not suggest a modal, download, or form exists when it does not.

## 4. Responsive and accessibility expectations

- Design and check narrow phones first, then tablet and desktop; prevent horizontal overflow and clipped navigation/actions.
- Keep mobile hero copy, illustration, and CTAs in a deliberate reading order. Buttons may sit side-by-side when labels remain legible and touch targets remain comfortable.
- Use semantic headings, navigation landmarks, descriptive link names, visible focus states, and meaningful image alternatives.
- Dropdown triggers must expose expanded state and support keyboard dismissal; mobile menu must not trap users or obscure its close action.
- Respect reduced-motion preferences and retain a usable static presentation.
- Treat reduced visual clutter as a requirement: avoid duplicate header proof points, redundant CTAs, oversized decorative elements, and unnecessary icon piles.

## 5. Ideas not currently implemented (require separate approval and content)

These appeared in older AI-generated briefs and are not part of the current homepage unless separately built:

- Searchable/filterable product catalogue and downloadable TDS/COA portal.
- Quote modal, online RFQ form, file uploads, CRM/email service integration.
- Dosage or water-treatment calculator.
- Interactive export map or verified export claims.
- Case studies, customer logos, certificate downloads, or linked social profiles.
- Product-level technical claims, performance comparisons, or application recipes.

Before planning one of these, confirm the business need, current source material, data handling, and what the client has approved.

## 5A. Solution pages

Each solution page follows the same shape: a hero with breadcrumbs, a short statement of what the system is and what it has to manage, then cards that hand off to the next step, then an enquiry band. The system pages link back up to their parent and down to the contact form, so no page is a dead end.

- `/solutions/industrial-water` is the hub for the industrial range. It carries the four system cards, a section on what each system has to manage, the treatment categories for each system, and the wider catalogue families that have no page of their own.
- `/solutions/boiler-cooling-water` and `/solutions/ro-effluent` are the two system pages the hub links into. Each card on them has a stable anchor id so the hub can deep-link to one system rather than the page top.
- There is still no `/solutions` index page. The navbar "Solutions" entry and the footer both point at the homepage solutions anchor; do not link to `/solutions` directly until an index exists.
- Every solution hero uses a real photograph with alt text that describes the picture only. Do not reintroduce a decorative placeholder panel with a "Image placeholder" caption.
- Shared content lives in `src/data/industrialWater.ts` so the hub copy and the system page anchors cannot drift apart.

## 5B. V-Klin product pages

The V-Klin range is the client's most complete product documentation, and every product page now publishes it.

- `/vklin/products` lists the range in the client's own seven categories: floor and surface care, hand care and hygiene, dishwashing, glass and window care, bathroom and toilet care, odour and air care, and natural wellness.
- Each product page carries the description, features, applications, directions for use, technical specifications, pack sizes, fragrances and handling notes, written from the client's own product literature. The copy lives in `src/data/vklinProducts.ts` and is rendered by one shared component, so the catalogue page, the product pages and the homepage preview can never disagree.
- Directions and dilution are published as published in the product literature, with a line asking the visitor to confirm the current label with the team. Do not publish MRP, shelf life, ingredient lists or safety superlatives.
- The range makes **no pesticidal, insecticidal or germ-kill claim**. The client's ISO, WHO-GMP and Eco-Friendly certificates all scope it as being made without any medicinal, therapeutic, disinfectant, pesticidal, insecticidal or drug claims, and `/certifications` states that scope. Product copy must not contradict it.
- Source of truth: `polytreat_study.md` Section 11 and Section 22.

## 5C. Specialty product pages

The three flagship specialty products have their own pages, because each one is aimed at a single job and each has its own client literature.

- `/specialty` is the hub. It carries the three flagship products, the further specialty lines from the industrial profile, and an enquiry band.
- `/specialty/corosil` sets out the rust-treatment sequence (surface preparation, treatment, compatible paint system), the published physical data, and the finishing systems the literature names.
- `/specialty/polydor-ws` sets out the application areas across waste, wastewater, food and animal processing, scrubbers and facility settings.
- `/specialty/polyklin` sets out the equipment it serves and the published method of application.
- The three pages share one shell in `src/components/SpecialtyProductDetail.tsx` and one source of truth in `src/data/specialtyProducts.ts`.
- These pages deliberately publish **no safety classification or hazard status**, only practical handling guidance, and they point to the current Safety Data Sheet. The COROSIL sheet contradicts itself on hazard status and the POLYKLIN sheet carries unverified safety and environmental statements, so neither can support a published safety summary.
- They also publish no performance guarantees, no "compatible with any paint", no composition details, and no disinfection, sanitation, insecticidal or food-contact claims. POLYDOR-WS says on the page that it is an odour-control product and not a disinfectant.
- Source of truth: `polytreat_study.md` Sections 5, 6, 7, 9, 18, 19 and 22.

## 5D. Industries page

The industries page is where a visitor should come to understand the whole business, not just one product family.

- It has four parts: the three **operating environments** (process and manufacturing, utilities and infrastructure, facilities and institutions), the **full product map**, the **industry sectors**, and the enquiry band.
- The three operating environments keep their anchor ids, because the homepage links straight to them.
- The product map carries all four ranges — industrial water and process, construction and protection, specialty products, and the V-Klin cleaning range — so the full catalogue is visible in one place. Every entry resolves to a real page; a family without a page of its own points at the section of the industrial water hub that lists it.
- The industry sectors are the settings the ranges are documented for, derived from the sectors visible in the 2022 customer list. **Sector names only.** The 2022 website published around eighty-five customer organisations and those names are not republished: most of those relationships are decades old and each name would need current written approval. No customer logos, no customer count, and no "industries we serve" wording.
- Shared content lives in `src/data/industries.ts`, read by both the homepage and this page.

## 6. Stack and repository conventions

- Next.js 16 App Router, React 19, TypeScript.
- Vanilla CSS in `src/app/globals.css`; no Tailwind.
- Existing icons: `lucide-react`.
- Run the existing `npm run build` when the user requests a build check. Do not report a check that was not run.
- Read the relevant version-specific Next.js guide under `node_modules/next/dist/docs/` before editing code, as required by the repository's `AGENTS.md`.

## Source map

- [`polytreat_study.md`](../polytreat_study.md) — evidence, source links, claim limits, glossary, and open questions.
- [`01_INTERN_CLIENT_KNOWLEDGE_BASE.md`](01_INTERN_CLIENT_KNOWLEDGE_BASE.md) — short internal orientation and confidentiality rules.
- `src/app/page.tsx` — homepage structure and public copy.
- `src/components/Navbar.tsx` — responsive navigation.
- `src/app/globals.css` — design tokens, layout, visual treatment, motion, and responsive rules.
