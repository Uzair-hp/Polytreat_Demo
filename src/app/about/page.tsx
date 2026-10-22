import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { locationSites } from "@/data/locations";

export const metadata: Metadata = {
  title: "About Us | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "PolyTreat Chemicals has formulated and manufactured specialty industrial water, construction, and institutional care chemicals since 1987, from manufacturing facilities in Tarapur MIDC and Goregaon, Mumbai.",
  keywords:
    "about PolyTreat Chemicals, ISO 9001:2015 chemical manufacturer, Tarapur MIDC plant, Goregaon chemical unit, water treatment chemicals since 1987",
};

const glance = [
  { label: "Established", value: "1987, Mumbai" },
  { label: "Certifications", value: "ISO 9001:2015 · WHO-GMP reference · Private FDA reference · UKcert Eco-Friendly" },
  { label: "Manufacturing", value: "Tarapur MIDC · Goregaon (East), Mumbai" },
  { label: "Corporate office", value: "Goregaon (West), Mumbai" },
  { label: "Divisions", value: "Industrial water · Construction · V-Klin care" },
  { label: "Markets", value: "Across India, plus Middle East & South Africa exports" },
];

const credentials = [
  {
    value: "Since 1987",
    title: "Manufacturing since 1987",
    description: "Specialty chemistry formulated and produced in our own plants.",
  },
  {
    value: "ISO 9001:2015",
    title: "Certified quality system",
    description: "SMCS certified, AIAO-BAR USA accredited, covering both divisions.",
  },
  {
    value: "2 units",
    title: "Tarapur MIDC & Goregaon",
    description: "Heavy chemical and green-products manufacturing in Maharashtra.",
  },
  {
    value: "Exports",
    title: "Middle East & South Africa",
    description: "Specialty formulations supplied to international industrial markets.",
  },
];

const milestones = [
  {
    era: "1987",
    title: "Founded in Mumbai",
    description:
      "PolyTreat Chemicals begins as a manufacturer of industrial water-treatment chemistry.",
  },
  {
    era: "Manufacturing",
    title: "Tarapur MIDC unit",
    description:
      "Heavy chemical manufacturing is established at Tarapur MIDC, Palghar district, adding capacity for the industrial water and process chemical ranges.",
  },
  {
    era: "Quality",
    title: "ISO 9001:2015 certification",
    description:
      "The quality management system is certified to ISO 9001:2015 by SMCS, accredited by AIAO-BAR USA, covering the manufacture of water-treatment and hygiene chemicals.",
  },
  {
    era: "Care products",
    title: "V-Klin range",
    description:
      "The institutional and home-care cleaning range is developed at the Goregaon (East) green-products division.",
  },
  {
    era: "Exports",
    title: "Middle East & South Africa",
    description:
      "Specialty formulations begin shipping to industrial buyers in the Middle East and South Africa.",
  },
];

const brands = [
  {
    icon: Droplets,
    number: "01",
    eyebrow: "Industrial water & process",
    title: "Polytreat & Polycide",
    description:
      "Water-treatment and biocide ranges for boilers, cooling towers, RO systems, effluent, and process applications.",
    categories: ["Boiler water", "Cooling water", "RO & effluent", "Biocides"],
    tone: "blue",
  },
  {
    icon: Layers3,
    number: "02",
    eyebrow: "Construction chemistry",
    title: "Polyproof, Polybond, Polyroof & Polygard",
    description:
      "Waterproofing membranes, protective coatings, concrete-repair systems, flooring, and sealants for built structures.",
    categories: ["Waterproofing", "Coatings", "Flooring", "Sealants"],
    tone: "slate",
  },
  {
    icon: Leaf,
    number: "03",
    eyebrow: "Institutional & home care",
    title: "V-Klin",
    description:
      "Cleaning products for hotels, hospitals, facilities, and homes — floor, surface, hand, dish, glass, and washroom care.",
    categories: ["Floor & surface", "Hand & dish", "Glass & toilet"],
    tone: "green",
  },
  {
    icon: FlaskConical,
    number: "04",
    eyebrow: "Flagship specialty",
    title: "Polydor-WS · Corosil · Polyklin",
    description:
      "High-performance single-problem formulations: odor neutralization, rust conversion, and HVAC coil cleaning.",
    categories: ["Odor control", "Rust converter", "Coil cleaner"],
    tone: "blue",
  },
];

const facilities = [
  { icon: Building2, site: locationSites[0], tone: "" },
  { icon: Leaf, site: locationSites[1], tone: "infra-card-green" },
  { icon: Factory, site: locationSites[2], tone: "" },
];

