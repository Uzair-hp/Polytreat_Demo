import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Perfumed Floor Cleaner, Floral | V-Klin by PolyTreat",
  description:
    "Explore Perfumed Floor Cleaner, the floral variant in V-Klin's floor-care range.",
};

export default function PerfumedFloorCleanerFloralPage() {
  return (
    <main className="vklin-product-detail-page">
      <section className="vklin-product-detail-hero" aria-labelledby="perfumed-floor-cleaner-title">
        <div className="container">
          <nav className="vklin-product-detail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/vklin">V-Klin</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vklin/products">Cleaning range</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Perfumed Floor Cleaner, Floral</span>
          </nav>

          <div className="vklin-product-detail-layout">
            <div className="vklin-product-detail-copy">
              <span className="eyebrow eyebrow-green">
                <Leaf size={15} aria-hidden="true" /> V-Klin floor &amp; surface care
              </span>
              <h1 id="perfumed-floor-cleaner-title">Perfumed Floor Cleaner, Floral</h1>
              <p>A floral-fragrance variant in the V-Klin home and facility-care range.</p>
              <div className="vklin-product-detail-actions">
                <Link className="btn btn-vklin" href="/contact#contact-form">
                  Enquire about this product <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link className="vklin-product-detail-back" href="/vklin/products">
                  <ArrowLeft size={14} aria-hidden="true" /> Back to products
                </Link>
              </div>
              <div className="vklin-product-detail-facts" aria-label="Product category">
                <div>
                  <span>Range</span>
                  <strong>V-Klin home &amp; facility care</strong>
                </div>
                <div>
                  <span>Category</span>
                  <strong>Floor &amp; surface care</strong>
                </div>
              </div>
            </div>

            <figure className="vklin-product-detail-visual">
              <div className="vklin-product-detail-image">
                <Image
                  src="/vklin-products/product-label-vklin-perfumed-floor-cleaner-floral.jpeg"
                  alt="Earlier Altra Care label artwork for Perfumed Floor Cleaner, Floral"
                  fill
                  priority
                  sizes="(max-width: 760px) 88vw, 480px"
                />
              </div>
              <figcaption>
                <span>Earlier Altra Care label artwork</span>
                <span>The range is now presented under V-Klin.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="vklin-product-detail-overview" aria-labelledby="perfumed-floor-cleaner-overview-title">
        <div className="container">
          <div className="vklin-product-detail-overview-layout">
            <div>
              <span className="vklin-product-group-kicker">Product overview</span>
              <h2 id="perfumed-floor-cleaner-overview-title">
                A floral option in the floor-care range.
              </h2>
              <p>
                The archived product label identifies this as a perfumed floor cleaner and
                names Floral as its variant. Refer to current product documentation for
                surface suitability and application instructions.
              </p>
            </div>
            <ul className="vklin-product-detail-contexts" aria-label="Product categories">
              <li>Floor care</li>
              <li>Floral fragrance</li>
              <li>Home &amp; facility care</li>
            </ul>
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
