/**
 * Single source of truth for PolyTreat's locations.
 *
 * Three sites, each from the client's own material:
 * - Goregaon (West) is the corporate and sales office. It is printed on every
 *   page of the client's own V-Klin catalogue together with the contact
 *   details the website publishes.
 * - Goregaon (East) is the green products facility. It is the address named on
 *   the visiting card and on all four certificates.
 * - Tarapur MIDC is the heavy manufacturing plant. The client's own catalogue
 *   describes a manufacturing facility "situated at Tarapur & Goregaon", and
 *   the project discovery document names Tarapur Industrial Area (MIDC),
 *   Palghar as the heavy manufacturing plant.
 *
 * What is made at which site is still an open question for the client, so the
 * notes below stay at the level the sources support.
 */

export type LocationSite = {
  id: "goregaon-west" | "goregaon-east" | "tarapur";
  /** Short label for the site in a list. */
  kind: string;
  /** Place name with the area in brackets, e.g. "Goregaon (West), Mumbai". */
  title: string;
  /** Place name for maps and anchors, e.g. "Goregaon West, Mumbai". */
  area: string;
  /** Address as separate lines, for a card. */
  addressLines: string[];
  /** Address as one line, for a list. */
  address: string;
  /** What this site is for. */
  note: string;
  /** Short role label, e.g. "Corporate office". */
  role: string;
};

export const locationSites: LocationSite[] = [
  {
    id: "goregaon-west",
    kind: "Corporate & administrative office",
    title: "Goregaon (West), Mumbai",
    area: "Goregaon West, Mumbai",
    addressLines: [
      "7-A, Topiwala Building, 'C' Wing",
      "Opp. Topiwala Center / Cinema",
      "Goregaon (West), Mumbai - 400104",
      "Maharashtra, India",
    ],
    address:
      "7-A, Topiwala Building, 'C' Wing, Opp. Topiwala Center / Cinema, Goregaon (West), Mumbai - 400104, Maharashtra, India.",
    note: "Sales, administration, and technical coordination.",
    role: "Corporate office",
  },
  {
    id: "goregaon-east",
    kind: "Manufacturing - green products",
    title: "Goregaon (East), Mumbai",
    area: "Goregaon East, Mumbai",
    addressLines: [
      "306, Shankhala Industrial Premises",
      "Co-op Society Ltd., Near Chudiwadi",
      "Gogatewadi, Goregaon (East), Mumbai - 400063",
      "Maharashtra, India",
    ],
    address:
      "306, Shankhala Industrial Premises Co-op Society Ltd., Near Chudiwadi, Gogatewadi, Goregaon (East), Mumbai - 400063, Maharashtra, India.",
    note: "The V-Klin cleaning and institutional care range, and the site named on our certificates.",
    role: "Green products",
  },
  {
    id: "tarapur",
    kind: "Manufacturing - heavy chemicals",
    title: "Tarapur MIDC, Palghar",
    area: "Tarapur MIDC, Palghar",
    addressLines: [
      "Tarapur Industrial Area (MIDC)",
      "Palghar district",
      "Maharashtra, India",
    ],
    address: "Tarapur Industrial Area (MIDC), Palghar district, Maharashtra, India.",
    note: "Heavy manufacturing for the industrial water and process chemical ranges.",
    role: "Manufacturing plant",
  },
];

/** The site enquiries are directed to. */
export const primaryContactSite = locationSites[0];
