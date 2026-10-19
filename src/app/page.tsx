import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Headset,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Waves,
} from "lucide-react";

const solutions = [
  {
    id: "solution-water",
    number: "01",
    icon: Droplets,
    imageLabel: "Industrial water systems",
    eyebrow: "Industrial water",
    title: "Treatment for the systems that keep your plant running.",
    description:
      "Water-treatment chemistry for boiler, cooling-water, reverse-osmosis, and effluent systems.",
    tags: ["Boilers", "Cooling towers", "RO", "Effluent"],
    link: "/solutions/industrial-water",
    linkText: "Explore water-treatment solutions",
    tone: "blue",
  },
  {
    id: "solution-construction",
    number: "02",
    icon: Layers3,
    imageLabel: "Construction chemistry application",
    eyebrow: "Construction & protection",
    title: "Surface protection built around the material and the problem.",
    description:
      "Waterproofing, coatings, concrete repair, flooring, and specialty surface-treatment products.",
    tags: ["Waterproofing", "Coatings", "Flooring", "Rust treatment"],
    link: "/solutions/construction-chemistry",
    linkText: "Explore construction solutions",
    tone: "slate",
  },
  {
    id: "solution-vklin",
    number: "03",
    icon: Leaf,
    imageLabel: "V-Klin facility care",
    eyebrow: "V-Klin care",
    title: "Everyday cleaning for homes, institutions, and facilities.",
    description:
      "Cleaning products for home and facility care, grouped under PolyTreat's V-Klin brand.",
    tags: ["Floor & surface", "Handwash", "Dishwash", "Glass & toilet"],
    link: "#vklin",
    linkText: "Explore V-Klin",
    tone: "green",
  },
];

const portfolioFamilies = [
  {
    id: "portfolio-boiler-cooling",
    icon: Droplets,
    number: "01",
    imageLabel: "Industrial boiler and cooling-water systems",
    eyebrow: "Industrial water",
    title: "Boiler & cooling-water treatment",
    description:
      "Product families for water systems used in steam generation and recirculating cooling.",
    categories: ["Boiler water", "Cooling water", "Scale & corrosion control"],
    tone: "blue",
  },
  {
    id: "portfolio-ro-effluent",
    icon: Waves,
    number: "02",
    imageLabel: "Reverse osmosis and effluent treatment systems",
    eyebrow: "Process water",
    title: "RO, effluent & process treatment",
    description:
      "Categories for membrane-based water systems and industrial wastewater processes.",
    categories: ["RO systems", "Effluent treatment", "Process applications"],
    tone: "slate",
  },
  {
    id: "portfolio-construction",
    icon: Layers3,
    number: "03",
    imageLabel: "Construction and surface-protection application",
    eyebrow: "Construction chemistry",
    title: "Waterproofing & surface protection",
    description:
      "Construction product families spanning water ingress, concrete repair, protective finishes, and joints.",
    categories: ["Waterproofing", "Concrete repair", "Protective coatings", "Sealants"],
    tone: "slate",
  },
  {
    id: "portfolio-vklin",
    icon: Leaf,
    number: "04",
    imageLabel: "V-Klin home and facility cleaning products",
    eyebrow: "V-Klin care",
    title: "Everyday cleaning & facility care",
    description:
      "Cleaning categories for homes and shared spaces, including institutional settings.",
    categories: ["Floor & surface", "Hand & dish care", "Glass & washroom"],
    tone: "green",
  },
];

const markets = [
  {
    icon: Factory,
    title: "Process & manufacturing",
    description:
      "Water-treatment categories for boiler, cooling-water, RO, and effluent systems.",
    href: "/industries#process-manufacturing",
  },
  {
    icon: Layers3,
    title: "Utilities & infrastructure",
    description:
      "Water and building services, alongside construction and surface-protection applications.",
    href: "/industries#utilities-infrastructure",
  },
  {
    icon: Building2,
    title: "Facilities & institutions",
    description:
      "V-Klin cleaning categories for homes, workplaces, and shared facilities.",
    href: "/industries#facilities-institutions",
  },
];

