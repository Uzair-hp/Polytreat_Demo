import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Info,
  Leaf,
  ListOrdered,
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
import { vklinProductGroups, type VKlinProduct } from "@/data/vklinProducts";
import styles from "@/components/solutions/vklin.module.css";

/**
 * Shared renderer for every V-Klin product detail page.
 *
 * Implements the Home v4 Design System with V-Klin Green range accent (#0E8F5E)
 * and high-contrast dark sections (#0B1B33).
 */
export default function VklinProductDetail({ product }: { product: VKlinProduct }) {
  const group = vklinProductGroups.find((entry) => entry.id === product.groupId);
  const categoryTitle = group?.title ?? "V-Klin cleaning range";

  const shortSpec = product.specifications.find((spec) => spec.value.length <= 48);
  const thirdFact =
    product.fragrances.length > 0
      ? { label: "Fragrances", value: product.fragrances.join(" · ") }
      : shortSpec
        ? { label: shortSpec.label, value: shortSpec.value }
        : { label: "Formulation", value: "Ready to use" };

  const facts = [
    { label: "Category", value: categoryTitle },
    { label: "Pack sizes", value: product.packSizes.join(" · ") },
    thirdFact,
    { label: "Standards", value: "ISO 9001:2015 & WHO-GMP Ref" },
  ];

  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="product-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/vklin">V-Klin</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/vklin/products">Cleaning range</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              {product.name}
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <Leaf size={14} aria-hidden="true" />
                {group?.kicker ?? "V-Klin Range"}
              </span>

              <h1 id="product-title" className={styles.heroTitle}>
                {product.name}
              </h1>

              <p className={styles.heroSubline}>{product.summary}</p>

              <div className={styles.heroActions}>
                <Button href="/contact#contact-form" variant="primary">
                  Enquire about this product
                </Button>
                <Link className={styles.textLink} href="/vklin/products">
                  <ArrowLeft size={15} aria-hidden="true" />
                  <span>Back to cleaning catalogue</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image Frame */}
            <figure className={styles.detailHeroVisual}>
              <div className={styles.detailImageWrap}>
                <Image
                  src={`/vklin-products/${product.image}`}
                  alt={`V-Klin ${product.name} packaged formulation`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={styles.detailImg}
                />
              </div>
              <figcaption className={styles.detailFigcaption}>
                <strong>Official V-Klin Packaged Product</strong>
                <span>Formulated &amp; manufactured by PolyTreat Chemicals.</span>
              </figcaption>
            </figure>
          </div>

          {/* Facts Strip */}
          <dl className={styles.factsStrip} aria-label="Product summary facts">
            {facts.map((fact) => (
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
        aria-labelledby="product-overview-title"
        data-reveal
      >
        <Container>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>Product overview</span>
              <h2 id="product-overview-title" className={styles.overviewHeadline}>
                {product.headline}
              </h2>
              <p className={styles.overviewDesc}>{product.description}</p>
            </div>

            <div className={styles.featuresCard}>
              <h3 className={styles.featuresCardTitle}>
                <Sparkles size={18} className={styles.heroHighlight} aria-hidden="true" />
                Key Product Features
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

      {/* Where It Is Used & How to Use It Section */}
      <section
        className={`${styles.section} ${styles.sectionTone}`}
        id="usage"
        aria-labelledby="product-usage-title"
        data-reveal
      >
        <Container>
          <div className={styles.usageGrid}>
            <div className={styles.usageCard}>
              <h3 id="product-usage-title" className={styles.usageCardTitle}>
                <MapPin size={18} className={styles.heroHighlight} aria-hidden="true" />
                Where it is used
              </h3>
              <ul className={styles.applicationsList} aria-label="Product applications">
                {product.applications.map((application) => (
                  <li key={application} className={styles.applicationItem}>
                    <span className={styles.appBullet} aria-hidden="true" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.usageCard}>
              <h3 className={styles.usageCardTitle}>
                <ListOrdered size={18} className={styles.heroHighlight} aria-hidden="true" />
                How to use it
              </h3>
              <ol className={styles.directionsList} aria-label="Application directions">
                {product.directions.map((step, index) => (
                  <li key={step} className={styles.directionItem}>
                    <span className={styles.directionNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className={styles.usageNote}>
                Standard directions as published in our product literature. For large commercial
                installations, confirm dosage and technical guidance with our chemical team.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Specifications Section */}
      {product.specifications.length > 0 && (
        <section
          className={`${styles.section} ${styles.sectionLight}`}
          id="specifications"
          aria-labelledby="product-specs-title"
          data-reveal
        >
          <Container>
            <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
              <div className={styles.headingGroup}>
                <span className={styles.sectionEyebrow}>Product information</span>
                <h2 id="product-specs-title" className={styles.sectionTitle}>
                  Technical details &amp; packaging.
                </h2>
              </div>
              <p className={styles.sectionLead}>
                Specifications, packaging options, and published parameters from V-Klin product
                literature. Request current documentation for institutional procurement.
              </p>
            </header>

            <dl className={styles.specsGrid}>
              {product.specifications.map((spec) => (
                <div key={spec.label} className={styles.specRow}>
                  <dt className={styles.specLabel}>{spec.label}</dt>
                  <dd className={styles.specValue}>{spec.value}</dd>
                </div>
              ))}
              <div className={styles.specRow}>
                <dt className={styles.specLabel}>Pack sizes</dt>
                <dd className={styles.specValue}>{product.packSizes.join(" · ")}</dd>
              </div>
              {product.fragrances.length > 0 && (
                <div className={styles.specRow}>
                  <dt className={styles.specLabel}>Fragrances</dt>
                  <dd className={styles.specValue}>{product.fragrances.join(" · ")}</dd>
                </div>
              )}
            </dl>
          </Container>
        </section>
      )}

      {/* Handling & Storage Guidance Section */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="handling"
        aria-labelledby="product-handling-title"
        data-reveal
      >
        <Container>
          <div className={styles.handlingGrid}>
            <div className={styles.handlingCard}>
              <h3 id="product-handling-title" className={styles.handlingTitle}>
                <ShieldAlert size={20} color="#E07B1A" aria-hidden="true" />
                Handling &amp; Storage
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
                <Info size={20} color="#047857" aria-hidden="true" />
                Regulatory &amp; Safety Notice
              </h3>
              <p className={styles.cardDesc}>
                This page is written from PolyTreat&apos;s published V-Klin product literature. It is
                a formulation summary and does not make medicinal, pesticidal, or drug claims.
              </p>
              <p className={styles.cardDesc} style={{ marginTop: "12px" }}>
                Full safety and first-aid recommendations are detailed in the official Safety Data
                Sheet (MSDS). Contact our technical department to receive current documentation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="product-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Facility Care &amp; Bulk Procurement</span>
              <h2 id="product-contact-title" className={styles.contactTitle}>
                Working with {product.shortName}?
              </h2>
              <p className={styles.contactLead}>
                Whether you need bulk 5 L carboys for corporate facility management or case packaging
                for regional distribution, our team can provide volume pricing and supply schedules.
              </p>

              <div className={styles.contactActions}>
                <Button variant="primary" href="/contact#contact-form">
                  Enquire about supply
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
                label="Commercial enquiries"
                value={companyInfo.email}
                href={`mailto:${companyInfo.email}`}
              />
              <ContactTile
                icon={<Phone size={24} strokeWidth={1.75} />}
                label="Sales & supply"
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
