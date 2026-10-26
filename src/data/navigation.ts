/**
 * Shared navigation data for the global Navbar (and, later, the footer).
 *
 * Moved verbatim out of `src/components/Navbar.tsx`. Every label, link target,
 * detail line and promo string is unchanged — only the location changed.
 *
 * `groupRange` / `menuRange` are the only additions: they map a menu group or a
 * whole panel to one of the four product-range accents used by the header dots,
 * headings and the promo card. `"brand"` means the group does not belong to a
 * single range, so it falls back to the brand blue.
 */

export type MenuKey = "products" | "vklin" | "quality" | "company";
export type MenuLink = { label: string; href: string; detail?: string };
export type MenuGroup = { title: string; links: MenuLink[] };
export type MenuPromo = { eyebrow: string; text: string; cta: string; href: string };

/** Product-range accent for a nav group, or "brand" when it spans more than one. */
export type NavRange = "water" | "construction" | "specialty" | "vklin" | "brand";

const productGroups: MenuGroup[] = [
  {
    title: "Industrial water",
    links: [
      { label: "Industrial water treatment", href: "/solutions/industrial-water" },
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
      { label: "RO & effluent", href: "/solutions/ro-effluent" },
    ],
  },
  {
    title: "Construction & surface protection",
    links: [
      { label: "Construction chemistry overview", href: "/solutions/construction-chemistry" },
      { label: "Waterproofing, repair & coatings", href: "/solutions/waterproofing-repair-coatings" },
      { label: "Flooring & joint sealing", href: "/solutions/flooring-joint-sealing" },
    ],
  },
  {
    title: "Specialty products",
    links: [
      { label: "Specialty products overview", href: "/specialty" },
      { label: "COROSIL", href: "/specialty/corosil" },
      { label: "POLYDOR-WS", href: "/specialty/polydor-ws" },
      { label: "POLYKLIN", href: "/specialty/polyklin" },
    ],
  },
  {
    title: "Other catalogue families",
    links: [
      { label: "Paint preservatives", href: "/solutions/paint-preservatives" },
      { label: "Sugar-process chemicals", href: "/solutions/sugar-process-chemicals" },
      { label: "Fireside treatment", href: "/solutions/fireside-treatment" },
      { label: "Automotive chemicals", href: "/solutions/automotive-chemicals" },
    ],
  },
];

const vklinGroups: MenuGroup[] = [
  {
    title: "V-Klin range",
    links: [
      { label: "V-Klin overview", href: "/vklin" },
      { label: "Cleaning product range", href: "/vklin/products" },
    ],
  },
  {
    title: "Cleaning categories",
    links: [
      { label: "Floor & surface care", href: "/vklin/products#floor-surface" },
      { label: "Hand care & hygiene", href: "/vklin/products#hand-hygiene" },
      { label: "Dishwashing", href: "/vklin/products#dishwashing" },
      { label: "Glass & window care", href: "/vklin/products#glass-care" },
    ],
  },
  {
    title: "More care categories",
    links: [
      { label: "Bathroom & toilet care", href: "/vklin/products#toilet-care" },
      { label: "Odour & air care", href: "/vklin/products#odour-care" },
      { label: "Natural wellness", href: "/vklin/products#natural-wellness" },
    ],
  },
];

const qualityGroups: MenuGroup[] = [
  {
    title: "Quality & product information",
    links: [
      { label: "Quality overview", href: "/quality", detail: "How PolyTreat approaches quality and product information" },
      { label: "PQRS framework", href: "/quality#pqrs", detail: "Performance · Quality · Reliability · Service" },
      { label: "Certifications", href: "/certifications", detail: "Review each certificate's stated scope" },
    ],
  },
];

const companyGroups: MenuGroup[] = [
  {
    title: "About PolyTreat",
    links: [
      { label: "Company overview", href: "/about", detail: "Company · product ranges · locations" },
      { label: "Locations & facilities", href: "/about#infrastructure", detail: "Goregaon West · Goregaon East · Tarapur" },
    ],
  },
];

export const menuGroups: Record<MenuKey, MenuGroup[]> = {
  products: productGroups,
  vklin: vklinGroups,
  quality: qualityGroups,
  company: companyGroups,
};

export const menuLabels: Record<MenuKey, string> = {
  products: "Solutions",
  vklin: "V-Klin",
  quality: "Quality",
  company: "About Us",
};

export const menuPromos: Record<MenuKey, MenuPromo> = {
  products: {
    eyebrow: "Not sure where to start",
    text: "Tell us about the plant and the system you need to protect. We will point you to the right chemistry.",
    cta: "Request a quote",
    href: "/contact#contact-form",
  },
  vklin: {
    eyebrow: "V-Klin range",
    text: "Cleaning products for institutional, commercial and everyday cleaning, under one brand.",
    cta: "Browse the product range",
    href: "/vklin/products",
  },
  quality: {
    eyebrow: "How we work",
    text: "Performance, Quality, Reliability, Service. The framework behind our product information.",
    cta: "Talk to our team",
    href: "/contact#contact-form",
  },
  company: {
    eyebrow: "Talk to us",
    text: "Want to see the facilities or set up a supply discussion? Our team can walk you through it.",
    cta: "Get in touch",
    href: "/contact",
  },
};

/** Desktop panel order: 4 dropdowns interleaved with the two direct links. */
export const menuKeys: MenuKey[] = ["products", "vklin", "quality", "company"];

/** Group heading → range accent for the 8px dot and the heading colour. */
export const groupRange: Record<string, NavRange> = {
  "Industrial water": "water",
  "Construction & surface protection": "construction",
  "Specialty products": "specialty",
  "Other catalogue families": "brand",
  "V-Klin range": "vklin",
  "Cleaning categories": "vklin",
  "More care categories": "vklin",
  "Quality & product information": "brand",
  "About PolyTreat": "brand",
};

/** Whole-panel range, used for the promo card tint. */
export const menuRange: Record<MenuKey, NavRange> = {
  products: "brand",
  vklin: "vklin",
  quality: "brand",
  company: "brand",
};