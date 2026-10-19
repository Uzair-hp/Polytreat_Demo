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
8. **Certificates:** Read Study Wiki Sections 13–16. Never call the reviewed private FDA-named certificate “FDA approved.” Do not imply that one certificate independently verifies every product.
9. **Open items:** Study Wiki Section 20 is an internal list of questions, not a requirement to put warnings on the public site. Omit unsupported exact claims; explain the supported business/category plainly.
10. **Confidentiality:** Never expose formulas, exact composition, proprietary process details, dosage/application recipes, internal safety instructions, or sensitive material from client files in public copy, screenshots, commits, or tool prompts.

## Website scope and implementation

The project is a responsive marketing site, not a technical document portal. The homepage has a concise Industries preview; the dedicated `/industries` page expands its application contexts. Current section IDs and navigation targets include:

- `#solutions` — broad solution areas.
- `#portfolio` — product families, with anchors for boiler/cooling water, RO/effluent, construction, and V-Klin.
- `#markets` — homepage preview linking to `/industries`.
- `/industries#process-manufacturing`, `/industries#utilities-infrastructure`, and `/industries#facilities-institutions` — application contexts on the Industries page.
- `#vklin` — cleaning and facility-care range.
- `#pqrs` — Performance, Quality, Reliability, Service.
- `#about`, `#locations`, and `#contact` — company overview, locations, and contact actions.

Current navbar order is **Home → Solutions → Industries → V-Klin → Quality → About Us → Contact**, followed by a **Request a Quote** action linking to the contact form. Solutions, V-Klin, Quality, and About Us have dropdowns; Industries links to `/industries`. The V-Klin dropdown links to its overview, product range, and category anchors. Quality links to `/quality`, its PQRS section, and certificate scopes; TDS/SDS requests are available from the Quality overview and contact page. About Us links to the company overview and facilities. Re-check `src/components/Navbar.tsx` before relying on this snapshot.

- Framework: Next.js 16 App Router, React 19, TypeScript.
- Styles: **Vanilla CSS only**, chiefly `src/app/globals.css`. Do not add Tailwind.
- Icons: use the existing `lucide-react` package and its established visual weight.
- Main files: `src/app/page.tsx`, `src/components/Navbar.tsx`, `src/components/HeroCarousel.tsx`, `src/app/globals.css`, and `src/app/layout.tsx`.
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
