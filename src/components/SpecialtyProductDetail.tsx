import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import { companyInfo } from "@/data/companyInfo";
import type { SpecialtyProduct } from "@/data/specialtyProducts";
import styles from "@/components/solutions/specialtyProducts.module.css";

/**
 * Shared shell for the specialty product pages (COROSIL, POLYDOR-WS, POLYKLIN).
 *
 * Implements the Home v4 Design System with signature Purple accent (#5B4BC4)
 * and high-contrast dark sections (#0B1B33).
 */
export default function SpecialtyProductDetail({
  product,
  icon: Icon,
  children,
}: {
  product: SpecialtyProduct;
  icon: LucideIcon;
  children?: ReactNode;
}) {
  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="specialty-product-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/specialty">Specialty products</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              {product.name}
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <Icon size={14} aria-hidden="true" />
                Specialty Products · {product.category}
              </span>

              <h1 id="specialty-product-title" className={styles.heroTitle}>
                {product.name}
              </h1>

              <p className={styles.heroSubline}>{product.summary}</p>

              <div className={styles.heroActions}>
                <Button href="/contact#contact-form" variant="primary">
                  Enquire about this product
                </Button>
                <Link className={styles.textLink} href="/specialty">
                  <ArrowLeft size={15} aria-hidden="true" />
                  <span>All specialty products</span>
                </Link>
              </div>
            </div>

            {/* Right Media / Graphic Frame */}
            <div className={styles.heroMediaFrame}>
              <div className={styles.heroGraphicGrid} aria-hidden="true" />
              <div className={styles.heroCenterBadge}>
                <span className={styles.badgeIconCircle}>
                  <Icon size={36} strokeWidth={1.6} />
                </span>
                <span className={styles.badgeName}>{product.name}</span>
              </div>
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <strong className={styles.captionTitle}>{product.category}</strong>
                  <span className={styles.captionScope}>{product.summary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Facts Strip */}
          <dl className={styles.factsStrip} aria-label="Product summary facts">
            {product.facts.map((fact) => (
              <div key={fact.label} className={styles.factItem}>
                <dt className={styles.factLabel}>{fact.label}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Product Overview Section */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="overview"
        aria-labelledby="specialty-overview-title"
        data-reveal
      >
        <Container>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>Product overview</span>
              <h2 id="specialty-overview-title" className={styles.overviewHeadline}>
                {product.headline}
              </h2>
              <p className={styles.overviewDesc}>{product.description}</p>
            </div>

            <div className={styles.featuresCard}>
              <h3 className={styles.featuresCardTitle}>
                <Sparkles size={18} className={styles.heroHighlight} aria-hidden="true" />
                Key Product Capabilities
              </h3>
              <ul className={styles.featuresList} aria-label="Key features">
                {product.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className={styles.featureBullet} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Custom Child Sections (Steps, Specs, Systems, Distinction) */}
      {children}

      {/* Applications Section */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="applications"
        aria-labelledby="specialty-applications-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Where it is used</span>
              <h2 id="specialty-applications-title" className={styles.sectionTitle}>
                Applications and surfaces.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Settings and environments where {product.name} is commonly deployed in
              routine operations and maintenance.
            </p>
          </header>

          <div className={styles.applicationsGrid} data-stagger-group>
            {product.applications.map((application) => (
              <div className={styles.applicationItem} key={application} data-stagger-item>
                <span className={styles.appBullet} aria-hidden="true" />
                <span>{application}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Handling Guidance Section */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="handling"
        aria-labelledby="specialty-handling-title"
        data-reveal
      >
        <Container>
          <div className={styles.handlingGrid}>
            <div className={styles.handlingCard}>
              <h3 id="specialty-handling-title" className={styles.handlingTitle}>
                <ShieldAlert size={20} color="#E07B1A" aria-hidden="true" />
                Handling Guidance
              </h3>
              <ul className={styles.cautionList} aria-label="Handling cautions">
                {product.cautions.map((caution) => (
                  <li key={caution} className={styles.cautionItem}>
                    <span className={styles.cautionBullet} aria-hidden="true" />
                    <span>{caution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.handlingCard}>
              <h3 className={styles.handlingTitle}>
                <Info size={20} color="#5B4BC4" aria-hidden="true" />
                Documentation &amp; Compliance
              </h3>
              <p className={styles.stepText}>{product.sourceNote}</p>
              <p className={styles.stepText} style={{ marginTop: "12px" }}>
                Safety information is provided in the current Safety Data Sheet (MSDS).
                Request it from our technical team along with the Technical Data Sheet
                (TDS) for your specific site conditions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="specialty-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Need details for your application?</span>
              <h2 id="specialty-contact-title" className={styles.contactTitle}>
                Share the process and operating context.
              </h2>
              <p className={styles.contactLead}>
                Tell us the system, the surface, or the process parameters. Our chemical
                team can provide product selection, dosing guidance, and official TDS/MSDS documents.
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