const pqrs = [
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

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <section className="section solutions-section" id="solutions" aria-labelledby="solutions-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow eyebrow-dark">Our solution areas</span>
              <h2 id="solutions-title">Chemistry for the work you do.</h2>
            </div>
            <p>
              Explore PolyTreat's three solution areas, with product families organized around the systems and tasks they serve.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map(({ id, number, icon: Icon, imageLabel, eyebrow, title, description, tags, link, linkText, tone }) => (
              <article className={`solution-card solution-card-${tone}`} id={id} key={id}>
                <div className={`solution-image-placeholder solution-image-${tone}`} role="img" aria-label={`Image placeholder: ${imageLabel}`}>
                  <span className="solution-image-mark"><Icon size={27} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="solution-image-caption">Image placeholder: {imageLabel}</span>
                  <span className="solution-number">{number}</span>
                </div>
                <span className="solution-eyebrow">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="solution-tags" aria-label={`${eyebrow} categories`}>
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <Link className="text-link" href={link}>
                  {linkText} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow eyebrow-dark">Product portfolio</span>
              <h2 id="portfolio-title">Find products by system or task.</h2>
            </div>
            <p>
              Explore PolyTreat and V-Klin products by system or task—from industrial water treatment and construction chemistry to everyday cleaning.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioFamilies.map(({ id, icon: Icon, number, imageLabel, eyebrow, title, description, categories, tone }) => (
              <article className={`portfolio-card portfolio-card-${tone}`} id={id} key={id}>
                <div className={`portfolio-image-placeholder portfolio-image-${tone}`} role="img" aria-label={`Image placeholder: ${imageLabel}`}>
                  <span className="portfolio-image-mark"><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="portfolio-image-caption">Image placeholder: {imageLabel}</span>
                  <span className="portfolio-number">{number}</span>
                </div>
                <span className="portfolio-eyebrow">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="portfolio-categories" aria-label={`${title} categories`}>
                  {categories.map((category) => <li key={category}>{category}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="portfolio-contact-note">
            <span>Need a product data sheet or quote?</span>
            <Link className="text-link" href="#contact">
              Talk to our team <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="markets-section" id="markets" aria-labelledby="markets-title">
        <div className="container markets-layout">
          <div className="markets-intro">
            <span className="eyebrow eyebrow-light">Industries & applications</span>
            <h2 id="markets-title">Application expertise across plants, projects, and facilities.</h2>
            <p>
              See where PolyTreat's water-treatment, construction, and cleaning ranges are used.
            </p>
            <Link className="market-link" href="/industries">
              Explore industries <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <div className="market-image-placeholder" role="img" aria-label="Image placeholder: industrial plant, construction, and facility applications">
              <span className="market-image-orbit market-image-orbit-outer" />
              <span className="market-image-orbit market-image-orbit-inner" />
              <span className="market-image-icon"><Factory size={28} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="market-image-caption">Image placeholder: application photography</span>
              <span className="market-image-label">Application contexts</span>
            </div>
          </div>
          <div className="market-list">
            {markets.map(({ icon: Icon, title, description, href }, index) => (
              <Link className="market-item" href={href} key={title}>
                <span className="market-index">0{index + 1}</span>
                <span className="market-icon"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ArrowUpRight className="market-arrow" size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section vklin-section" id="vklin" aria-labelledby="vklin-title">
        <div className="container vklin-layout">
          <div className="vklin-copy">
            <span className="eyebrow eyebrow-green"><Leaf size={15} aria-hidden="true" /> A PolyTreat brand</span>
            <h2 id="vklin-title">Meet <span>V-Klin</span>, care for everyday spaces.</h2>
            <p>
              V-Klin brings PolyTreat's cleaning range to homes and shared facilities.
            </p>
            <Link className="btn btn-vklin" href="/vklin">
              Explore V-Klin <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="vklin-category-panel">
            <div className="vklin-panel-heading">
              <span className="vklin-leaf-mark"><Leaf size={19} aria-hidden="true" /></span>
              <div>
                <span>Institutional & home care</span>
                <h3>Cleaning categories</h3>
              </div>
            </div>
            <ul className="vklin-category-list">
              <li id="vklin-floor-surface"><Check size={16} aria-hidden="true" /> Floor & surface care</li>
              <li id="vklin-handwash"><Check size={16} aria-hidden="true" /> Handwash & liquid soap</li>
              <li id="vklin-dishwashing"><Check size={16} aria-hidden="true" /> Dishwashing products</li>
              <li id="vklin-glass-kitchen-toilet"><Check size={16} aria-hidden="true" /> Glass, kitchen & toilet care</li>
            </ul>
            <p className="vklin-panel-note">
              Everyday cleaning for homes, institutions, and facility teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section pqrs-section" id="pqrs" aria-labelledby="pqrs-title">
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="eyebrow eyebrow-dark">How we think about the work</span>
            <h2 id="pqrs-title">The PQRS framework.</h2>
            <p>Performance. Quality. Reliability. Service.</p>
          </div>
          <div className="pqrs-grid">
            {pqrs.map(({ letter, icon: Icon, title, description }, index) => (
              <article className={`pqrs-card pqrs-card-${letter.toLowerCase()}`} key={letter}>
                <div className="pqrs-card-topline">
                  <div className="pqrs-card-identity">
                    <span className={`pqrs-letter pqrs-letter-${letter.toLowerCase()}`}>{letter}</span>
                    <span className="pqrs-step">Principle 0{index + 1}</span>
                  </div>
                  <span className={`pqrs-card-icon pqrs-card-icon-${letter.toLowerCase()}`}>
                    <Icon size={16} aria-hidden="true" />
                  </span>
                </div>
                <div className="pqrs-card-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="pqrs-card-watermark" aria-hidden="true">{letter}</span>
              </article>
            ))}
          </div>
          <div className="documentation-note">
            <FlaskConical size={18} aria-hidden="true" />
            <p>
              Request product TDS and safety documents for application and handling details.
            </p>
            <Link href="#contact">Request documents <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section company-section" id="about" aria-labelledby="company-title">
        <div className="container company-layout">
          <div className="company-image-placeholder" role="img" aria-label="Image placeholder: PolyTreat team or manufacturing facility">
            <span className="company-image-orbit company-image-orbit-outer" />
            <span className="company-image-orbit company-image-orbit-inner" />
            <span className="company-image-mark"><Factory size={32} strokeWidth={1.5} aria-hidden="true" /></span>
            <span className="company-image-caption">Image placeholder: team or facility</span>
          </div>

          <div className="company-copy">
            <span className="eyebrow eyebrow-dark">About PolyTreat</span>
            <h2 id="company-title">A chemistry partner for plants, projects, and everyday spaces.</h2>
            <p>
              PolyTreat Chemicals Pvt. Ltd. works across industrial water treatment,
              construction chemistry, and cleaning products under the V-Klin brand.
            </p>
            <div className="company-locations" id="locations">
              <span className="company-locations-label">Locations</span>
              <div className="company-location-list">
                <div className="company-location">
                  <MapPin size={17} aria-hidden="true" />
                  <span>Tarapur MIDC</span>
                </div>
                <div className="company-location">
                  <MapPin size={17} aria-hidden="true" />
                  <span>Goregaon, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow eyebrow-light">Start a conversation</span>
            <h2 id="contact-title">Let’s talk about your application.</h2>
            <p>Tell us about your system or facility, and we’ll direct your enquiry to the right team.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-action-card contact-email" href="mailto:polyind2@gmail.com">
              <span className="contact-action-icon"><Mail size={18} aria-hidden="true" /></span>
              <span className="contact-action-copy">
                <span>Email enquiries</span>
                <strong>polyind2@gmail.com</strong>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="contact-action-card contact-phone" href="tel:+919820235995">
              <span className="contact-action-icon"><Phone size={18} aria-hidden="true" /></span>
              <span className="contact-action-copy">
                <span>Technical &amp; sales</span>
                <strong>+91 98202 35995</strong>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
