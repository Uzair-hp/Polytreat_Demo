# 🤖 AI AGENT INSTRUCTION & CONTEXT SPECIFICATION: POLYTREAT CHEMICALS
### File: `agent.md`
### Project: PolyTreat Chemicals Corporate & Product Platform
### Agency: Brightlant Software Solutions
### Target AI: Any AI Coding Agent (Antigravity, Cursor, Claude Code, GitHub Copilot, v0, Bolt, etc.)
### Status: **Ready for Autonomous Code Execution**

---

## 🎯 1. Mission & Role Definition

You are a **Senior Frontend Architect & UI/UX Specialist** at Brightlant Software Solutions. Your objective is to design, develop, and deliver a modern, high-converting, and SEO-optimized web application for **PolyTreat Chemicals Pvt. Ltd.**

You must follow the strict technical constraints, brand guidelines, color system, and real product data specified in this file. **Do not use placeholder "Lorem Ipsum" or fake chemical names.** Always use the verified real-world client data provided below.

---

## 🏢 2. Client Business & Brand Context

* **Company Name:** PolyTreat Chemicals Pvt. Ltd. / Polytreat Chemical Industries
* **Established:** 1987 (37+ Years of Chemical Manufacturing Excellence)
* **Key Promoter / Director:** Mr. Vijay M. Shukla
* **Certification:** **ISO 9001:2015 Certified** (SMCS / AIAO-BAR USA Accredited, Certificate No. `QMS2500904`, Scope: *Water Treatment, Industrial Cleaning, Hygiene & Homecare Chemicals*)
* **Corporate Head Office:** 7-A, Topiwala Bldg., 'C' Wing, Opp. Topiwala Center / Cinema, Goregaon (West), Mumbai – 400104, MH, India.
* **Green Products Facility:** 306, Shankhala Industrial Premises, Near Chudiwadi, Gogatewadi, Goregaon (East), Mumbai – 400063.
* **Heavy Manufacturing Plant:** Tarapur Industrial Area (MIDC), Palghar / Maharashtra.
* **Official Contact:** Phone: `+91-22-46002847` | Mobile: `+91 9820235995` | Email: `polyind2@gmail.com` / `vijayshukla99@gmail.com`
* **Market Footprint:** Pan-India industrial supply + **Direct Exports to Middle East & South Africa**.
* **Core Philosophy (PQRS):**
  * **P - Performance:** Superior chemical scale/corrosion prevention at lowest operational dosages.
  * **Q - Quality:** ISO-certified, daily in-house laboratory testing, statistical process control.
  * **R - Reliability:** 37+ years dependable supply chain, custom batch synthesis.
  * **S - Service:** On-site water testing, technical consultation, multipurpose pilot reactor simulations.

---

## 🏛️ 3. Brand Architecture (The Dual Division)

The website must cater to two distinct buyer personas through a unified platform:

```
                                  POLYTREAT CHEMICALS
                                           │
        ┌──────────────────────────────────┴──────────────────────────────────┐
        ▼                                                                     ▼
[DIVISION 1: INDUSTRIAL SPECIALTY CHEMICALS]               [DIVISION 2: INSTITUTIONAL & GREEN CARE]
Brand: POLYTREAT™ / POLYCIDE™ / POLYBOND™                   Brand: ALTRA CARE™ (V-KLIN™)
Audience: Plant Heads, ETP Engineers, Civil Contractors     Audience: Facility Managers, Hotels, Hospitals
- Cooling Water & Boiler Water Solutions                    - Commercial Floor Cleaners & Deodorizers
- Effluent (ETP) & Sewage (STP) Polymers                    - Liquid Hand Soap (Aloe Vera / 99% Germs)
- Reverse Osmosis (RO) Antiscalents & Biocides              - Non-Ammoniacal Streak-Free Glass Cleaner
- Construction Waterproofing & Heavy Epoxy Mortars          - Degreasing Dishwash Liquid Gel
- Sugar Mill Bactericides & Paint Preservatives             - Organic Acid Non-Fuming Toilet Cleaner
                                                            - 100% Herbal Natural Mosquito Repellent
        │                                                                     │
        └──────────────────────────────────┬──────────────────────────────────┘
                                           ▼
                           [SPECIALTY FLAGSHIP INNOVATIONS]
             • POLYDOR - WS  : Heavy-Duty Broad Spectrum Odor Neutralizer (26+ Uses)
             • COROSIL       : Water-Based Rust Converter cum Primer (No Sandblasting)
             • POLYKLIN      : AHU / FCU Air Conditioner Coil Cleaner (Organic Food-Grade)
```

