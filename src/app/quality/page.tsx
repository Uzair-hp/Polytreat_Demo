import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  FlaskConical,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import HomeMotion from "@/components/home/HomeMotion";
import PqrsAnimatedGrid from "@/components/quality/PqrsAnimatedGrid";
import { companyInfo } from "@/data/companyInfo";
import styles from "@/components/quality/quality.module.css";

export const metadata: Metadata = {
  title: "Quality & Standards | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Explore PolyTreat's PQRS framework (Performance, Quality, Reliability, Service), in-house analytical lab testing, ISO 9001:2015 QMS, and technical documentation.",
};

const labWorkflow = [
  {
    step: "01",
    title: "Raw Material Inward",
    desc: "Incoming polymers, active biocides, and surfactants undergo physical-chemical screening and COA verification before release to blending tanks.",
  },
  {
    step: "02",
    title: "Reaction & Blending",
    desc: "Automated and semi-automated blending protocols maintain strict reaction temperatures, mixing speeds, and addition sequences per SOPs.",
  },
  {
    step: "03",
    title: "Analytical QC Testing",
    desc: "Every finished lot is tested in our in-house QC laboratory for pH, specific gravity at 25 °C, active solid content, viscosity, and appearance.",
  },
  {
    step: "04",
    title: "Sample Archival & COA",
    desc: "Retained reference samples are sealed and catalogued in our sample archives. An official Certificate of Analysis (COA) is issued for every dispatch.",
  },
];

const facts = [
  {
    label: "Quality System",
    value: "ISO 9001:2015 QMS",
  },
  {
    label: "Analytical QC",
    value: "In-House QC Lab",
  },
  {
    label: "Traceability",
    value: "100% Batch Archival",
  },
  {
    label: "Documentation",
    value: "TDS, SDS & COA",
  },
];

