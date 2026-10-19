import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Factory,
  Gauge,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Water Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial water-treatment categories for boiler, cooling-water, reverse-osmosis, and effluent systems.",
};

const waterSystems = [
  {
    number: "01",
    icon: Gauge,
    title: "Boiler water",
    description:
      "Water-treatment categories for industrial boiler and steam-generation systems.",
    href: "/solutions/boiler-cooling-water",
    linkText: "Explore system details",
  },
  {
    number: "02",
    icon: Waves,
    title: "Cooling water",
    description:
      "Categories for recirculating cooling-water systems used in plant operations.",
    href: "/solutions/boiler-cooling-water",
    linkText: "Explore system details",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Reverse osmosis",
    description:
      "Product categories for membrane-based reverse-osmosis water systems.",
    href: "/solutions/ro-effluent",
    linkText: "Explore system details",
  },
  {
    number: "04",
    icon: Factory,
    title: "Effluent treatment",
    description:
      "Treatment categories for industrial wastewater processes and related systems.",
    href: "/solutions/ro-effluent",
    linkText: "Explore system details",
  },
];

export default function IndustrialWaterPage() {
  return (
    <main className="industrial-water-page">
      <section className="industrial-water-hero" aria-labelledby="industrial-water-title">
        <div className="container">
          <nav className="industrial-water-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <span>Industrial water</span>
          </nav>

          <div className="industrial-water-hero-layout">
            <div className="industrial-water-hero-copy">
              <span className="eyebrow"><Droplets size={15} aria-hidden="true" /> Industrial water treatment</span>
              <h1 id="industrial-water-title">Water treatment for the systems that keep plants running.</h1>
              <p>
                Explore PolyTreat&apos;s broad water-treatment categories across boiler,
                cooling-water, reverse-osmosis, and effluent systems.
              </p>
              <div className="industrial-water-hero-actions">
                <Link className="btn btn-accent" href="#water-systems">
                  Explore by system <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="industrial-water-text-link" href="/contact#contact-form">
                  Discuss an application
                </Link>
              </div>
            </div>

            <div className="industrial-water-visual" role="img" aria-label="Image placeholder for industrial water-treatment systems">
              <span className="industrial-water-visual-orbit industrial-water-visual-orbit-outer" />
              <span className="industrial-water-visual-orbit industrial-water-visual-orbit-inner" />
              <span className="industrial-water-visual-icon"><Droplets size={31} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="industrial-water-visual-label">Plant water systems</span>
              <span className="industrial-water-visual-caption">Image placeholder · water-treatment application</span>
            </div>
          </div>
        </div>
      </section>

      <section className="industrial-water-systems" id="water-systems" aria-labelledby="water-systems-title">
        <div className="container">
          <div className="industrial-water-section-heading">
            <div>
              <span className="eyebrow">Explore by system</span>
              <h2 id="water-systems-title">Industrial water categories.</h2>
            </div>
            <p>
              Start with the system type to find the related product-family overview.
              The system and water conditions help define the relevant category.
            </p>
          </div>

          <div className="industrial-water-grid">
            {waterSystems.map(({ number, icon: Icon, title, description, href, linkText }) => (
              <article className="industrial-water-card" key={title}>
                <div className="industrial-water-card-topline">
                  <span>{number}</span>
                  <span className="industrial-water-card-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="industrial-water-card-link" href={href}>
                  {linkText} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industrial-water-contact" aria-labelledby="industrial-water-contact-title">
        <div className="container industrial-water-contact-inner">
          <div>
            <span className="eyebrow">Have a system or site in mind?</span>
            <h2 id="industrial-water-contact-title">Share the application with our team.</h2>
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
