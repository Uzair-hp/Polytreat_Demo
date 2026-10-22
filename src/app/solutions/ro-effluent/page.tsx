import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Factory,
  Filter,
} from "lucide-react";
import { industrialAnchors, type IndustrialSystemId } from "@/data/industrialWater";

export const metadata: Metadata = {
  title: "RO & Effluent Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat product categories for reverse-osmosis membrane systems and industrial effluent treatment.",
};

const treatmentAreas: { id: IndustrialSystemId; number: string; icon: typeof Filter; title: string; description: string; contexts: string[] }[] = [
  {
    id: "ro",
    number: "01",
    icon: Filter,
    title: "Reverse-osmosis systems",
    description:
      "The product catalogue lists categories for membrane scale control, cleaning, and microbiological control in RO systems.",
    contexts: ["Membrane systems", "Scale control", "Membrane cleaning"],
  },
  {
    id: "effluent",
    number: "02",
    icon: Factory,
    title: "Effluent treatment",
    description:
      "Effluent-treatment categories include products described for coagulation, flocculation, and sludge dewatering processes.",
    contexts: ["Process wastewater", "Particle separation", "Sludge handling"],
  },
];

export default function RoEffluentPage() {
  return (
    <main className="ro-effluent-page">
      <section className="industrial-water-hero" aria-labelledby="ro-effluent-title">
        <div className="container">
          <nav className="industrial-water-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <Link href="/solutions/industrial-water">Industrial water</Link>
            <span aria-hidden="true">/</span>
            <span>RO &amp; effluent</span>
          </nav>

          <div className="industrial-water-hero-layout">
            <div className="industrial-water-hero-copy">
              <span className="eyebrow"><Droplets size={15} aria-hidden="true" /> Membrane &amp; wastewater systems</span>
              <h1 id="ro-effluent-title">RO and effluent treatment categories.</h1>
              <p>
                Explore product categories for reverse-osmosis membrane systems
                and industrial wastewater treatment processes.
              </p>
              <div className="industrial-water-hero-actions">
                <Link className="btn btn-accent" href="#treatment-areas">
                  Explore treatment areas <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="industrial-water-text-link" href="/contact#contact-form">
                  Discuss an application
                </Link>
              </div>
            </div>

            <figure className="industrial-water-figure">
              <Image
                src="/images/home/portfolio-ro-effluent.webp"
                alt="Industrial effluent treatment plant clarifiers and biological aeration sedimentation basins"
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
              />
              <figcaption className="industrial-water-figure-label">RO &amp; effluent systems</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="boiler-cooling-systems" id="treatment-areas" aria-labelledby="treatment-areas-title">
        <div className="container">
          <div className="industrial-water-section-heading">
            <div>
              <span className="eyebrow">Explore by process</span>
              <h2 id="treatment-areas-title">Two distinct water-treatment applications.</h2>
            </div>
            <p>
              RO membrane systems and effluent processes have different treatment
              needs. Product selection depends on the system and process conditions.
            </p>
          </div>

          <div className="boiler-cooling-grid">
            {treatmentAreas.map(({ id, number, icon: Icon, title, description, contexts }) => (
              <article className="boiler-cooling-card" key={id} id={industrialAnchors[id]}>
                <div className="industrial-water-card-topline">
                  <span>{number}</span>
                  <span className="industrial-water-card-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="boiler-cooling-contexts" aria-label={`${title} categories`}>
                  {contexts.map((context) => <li key={context}>{context}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <p className="ro-effluent-note">
            The catalogue describes broad product categories; confirm product fit
            against the specific system and its operating conditions.
          </p>
          <Link className="boiler-cooling-overview-link" href="/solutions/industrial-water">
            Back to industrial water treatment <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="industrial-water-contact" aria-labelledby="ro-effluent-contact-title">
        <div className="container industrial-water-contact-inner">
          <div>
            <span className="eyebrow">Have an RO or effluent application?</span>
            <h2 id="ro-effluent-contact-title">Share the process context with our team.</h2>
            <p>Include the system type and the information you need to help direct your enquiry.</p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your application <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
