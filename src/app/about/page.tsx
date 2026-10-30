import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  Leaf,
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
import { locationSites } from "@/data/locations";
import styles from "@/components/about/about.module.css";

export const metadata: Metadata = {
  title: "About Us | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "PolyTreat Chemicals has formulated and manufactured specialty industrial water, construction, and institutional care chemicals since 1987, from manufacturing facilities in Tarapur MIDC and Goregaon, Mumbai.",
  keywords:
    "about PolyTreat Chemicals, ISO 9001:2015 chemical manufacturer, Tarapur MIDC plant, Goregaon chemical unit, water treatment chemicals since 1987",
};

const glance = [
  { label: "Established", value: "1987, Mumbai" },
  { label: "Certifications", value: "ISO 9001:2015 · WHO-GMP reference · Private FDA reference · UKcert Eco-Friendly" },
  { label: "Manufacturing", value: "Tarapur MIDC · Goregaon (East), Mumbai" },
  { label: "Corporate office", value: "Goregaon (West), Mumbai" },
  { label: "Divisions", value: "Industrial water · Construction · V-Klin care · Specialty" },
  { label: "Markets", value: "Across India, plus Middle East & South Africa exports" },
];

const credentials = [
  {
    value: "Since 1987",
    title: "Manufacturing since 1987",
    description: "Specialty chemistry formulated and produced in our own plants for over 35 years.",
  },
  {
    value: "ISO 9001:2015",
    title: "Certified quality system",
    description: "SMCS certified, AIAO-BAR USA accredited, for water treatment and hygiene chemicals.",
  },
  {
    value: "2 units",
    title: "Tarapur MIDC & Goregaon",
    description: "Heavy chemical synthesis and green-products manufacturing units in Maharashtra.",
  },
  {
    value: "Exports",
    title: "Middle East & Africa",
    description: "Specialty formulations supplied to international industrial processing markets.",
  },
];

const milestones = [
  {
    era: "1987",
    title: "Founded in Mumbai",
    description:
      "PolyTreat Chemicals begins as a specialized manufacturer of industrial water-treatment formulations.",
  },
  {
    era: "Manufacturing",
    title: "Tarapur MIDC unit",
    description:
      "Heavy chemical manufacturing is established at Tarapur MIDC, Palghar district, scaling capacity for boilers, cooling towers, and process chemicals.",
  },
  {
    era: "Quality",
    title: "ISO 9001:2015 certification",
    description:
      "The quality management system is certified to ISO 9001:2015 by SMCS, accredited by AIAO-BAR USA, covering water-treatment and hygiene chemicals manufacture.",
  },
  {
    era: "Care products",
    title: "V-Klin hygiene range",
    description:
      "The institutional and home-care cleaning range is formulated and manufactured at the Goregaon (East) green-products division.",
  },
  {
    era: "Exports",
    title: "Middle East & South Africa",
    description:
      "Specialty formulations begin shipping to industrial buyers across the Middle East and African markets.",
  },
];

const brands = [
  {
    icon: Droplets,
    number: "01",
    eyebrow: "Industrial water & process",
    title: "Polytreat & Polycide",
    description:
      "Water-treatment and biocide ranges for boilers, cooling towers, RO systems, effluent, and process applications.",
    categories: ["Boiler water", "Cooling water", "RO & effluent", "Biocides"],
    color: "#1B5FA8",
    bg: "#EBF3FA",
  },
  {
    icon: Layers3,
    number: "02",
    eyebrow: "Construction chemistry",
    title: "Polyproof, Polybond, Polyroof & Polygard",
    description:
      "Waterproofing membranes, protective coatings, concrete-repair systems, flooring, and sealants for built structures.",
    categories: ["Waterproofing", "Coatings", "Flooring", "Sealants"],
    color: "#E07B1A",
    bg: "#FEF3E7",
  },
  {
    icon: Leaf,
    number: "03",
    eyebrow: "Institutional & home care",
    title: "V-Klin Care Range",
    description:
      "Cleaning products for hotels, hospitals, facilities, and homes — floor, surface, hand, dish, glass, and washroom care.",
    categories: ["Floor & surface", "Hand & dish", "Glass & toilet"],
    color: "#0E8F5E",
    bg: "#DDF6EA",
  },
  {
    icon: FlaskConical,
    number: "04",
    eyebrow: "Flagship specialty",
    title: "Polydor-WS · Corosil · Polyklin",
    description:
      "Single-problem formulations: odor neutralization, rust conversion, and HVAC coil cleaning.",
    categories: ["Odor control", "Rust converter", "Coil cleaner"],
    color: "#5B4BC4",
    bg: "#F1EFFF",
  },
];

