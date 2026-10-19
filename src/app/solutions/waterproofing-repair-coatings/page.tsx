import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrickWall,
  Droplets,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Waterproofing, Repair & Coatings | PolyTreat Chemicals",
  description:
    "Explore PolyTreat construction-chemistry categories for waterproofing, cement and concrete repair, and protective coatings.",
};

const productAreas = [
  {
    number: "01",
    icon: Droplets,
    title: "Waterproofing systems",
    description:
      "Coating and membrane categories for roofs, terraces, walls, foundations, and other building surfaces.",
    examples: "Profile examples: POLYPROOF-SPR · POLYROOF-ACE",
    contexts: ["Roofs & terraces", "Walls", "Foundations"],
  },
  {
    number: "02",
    icon: BrickWall,
    title: "Concrete repair & bonding",
    description:
      "Polymer additives for cement and mortar work, including repair, patching, bonding, and related surface applications.",
    examples: "Profile examples: POLYBOND-SP · POLYBOND-SPR · POLYBOND-SPA",
    contexts: ["Concrete repair", "Mortar mixes", "Bonding"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Building-surface coatings",
    description:
      "Protective coating categories for exterior walls and other building surfaces, with product uses varying by substrate.",
    examples: "Profile examples: PROTEX 2000 · POLYROOF-ACR",
    contexts: ["Exterior surfaces", "Concrete", "Masonry"],
  },
];

export default function WaterproofingRepairCoatingsPage() {
  return (
    <main className="construction-detail-page">
      <section className="construction-chemistry-hero" aria-labelledby="waterproofing-title">
        <div className="container">
          <nav className="construction-chemistry-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <Link href="/solutions/construction-chemistry">Construction chemistry</Link>
            <span aria-hidden="true">/</span>
            <span>Waterproofing, repair &amp; coatings</span>
          </nav>

          <div className="construction-chemistry-hero-layout">
            <div className="construction-chemistry-hero-copy">
              <span className="eyebrow"><ShieldCheck size={15} aria-hidden="true" /> Construction &amp; surface protection</span>
              <h1 id="waterproofing-title">Waterproofing, repair and protective coatings.</h1>
              <p>
                Explore product categories for keeping water out, repairing cement-based
                surfaces, and protecting building exteriors.
              </p>
              <div className="construction-chemistry-hero-actions">
                <Link className="btn btn-accent" href="#product-areas">
                  Explore product areas <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="construction-chemistry-text-link" href="/contact#contact-form">
                  Discuss a requirement
                </Link>
              </div>
            </div>

            <div className="construction-chemistry-visual" role="img" aria-label="Image placeholder for waterproofing and building-surface applications">
              <span className="construction-visual-orbit construction-visual-orbit-outer" />
              <span className="construction-visual-orbit construction-visual-orbit-inner" />
              <span className="construction-visual-icon"><Layers3 size={31} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="construction-visual-label">Building surfaces</span>
              <span className="construction-visual-caption">Image placeholder · waterproofing &amp; repair</span>
            </div>
          </div>
        </div>
      </section>

      <section className="construction-detail-section" id="product-areas" aria-labelledby="product-areas-title">
        <div className="container">
          <div className="construction-areas-heading">
            <div>
              <span className="eyebrow">Explore by application</span>
              <h2 id="product-areas-title">Choose the category by the surface job.</h2>
            </div>
            <p>
              Waterproofing, concrete repair, and exterior coating products serve
              different purposes. The substrate and project conditions inform selection.
            </p>
          </div>

          <div className="construction-detail-grid">
            {productAreas.map(({ number, icon: Icon, title, description, examples, contexts }) => (
              <article className="construction-detail-card" key={title}>
                <div className="construction-card-topline">
                  <span>{number}</span>
                  <span className="construction-card-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="construction-detail-examples">{examples}</p>
                <ul className="construction-context-list" aria-label={`${title} applications`}>
                  {contexts.map((context) => <li key={context}>{context}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <p className="construction-detail-note">
            Product names above are examples from the supplied construction profile.
            Refer to the relevant product information for specification and use details.
          </p>
          <Link className="construction-detail-back" href="/solutions/construction-chemistry">
            Back to construction chemistry <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="construction-contact-band" aria-labelledby="waterproofing-contact-title">
        <div className="container construction-contact-inner">
          <div>
            <span className="eyebrow">Planning a surface or repair project?</span>
            <h2 id="waterproofing-contact-title">Share the substrate and application.</h2>
            <p>That context helps the team direct your product enquiry.</p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your requirement <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
