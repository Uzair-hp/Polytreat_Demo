import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Golden Floor Cleaner | V-Klin by PolyTreat",
  description:
    "Learn about Golden Floor Cleaner, part of V-Klin's floor and surface care range, and contact PolyTreat for product information.",
};

export default function GoldenFloorCleanerPage() {
  return (
    <main className="vklin-product-detail-page">
      <section className="vklin-product-detail-hero" aria-labelledby="golden-floor-cleaner-title">
        <div className="container">
          <nav className="vklin-product-detail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/vklin">V-Klin</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vklin/products">Cleaning range</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Golden Floor Cleaner</span>
          </nav>

          <div className="vklin-product-detail-layout">
            <div className="vklin-product-detail-copy">
              <span className="eyebrow eyebrow-green">
                <Leaf size={15} aria-hidden="true" /> V-Klin floor &amp; surface care
              </span>
              <h1 id="golden-floor-cleaner-title">Golden Floor Cleaner</h1>
              <p>Part of the V-Klin home and facility-care range.</p>
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
                  src="/vklin-products/product-label-vklin-golden-floor-cleaner-deodoriser.jpeg"
                  alt="Earlier Altra Care label artwork for Golden Floor Cleaner"
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

      <section className="vklin-product-detail-overview" aria-labelledby="golden-floor-cleaner-overview-title">
        <div className="container">
          <div className="vklin-product-detail-overview-layout">
            <div>
              <span className="vklin-product-group-kicker">Product overview</span>
              <h2 id="golden-floor-cleaner-overview-title">
                Floor care for home and facility settings.
              </h2>
              <p>
                The V-Klin catalogue lists floors, walls, sinks and washroom areas among its
                cleaning applications.
              </p>
            </div>
            <ul className="vklin-product-detail-contexts" aria-label="Settings listed in the range catalogue">
              <li>Homes &amp; apartments</li>
              <li>Schools</li>
              <li>Offices</li>
              <li>Industrial plants</li>
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
