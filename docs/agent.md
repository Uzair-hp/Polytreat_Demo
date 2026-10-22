# PolyTreat Project Guide for Interns and Coding Agents

> **Audience:** Brightlant interns, developers, and AI coding agents authorized to work on the PolyTreat website.
>
> **Purpose:** Give contributors a safe, repeatable way to understand the business, make a scoped change, and leave the project easy for the next person to continue.

## Start here

1. Read this guide.
2. Read [`polytreat_study.md`](../polytreat_study.md), starting with [Section 20: client clarifications and remaining questions](../polytreat_study.md#20-client-clarifications-and-remaining-questions) and [Section 21: intern and agent handoff](../polytreat_study.md#21-intern-and-agent-handoff-how-to-use-these-findings).
3. Read [`03_WEBSITE_Initial_req_suggestion.md`](03_WEBSITE_Initial_req_suggestion.md) for the current homepage scope and visual direction.
4. Before editing, inspect the actual component, styles, and relevant original client asset. Do not assume this guide describes code that has not been checked.

The study wiki is the source-tracked business reference. [`01_INTERN_CLIENT_KNOWLEDGE_BASE.md`](01_INTERN_CLIENT_KNOWLEDGE_BASE.md) is only a short orientation; it is not independent evidence.

## Business picture to keep consistent

PolyTreat Chemicals Pvt. Ltd. presents three broad work areas:

1. **Industrial water treatment** — categories include boiler, cooling-water, RO, and effluent systems.
2. **Construction and surface-protection chemistry** — categories include waterproofing, coatings, repair, flooring, joints, and rust treatment.
3. **Cleaning and facility care under V-Klin** — the client clarified that the former Altra Care products moved to V-Klin, with the brand name changed and the products otherwise unchanged.

Use this high-level picture confidently in general homepage explanations. Do not make ordinary visitors read internal caveats such as “confirm whether this category is current” throughout the site. Keep uncertainty in project documentation; reserve enquiry links for useful actions like a quote, TDS/SDS, or technical discussion.

## Evidence and public-claim rules

1. **Client clarification recorded in the study wiki takes precedence** over conflicting wording in old documents or code.
2. **Original non-Markdown client assets are primary evidence.** AI-authored Markdown in the sibling `Client Assets` folder, generated briefs, old website copy, and this guide are not proof by themselves. Use the study wiki's source links and asset manifest to locate originals, then read the source review here.
3. **Match wording to the evidence.** A broad category can be introduced from the client’s materials. A named SKU, exact application, safety statement, measurable performance claim, guarantee, or certification needs its own supporting source and scope.
4. **Do not invent** customer names, testimonials, export markets, product functions, technical outcomes, availability, stock guarantees, manufacturing capability, or certification scope.
5. **V-Klin:** Use V-Klin as the cleaning-range brand. Altra Care is discontinued, and its old label images are legacy artwork. The client confirmed the products continued under V-Klin; that brand-change clarification does not independently validate health, germ-kill, pest-control, environmental, or safety claims printed on old labels.
6. **Company facts:** The client confirmed the company is Pvt. Ltd. and said both “PolyTreat Chemical Industries” and “PolyTreat Chemicals Pvt. Ltd.” may be used publicly. The client believes 1987 is probably when the business began; do not call it the incorporation year or claim a precise tenure as established fact.
7. **PQRS:** Use the client-corrected wording **Performance, Quality, Reliability, Service**.
8. **Certificates:** Read Study Wiki Sections 13–16. Never call the reviewed private FDA-named certificate “FDA approved.” Do not imply that one certificate independently verifies every product. The homepage compliance strip labels them as `ISO 9001:2015 QMS`, `UKcert WHO-GMP reference`, `Private FDA reference`, and `UKcert Eco-Friendly certificate`; keep those labels and the “Certificates and their scope” framing if the strip is edited.
9. **Open items:** Study Wiki Section 20 is an internal list of questions, not a requirement to put warnings on the public site. Omit unsupported exact claims; explain the supported business/category plainly.
10. **Confidentiality:** Never expose formulas, exact composition, proprietary process details, dosage/application recipes, internal safety instructions, or sensitive material from client files in public copy, screenshots, commits, or tool prompts.

## Website scope and implementation

The project is a responsive marketing site, not a technical document portal. The homepage has a concise Industries preview; the dedicated `/industries` page expands its application contexts. Current section IDs and navigation targets include:

- `#solutions` — broad solution areas.
- `#portfolio` — product families, with anchors for boiler/cooling water, RO/effluent, construction, and V-Klin. Each family card also links to its matching solutions page (`/solutions/boiler-cooling-water`, `/solutions/ro-effluent`, `/solutions/construction-chemistry`, `/vklin/products`).
- `/solutions/industrial-water` — overview of boiler, cooling-water, RO, and effluent treatment categories.
- `/solutions/boiler-cooling-water` — focused overview of boiler and recirculating cooling-water systems.
- `/solutions/ro-effluent` — focused overview of reverse-osmosis and effluent-treatment categories.
- `/solutions/construction-chemistry` — overview of waterproofing, concrete repair, protective surfaces, and sealants.
- `/solutions/waterproofing-repair-coatings` — focused overview of waterproofing, cement/concrete repair, and building-surface coatings.
- `/solutions/flooring-joint-sealing` — focused overview of protective flooring and joint/crack sealant categories.
- `#markets` — homepage preview linking to `/industries`.
- `/industries#process-manufacturing`, `/industries#utilities-infrastructure`, and `/industries#facilities-institutions` — application contexts on the Industries page.
- `#vklin` — cleaning and facility-care range.
- `#pqrs` — Performance, Quality, Reliability, Service.
- `#about`, `#locations`, and `#contact` — company overview, locations, and contact actions.

Current navbar order is **Home → Solutions → Industries → V-Klin → Quality → About Us → Contact**, followed by a **Request a Quote** action linking to the contact form. Solutions, V-Klin, Quality, and About Us have dropdowns; Industries links to `/industries`. The V-Klin dropdown links to its overview, product range, and category anchors. Quality links to `/quality`, its PQRS section, and certificate scopes; TDS/SDS requests are available from the Quality overview and contact page. About Us links to the company overview and facilities. Re-check `src/components/Navbar.tsx` before relying on this snapshot.

All four header dropdowns share one menu system, defined by the `NAVIGATION: UNIFIED MENU SYSTEM` block at the end of `src/app/globals.css`: the panel is anchored under its own trigger, the group headings are uppercase eyebrows with a fading rule, links are light card rows with a trailing `ArrowRight`, and each panel ends with a bottom prompt strip. V-Klin keeps a green accent; the rest use brand blue via the `--nav-accent` custom property. Add new menus to this system instead of writing per-menu CSS. Panels are clamped to the viewport in `Navbar.tsx`, so a new panel must keep a `--nav-panel-width` that fits between 1024px and the widest desktop. Use `lucide-react` icons for row affordances, never a glyph in a CSS `content` property, which has caused mojibake before.

- Framework: Next.js 16 App Router, React 19, TypeScript.
- Styles: **Vanilla CSS only**, chiefly `src/app/globals.css`. Do not add Tailwind.
- Icons: use the existing `lucide-react` package and its established visual weight.
- Main files: `src/app/page.tsx`, `src/components/Navbar.tsx`, `src/components/HeroCarousel.tsx`, `src/app/globals.css`, and `src/app/layout.tsx`.
- Shared data: `src/data/vklinProducts.ts` is the single source of truth for the V-Klin catalogue (products, product count, category list, and the full per-product copy). `src/data/industrialWater.ts` is the single source of truth for the industrial water treatment hub (systems, system challenges, treatment categories, wider catalogue families, and the anchor ids the solution pages share). The homepage preview strip, the `/vklin/products` catalogue and every V-Klin product page read from the first, so never hardcode the product count in copy. `src/data/homeImages.ts` holds the homepage image map.
- V-Klin product copy rules: the copy in `src/data/vklinProducts.ts` is written from the client's own product literature (the V-KLIN-branded catalogue `vklin-home-care-wellness-formulations.docx` and the packaging artwork). Descriptive facts, physical data, pack sizes and directions may be published with attribution to the literature and a pointer to the current label. **Never publish germ-kill, disinfection, pesticidal or insecticidal wording** ("keeps mosquitoes away", "sanitiser", "99% germ efficacy"), and never publish safety superlatives ("non-toxic", "chemical free", "completely safe") or composition details. The client's own ISO, WHO-GMP and Eco-Friendly certificates scope the range as being made "without any medicinal, therapeutic, disinfectant, pesticidal, insecticidal or drug claims", so product copy must not contradict the certificate scope published on `/certifications`.
- Specialty product copy rules: `src/data/specialtyProducts.ts` holds COROSIL, POLYDOR-WS and POLYKLIN, written from the client's own literature (the COROSIL brief and presentation, the POLYDOR-WS application material and brochure, the POLYKLIN coil-cleaner literature). Publish descriptive facts, physical data, the process sequence, application areas and published directions, all attributed to the literature. **Do not publish a safety classification or hazard status**: the COROSIL sheet contradicts itself, and the POLYKLIN sheet carries unverified "non-corrosive", "non-irritant" and "readily biodegradable" statements, so those pages give practical handling guidance and point to the current Safety Data Sheet instead. No performance guarantees (no "permanent rust prevention", no "fully protective", no cooling-efficiency or equipment-life claims), no "compatible with any paint" (the source says "most"), no composition or ingredient details, and no disinfection, sanitation, insecticidal or food-contact claims. POLYDOR-WS is an odour-control product and its page says so explicitly.
- Industrial water copy rules: publish treatment **categories and roles only, never product codes**. The client product profile is undated and which products are currently active is still an open question, so a code on the page could point at something discontinued. Never republish the profile's "non-oxidizing / oxidizing" biocide split: its headings contradict the bases it lists (a hypochlorite base appears under non-oxidizing) and the study records that a chemist must confirm the classification first. Do not publish dosage, water-analysis limits, handling or safety text, "incorporated in 1987", export markets, "eco-friendly/biodegradable" product claims, or laboratory and pilot-reactor capability. Describe what a system has to manage as general engineering context, not as a product performance claim.
- Visual direction: bright, clean blue/green surfaces; compact responsive layout; restrained motion; avoid crowding, duplicate navigation, and unnecessary icon decoration.
- Real enquiry actions currently include the project email, phone, and WhatsApp. Do not create a fake download, form, modal, catalog search, or backend workflow.

## How to handle an assigned task

1. Follow the user’s latest request and the existing conversation context. Keep the change limited to its intended files and behavior.
2. Check repository `AGENTS.md` first. It warns that the installed Next.js version differs from assumptions; before writing code, read the relevant guide under `node_modules/next/dist/docs/`.
3. For any business copy, find the relevant section in `polytreat_study.md`, follow its source link, and preserve the source’s claim limits.
4. For code, inspect existing patterns and tokens before editing. Use semantic HTML, keyboard-accessible controls, visible focus, descriptive link text, and reduced-motion support.
5. Check responsive behavior at the requested widths and avoid horizontal overflow. Keep mobile navigation usable by touch and desktop navigation usable by pointer and keyboard.
6. Do not run tests or `npm run build` unless the user asks for verification. If asked, report the actual result; never imply an unrun check passed.
7. Do not commit or push unless the user explicitly asks. Never include unrelated user changes in a commit; inspect `git status` and the exact diff first.
8. Update this guide or the study wiki only when the task changes project facts, decisions, source understanding, or implementation conventions. Keep source links and dates where relevant.
9. In the handoff, state what changed, what you checked, and any meaningful unresolved issue in plain language.

## Features that need a separate scope

Older briefs may propose features that do not exist. Do not imply or implement these without a separately scoped request and approved content:

- Searchable/filterable product catalog or product-detail database.
- TDS/COA download portal, quote form, file upload, CRM, or email automation.
- Dosage or water-treatment calculator.
- Verified customer-logo wall, case studies, export map, or testimonials.
- Official social-media links; current footer symbols are placeholders until the client supplies profile URLs.

## Related project references

- [`polytreat_study.md`](../polytreat_study.md) — source reviews, plain-language explanations, glossary, client clarifications, and unresolved questions.
- [`01_INTERN_CLIENT_KNOWLEDGE_BASE.md`](01_INTERN_CLIENT_KNOWLEDGE_BASE.md) — brief internal orientation; check the study wiki for evidence.
- [`03_WEBSITE_Initial_req_suggestion.md`](03_WEBSITE_Initial_req_suggestion.md) — current website scope and design guidance.
- [`00_ASSETS_MANIFEST.md`](../../Client%20Assets/00_ASSETS_MANIFEST.md) — client-asset index. Prefer original non-Markdown client files when verifying a claim.
