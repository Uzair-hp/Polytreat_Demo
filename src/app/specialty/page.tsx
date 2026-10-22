import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Snowflake,
  Wind,
} from "lucide-react";
import {
  specialtyOtherLines,
  specialtyProducts,
} from "@/data/specialtyProducts";

export const metadata: Metadata = {
  title: "Specialty Products | PolyTreat Chemicals",
  description:
    "PolyTreat's specialty products: COROSIL rust converter primer, POLYDOR-WS odour neutraliser, and POLYKLIN AHU and FCU coil cleaning compound.",
};

const productIcons = {
  corosil: ShieldCheck,
  "polydor-ws": Wind,
  polyklin: Snowflake,
};

const productIconsBySlug = productIcons as Record<
  (typeof specialtyProducts)[number]["slug"],
  typeof ShieldCheck
>;

export default function SpecialtyPage() {
  return (
    <main className="specialty-page">
      <section className="specialty-hero" aria-labelledby="specialty-title">
        <div className="container">
          <nav className="specialty-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Specialty products</span>
          </nav>

          <div className="specialty-hero-layout">
            <div>
              <span className="eyebrow">
                <FlaskConical size={15} aria-hidden="true" /> Specialty products
              </span>
              <h1 id="specialty-title">Products built around a specific problem.</h1>
              <p>
                Alongside the industrial water and construction ranges, PolyTreat
                makes a small set of specialty products aimed at one job each.
                These are the three we document in most detail.
              </p>
            </div>
            <Link className="btn btn-accent" href="/contact#contact-form">
              Ask about a product <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="specialty-range" aria-labelledby="specialty-range-title">
        <div className="container">
          <div className="specialty-section-heading">
            <div>
              <span className="specialty-kicker">The range</span>
              <h2 id="specialty-range-title">Three flagship specialty products.</h2>
            </div>
            <p>
              Each page sets out what the product is for, where it is used, and the
              data published in our own literature.
            </p>
          </div>

          <div className="specialty-range-grid">
            {specialtyProducts.map((product) => {
              const Icon = productIconsBySlug[product.slug];
              return (
                <article className="specialty-range-card" key={product.slug}>
                  <span className="specialty-range-icon">
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="specialty-range-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <ul className="specialty-range-list">
                    {product.applications.slice(0, 3).map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>
                  <Link href={`/specialty/${product.slug}`}>
                    View product <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="specialty-other" aria-labelledby="specialty-other-title">
        <div className="container">
          <div className="specialty-section-heading">
            <div>
              <span className="specialty-kicker">Other specialty lines</span>
              <h2 id="specialty-other-title">Further lines in the industrial range.</h2>
            </div>
            <p>
              These sit in the same industrial product profile. Share the
              application and we will confirm what is currently available and what
              documentation applies.
            </p>
          </div>

          <div className="specialty-other-grid">
            {specialtyOtherLines.map((line) => (
              <article className="specialty-other-card" key={line.title}>
                <h3>{line.title}</h3>
                <p>{line.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialty-cta" aria-labelledby="specialty-cta-title">
        <div className="container specialty-cta-inner">
          <div>
            <span className="specialty-kicker">Not sure which one fits?</span>
            <h2 id="specialty-cta-title">Tell us the problem you are trying to solve.</h2>
            <p>
              The surface, the process or the equipment tells us more than a product
              name. Share that and we will point you to the right category.
            </p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Talk to our team <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
