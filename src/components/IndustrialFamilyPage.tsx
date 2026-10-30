import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import {
  industrialFamilies,
  type IndustrialFamily,
} from "@/data/industrialFamilies";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import { companyInfo } from "@/data/companyInfo";
import styles from "@/components/solutions/industrialWater.module.css";

/**
 * Shared renderer for the industrial product families that do not have a
 * separate multi-system page: paint preservatives, sugar-process chemicals,
 * fireside treatment and automotive chemicals.
 *
 * Implements the Home v4 Design System (Teal accent: #0F8F8A, Navy: #0B1B33).
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

  return (
    <main className={`${styles.page} ${mainClassName ?? ""}`.trim()}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="family-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions/industrial-water">Industrial water</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              {family.name}
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <Icon size={14} aria-hidden="true" />
                {family.eyebrow}
              </span>

              <h1 id="family-title" className={styles.heroTitle}>
                {family.title}
              </h1>

              <p className={styles.heroSubline}>{family.summary}</p>

              <div className={styles.heroActions}>
                <Button href="#family-categories" variant="primary">
                  Explore the categories
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  Discuss an application <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Media Frame */}
            <div>
              {figureImage ? (
                <div className={styles.heroMediaFrame}>
                  <Image
                    src={figureImage.src}
                    alt={figureImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className={styles.heroImg}
                  />
                  <div className={styles.mediaScrim} />
                  <div className={styles.mediaCaption}>
                    <span className={styles.captionIconChip}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div className={styles.captionText}>
                      <strong className={styles.captionTitle}>{figureImage.caption}</strong>
                      <span className={styles.captionScope}>{family.name}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.familyPlaceholderFigure}>
                  <div className={styles.placeholderGridPattern} aria-hidden="true" />
                  <span className={styles.placeholderIcon}>
                    <Icon size={36} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.placeholderLabel}>{family.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* Facts Strip */}
          <dl className={styles.factsStrip} aria-label="Family summary facts">
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Product form</dt>
              <dd className={styles.factValue}>{family.productForm}</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Applies to</dt>
              <dd className={styles.factValue}>{family.appliesTo}</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Documentation</dt>
              <dd className={styles.factValue}>{family.documentation}</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Categories Section */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="family-categories"
        aria-labelledby="family-categories-title"
        data-reveal
      >
        <Container>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Explore by category</span>
              <h2 id="family-categories-title" className={styles.sectionTitle}>
                {family.sectionTitle}
              </h2>
            </div>
            <p className={styles.sectionLead}>{family.sectionIntro}</p>
          </div>

          <div
            className={
              isSingle
                ? styles.familyCategoriesGridSingle
                : styles.familyCategoriesGrid
            }
          >
            {family.categories.map((category, index) => {
              const CategoryIcon = categoryIcons[category.id] ?? Icon;
              return (
                <article
                  className={styles.systemCard}
                  key={category.id}
                  data-reveal
                >
                  <div className={styles.cardTopline}>
                    <span className={styles.cardNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardIconWrapper}>
                      <CategoryIcon size={20} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={`${styles.cardDesc} ${styles.cardDescMinHeight}`}>
                    {category.description}
                  </p>

                  <ul
                    className={styles.contextPills}
                    aria-label={`${category.title} applications`}
                  >
                    {category.contexts.map((context) => (
                      <li key={context} className={styles.contextPill}>
                        <span className={styles.contextPillBullet} aria-hidden="true" />
                        <span>{context}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      `${family.name}: ${category.title}`
                    )}#contact-form`}
                    className={styles.cardLinkPinned}
                  >
                    Request TDS & MSDS <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Sibling Catalogue Families Navigation */}
          <div className={styles.siblingFamiliesSection} data-reveal>
            <span className={styles.siblingFamiliesLabel}>Other catalogue families:</span>
            <div className={styles.siblingFamiliesLinks}>
              {industrialFamilies
                .filter((f) => f.id !== family.id)
                .map((sibling) => (
                  <Link
                    key={sibling.id}
                    className={styles.siblingFamilyChip}
                    href={`/solutions/${sibling.id}`}
                  >
                    <span>{sibling.name}</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                ))}
            </div>
          </div>

          {family.note && (
            <div className={styles.disclaimerNote}>{family.note}</div>
          )}

          <div className={styles.backOverviewLinks}>
            <Link
              className={styles.overviewLink}
              href="/solutions/industrial-water#other-categories"
            >
              <ArrowRight
                size={16}
                style={{ transform: "rotate(180deg)" }}
                aria-hidden="true"
              />
              Back to the industrial water overview
            </Link>
          </div>
        </Container>
      </section>

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="family-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>
                Working on a {family.name.toLowerCase()} requirement?
              </span>
              <h2 id="family-contact-title" className={styles.contactTitle}>
                Share the process and the conditions.
              </h2>
              <p className={styles.contactLead}>
                The application, operating conditions, and materials involved help
                our technical chemical team point you to the right category.
              </p>

              <div className={styles.contactActions}>
                <Button variant="primary" href="/contact#contact-form">
                  Discuss your application
                </Button>
                <Button
                  variant="secondary"
                  onDark
                  href={companyInfo.whatsappUrl}
                  external
                  icon={<MessageCircle size={16} strokeWidth={1.75} />}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className={styles.contactTiles}>
              <ContactTile
                icon={<Mail size={24} strokeWidth={1.75} />}
                label="Email enquiries"
                value={companyInfo.email}
                href={`mailto:${companyInfo.email}`}
              />
              <ContactTile
                icon={<Phone size={24} strokeWidth={1.75} />}
                label="Technical & sales"
                value={companyInfo.phone}
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
              />
              <ContactTile
                icon={<MessageCircle size={24} strokeWidth={1.75} />}
                label="WhatsApp"
                value={companyInfo.whatsappLabel}
                href={companyInfo.whatsappUrl}
                external
              />
              <ContactTile
                icon={<MapPin size={24} strokeWidth={1.75} />}
                label="Corporate office"
                value={companyInfo.officeAddress}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