---

## 🛠️ 4. Technical Stack & Development Rules

The AI Agent must strictly adhere to this technical framework:

1. **Framework:** **Next.js (React — App Router)**.
2. **Styling:** **Pure Vanilla CSS with Design Tokens & CSS Modules / `globals.css`**.
   * *Rule:* Do NOT install or generate TailwindCSS unless explicitly told. Use clean CSS variables, flexbox, CSS grid, and CSS keyframe animations.
3. **Icons:** **`lucide-react`** (Install via `npm install lucide-react`).
4. **Typography:** Google Fonts:
   * **Headings:** `Plus Jakarta Sans` (Weights: 600, 700, 800)
   * **Body / UI:** `Inter` (Weights: 400, 500, 600)
   * **Chemical Codes / Badges:** `JetBrains Mono` / monospace (Weight: 500)
5. **Data Layer (Phase 1):** Static typed `products.json` file placed in `src/data/products.json` or `data/products.json` for instant zero-latency filtering and search.
6. **Lead Generation:** Pre-configured WhatsApp click-to-chat API (`https://wa.me/919820235995?text=...`) + interactive RFQ quote modal.

---

## 🎨 5. Design System: Colors & Tokens

Paste and strictly use these CSS custom properties in `globals.css`:

```css
:root {
  /* Brand Primary & Industrial Theme */
  --color-primary-dark: #0B192C;     /* Deep Navy / Authority Background */
  --color-primary-navy: #1E3E62;     /* Medium Navy for Cards / Sections */
  --color-water-blue: #0284C7;       /* Ocean Pure Water Blue / Accent */
  --color-water-light: #38BDF8;      /* Cyan highlight & link hover */

  /* Eco-Friendly / Altra Care Green Division */
  --color-bio-green: #10B981;        /* Emerald Green / Eco-safe Badge */
  --color-bio-dark: #059669;         /* Darker Green for buttons */
  --color-bio-light: #D1FAE5;        /* Light Green badge background */

  /* Conversion, Badges & Accents */
  --color-accent-amber: #F59E0B;     /* Amber Gold for Quote CTAs */
  --color-accent-hover: #D97706;     /* Darker Amber on Hover */

  /* Surfaces & Neutrals */
  --color-surface-white: #FFFFFF;    /* Clean card surfaces */
  --color-surface-light: #F8FAFC;    /* Section background tint */
  --color-surface-alt: #F1F5F9;      /* Alternate spec tables */
  --color-border-subtle: #E2E8F0;    /* Card & divider borders */
  --color-border-dark: #1E293B;      /* Dark card borders */
  --color-text-main: #0F172A;        /* High-contrast body text */
  --color-text-muted: #64748B;       /* Secondary details & specs */
  --color-text-light: #F8FAFC;       /* Text on dark backgrounds */
  
  /* Radii & Shadows */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(11,25,44,0.08);
  --shadow-lg: 0 12px 28px rgba(11,25,44,0.12);
  --shadow-glow: 0 0 25px rgba(2,132,199,0.35);
}
```

---

## 📑 6. Phase 1 Implementation: Complete Homepage Blueprint

The AI Agent must generate a complete, responsive, and visually stunning **Homepage** containing the following 10 sections:

### 1. Top Utility Bar (`<TopBar />`)
* **Left:** `[ISO 9001:2015 Certified]` pill + `[Make In India]` emblem.
* **Right:** Quick call link: `+91 9820235995` | Email link: `polyind2@gmail.com` | Location: `Mumbai, India`.

### 2. Main Navigation Bar (`<Navbar />`)
* **Logo:** `POLYTREAT` text with styled droplet emblem & tagline `"Engineered Chemical Solutions"`.
* **Navigation Links:**
  * *Industrial Water*
  * *Construction & Epoxy*
  * *Altra Care Hygiene*
  * *Specialty Flagships*
  * *About & R&D*
