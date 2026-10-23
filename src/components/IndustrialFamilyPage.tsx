import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IndustrialFamily } from "@/data/industrialFamilies";

/**
 * Shared renderer for the industrial product families that do not have a
 * system page of their own: paint preservatives, sugar-process chemicals,
 * fireside treatment and automotive chemicals.
 *
 * The hero figure is a labelled panel rather than a photograph. There is no
 * client photograph of a paint store, a sugar mill, a fired boiler or a
 * vehicle cooling system, and a stock image of someone else's facility would
 * misrepresent the product range.
 */
export default function IndustrialFamilyPage({
  family,
  icon: Icon,
  categoryIcons = {},
  mainClassName,
  figureImage,
}: {
  family: IndustrialFamily;
  icon: LucideIcon;
  categoryIcons?: Record<string, LucideIcon>;
  mainClassName?: string;
  figureImage?: { src: string; alt: string; caption: string };
}) {
  const isSingle = family.categories.length === 1;
  const heroClasses = ["industrial-family-page", mainClassName].filter(Boolean).join(" ");

  return (
    <main className={heroClasses}>
      <section className="industrial-family-hero" aria-labelledby="family-title">
        <div className="container">
          <nav className="industrial-family-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <Link href="/solutions/industrial-water">Industrial water</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{family.name}</span>
          </nav>

          <div className="industrial-family-hero-layout">
            <div className="industrial-family-hero-copy">
              <span className="eyebrow">
                <Icon size={15} aria-hidden="true" /> {family.eyebrow}
              </span>
              <h1 id="family-title">{family.title}</h1>
              <p>{family.summary}</p>
              <div className="industrial-family-actions">
                <Link className="btn btn-accent" href="#family-categories">
                  Explore the categories <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="industrial-family-text-link" href="/contact#contact-form">
                  Discuss an application
                </Link>
              </div>
            </div>

            <div className={figureImage ? "industrial-family-figure-image" : "industrial-family-figure"} aria-hidden={!figureImage}>
              {figureImage ? (
                <figure className="industrial-water-figure">
                  <Image
                    src={figureImage.src}
                    alt={figureImage.alt}
                    fill
                    priority
                    sizes="(max-width: 760px) 100vw, 40vw"
                  />
                  <figcaption className="industrial-water-figure-label">{figureImage.caption}</figcaption>
                </figure>
              ) : (
                <>
                  <span className="industrial-family-figure-grid" />
                  <span className="industrial-family-figure-icon">
                    <Icon size={40} strokeWidth={1.4} />
                  </span>
                  <span className="industrial-family-figure-label">{family.name}</span>
                </>
              )}
            </div>
          </div>

          <dl className="industrial-family-facts" aria-label="Family summary">
            <div>
              <dt>Product form</dt>
              <dd>{family.productForm}</dd>
            </div>
            <div>
              <dt>Applies to</dt>
              <dd>{family.appliesTo}</dd>
            </div>
            <div>
              <dt>Documentation</dt>
              <dd>{family.documentation}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className="industrial-family-categories"
        id="family-categories"
        aria-labelledby="family-categories-title"
      >
        <div className="container">
          <div className="industrial-family-heading">
            <div>
              <span className="eyebrow">Explore by category</span>
              <h2 id="family-categories-title">{family.sectionTitle}</h2>
            </div>
            <p>{family.sectionIntro}</p>
          </div>

          <div className={`industrial-family-grid${isSingle ? " is-single" : ""}`}>
            {family.categories.map((category, index) => {
              const CategoryIcon = categoryIcons[category.id] ?? Icon;
              const isLast = index === family.categories.length - 1;
              const isWide = isLast && !isSingle && family.categories.length % 2 === 1;
              return (
                <article
                  className={`industrial-family-card${isWide ? " is-wide" : ""}`}
                  key={category.id}
                >
                  <div className="industrial-family-card-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="industrial-family-card-icon">
                      <CategoryIcon size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <ul aria-label={`${category.title} applications`}>
                    {category.contexts.map((context) => (
                      <li key={context}>{context}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="industrial-family-note">{family.note}</p>
          <Link className="industrial-family-back" href="/solutions/industrial-water#other-categories">
            Back to the industrial range <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="industrial-family-contact" aria-labelledby="family-contact-title">
        <div className="container industrial-family-contact-inner">
          <div>
            <span className="eyebrow">Working on a {family.name.toLowerCase()} requirement?</span>
            <h2 id="family-contact-title">Share the process and the conditions.</h2>
            <p>
              The application, the operating conditions and the material involved
              help the team point you to the right category.
            </p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your application <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
