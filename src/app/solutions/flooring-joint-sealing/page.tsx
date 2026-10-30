import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
  title: "Flooring & Joint Sealing | PolyTreat Chemicals",
  description:
    "Explore PolyTreat construction categories for protective flooring systems and joint or crack sealants.",
};

const productAreas = [
  {
    number: "01",
    icon: Layers3,
    title: "Flooring & surface protection",
    description:
      "The supplied profile lists epoxy and polyurethane coating categories, repair mortars, and decorative flooring systems for built surfaces.",
    contexts: ["Factory floors", "Floor toppings", "Decorative flooring"],
  },
  {
    number: "02",
    icon: Link2,
    title: "Joint & crack sealants",
    description:
      "Sealant categories for cracks and joints in concrete, windows, and other listed building-surface applications.",
    contexts: ["Concrete cracks", "Expansion joints", "Window frames"],
  },
];

export default function FlooringJointSealingPage() {
  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="flooring-joint-title">
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
              Flooring &amp; joint sealing
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <ShieldCheck size={14} aria-hidden="true" />
                Construction &amp; Surface Protection
              </span>

              <h1 id="flooring-joint-title" className={styles.heroTitle}>
                Flooring systems and{" "}
                <span className={styles.heroHighlight}>joint sealing.</span>
              </h1>

              <p className={styles.heroSubline}>
                Explore protective flooring and coating categories alongside sealants
                for cracks and joints in built surfaces.
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
                src="/images/home/pcs-joint-filling.webp"
                alt="Worker filling expansion joint in a concrete industrial floor with sealant"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImg}
              />
              <div className={styles.mediaScrim} aria-hidden="true" />
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Link2 size={20} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <strong className={styles.captionTitle}>PCS Joint Filling &amp; Sealants</strong>
                  <span className={styles.captionScope}>
                    Expansion Joints · Concrete Cracks · Epoxy Mortars
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
              <span className={styles.sectionEyebrow}>Explore by surface need</span>
              <h2 id="product-areas-title" className={styles.sectionTitle}>
                Two distinct surface applications.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Flooring systems protect or finish larger surface areas; sealants address
              gaps and cracks. The right category depends on the surface and project.
            </p>
          </header>

          <div className={styles.areasGridTwoCol} data-stagger-group>
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
        familyIds={["epoxy-polyurethane-floor", "sealants-and-joints"]}
        title="Flooring, coating and sealant products."
        intro="The products PolyTreat's construction profile lists for industrial floors, protective finishes, and joint and crack sealing."
      />

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="flooring-joint-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Planning a floor or joint application?</span>
              <h2 id="flooring-joint-contact-title" className={styles.contactTitle}>
                Share the surface and project context.
              </h2>
              <p className={styles.contactLead}>
                Detailing traffic conditions, chemical exposures, joint dimensions, and substrate
                materials helps our team recommend the right flooring or sealant specification.
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
