import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Layers3,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries & Applications | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's application areas across process and manufacturing operations, utilities and infrastructure, and facilities and institutions.",
};

const industryAreas = [
  {
    id: "process-manufacturing",
    number: "01",
    icon: Factory,
    eyebrow: "Process & manufacturing",
    title: "Water systems within plant operations.",
    description:
      "Industrial water-treatment categories cover boiler, cooling-water, reverse-osmosis, and effluent systems used across process operations.",
    contexts: ["Boiler systems", "Cooling water", "RO systems", "Effluent treatment"],
    link: "/#portfolio",
    linkLabel: "Browse related solutions",
  },
  {
    id: "utilities-infrastructure",
    number: "02",
    icon: Layers3,
    eyebrow: "Utilities & infrastructure",
    title: "Water services and built environments.",
    description:
      "Water and building services sit alongside construction applications such as waterproofing, concrete repair, protective coatings, flooring, and joints.",
    contexts: ["Building water services", "Waterproofing", "Concrete repair", "Protective surfaces"],
    link: "/#portfolio",
    linkLabel: "Browse related solutions",
  },
  {
    id: "facilities-institutions",
    number: "03",
    icon: Building2,
    eyebrow: "Facilities & institutions",
    title: "Cleaning for shared and everyday spaces.",
    description:
      "The V-Klin range brings home and facility-care cleaning categories together for workplaces, institutions, and other shared spaces.",
    contexts: ["Workplaces", "Institutions", "Shared facilities", "Homes"],
    link: "/vklin",
    linkLabel: "Explore V-Klin care",
  },
];

export default function IndustriesPage() {
  return (
    <main className="industries-page">
      <section className="industries-page-hero" aria-labelledby="industries-page-title">
        <div className="container">
          <nav className="industries-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Industries</span>
          </nav>

          <div className="industries-hero-layout">
            <div className="industries-hero-copy">
              <span className="eyebrow"><Waves size={15} aria-hidden="true" /> Industries & applications</span>
              <h1 id="industries-page-title">Chemistry for plants, infrastructure, and shared facilities.</h1>
              <p>
                Explore PolyTreat across process operations, utilities and infrastructure,
                and the facilities where people work and live.
              </p>
              <Link className="btn btn-accent" href="#industry-areas">
                Explore application areas <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="industries-hero-visual" role="img" aria-label="Image placeholder for manufacturing, infrastructure, and facility environments">
              <span className="industries-visual-orbit industries-visual-orbit-outer" />
              <span className="industries-visual-orbit industries-visual-orbit-inner" />
              <span className="industries-visual-icon"><Factory size={30} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="industries-visual-label">Application environments</span>
              <span className="industries-visual-caption">Image placeholder · industry photography</span>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-area-section" id="industry-areas" aria-labelledby="industry-areas-title">
        <div className="container">
          <div className="industries-section-heading">
            <div>
              <span className="eyebrow">Where our ranges fit</span>
              <h2 id="industry-areas-title">Start with the operating environment.</h2>
            </div>
            <p>
              Different sites have different needs. Browse the broad application areas
              and follow the link to the related product range.
            </p>
          </div>

          <div className="industries-area-grid">
            {industryAreas.map(({ id, number, icon: Icon, eyebrow, title, description, contexts, link, linkLabel }) => (
              <article className="industries-area-card" id={id} key={id}>
                <div className="industries-card-topline">
                  <span className="industries-card-number">{number}</span>
                  <span className="industries-card-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <span className="industries-card-eyebrow">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="industries-context-list" aria-label={`${eyebrow} application categories`}>
                  {contexts.map((context) => <li key={context}>{context}</li>)}
                </ul>
                <Link className="industries-card-link" href={link}>
                  {linkLabel} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-contact-band" aria-labelledby="industries-contact-title">
        <div className="container industries-contact-inner">
          <div>
            <span className="eyebrow">Have a specific site or system in mind?</span>
            <h2 id="industries-contact-title">Tell us what you work with.</h2>
            <p>Share the application area and the team can direct your enquiry.</p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your application <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
