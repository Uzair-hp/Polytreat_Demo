import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Waves } from "lucide-react";
import {
  industrySectors,
  environmentIcons,
  operatingEnvironments,
  productMapGroups,
} from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries & Applications | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial water, construction, specialty and V-Klin ranges, and the industries and settings each one is documented for.",
};

export default function IndustriesPage() {
  return (
    <main className="industries-page">
      <section className="industries-page-hero" aria-labelledby="industries-page-title">
        <div className="container">
          <nav className="industries-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Industries</span>
          </nav>

          <div className="industries-hero-layout">
            <div className="industries-hero-copy">
              <span className="eyebrow"><Waves size={15} aria-hidden="true" /> Industries &amp; applications</span>
              <h1 id="industries-page-title">Chemistry for plants, infrastructure, and shared facilities.</h1>
              <p>
                PolyTreat makes water treatment, construction and protection, specialty
                and cleaning chemistry. Start with the setting you work in, then follow
                the range that serves it.
              </p>
              <div className="industries-hero-actions">
                <Link className="btn btn-accent" href="#industry-areas">
                  Explore application areas <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="industries-hero-link" href="#product-map">
                  See the full range
                </Link>
              </div>
            </div>

            <div className="industries-hero-figures">
              <figure className="industries-hero-figure">
                <Image
                  src="/images/home/solution-water-cooling-tower.jpg"
                  alt="Industrial cooling tower water treatment and recirculating pipe manifold"
                  fill
                  priority
                  sizes="(max-width: 760px) 50vw, 220px"
                />
                <figcaption>Industrial water systems</figcaption>
              </figure>
              <figure className="industries-hero-figure">
                <Image
                  src="/images/home/everyday-cleaning-facility-care.webp"
                  alt="Facility cleaning staff working in a commercial building lobby with cleaning trolley and supplies"
                  fill
                  priority
                  sizes="(max-width: 760px) 50vw, 220px"
                />
                <figcaption>Facility &amp; institutional care</figcaption>
              </figure>
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
            {operatingEnvironments.map(({ id, number, eyebrow, title, description, contexts, link, linkLabel }) => {
              const Icon = environmentIcons[id];
              return (
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="industries-map-section" id="product-map" aria-labelledby="product-map-title">
        <div className="container">
          <div className="industries-section-heading">
            <div>
              <span className="eyebrow">The full range</span>
              <h2 id="product-map-title">Everything PolyTreat makes, in one place.</h2>
            </div>
            <p>
              Four groups cover the whole range. Follow any category to the page that
              sets out what it is for and where it is used.
            </p>
          </div>

          <div className="industries-map-grid">
            {productMapGroups.map((group) => (
              <article className="industries-map-card" key={group.id}>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>
                        {item.label} <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-sector-section" id="industry-sectors" aria-labelledby="industry-sectors-title">
        <div className="container">
          <div className="industries-section-heading">
            <div>
              <span className="eyebrow">Industries we work in</span>
              <h2 id="industry-sectors-title">The settings our ranges are documented for.</h2>
            </div>
            <p>
              These are the environments our product ranges are written for. Tell us
              your sector and we will confirm what we can supply today.
            </p>
          </div>

          <div className="industries-sector-grid">
            {industrySectors.map((sector) => (
              <article className="industries-sector-card" key={sector.id}>
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
                <ul>
                  {sector.areas.map((area) => (
                    <li key={area.label}>
                      <Link href={area.href}>
                        {area.label} <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
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
            <p>
              Share the application area, the system and the operating conditions, and
              the team can direct your enquiry to the right category.
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
