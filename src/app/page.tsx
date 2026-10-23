import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { homeStockImages } from "@/data/homeImages";
import {
  findVKlinProducts,
  vklinProductCount,
  vklinProductGroups,
} from "@/data/vklinProducts";
import { locationSites } from "@/data/locations";
import {
  environmentIcons,
  operatingEnvironments,
  productMapGroups,
} from "@/data/industries";
import {
  specialtyOtherLines,
  specialtyProducts,
} from "@/data/specialtyProducts";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Droplets,
  Factory,
  Fan,
  FileCheck2,
  Gauge,
  Headset,
  Info,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  ScrollText,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PolyTreat Chemicals Pvt. Ltd. | Water Treatment, Construction Chemistry & V-Klin Care",
  description:
    "Mumbai manufacturer since 1987 of industrial water-treatment, construction and surface-protection, specialty, and V-Klin home and facility-care chemistry. Explore 28 product areas across four ranges.",
};

/* ------------------------------------------------------------------ */
/* What we make: one card per range, mirroring the /industries map.   */
/* ------------------------------------------------------------------ */

const specialtyAreas = ["Odour control", "HVAC coil cleaning", "Rust conversion", "Pool & drinking water"];

const ranges = [
  {
    id: "ranges-water",
    number: "01",
    icon: Droplets,
    imageSrc: homeStockImages.rangeWater.activeUrl,
    imageAlt: homeStockImages.rangeWater.alt,
    eyebrow: "Industrial water & process",
    title: "Treatment for the systems that keep your plant running.",
    description:
      "Water-treatment chemistry for boiler, cooling-water, reverse-osmosis, and effluent systems.",
    tags: ["Boilers", "Cooling towers", "RO", "Effluent"],
    link: "/solutions/industrial-water",
    linkText: "Explore water treatment",
    tone: "blue",
  },
  {
    id: "ranges-construction",
    number: "02",
    icon: Layers3,
    imageSrc: homeStockImages.rangeConstruction.activeUrl,
    imageAlt: homeStockImages.rangeConstruction.alt,
    eyebrow: "Construction & protection",
    title: "Surface protection built around the material and the problem.",
    description:
      "Waterproofing, coatings, concrete repair, flooring, and specialty surface-treatment products.",
    tags: ["Waterproofing", "Coatings", "Flooring", "Rust treatment"],
    link: "/solutions/construction-chemistry",
    linkText: "Explore construction chemistry",
    tone: "slate",
  },
  {
    id: "ranges-specialty",
    number: "03",
    icon: Wrench,
    imageSrc: null,
    imageAlt: "",
    eyebrow: "Specialty products",
    title: "Single-purpose products, each aimed at one problem.",
    description:
      "A dedicated line for jobs the main ranges do not cover, from odour control to HVAC coil care.",
    tags: specialtyAreas,
    link: "/specialty",
    linkText: "Explore specialty products",
    tone: "teal",
  },
  {
    id: "ranges-vklin",
    number: "04",
    icon: Leaf,
    imageSrc: homeStockImages.rangeVklin.activeUrl,
    imageAlt: homeStockImages.rangeVklin.alt,
    eyebrow: "V-Klin care",
    title: "Everyday cleaning for homes, institutions, and facilities.",
    description: "Cleaning and facility-care products grouped under PolyTreat's V-Klin brand.",
    tags: ["Floor & surface", "Handwash", "Dishwash", "Glass & toilet"],
    link: "/vklin/products",
    linkText: "Explore the V-Klin range",
    tone: "green",
  },
];

const rangeProductAreaCount = productMapGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

/* ------------------------------------------------------------------ */
/* Flagship specialty products: the three documented specialty items. */
/* Copy comes from `specialtyProducts` (the claim-reviewed source of   */
/* truth behind /specialty/*); icons, short chip labels and the safety */
/* notes below stay faithful to that module.                            */
/* ------------------------------------------------------------------ */

