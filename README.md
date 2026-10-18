# PolyTreat Website

Responsive company homepage for PolyTreat Chemicals, built with Next.js App Router, React, TypeScript, and Vanilla CSS.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

- `npm run dev` — start Next.js development mode.
- `npm run build` — create a production build.
- `npm run start` — serve the production build.
- `npm run lint` — run ESLint.

## Current homepage

The homepage introduces three broad areas of work (industrial water treatment, construction/surface protection, and V-Klin care), application categories, PQRS, contact options, and a responsive footer. Product-level availability and claims should be confirmed before being added; the project does not currently provide a searchable technical catalogue or TDS download portal.

## Project documentation

- [`polytreat_study.md`](polytreat_study.md) — source-tracked study notes, plain-language glossary, claim limitations, and open questions. Use this as the business-research reference.
- [`docs/01_INTERN_CLIENT_KNOWLEDGE_BASE.md`](docs/01_INTERN_CLIENT_KNOWLEDGE_BASE.md) — short internal orientation and evidence rules.
- [`docs/03_WEBSITE_Initial_req_suggestion.md`](docs/03_WEBSITE_Initial_req_suggestion.md) — current homepage structure, design direction, and feature boundary.
- [`docs/agent.md`](docs/agent.md) — coding-agent repository rules.
- `context_handover.md` — local internal handover; intentionally ignored by Git.

Client originals are organized in the sibling `../Client Assets/` directory. Consult its `00_ASSETS_MANIFEST.md` for the inventory. Do not publish confidential source documents or copy proprietary formulas and application recipes into public content.

## Development conventions

- Use Vanilla CSS and existing design tokens in `src/app/globals.css`; do not introduce Tailwind.
- Before changing code, follow `AGENTS.md` and read the relevant installed Next.js documentation under `node_modules/next/dist/docs/`.
- Keep homepage content responsive and accessible, and respect reduced-motion preferences.