export default function QualityPage() {
  return (
    <main className={styles.page} id="main-content">
      <HomeMotion />

      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="quality-title">
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Quality & Standards</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Quality at PolyTreat</span>
              <h1 id="quality-title" className={styles.heroTitle}>
                Clear product information. A considered approach to{" "}
                <span className={styles.heroHighlight}>chemical quality</span>.
              </h1>
              <p className={styles.heroSubline}>
                Our PQRS framework brings together performance, quality, reliability, and service
                across industrial water treatment, construction chemistry, and V-Klin hygiene care.
                Every batch is manufactured under documented processes with verified batch analyticals.
              </p>

              <div className={styles.heroActions}>
                <Button variant="primary" href="#pqrs">
                  Explore the PQRS framework
                </Button>
                <Link href="/contact#contact-form" className={styles.textLink}>
                  Request TDS / SDS <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <aside className={styles.heroShowcaseCard} aria-label="Quality Assurance Overview">
              <div className={styles.showcaseHeader}>
                <span className={styles.showcaseHeaderTag}>
                  <FlaskConical size={14} aria-hidden="true" />
                  In-House QC Lab
                </span>
                <span className={styles.showcaseHeaderBadge}>Batch Verified</span>
              </div>

              <div className={styles.showcaseBody}>
                <h2 className={styles.showcaseHeadline}>Analytical Verification & Traceability</h2>
                <p className={styles.showcaseLead}>
                  Every industrial and institutional batch is formulated to strict tolerances and verified prior to warehouse release.
                </p>

                <ul className={styles.showcaseList} role="list">
                  <li className={styles.showcaseItem}>
                    <CheckCircle2 size={16} className={styles.showcaseItemIcon} aria-hidden="true" />
                    <span>Active solids & specific gravity calibrated at 25 °C</span>
                  </li>
                  <li className={styles.showcaseItem}>
                    <CheckCircle2 size={16} className={styles.showcaseItemIcon} aria-hidden="true" />
                    <span>Digital pH, titration, and viscosity confirmation</span>
                  </li>
                  <li className={styles.showcaseItem}>
                    <CheckCircle2 size={16} className={styles.showcaseItemIcon} aria-hidden="true" />
                    <span>Dual sample retention for full shelf-life traceability</span>
                  </li>
                  <li className={styles.showcaseItem}>
                    <CheckCircle2 size={16} className={styles.showcaseItemIcon} aria-hidden="true" />
                    <span>Certificate of Analysis (COA) supplied with each lot</span>
                  </li>
                </ul>
              </div>

              <div className={styles.showcaseFooter}>
                <Link href="/certifications" className={styles.showcaseFooterLink}>
                  Review ISO 9001:2015 & compliance docs
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>

          {/* Facts Strip */}
          <div className={styles.factsStrip} role="list" aria-label="Key Quality Statistics">
            {facts.map((fact) => (
              <div className={styles.factItem} key={fact.label} role="listitem">
                <span className={styles.factLabel}>{fact.label}</span>
                <p className={styles.factValue}>{fact.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. PQRS Framework Section */}
      <section className={`${styles.section} ${styles.sectionLight}`} id="pqrs" aria-labelledby="pqrs-title">
        <Container>
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div>
              <span className={styles.sectionEyebrow}>How we think about the work</span>
              <h2 id="pqrs-title" className={styles.sectionTitle}>The PQRS framework.</h2>
            </div>
            <p className={styles.sectionLead}>
              Four core principles that guide formulation, manufacturing, analytical testing, and customer service across every product family we produce. Click or select any principle below to explore its parameters.
            </p>
          </div>

          <PqrsAnimatedGrid />
        </Container>
      </section>

      {/* 3. QC Testing & Lab Workflow Section */}
      <section className={`${styles.section} ${styles.sectionTone}`} aria-labelledby="workflow-title" data-reveal>
        <Container>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Standard Operating Procedures</span>
            <h2 id="workflow-title" className={styles.sectionTitle}>
              Four-stage quality control workflow.
            </h2>
            <p className={styles.sectionLead}>
              From incoming raw materials to final dispatched lots, every stage follows defined standard operating procedures and in-house laboratory verification.
            </p>
          </div>

          <div className={styles.workflowGrid} role="list" aria-label="Quality Control Workflow">
            {labWorkflow.map((step) => (
              <div className={styles.workflowStep} key={step.step} role="listitem">
                <span className={styles.workflowStepNum}>{step.step}</span>
                <h3 className={styles.workflowStepTitle}>{step.title}</h3>
                <p className={styles.workflowStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Useful Resources & Certifications Section */}
      <section className={`${styles.section} ${styles.sectionLight}`} aria-labelledby="resources-title" data-reveal>
        <Container>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Useful resources & compliance</span>
            <h2 id="resources-title" className={styles.sectionTitle}>Find the information you need.</h2>
            <p className={styles.sectionLead}>
              Access official management system certificates, or request tailored technical data sheets and safety documentation for your engineering and plant safety teams.
            </p>
          </div>

          <div className={styles.resourcesGrid}>
            <article className={styles.resourceCard}>
              <div className={styles.resourceIconChip} aria-hidden="true">
                <BadgeCheck size={26} strokeWidth={2} />
              </div>
              <span className={styles.resourceKicker}>Certificates & Accreditation</span>
              <h3 className={styles.resourceTitle}>Review documents by issuer and scope.</h3>
              <p className={styles.resourceDesc}>
                Examine our ISO 9001:2015 Quality Management System accreditation by SM Certification Services (SMCS) and WHO-GMP compliance reference.
              </p>
              <Link href="/certifications" className={styles.resourceLink}>
                View certifications <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>

            <article className={styles.resourceCard}>
              <div className={styles.resourceIconChip} aria-hidden="true">
                <FileCheck2 size={26} strokeWidth={2} />
              </div>
              <span className={styles.resourceKicker}>Technical Documentation</span>
              <h3 className={styles.resourceTitle}>Request TDS or SDS information.</h3>
              <p className={styles.resourceDesc}>
                Share the product code, application context, or plant operating parameters with our technical desk so we can dispatch the corresponding data sheets.
              </p>
              <Link href="/contact#contact-form" className={styles.resourceLink}>
                Request technical sheets <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </Container>
      </section>

      {/* 5. Navy Contact Band */}
      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="quality-contact-title"
        data-reveal
      >
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.contactEyebrow}>Quality & Technical Support</span>
              <h2 id="quality-contact-title" className={styles.contactTitle}>
                Have specific compliance or testing questions?
              </h2>
              <p className={styles.contactLead}>
                Contact our quality assurance and technical desk for specification sheets, batch reports, or custom compliance enquiries.
              </p>

              <div className={styles.contactActions}>
                <Button variant="primary" href="/contact#contact-form">
                  Contact technical team
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
