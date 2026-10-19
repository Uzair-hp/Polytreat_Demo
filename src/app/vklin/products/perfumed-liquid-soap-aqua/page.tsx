import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Perfumed Liquid Soap, Aqua | V-Klin by PolyTreat",
  description:
    "Explore Perfumed Liquid Soap, the Aqua variant in V-Klin's handwash range.",
};

export default function PerfumedLiquidSoapAquaPage() {
  return (
    <main className="vklin-product-detail-page">
      <section className="vklin-product-detail-hero" aria-labelledby="liquid-soap-title">
        <div className="container">
          <nav className="vklin-product-detail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/vklin">V-Klin</Link>
            <span aria-hidden="true">/</span>
            <Link href="/vklin/products">Cleaning range</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Perfumed Liquid Soap, Aqua</span>
          </nav>

          <div className="vklin-product-detail-layout">
            <div className="vklin-product-detail-copy">
              <span className="eyebrow eyebrow-green">
                <Leaf size={15} aria-hidden="true" /> V-Klin hand hygiene
              </span>
              <h1 id="liquid-soap-title">Perfumed Liquid Soap, Aqua</h1>
              <p>An Aqua variant in the V-Klin handwash and liquid-soap range.</p>
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
                  <strong>Handwash &amp; liquid soap</strong>
                </div>
              </div>
            </div>

            <figure className="vklin-product-detail-visual">
              <div className="vklin-product-detail-image">
                <Image
                  src="/vklin-products/product-label-vklin-perfumed-liquid-soap-aqua.jpeg"
                  alt="Earlier Altra Care label artwork for Perfumed Liquid Soap, Aqua"
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

      <section className="vklin-product-detail-overview" aria-labelledby="liquid-soap-overview-title">
        <div className="container">
          <div className="vklin-product-detail-overview-layout">
            <div>
              <span className="vklin-product-group-kicker">Product overview</span>
              <h2 id="liquid-soap-overview-title">
                An Aqua variant in the handwash range.
              </h2>
              <p>
                The archived product label identifies this as perfumed liquid soap and names
                Aqua as its variant. Refer to current product documentation for product
                details and use guidance.
              </p>
            </div>
            <ul className="vklin-product-detail-contexts" aria-label="Product categories">
              <li>Handwash</li>
              <li>Aqua variant</li>
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
