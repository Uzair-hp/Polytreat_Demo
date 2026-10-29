# PolyTreat Chemicals: Home Page Redesign v4

Single source of truth for the Home v4 redesign. Supersedes the v3 mockup direction. `design.md` is the current-state audit of the old site. This file is the target.

Scope: HOME PAGE and NAVBAR only. Other pages are redesigned later using the same system.

---

## 1. Project context

- Client: PolyTreat Chemicals Pvt. Ltd. A Pvt Ltd manufacturer; website has two segments: company services and company products (V-Klin cleaning brand).
- Audience: B2B buyers (plant, facility, construction and procurement teams) plus institutional and home buyers for V-Klin.
- Goal: look professional, clean and trustworthy; show real details clearly; make the PQRS principles the first thing visitors understand.
- Tone: confident, technical, plain-spoken. No hype.

## 2. Brand identity

- Logo: four-dot mark (blue, orange, purple, green) + "PolyTreat". The four dots are the basis of the four-accent color system.
- Company principles, the PQRS framework (this is the company tagline and must be prioritized):
  - **P Performance**: formulations considered in the context of the task and the operating system.
  - **Q Quality**: a focus on product quality and clear technical documentation.
  - **R Reliability**: a dependable working relationship from product enquiry through supply.
  - **S Service**: a direct conversation with the team about the product and its intended use.
- Tagline string: `Performance · Quality · Reliability · Service`. Spell it PQRS (not PORS) everywhere.

## 3. Content rules (strict)

- Reuse ONLY facts already on the current site. Do NOT invent numbers, certifications, awards, clients or claims.
- Facts allowed: manufacturing since 1987; 3 sites in Maharashtra; 4 product ranges; 28 product areas; in-house QC laboratory with daily product monitoring; ISO 9001:2015 QMS; UKcert WHO-GMP reference; private FDA reference; UKcert Eco-Friendly certificate.
- Keep certificate wording exactly as written ("reference" wording is intentional and honest).
- Images: use existing real photos. Where none exist, use a tinted placeholder labeled `[Photo: ...]`. No stock icons or stock photos as substitutes for plant, lab or product imagery.
- Contact: +91 98202 35995 (technical and sales); WhatsApp chat; corporate office 7-A Topiwala Building, Goregaon (West), Mumbai 400104. Email currently a Gmail address; replace with a domain address when the owner supplies one.

## 4. Design principles

1. PQRS first: principles appear in the hero and in a dedicated band right after it.
2. Trust early: stats and certificates live inside the hero, visible on first load.
3. One idea per section; short page. Remove overlap (Industries and About blocks are removed from home).
4. Color means something: each product range keeps its own accent everywhere it appears.
5. Clean, purposeful motion only (transform and opacity). Nothing loops or bounces.
6. Real content over decoration. Clear hierarchy, generous whitespace, readable text.

## 5. Design tokens

### Color
| Token | Value | Use |
|---|---|---|
| blue | #1B5FA8 | primary, links, Performance, Water-hero accent |
| orange | #E07B1A | Construction accent, Quality |
| purple | #5B4BC4 | Specialty accent, Reliability |
| green | #0E8F5E | V-Klin accent, Service |
| teal | #0F8F8A | Industrial water range accent |
| navy | #0B1B33 | headings, dark sections |
| navy-card | #12284A (hover #173358) | cards on dark |
| body grey | #4A5B72 | body text |
| hero bg | #F3F7FB | hero and footer background |
| border | #DDE4EE | card borders |
| V-Klin bg | #EDF7F2 | V-Klin section |

Dark-text accents (for small text on light backgrounds, 4.5:1): teal #0B6E6A, orange #9A5008, purple #4636A8, green #0A6B45.
Light tints (on dark backgrounds): blue #5AA9F0, orange #F2A04A, purple #A99CFF, green #4FD1A0.
Tag pill backgrounds: teal #DDF3F1, orange #FBEAD3, purple #E8E5FA, green #DDF3E8.

