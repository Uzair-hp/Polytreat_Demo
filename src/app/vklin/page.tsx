import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Droplets,
  GlassWater,
  Hand,
  House,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "V-Klin Home & Facility Care | PolyTreat Chemicals",
  description:
    "Explore V-Klin, PolyTreat's home and facility-care cleaning range across floor and surface care, handwash, dishwashing, glass and washroom care.",
};

const categories = [
  {
    id: "floor-surface",
    number: "01",
    icon: House,
    title: "Floor & surface care",
    description: "Cleaning categories for floors and commonly used surfaces.",
  },
  {
    id: "hand-hygiene",
    number: "02",
    icon: Hand,
    title: "Handwash & liquid soap",
    description: "Liquid hand-cleaning products for everyday use.",
  },
  {
    id: "dishwashing",
    number: "03",
    icon: Droplets,
    title: "Dishwashing",
    description: "Products for routine dish and kitchenware cleaning.",
  },
  {
    id: "glass-washroom",
    number: "04",
    icon: GlassWater,
    title: "Glass & washroom care",
    description: "Cleaning categories for glass and washroom tasks.",
  },
  {
    id: "specialty-care",
    number: "05",
    icon: Sparkles,
    title: "Specialty care",
    description: "Additional home and facility-care products, including air care.",
  },
];

export default function VKlinPage() {
  return (
    <main className="vklin-page">
      <section className="vklin-page-hero" aria-labelledby="vklin-page-title">
        <div className="container vklin-page-hero-layout">
          <div className="vklin-page-copy">
            <span className="eyebrow eyebrow-green">
              <Sparkles size={15} aria-hidden="true" /> PolyTreat home &amp; facility care
            </span>
            <h1 id="vklin-page-title">
              Everyday cleaning, <span>under V-Klin.</span>
            </h1>
            <p>
              V-Klin brings together PolyTreat&apos;s cleaning products for homes and shared
              spaces, with categories organised around familiar cleaning tasks.
            </p>
            <div className="vklin-page-actions">
              <Link className="btn btn-vklin" href="#vklin-categories">
                Explore care categories <ArrowDown size={16} aria-hidden="true" />
              </Link>
              <Link className="vklin-page-text-link" href="/vklin/products">
                View the product range <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="vklin-page-brand-card" aria-label="V-Klin brand">
            <div className="vklin-page-brand-orbit vklin-page-brand-orbit-one" aria-hidden="true" />
            <div className="vklin-page-brand-orbit vklin-page-brand-orbit-two" aria-hidden="true" />
            <div className="vklin-page-logo-wrap">
              <Image
                src="/vklin-logo.webp"
                alt="V-Klin"
                width={480}
                height={320}
                priority
                sizes="(max-width: 760px) 72vw, 340px"
              />
            </div>
            <div className="vklin-page-brand-caption">
              <span className="vklin-page-brand-dot" aria-hidden="true" />
              <span>Home &amp; facility care</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section vklin-page-categories"
        id="vklin-categories"
        aria-labelledby="vklin-categories-title"
      >
        <div className="container">
          <div className="section-heading section-heading-split vklin-page-section-heading">
            <div>
              <span className="eyebrow eyebrow-green">The care range</span>
              <h2 id="vklin-categories-title">Find your cleaning category.</h2>
            </div>
            <p>
              A clear starting point for everyday cleaning across homes, workplaces and
              shared facilities.
            </p>
          </div>

          <div className="vklin-page-category-grid">
            {categories.map(({ id, number, icon: Icon, title, description }) => (
              <Link
                className="vklin-page-category-card"
                href={`/vklin/products#${id}`}
                key={id}
              >
                <div className="vklin-page-category-topline">
                  <span className="vklin-page-category-icon">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="vklin-page-category-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>

          <div className="vklin-page-range-note">
            <span className="vklin-page-range-mark"><Droplets size={19} aria-hidden="true" /></span>
            <p>Looking for a product or the right category for your site?</p>
            <Link href="/vklin/products">
              Browse products <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
