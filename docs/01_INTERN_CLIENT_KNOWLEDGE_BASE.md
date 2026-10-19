# PolyTreat: Internal Project Knowledge Guide

> **Audience:** Brightlant project team and authorized contributors.
>
> **Purpose:** A short, website-focused orientation. The source-tracked learning record is [`polytreat_study.md`](../polytreat_study.md); use it instead of treating this summary as independent evidence.
>
> **Confidentiality:** Client files may contain confidential formulas, process information, old safety instructions, or commercially sensitive details. Do not copy those into this guide, public pages, commits, or support requests.

## 1. What the company does (current working understanding)

PolyTreat is a specialty-chemicals business whose client materials cover three broad areas:

1. **Industrial water treatment** for categories such as boiler, cooling-water, reverse-osmosis, and effluent systems.
2. **Construction and surface-protection chemistry**, including categories such as waterproofing, coatings, repair, flooring, and rust treatment.
3. **Cleaning and facility-care products**, currently presented under the **V-Klin** brand.

This is a high-level map of the reviewed materials. The client has specifically confirmed that products formerly sold as Altra Care continue under V-Klin, with only the brand name changed. Some historic industrial/construction SKUs and technical claims still need evidence; do not turn that internal distinction into repeated public-facing disclaimers. Read the relevant source reviews in the [study wiki](../polytreat_study.md#learning-index), especially Sections 1–4, 5–12, and 18–21.

## 2. Facts and wording to handle carefully

- **Company identity:** The client confirmed on 2026-10-18 that the company is a Pvt. Ltd. and said both “PolyTreat Chemical Industries” and “PolyTreat Chemicals Pvt. Ltd.” may be used publicly. See [Study Wiki, Section 20](../polytreat_study.md#20-client-clarifications-and-remaining-questions).
- **1987:** The client believes this is most probably the year the business began. Do not call it the incorporation year or state a precise “37+ years” claim as verified until the milestone is confirmed.
- **PQRS:** The client corrected the old homepage wording. It means **Performance, Quality, Reliability, Service**. Use careful, modest descriptions; do not invent guarantees or technical outcomes. See [Study Wiki, Section 20](../polytreat_study.md#20-client-clarifications-and-remaining-questions).
- **V-Klin:** Altra Care has been discontinued; the client says all former Altra Care products moved to V-Klin and only the brand name changed. Old Altra Care artwork is legacy material, not current packaging. This confirms brand continuity, not the claims printed on old labels. See [Study Wiki, Sections 11–12 and 20](../polytreat_study.md#11-v-klin-cleaning-catalogue-product-range-and-audiences).
- **Certifications:** Images exist for ISO 9001, WHO-GMP, an FDA-named third-party certificate, and an Eco-Friendly certificate. Their scope, issuer, current status, and permitted public language differ. Do not use blanket “FDA approved,” disinfectant, medical, pest-control, or environmental claims. Check [Study Wiki, Sections 13–16](../polytreat_study.md#13-iso-9001-certificate-the-companys-quality-management-system) before proposing any certificate copy.
- **Products and performance:** Old product profiles, labels, and presentations can be outdated or contain unsupported claims. Do not assume every listed SKU is active. Keep dosage, recipes, exact composition, internal methods, and safety instructions out of marketing copy.
- **Contact details:** The current website uses `polyind2@gmail.com` and `+91 98202 35995`. Confirm with the client before adding other addresses, phone numbers, social profiles, or enquiry integrations.

## 3. Evidence hierarchy

1. A direct client clarification recorded in the study wiki takes precedence over conflicting old copy.
2. For company-specific claims, consult the cited original client asset and its limitations in [`polytreat_study.md`](../polytreat_study.md).
3. Older AI-generated project notes are not evidence. The files under `../Client Assets/` ending in `.md` are AI-authored summaries; original non-Markdown client files are the evidence base.
4. General web sources can explain a technical term but do not prove a PolyTreat product claim.
5. If a statement is unresolved in [Section 20](../polytreat_study.md#20-client-clarifications-and-remaining-questions), omit it from public copy or label it as pending confirmation.

## 4. Website design and implementation snapshot

The current homepage is a responsive, single-page introduction, not a full product catalogue. Its visible structure is:

- Navbar with Solutions, Industries, Quality, About Us, Contact, solution menus, division shortcuts, and a WhatsApp enquiry CTA.
- Light, animated hero with a short value statement, two CTAs, direct phone link, and restrained chemistry-inspired orbit artwork.
- Three areas of work: industrial water treatment, construction/protection, and V-Klin care.
- Applications, V-Klin overview, the corrected PQRS framework, contact panel, and responsive footer.
- Footer has Explore, Our Work, Contact, copyright, and a Brightlant credit. Social icons are placeholders and explicitly have no profile links yet.

The actual source is `src/app/page.tsx`, `src/components/Navbar.tsx`, and `src/app/globals.css`. For design intent and current decisions, see [`03_WEBSITE_Initial_req_suggestion.md`](03_WEBSITE_Initial_req_suggestion.md).

## 5. Plain-language mini glossary

| Term | Simple meaning |
|---|---|
| Boiler treatment | Managing water-related problems in equipment that makes steam. |
| Cooling-water treatment | Managing water circulated to carry heat away from equipment. |
| RO (reverse osmosis) | A membrane process that separates water from many dissolved substances. |
| Effluent | Wastewater leaving an industrial or other process. |
| TDS | Total dissolved solids: a broad measure of dissolved material in water. |
| TDS (product document) | Technical Data Sheet; in water testing, TDS commonly means total dissolved solids. Use context to tell them apart. |
| SDS / MSDS | A document describing chemical hazards, handling, storage, and emergency measures. Older MSDS files need current revision checks. |
| COA | Certificate of Analysis: a batch-related document reporting specified test results. It is not automatically a product-performance guarantee. |
| PQRS | PolyTreat's client-confirmed words: Performance, Quality, Reliability, Service. |

## 6. Project rules

- Use the study wiki and original cited sources; do not treat this summary or an AI-written brief as proof.
- Use cautious, plain language and distinguish documented facts from proposed design copy.
- Do not expose formulas, detailed dosage/application recipes, or confidential source content.
- Preserve the current brand spelling **V-Klin**; do not reintroduce Altra Care as an active brand.
- The site uses Next.js App Router, React, TypeScript, and **Vanilla CSS**. Do not add Tailwind.
- Make responsive and accessible interfaces; use the existing icon package and design tokens where appropriate.
- Avoid building proposed catalog, calculator, modal, or social-link features until separately scoped and supported by approved content.

## Sources and related documents

- [PolyTreat Study Wiki](../polytreat_study.md) — source reviews, plain-language notes, limitations, and open questions.
- [Website design and implementation brief](03_WEBSITE_Initial_req_suggestion.md) — actual current homepage and design direction.
- Client originals are stored in the sibling `Client Assets` folder; consult [`00_ASSETS_MANIFEST.md`](../../Client%20Assets/00_ASSETS_MANIFEST.md) for the asset index.