const flagshipChips: Record<string, string[]> = {
  corosil: ["Structural steel", "Railings & grills", "Pipelines & sheet metal", "Rolling shutters"],
  "polydor-ws": ["Waste & wastewater", "Food & animal processing", "Exhaust scrubbers", "Facilities"],
  polyklin: ["Evaporator coils", "Condenser coils", "AHU & FCU", "Window & split units"],
};

const flagshipIcons: Record<string, typeof Paintbrush> = {
  corosil: Paintbrush,
  "polydor-ws": Wind,
  polyklin: Fan,
};

const flagshipNotes: Record<string, string> = {
  corosil:
    "A treatment and primer step — a compatible paint system is still required over it.",
  "polydor-ws":
    "Odour control only — not a disinfectant, sanitiser or insecticide.",
  polyklin:
    "Directions are as published in our product literature; ask for the current sheet.",
};

const flagshipProducts = specialtyProducts.filter(
  (product) => product.slug in flagshipIcons,
);

const vklinPreviewProducts = findVKlinProducts([
  "Surface Cleaner",
  "Floor Cleaner",
  "Dishwash Gel",
]);

const markets = operatingEnvironments.map(({ id, eyebrow, description }) => ({
  icon: environmentIcons[id],
  eyebrow,
  title: eyebrow,
  description,
  href: `/industries#${id}`,
}));

const pqrsTiles = [
  {
    letter: "P",
    icon: Gauge,
    title: "Performance",
    description: "Formulations considered in the context of the task and operating system.",
  },
  {
    letter: "Q",
    icon: BadgeCheck,
    title: "Quality",
    description: "A focus on product quality and clear technical documentation.",
  },
  {
    letter: "R",
    icon: ShieldCheck,
    title: "Reliability",
    description: "A dependable working relationship from product enquiry through supply.",
  },
  {
    letter: "S",
    icon: Headset,
    title: "Service",
    description: "A direct conversation with the team about the product and its intended use.",
  },
];

const WhatsAppCta = ({ className = "" }: { className?: string }) => (
  <a
    className={`hp-whatsapp-link ${className}`.trim()}
    href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
    target="_blank"
    rel="noreferrer"
  >
    <MessageCircle size={16} aria-hidden="true" />
    Chat on WhatsApp <ArrowUpRight size={14} aria-hidden="true" className="hp-whatsapp-arrow" />
  </a>
);