### Typography
- Font: Inter (400, 500, 600, 700, 800), with an Arial fallback.
- H1 60px / 800 / line-height 1.05 / letter-spacing -.02em. H2 40-44px / 800 / 1.1. H3 20-24px / 700.
- Body 15-17px, line-height 1.6. Eyebrow labels 12px, uppercase, letter-spacing .12em, weight 700.
- Minimum body size 15px; minimum label size 12px.

### Layout
- Container 1200px max, 32px side padding. Section vertical padding 96px (80px for V-Klin and Contact bands).
- Radii: cards 16px, hero media 20px, buttons 8px, pills 999px.
- Shadows: avoid by default; use 1px borders. Hover shadow only: `0 16px 36px rgba(11,27,51,.09)`.

### Motion
- Easing `cubic-bezier(.2,.8,.2,1)`. Interactions 200-450ms, scroll reveals 500-700ms.
- Animate only `transform` and `opacity`. Honor `prefers-reduced-motion` (show final states, no motion).

## 6. Page structure (top to bottom)

1. Scroll progress line + Navbar
2. Hero (includes PQRS tagline, stats card, certificate chips)
3. PQRS band
4. Four ranges, one manufacturer (bento grid)
5. Specialty products, in detail
6. Where we make it
7. V-Klin
8. Contact
9. Footer

Removed from the home page: "Industries & applications" section, the old bottom PQRS block, and the old About block. About and Quality stay in the nav and footer.

## 7. Section specifications

### 7.1 Scroll progress line and Navbar
- 4px bar fixed at the very top of the viewport, gradient blue > orange > purple > green. Width = scroll progress via `transform: scaleX()` (origin left), updated in a requestAnimationFrame-throttled scroll listener. It grows going down and shrinks going up.
- Navbar: sticky, white, 76px high. Shrinks to 64px with a subtle bottom border after 8px of scroll.
- Left: logo. Center links: Solutions, Industries, V-Klin, Quality, About, Contact. Right: primary button "Request a Quote".
- Link hover: underline grows from the left (`scaleX`), active section stays underlined. Mobile (<=900px): links collapse into a menu button.

### 7.2 Hero (background #F3F7FB)
Two columns (1.05fr / 1fr), gap 56px. Everything below is INSIDE the hero.

Left column:
- PQRS tagline above the H1: four words, each with a 10px dot (blue, orange, purple, green).
- H1: "Applied chemistry for water, structures, and everyday care." ("water, structures," in blue).
- Subline (18px): manufactured in Maharashtra since 1987; surface protection and water treatment chemistry built around the material and the problem.
- Buttons: "Explore solutions" (primary blue), "Talk to our team" (secondary, white with border).

Right column, ONE cohesive media component (fixes the old boxy, floating-window look):
- Image frame: 20px radius, overflow hidden, about 4:3 (420px high desktop), `object-fit: cover`, 1px border at most, no heavy shadow. Top-aligned with the H1 and ending near the bottom of the left column.
- Caption lives INSIDE the frame, bottom-left, 20px inset, over a dark gradient scrim (transparent to rgba(11,27,51,.65), bottom 45%). White text: accent icon chip, title (16px / 700), one-line scope (13px). No separate box, border or shadow; it never exceeds the frame.
- Switcher: segmented control directly under the image, same width. Three equal buttons: Water, Construction, V-Klin, each with an accent dot (teal, orange, green). White container, 1px border, 14px radius, 4px padding, 44px high buttons. A sliding indicator (accent tint) animates between buttons with `transform`. A 2px progress line along the bottom of the control fills over about 6s, then advances. Autoplay pauses on hover, focus and hidden tab.
- Change transition: image crossfade 400ms with scale 1.03 to 1; caption text fades and moves up 8px. Reserve image height (no layout shift).

