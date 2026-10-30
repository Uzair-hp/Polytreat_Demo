import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Waves,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import { companyInfo } from "@/data/companyInfo";
import { industrialAnchors, type IndustrialSystemId } from "@/data/industrialWater";
import styles from "@/components/solutions/industrialWater.module.css";

export const metadata: Metadata = {
  title: "Boiler & Cooling Water Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's boiler-water and recirculating cooling-water treatment categories for industrial systems.",
};

const systems: {
  id: IndustrialSystemId;
  number: string;
  icon: typeof Gauge;
  title: string;
  description: string;
  contexts: string[];
}[] = [
  {
    id: "boiler",
    number: "01",
    icon: Gauge,
    title: "Boiler water systems",
    description:
      "Boilers heat water to produce steam for manufacturing and power. Treatment categories for these systems are considered in the context of boiler water chemistry, operating pressure, and thermal conditions.",
    contexts: [
      "Steam generation",
      "Feedwater conditioning",
      "Oxygen scavenging",
      "Internal sludge conditioning",
      "Condensate line protection",
    ],
  },
  {
    id: "cooling",
    number: "02",
    icon: Waves,
    title: "Cooling water systems",
    description:
      "Cooling loops circulate water across cooling towers and heat exchangers to carry heat away from critical equipment. Recirculation cycles, makeup water quality, and biofouling risks shape the operating context.",
    contexts: [
      "Recirculating cooling towers",
      "Open evaporative loops",
      "Closed chiller circuits",
      "Deposit & corrosion inhibition",
      "Microbiological biocides",
    ],
  },
];

export default function BoilerCoolingWaterPage() {
  return (
    <main className={styles.page} id="main-content">
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="boiler-cooling-title">
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span>Solutions</span>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions/industrial-water">Industrial water</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">Boiler &amp; cooling water</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <Waves size={15} aria-hidden="true" />
                Industrial water systems
              </span>

              <h1 id="boiler-cooling-title" className={styles.heroTitle}>
                Boiler &amp; cooling-water{" "}
                <span className={styles.heroHighlight}>treatment chemistry.</span>
              </h1>

              <p className={styles.heroSubline}>
                Explore PolyTreat&apos;s treatment categories for steam-generation boilers
                and recirculating cooling-water systems, formulated to control scale, corrosion,
                and microbiological growth.
              </p>

              <div className={styles.heroActions}>
                <Button variant="primary" href="#system-overview" icon={<ArrowRight size={16} />}>
                  Explore the systems
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  <span>Discuss an application</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className={styles.heroMediaFrame}>
              <Image
                src="/images/home/solution-water-boiler-room.jpg"
                alt="Industrial steam boiler plant room with burner and associated piping"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImg}
              />
              <div className={styles.mediaScrim} aria-hidden="true" />
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Gauge size={18} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <span className={styles.captionTitle}>Boiler &amp; Cooling Loops</span>
                  <span className={styles.captionScope}>Steam generation &amp; heat exchange circuits</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Systems Overview */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="system-overview"
        aria-labelledby="system-overview-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Explore by system</span>
              <h2 id="system-overview-title" className={styles.sectionTitle}>
                Two systems, distinct operating contexts.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Start with the system type. Water chemistry and operating conditions
              inform the technical discussion for each application.
            </p>
          </header>

          <div className={styles.systemsGridTwoCol} data-stagger-group>
            {systems.map(({ id, number, icon: Icon, title, description, contexts }) => (
              <article
                className={styles.systemCard}
                key={id}
                id={industrialAnchors[id]}
                data-stagger-item
              >
                <div className={styles.cardTopline}>
                  <span className={styles.cardNumber}>{number}</span>
                  <div className={styles.cardIconWrapper} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>

                <ul className={styles.contextPills} aria-label={`${title} contexts`}>
                  {contexts.map((context) => (
                    <li key={context} className={styles.contextPill}>
                      <span className={styles.contextPillBullet} aria-hidden="true" />
                      <span>{context}</span>
                    </li>
                  ))}
                </ul>

                <Link className={styles.cardLinkPinned} href="/contact#contact-form">
                  <span>Enquire about {title.toLowerCase()}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.backOverviewLinks}>
            <Link className={styles.overviewLink} href="/solutions/industrial-water">
              <span>Back to industrial water treatment hub</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="boiler-cooling-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Working with a boiler or cooling loop?</span>
              <h2 id="boiler-cooling-contact-title" className={styles.contactTitle}>
                Share the system context with our team.
              </h2>
              <p className={styles.contactLead}>
                Include the system type, operating pressures, makeup water parameters, and the
                information you need to direct your enquiry.
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