* **CTA Button:** `[Request a Quote]` (High-contrast amber/blue button that opens the RFQ modal).

### 3. Hero Section with Interactive Dual Switcher (`<HeroSection />`)
* **Interactive Mode Switcher:**
  * Tab A: **"Industrial Water & Specialty"** (Default active)
    * Headline: *"High-Performance Water Treatment & Specialty Chemical Formulations"*
    * Sub-headline: *"Engineered scale inhibitors, boiler scavengers, ETP polymers, and construction coatings trusted by industrial plants since 1987."*
    * CTAs: `[Explore Industrial Catalog]` + `[Download Company Profile]`
  * Tab B: **"Institutional & Green Care (Altra Care)"**
    * Headline: *"Eco-Friendly, Biodegradable Cleaning & Odor Control Systems"*
    * Sub-headline: *"Food-grade formulations, natural herbal mosquito repellents, and heavy-duty institutional disinfectants for hotels, hospitals, and facilities."*
    * CTAs: `[Explore Altra Care Range]` + `[Request Bulk Pricing]`
* **Trust Badges below Hero:** 37+ Years Track Record • In-House R&D & Pilot Reactor • Zero Toxic Effluent Compliance.

### 4. Credibility & Milestones Strip (`<TrustStrip />`)
A modern 4-column metric strip:
* **Metric 1:** `1987` → *"Founded with 37+ Years of Industry Leadership"*
* **Metric 2:** `ISO 9001:2015` → *"Quality Management System Certified by SMCS / AIAO-BAR"*
* **Metric 3:** `2 Manufacturing Units` → *"State-of-the-Art Plants in Tarapur MIDC & Goregaon"*
* **Metric 4:** `Global Reach` → *"Exporting to Middle East & South African Markets"*

### 5. The "PQRS" Core Pillars Grid (`<PQRSSection />`)
A clean 4-card grid detailing PolyTreat's founding code:
* **Card P (Performance):** Maximum scale/corrosion prevention at lowest chemical dosages.
* **Card Q (Quality):** Daily laboratory statistical analysis on finished products and raw materials.
* **Card R (Reliability):** 37+ years dependable supply chain for uninterrupted plant operation.
* **Card S (Service):** On-site technical troubleshooting, custom water testing, and pilot reactor simulations.

### 6. The 3 Flagship Problem-Solvers Showcase (`<FlagshipShowcase />`)
Highlight PolyTreat's top 3 high-margin differentiators with feature tags & action buttons:
1. **`POLYDOR - WS` (Broad-Spectrum Odor Neutralizer):**
   * *Tag:* True Chemical Reaction (Non-Masking)
   * *Summary:* Neutralizes toxic industrial and municipal malodors across 26+ applications (Garbage dumps, ETP tanks, poultry, food scrubbers, HVAC ducts).
   * *Action:* `[View 26 Applications]`
2. **`COROSIL` (Rust Converter cum Primer):**
   * *Tag:* Surface Chemistry Innovation
   * *Summary:* Water-based formula converts active rust directly into an insoluble metallo-organic protective layer. Eliminates expensive sandblasting. Compatible with epoxy and PU topcoats.
   * *Action:* `[Technical Literature]`
3. **`POLYKLIN` (AHU / FCU Coil Cleaning Compound):**
   * *Tag:* HVAC Energy Optimizer
   * *Summary:* Food-grade organic active cleaner with corrosion inhibitors. Brightens copper and aluminium coils without damage, restoring heat exchange efficiency and lowering power bills.
   * *Action:* `[HVAC Efficiency Specs]`

