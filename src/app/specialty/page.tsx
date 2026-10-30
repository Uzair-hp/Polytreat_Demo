import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Snowflake,
  Wind,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import { companyInfo } from "@/data/companyInfo";
import {
  specialtyOtherLines,
  specialtyProducts,
} from "@/data/specialtyProducts";
import styles from "@/components/solutions/specialtyProducts.module.css";

export const metadata: Metadata = {
  title: "Specialty Products | PolyTreat Chemicals",
  description:
    "PolyTreat's specialty products: COROSIL rust converter primer, POLYDOR-WS odour neutraliser, and POLYKLIN AHU and FCU coil cleaning compound.",
};

const productIconsBySlug = {
  corosil: ShieldCheck,
  "polydor-ws": Wind,
  polyklin: Snowflake,
} as const;

export default function SpecialtyPage() {
  return (
    <main className={styles.page}>
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="specialty-title">
        <Container>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/solutions">Solutions</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Specialty products
            </span>
          </nav>

          <div className={styles.heroGrid}>
            {/* Left Copy */}
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <FlaskConical size={14} aria-hidden="true" />
                Specialty Formulations
              </span>

              <h1 id="specialty-title" className={styles.heroTitle}>
                Chemistry built around a{" "}
                <span className={styles.heroHighlight}>specific problem.</span>
              </h1>

              <p className={styles.heroSubline}>
                Alongside the industrial water and construction ranges, PolyTreat
                makes a targeted set of specialty products engineered for one critical
                job each.
              </p>

              <div className={styles.heroActions}>
                <Button href="#flagship-products" variant="primary">
                  Explore the flagship range
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  Discuss an application <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Media Graphic Frame */}
            <div className={styles.heroMediaFrame}>
              <div className={styles.heroGraphicGrid} aria-hidden="true" />
              <div className={styles.heroCenterBadge}>
                <span className={styles.badgeIconCircle}>
                  <FlaskConical size={36} strokeWidth={1.6} />
                </span>
                <span className={styles.badgeName}>Specialty Range</span>
              </div>
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <ShieldCheck size={18} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <strong className={styles.captionTitle}>Dedicated Problem-Solvers</strong>
                  <span className={styles.captionScope}>
                    COROSIL · POLYDOR-WS · POLYKLIN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Flagship Products Section */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="flagship-products"
        aria-labelledby="flagship-products-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Flagship products</span>
              <h2 id="flagship-products-title" className={styles.sectionTitle}>
                Three flagship specialty solutions.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Each product has its own documented specification, surface preparation,
              handling guidelines, and physical data from published technical literature.
            </p>
          </header>

          <div className={styles.flagshipGrid} data-stagger-group>
            {specialtyProducts.map((product) => {
              const Icon = productIconsBySlug[product.slug as keyof typeof productIconsBySlug];
              return (
                <article className={styles.flagshipCard} key={product.slug} data-stagger-item>
                  <div className={styles.cardTopline}>
                    <div className={styles.cardIconWrapper} aria-hidden="true">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className={styles.categoryBadge}>{product.category}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{product.name}</h3>
                  <p className={styles.cardDesc}>{product.summary}</p>

                  <ul
                    className={styles.contextPills}
                    aria-label={`${product.name} applications`}
                  >
                    {product.applications.slice(0, 4).map((application) => (
                      <li key={application} className={styles.contextPill}>
                        <span className={styles.contextPillBullet} aria-hidden="true" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>

                  <Link className={styles.cardLinkPinned} href={`/specialty/${product.slug}`}>
                    <span>View product specification</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Other Specialty Lines */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="other-specialty"
        aria-labelledby="other-specialty-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Other specialty lines</span>
              <h2 id="other-specialty-title" className={styles.sectionTitle}>
                Further lines in the industrial range.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              These lines sit within PolyTreat&apos;s published industrial profile.
              Share your application and our technical team will confirm availability
              and documentation.
            </p>
          </header>

          <div className={styles.otherLinesGrid} data-stagger-group>
            {specialtyOtherLines.map((line) => (
              <article className={styles.otherLineCard} key={line.title} data-stagger-item>
                <h3 className={styles.otherLineTitle}>{line.title}</h3>
                <p className={styles.otherLineText}>{line.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.backOverviewLinks}>
            <Link className={styles.overviewLink} href="/solutions/industrial-water">
              <span>Explore industrial water solutions</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link className={styles.overviewLink} href="/solutions/construction-chemistry">
              <span>Explore construction chemistry</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
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
              <span className={styles.contactEyebrow}>Not sure which one fits?</span>
              <h2 id="specialty-contact-title" className={styles.contactTitle}>
                Tell us the problem you are trying to solve.
              </h2>
              <p className={styles.contactLead}>
                The surface, the process, or the equipment tells us more than a product
                name. Share the context and our team will point you to the right solution.
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
