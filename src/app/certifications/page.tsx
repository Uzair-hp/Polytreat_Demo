import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  Leaf,
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
import CertificateGallery from "@/components/certifications/CertificateGallery";
import { companyInfo } from "@/data/companyInfo";
import styles from "@/components/certifications/certifications.module.css";

export const metadata: Metadata = {
  title: "Quality & Certifications | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Explore PolyTreat's accredited ISO 9001:2015 Quality Management System and third-party compliance certificates covering water treatment and hygiene chemistry.",
  keywords:
    "PolyTreat quality, ISO 9001:2015 certificate, WHO-GMP compliance, UKcert Eco-Friendly certificate, chemical quality management, batch testing",
};

const heroPills = [
  { icon: BadgeCheck, label: "ISO 9001:2015 QMS" },
  { icon: ShieldCheck, label: "WHO-GMP Reference" },
  { icon: FileCheck2, label: "Private FDA Assessment" },
  { icon: Leaf, label: "Eco-Friendly Scope" },
];

export default function CertificationsPage() {
  return (
    <main className={styles.page} id="main-content">
      <HomeMotion />

      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="certs-title">
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <Link href="/quality">Quality</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Certifications</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Accreditation & Standards</span>
              <h1 id="certs-title" className={styles.heroTitle}>
                Verified quality systems &amp;{" "}
                <span className={styles.heroHighlight}>compliance documents</span>.
              </h1>
              <p className={styles.heroSubline}>
                Explore PolyTreat&apos;s accredited ISO 9001:2015 Quality Management System certificate
                and third-party compliance documents. Each document records its issuer, scope of manufacturing,
                and site jurisdiction with complete transparency.
              </p>

              <div className={styles.heroPills} role="list" aria-label="Core accreditations">
                {heroPills.map(({ icon: Icon, label }) => (
                  <div className={styles.heroPillItem} key={label} role="listitem">
                    <Icon size={15} className={styles.heroPillIcon} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Card */}
            <aside className={styles.heroRequestCard} aria-label="Document requests">
              <div className={styles.requestCardTop}>
                <div className={styles.requestCardChip} aria-hidden="true">
                  <FileCheck2 size={22} strokeWidth={2} />
                </div>
                <span className={styles.requestCardBadge}>Direct Support</span>
              </div>

              <h2 className={styles.requestCardTitle}>
                Need a certified copy or batch COA?
              </h2>
              <p className={styles.requestCardLead}>
                Our technical desk provides official high-resolution certificate scans, batch Certificates of Analysis (COA),
                and technical data sheets for client vendor audits and statutory compliance.
              </p>

              <Button variant="primary" href="/contact#contact-form">
                Request certified documents
              </Button>
            </aside>
          </div>
        </Container>
      </section>

      {/* 2. Certificate Library Section */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="certificate-library"
        aria-labelledby="library-title"
        data-reveal
      >
        <Container>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div>
              <span className={styles.sectionEyebrow}>Certificate library</span>
              <h2 id="library-title" className={styles.sectionTitle}>
                Official documents &amp; stated scopes.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              The scope shown on each certificate applies strictly to that document and its listed manufacturing activities.
              Click any certificate scan to inspect high-resolution details.
            </p>
          </div>

          <CertificateGallery />
        </Container>
      </section>

      {/* 3. Standards in Practice Section */}
      <section
        className={`${styles.section} ${styles.sectionTone}`}
        aria-labelledby="certs-standard-title"
        data-reveal
      >
        <Container>
          <div className={styles.standardsGrid}>
            <div className={styles.standardsCopy}>
              <span className={styles.sectionEyebrow}>Standards in practice</span>
              <h2 id="certs-standard-title" className={styles.sectionTitle}>
                How to read these documents.
              </h2>
              <p className={styles.standardsParagraph}>
                <strong>ISO 9001:2015</strong> certifies that our Goregaon (East) and manufacturing operations adhere to
                a structured, auditable Quality Management System (QMS). It validates standardized operational procedures,
                raw material screening, reaction control, and batch traceability — rather than testing individual chemical recipes.
              </p>
              <p className={styles.standardsParagraph}>
                The compliance documents referencing <strong>WHO-GMP</strong> and <strong>FDA</strong> are private third-party
                assessments issued by accredited inspection bodies (UKcert and UK Certification &amp; Assessment Ltd). They confirm
                facility good-manufacturing procedures for defined non-medicated home-care and institutional care products, and
                should not be conflated with direct statutory approvals by the WHO or U.S. FDA agencies.
              </p>
              <p className={styles.standardsParagraph}>
                Every dispatched batch of PolyTreat chemicals is independently accompanied by an authentic <strong>Certificate of Analysis (COA)</strong>
                recording lot-specific analytical findings: pH, specific gravity at 25 °C, active solids percentage, and viscosity.
              </p>

              <div className={styles.standardsAction}>
                <Button variant="secondary" href="/quality#pqrs">
                  Explore our PQRS Framework <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Scope Summary Checklist */}
            <div className={styles.scopeCard}>
              <div className={styles.scopeCardHeader}>
                <div className={styles.scopeCardIcon} aria-hidden="true">
                  <ShieldCheck size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.scopeCardTitle}>Scope at a glance</h3>
                  <p className={styles.scopeCardSubtitle}>Official jurisdiction and category mapping</p>
                </div>
              </div>

              <ul className={styles.scopeList} role="list">
                <li className={styles.scopeItem}>
                  <CheckCircle2 size={16} className={styles.scopeItemIcon} aria-hidden="true" />
                  <div className={styles.scopeItemText}>
                    <strong>ISO 9001:2015 QMS (SMCS)</strong>
                    <span>Manufacturing scope covers industrial water treatment &amp; cleaning formulations at Goregaon (East).</span>
                  </div>
                </li>
                <li className={styles.scopeItem}>
                  <CheckCircle2 size={16} className={styles.scopeItemIcon} aria-hidden="true" />
                  <div className={styles.scopeItemText}>
                    <strong>WHO-GMP Compliance Reference (UKcert)</strong>
                    <span>Private GMP compliance audit covering defined non-medicated home-care &amp; facility care products.</span>
                  </div>
                </li>
                <li className={styles.scopeItem}>
                  <CheckCircle2 size={16} className={styles.scopeItemIcon} aria-hidden="true" />
                  <div className={styles.scopeItemText}>
                    <strong>FDA-Referenced Assessment (UKcert)</strong>
                    <span>Independent private assessment of facility procedures for listed institutional cleaning ranges.</span>
                  </div>
                </li>
                <li className={styles.scopeItem}>
                  <CheckCircle2 size={16} className={styles.scopeItemIcon} aria-hidden="true" />
                  <div className={styles.scopeItemText}>
                    <strong>Eco-Friendly Certificate (UKcert)</strong>
                    <span>Applies verified environmental evaluation criteria to defined institutional cleaning products.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="certs-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Compliance &amp; Document Requests</span>
              <h2 id="certs-contact-title" className={styles.contactTitle}>
                Require audit documents or tender specifications?
              </h2>
              <p className={styles.contactLead}>
                Our regulatory and technical quality desk coordinates directly with client quality managers, safety engineers,
                and procurement teams to supply formal documentation promptly.
              </p>

              <div className={styles.contactActions}>
                <Button variant="primary" href="/contact#contact-form">
                  Request audit package
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
