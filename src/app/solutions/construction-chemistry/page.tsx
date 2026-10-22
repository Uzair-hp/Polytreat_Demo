import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Droplets,
  Layers3,
  Link2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Chemistry & Surface Protection | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's construction chemistry categories for waterproofing, concrete repair, protective floors and surfaces, and joint sealing.",
};

const constructionAreas = [
  {
    number: "01",
    icon: Droplets,
    title: "Waterproofing & coatings",
    description:
      "Categories for waterproofing and protective coatings across building and concrete surfaces.",
    href: "/solutions/waterproofing-repair-coatings",
    contexts: ["Roofs & terraces", "Walls", "Foundations", "Waterproofing coatings"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Concrete repair & bonding",
    description:
      "Cement and mortar additive categories for repair, bonding, patching, and related surface work.",
    href: "/solutions/waterproofing-repair-coatings",
    contexts: ["Concrete repair", "Mortar additives", "Bonding", "Surface work"],
  },
  {
    number: "03",
    icon: Building2,
    title: "Flooring & surface protection",
    description:
      "Protective coating and flooring categories for industrial floors and other built surfaces.",
    href: "/solutions/flooring-joint-sealing",
    contexts: ["Industrial floors", "Protective coatings", "Metal surfaces", "Rust treatment"],
  },
  {
    number: "04",
    icon: Link2,
    title: "Sealants & joints",
    description:
      "Sealant categories for joints, cracks, and other building-surface applications.",
    href: "/solutions/flooring-joint-sealing",
    contexts: ["Joint sealing", "Crack sealing", "Building surfaces"],
  },
];

export default function ConstructionChemistryPage() {
  return (
    <main className="construction-chemistry-page">
      <section className="construction-chemistry-hero" aria-labelledby="construction-chemistry-title">
        <div className="container">
          <nav className="construction-chemistry-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <span>Construction chemistry</span>
          </nav>

          <div className="construction-chemistry-hero-layout">
            <div className="construction-chemistry-hero-copy">
              <span className="eyebrow"><ShieldCheck size={15} aria-hidden="true" /> Construction & surface protection</span>
              <h1 id="construction-chemistry-title">Construction chemistry for waterproofing, repair and protected surfaces.</h1>
              <p>
                Explore PolyTreat&apos;s construction categories across waterproofing,
                concrete repair, industrial flooring, protective coatings, and sealants.
              </p>
              <div className="construction-chemistry-hero-actions">
                <Link className="btn btn-accent" href="#construction-areas">
                  Explore application areas <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="construction-chemistry-text-link" href="/contact#contact-form">
                  Discuss a requirement
                </Link>
              </div>
            </div>

            <div className="construction-hero-figures">
              <figure className="construction-hero-figure">
                <Image
                  src="/images/home/solution-construction-waterproofing.webp"
                  alt="Workers applying a liquid protective coating to a concrete industrial floor with a roller"
                  fill
                  priority
                  sizes="(max-width: 760px) 50vw, 220px"
                />
                <figcaption>Protective coatings on concrete</figcaption>
              </figure>
              <figure className="construction-hero-figure">
                <Image
                  src="/images/home/portfolio-waterproofing.jpg"
                  alt="Elastomeric liquid coating being roller-applied to a flat roof terrace"
                  fill
                  priority
                  sizes="(max-width: 760px) 50vw, 220px"
                />
                <figcaption>Roof &amp; terrace waterproofing</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="construction-areas-section" id="construction-areas" aria-labelledby="construction-areas-title">
        <div className="container">
          <div className="construction-areas-heading">
            <div>
              <span className="eyebrow">Explore by application</span>
              <h2 id="construction-areas-title">Different surfaces call for different categories.</h2>
            </div>
            <p>
              Browse the broad product groups by the type of construction or surface
              work involved. Site and substrate conditions shape product selection.
            </p>
          </div>

          <div className="construction-areas-grid">
            {constructionAreas.map(({ number, icon: Icon, title, description, href, contexts }) => (
              <article className="construction-area-card" key={title}>
                <div className="construction-card-topline">
                  <span>{number}</span>
                  <span className="construction-card-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="construction-context-list" aria-label={`${title} application categories`}>
                  {contexts.map((context) => <li key={context}>{context}</li>)}
                </ul>
                {href && (
                  <Link className="construction-area-link" href={href}>
                    Explore this area <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className="construction-portfolio-link-wrap">
            <Link className="construction-portfolio-link" href="/#portfolio-construction">
              Browse construction product families <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="construction-contact-band" aria-labelledby="construction-contact-title">
        <div className="container construction-contact-inner">
          <div>
            <span className="eyebrow">Have a project or surface in mind?</span>
            <h2 id="construction-contact-title">Share the application with our team.</h2>
            <p>Include the surface type and project context to help direct your enquiry.</p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your requirement <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
