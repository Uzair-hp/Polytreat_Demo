import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Boiler & Cooling Water Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's boiler-water and recirculating cooling-water treatment categories for industrial systems.",
};

const systems = [
  {
    number: "01",
    icon: Gauge,
    title: "Boiler water",
    description:
      "Boilers heat water to produce steam. Treatment categories for these systems are considered in the context of water chemistry and operating conditions.",
    contexts: ["Steam generation", "Boiler-water systems", "Plant operations"],
  },
  {
    number: "02",
    icon: Waves,
    title: "Cooling water",
    description:
      "Cooling loops circulate water to carry heat away from equipment. System design and water quality shape the operating context.",
    contexts: ["Recirculating systems", "Open loops", "Closed loops"],
  },
];

export default function BoilerCoolingWaterPage() {
  return (
    <main className="boiler-cooling-page">
      <section className="industrial-water-hero" aria-labelledby="boiler-cooling-title">
        <div className="container">
          <nav className="industrial-water-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <Link href="/solutions/industrial-water">Industrial water</Link>
            <span aria-hidden="true">/</span>
            <span>Boiler &amp; cooling water</span>
          </nav>

          <div className="industrial-water-hero-layout">
            <div className="industrial-water-hero-copy">
              <span className="eyebrow"><Waves size={15} aria-hidden="true" /> Industrial water systems</span>
              <h1 id="boiler-cooling-title">Boiler &amp; cooling-water treatment.</h1>
              <p>
                Explore PolyTreat&apos;s treatment categories for steam-generation boilers
                and recirculating cooling-water systems.
              </p>
              <div className="industrial-water-hero-actions">
                <Link className="btn btn-accent" href="#system-overview">
                  Explore the systems <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="industrial-water-text-link" href="/contact#contact-form">
                  Discuss an application
                </Link>
              </div>
            </div>

            <div className="industrial-water-visual" role="img" aria-label="Image placeholder for boiler and cooling-water systems">
              <span className="industrial-water-visual-orbit industrial-water-visual-orbit-outer" />
              <span className="industrial-water-visual-orbit industrial-water-visual-orbit-inner" />
              <span className="industrial-water-visual-icon"><Gauge size={31} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="industrial-water-visual-label">Boiler &amp; cooling water</span>
              <span className="industrial-water-visual-caption">Image placeholder · industrial systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="boiler-cooling-systems" id="system-overview" aria-labelledby="system-overview-title">
        <div className="container">
          <div className="industrial-water-section-heading">
            <div>
              <span className="eyebrow">Explore by system</span>
              <h2 id="system-overview-title">Two systems, distinct operating contexts.</h2>
            </div>
            <p>
              Start with the system type. Water chemistry and operating conditions
              inform the technical discussion for each application.
            </p>
          </div>

          <div className="boiler-cooling-grid">
            {systems.map(({ number, icon: Icon, title, description, contexts }) => (
              <article className="boiler-cooling-card" key={title}>
                <div className="industrial-water-card-topline">
                  <span>{number}</span>
                  <span className="industrial-water-card-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="boiler-cooling-contexts" aria-label={`${title} contexts`}>
                  {contexts.map((context) => <li key={context}>{context}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <Link className="boiler-cooling-overview-link" href="/solutions/industrial-water">
            Back to industrial water treatment <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="industrial-water-contact" aria-labelledby="boiler-cooling-contact-title">
        <div className="container industrial-water-contact-inner">
          <div>
            <span className="eyebrow">Working with a boiler or cooling loop?</span>
            <h2 id="boiler-cooling-contact-title">Share the system context with our team.</h2>
            <p>Include the system type and operating context to help direct your enquiry.</p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your application <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
