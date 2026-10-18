# PolyTreat Repository Guide for Coding Agents

Use this file as project operating guidance, not as evidence about the client. For company facts and claim limits, use [`polytreat_study.md`](../polytreat_study.md) and its cited client sources. The short internal summary is [`01_INTERN_CLIENT_KNOWLEDGE_BASE.md`](01_INTERN_CLIENT_KNOWLEDGE_BASE.md); current homepage status and visual direction are in [`03_WEBSITE_Initial_req_suggestion.md`](03_WEBSITE_Initial_req_suggestion.md).

## Source and claim rules

1. Client clarification recorded in the study wiki takes precedence over conflicting old copy.
2. A company-specific statement must be supported by the cited original source or marked unconfirmed. AI-authored Markdown briefs and generated summaries are not primary evidence.
3. Do not assume an old catalogue entry is an active product. Do not invent SKU descriptions, certifications, customer names, export routes, testimonials, technical results, or guarantees.
4. The client clarified that the legal form is Pvt. Ltd.; both “PolyTreat Chemical Industries” and “PolyTreat Chemicals Pvt. Ltd.” may be used publicly.
5. The client believes 1987 is most probably the year business began; incorporation date and exact tenure remain unconfirmed.
6. The correct client-confirmed PQRS is **Performance, Quality, Reliability, Service**.
7. Use **V-Klin** as the active cleaning-range brand. Altra Care is discontinued; old Altra Care package images are legacy.
8. Certificate wording must follow the scope and caveats in Study Wiki Sections 13–16. Never describe the reviewed private FDA-named certificate as “FDA approved.”
9. Do not expose formulas, proprietary process information, exact dosage recipes, or confidential safety/operating details.
10. If an answer is open in Study Wiki Section 20, omit the claim or ask for approved current information.

## Current codebase

- Framework: Next.js 16 App Router, React 19, TypeScript.
- Styling: **Vanilla CSS only**, chiefly `src/app/globals.css`. Do not add Tailwind.
- Icons: existing `lucide-react` dependency.
- Homepage: `src/app/page.tsx`.
- Navigation: `src/components/Navbar.tsx`.
- Global layout and font configuration: `src/app/layout.tsx`.
- Main visual style: bright, uncluttered blue/green surfaces; compact responsive navigation; animated but restrained hero art; responsive footer. Verify current code before assuming a feature exists.
- Current main homepage routes: `#solutions`, `#markets`, `#vklin`, `#pqrs`, `#contact`; footer links also expose `#about` and `#manufacturing`.
- Current contact actions include `polyind2@gmail.com`, `+91 98202 35995`, and WhatsApp. Other contact channels need client confirmation.
- Footer social glyphs are placeholders without profile links.

## Development rules

- Read repository `AGENTS.md` first. This project explicitly warns that installed Next.js conventions may differ from general knowledge. Before changing code, read the relevant version-specific guide under `node_modules/next/dist/docs/`.
- Use semantic HTML, keyboard-accessible controls, visible focus states, descriptive link names, and reduced-motion support.
- Test narrow mobile layouts for clipping and horizontal overflow; preserve readable text and comfortable tap targets.
- Do not introduce fake CTA behavior: label a link according to where it goes, and only promise a form, modal, download, or integration if it exists.
- Do not add or run tests/build checks unless the user asks for verification. Report accurately which checks were run.
- Avoid unrelated edits. Keep changes scoped to the requested task and summarize modified files and verification results.

## Homepage feature boundary

The current homepage presents the company, three broad areas of work, application groupings, V-Klin, PQRS, contact, and footer. The following are not established as implemented merely because older project notes propose them: product search/catalogue, TDS/COA downloads, quote modal or backend form, dosage calculator, export map, verified client-logo wall, or linked social accounts. Treat them as future ideas that require a separate scope and approved content.
