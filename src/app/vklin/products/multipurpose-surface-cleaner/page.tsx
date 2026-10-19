import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Multipurpose Surface Cleaner | V-Klin by PolyTreat",
  description:
    "Explore the V-Klin multipurpose cleaner for home and facility-care applications.",
};

export default function MultipurposeSurfaceCleanerPage() {
  return (
    <main className="vklin-product-detail-page">
      <section className="vklin-product-detail-hero" aria-labelledby="multipurpose-cleaner-title">
        <div className="container">
          <nav className="vklin-product-detail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/vklin">V-Klin</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vklin/products">Cleaning range</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Multipurpose Surface Cleaner</span>
          </nav>

          <div className="vklin-product-detail-layout">
            <div className="vklin-product-detail-copy">
              <span className="eyebrow eyebrow-green">
                <Leaf size={15} aria-hidden="true" /> V-Klin home &amp; facility care
              </span>
              <h1 id="multipurpose-cleaner-title">Multipurpose Surface Cleaner</h1>
              <p>A multipurpose cleaner in the V-Klin home and facility-care range.</p>
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
                  <strong>Multipurpose cleaning</strong>
                </div>
              </div>
            </div>

            <figure className="vklin-product-detail-visual">
              <div className="vklin-product-detail-image">
                <Image
                  src="/vklin-products/product-label-vklin-multipurpose-surface-cleaner.jpeg"
                  alt="Earlier Altra Care label artwork for Multipurpose Cleaner"
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

      <section className="vklin-product-detail-overview" aria-labelledby="multipurpose-cleaner-overview-title">
        <div className="container">
          <div className="vklin-product-detail-overview-layout">
            <div>
              <span className="vklin-product-group-kicker">Product overview</span>
              <h2 id="multipurpose-cleaner-overview-title">
                One cleaner within the wider home and facility-care range.
              </h2>
              <p>
                The archived product label identifies this as a multipurpose cleaner. Refer
                to current product documentation for surface suitability and application
                instructions.
              </p>
            </div>
            <ul className="vklin-product-detail-contexts" aria-label="Product categories">
              <li>Multipurpose cleaning</li>
              <li>Home care</li>
              <li>Facility care</li>
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
