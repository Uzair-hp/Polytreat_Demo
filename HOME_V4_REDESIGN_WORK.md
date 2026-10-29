# Home v4 Redesign - Work Completed

## Overview
Updated the PolyTreat Chemicals home page and navbar to "Home v4" specification. The redesign moves the PQRS framework to the top, creates a professional B2B-focused layout, and adds subtle purposeful animations.

---

## Files Changed

### Design Tokens
- **`src/styles/tokens.css`** - Complete rewrite with new brand accent colors (blue #1B5FA8, orange #E07B1A, purple #5B4BC4, green #0E8F5E, teal #0F8F8A), dark mode tints, motion durations, header heights (76px/64px), scroll progress gradient

### Home Page Structure
- **`src/app/page.tsx`** - New section order: Hero → PQRS Band → Ranges → Specialty → V-Klin → Contact (removed Applications, Certificates, Story sections)

### Navbar
- **`src/components/Navbar.tsx`** - Added scroll progress bar, scrolled state (height 76px→64px), nav link underline animation from left, RAF-throttled scroll listener
- **`src/components/navbar/Navbar.module.css`** - Scroll progress bar (4px gradient), updated header heights, underline animation, reduced motion support

### Hero Section (`src/components/home/HomeHero.tsx`)
- PQRS tagline above H1 with 4 colored dots (blue/orange/purple/green)
- H1: "Applied chemistry for water, structures, and everyday care." (60px, weight 800, "water, structures," in blue)
- Subline: manufacturing since 1987 in Maharashtra
- Right column: 400px hero image with 3 full-width tabs (Water/Construction/V-Klin)
- Tab crossfade with thin autoplay progress indicator (pauses on hover/focus)
- Stats card (52px below hero): 1987 / 3 Sites / 4 Ranges / 28 Areas — count-up animation on scroll
- Certificate chips directly under stats: 4 pills with stagger fade-in

### PQRS Band (`src/components/home/PqrsBand.tsx` - NEW)
- Full-width, dark background (#0B1B33), 96px vertical padding
- Eyebrow "The PQRS framework", H2 + lead paragraph (split layout)
- 4 cards (2×2 tablet, 1×4 desktop) with dark card #12284A
- 4px top border in accent tint, 96px letter clipped to top half
- On hover/focus: letter slides up fully visible, card lifts -8px, background lightens, border glows
- Each card: letter, principle name, description, divider + proof line
- Touch devices: letters fully visible by default

### Ranges (`src/components/home/Ranges.tsx`)
- Heading: "Four ranges, one manufacturer." with lead paragraph
- 4 cards in single row (desktop), equal height
- 4px top border in range accent, image slot on top
- Eyebrow (01 Water & process, 02 Construction, 03 Specialty, 04 V-Klin care)
- Title, description, tag pills, "Explore..." link pinned to bottom

### Specialty (`src/components/home/Specialty.tsx`)
- Bordered list of 3 rows: COROSIL (orange), POLYDOR-WS (purple), POLYKLIN (teal)
- 6px left border in accent, product name 28px, headline + description
- Tag pills, circular arrow button
- Hover: background lightens, border widens 6px→10px, arrow fills with accent

### V-Klin (`src/components/home/VKlin.tsx`)
- Two columns (desktop): text + green button left, product image + category chips right
- Background #EDF7F2
- Uses highest-resolution product lineup image
- Category chips lift 2px on hover

### Contact (`src/components/home/Contact.tsx`)
- Dark background (#0B1B33)
- "Let's talk about your application." with "Request a Quote" (primary) + "Chat on WhatsApp" (secondary) buttons
- Right: 2×2 info tiles (email, technical/sales phone, WhatsApp, corporate office)
- Tiles wide enough for email not to wrap
- Hover: tiles lift 3px, arrow moves

### Styles (`src/components/home/home.module.css`)
- Complete rewrite with all new component styles
- Section fade-up on scroll (IntersectionObserver, threshold 0.15)
- Card hover lifts (translateY -4px to -8px with soft shadows)
- Image zoom on range card hover (scale 1.04)
- Button hover states (primary lifts 1px, secondary border color change)
- All animations respect `prefers-reduced-motion: reduce`
- Responsive breakpoints: desktop 1024+, tablet 768-1199, mobile <768

### Utility
- **`src/components/ui/Chip.tsx`** - Added `style` prop for animation delay support

---

## Animation Spec Implementation

| Feature | Implementation |
|---------|----------------|
| Scroll progress line | 4px fixed top bar, gradient, `transform: scaleX()` with RAF |
| Navbar shrink | 76px→64px on scroll >8px, subtle shadow |
| Nav link underline | Grows from left on hover/focus/active |
| PQRS letter reveal | Clipped 96px box, translateY 50%→0 on hover/focus (450ms) |
| Hero entrance | Tagline dots pop (60ms stagger), H1→subline→buttons→image (1.2s total) |
| Stats count-up | ~1.2s ease-out when scrolled into view |
| Certificate chips | Fade-in with stagger |
| Section fade-up | 24px→0, opacity 0→1, once per section |
| Range card hover | -6px lift, soft shadow, image scale 1.04, arrow moves 4px |
| Specialty row hover | Background lightens, border 6px→10px, arrow fills |
| V-Klin chips | 2px lift on hover |
| Contact tiles | 3px lift, arrow moves |
| Reduced motion | All transitions/animations disabled, final states shown |

---

## Build & Lint Status
- **Build**: ✓ Passes (36 static pages generated)
- **Lint**: ✓ Passes (only pre-existing error in `QualityPrinciples.tsx:42` unrelated to this work)

---

## Removed from Home Page
- Industries & Applications section (overlapped with Ranges)
- Old PQRS block near bottom
- About/Story block (PQRS now carries the story)
- Certificates section (moved to hero as chips)
- FactsBar component (replaced by stats card in hero)

---

## Notes
- All copy reused from existing site — no new facts, numbers, certifications, or claims invented
- Image slots kept as placeholders where no real image exists
- Real `<a>`/`<button>` elements used throughout
- Visible focus states on all interactive elements
- Alt text on images, aria-labels on icon-only buttons