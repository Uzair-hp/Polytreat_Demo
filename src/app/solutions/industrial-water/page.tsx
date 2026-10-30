import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Droplets,
  Factory,
  Filter,
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
import {
  industrialCategoryGroups,
  industrialChallenges,
  industrialExtraFamilies,
  industrialSystems,
  type IndustrialSystemId,
} from "@/data/industrialWater";
import styles from "@/components/solutions/industrialWater.module.css";

export const metadata: Metadata = {
  title: "Industrial Water Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial water treatment categories for boiler, cooling-water, reverse-osmosis, and effluent systems, plus the wider industrial range.",
};

const systemIcons: Record<IndustrialSystemId, LucideIcon> = {
  boiler: Gauge,
  cooling: Waves,
  ro: Filter,
  effluent: Factory,
};

export default function IndustrialWaterPage() {
  return (
    <main className={styles.page} id="main-content">
      <HomeMotion />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="industrial-water-title">
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span>Solutions</span>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">Industrial water</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <Droplets size={15} aria-hidden="true" />
                Industrial water treatment
              </span>

              <h1 id="industrial-water-title" className={styles.heroTitle}>
                Water treatment for the systems that{" "}
                <span className={styles.heroHighlight}>keep plants running.</span>
              </h1>

              <p className={styles.heroSubline}>
                PolyTreat&apos;s industrial range covers the treatment categories used across
                boiler, cooling-water, reverse-osmosis, and effluent systems. Start with
                the system you are running, then narrow down to the category that
                matches the problem.
              </p>

              <div className={styles.heroActions}>
                <Button variant="primary" href="#water-systems" icon={<ArrowRight size={16} />}>
                  Explore by system
                </Button>
                <Link className={styles.textLink} href="/contact#contact-form">
                  <span>Discuss an application</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className={styles.heroMediaFrame}>
              <Image
                src="/images/home/reverse-osmosis-plant.webp"
                alt="Reverse-osmosis plant with membrane housings, high-pressure pumps and process piping"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImg}
              />
              <div className={styles.mediaScrim} aria-hidden="true" />
              <div className={styles.mediaCaption}>
                <div className={styles.captionIconChip} aria-hidden="true">
                  <Droplets size={18} strokeWidth={2} />
                </div>
                <div className={styles.captionText}>
                  <span className={styles.captionTitle}>Industrial Process Water</span>
                  <span className={styles.captionScope}>Boiler · Cooling · RO · Effluent Systems</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Explore by System */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="water-systems"
        aria-labelledby="water-systems-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Explore by system</span>
              <h2 id="water-systems-title" className={styles.sectionTitle}>
                Industrial water categories.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Start with the system type to find the related product-family overview.
              The system and water conditions help define the relevant category.
            </p>
          </header>

          <div className={styles.systemsGrid} data-stagger-group>
            {industrialSystems.map(({ id, number, title, description, href, linkText }) => {
              const Icon = systemIcons[id];
              return (
                <article className={styles.systemCard} key={id} data-stagger-item>
                  <div className={styles.cardTopline}>
                    <span className={styles.cardNumber}>{number}</span>
                    <div className={styles.cardIconWrapper} aria-hidden="true">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDesc}>{description}</p>
                  <Link className={styles.cardLinkPinned} href={href}>
                    <span>{linkText}</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 2. System Challenges */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="system-challenges"
        aria-labelledby="system-challenges-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>What the system has to manage</span>
              <h2 id="system-challenges-title" className={styles.sectionTitle}>
                Every system has its own set of problems.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Treatment starts with what the system is dealing with. These are the
              conditions each water system has to manage, and the context our
              categories are matched against.
            </p>
          </header>

          <div className={styles.challengesGrid} data-stagger-group>
            {industrialChallenges.map(({ id, title, manages }) => {
              const Icon = systemIcons[id];
              return (
                <article className={styles.challengeCard} key={id} data-stagger-item>
                  <div className={styles.challengeHeading}>
                    <div className={styles.challengeIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h3 className={styles.challengeTitle}>{title}</h3>
                  </div>
                  <ul className={styles.challengeList}>
                    {manages.map((item) => (
                      <li key={item} className={styles.challengeItem}>
                        <span className={styles.challengeBullet} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Treatment Categories */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="treatment-categories"
        aria-labelledby="treatment-categories-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Treatment categories</span>
              <h2 id="treatment-categories-title" className={styles.sectionTitle}>
                Categories in the industrial range.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              The categories PolyTreat works with, grouped by the system they are
              used in. Each one links to the matching system overview.
            </p>
          </header>

          <div className={styles.categoriesGrid} data-stagger-group>
            {industrialCategoryGroups.map(({ id, title, summary, href, categories }) => (
              <article className={styles.categoryCard} key={id} data-stagger-item>
                <h3 className={styles.categoryTitle}>{title}</h3>
                <p className={styles.categorySummary}>{summary}</p>
                <ul className={styles.categoryTagList} aria-label={`${title} categories`}>
                  {categories.map((category) => (
                    <li key={category} className={styles.categoryTag}>
                      <span className={styles.categoryBullet} aria-hidden="true" />
                      <span className={styles.categoryText}>{category}</span>
                    </li>
                  ))}
                </ul>
                <Link className={styles.categoryLink} href={href}>
                  <span>Open {title.toLowerCase()} overview</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <p className={styles.disclaimerNote}>
            Category names follow PolyTreat&apos;s published industrial product profile.
            Specific products, current availability, and technical data are confirmed
            for each application.
          </p>
        </Container>
      </section>

      {/* 4. Wider Industrial Range */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="other-categories"
        aria-labelledby="other-categories-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Wider industrial range</span>
              <h2 id="other-categories-title" className={styles.sectionTitle}>
                Also in the industrial catalogue.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              These families come from the same industrial product profile and sit
              outside the four system pages above. Share the application and we will
              confirm what is currently available and what documentation applies.
            </p>
          </header>

          <ul className={styles.extraList} data-stagger-group>
            {industrialExtraFamilies.map((family) => (
              <li className={styles.extraRow} key={family.title} data-stagger-item>
                <div className={styles.extraRowLeft}>
                  <h3 className={styles.extraRowTitle}>{family.title}</h3>
                  <p className={styles.extraRowDesc}>{family.description}</p>
                  {family.href && (
                    <Link className={styles.extraRowLink} href={family.href}>
                      <span>Open {family.title.toLowerCase()}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  )}
                </div>
                <ul className={styles.extraRowTags} aria-label={`${family.title} categories`}>
                  {family.categories.map((category) => (
                    <li key={category} className={styles.categoryTag}>
                      <span className={styles.categoryBullet} aria-hidden="true" />
                      <span className={styles.categoryText}>{category}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className={styles.backOverviewLinks}>
            <Link className={styles.overviewLink} href="/specialty">
              <span>Explore the specialty products</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link className={styles.overviewLink} href="/contact#contact-form">
              <span>Discuss another industrial application</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="industrial-water-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Have a system or site in mind?</span>
              <h2 id="industrial-water-contact-title" className={styles.contactTitle}>
                Share the application with our team.
              </h2>
              <p className={styles.contactLead}>
                Include the system type, the water analysis you have, and the operating
                conditions so we can point you to the right category.
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