const facilities = [
  { icon: Building2, site: locationSites[0], isGreen: false },
  { icon: Leaf, site: locationSites[1], isGreen: true },
  { icon: Factory, site: locationSites[2], isGreen: false },
];

const rdPoints = [
  "In-house laboratory with daily analytical quality monitoring",
  "Raw-material purity screening and finished-product inspection",
  "Calibrated monitoring of active solids, pH, specific gravity (25 °C), and viscosity",
  "Customised treatment programmes engineered for specific plant metallurgy",
  "Technical consultation on water chemistry and industrial dosing advice",
];

const heroFacts = [
  { icon: BadgeCheck, label: "ISO 9001:2015 Certified" },
  { icon: Factory, label: "2 Production Units" },
  { icon: Droplets, label: "Formulating Since 1987" },
  { icon: Leaf, label: "V-Klin Care Range" },
];

export default function AboutPage() {
  return (
    <main className={styles.page} id="main-content">
      <HomeMotion />

      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="about-title">
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>About Us</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>About PolyTreat</span>
              <h1 id="about-title" className={styles.heroTitle}>
                Applied chemistry, manufactured in-house{" "}
                <span className={styles.heroHighlight}>since 1987</span>.
              </h1>
              <p className={styles.heroSubline}>
                PolyTreat Chemicals Pvt. Ltd. formulates and produces specialty chemicals for
                industrial water systems, construction projects, and everyday facility care — from
                two manufacturing units in Maharashtra and a corporate office in Mumbai.
              </p>

              <ul className={styles.heroFacts} role="list" aria-label="Key company highlights">
                {heroFacts.map(({ icon: Icon, label }) => (
                  <li className={styles.heroFactItem} key={label}>
                    <Icon size={15} className={styles.heroFactIcon} aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glance Aside Card */}
            <aside className={styles.glanceCard} aria-label="PolyTreat at a glance">
              <div className={styles.glanceHeader}>
                <div className={styles.glanceIconChip} aria-hidden="true">
                  <Building2 size={22} strokeWidth={2} />
                </div>
                <div className={styles.glanceHeaderCopy}>
                  <span className={styles.glanceKicker}>Company profile</span>
                  <h2 className={styles.glanceTitle}>PolyTreat at a glance</h2>
                </div>
              </div>

              <ul className={styles.glanceList} role="list">
                {glance.map(({ label, value }) => (
                  <li className={styles.glanceRow} key={label}>
                    <span className={styles.glanceLabel}>{label}</span>
                    <span className={styles.glanceValue}>{value}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* 2. Trust Proof Bar */}
      <div className={styles.trustProofBar} aria-label="Credentials & Statistics">
        <Container>
          <div className={styles.trustProofGrid} role="list">
            {credentials.map(({ value, title, description }) => (
              <div className={styles.trustProofItem} key={value} role="listitem">
                <span className={styles.trustProofValue}>{value}</span>
                <h3 className={styles.trustProofHeading}>{title}</h3>
                <p className={styles.trustProofDesc}>{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. Our Story Section */}
      <section className={`${styles.section} ${styles.sectionLight}`} id="story" aria-labelledby="story-title" data-reveal>
        <Container>
          <div className={styles.storyGrid}>
            <div className={styles.storyCopy}>
              <span className={styles.sectionEyebrow}>Our story</span>
              <h2 id="story-title" className={styles.sectionTitle}>
                A manufacturer first, since the beginning.
              </h2>
              <p className={styles.storyParagraph}>
                PolyTreat Chemicals Pvt. Ltd. — also known as Polytreat Chemical Industries — has
                manufactured specialty chemistry from Mumbai since 1987. Four divisions run under a
                single disciplined quality system: heavy industrial water and process chemicals, construction
                chemicals, institutional hygiene care (V-Klin), and problem-solving specialty lines.
              </p>
              <p className={styles.storyParagraph}>
                Everything PolyTreat supplies is formulated and produced in its own plants. The
                range is built around performance and reproducible value, backed by transparent technical
                documentation and a direct conversation with the chemists who make the products.
              </p>

              <div className={styles.storyAction}>
                <Button variant="primary" href="/#solutions">
                  Explore our solution areas <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <ol className={styles.timeline} aria-label="PolyTreat Milestones Timeline">
              {milestones.map(({ era, title, description }) => (
                <li className={styles.timelineItem} key={title}>
                  <span className={styles.timelineEra}>{era}</span>
                  <h3 className={styles.timelineTitle}>{title}</h3>
                  <p className={styles.timelineDesc}>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 4. Brand Architecture Section */}
      <section className={`${styles.section} ${styles.sectionTone}`} id="brands" aria-labelledby="brands-title" data-reveal>
        <Container>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div>
              <span className={styles.sectionEyebrow}>Brand architecture</span>
              <h2 id="brands-title" className={styles.sectionTitle}>Four ranges, one manufacturer.</h2>
            </div>
            <p className={styles.sectionLead}>
              PolyTreat&apos;s product families map to the work they do — industrial water chemistry,
              construction protection, everyday hygiene care, and single-problem specialty formats.
            </p>
          </div>

          <div className={styles.brandsGrid} role="list" aria-label="Brand Architecture">
            {brands.map(({ icon: Icon, number, eyebrow, title, description, categories, color, bg }) => (
              <article
                className={styles.brandCard}
                key={title}
                role="listitem"
                style={
                  {
                    "--brand-color": color,
                    "--brand-bg": bg,
                  } as React.CSSProperties
                }
              >
                <div className={styles.brandCardTop}>
                  <div className={styles.brandIconChip} aria-hidden="true">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <span className={styles.brandNumber}>{number}</span>
                </div>

                <span className={styles.brandEyebrow}>{eyebrow}</span>
                <h3 className={styles.brandTitle}>{title}</h3>
                <p className={styles.brandDesc}>{description}</p>

                <ul className={styles.brandCategories} aria-label={`${title} categories`}>
                  {categories.map((category) => (
                    <li className={styles.brandCategoryPill} key={category}>
                      {category}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Infrastructure Section */}
      <section className={`${styles.section} ${styles.sectionLight}`} id="infrastructure" aria-labelledby="infra-title" data-reveal>
        <Container>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingCenter}`}>
            <span className={styles.sectionEyebrow}>Infrastructure</span>
            <h2 id="infra-title" className={styles.sectionTitle}>Where PolyTreat makes its products.</h2>
            <p className={styles.sectionLead}>Two manufacturing units and a corporate office, all within Maharashtra.</p>
          </div>

          <div className={styles.infraGrid} role="list" aria-label="Company Facilities">
            {facilities.map(({ icon: Icon, site, isGreen }) => (
              <article
                className={`${styles.infraCard} ${isGreen ? styles.infraCardGreen : ""}`}
                key={site.id}
                role="listitem"
              >
                <div className={styles.infraIcon} aria-hidden="true">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className={styles.infraKind}>{site.kind}</span>
                <h3 className={styles.infraTitle}>{site.title}</h3>
                <address className={styles.infraAddress}>{site.addressLines.join("\n")}</address>
                <span className={styles.infraNote}>
                  <MapPin size={14} className={styles.infraNoteIcon} aria-hidden="true" />
                  <span>{site.note}</span>
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Quality & R&D Section */}
      <section className={`${styles.section} ${styles.sectionTone}`} id="quality" aria-labelledby="rd-title" data-reveal>
        <Container>
          <div className={styles.rdLayout}>
            <div className={styles.rdCopy}>
              <span className={styles.sectionEyebrow}>Quality &amp; Technical Support</span>
              <h2 id="rd-title" className={styles.sectionTitle}>
                Quality control and technical support, in one place.
              </h2>
              <p className={styles.storyParagraph}>
                Formulations are verified in our in-house laboratory, where raw materials and
                finished batches are tested as part of a daily analytical routine. Calibrated instruments monitor
                pH, specific gravity at 25 °C, active solids percentage, and viscosity.
              </p>
              <p className={styles.storyParagraph}>
                The same discipline underpins our ISO 9001:2015 certification, whose
                scope covers the manufacture of water treatment chemicals and hygienic institutional cleaning formulations.
                Our operational governance follows the PQRS framework: Performance, Quality, Reliability, and Service.
              </p>

              <div className={styles.storyAction}>
                <Button variant="secondary" href="/quality#pqrs">
                  Read about the PQRS framework <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className={styles.rdPanel}>
              <div className={styles.rdPanelHeader}>
                <div className={styles.rdPanelIcon} aria-hidden="true">
                  <FlaskConical size={22} strokeWidth={2} />
                </div>
                <div>
                  <span className={styles.rdPanelKicker}>Quality approach</span>
                  <h3 className={styles.rdPanelTitle}>How quality is maintained</h3>
                </div>
              </div>

              <ul className={styles.rdList} role="list">
                {rdPoints.map((point) => (
                  <li className={styles.rdItem} key={point}>
                    <Check size={16} className={styles.rdItemIcon} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. ISO 9001:2015 Certificate Showcase */}
      <section className={`${styles.section} ${styles.sectionLight}`} id="certification" aria-labelledby="cert-title" data-reveal>
        <Container>
          <div className={styles.certLayout}>
            <Link
              className={styles.certFigure}
              href="/certifications"
              aria-label="View ISO 9001:2015 Certificate"
            >
              <Image
                src="/certifications/iso-9001-2015-quality-certificate.jpeg"
                alt="PolyTreat Chemicals ISO 9001:2015 quality management system certificate"
                width={360}
                height={476}
                className={styles.certImg}
                loading="lazy"
              />
            </Link>

            <div className={styles.certCopy}>
              <span className={styles.sectionEyebrow}>Certification & Compliance</span>
              <h2 id="cert-title" className={styles.sectionTitle}>
                ISO 9001:2015, for water treatment and hygiene care manufacturing.
              </h2>
              <p className={styles.storyParagraph}>
                Listed scope: manufacturing of water treatment chemicals and homecare, hygienic &amp;
                industrial cleaning chemicals. The certificate is issued by SM Certification Services (SMCS)
                and accredited by AIAO-BAR USA, for the Goregaon (East) site.
              </p>
              <p className={styles.storyParagraph}>
                Review our complete certificate library to examine our WHO-GMP reference, FDA requirement reference,
                and UKcert Eco-Friendly documentation.
              </p>

              <div className={styles.certActions}>
                <Button variant="primary" href="/certifications">
                  View all certifications
                </Button>
                <Button variant="secondary" href="/contact#contact-form">
                  Request audit package
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="about-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Start a Conversation</span>
              <h2 id="about-contact-title" className={styles.contactTitle}>
                Let&apos;s talk about your application.
              </h2>
              <p className={styles.contactLead}>
                Tell us about your system, industrial plant, or facility care requirements,
                and our chemical specialists will direct your enquiry to the right technical desk.
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
                label="Technical &amp; sales"
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
