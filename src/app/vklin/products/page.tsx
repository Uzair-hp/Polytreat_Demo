import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "V-Klin Cleaning Products | PolyTreat Chemicals",
  description:
    "Browse the V-Klin cleaning range by floor and surface care, handwash, dishwashing, glass and washroom care, and other facility-care categories.",
};

type VKlinProduct = { name: string; image: string; href: string };
type VKlinProductGroup = {
  id: string;
  title: string;
  intro: string;
  products: VKlinProduct[];
};

const productGroups: VKlinProductGroup[] = [
  {
    id: "floor-surface",
    title: "Floor & surface care",
    intro: "Products grouped around routine floor and surface cleaning.",
    products: [
      {
        name: "Golden Floor Cleaner",
        image: "vklin-golden-floor-cleaner.webp",
        href: "/vklin/products/golden-floor-cleaner",
      },
      {
        name: "Protector Floor Cleaner, Lemon",
        image: "vklin-protector-floor-cleaner-lemon.webp",
        href: "/vklin/products/protector-floor-cleaner-lemon",
      },
      {
        name: "Perfumed Floor Cleaner, Floral",
        image: "vklin-perfumed-floor-cleaner-floral.webp",
        href: "/vklin/products/perfumed-floor-cleaner-floral",
      },
      {
        name: "Multipurpose Surface Cleaner",
        image: "vklin-multipurpose-surface-cleaner.webp",
        href: "/vklin/products/multipurpose-surface-cleaner",
      },
    ],
  },
  {
    id: "hand-hygiene",
    title: "Handwash & liquid soap",
    intro: "A liquid soap category for handwashing routines.",
    products: [
      {
        name: "Perfumed Liquid Soap, Aqua",
        image: "vklin-perfumed-liquid-soap-aqua.webp",
        href: "/vklin/products/perfumed-liquid-soap-aqua",
      },
    ],
  },
  {
    id: "dishwashing",
    title: "Dishwashing",
    intro: "A product category for dish and kitchenware cleaning.",
    products: [
      {
        name: "Dishwash Liquid Gel, Lemon",
        image: "vklin-dishwash-liquid-gel-lemon.webp",
        href: "/vklin/products/dishwash-liquid-gel-lemon",
      },
    ],
  },
  {
    id: "glass-washroom",
    title: "Glass & washroom care",
    intro: "Separate categories for glass and washroom cleaning tasks.",
    products: [
      {
        name: "Glass Cleaner",
        image: "vklin-streak-free-glass-cleaner.webp",
        href: "/vklin/products/glass-cleaner",
      },
      {
        name: "Power Plus Toilet Cleaner",
        image: "vklin-power-plus-toilet-cleaner.webp",
        href: "/vklin/products/power-plus-toilet-cleaner",
      },
    ],
  },
  {
    id: "specialty-care",
    title: "Other care categories",
    intro: "Additional home and facility-care categories.",
    products: [
      {
        name: "Air Freshener & AC-Duct Odour Eliminator",
        image: "vklin-air-freshener-ac-duct-odour-eliminator.webp",
        href: "/vklin/products/air-freshener-ac-duct-odour-eliminator",
      },
      {
        name: "Herbal Mosquito Repellent",
        image: "vklin-herbal-mosquito-repellent.webp",
        href: "/vklin/products/herbal-mosquito-repellent",
      },
    ],
  },
];

const categoryLinks = productGroups.map(({ id, title }) => ({ id, title }));

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

          {productGroups.map(({ id, title, intro, products }) => (
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

