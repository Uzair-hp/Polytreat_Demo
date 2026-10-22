export type ConstructionProduct = {
  /** Product name as printed in the client's construction profile. */
  name: string;
  /** What kind of product it is, in plain words. */
  type: string;
  uses: string[];
  /** Indicative catalogue figure, published as a per-coat or per-unit rate. */
  coverage?: string;
};

export type ConstructionFamily = {
  id: string;
  title: string;
  summary: string;
  products: ConstructionProduct[];
};

/**
 * The construction range, taken from the client's construction profile.
 *
 * The profile gives product names, product types, applications and indicative
 * coverage figures. Names are published because they are the branded names the
 * client sells under. Everything else is written to the evidence limits in
 * `polytreat_study.md` Section 4:
 *
 * - Source marketing claims are not repeated. "Totally waterproof",
 *   "non-toxic", "eco-friendly", "over 400% elongation", "withstands all
 *   weather", "stronger than concrete" and the fungus and algae claims are
 *   described by function instead, or left out.
 * - Coverage figures are indicative, state their unit and the per-coat basis,
 *   and are never turned into a project estimate.
 * - The profile has no visible date, so every page says which products are
 *   currently supplied is confirmed on enquiry.
 */
export const constructionFamilies: ConstructionFamily[] = [
  {
    id: "elastomeric-membranes",
    title: "Elastomeric waterproofing membranes",
    summary:
      "Single-component systems that cure on exposure to the atmosphere and form a seamless elastomeric layer.",
    products: [
      {
        name: "POLYPROOF-SPR",
        type: "Single-pack elastomeric acrylic waterproofing membrane",
        uses: [
          "Basements, bathrooms, toilets, kitchens and water tanks",
          "Terraces, roofs, walls and concrete surfaces",
          "Topcoat over polyurethane waterproofing membranes",
          "Over terrazzo tiles, asphalt roofing felt and metal roofing sheets",
        ],
        coverage: "30 to 40 sq ft per kg per coat",
      },
      {
        name: "POLYGARD-AC",
        type: "Elastomeric pure acrylic coating",
        uses: [
          "Roofs, decks and walls",
          "Vertical as well as horizontal surfaces",
          "Concrete, cement mortar, wood and metal substrates",
          "Over polyurethane foam and surfaces degraded by ultraviolet exposure",
        ],
        coverage: "30 to 40 sq ft per kg per coat",
      },
    ],
  },
  {
    id: "bitumen-and-clear",
    title: "Bitumen and clear waterproofers",
    summary:
      "Waterproofing for foundations, structural surfaces and finishes where the substrate needs to stay visible.",
    products: [
      {
        name: "POLYROOF-MB",
        type: "Elastomeric modified bitumen membrane",
        uses: [
          "Protective coating on concrete and brick foundations",
          "Retaining walls and damp proofing of concrete and masonry",
          "Sandwich membranes in new construction and surface treatment on existing floors",
          "Protection of concrete columns, beams and structures",
        ],
        coverage: "25 to 35 sq ft per kg per coat",
      },
      {
        name: "POLYROOF-ACR",
        type: "Clear waterproof coating",
        uses: [
          "Concrete, wood, metals, mosaic tiles and steel",
          "Sandstone, marble and stone claddings where the surface finish must show through",
          "Exposed steel rods and anti-corrosive applications",
        ],
        coverage: "50 to 60 sq ft per litre per coat",
      },
    ],
  },
  {
    id: "exterior-coatings",
    title: "Exterior building coatings",
    summary:
      "Ready-to-use acrylic and polyurethane coatings for exterior walls, roofs and terraces.",
    products: [
      {
        name: "PROTEX 2000",
        type: "Pure acrylic exterior building coating",
        uses: ["Exterior walls of buildings", "Masonry and cement surfaces"],
        coverage: "70 to 80 sq ft per kg per coat",
      },
      {
        name: "POLYROOF-ACE",
        type: "Modified acrylic building coating",
        uses: [
          "Roofs, terraces and walls",
          "Tinted shades for external finishes",
        ],
        coverage: "65 to 75 sq ft per kg per coat",
      },
      {
        name: "POLYROOF-PU-100",
        type: "Single-component polyurethane coating",
        uses: [
          "Roofs, terraces and walls",
          "Re-coatable exterior finishes",
        ],
        coverage: "60 to 70 sq ft per litre per coat",
      },
    ],
  },
  {
    id: "bonding-and-repair",
    title: "Bonding and repair additives",
    summary:
      "Polymer additives mixed into cement and mortar for repair, bonding and levelling work.",
    products: [
      {
        name: "POLYBOND-SP",
        type: "Modified acrylic emulsion for cementitious mixes",
        uses: [
          "General reconstruction works and cement mortar mixes",
          "Waterproofing of floors and rooftops",
          "Maintenance of seepage and leakage",
          "Toppings, patches, levelling, bridge decks and highway repairs",
        ],
      },
      {
        name: "POLYBOND-SPR",
        type: "Carboxylated styrene butadiene latex for concrete admixtures",
        uses: [
          "Bonding during repairs of old structures",
          "Improved bonding of cement and concrete mixes",
          "Water repellence and protection of reinforcement from moisture attack",
        ],
      },
      {
        name: "POLYBOND-SPA",
        type: "Plasticised polyvinyl acetate adhesive",
        uses: [
          "Surface sealer",
          "General-purpose adhesive",
          "Additive to concrete and plasters",
          "Bonding coat and tile adhesive",
        ],
      },
    ],
  },
  {
    id: "epoxy-polyurethane-floor",
    title: "Epoxy, polyurethane and anti-corrosive coatings",
    summary:
      "Heavy-duty systems for chemical and wear areas, plus decorative finishes and a primer for steel.",
    products: [
      {
        name: "POLYBOND-HB",
        type: "Two-component epoxy coating",
        uses: [
          "Floors and walls where chemicals, fumes, alkalis, solvents or mild acids are used",
          "Chemical plants, factories and workshops",
        ],
        coverage: "65 to 75 sq ft per kg per coat",
      },
      {
        name: "POLYBOND HB MORTAR",
        type: "Two-component solvent-free epoxy mortar",
        uses: [
          "Bedding bridge pads and steel bridge bearings",
          "Machinery foundations, chemical plants and airport runways",
          "Repairing concrete tanks, factory floors and dams",
          "Floor toppings, cracks and beddings",
        ],
        coverage: "3 to 5 sq ft per kg per coat at 2 to 3 mm",
      },
      {
        name: "POLYBOND PU-100",
        type: "Two-component aliphatic polyurethane topcoat",
        uses: [
          "Protection of metal, concrete, wood and fibreglass surfaces",
          "Chemical and weather-exposed areas",
        ],
        coverage: "35 to 40 sq ft per kg in two coats at 75 to 80 micron DFT",
      },
      {
        name: "POLYROOF PU LACQUER",
        type: "Decorative polyurethane lacquer for wood and veneers",
        uses: ["Wood and veneer decorative finishes", "Furniture and joinery"],
      },
      {
        name: "POLYCOR",
        type: "Anti-corrosive primer for metal surfaces",
        uses: [
          "Exposed steel rods and structural steel",
          "Galvanised iron roofs and machinery",
          "As a primer beneath a later paint system",
        ],
        coverage: "about 50 to 60 sq ft per litre per coat",
      },
    ],
  },
  {
    id: "sealants-and-joints",
    title: "Sealants and joint fillers",
    summary:
      "Flexible compounds for expansion joints, cracks and gaps in built surfaces.",
    products: [
      {
        name: "POLYROOF CRACKSEAL",
        type: "Synthetic acrylic resin sealing compound",
        uses: [
          "Cracks and joints in concrete",
          "Window frames and patching",
        ],
      },
      {
        name: "POLYBOND SILICON SEALANT",
        type: "One-component general-purpose silicone sealant",
        uses: [
          "Expansion joints in windows and frames",
          "Sealing to glass, ceramics, aluminium, plastics and painted surfaces",
          "Sanitary sealing and leak repairs",
        ],
      },
    ],
  },
];

/** The construction range as it appears in the 2022 catalogue. */
export const constructionRangeNote =
  "Product names, types and applications follow PolyTreat's published construction profile, which carries no visible date. Coverage figures are the profile's own indicative catalogue figures per coat, not a project estimate. Confirm the current datasheet, site conditions and which products are currently supplied before you specify.";

export function findConstructionFamilies(ids: string[]): ConstructionFamily[] {
  return ids
    .map((id) => constructionFamilies.find((family) => family.id === id))
    .filter((family): family is ConstructionFamily => Boolean(family));
}
