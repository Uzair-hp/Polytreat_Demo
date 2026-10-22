import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Droplets,
  Factory,
  Filter,
  Gauge,
  Waves,
} from "lucide-react";
import {
  industrialCategoryGroups,
  industrialChallenges,
  industrialExtraFamilies,
  industrialSystems,
  type IndustrialSystemId,
} from "@/data/industrialWater";

export const metadata: Metadata = {
  title: "Industrial Water Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial water treatment categories for boiler, cooling-water, reverse-osmosis, and effluent systems, plus the wider industrial range.",
};

const systemIcons: Record<IndustrialSystemId, LucideIcon> = {
  boiler: Gauge,
  cooling: Waves,
  ro: Filter,
  effluent: Factory,
};

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
                PolyTreat&apos;s industrial range covers the treatment categories used across
                boiler, cooling-water, reverse-osmosis, and effluent systems. Start with
                the system you are running, then narrow down to the category that
                matches the problem.
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

            <figure className="industrial-water-figure">
              <Image
                src="/images/home/solution-water-cooling-tower.jpg"
                alt="Industrial cooling tower water treatment and recirculating pipe manifold"
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
              />
              <figcaption className="industrial-water-figure-label">Plant water systems</figcaption>
            </figure>
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
            {industrialSystems.map(({ id, number, title, description, href, linkText }) => {
              const Icon = systemIcons[id];
              return (
                <article className="industrial-water-card" key={id}>
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="industrial-water-challenges" id="system-challenges" aria-labelledby="system-challenges-title">
        <div className="container">
          <div className="industrial-water-section-heading">
            <div>
              <span className="eyebrow">What the system has to manage</span>
              <h2 id="system-challenges-title">Every system has its own set of problems.</h2>
            </div>
            <p>
              Treatment starts with what the system is dealing with. These are the
              conditions each water system has to manage, and the context our
              categories are matched against.
            </p>
          </div>

          <div className="industrial-water-challenge-grid">
            {industrialChallenges.map(({ id, title, manages }) => {
              const Icon = systemIcons[id];
              return (
                <article className="industrial-water-challenge-card" key={id}>
                  <h3>
                    <span className="industrial-water-challenge-icon"><Icon size={18} aria-hidden="true" /></span>
                    {title}
                  </h3>
                  <ul className="industrial-water-challenge-list">
                    {manages.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industrial-water-categories" id="treatment-categories" aria-labelledby="treatment-categories-title">
        <div className="container">
          <div className="industrial-water-section-heading">
            <div>
              <span className="eyebrow">Treatment categories</span>
              <h2 id="treatment-categories-title">Categories in the industrial range.</h2>
            </div>
            <p>
              The categories PolyTreat works with, grouped by the system they are
              used in. Each one links to the matching system overview.
            </p>
          </div>

          <div className="industrial-water-category-grid">
            {industrialCategoryGroups.map(({ id, title, summary, href, categories }) => (
              <article className="industrial-water-category-card" key={id}>
                <h3>{title}</h3>
                <p>{summary}</p>
                <ul className="boiler-cooling-contexts" aria-label={`${title} categories`}>
                  {categories.map((category) => <li key={category}>{category}</li>)}
                </ul>
                <Link className="industrial-water-category-link" href={href}>
                  Open the {title.toLowerCase()} overview <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <p className="ro-effluent-note">
            Category names follow PolyTreat&apos;s published industrial product profile.
            Specific products, current availability, and technical data are confirmed
            for each application.
          </p>
        </div>
      </section>

      <section className="industrial-water-extra" id="other-categories" aria-labelledby="other-categories-title">
        <div className="container">
          <div className="industrial-water-section-heading">
            <div>
              <span className="eyebrow">Wider industrial range</span>
              <h2 id="other-categories-title">Also in the industrial catalogue.</h2>
            </div>
            <p>
              These families come from the same industrial product profile and sit
              outside the four system pages above. Share the application and we will
              confirm what is currently available and what documentation applies.
            </p>
          </div>

          <ul className="industrial-water-extra-list">
            {industrialExtraFamilies.map((family) => (
              <li className="industrial-water-extra-row" key={family.title}>
                <div>
                  <h3>{family.title}</h3>
                  <p>{family.description}</p>
                </div>
                <ul className="boiler-cooling-contexts" aria-label={`${family.title} categories`}>
                  {family.categories.map((category) => <li key={category}>{category}</li>)}
                </ul>
              </li>
            ))}
          </ul>

          <Link className="boiler-cooling-overview-link" href="/specialty">
            Explore the specialty products <ArrowRight size={16} aria-hidden="true" />
          </Link>

          <Link className="boiler-cooling-overview-link" href="/contact#contact-form">
            Discuss another industrial application <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="industrial-water-contact" aria-labelledby="industrial-water-contact-title">
        <div className="container industrial-water-contact-inner">
          <div>
            <span className="eyebrow">Have a system or site in mind?</span>
            <h2 id="industrial-water-contact-title">Share the application with our team.</h2>
            <p>
              Include the system type, the water analysis you have, and the operating
              conditions so we can point you to the right category.
            </p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your application <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
