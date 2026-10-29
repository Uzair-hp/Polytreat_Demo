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
        name: "VKLIN Golden Floor Cleaner & Deodoriser",
        shortName: "Golden Floor Cleaner",
        image: "vklin-golden-floor-cleaner.webp",
        href: "/vklin/products/golden-floor-cleaner",
        groupId: "floor-surface",
        summary: "Dual-action floor cleaner and deodoriser with long-lasting residual fragrance.",
        headline: "Cleaning and deodorising in one step.",
        description:
          "Dual-action floor cleaner and deodoriser formulated with effective cleaning compounds and sanitising agents for superior cleaning and long-lasting freshness.",
        features: [
          "Dual action cleaning and deodorising",
          "Long lasting residual fragrance",
          "Based on mild detergents",
          "Fully biodegradable",
          "Safe on multiple surfaces",
          "Leaves fresh fragrance",
        ],
        applications: [
          "Homes",
          "Apartments",
          "Schools",
          "Offices",
          "Industrial plants",
          "Bathrooms",
          "Toilets",
          "Urinals",
          "Commercial buildings",
        ],
        directions: [
          "Dilute 15-25 ml in 1 litre water",
          "Apply using mop or cloth",
          "Allow surface to air dry",
        ],
        specifications: [
          { label: "Appearance", value: "Amber Liquid" },
          { label: "Fragrance", value: "Pine / Fruity Flower" },
          { label: "pH", value: "10 ± 2" },
          { label: "Specific gravity at 25 °C", value: "0.96 ± 0.02" },
        ],
        packSizes: ["500 ml", "1 L", "5 L"],
        fragrances: [],
        cautions: [
          "Store in a cool dry place",
          "Avoid eye and skin contact",
          "Wash hands after handling",
        ],
      },
      {
        id: "protector-floor-cleaner-lemon",
        name: "VKLIN Protector Floor Cleaner Lemon",
        shortName: "Protector Floor Cleaner Lemon",
        image: "vklin-protector-floor-cleaner-lemon.webp",
        href: "/vklin/products/protector-floor-cleaner-lemon",
        groupId: "floor-surface",
        summary: "A multipurpose cleaner and deodoriser with a fresh lemon fragrance.",
        headline: "Complete protection formula with fresh lemon fragrance.",
        description:
          "VKLIN Protector Floor Cleaner Lemon is a heavy-duty cleaning and deodorizing solution designed to keep floors hygienic, fresh, and sparkling clean. The phosphate-free biodegradable formula removes dirt, stains, unpleasant odors, and helps maintain a clean environment while leaving a refreshing lemon fragrance.",
        features: [
          "Complete protection formula",
          "Great cleaning performance",
          "Fresh lemon fragrance",
          "Removes unpleasant odors",
          "Helps maintain floor hygiene",
          "Phosphate-free formulation",
          "Fully biodegradable",
          "Strong cleaning action",
          "Sparkling shine effect",
          "Effective against dirt and stains",
        ],
        applications: [
          "Vinyl Floors",
          "Epoxy Floors",
          "Ceramic Floors",
          "Terrazzo Floors",
          "Formica Surfaces",
          "Marble Floors",
          "Granite Floors",
          "Natural Stone",
          "Metal Surfaces",
          "Wooden Surfaces",
        ],
        directions: [
          "Clean surface with water",
          "Dilute 15–25 ml cleaner in 1 litre of clean water",
          "Apply using a cloth or floor mop",
          "Rinse mop or cloth when soiled",
          "Allow surface to air dry",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Floor Cleaner" },
          { label: "Variant", value: "Lemon" },
          { label: "Physical Form", value: "Liquid" },
          { label: "Fragrance", value: "Lemon" },
          { label: "Biodegradable", value: "Yes" },
          { label: "Phosphate Free", value: "Yes" },
          { label: "Odor Control", value: "Yes" },
          { label: "Surface Compatibility", value: "Multi-Surface" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
        ],
        packSizes: ["500 ml Bottle", "1 Litre Bottle", "5 Litre HDPE Container"],
        fragrances: ["Lemon", "Lavender", "Orange", "Jasmine", "Floral", "Citrus"],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "Avoid direct eye contact",
          "In case of accidental eye contact, rinse thoroughly with water",
        ],
      },
      {
        id: "perfumed-floor-cleaner-floral",
        name: "VKLIN Perfumed Floor Cleaner - Floral",
        shortName: "Perfumed Floor Cleaner Floral",
        image: "vklin-perfumed-floor-cleaner-floral.webp",
        href: "/vklin/products/perfumed-floor-cleaner-floral",
        groupId: "floor-surface",
        summary: "A perfumed multipurpose floor cleaner with deodorising action.",
        headline: "A perfumed floor cleaner that deodorises as it cleans.",
        description:
          "VKLIN Perfumed Floor Cleaner Floral is a heavy-duty floor cleaning solution combined with an effective deodorizer and pleasant floral fragrance. It removes dirt, stains, and unpleasant odors while maintaining excellent floor hygiene. The phosphate-free and biodegradable formulation makes it suitable for routine cleaning in homes, offices, hospitals, and commercial premises.",
        features: [
          "Protection from harmful germs",
          "Removes tough stains",
          "Pleasant floral fragrance",
          "Keeps surroundings fresh",
          "Odor control and deodorization",
          "Phosphate-free formula",
          "Fully biodegradable",
          "Suitable for multiple floor surfaces",
        ],
        applications: [
          "Vinyl Floors",
          "Epoxy Floors",
          "Ceramic Floors",
          "Terrazzo Floors",
          "Formica Surfaces",
          "Marble Floors",
          "Granite Floors",
          "Natural Stone",
          "Metal Surfaces",
          "Wooden Surfaces",
        ],
        directions: [
          "Clean the surface with water",
          "Dilute 15–25 ml cleaner in 1 litre water",
          "Apply using mop or cloth",
          "Rinse mop/cloth when dirty",
          "Allow surface to air dry",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Perfumed Floor Cleaner" },
          { label: "Variant", value: "Floral" },
          { label: "Form", value: "Liquid" },
          { label: "Fragrance", value: "Floral" },
          { label: "Germ Protection", value: "Yes" },
          { label: "Biodegradable", value: "Yes" },
          { label: "Phosphate Free", value: "Yes" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
        ],
        packSizes: ["500 ml Bottle", "1 Litre Bottle", "5 Litre HDPE Container"],
        fragrances: ["Lavender", "Orange", "Jasmine", "Floral", "Citrus"],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "Avoid eye contact",
          "Rinse eyes thoroughly if accidental contact occurs",
        ],
      },
      {
        id: "multipurpose-surface-cleaner",
        name: "VKLIN Multipurpose Cleaner",
        shortName: "Multipurpose Cleaner",
        image: "vklin-multipurpose-surface-cleaner.webp",
        href: "/vklin/products/multipurpose-surface-cleaner",
        groupId: "floor-surface",
        summary: "A super-concentrated cleaner for hard and soft surfaces alike.",
        headline: "One concentrate for many surfaces.",
        description:
          "VKLIN Multipurpose Cleaner is a highly concentrated cleaning solution designed for manual, immersion, and spray applications. Its advanced blend of synthetic emulsifiers and dispersant polymers effectively removes grease, dirt, and grime from various surfaces without leaving residue. Suitable for use with both hard and soft water, this biodegradable formula delivers powerful cleaning while remaining gentle on surfaces.",
        features: [
          "Water-based biodegradable formulation",
          "Non-flammable",
          "Low-foaming formula",
          "Non-corrosive",
          "Non-skin irritant",
          "Removes grease, grime, and soil effectively",
          "Leaves surfaces sparkling clean",
          "No residual film after cleaning",
          "Fresh fragrance",
          "3-in-1 protection and performance",
        ],
        applications: [
          "Floors",
          "Ceilings",
          "Cabinets",
          "Woodwork",
          "Upholstery",
          "Venetian Blinds",
          "Office Equipment",
          "Computers",
          "TV Cabinets",
          "Window Glass",
          "Commercial Surfaces",
          "Household Surfaces",
        ],
        directions: [
          "Light Duty Cleaning: Mix 1 part cleaner with 5 parts water",
          "Medium Duty Cleaning: Mix 1 part cleaner with 3 parts water",
          "Heavy Duty Cleaning: Mix 1 part cleaner with 2 parts water",
          "Apply using a sprayer, mop, sponge, cloth, or auto scrubber",
          "Wipe dry or rinse with clean water after use",
        ],
        specifications: [
          { label: "Appearance", value: "Light Blue Liquid" },
          { label: "Odor", value: "Pleasant" },
          { label: "Solubility", value: "Completely Soluble in Water" },
          { label: "Flash Point", value: "None" },
          { label: "pH", value: "10.5 ± 0.02" },
          { label: "Specific Gravity", value: "1.05 ± 0.02" },
          { label: "Biodegradable", value: "Yes" },
        ],
        packSizes: ["100 ml Trigger Spray", "5 Litre Container", "25 Litre HDPE Container", "50 Litre HDPE Container"],
        fragrances: [],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "If product enters eyes, rinse thoroughly with water",
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
        name: "VKLIN Aqua Perfumed Liquid Soap",
        shortName: "Aqua Perfumed Liquid Soap",
        image: "vklin-perfumed-liquid-soap-aqua.webp",
        href: "/vklin/products/perfumed-liquid-soap-aqua",
        groupId: "hand-hygiene",
        summary: "A premium Aloe Vera enriched liquid soap that provides effective cleansing, germ protection and moisturizing care.",
        headline: "For soft & smooth, germs protected hands.",
        description:
          "VKLIN Aqua Perfumed Liquid Soap is a premium hand cleansing solution formulated with natural oils and non-hazardous ingredients. Its mild yet effective cleaning action produces rich lather while maintaining skin softness. Enriched with Aloe Vera extracts, it delivers a smooth cleansing experience and is suitable even for sensitive skin. The biodegradable, phosphate-free formula helps maintain hygiene while being gentle on hands.",
        features: [
          "Removes up to 99% of germs",
          "Enriched with Aloe Vera extracts",
          "Contains moisturising agents",
          "Prevents skin dryness and brittleness",
          "Rich and gentle lathering action",
          "Phosphate-free formula",
          "Fully biodegradable",
          "Suitable for sensitive skin",
          "Pleasant and refreshing fragrance",
          "Non-irritating formulation",
        ],
        applications: [
          "Homes",
          "Apartments",
          "Offices",
          "Educational institutions",
          "Hotels",
          "Hospitals",
          "Shopping malls",
          "Restaurants",
          "Salons",
          "Public washrooms",
          "Changing rooms",
          "Shower areas",
          "Commercial establishments",
        ],
        directions: [
          "Wet hands with clean water",
          "Apply a small quantity of VKLIN Aqua Liquid Soap",
          "Rub hands thoroughly to create lather",
          "Rinse completely with clean water",
          "Dry hands properly",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Perfumed Liquid Soap" },
          { label: "Variant", value: "Aqua" },
          { label: "Physical Form", value: "Liquid" },
          { label: "Color", value: "Aqua Blue" },
          { label: "Fragrance", value: "Aqua Fresh" },
          { label: "Skin Compatibility", value: "Suitable for Sensitive Skin" },
          { label: "Biodegradable", value: "Yes" },
          { label: "Phosphate Free", value: "Yes" },
          { label: "Moisturising Formula", value: "Yes" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
          { label: "Country of Origin", value: "India" },
        ],
        packSizes: ["250 ml Bottle", "500 ml Bottle", "Dispenser Pack", "5 Litre HDPE Container"],
        fragrances: ["Rose", "Citrus", "Lemon", "Floral Natural"],
        cautions: [
          "Keep out of reach of children",
          "Do not ingest",
          "Avoid direct contact with eyes",
          "In case of eye contact, rinse immediately with plenty of water",
          "Store in a cool and dry place away from direct sunlight",
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
        name: "VKLIN Dishwash Liquid Gel - Lemon",
        shortName: "Dishwash Liquid Gel Lemon",
        image: "vklin-dishwash-liquid-gel-lemon.webp",
        href: "/vklin/products/dishwash-liquid-gel-lemon",
        groupId: "dishwashing",
        summary: "A concentrated lemon dishwash gel for grease and stubborn stains.",
        headline: "Grease lift and a streak-free finish.",
        description:
          "VKLIN Dishwash Liquid Gel is a concentrated dish cleaning formula developed to remove stubborn oil, grease, and food stains from utensils and cookware. The premium blend of anionic and non-ionic surfactants delivers excellent cleaning power while remaining gentle on hands. The formula provides efficient rinsing, superior grease lifting, and a fresh lemon fragrance.",
        features: [
          "Safe on hands",
          "Removes tough grease and stains",
          "Efficient rinsing action",
          "Excellent grease-cutting formula",
          "High soil-dispersing capability",
          "Less spotting and filming",
          "Phosphate-free formulation",
          "Skin-safe and neutral pH",
          "Fresh lemon fragrance",
        ],
        applications: [
          "Stainless Steel Utensils",
          "Glassware",
          "Crockery",
          "Cutlery",
          "Pet Bottles",
          "Storage Jars",
          "Copper Bottom Utensils",
          "Kitchenware",
          "Ceramic Dishes",
        ],
        directions: [
          "Mix 5–10 ml of dishwash gel with 100 ml water",
          "Apply directly on oily and dirty utensils",
          "Scrub using a sponge or scrubber",
          "Rinse thoroughly with clean water",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Dishwash Liquid Gel" },
          { label: "Variant", value: "Lemon" },
          { label: "Form", value: "Gel" },
          { label: "Fragrance", value: "Lemon" },
          { label: "Skin Safe", value: "Yes" },
          { label: "Phosphate Free", value: "Yes" },
          { label: "Grease Cutting", value: "Yes" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
        ],
        packSizes: ["250 ml Bottle", "500 ml Bottle", "5 Litre PET/HDPE Container"],
        fragrances: ["Lemon", "Citrus", "Green Apple", "Natural Fragrance"],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "Avoid contact with eyes",
          "Rinse thoroughly with water if product enters eyes",
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
        name: "VKLIN Streak-Free Glass Cleaner",
        shortName: "Streak-Free Glass Cleaner",
        image: "vklin-streak-free-glass-cleaner.webp",
        href: "/vklin/products/glass-cleaner",
        groupId: "glass-care",
        summary: "An ammonia-free glass cleaner that leaves no streaks.",
        headline: "Streak-free shine on glass and hard surfaces.",
        description:
          "VKLIN Streak-Free Glass Cleaner is a highly effective non-ammoniated glass cleaning solution designed to remove dust, grime, oily deposits, and stains from glass and shiny surfaces without leaving streaks. Its advanced polymer-based formulation increases surface contact time, ensuring superior cleaning performance, sparkling shine, and easy spray application.",
        features: [
          "Ammonia-free formula",
          "Phosphate-free formulation",
          "Eco-friendly and biodegradable",
          "Removes dust, grime, and oily residues",
          "Streak-free cleaning performance",
          "Long-lasting shine",
          "Fast drying formula",
          "Pleasant fresh fragrance",
          "Suitable for residential and commercial use",
        ],
        applications: [
          "Window Glass",
          "Mirrors",
          "Glass Doors",
          "Table Tops",
          "Countertops",
          "Refrigerators",
          "Television Screens",
          "Car Windows",
          "Household Glass Surfaces",
          "Electronic Appliances",
        ],
        directions: [
          "Spray directly on the dusty or dirty surface",
          "Allow the solution to spread evenly",
          "Wipe using a dry, clean microfiber cloth",
          "Buff gently for a sparkling streak-free finish",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Glass Cleaner" },
          { label: "Variant", value: "Streak-Free" },
          { label: "Form", value: "Liquid" },
          { label: "Ammonia Free", value: "Yes" },
          { label: "Phosphate Free", value: "Yes" },
          { label: "Biodegradable", value: "Yes" },
          { label: "Application Method", value: "Spray" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
          { label: "Country of Origin", value: "India" },
        ],
        packSizes: ["250 ml Spray Bottle", "500 ml Spray Bottle", "5 Litre Refill Pack"],
        fragrances: [],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "Avoid eye contact",
          "If product enters eyes, rinse thoroughly with water",
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
        name: "VKLIN Power Plus Toilet Cleaner",
        shortName: "Power Plus Toilet Cleaner",
        image: "vklin-power-plus-toilet-cleaner.webp",
        href: "/vklin/products/power-plus-toilet-cleaner",
        groupId: "toilet-care",
        summary: "A non-fuming acid toilet cleaner.",
        headline: "All In One - Removes Tough Stains & Freshens The Surrounding",
        description:
          "VKLIN Power Plus Toilet Cleaner is a powerful toilet cleaning solution formulated with surfactants, corrosion inhibitors, and organic food-grade acids. It effectively removes tough stains, eliminates odors, and leaves toilets sparkling clean while maintaining surface safety. Its biodegradable formulation ensures effective cleaning with minimal environmental impact.",
        features: [
          "Removes stubborn stains",
          "Long-lasting freshness",
          "Deodorizes washrooms",
          "Food-grade acid-based formula",
          "Surface-safe cleaning action",
          "99% germ-effective cleaning",
          "Fresh fragrance technology",
        ],
        applications: [
          "Western Toilets",
          "Indian Toilets",
          "Ceramic Toilet Bowls",
          "Toilet Seats",
          "Washroom Fixtures",
          "Residential Bathrooms",
          "Commercial Restrooms",
        ],
        directions: [
          "Flush the toilet before application",
          "Apply the cleaner in and around the toilet bowl",
          "Allow the product to act for 10-15 minutes",
          "Brush the surface gently",
          "Flush with water for a sparkling clean finish",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Toilet Cleaner" },
          { label: "Variant", value: "Power Plus" },
          { label: "Form", value: "Liquid" },
          { label: "Fragrance", value: "Fresh" },
          { label: "Biodegradable", value: "Yes" },
          { label: "Surface Safe", value: "Yes" },
          { label: "Odor Control", value: "Yes" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
          { label: "Country of Origin", value: "India" },
        ],
        packSizes: ["500 ml Bottle", "750 ml Bottle", "5 Litre HDPE Container"],
        fragrances: [],
        cautions: [
          "Keep away from children",
          "Do not ingest",
          "Avoid contact with eyes",
          "If product enters eyes, rinse immediately with plenty of water",
          "Store in a cool and dry place",
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
        name: "VKLIN Air Freshener Multipurpose Odour Eliminator",
        shortName: "Air Freshener Odour Eliminator",
        image: "vklin-air-freshener-ac-duct-odour-eliminator.webp",
        href: "/vklin/products/air-freshener-ac-duct-odour-eliminator",
        groupId: "odour-care",
        summary: "A plant-extract odour eliminator for air-conditioning ducts.",
        headline: "Odour control for ducts, coils and basements.",
        description:
          "VKLIN Air Freshener is a herbal plant-extract-based odour eliminator specially formulated to neutralize and eliminate unpleasant odors from air ducts, basements, HVAC systems, and indoor environments. The advanced biodegradable formula helps control odor-causing microorganisms while improving indoor air quality without masking smells with artificial fragrances.",
        features: [
          "Formulated with natural plant extracts",
          "Neutralizes unwanted odors effectively",
          "Non-toxic and non-irritating",
          "Will not bleach or discolor fabrics or surfaces",
          "Promotes cleaner indoor air quality",
          "Fully biodegradable formulation",
          "Controls odors in HVAC ducts and surrounding areas",
          "Helps reduce fly and mosquito activity",
          "Free from harmful propellants",
        ],
        applications: [
          "Air Conditioning Ducts",
          "HVAC Systems",
          "Basements",
          "Commercial Buildings",
          "Offices",
          "Homes",
          "Hotels",
          "Public Areas",
          "Storage Areas",
          "Odor-Prone Indoor Spaces",
        ],
        directions: [
          "Dilute product with fresh water at a ratio of 1:10",
          "Apply using a low-pressure spraying pump",
          "Spray evenly on affected surfaces and air duct areas",
          "Allow treated areas to dry naturally",
          "Reapply if required for persistent odors",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Air Freshener" },
          { label: "Variant", value: "Multipurpose Odour Eliminator" },
          { label: "Form", value: "Liquid" },
          { label: "Fragrance", value: "Citrus Fresh" },
          { label: "Biodegradable", value: "Yes" },
          { label: "Non-Toxic", value: "Yes" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
          { label: "Country of Origin", value: "India" },
        ],
        packSizes: ["200 ml Pet Spray Atomizer", "5 Litre HDPE Container"],
        fragrances: [],
        cautions: [
          "Keep out of reach of children",
          "Do not ingest",
          "Avoid eye contact",
          "If product enters eyes, rinse thoroughly with water",
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
        name: "VKLIN Herbal Mosquito Repellent",
        shortName: "Herbal Mosquito Repellent",
        image: "vklin-herbal-mosquito-repellent.webp",
        href: "/vklin/products/herbal-mosquito-repellent",
        groupId: "natural-wellness",
        summary: "A water-based herbal room spray.",
        headline: "Natural herbal mosquito repellent for rooms and outdoor spaces.",
        description:
          "Natural herbal mosquito repellent formulated with Lemongrass, Citronella, Neem Oil and Eucalyptus Oil. Provides long-lasting protection without harsh chemicals.",
        features: [
          "Chemical free",
          "100% family safe",
          "Long lasting protection",
          "Non toxic",
          "Non allergic",
          "Water based",
          "Environment friendly",
        ],
        applications: [
          "Homes",
          "Offices",
          "Bedrooms",
          "Hotels",
          "Schools",
          "Hospitals",
          "Indoor Areas",
        ],
        directions: [
          "Spray in room corners and mosquito-prone areas",
          "Keep doors and windows closed for 15-25 minutes",
          "Repeat regularly as required",
        ],
        specifications: [
          { label: "Brand", value: "VKLIN" },
          { label: "Product Type", value: "Mosquito Repellent" },
          { label: "Category", value: "Natural Wellness" },
          { label: "Form", value: "Water-based Spray" },
          { label: "Net Content", value: "5 Litre" },
          { label: "Shelf Life", value: "18 Months" },
          { label: "Country of Origin", value: "India" },
        ],
        packSizes: ["100 ml", "200 ml", "5 L"],
        fragrances: [],
        cautions: [
          "Keep out of reach of children",
          "Do not ingest",
          "Avoid contact with eyes",
          "If product enters eyes, rinse thoroughly with water",
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
