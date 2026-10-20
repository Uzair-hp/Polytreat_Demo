import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Air Freshener & AC-Duct Odour Eliminator | V-Klin by PolyTreat",
  description:
    "Explore V-Klin's air-care product listed for air-conditioning duct odour-control applications.",
};

export default function AirFreshenerAcDuctOdourEliminatorPage() {
  return (
    <main className="vklin-product-detail-page">
      <section className="vklin-product-detail-hero" aria-labelledby="air-care-title">
        <div className="container">
          <nav className="vklin-product-detail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/vklin">V-Klin</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vklin/products">Cleaning range</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Air Freshener &amp; AC-Duct Odour Eliminator</span>
          </nav>

          <div className="vklin-product-detail-layout">
            <div className="vklin-product-detail-copy">
              <span className="eyebrow eyebrow-green">
                <Leaf size={15} aria-hidden="true" /> V-Klin air care
              </span>
              <h1 id="air-care-title">Air Freshener &amp; AC-Duct Odour Eliminator</h1>
              <p>
                An air-care product in the V-Klin range, listed for air-conditioning duct
                odour-control applications.
              </p>
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
                  <strong>Air care &amp; odour control</strong>
                </div>
              </div>
            </div>

            <figure className="vklin-product-detail-visual">
              <div className="vklin-product-detail-image">
                <Image
                  src="/vklin-products/vklin-air-freshener-ac-duct-odour-eliminator.webp"
                  alt="V-Klin Air Freshener & AC Duct Odour Eliminator Packaged Product"
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

      <section className="vklin-product-detail-overview" aria-labelledby="air-care-overview-title">
        <div className="container">
          <div className="vklin-product-detail-overview-layout">
            <div>
              <span className="vklin-product-group-kicker">Product overview</span>
              <h2 id="air-care-overview-title">
                Air care with an air-conditioning duct application.
              </h2>
              <p>
                The archived product label names air-conditioning ducts among its odour-control
                applications. Refer to current product documentation for suitability and use
                instructions.
              </p>
            </div>
            <ul className="vklin-product-detail-contexts" aria-label="Product categories">
              <li>Air care</li>
              <li>Odour control</li>
              <li>AC ducts</li>
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
