import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Droplets,
  Layers3,
  Link2,
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
  title: "Construction Chemistry & Surface Protection | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's construction chemistry categories for waterproofing, concrete repair, protective floors and surfaces, and joint sealing.",
};

const constructionAreas = [
  {
    number: "01",
    icon: Droplets,
    title: "Waterproofing & coatings",
    description:
      "Categories for waterproofing and protective coatings across building and concrete surfaces.",
    href: "/solutions/waterproofing-repair-coatings",
    contexts: ["Roofs & terraces", "Walls", "Foundations", "Waterproofing coatings"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Concrete repair & bonding",
    description:
      "Cement and mortar additive categories for repair, bonding, patching, and related surface work.",
    href: "/solutions/waterproofing-repair-coatings",
    contexts: ["Concrete repair", "Mortar additives", "Bonding", "Surface work"],
  },
  {
    number: "03",
    icon: Building2,
    title: "Flooring & surface protection",
    description:
      "Protective coating and flooring categories for industrial floors and other built surfaces.",
    href: "/solutions/flooring-joint-sealing",
    contexts: ["Industrial floors", "Protective coatings", "Metal surfaces", "Rust treatment"],
  },
  {
    number: "04",
    icon: Link2,
    title: "Sealants & joints",
    description:
      "Sealant categories for joints, cracks, and other building-surface applications.",
    href: "/solutions/flooring-joint-sealing",
    contexts: ["Joint sealing", "Crack sealing", "Building surfaces"],
  },
];

export default function ConstructionChemistryPage() {
  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="construction-chemistry-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Construction chemistry
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <ShieldCheck size={14} aria-hidden="true" />
                Construction &amp; Surface Protection
              </span>

              <h1 id="construction-chemistry-title" className={styles.heroTitle}>
                Construction chemistry for waterproofing, repair and{" "}
                <span className={styles.heroHighlight}>protected surfaces.</span>
              </h1>

              <p className={styles.heroSubline}>
                Explore PolyTreat&apos;s construction categories across waterproofing,
                concrete repair, industrial flooring, protective coatings, and sealants.
              </p>

              <div className={styles.heroActions}>
                <Button href="#construction-areas" variant="primary">
                  Explore application areas
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  Discuss a requirement <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className={styles.heroMediaFrame}>
              <Image
                src="/images/home/surface-protection-membrane.webp"
                alt="Torch-applied bituminous waterproofing membrane being installed on a flat roof"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImg}
              />
              <div className={styles.mediaScrim} aria-hidden="true" />
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Building2 size={20} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <strong className={styles.captionTitle}>Surface Protection Membrane</strong>
                  <span className={styles.captionScope}>
                    Waterproofing · Repair · Flooring · Sealants
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Application Areas Grid */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="construction-areas"
        aria-labelledby="construction-areas-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Explore by application</span>
              <h2 id="construction-areas-title" className={styles.sectionTitle}>
                Different surfaces call for different categories.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Browse the broad product groups by the type of construction or surface
              work involved. Site and substrate conditions shape product selection.
            </p>
          </header>

          <div className={styles.areasGrid} data-stagger-group>
            {constructionAreas.map(({ number, icon: Icon, title, description, href, contexts }) => (
              <article className={styles.areaCard} key={title} data-stagger-item>
                <div className={styles.cardTopline}>
                  <span className={styles.cardNumber}>{number}</span>
                  <div className={styles.cardIconWrapper} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>

                <ul className={styles.contextPills} aria-label={`${title} application categories`}>
                  {contexts.map((context) => (
                    <li key={context} className={styles.contextPill}>
                      <span className={styles.contextPillBullet} aria-hidden="true" />
                      <span>{context}</span>
                    </li>
                  ))}
                </ul>

                {href && (
                  <Link className={styles.cardLinkPinned} href={href}>
                    <span>Explore this area</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className={styles.backOverviewLinks}>
            <Link className={styles.overviewLink} href="#construction-range">
              <span>Browse the full product range</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* The Full Construction Range */}
      <ConstructionRange
        familyIds={[
          "elastomeric-membranes",
          "bitumen-and-clear",
          "exterior-coatings",
          "bonding-and-repair",
          "epoxy-polyurethane-floor",
          "sealants-and-joints",
        ]}
        showCorosil
        title="The full construction range."
        intro="Every product in PolyTreat's construction profile, grouped by what it does and where it is used."
      />

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="construction-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Have a project or surface in mind?</span>
              <h2 id="construction-contact-title" className={styles.contactTitle}>
                Share the application with our team.
              </h2>
              <p className={styles.contactLead}>
                Include the surface type, project environment, and performance requirements
                to help direct your enquiry.
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
