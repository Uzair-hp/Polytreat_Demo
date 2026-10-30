import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Factory,
  Filter,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import { companyInfo } from "@/data/companyInfo";
import { industrialAnchors, type IndustrialSystemId } from "@/data/industrialWater";
import styles from "@/components/solutions/industrialWater.module.css";

export const metadata: Metadata = {
  title: "RO & Effluent Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat product categories for reverse-osmosis membrane systems and industrial effluent treatment.",
};

const treatmentAreas: {
  id: IndustrialSystemId;
  number: string;
  icon: typeof Filter;
  title: string;
  description: string;
  contexts: string[];
}[] = [
  {
    id: "ro",
    number: "01",
    icon: Filter,
    title: "Reverse-osmosis membrane systems",
    description:
      "PolyTreat catalogues chemical categories for membrane scale inhibition, offline membrane cleaning, and biological fouling control in industrial RO plants.",
    contexts: [
      "RO antiscalants & dispersants",
      "Acidic & alkaline membrane cleaners",
      "Non-oxidising biocides",
      "SDI reduction & silt control",
      "Pretreatment coagulants",
    ],
  },
  {
    id: "effluent",
    number: "02",
    icon: Factory,
    title: "Effluent treatment & wastewater",
    description:
      "Effluent treatment categories provide chemistry for primary clarifier coagulation, secondary flocculation, colour removal, and mechanical sludge dewatering.",
    contexts: [
      "Organic & inorganic coagulants",
      "Polyelectrolyte flocculants",
      "Sludge conditioning & dewatering",
      "Heavy metal precipitation",
      "Effluent colour removal",
    ],
  },
];

export default function RoEffluentPage() {
  return (
    <main className={styles.page} id="main-content">
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="ro-effluent-title">
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span>Solutions</span>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions/industrial-water">Industrial water</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">RO &amp; effluent</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <Droplets size={15} aria-hidden="true" />
                Membrane &amp; wastewater systems
              </span>

              <h1 id="ro-effluent-title" className={styles.heroTitle}>
                RO and effluent{" "}
                <span className={styles.heroHighlight}>treatment categories.</span>
              </h1>

              <p className={styles.heroSubline}>
                Explore PolyTreat&apos;s product categories for reverse-osmosis membrane systems
                and industrial wastewater treatment processes, designed for continuous operational compliance.
              </p>

              <div className={styles.heroActions}>
                <Button variant="primary" href="#treatment-areas" icon={<ArrowRight size={16} />}>
                  Explore treatment areas
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  <span>Discuss an application</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className={styles.heroMediaFrame}>
              <Image
                src="/images/home/portfolio-ro-effluent.webp"
                alt="Industrial effluent treatment plant clarifiers and biological aeration sedimentation basins"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImg}
              />
              <div className={styles.mediaScrim} aria-hidden="true" />
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Filter size={18} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <span className={styles.captionTitle}>RO &amp; Effluent Plants</span>
                  <span className={styles.captionScope}>Membrane care &amp; wastewater clarifiers</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Overview */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="treatment-areas"
        aria-labelledby="treatment-areas-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Explore by process</span>
              <h2 id="treatment-areas-title" className={styles.sectionTitle}>
                Two distinct water-treatment applications.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              RO membrane systems and effluent processes have different treatment needs.
              Product selection depends on the system and process conditions.
            </p>
          </header>

          <div className={styles.systemsGridTwoCol} data-stagger-group>
            {treatmentAreas.map(({ id, number, icon: Icon, title, description, contexts }) => (
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

                <ul className={styles.contextPills} aria-label={`${title} categories`}>
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

          <p className={styles.disclaimerNote}>
            The catalogue describes broad product categories; confirm product fit
            against the specific system and its operating conditions.
          </p>

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
        aria-labelledby="ro-effluent-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Have an RO or effluent application?</span>
              <h2 id="ro-effluent-contact-title" className={styles.contactTitle}>
                Share the process context with our team.
              </h2>
              <p className={styles.contactLead}>
                Include the system type, feed water quality, operating recovery or effluent
                parameters to direct your enquiry to the right technical formulation.
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
