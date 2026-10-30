import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  GlassWater,
  Hand,
  House,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShowerHead,
  Sparkles,
  Wind,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import { companyInfo } from "@/data/companyInfo";
import { vklinProductCount, vklinProductGroups } from "@/data/vklinProducts";
import styles from "@/components/solutions/vklin.module.css";

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
    description: "Cleaning products for floors and commonly used surfaces in homes and facilities.",
  },
  {
    id: "hand-hygiene",
    number: "02",
    icon: Hand,
    title: "Hand care & hygiene",
    description: "Liquid hand-cleaning products formulated for gentle, frequent everyday use.",
  },
  {
    id: "dishwashing",
    number: "03",
    icon: Droplets,
    title: "Dishwashing",
    description: "Formulations for routine dish, cutlery, and commercial kitchenware cleaning.",
  },
  {
    id: "glass-care",
    number: "04",
    icon: GlassWater,
    title: "Glass & window care",
    description: "Streak-free products for glass, mirrors, partitions, and appliance surfaces.",
  },
  {
    id: "toilet-care",
    number: "05",
    icon: ShowerHead,
    title: "Bathroom & toilet care",
    description: "Formulations for bathroom ceramic, tile, sanitaryware, and toilet cleaning tasks.",
  },
  {
    id: "odour-care",
    number: "06",
    icon: Wind,
    title: "Odour & air care",
    description: "Odour control formulations for ducts, coils, trash storage, and closed spaces.",
  },
  {
    id: "natural-wellness",
    number: "07",
    icon: Leaf,
    title: "Natural wellness",
    description: "Plant-derived formulations for everyday household living spaces.",
  },
];

const standards = [
  {
    title: "Phosphate-Free & Biodegradable",
    description:
      "Formulated with mild, biodegradable surfactant systems that clean thoroughly while safeguarding plumbing and wastewater drainage.",
  },
  {
    title: "Bulk & Retail Pack Sizes",
    description:
      "Available in convenient 500 ml and 1 L retail bottles, as well as heavy-duty 5 L institutional refill carboys for facility management.",
  },
  {
    title: "Documented Regulatory Scope",
    description:
      "Manufactured strictly for facility care and hygiene under ISO 9001:2015 and WHO-GMP reference, without unverified pesticide or drug claims.",
  },
];