export default function Home() {
  return (
    <main className="hp-home">
      <HeroCarousel />

      {/* Quality & Compliance Strip */}
      <section className="certifications-strip" aria-label="Quality and compliance documents">
        <div className="container certifications-strip-layout">
          <div className="cert-strip-heading">
            <span className="cert-strip-icon-box"><ShieldCheck size={20} strokeWidth={2} aria-hidden="true" /></span>
            <div>
              <span className="cert-strip-eyebrow">Quality &amp; compliance</span>
              <strong>Certificates and their scope</strong>
            </div>
          </div>
          <div className="cert-badges-grid">
            <div className="cert-badge-item">
              <BadgeCheck size={16} className="cert-badge-icon" aria-hidden="true" />
              <span>ISO 9001:2015 QMS</span>
            </div>
            <div className="cert-badge-item">
              <FileCheck2 size={16} className="cert-badge-icon" aria-hidden="true" />
              <span>UKcert WHO-GMP reference</span>
            </div>
            <div className="cert-badge-item">
              <ScrollText size={16} className="cert-badge-icon" aria-hidden="true" />
              <span>Private FDA reference</span>
            </div>
            <div className="cert-badge-item">
              <Leaf size={16} className="cert-badge-icon cert-badge-leaf" aria-hidden="true" />
              <span>UKcert Eco-Friendly certificate</span>
            </div>
          </div>
          <Link href="/certifications" className="cert-strip-link">
            <span>View Certifications</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* What we make — one card per range */}
      <section className="hp-section hp-section-tint" id="ranges" aria-labelledby="ranges-title">
        <div className="container">
          <div className="hp-section-heading">
            <div>
              <span className="eyebrow eyebrow-dark">What we make</span>
              <h2 id="ranges-title">Four ranges, one manufacturer.</h2>
            </div>
            <p>
              PolyTreat formulates and produces all four of its product ranges at its own
              sites, organized around the systems, surfaces, and spaces they serve.
            </p>
          </div>

          <div className="hp-range-grid">
            {ranges.map(({ id, number, icon: Icon, imageSrc, imageAlt, eyebrow, title, description, tags, link, linkText, tone }) => (
              <article className={`hp-range-card hp-tone-${tone}`} id={id} key={id}>
                <div className="hp-range-media">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 28vw"
                      className="hp-range-media-img"
                    />
                  ) : (
                    <div className="hp-range-media-panel" aria-hidden="true">
                      <span className="hp-range-media-icon"><Icon size={26} strokeWidth={1.7} /></span>
                      <span className="hp-range-media-note">Problem-specific formulations</span>
                    </div>
                  )}
                  <span className={`hp-range-media-badge hp-badge-${tone}`}>
                    <Icon size={13} strokeWidth={2.2} aria-hidden="true" />
                    <span>{eyebrow}</span>
                  </span>
                  <span className="hp-range-number" aria-hidden="true">{number}</span>
                </div>
                <div className="hp-range-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="hp-tags" aria-label={`${eyebrow} areas`}>
                    {tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <Link className="text-link hp-range-link" href={link}>
                    {linkText} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="hp-section-foot">
            <span>Not sure which range fits your requirement?</span>
            <WhatsAppCta />
          </div>
        </div>
      </section>

      {/* Complete business map */}
      <section className="hp-section" id="range-map" aria-labelledby="range-map-title">
        <div className="container">
          <div className="hp-section-heading">
            <div>
              <span className="eyebrow eyebrow-dark">The complete range</span>
              <h2 id="range-map-title">Every product area, at a glance.</h2>
            </div>
            <p>
              {rangeProductAreaCount} product areas across the four ranges — each one
              documented on its own page, so nothing here is a dead end.
            </p>
          </div>

          <div className="hp-map-grid">
            {productMapGroups.map((group) => (
              <div className={`hp-map-group hp-map-${group.id}`} key={group.id}>
                <div className="hp-map-group-head">
                  <h3>{group.title}</h3>
                  <span className="hp-map-group-summary">{group.summary}</span>
                </div>
                <ul className="hp-map-pills">
                  {group.items.map((item) => (
                    <li key={`${group.id}-${item.label}`}>
                      <Link href={item.href}>
                        <span>{item.label}</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hp-section-foot hp-section-foot-center">
            <span>The industries page shows the full map with sector contexts.</span>
            <Link className="text-link" href="/industries">
              Open the product map <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="hp-section hp-section-tint" id="applications" aria-labelledby="applications-title">
        <div className="container hp-applications-layout">
          <div className="hp-applications-image">
            <div className="hp-applications-figure">
              <Image
                src={homeStockImages.applicationsImage.activeUrl}
                alt={homeStockImages.applicationsImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="hp-applications-img"
              />
              <div className="hp-applications-shade" aria-hidden="true" />
              <div className="hp-applications-caption">
                <span className="hp-applications-tag">
                  <Factory size={15} strokeWidth={2} aria-hidden="true" />
                  Chemistry in working environments
                </span>
                <p>
                  Representative effluent-treatment basins — process-water responsibility,
                  building surfaces, and shared spaces are all part of the same business.
                </p>
              </div>
            </div>
          </div>

          <div className="hp-applications-list">
            <div className="hp-section-heading hp-heading-tight">
              <div>
                <span className="eyebrow eyebrow-dark">Industries &amp; applications</span>
                <h2 id="applications-title">Where the chemistry goes to work.</h2>
              </div>
              <p>
                The same ranges serve plants, infrastructure projects, and everyday
                facilities. Start with the environment you operate in.
              </p>
            </div>

            <div className="hp-application-rows">
              {markets.map(({ icon: Icon, description, href }, index) => (
                <Link className="hp-application-row" href={href} key={markets[index].href}>
                  <span className="hp-application-index">{`0${index + 1}`}</span>
                  <span className="hp-application-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="hp-application-copy">
                    <strong>{markets[index].title}</strong>
                    <span>{description}</span>
                  </span>
                  <ArrowUpRight className="hp-application-arrow" size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship specialty products */}
      <section className="hp-section hp-section-flagship" id="flagship" aria-labelledby="flagship-title">
        <div className="container">
          <div className="hp-section-heading">
            <div>
              <span className="eyebrow eyebrow-dark">Specialty products</span>
              <h2 id="flagship-title">Specialty products, in detail.</h2>
            </div>
            <p>
              POLYDOR-WS, COROSIL and POLYKLIN each solve one specific problem.
              Their full pages carry the product literature, application lists,
              and document requests.
            </p>
          </div>

          <div className="hp-flag-grid">
            {flagshipProducts.map((product) => {
              const Icon = flagshipIcons[product.slug];
              return (
                <article className="hp-flag-card" key={product.slug}>
                  <div className="hp-flag-head">
                    <span className="hp-flag-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="hp-flag-cat">{product.category}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="hp-flag-tagline">{product.headline}</p>
                  <p className="hp-flag-summary">{product.summary}</p>
                  <ul className="hp-tags" aria-label={`${product.name} application areas`}>
                    {flagshipChips[product.slug]?.map((chip) => <li key={chip}>{chip}</li>)}
                  </ul>
                  <p className="hp-flag-note">
                    <Info size={13} aria-hidden="true" />
                    <span>{flagshipNotes[product.slug]}</span>
                  </p>
                  <Link className="text-link hp-flag-link" href={`/specialty/${product.slug}`}>
                    Explore {product.name} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="hp-section-foot">
            <span className="hp-flag-more">
              Also in the specialty range:{" "}
              {specialtyOtherLines.map((line, index) => (
                <span key={line.title}>
                  {index > 0 && <span aria-hidden="true"> · </span>}
                  <Link href="/specialty">{line.title}</Link>
                </span>
              ))}
            </span>
            <Link className="text-link" href="/specialty">
              Open the specialty hub <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* V-Klin brand spotlight */}
      <section className="hp-section hp-section-vklin" id="vklin" aria-labelledby="vklin-title">
        <div className="container hp-vklin-layout">
          <div className="hp-vklin-copy">
            <div className="hp-vklin-identity">
              <Image
                src="/vklin-logo.webp"
                alt="V-Klin brand logo"
                width={140}
                height={48}
                className="hp-vklin-logo"
              />
              <span className="eyebrow eyebrow-green"><Leaf size={14} aria-hidden="true" /> A PolyTreat brand</span>
            </div>
            <h2 id="vklin-title">Meet V-Klin. Care for everyday spaces.</h2>
            <p>
              V-Klin brings PolyTreat&apos;s formulated cleaning range to homes, workplaces,
              and shared facilities, organized by the task each product handles.
            </p>
            <ul className="hp-vklin-cats" aria-label="V-Klin categories">
              {vklinProductGroups.map(({ id, title }) => (
                <li key={id}><Check size={15} aria-hidden="true" /> <Link href={`/vklin/products#${id}`}>{title}</Link></li>
              ))}
            </ul>
            <div className="hp-vklin-actions">
              <Link className="btn btn-vklin" href="/vklin">
                Explore V-Klin <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="text-link" href="/vklin/products">
                See all {vklinProductCount} products <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="hp-vklin-panel">
            <div className="hp-vklin-panel-head">
              <span className="hp-vklin-panel-mark" aria-hidden="true"><Leaf size={18} aria-hidden="true" /></span>
              <div>
                <span>Institutional &amp; home care</span>
                <strong>Product range</strong>
              </div>
            </div>
            <div className="hp-vklin-products">
              {vklinPreviewProducts.map((product) => (
                <Link href={product.href} className="hp-vklin-product" key={product.href}>
                  <span className="hp-vklin-product-imgbox">
                    <Image
                      src={`/vklin-products/${product.image}`}
                      alt={`V-Klin ${product.name}`}
                      fill
                      sizes="(max-width: 760px) 30vw, 150px"
                      className="hp-vklin-product-img"
                    />
                  </span>
                  <span className="hp-vklin-product-name">{product.shortName}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Since 1987 — company story + PQRS */}
      <section className="hp-section hp-section-story" id="story" aria-labelledby="story-title">
        <div className="container">
          <div className="hp-story-layout">
            <div className="hp-story-copy">
              <span className="eyebrow eyebrow-dark">About PolyTreat</span>
              <h2 id="story-title">A manufacturer first, since 1987.</h2>
              <p>
                PolyTreat Chemicals Pvt. Ltd. formulates and produces its ranges at its own
                plants, with an in-house laboratory monitoring quality daily — and a direct
                technical conversation behind every enquiry.
              </p>

              <ul className="hp-story-facts" aria-label="Company facts">
                <li>
                  <BadgeCheck size={16} aria-hidden="true" />
                  <span><strong>In-house QC laboratory</strong> with daily product monitoring</span>
                </li>
                <li>
                  <Building2 size={16} aria-hidden="true" />
                  <span><strong>Three sites</strong> — Mumbai offices and green products facility, plus Tarapur MIDC manufacturing</span>
                </li>
                <li>
                  <Factory size={16} aria-hidden="true" />
                  <span><strong>Formulated in our own plants</strong>, in continuous operation since 1987</span>
                </li>
              </ul>

              <div className="hp-story-locations" aria-label="PolyTreat locations">
                {locationSites.map((site) => (
                  <span className="hp-story-location" key={site.id}>
                    <MapPin size={14} aria-hidden="true" />
                    <span className="hp-story-location-text">
                      {site.title} <em>{site.role}</em>
                    </span>
                  </span>
                ))}
              </div>

              <div className="hp-story-actions">
                <Link className="text-link" href="/about">
                  More about PolyTreat <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link className="text-link" href="/certifications">
                  Certificates and their scope <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="hp-story-side">
              <div className="hp-pqrs">
                <span className="hp-pqrs-label">The PQRS framework</span>
                <div className="hp-pqrs-list">
                  {pqrsTiles.map(({ letter, icon: Icon, title, description }) => (
                    <article className={`hp-pqrs-tile hp-pqrs-${letter.toLowerCase()}`} key={letter}>
                      <span className="hp-pqrs-letter" aria-hidden="true">{letter}</span>
                      <div className="hp-pqrs-copy">
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="hp-pqrs-note">
                  Request product TDS and safety documents for application and handling details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="hp-section hp-section-contact" id="contact" aria-labelledby="contact-title">
        <div className="container hp-contact-panel">
          <div className="hp-contact-copy">
            <span className="eyebrow eyebrow-dark">Start a conversation</span>
            <h2 id="contact-title">Let&apos;s talk about your application.</h2>
            <p>
              Tell us the system, surface, or facility behind the requirement, and we&apos;ll
              direct it to the right team — including current product documents.
            </p>
            <Link className="text-link hp-contact-form-link" href="/contact#contact-form">
              Or send a detailed enquiry form <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="hp-contact-cards">
            <a className="hp-contact-card" href="mailto:polyind2@gmail.com">
              <span className="hp-contact-icon"><Mail size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>Email enquiries</span>
                <strong>polyind2@gmail.com</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="hp-contact-card" href="tel:+919820235995">
              <span className="hp-contact-icon"><Phone size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>Technical &amp; sales</span>
                <strong>+91 98202 35995</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="hp-contact-card"
              href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
              target="_blank"
              rel="noreferrer"
            >
              <span className="hp-contact-icon"><MessageCircle size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>WhatsApp</span>
                <strong>Chat with the team</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="hp-contact-card hp-contact-address">
              <span className="hp-contact-icon"><MapPin size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>Corporate office</span>
                <strong>7-A Topiwala Building, Goregaon (West), Mumbai 400104</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