Stats card (inside hero, 52px below the grid, NOT overlapping the hero edge):
- White card, 1px border, no shadow, 4 equal columns separated by dividers: 1987 Manufacturing since / 3 Sites in Maharashtra / 4 Product ranges / 28 Product areas. Numbers 36px / 800; count up once (about 1.2s) when scrolled into view.

Certificate chips (directly under the stats, left aligned, pills with 1px border): ISO 9001:2015 QMS; UKcert WHO-GMP reference; Private FDA reference; UKcert Eco-Friendly certificate. Use real certificate logos if available.

### 7.3 PQRS band (the signature section)
- Full width, background #0B1B33, 96px vertical padding, directly after the hero.
- Header row: eyebrow "The PQRS framework" (light blue), H2 "Four principles behind every product we make." (44px, white), lead on the right: "This is how PolyTreat has worked since 1987: every range is judged against the same four standards."
- Four cards in a row (2x2 on tablet and mobile), gap 20px, 56px below the header. Card: #12284A, 16px radius, 4px top border in its light tint, padding 32px 28px.
  - Giant letter (96px / 800) in the tint, principle name (22px / 700), description (15px, #B6C3D6), divider, then one proof line (13px / 600, white).
  - P (blue tint #5AA9F0): proof "Built around the application".
  - Q (orange tint #F2A04A): proof "In-house QC lab · ISO 9001:2015".
  - R (purple tint #A99CFF): proof "Manufacturing since 1987".
  - S (green tint #4FD1A0): proof "TDS and safety documents on request".
- SIGNATURE INTERACTION: at rest, each giant letter shows only its TOP HALF (96px clip box, letter offset about 50% down). On hover or focus-within the letter slides up to full height (about 450ms), the card lifts `translateY(-8px)`, its background lightens to #173358, and the top border brightens. Touch devices (`hover: none`): letters fully visible by default. Entrance: cards fade up with an 80ms stagger.

### 7.4 Four ranges, one manufacturer (bento grid)
- Header: eyebrow "What we make"; H2 "Four ranges, one manufacturer."; right lead: "PolyTreat formulates and produces all four of its product ranges at its own sites, organized around the systems, surfaces, and spaces they serve."
- Grid: 3 columns, gap 20px, margin-top 44px.
  - Card 01 Water: column 1, spans 2 rows (tall); image on top (260px).
  - Card 02 Construction: columns 2-3, top row; horizontal layout (image left 44%, body right 56%, min 240px).
  - Card 03 Specialty: column 2, row 2. Card 04 V-Klin: column 3, row 2.
- Card style: white, 1px border #DDE4EE, 16px radius, overflow hidden, 4px top border in range accent (01 teal, 02 orange, 03 purple, 04 green). Body padding 22px: eyebrow (dark accent), title (20px; 24px on 01 and 02), one description, tag pills, and the "Explore ..." link pinned to the bottom (no empty gap).
- Copy:
  - 01 Industrial water & process: "Treatment for the systems that keep your plant running." Water-treatment chemistry for boiler, cooling-water, reverse-osmosis, and effluent systems. Tags: Boilers, Cooling towers, RO, Effluent. Link: Explore water treatment.
  - 02 Construction & protection: "Surface protection built around the material and the problem." Waterproofing, coatings, concrete repair, flooring, and specialty surface-treatment products. Tags: Waterproofing, Coatings, Flooring, Rust treatment. Link: Explore construction chemistry.
  - 03 Specialty products: "Single-purpose products, each aimed at one problem." A dedicated line for jobs the main ranges do not cover, from odour control to HVAC coil care. Tags: Odour control, HVAC coil cleaning. Link: Explore specialty products.
  - 04 V-Klin care: "Everyday cleaning for homes, institutions, and facilities." Cleaning and facility-care products grouped under PolyTreat's V-Klin brand. Tags: Floor & surface, Handwash. Link: Explore the V-Klin range.
- Hover: lift 6px, soft shadow, image scale 1.04 inside its frame, link arrow moves 4px. Whole card clickable (stretched link). Reveal: fade up with 80ms stagger.
- Responsive: <=900px two columns (card 01 normal height, card 02 spans both); <=560px single column, card 02 stacks.

### 7.5 Specialty products, in detail
- Header: eyebrow "Specialty products"; H2 "Specialty products, in detail."; lead: each solves one specific problem; full pages carry product literature and document requests.
- Bordered list (16px radius), three rows. Each row: 6px left border in accent, product name 28px / 800 with eyebrow, headline + description, tag pills, circular arrow button.
  - COROSIL (orange, Corrosion control): "Treat the rust, then paint over it." A water-based rust inhibitor and converter primer for ferrous metal. Tags: Structural steel, Railings & grills, Rolling shutters.
  - POLYDOR-WS (purple, Odour control): "For odours you cannot mask." An odour neutraliser for industrial, process and facility odour problems. Odour control only: not a disinfectant, sanitiser or insecticide. Tags: Waste & wastewater, Exhaust scrubbers, Facilities.
  - POLYKLIN (teal, HVAC coil care): "Coil cleaning for air-conditioning equipment." A cleaning compound for contaminated evaporator and condenser coils. Tags: Evaporator coils, Condenser coils, AHU & FCU.
- Keep the existing small disclaimers (e.g. a primer is still required over a treated surface). Hover: row background lightens, left border widens 6px to 10px, arrow button fills with its accent.

### 7.6 Where we make it (manufacturer first)
- Placement: after Specialty products, before V-Klin. Backs up the PQRS band.
- Layout: two columns (1fr / 1.2fr), gap 56px, white background.
- Left: eyebrow "Where we make it"; H2 "A manufacturer first, since 1987."; lead: PolyTreat Chemicals Pvt. Ltd. formulates and produces its ranges at its own plants, with an in-house laboratory monitoring quality daily and a direct technical conversation behind every product. Three proof rows with 44px icon tiles: In-house QC laboratory (daily product monitoring), Three sites in Maharashtra (Mumbai and Palghar), Formulated in our own plants (continuous operation since 1987). Links: "Read about PolyTreat" and "Certifications and their scope".
- Right: three stacked site cards, 6px left border in accent, pin icon: Corporate office, blue: Goregaon (West), Mumbai. Green products facility, green: Goregaon (East), Mumbai. Manufacturing plant, orange: Tarapur MIDC, Palghar.
- Motion: right cards slide in from the right (translateX 24px to 0) with 80ms stagger; hover lift 4px, left border widens, pin takes the accent. If no real plant or lab photo exists, use a labeled placeholder, not stock.

### 7.7 V-Klin
- Background #EDF7F2, 80px padding, two columns. Left: eyebrow "A PolyTreat brand" (green), H2 "Meet V-Klin. Care for everyday spaces.", lead: ten products across seven care categories grouped by the task each one does; green button "Explore V-Klin".
- Right: large, clean product lineup image (highest-resolution asset, on white) plus category chips: Floor & surface care, Hand care & hygiene, Dishwashing, Glass & window care, Bathroom & toilet care, Odour & air care, Natural wellness. Chips lift 2px on hover; image fades in.

### 7.8 Contact
- Background #0B1B33, 88px padding, two columns. Left: eyebrow "Start a conversation"; H2 "Let's talk about your application."; lead: tell us the system, surface or facility and we'll direct it to the right team, including current product documents; buttons "Request a Quote" (white) and "Chat on WhatsApp" (outline).
- Right: 2-column tile grid on #12284A. Email and Corporate office tiles span both columns (so the email never wraps awkwardly). Technical & sales and WhatsApp tiles are single column. Tiles lift 3px on hover.
- Optional later: a short enquiry form (name, company, product interest, message).

### 7.9 Footer
- Background #F3F7FB. Four columns (1.4fr / 1 / 1 / 1): logo + one-line description; Explore (Solutions, Industries, V-Klin, Quality, Certifications, About us, Contact); Our work (Industrial water treatment, Boiler & cooling water, RO & effluent, Construction chemistry, Waterproofing & coatings, Specialty products); Contact (email, phone, Goregaon (West), Mumbai).
- Bottom bar: copyright "© 2026 PolyTreat Chemicals Pvt. Ltd." and the PQRS tagline.

## 8. Motion summary

| Element | Behavior |
|---|---|
| Scroll progress line | Grows and shrinks with scroll (scaleX) |
| Navbar | Shrinks to 64px with border after 8px scroll; link underline grows on hover |
| Hero load | Tagline dots pop in (60ms stagger), H1, subline, buttons, media in sequence, under 1.2s total |
| Hero switcher | Sliding indicator, image crossfade, progress line autoplay (about 6s) |
| Stats | Count up once on scroll into view |
| PQRS cards | Half-letter rises to full on hover or focus; card lifts 8px; staggered entrance |
| Range cards | Lift 6px, image zoom 1.04, arrow moves 4px |
| Specialty rows | Background lightens, border widens, arrow fills |
| Where we make it | Cards slide in from right, hover lift |
| Buttons | Lift 1px on hover, visible focus ring |

Performance: CSS transitions where possible; JS only for scroll progress, count-up, IntersectionObserver reveals and tab autoplay. `will-change: transform` only on animating elements. No layout shift. Smooth on a mid-range phone.

## 9. Responsive

- Desktop 1200+. Tablet 768-1199: ranges 2 columns, PQRS 2x2, stats 2x2. Mobile <768: single column, nav collapses to a menu button, hero media stacks below the text (about 280px image), switcher stays full width.
- At <=900px grids collapse; headings shrink (H1 about 40px, H2 about 30px).

## 10. Accessibility

- Semantic landmarks, real `<a>` and `<button>` elements, visible 3px focus rings, alt text on all images, aria-labels on icon-only buttons.
- Hero switcher: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, arrow-key navigation.
- Text contrast at least 4.5:1 (use the dark-accent text tokens on light backgrounds). `prefers-reduced-motion` disables all motion and autoplay.

## 11. Changes from v3

- PQRS moved from the bottom to the hero (tagline) and a dedicated band right after the hero.
- Stats and certificates moved inside the hero (no floating overlap card).
- Ranges restored to the bento grid; hero switcher rebuilt as one cohesive component.
- "Where we make it" replaces the About block; Industries and the old PQRS block removed from home.
- Real four-column footer; contact tiles fixed; signature motion added.

## 12. Open items and assets needed

- Real photos: boiler/water plant, roof waterproofing, HVAC coil work, V-Klin lineup (high resolution), plant and lab.
- Certificate logos or seals, if available.
- A domain email address to replace the Gmail address.
- Decide later whether to add an enquiry form.

## 13. Acceptance checklist

- [ ] PQRS visible in the hero tagline and as a band immediately after the hero
- [ ] Stats and certificates inside the hero, no overlap seam
- [ ] PQRS letters show their top half at rest and rise on hover (full on touch)
- [ ] Scroll progress line works up and down; navbar shrinks on scroll
- [ ] Bento ranges grid matches 7.4, no empty gap in cards, links pinned to the bottom
- [ ] Hero media is one cohesive component; caption inside the frame; switcher aligned and full width
- [ ] "Where we make it" present; Industries, old PQRS and old About blocks removed
- [ ] Contact email does not wrap awkwardly; footer has four columns
- [ ] No invented facts; certificate wording unchanged
- [ ] Responsive at 1440, 1024, 768, 390; keyboard navigable; reduced-motion respected
- [ ] No layout shift; smooth scrolling on a mid-range phone

## 14. Notes for the coding agent

- Implement the home page and navbar only. Reuse existing components where possible and define the tokens in section 5 as CSS variables.
- Do not change copy or facts. When something is ambiguous or an asset is missing, use a labeled placeholder and tell the owner instead of guessing.
- When done, list the files changed and anything you could not complete.
