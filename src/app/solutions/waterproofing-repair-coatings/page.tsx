import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrickWall,
  Droplets,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import ConstructionRange from "@/components/ConstructionRange";
import { companyInfo } from "@/data/companyInfo";
import styles from "@/components/solutions/constructionChemistry.module.css";

export const metadata: Metadata = {
  title: "Waterproofing, Repair & Coatings | PolyTreat Chemicals",
  description:
    "Explore PolyTreat construction-chemistry categories for waterproofing, cement and concrete repair, and protective coatings.",
};

const productAreas = [
  {
    number: "01",
    icon: Droplets,
    title: "Waterproofing systems",
    description:
      "Coating and membrane categories for roofs, terraces, walls, foundations, and other building surfaces.",
    contexts: ["Roofs & terraces", "Walls", "Foundations"],
  },
  {
    number: "02",
    icon: BrickWall,
    title: "Concrete repair & bonding",
    description:
      "Polymer additives for cement and mortar work, including repair, patching, bonding, and related surface applications.",
    contexts: ["Concrete repair", "Mortar mixes", "Bonding"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Building-surface coatings",
    description:
      "Protective coating categories for exterior walls and other building surfaces, with product uses varying by substrate.",
    contexts: ["Exterior surfaces", "Concrete", "Masonry"],
  },
];

export default function WaterproofingRepairCoatingsPage() {
  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="waterproofing-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions/construction-chemistry">Construction chemistry</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Waterproofing, repair &amp; coatings
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <ShieldCheck size={14} aria-hidden="true" />
                Construction &amp; Surface Protection
              </span>

              <h1 id="waterproofing-title" className={styles.heroTitle}>
                Waterproofing, repair and{" "}
                <span className={styles.heroHighlight}>protective coatings.</span>
              </h1>

              <p className={styles.heroSubline}>
                Explore product categories for keeping water out, repairing cement-based
                surfaces, and protecting building exteriors.
              </p>

              <div className={styles.heroActions}>
                <Button href="#product-areas" variant="primary">
                  Explore product areas
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  Discuss a requirement <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className={styles.heroMediaFrame}>
              <Image
                src="/images/home/portfolio-waterproofing.jpg"
                alt="Elastomeric liquid coating being roller-applied to a flat roof terrace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImg}
              />
              <div className={styles.mediaScrim} aria-hidden="true" />
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Droplets size={20} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <strong className={styles.captionTitle}>Roof &amp; Terrace Waterproofing</strong>
                  <span className={styles.captionScope}>
                    Liquid Membranes · Admixtures · Protective Coatings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Areas Grid */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="product-areas"
        aria-labelledby="product-areas-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Explore by application</span>
              <h2 id="product-areas-title" className={styles.sectionTitle}>
                Choose the category by the surface job.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Waterproofing, concrete repair, and exterior coating products serve
              different purposes. The substrate and project conditions inform selection.
            </p>
          </header>

          <div className={styles.areasGridThreeCol} data-stagger-group>
            {productAreas.map(({ number, icon: Icon, title, description, contexts }) => (
              <article className={styles.areaCard} key={title} data-stagger-item>
                <div className={styles.cardTopline}>
                  <span className={styles.cardNumber}>{number}</span>
                  <div className={styles.cardIconWrapper} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>

                <ul className={styles.contextPills} aria-label={`${title} applications`}>
                  {contexts.map((context) => (
                    <li key={context} className={styles.contextPill}>
                      <span className={styles.contextPillBullet} aria-hidden="true" />
                      <span>{context}</span>
                    </li>
                  ))}
                </ul>

                <Link className={styles.cardLinkPinned} href="#construction-range">
                  <span>View products</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.backOverviewLinks}>
            <Link className={styles.overviewLink} href="/solutions/construction-chemistry">
              <ArrowRight
                size={15}
                style={{ transform: "rotate(180deg)" }}
                aria-hidden="true"
              />
              <span>Back to construction chemistry overview</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Construction Range */}
      <ConstructionRange
        familyIds={[
          "elastomeric-membranes",
          "bitumen-and-clear",
          "exterior-coatings",
          "bonding-and-repair",
        ]}
        showCorosil
        title="Waterproofing, repair and coating products."
        intro="The products PolyTreat's construction profile lists for waterproofing, repair and protective finishes."
      />

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="waterproofing-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Planning a surface or repair project?</span>
              <h2 id="waterproofing-contact-title" className={styles.contactTitle}>
                Share the substrate and application.
              </h2>
              <p className={styles.contactLead}>
                Detailing the substrate, moisture conditions, and exposure helps our technical
                team recommend the appropriate waterproofing or repair system.
              </p>

              <div className={styles.contactActions}>
                <Button variant="primary" href="/contact#contact-form">
                  Discuss your requirement
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
