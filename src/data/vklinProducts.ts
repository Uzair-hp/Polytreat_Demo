export type VKlinSpecification = { label: string; value: string };

export type VKlinProduct = {
  id: string;
  name: string;
  shortName: string;
  image: string;
  href: string;
  groupId: string;
  /** One line used on cards and in the product hero. */
  summary: string;
  /** Heading for the product overview section. */
  headline: string;
  /** What the product is and what it does, from the client's product literature. */
  description: string;
  features: string[];
  applications: string[];
  directions: string[];
  specifications: VKlinSpecification[];
  packSizes: string[];
  fragrances: string[];
  cautions: string[];
};

export type VKlinProductGroup = {
  id: string;
  title: string;
  intro: string;
  kicker: string;
  products: VKlinProduct[];
};

/**
 * Single source of truth for the V-Klin cleaning range.
 * The catalogue page, the homepage preview and every product page read from this
 * list, so the product count and the product names can never drift apart.
 *
 * Product copy is written from the client's own product literature: the
 * V-Klin-branded catalogue (`vklin-home-care-wellness-formulations.docx`), the
 * packaging artwork for each product, and the herbal repellent specification.
 *
 * Two rules apply to everything published here:
 * 1. No pesticidal, insecticidal or germ-kill claims. The ISO, WHO-GMP and
 *    Eco-Friendly certificates all scope this range as being made "without any
 *    medicinal, therapeutic, disinfectant, pesticidal, insecticidal or drug
 *    claims", so the range copy must not contradict the certificates we
 *    publish on /certifications.
 * 2. No safety superlatives and no composition details. Directions and
 *    technical data are attributed to the product literature, and visitors are
 *    pointed to the current label or our technical team.
 */
