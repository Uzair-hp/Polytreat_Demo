import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Info,
  Leaf,
  ListOrdered,
  MapPin,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { vklinProductGroups, type VKlinProduct } from "@/data/vklinProducts";

/**
 * Shared renderer for every V-Klin product page.
 *
 * Copy comes from `src/data/vklinProducts.ts`, which is written from the
 * client's own product literature. Nothing here invents a claim: the range
 * makes no pesticidal or germ-kill claim, technical data is attributed to the
 * product literature, and every page points to the current label and our team
 * for the confirmed directions.
 */
export default function VklinProductDetail({ product }: { product: VKlinProduct }) {
  const group = vklinProductGroups.find((entry) => entry.id === product.groupId);
  const categoryTitle = group?.title ?? "V-Klin cleaning range";

  // The third fact has to describe itself, so use the fragrances when the
  // range has them, otherwise the shortest published specification.
  const shortSpec = product.specifications.find((spec) => spec.value.length <= 48);
  const thirdFact =
    product.fragrances.length > 0
      ? { label: "Fragrances", value: product.fragrances.join(" · ") }
      : shortSpec
        ? { label: shortSpec.label, value: shortSpec.value }
        : { label: "Formulation", value: "Ready to use" };

  const facts = [
    { label: "Category", value: categoryTitle },
    { label: "Pack sizes", value: product.packSizes.slice(0, 3).join(" · ") },
    thirdFact,
  ];

  return (
    <main className="vklin-product-detail-page">
      <section className="vklin-product-detail-hero" aria-labelledby="product-title">
        <div className="container">
          <nav className="vklin-product-detail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/vklin">V-Klin</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vklin/products">Cleaning range</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="vklin-product-detail-layout">
            <div className="vklin-product-detail-copy">
              <span className="eyebrow eyebrow-green">
                <Leaf size={15} aria-hidden="true" /> {group?.kicker ?? "V-Klin range"}
              </span>
              <h1 id="product-title">{product.name}</h1>
              <p>{product.summary}</p>
              <div className="vklin-product-detail-actions">
                <Link className="btn btn-vklin" href="/contact#contact-form">
                  Enquire about this product <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link className="vklin-product-detail-back" href="/vklin/products">
                  <ArrowLeft size={14} aria-hidden="true" /> Back to products
                </Link>
              </div>
              <div className="vklin-product-detail-facts is-wide" aria-label="Product summary">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <figure className="vklin-product-detail-visual">
              <div className="vklin-product-detail-image">
                <Image
                  src={`/vklin-products/${product.image}`}
                  alt={`V-Klin ${product.name} packaged formulation`}
                  fill
                  priority
                  sizes="(max-width: 760px) 88vw, 480px"
                />
              </div>
              <figcaption>
                <span>Official V-Klin Packaged Product</span>
                <span>Formulated &amp; manufactured by PolyTreat Chemicals.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="vklin-product-detail-overview" aria-labelledby="product-overview-title">
        <div className="container">
          <div className="vklin-product-detail-overview-layout is-stacked">
            <div>
              <span className="vklin-product-group-kicker">Product overview</span>
              <h2 id="product-overview-title">{product.headline}</h2>
              <p>{product.description}</p>
            </div>
            <div className="vklin-product-feature-block">
              <h3>
                <Sparkles size={16} aria-hidden="true" /> Features
              </h3>
              <ul className="vklin-product-detail-features">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="vklin-product-detail-usage" aria-labelledby="product-usage-title">
        <div className="container">
          <div className="vklin-product-usage-grid">
            <div className="vklin-product-usage-card">
              <h3 id="product-usage-title">
                <MapPin size={16} aria-hidden="true" /> Where it is used
              </h3>
              <ul>
                {product.applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
            </div>

            <div className="vklin-product-usage-card">
              <h3>
                <ListOrdered size={16} aria-hidden="true" /> How to use it
              </h3>
              <ol>
                {product.directions.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="vklin-product-usage-note">
                Directions as published in our product literature. Confirm the current
                label and technical guidance with our team for your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {product.specifications.length > 0 && (
        <section className="vklin-product-detail-specs" aria-labelledby="product-specs-title">
          <div className="container">
            <div className="vklin-product-specs-layout">
              <div>
                <span className="vklin-product-group-kicker">Product information</span>
                <h2 id="product-specs-title">Technical details.</h2>
                <p>
                  Specifications and pack sizes as published in our product literature.
                  Ask us for the current datasheet for your application.
                </p>
              </div>
              <dl className="vklin-product-specs-table">
                {product.specifications.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
                <div>
                  <dt>Pack sizes</dt>
                  <dd>{product.packSizes.join(" · ")}</dd>
                </div>
                {product.fragrances.length > 0 && (
                  <div>
                    <dt>Fragrances</dt>
                    <dd>{product.fragrances.join(" · ")}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>
      )}

      <section className="vklin-product-detail-handling" aria-labelledby="product-handling-title">
        <div className="container">
          <div className="vklin-product-handling-layout">
            <div className="vklin-product-handling-card">
              <h3 id="product-handling-title">
                <ShieldAlert size={16} aria-hidden="true" /> Handling &amp; storage
              </h3>
              <ul>
                {product.cautions.map((caution) => (
                  <li key={caution}>{caution}</li>
                ))}
              </ul>
            </div>
            <div className="vklin-product-handling-card is-note">
              <h3>
                <Info size={16} aria-hidden="true" /> About these details
              </h3>
              <p>
                This page is written from PolyTreat&apos;s published V-Klin product
                literature. It is a summary, not a substitute for the current label or
                safety data sheet, and it does not claim disinfection or pesticidal
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vklin-product-detail-information" aria-labelledby="product-information-title">
        <div className="container vklin-product-detail-info-layout">
          <div>
            <span className="vklin-product-group-kicker">Product information</span>
            <h2 id="product-information-title">Need details for your application?</h2>
            <p>
              Share where you plan to use the product. The PolyTreat team can help with
              relevant product information and technical documents.
            </p>
          </div>
          <Link href="/contact#contact-form">
            Contact PolyTreat <FileText size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