export default function VKlinPage() {
  const productsByGroup = Object.fromEntries(
    vklinProductGroups.map((group) => [group.id, group.products])
  );

  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="vklin-page-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              V-Klin home &amp; facility care
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
                <Sparkles size={14} aria-hidden="true" />
                PolyTreat Home &amp; Facility Care
              </span>

              <h1 id="vklin-page-title" className={styles.heroTitle}>
                Everyday cleaning,{" "}
                <span className={styles.heroHighlight}>under V-Klin.</span>
              </h1>

              <p className={styles.heroSubline}>
                V-Klin brings together PolyTreat&apos;s formulated cleaning range for homes,
                workplaces, and shared facilities, organized around familiar daily cleaning tasks.
              </p>

              <div className={styles.heroActions}>
                <Button href="#care-categories" variant="primary">
                  Explore care categories
                </Button>
                <Link className={styles.textLink} href="/vklin/products">
                  <span>View all {vklinProductCount} products</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className={styles.heroMediaFrame}>
              <Image
                src="/images/home/vklin-og-lineup.webp"
                alt="V-Klin home and facility care product lineup bottles"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImg}
              />
              <div className={styles.mediaScrim} aria-hidden="true" />
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Leaf size={20} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <strong className={styles.captionTitle}>V-Klin Complete Care Range</strong>
                  <span className={styles.captionScope}>
                    {vklinProductCount} Formulations · 7 Cleaning Categories
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Facts Strip */}
          <dl className={styles.factsStrip} aria-label="V-Klin range summary">
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Range scope</dt>
              <dd className={styles.factValue}>{vklinProductCount} Formulated Products</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Task areas</dt>
              <dd className={styles.factValue}>7 Cleaning Categories</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Formulation standard</dt>
              <dd className={styles.factValue}>Phosphate-Free &amp; Biodegradable</dd>
            </div>
            <div className={styles.factItem}>
              <dt className={styles.factLabel}>Manufacturing ref</dt>
              <dd className={styles.factValue}>ISO 9001:2015 &amp; WHO-GMP</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Care Categories Section */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="care-categories"
        aria-labelledby="vklin-categories-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>The care range</span>
              <h2 id="vklin-categories-title" className={styles.sectionTitle}>
                Find your cleaning category.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              A clear starting point for everyday maintenance across residential spaces,
              corporate offices, commercial facilities, and hospitality sites.
            </p>
          </header>

          <div className={styles.categoriesGrid} data-stagger-group>
            {categories.map(({ id, number, icon: Icon, title, description }) => {
              const groupProducts = productsByGroup[id] ?? [];
              return (
                <Link
                  className={styles.categoryCard}
                  href={`/vklin/products#${id}`}
                  key={id}
                  data-stagger-item
                >
                  <div className={styles.cardTopline}>
                    <div className={styles.cardIconWrapper} aria-hidden="true">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className={styles.cardNumber}>{number}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDesc}>{description}</p>

                  <ul className={styles.productPills} aria-label={`${title} products`}>
                    {groupProducts.map((product) => (
                      <li key={product.id} className={styles.productPill}>
                        <span className={styles.productPillBullet} aria-hidden="true" />
                        <span>{product.shortName}</span>
                      </li>
                    ))}
                  </ul>

                  <span className={styles.cardLinkPinned}>
                    <span>View category products</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Full Catalogue Callout Banner */}
          <div className={styles.catalogueCallout} data-reveal>
            <div className={styles.calloutLeft}>
              <div className={styles.calloutIconWrap} aria-hidden="true">
                <Leaf size={26} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className={styles.calloutTitle}>
                  Explore all {vklinProductCount} V-Klin products
                </h3>
                <p className={styles.calloutDesc}>
                  Review full specifications, pack sizes (500 ml, 1 L, 5 L), directions for use,
                  and fragrance variants in our complete catalogue.
                </p>
              </div>
            </div>

            <Button href="/vklin/products" variant="primary">
              Browse full catalogue
            </Button>
          </div>
        </Container>
      </section>

      {/* Standards & Formulation Principles */}
      <section
        className={`${styles.section} ${styles.sectionTone}`}
        id="standards"
        aria-labelledby="vklin-standards-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Formulation standards</span>
              <h2 id="vklin-standards-title" className={styles.sectionTitle}>
                Built for efficacy and surface safety.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Every V-Klin product is engineered to deliver reliable cleaning performance
              without harsh residues or unverified marketing superlatives.
            </p>
          </header>

          <div className={styles.standardsGrid} data-stagger-group>
            {standards.map((std) => (
              <article className={styles.standardCard} key={std.title} data-stagger-item>
                <h3 className={styles.standardTitle}>{std.title}</h3>
                <p className={styles.standardDesc}>{std.description}</p>
              </article>
            ))}
          </div>

          <p className={styles.disclaimerNote}>
            V-Klin formulations are manufactured under certified ISO 9001:2015 and WHO-GMP
            reference. Products are formulated for hygiene and routine cleaning without medicinal,
            therapeutic, or pesticidal claims.
          </p>
        </Container>
      </section>

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="vklin-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Facility Care &amp; Bulk Supply</span>
              <h2 id="vklin-contact-title" className={styles.contactTitle}>
                Supplying homes, facilities, and commercial spaces.
              </h2>
              <p className={styles.contactLead}>
                Whether you need 5 L bulk carboys for institutional housekeeping, packaged
                cases for corporate facilities, or retail distribution partnerships, connect
                with our sales team.
              </p>

              <div className={styles.contactActions}>
                <Button variant="primary" href="/contact#contact-form">
                  Enquire about bulk supply
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
