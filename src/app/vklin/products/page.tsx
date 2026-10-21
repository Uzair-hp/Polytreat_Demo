import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Leaf } from "lucide-react";
import { vklinProductGroups } from "@/data/vklinProducts";

export const metadata: Metadata = {
  title: "V-Klin Cleaning Products | PolyTreat Chemicals",
  description:
    "Browse the V-Klin cleaning range by floor and surface care, handwash, dishwashing, glass and washroom care, and other facility-care categories.",
};

const categoryLinks = vklinProductGroups.map(({ id, title }) => ({ id, title }));

export default function VKlinProductsPage() {
  return (
    <main className="vklin-products-page">
      <section className="vklin-products-hero" aria-labelledby="vklin-products-title">
        <div className="container">
          <nav className="vklin-products-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/vklin">V-Klin</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span>Cleaning range</span>
          </nav>
          <div className="vklin-products-hero-layout">
            <div>
              <span className="eyebrow eyebrow-green">
                <Leaf size={15} aria-hidden="true" /> V-Klin home &amp; facility care
              </span>
              <h1 id="vklin-products-title">Cleaning products, organised by task.</h1>
              <p>
                Browse the range across everyday cleaning categories for homes and shared
                facilities.
              </p>
            </div>
            <Link className="btn btn-vklin" href="/contact#contact-form">
              Ask about a product <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="vklin-products-legacy-note">
            Official commercial & institutional hygiene formulations manufactured to ISO 9001:2015 and WHO-GMP compliance standards.
          </div>
        </div>
      </section>

      <section className="vklin-products-catalogue" aria-label="V-Klin product categories">
        <div className="container">
          <nav className="vklin-products-category-nav" aria-label="Jump to a category">
            {categoryLinks.map(({ id, title }) => (
              <a href={`#${id}`} key={id}>{title}</a>
            ))}
          </nav>

          {vklinProductGroups.map(({ id, title, intro, products }) => (
            <section className="vklin-product-group" id={id} key={id} aria-labelledby={`${id}-title`}>
              <div className="vklin-product-group-heading">
                <div>
                  <span className="vklin-product-group-kicker">V-Klin range</span>
                  <h2 id={`${id}-title`}>{title}</h2>
                </div>
                <p>{intro}</p>
              </div>
              <div className="vklin-product-grid">
                {products.map(({ name, image, href }) => (
                  <article className="vklin-product-card" key={name}>
                    <div className="vklin-product-image">
                      <Image
                        src={`/vklin-products/${image}`}
                        alt={`V-Klin ${name} packaged formulation`}
                        fill
                        sizes="(max-width: 560px) 46vw, (max-width: 900px) 30vw, 260px"
                      />
                      <span>V-Klin Pack</span>
                    </div>
                    <div className="vklin-product-card-copy">
                      <h3>{name}</h3>
                      <Link href={href} aria-label={`View ${name} details`}>
                        View product <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className="vklin-products-footer-cta">
            <div>
              <span>Need help choosing a category?</span>
              <p>Tell the team what you need to clean and where the product will be used.</p>
            </div>
            <Link href="/contact#contact-form">
              Contact PolyTreat <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