const rdPoints = [
  "In-house laboratory with day-to-day batch testing",
  "Raw-material inspection before production",
  "Statistical process control across manufacturing",
  "Multipurpose pilot reactor for formulation trials and system simulation",
  "Custom batch manufacturing for specific system requirements",
  "Technical consultation on dosing and application",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="container about-hero-inner">
          <div>
            <span className="eyebrow eyebrow-dark">About PolyTreat</span>
            <h1 id="about-title">Applied chemistry, manufactured in-house since 1987.</h1>
            <p className="about-hero-lead">
              PolyTreat Chemicals Pvt. Ltd. formulates and produces specialty chemicals for
              industrial water systems, construction projects, and everyday facility care — from
              two manufacturing units in Maharashtra and a corporate office in Mumbai.
            </p>
            <ul className="about-facts">
              <li><BadgeCheck size={15} aria-hidden="true" /> ISO 9001:2015 certified</li>
              <li><Factory size={15} aria-hidden="true" /> 2 production units</li>
                <li><Droplets size={15} aria-hidden="true" /> Manufacturing since 1987</li>
              <li><Leaf size={15} aria-hidden="true" /> V-Klin care range</li>
            </ul>
          </div>

          <aside className="about-glance" aria-label="PolyTreat at a glance">
            <div className="about-glance-heading">
              <span className="about-glance-mark"><Building2 size={19} aria-hidden="true" /></span>
              <div>
                <span>Company profile</span>
                <h2>PolyTreat at a glance</h2>
              </div>
            </div>
            <ul className="about-glance-list">
              {glance.map(({ label, value }) => (
                <li key={label}>
                  <span className="about-glance-label">{label}</span>
                  <span className="about-glance-value">{value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <div className="trust-proof-bar">
        <div className="container">
          <div className="trust-proof-grid">
            {credentials.map(({ value, title, description }) => (
              <div className="trust-proof-item" key={value}>
                <span className="trust-proof-value">{value}</span>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section about-band" id="story" aria-labelledby="story-title">
        <div className="container about-story-grid">
          <div className="company-copy">
            <span className="eyebrow eyebrow-dark">Our story</span>
            <h2 id="story-title">A manufacturer first, since the beginning.</h2>
            <p>
              PolyTreat Chemicals Pvt. Ltd. — also known as Polytreat Chemical Industries — has
              manufactured specialty chemistry from Mumbai since 1987. Two divisions run under a
              single quality system: heavy industrial water and process chemicals, and the V-Klin
              range of institutional and home-care products.
            </p>
            <p>
              Everything PolyTreat supplies is formulated and produced in its own plants. The
              range is built around performance at practical dosages, backed by clear technical
              documentation and a direct conversation with the people who make the products.
            </p>
            <Link className="text-link" href="/#solutions">
              Explore our solution areas <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ol className="about-timeline">
            {milestones.map(({ era, title, description }) => (
              <li key={title}>
                <span className="about-era">{era}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="brands" aria-labelledby="brands-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow eyebrow-dark">Brand architecture</span>
              <h2 id="brands-title">Four ranges, one manufacturer.</h2>
            </div>
            <p>
              PolyTreat&apos;s product names map to the work they do — industrial water chemistry,
              construction protection, everyday care, and single-problem specialty formats.
            </p>
          </div>

          <div className="portfolio-grid">
            {brands.map(({ icon: Icon, number, eyebrow, title, description, categories, tone }) => (
              <article className={`portfolio-card portfolio-card-${tone}`} key={title}>
                <div className={`portfolio-image-placeholder portfolio-image-${tone}`} role="img" aria-label={`${title} range`}>
                  <span className="portfolio-image-mark"><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span>
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
        </div>
      </section>

      <section className="section about-band-alt" id="infrastructure" aria-labelledby="infra-title">
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="eyebrow eyebrow-dark">Infrastructure</span>
            <h2 id="infra-title">Where PolyTreat makes its products.</h2>
            <p>Two manufacturing units and a corporate office, all within Maharashtra.</p>
          </div>

          <div className="infra-grid">
              {facilities.map(({ icon: Icon, site, tone }) => (
                <article className={`infra-card ${tone}`} key={site.id}>
                  <span className="infra-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className="infra-kind">{site.kind}</span>
                  <h3>{site.title}</h3>
                  <address>{site.addressLines.join("\n")}</address>
                  <span className="infra-note"><MapPin size={14} aria-hidden="true" /> {site.note}</span>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="section" id="quality" aria-labelledby="rd-title">
        <div className="container about-rd-layout">
          <div className="company-copy">
            <span className="eyebrow eyebrow-dark">Research &amp; development</span>
            <h2 id="rd-title">Development and quality control under one roof.</h2>
            <p>
              Product development happens alongside manufacturing: new formulations are trialled
              on a multipurpose pilot reactor before they reach production scale, and routine
              batches move through laboratory checks at every stage.
            </p>
            <p>
              The same discipline carries the ISO 9001:2015 certification that covers both
              divisions — the framework behind it is the PQRS approach of Performance, Quality,
              Reliability, and Service.
            </p>
            <Link className="text-link" href="/quality#pqrs">
              Read about the PQRS framework <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="about-rd-panel">
            <div className="vklin-panel-heading">
              <span className="about-rd-mark"><FlaskConical size={19} aria-hidden="true" /></span>
              <div>
                <span>In-house capability</span>
                <h3>How quality is maintained</h3>
              </div>
            </div>
            <ul className="about-rd-list">
              {rdPoints.map((point) => (
                <li key={point}><Check size={16} aria-hidden="true" /> {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-band" id="certification" aria-labelledby="cert-title">
        <div className="container cert-layout">
          <a className="cert-figure" href="/iso-9001-2015-quality-certificate.jpeg" target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/iso-9001-2015-quality-certificate.jpeg"
              alt="PolyTreat Chemicals ISO 9001:2015 quality management certificate"
            />
          </a>
          <div className="company-copy">
            <span className="eyebrow eyebrow-dark">Certification</span>
            <h2 id="cert-title">ISO 9001:2015, certified for both divisions.</h2>
            <p>
              Scope: manufacturing of water treatment chemicals and homecare, hygienic &amp;
              industrial cleaning chemicals. The certificate is issued by SMCS and accredited by
              AIAO-BAR USA. Select the certificate to view it in full resolution.
            </p>
            <div className="cert-actions">
              <Link className="btn btn-primary" href="/certifications">
                View all certifications <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="btn btn-outline-dark" href="/contact">
                Request documents <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="about-contact-title">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow eyebrow-light">Start a conversation</span>
            <h2 id="about-contact-title">Let&apos;s talk about your application.</h2>
            <p>Tell us about your system or facility, and we&apos;ll direct your enquiry to the right team.</p>
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