### 7. Industries Served Interactive Grid (`<IndustriesGrid />`)
7 sector cards with Lucide icons and target chemical categories:
1. *Cooling Towers & Heat Exchangers* (Scale/Corrosion Inhibitors, Biocides)
2. *Steam Boilers & Thermal Power* (Oxygen Scavengers, Sludge Conditioners, Descalers)
3. *ETP / STP Wastewater Plants* (DADMAC Polyelectrolytes, Flocculants, Coagulants)
4. *Civil Infrastructure & Waterproofing* (Elastomeric Acrylics, Epoxy Mortars, SBR Latex)
5. *Sugar Mills & Refineries* (BKC-50%, Carbamates, Scale Softeners)
6. *Paints & Coatings Industry* (CIT/MIT In-Can & Dry-Film Paint Preservatives)
7. *Hotels, Hospitals & Corporate Facilities* (Altra Care Floor, Restroom, Glass & Air Care)

### 8. Global Footprint & Export Map (`<GlobalReach />`)
* Interactive or visual world map highlighting Mumbai manufacturing hub connected to **Middle East** and **South African** export routes + Pan-India regional distribution network.

### 9. Quick RFQ Lead Capture Strip (`<QuickRFQ />`)
* High-contrast CTA section: *"Require a Tailored Chemical Formulation or Bulk Commercial Quote?"*
* Dropdown selection: Product Category (Cooling Water / Boiler / ETP / Waterproofing / Altra Care / Specialty).
* Instant form: Full Name, Company, Email, Phone, Message + Submit button.

### 10. Comprehensive Footer (`<Footer />`)
* **Column 1:** Corporate summary, ISO 9001:2015 badge, 37+ years badge.
* **Column 2 (Industrial Chemistry):** Cooling Water, Boiler Water, ETP/STP, Construction, Sugar & Paint.
* **Column 3 (Altra Care Hygiene):** Surface Cleaners, Restroom Care, Glass Cleaner, Herbal Repellent.
* **Column 4 (Contact & Plants):** 
  * Sales: 7-A, Topiwala Bldg., Goregaon (W), Mumbai – 400104
  * Works: 306, Shankhala Ind., Goregaon (E), Mumbai – 400063
  * Heavy Unit: Tarapur MIDC, Maharashtra
  * Direct Tel: `+91-22-46002847` | Mob: `+91 9820235995` | Email: `polyind2@gmail.com`
* **Bottom Bar:** © PolyTreat Chemicals Pvt. Ltd. | Designed by Brightlant Software Solutions | Privacy Policy & Terms.

### Persistent Global Components:
* **`<WhatsAppButton />`:** Fixed bottom-right button with pulse animation, linking to `https://wa.me/919820235995?text=Hi%20PolyTreat%20Team,%20I%20am%20interested%20in%20your%20chemical%20products`.
* **`<QuoteModal />`:** Modal with backdrop blur, triggered by any "Request Quote" button, with pre-filled product fields.

---

## 🗃️ 7. Product Catalog Seed Data (`products.json`)

The AI Agent must create and load real data from `data/products.json`. Here is the minimum seed schema containing verified client formulations:

