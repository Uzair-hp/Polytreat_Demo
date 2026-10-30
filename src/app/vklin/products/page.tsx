import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import { companyInfo } from "@/data/companyInfo";
import { vklinProductCount, vklinProductGroups } from "@/data/vklinProducts";
import VklinCatalogueGrid from "@/components/solutions/VklinCatalogueGrid";
import styles from "@/components/solutions/vklin.module.css";

export const metadata: Metadata = {
  title: "V-Klin Cleaning Products Catalogue | PolyTreat Chemicals",
  description:
    "Browse the full V-Klin cleaning catalogue across floor care, hand care, dishwashing, glass care, bathroom care, odour elimination and natural wellness.",
};

export default function VKlinProductsPage() {
  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="vklin-products-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/vklin">V-Klin</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Cleaning range catalogue
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <div className={styles.heroLogoWrap}>
                <Image
                  src="/vklin-logo.webp"
                  alt="V-Klin"
                  width={140}
                  height={89}
                  priority
                  className={styles.heroLogo}
                />
              </div>

              <span className={styles.eyebrow}>
                <Leaf size={14} aria-hidden="true" />
                V-Klin Formulated Catalogue
              </span>

              <h1 id="vklin-products-title" className={styles.heroTitle}>
                Cleaning products,{" "}
                <span className={styles.heroHighlight}>organised by task.</span>
              </h1>

              <p className={styles.heroSubline}>
                Browse all {vklinProductCount} formulations across everyday maintenance
                categories for residential homes, corporate workspaces, and institutional facilities.
              </p>

              <div className={styles.heroActions}>
                <Button href="#catalogue" variant="primary">
                  Jump to catalogue
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  <span>Enquire about bulk supply</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className={styles.heroMediaFrame}>
              <div className={styles.heroImageWrap}>
                <Image
                  src="/images/home/vklin-og-lineup.webp"
                  alt="Complete V-Klin commercial and residential cleaning catalogue"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={styles.heroImg}
                />
              </div>
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Package size={20} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <strong className={styles.captionTitle}>Institutional &amp; Retail Packaging</strong>
                  <span className={styles.captionScope}>
                    500 ml · 1 L · 5 L Bulk Refills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Facts Strip */}
          <dl className={styles.factsStrip} aria-label="Catalogue facts">
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Catalogue total</dt>
              <dd className={styles.factValue}>{vklinProductCount} Active Products</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Pack sizes</dt>
              <dd className={styles.factValue}>500 ml · 1 L · 5 L Carboys</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Formulation base</dt>
              <dd className={styles.factValue}>Biodegradable &amp; Phosphate-Free</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Compliance standard</dt>
              <dd className={styles.factValue}>ISO 9001:2015 &amp; WHO-GMP Ref</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Product Catalogue Section with Interactive Filter */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="catalogue"
        aria-label="V-Klin product catalogue"
        data-reveal
      >
        <Container>
          <VklinCatalogueGrid
            groups={vklinProductGroups}
            totalCount={vklinProductCount}
          />

          {/* Technical Enquiry Callout */}
          <div className={styles.catalogueCallout} data-reveal>
            <div className={styles.calloutLeft}>
              <div className={styles.calloutIconWrap} aria-hidden="true">
                <Sparkles size={26} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className={styles.calloutTitle}>
                  Need assistance selecting products for your site?
                </h3>
                <p className={styles.calloutDesc}>
                  Share the facility type, surface challenges, and expected volume with our
                  housekeeping chemical specialists.
                </p>
              </div>
            </div>

            <Button href="/contact#contact-form" variant="primary">
              Contact technical sales
            </Button>
          </div>
        </Container>
      </section>

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="vklin-products-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Facility Care &amp; Bulk Distribution</span>
              <h2 id="vklin-products-contact-title" className={styles.contactTitle}>
                Supplying homes, facilities, and commercial spaces.
              </h2>
              <p className={styles.contactLead}>
                Whether you manage institutional housekeeping, commercial facilities, or retail
                distribution networks, contact our team for bulk pricing and safety documentation.
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
