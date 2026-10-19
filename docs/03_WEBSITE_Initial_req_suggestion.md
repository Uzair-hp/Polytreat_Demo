# PolyTreat Website: Current Homepage and Design Direction

> **Status:** This document records the homepage as it is currently implemented and sets evidence-aware design guidance for future work. It replaces the older kickoff blueprint, which described many features that were never built.
>
> **Business source of truth:** [`polytreat_study.md`](../polytreat_study.md). This design brief is not evidence for company or product claims.

## 1. Project scope

The current project is a responsive PolyTreat homepage. It introduces the company's broad work areas and gives visitors a direct way to contact the team. It is not yet a searchable product database, technical document portal, account system, or online quote-submission backend.

### Implemented homepage structure

1. **Navbar:** PolyTreat logo; Home, Solutions, Industries, Quality, About Us, and Contact in that order; dropdowns for Solutions, Quality, and About Us; Industrial and V-Klin shortcuts; WhatsApp enquiry action; mobile drawer. Industries links directly to the homepage application section.
2. **Hero:** Light chemistry-inspired background, animated orbit/molecule illustration, concise company introduction, “Explore solutions” and “Talk to team” CTAs, and direct phone link.
3. **Three areas of work:** Industrial water treatment; construction and surface protection; V-Klin facility care.
4. **Applications:** Broad groupings for process/manufacturing, utilities/infrastructure, and facilities/institutions.
5. **V-Klin overview:** Separate introduction to the cleaning and facility-care range.
6. **PQRS:** Performance, Quality, Reliability, Service, using the client's corrected meaning.
7. **Contact panel and footer:** Current email and phone, site navigation, work areas, and locations as currently displayed. The footer's Instagram, LinkedIn, and Facebook glyphs are placeholders, not working social links; add links only after the client supplies official profiles.

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