export const vklinProductGroups: VKlinProductGroup[] = [
  {
    id: "floor-surface",
    title: "Floor & surface care",
    kicker: "V-Klin floor & surface care",
    intro: "Products grouped around routine floor and surface cleaning.",
    products: [
      {
        id: "golden-floor-cleaner",
        name: "Golden Floor Cleaner",
        shortName: "Floor Cleaner",
        image: "vklin-golden-floor-cleaner.webp",
        href: "/vklin/products/golden-floor-cleaner",
        groupId: "floor-surface",
        summary: "A cleaning and deodorising floor cleaner with a lasting residual fragrance.",
        headline: "Cleaning and deodorising in one step.",
        description:
          "A combination of cleaning compound with a deodorising action and a lasting residual fragrance, based on mild detergents. It cleans and deodorises in a single application and leaves a fresh fragrance behind.",
        features: [
          "Cleaning and deodorising action in a single application",
          "Contains a high residual perfume",
          "Based on mild detergents",
          "Safe on all surfaces",
          "Fully biodegradable",
        ],
        applications: [
          "Apartment buildings and homes",
          "Schools and office buildings",
          "Industrial plants",
          "Floors, walls and sinks",
          "Bathrooms, toilets and urinals",
          "Garbage areas",
        ],
        directions: [
          "Clean the surface first with neat water",
          "Apply the diluted solution to the surface",
          "Mop floors, or use a cloth on smaller areas",
          "Rinse the mop or cloth when it becomes soiled",
          "Allow surfaces to air dry",
        ],
        specifications: [
          { label: "Appearance", value: "Amber liquid" },
          { label: "Fragrance", value: "Pine or fruity floral" },
          { label: "pH", value: "10 ± 2" },
          { label: "Specific gravity at 25 °C", value: "0.96 ± 0.02" },
        ],
        packSizes: ["500 ml", "1 L", "5 L", "PET / HDPE container or bottle"],
        fragrances: [],
        cautions: [
          "Store in a cool, dry place",
          "Avoid eye and skin contact",
          "Wash hands thoroughly with soapy water after handling",
        ],
      },
      {
        id: "protector-floor-cleaner-lemon",
        name: "Protector Floor Cleaner, Lemon",
        shortName: "Protector Lemon",
        image: "vklin-protector-floor-cleaner-lemon.webp",
        href: "/vklin/products/protector-floor-cleaner-lemon",
        groupId: "floor-surface",
        summary: "A multipurpose cleaner and deodoriser with a fresh fragrance.",
        headline: "Multipurpose cleaning with a deodorising benefit.",
        description:
          "A combination of a heavy-duty detergent with a deodoriser and fragrance. It is a multipurpose cleaner with the added benefit of odour control and deodorisation, and leaves a pleasant fragrance across the surrounding area.",
        features: [
          "Heavy-duty detergent combined with a deodoriser",
          "Odour control and deodorisation in one product",
          "Leaves a pleasant fragrance across the surrounding area",
          "Phosphate free",
          "Fully biodegradable",
        ],
        applications: [
          "All floor types — vinyl, epoxy, ceramic and terrazzo",
          "Marble, granite and natural stone",
          "Metal and other wooden surfaces",
          "Drains, toilets and washrooms",
        ],
        directions: [
          "Clean the surface with neat water",
          "Dilute 15 to 25 ml per litre of clean water for normal cleaning",
          "Apply to the surface — use a cloth for small areas and a mop for floors",
          "Rinse the cloth or mop when it becomes soiled",
          "Allow surfaces to air dry",
        ],
        specifications: [
          { label: "Dilution for normal cleaning", value: "15 to 25 ml per litre of clean water" },
        ],
        packSizes: ["500 ml", "1 L", "5 L", "HDPE container"],
        fragrances: ["Lavender", "Orange", "Jasmine", "Floral", "Citrus"],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
      {
        id: "perfumed-floor-cleaner-floral",
        name: "Perfumed Floor Cleaner, Floral",
        shortName: "Perfumed Floor Cleaner",
        image: "vklin-perfumed-floor-cleaner-floral.webp",
        href: "/vklin/products/perfumed-floor-cleaner-floral",
        groupId: "floor-surface",
        summary: "A perfumed multipurpose floor cleaner with deodorising action.",
        headline: "A perfumed floor cleaner that deodorises as it cleans.",
        description:
          "A combination of a heavy-duty detergent with a deodoriser and fragrance. A multipurpose cleaner with the added benefit of odour control and deodorisation, intended for floors and hard surfaces in homes and shared facilities.",
        features: [
          "Heavy-duty detergent combined with a deodoriser",
          "Odour control and deodorisation in one product",
          "Leaves a pleasant fragrance across the surrounding area",
          "Phosphate free",
          "Fully biodegradable",
        ],
        applications: [
          "All types of floor",
          "Marble, granite and natural stone",
          "Metal and other wooden surfaces",
          "Drains, toilets and washrooms",
        ],
        directions: [
          "Clean the surface with neat water",
          "Dilute 15 to 25 ml per litre of clean water for normal cleaning",
          "Apply to the surface — use a cloth for small areas and a mop for floors",
          "Rinse the cloth or mop when it becomes soiled",
          "Allow surfaces to air dry",
        ],
        specifications: [
          { label: "Dilution for normal cleaning", value: "15 to 25 ml per litre of clean water" },
        ],
        packSizes: ["250 ml", "500 ml", "1 L", "5 L", "PET / HDPE container or bottle"],
        fragrances: ["Lavender", "Jasmine", "Floral", "Citrus"],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
      {
        id: "multipurpose-surface-cleaner",
        name: "Multipurpose Surface Cleaner",
        shortName: "Surface Cleaner",
        image: "vklin-multipurpose-surface-cleaner.webp",
        href: "/vklin/products/multipurpose-surface-cleaner",
        groupId: "floor-surface",
        summary: "A super-concentrated cleaner for hard and soft surfaces alike.",
        headline: "One concentrate for many surfaces.",
        description:
          "A multipurpose cleaner for manual, immersion and spray application. A modern combination of synthetic emulsifier and dispersant polymer for cleaning any surface not harmed by water. It removes heavy grease and soil safely and thoroughly, works equally well in hard or soft, hot or cold water, and leaves surfaces sparkling clean with no residual film. It is super concentrated and effective at half the normal cleaner concentration.",
        features: [
          "Super concentrated — effective at half the normal cleaner concentration",
          "Water-based, totally biodegradable formula",
          "Non flammable",
          "Low foaming",
          "Non corrosive and non-irritant to skin",
          "Leaves surfaces sparkling clean with no residual film",
        ],
        applications: [
          "Floors and ceilings",
          "Woodwork and cabinets",
          "Leatherette and upholstery",
          "Light fixtures and venetian blinds",
          "Desks and office equipment",
          "Computers, TVs and window glass",
        ],
        directions: [
          "Dilute according to the duty — 1 part to 5 parts water for light duty, 1 to 3 for medium duty, 1 to 2 for heavy duty",
          "Apply with a suitable sprayer, mop, sponge, cloth or auto scrubber",
          "For heavy soiling, agitate the area to help remove excess soils",
          "Wipe dry with a clean cloth, or rinse thoroughly with clean water after use",
        ],
        specifications: [
          { label: "Appearance", value: "Light blue mobile liquid with a pleasant odour" },
          { label: "Solubility", value: "Complete with water" },
          { label: "Flash point", value: "None" },
          { label: "pH", value: "10.5 ± 0.02" },
          { label: "Specific gravity", value: "1.05 ± 0.02" },
        ],
        packSizes: ["100 ml trigger sprayer", "5 L", "25 L", "50 L", "HDPE"],
        fragrances: [],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
    ],
  },
  {
    id: "hand-hygiene",
    title: "Hand care & hygiene",
    kicker: "V-Klin hand care & hygiene",
    intro: "A liquid soap category for handwashing routines.",
    products: [
      {
        id: "perfumed-liquid-soap-aqua",
        name: "Perfumed Liquid Soap, Aqua",
        shortName: "Perfumed Liquid Soap",
        image: "vklin-perfumed-liquid-soap-aqua.webp",
        href: "/vklin/products/perfumed-liquid-soap-aqua",
        groupId: "hand-hygiene",
        summary: "An aloe-vera handwash gel with a mild lather.",
        headline: "A gentle handwash for shared facilities.",
        description:
          "Formulated with natural oil softeners and mild, lathering cleansing agents, and lotionised for user comfort. Aloe-vera extracts are added for a smooth after-feel. It is suitable for sensitive skin and is non-irritating.",
        features: [
          "Contains moisturising agents that help prevent skin and hair from becoming dry and brittle",
          "Phosphate free formulation",
          "Fully biodegradable",
          "Aloe-vera extracts",
          "Gentle lather with a lotionised feel",
        ],
        applications: [
          "Toilets, change rooms and showers",
          "Hair-dressing salons and retail outlets",
          "Hotels and hospitals",
          "Shopping malls and schools",
          "Offices and public utility places",
          "Households and apartments",
        ],
        directions: [
          "Clean the hands with clean water",
          "Apply a small quantity of handwash gel",
          "Gently rub the hands and rinse off with enough water",
        ],
        specifications: [],
        packSizes: ["250 ml", "500 ml", "5 L", "Dispenser in PET / HDPE container or bottle"],
        fragrances: ["Rose", "Citrus", "Lemon", "Floral"],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
    ],
  },
  {
    id: "dishwashing",
    title: "Dishwashing",
    kicker: "V-Klin dishwashing",
    intro: "A product category for dish and kitchenware cleaning.",
    products: [
      {
        id: "dishwash-liquid-gel-lemon",
        name: "Dishwash Liquid Gel, Lemon",
        shortName: "Dishwash Gel",
        image: "vklin-dishwash-liquid-gel-lemon.webp",
        href: "/vklin/products/dishwash-liquid-gel-lemon",
        groupId: "dishwashing",
        summary: "A concentrated lemon dishwash gel for grease and stubborn stains.",
        headline: "Grease lift and a streak-free finish.",
        description:
          "A highly concentrated liquid gel detergent that cleans stubborn stains, oil and dust from all types of glassware, stainless-steel utensils, cutlery and crockery, and keeps the shine and freshness of utensils. It is specially blended from anionic and nonionic surfactants with a dispersant polymer, giving a clear, transparent gel with excellent foaming and grease lift.",
        features: [
          "Higher dispersing ability of soils",
          "Improved rinsing efficiency",
          "Less spotting and filming",
          "High-performing, phosphate free formulation",
          "Highly concentrated, so it goes further",
          "Completely neutral and safe for skin",
        ],
        applications: [
          "All types of utensils",
          "China clay materials",
          "Glassware, stainless steel, PET jars and bottles",
          "Copper-bottom vessels",
        ],
        directions: [
          "Mix 5 to 10 ml of dishwash gel with 100 ml of water",
          "Use the solution directly on dirts and oily layers",
          "Use a scrubber while cleaning",
        ],
        specifications: [],
        packSizes: ["250 ml", "500 ml", "750 ml", "PET / HDPE container or bottle"],
        fragrances: ["Lemon", "Citrus"],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
    ],
  },
  {
    id: "glass-care",
    title: "Glass & window care",
    kicker: "V-Klin glass & window care",
    intro: "A product category for glass, mirrors and appliances.",
    products: [
      {
        id: "streak-free-glass-cleaner",
        name: "Streak-Free Glass Cleaner",
        shortName: "Glass Cleaner",
        image: "vklin-streak-free-glass-cleaner.webp",
        href: "/vklin/products/glass-cleaner",
        groupId: "glass-care",
        summary: "An ammonia-free glass cleaner that leaves no streaks.",
        headline: "Streak-free shine on glass and hard surfaces.",
        description:
          "A highly effective non-ammonia-based glass cleaner that leaves glass surfaces clean and bright. A highly concentrated blend of fatty amine, emulsifier and dispersant that lifts grime, dust and oily matter from glass and surfaces such as counter tops, tables, refrigerators and car windows without streaking. The polymer in the formulation increases surface contact time, allowing effective cleaning at very low surfactant levels.",
        features: [
          "Free from ammonia",
          "Free from phosphate",
          "Leaves a long-lasting shine on glass",
          "Totally biodegradable",
          "Good sprayability",
        ],
        applications: [
          "Window glass, TV screens, fridges and mirrors",
          "Car windows",
          "Household appliances",
          "Electronic appliances",
          "Counter tops and tables",
        ],
        directions: [
          "Spray directly onto the dusty surface",
          "Wipe with a dry, clean cloth for a sparkling finish",
        ],
        specifications: [],
        packSizes: ["250 ml PET sprayable bottle", "500 ml PET sprayable bottle", "5 L HDPE container"],
        fragrances: [],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
    ],
  },
  {
    id: "toilet-care",
    title: "Bathroom & toilet care",
    kicker: "V-Klin bathroom & toilet care",
    intro: "A product category for bathroom and toilet cleaning.",
    products: [
      {
        id: "power-plus-toilet-cleaner",
        name: "Power Plus Toilet Cleaner",
        shortName: "Toilet Cleaner",
        image: "vklin-power-plus-toilet-cleaner.webp",
        href: "/vklin/products/power-plus-toilet-cleaner",
        groupId: "toilet-care",
        summary: "A non-fuming acid toilet cleaner.",
        headline: "Stain-free toilets with a light fragrance.",
        description:
          "A combination of surfactant, corrosion inhibitor and organic food-grade acid that cleans toilets in a stain-free way, leaving the toilet pleasantly fragrant and odour free.",
        features: [
          "Removes stains and keeps toilets sparklingly clean",
          "Mild fragrance refreshes the air",
          "Non-fuming — no toxic gas or acid fumes",
          "Non corrosive to ceramic, metal and other surfaces",
          "Totally biodegradable",
        ],
        applications: ["All types of toilets"],
        directions: [
          "Flush the toilet",
          "Apply a few drops in and around the bowl",
          "Brush gently and leave for 10 to 15 minutes",
          "Flush with water",
        ],
        specifications: [],
        packSizes: ["500 ml", "750 ml", "PET / HDPE container or bottle"],
        fragrances: [],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
    ],
  },
  {
    id: "odour-care",
    title: "Odour & air care",
    kicker: "V-Klin odour & air care",
    intro: "A product category for odour control in ducts and hard-to-reach areas.",
    products: [
      {
        id: "air-freshener-ac-duct-odour-eliminator",
        name: "Air Freshener & AC-Duct Odour Eliminator",
        shortName: "Air Freshener",
        image: "vklin-air-freshener-ac-duct-odour-eliminator.webp",
        href: "/vklin/products/air-freshener-ac-duct-odour-eliminator",
        groupId: "odour-care",
        summary: "A plant-extract odour eliminator for air-conditioning ducts.",
        headline: "Odour control for ducts, coils and basements.",
        description:
          "A herbal plant-extract formulation developed to neutralise and eliminate odours from air ducts, basements and other areas prone to odour. It is formulated to neutralise smoke, pet, human, cooking and musty odours on all types of surfaces. It contains no perfumes or masking agents, and no environmentally damaging propellants or flammable ingredients. Regular use on coils, ducts and other HVAC areas keeps the air moving through the system clean.",
        features: [
          "Formulated with natural plant extracts",
          "Neutralises odours rather than masking them",
          "Contains no perfumes or masking agents",
          "Will not bleach or discolour materials and fabrics",
          "Totally biodegradable",
          "Designed for coils, ducts and surrounding HVAC areas",
        ],
        applications: [
          "Air-conditioning ducts and coils",
          "Basements and other areas prone to odour",
          "Smoke, pet, human, cooking and musty odours",
        ],
        directions: [
          "Dilute 1 part of product with up to 10 parts of fresh tap water",
          "Apply with a suitable low-pressure spraying pump, uniformly over the surfaces to be treated",
          "Depending on the duct surface and its absorbency, coverage ranges from 300 to 500 square feet per gallon of diluted solution",
        ],
        specifications: [
          { label: "Dilution", value: "1 part product to up to 10 parts fresh tap water" },
          { label: "Coverage", value: "300 to 500 sq ft per gallon of diluted solution" },
        ],
        packSizes: ["200 ml PET spray atomiser", "5 L HDPE polycarboy"],
        fragrances: [],
        cautions: [
          "Store in the original container in a cool and dry place, away from heat, flame and direct sunlight",
          "Keep away from children",
          "Do not ingest",
          "If the product gets into the eyes, rinse thoroughly with water",
        ],
      },
    ],
  },
  {
    id: "natural-wellness",
    title: "Natural wellness",
    kicker: "V-Klin natural wellness",
    intro: "A plant-based range for everyday household and personal spaces.",
    products: [
      {
        id: "herbal-mosquito-repellent",
        name: "Herbal Mosquito Repellent",
        shortName: "Mosquito Repellent",
        image: "vklin-herbal-mosquito-repellent.webp",
        href: "/vklin/products/herbal-mosquito-repellent",
        groupId: "natural-wellness",
        summary: "A water-based herbal room spray.",
        headline: "A plant-based spray for rooms and outdoor spaces.",
        description:
          "A water-based herbal room spray made from natural plant extracts including lemon grass, citronella, neem and tulasi oils. It is sprayed into the air and around crevices rather than onto the body.",
        features: [
          "All-natural herbal ingredients",
          "Water-based formulation using plant oils",
          "Long-lasting and non-greasy",
          "Pleasant to the environment",
        ],
        applications: [
          "Sprayed into the air and at crevices",
          "Under beds and behind curtains",
          "Around garbage bins, windows and doors",
        ],
        directions: [
          "Spray into the air and at crevices, under beds, behind curtains and around garbage bins and windows",
          "Keep doors and windows closed for 15 to 25 minutes after spraying",
          "Spray the room daily",
        ],
        specifications: [
          { label: "Coverage", value: "A 100 ml bottle is stated to last about 90 days in a room of 125 to 150 sq ft" },
        ],
        packSizes: ["100 ml spray atomiser", "200 ml spray atomiser", "5 L HDPE polycarboy"],
        fragrances: [],
        cautions: [
          "Should not be sprayed on body parts",
          "Keep away from children",
          "Avoid contact with cuts, wounds and eyes",
          "Avoid inhaling the product",
          "In case of severe reaction, contact a physician",
        ],
      },
    ],
  },
];

export const vklinProductCount = vklinProductGroups.reduce(
  (total, group) => total + group.products.length,
  0,
);

export const vklinProductGroupCount = vklinProductGroups.length;

export const vklinProducts = vklinProductGroups.flatMap((group) => group.products);

/** Look up products by their short display name, preserving the requested order. */
export function findVKlinProducts(shortNames: string[]): VKlinProduct[] {
  return shortNames
    .map((shortName) => vklinProducts.find((product) => product.shortName === shortName))
    .filter((product): product is VKlinProduct => Boolean(product));
}

/** Look up one product by its slug. */
export function findVKlinProduct(id: string): VKlinProduct | undefined {
  return vklinProducts.find((product) => product.id === id);
}