```json
[
  {
    "id": "pt-465",
    "name": "Polytreat - 465",
    "division": "industrial",
    "category": "Cooling Water Treatment",
    "subCategory": "Open Recirculating Systems",
    "state": "Liquid",
    "description": "Corrosion cum scale inhibitor for open recirculatory cooling tower systems.",
    "packaging": "35 kg / 50 kg / 200 kg Carboys",
    "flagship": false
  },
  {
    "id": "pt-702",
    "name": "Polytreat - 702",
    "division": "industrial",
    "category": "Boiler Water Treatment",
    "subCategory": "Alkalinity & pH Builders",
    "state": "Liquid",
    "description": "Concentrated alkalinity builder and pH booster to prevent acidic boiler corrosion.",
    "packaging": "35 kg / 50 kg Carboys",
    "flagship": false
  },
  {
    "id": "pt-5025",
    "name": "Polytreat - 5025",
    "division": "industrial",
    "category": "Effluent Treatment (ETP)",
    "subCategory": "Polyelectrolytes",
    "state": "Liquid",
    "description": "High-charge Cationic Polyelectrolyte (DADMAC) for industrial wastewater flocculation.",
    "packaging": "50 kg / 200 kg Drums",
    "flagship": false
  },
  {
    "id": "polyproof-spr",
    "name": "POLYPROOF - SPR",
    "division": "construction",
    "category": "Construction Chemicals",
    "subCategory": "Waterproofing Membranes",
    "state": "Liquid",
    "description": "Single component elastomeric acrylic waterproofing membrane for terraces, basements, and water tanks.",
    "packaging": "20 kg / 50 kg Buckets",
    "flagship": false
  },
  {
    "id": "polydor-ws",
    "name": "POLYDOR - WS",
    "division": "specialty",
    "category": "Odor Neutralization",
    "subCategory": "Flagship Problem Solvers",
    "state": "Liquid",
    "description": "Broad-spectrum eco-friendly odor neutralizer for municipal landfills, sewage, poultry, and HVAC systems.",
    "packaging": "5 Ltr / 25 Ltr / 50 Ltr / 200 Ltr Drums",
    "flagship": true
  },
  {
    "id": "corosil",
    "name": "COROSIL",
    "division": "specialty",
    "category": "Corrosion Control",
    "subCategory": "Flagship Problem Solvers",
    "state": "Liquid",
    "description": "Water-based rust inhibitor cum converter primer for structural rebar and steelworks.",
    "packaging": "5 Ltr / 20 Ltr / 200 Ltr",
    "flagship": true
  },
  {
    "id": "polyklin",
    "name": "POLYKLIN",
    "division": "specialty",
    "category": "HVAC Care",
    "subCategory": "Flagship Problem Solvers",
    "state": "Liquid",
    "description": "Food-grade organic AHU and FCU cooling coil cleaner. Non-corrosive to aluminium fins and copper tubes.",
    "packaging": "35 kg / 50 kg / 200 kg Carboys",
    "flagship": true
  },
  {
    "id": "altra-floor-gold",
    "name": "Altra Care Golden Floor Cleaner",
    "division": "institutional",
    "category": "Altra Care Hygiene",
    "subCategory": "Floor & Surface Care",
    "state": "Liquid (Amber)",
    "description": "Heavy-duty floor cleaner and deodorizer with lasting residual pine/floral fragrance. Safe on marble and granite.",
    "packaging": "500 ml / 1 Ltr / 5 Ltr HDPE",
    "flagship": false
  },
  {
    "id": "altra-handwash",
    "name": "Altra Care Perfumed Liquid Soap (AQUA)",
    "division": "institutional",
    "category": "Altra Care Hygiene",
    "subCategory": "Hand Care & Hygiene",
    "state": "Liquid Gel",
    "description": "Aloe vera enriched gentle handwash gel. 99% germ efficacy, skin-neutral pH, phosphate-free.",
    "packaging": "250 ml / 500 ml dispenser / 5 Ltr HDPE",
    "flagship": false
  },
  {
    "id": "altra-mosquito",
    "name": "Altra Care Herbal Mosquito Repellent",
    "division": "institutional",
    "category": "Altra Care Hygiene",
    "subCategory": "Natural Wellness",
    "state": "Liquid Spray",
    "description": "100% natural water-based repellent spray containing Citronella, Lemongrass, Neem, and Eucalyptus oils.",
    "packaging": "100 ml / 200 ml Atomizer / 5 Ltr Carboy",
    "flagship": false
  }
]
```

---

## 🔒 8. Confidentiality & Security Directives

1. **Trade Secrets:** Do NOT expose exact internal chemical recipes, solvent ratios, or proprietary reaction steps on public pages.
2. **Contact Protection:** Use the verified corporate sales line (`+91 9820235995` / `polyind2@gmail.com`) for public contact elements.
3. **Asset Handling:** Keep all client-provided `.doc` and `.pdf` files in local storage; do NOT publish them raw to public unauthenticated Git repos.

---

## 🚀 9. Execution Command for AI Agent

When instructed to generate the project, the AI Agent must:
1. Initialize the **Next.js** project structure.
2. Setup `src/app/globals.css` with the design tokens and Google Font imports.
3. Place `products.json` in `src/data/products.json`.
4. Create modular components in `src/components/`.
5. Assemble the complete **Homepage (`src/app/page.jsx` or `page.tsx`)**.
6. Verify responsive layout for mobile (375px), tablet (768px), and desktop (1280px+).

---
*Created by Brightlant Software Solutions for AI-Assisted Development.*
