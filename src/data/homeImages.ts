/**
 * Curated stock image configurations for the PolyTreat Homepage.
 * Uses high-resolution Unsplash CDN links with Next.js image optimization.
 * Each section includes its active URL and pre-vetted alternative options for instant swapping.
 */

export interface ImageOption {
  label: string;
  url: string;
}

export interface SectionImage {
  key: string;
  label: string;
  activeUrl: string;
  alt: string;
  options: ImageOption[];
}

export const homeStockImages = {
  // 1. Solution Areas
  solutionWater: {
    key: "solutionWater",
    label: "Industrial Water Treatment",
    activeUrl: "/images/home/solution-water-cooling-tower.jpg",
    alt: "Industrial cooling tower water treatment and recirculating pipe manifold",
    options: [
      {
        label: "Cooling Tower Piping and Recirculating Loop (Recommended)",
        url: "/images/home/solution-water-cooling-tower.jpg",
      },
      {
        label: "Effluent Treatment Clarifier Basins (ETP)",
        url: "/images/home/solution-water-effluent-clarifier.webp",
      },
      {
        label: "Industrial Steam Boiler Plant Room",
        url: "/images/home/solution-water-boiler-room.jpg",
      },
    ],
  },

  solutionConstruction: {
    key: "solutionConstruction",
    label: "Construction Chemistry and Protection",
    activeUrl: "/images/home/solution-construction-waterproofing.webp",
    alt: "Application of industrial liquid elastomeric waterproofing membrane on concrete structure",
    options: [
      {
        label: "Liquid Waterproofing Membrane Application (Recommended)",
        url: "/images/home/solution-construction-waterproofing.webp",
      },
    ],
  },

  solutionVklin: {
    key: "solutionVklin",
    label: "V-Klin Everyday Facility Care",
    activeUrl: "/images/home/vklin-og-fitted.webp",
    alt: "V-Klin Golden Floor Cleaner and Deodoriser 5-Litre facility packaging",
    options: [
      {
        label: "V-Klin Original Golden Floor Cleaner Packaging (Recommended)",
        url: "/images/home/vklin-og-fitted.webp",
      },
      {
        label: "Professional Facility Housekeeping and Sanitization",
        url: "/images/home/everyday-cleaning-facility-care.webp",
      },
    ],
  },

  // 2. Portfolio Product Families
  portfolioBoilerCooling: {
    key: "portfolioBoilerCooling",
    label: "Boiler and Cooling Water Treatment",
    activeUrl: "/images/home/portfolio-boiler-cooling.jpg",
    alt: "Industrial packaged steam boiler plant room and combustion burner system",
    options: [
      {
        label: "Industrial Steam Boiler Plant Room (Recommended)",
        url: "/images/home/portfolio-boiler-cooling.jpg",
      },
      {
        label: "Industrial Cooling Tower Pipe Manifold",
        url: "/images/home/solution-water-cooling-tower.jpg",
      },
    ],
  },

  portfolioRoEffluent: {
    key: "portfolioRoEffluent",
    label: "RO, Effluent and Process Treatment",
    activeUrl: "/images/home/portfolio-ro-effluent.webp",
    alt: "Industrial effluent treatment plant clarifiers and biological aeration sedimentation basins",
    options: [
      {
        label: "Effluent Clarifier Basins and Aeration Plant (Recommended)",
        url: "/images/home/portfolio-ro-effluent.webp",
      },
    ],
  },

  portfolioConstruction: {
    key: "portfolioConstruction",
    label: "Waterproofing and Surface Protection",
    activeUrl: "/images/home/portfolio-waterproofing.jpg",
    alt: "Application of elastomeric liquid roof waterproofing coating with roller on building terrace",
    options: [
      {
        label: "Terrace Liquid Waterproofing Roller Coating (Recommended)",
        url: "/images/home/portfolio-waterproofing.jpg",
      },
      {
        label: "Industrial Deck Waterproofing in Progress",
        url: "/images/home/solution-construction-waterproofing.webp",
      },
    ],
  },

  portfolioVklin: {
    key: "portfolioVklin",
    label: "Everyday Cleaning and Facility Care",
    activeUrl: "/images/home/vklin-og-fitted.webp",
    alt: "V-Klin institutional cleaning supplies and commercial packaging",
    options: [
      {
        label: "V-Klin Original Product Lineup (Recommended)",
        url: "/images/home/vklin-og-fitted.webp",
      },
      {
        label: "Janitorial Surface Care in Action",
        url: "/images/home/everyday-cleaning-facility-care.webp",
      },
    ],
  },

  // 3. Markets & Applications Banner
  marketApplications: {
    key: "marketApplications",
    label: "Industries & Processing Plants",
    activeUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    alt: "Continuous chemical manufacturing plant and heavy industrial utility infrastructure",
    options: [
      {
        label: "Continuous Chemical Plant Complex (Recommended)",
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  // 4. Company Facility Section
  companyFacility: {
    key: "companyFacility",
    label: "PolyTreat Manufacturing Facility",
    activeUrl:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    alt: "PolyTreat specialty chemical manufacturing and formulation plant facility",
    options: [
      {
        label: "Modern Industrial Chemical Plant Exterior (Recommended)",
        url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
};
