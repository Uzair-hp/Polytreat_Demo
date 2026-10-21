export type VKlinProduct = { name: string; shortName: string; image: string; href: string };

export type VKlinProductGroup = {
  id: string;
  title: string;
  intro: string;
  products: VKlinProduct[];
};

/**
 * Single source of truth for the V-Klin cleaning range.
 * The catalogue page and the homepage preview both read from this list, so the
 * product count and the product names can never drift apart.
 */
export const vklinProductGroups: VKlinProductGroup[] = [
  {
    id: "floor-surface",
    title: "Floor & surface care",
    intro: "Products grouped around routine floor and surface cleaning.",
    products: [
      {
        name: "Golden Floor Cleaner",
        shortName: "Floor Cleaner",
        image: "vklin-golden-floor-cleaner.webp",
        href: "/vklin/products/golden-floor-cleaner",
      },
      {
        name: "Protector Floor Cleaner, Lemon",
        shortName: "Protector Floor Cleaner",
        image: "vklin-protector-floor-cleaner-lemon.webp",
        href: "/vklin/products/protector-floor-cleaner-lemon",
      },
      {
        name: "Perfumed Floor Cleaner, Floral",
        shortName: "Perfumed Floor Cleaner",
        image: "vklin-perfumed-floor-cleaner-floral.webp",
        href: "/vklin/products/perfumed-floor-cleaner-floral",
      },
      {
        name: "Multipurpose Surface Cleaner",
        shortName: "Surface Cleaner",
        image: "vklin-multipurpose-surface-cleaner.webp",
        href: "/vklin/products/multipurpose-surface-cleaner",
      },
    ],
  },
  {
    id: "hand-hygiene",
    title: "Handwash & liquid soap",
    intro: "A liquid soap category for handwashing routines.",
    products: [
      {
        name: "Perfumed Liquid Soap, Aqua",
        shortName: "Liquid Soap",
        image: "vklin-perfumed-liquid-soap-aqua.webp",
        href: "/vklin/products/perfumed-liquid-soap-aqua",
      },
    ],
  },
  {
    id: "dishwashing",
    title: "Dishwashing",
    intro: "A product category for dish and kitchenware cleaning.",
    products: [
      {
        name: "Dishwash Liquid Gel, Lemon",
        shortName: "Dishwash Gel",
        image: "vklin-dishwash-liquid-gel-lemon.webp",
        href: "/vklin/products/dishwash-liquid-gel-lemon",
      },
    ],
  },
  {
    id: "glass-washroom",
    title: "Glass & washroom care",
    intro: "Separate categories for glass and washroom cleaning tasks.",
    products: [
      {
        name: "Glass Cleaner",
        shortName: "Glass Cleaner",
        image: "vklin-streak-free-glass-cleaner.webp",
        href: "/vklin/products/glass-cleaner",
      },
      {
        name: "Power Plus Toilet Cleaner",
        shortName: "Toilet Cleaner",
        image: "vklin-power-plus-toilet-cleaner.webp",
        href: "/vklin/products/power-plus-toilet-cleaner",
      },
    ],
  },
  {
    id: "specialty-care",
    title: "Other care categories",
    intro: "Additional home and facility-care categories.",
    products: [
      {
        name: "Air Freshener & AC-Duct Odour Eliminator",
        shortName: "Air Freshener",
        image: "vklin-air-freshener-ac-duct-odour-eliminator.webp",
        href: "/vklin/products/air-freshener-ac-duct-odour-eliminator",
      },
      {
        name: "Herbal Mosquito Repellent",
        shortName: "Mosquito Repellent",
        image: "vklin-herbal-mosquito-repellent.webp",
        href: "/vklin/products/herbal-mosquito-repellent",
      },
    ],
  },
];

export const vklinProductCount = vklinProductGroups.reduce(
  (total, group) => total + group.products.length,
  0,
);

export const vklinProductGroupCount = vklinProductGroups.length;

/** Look up products by their short display name, preserving the requested order. */
export function findVKlinProducts(shortNames: string[]): VKlinProduct[] {
  const all = vklinProductGroups.flatMap((group) => group.products);
  return shortNames
    .map((shortName) => all.find((product) => product.shortName === shortName))
    .filter((product): product is VKlinProduct => Boolean(product));
}
