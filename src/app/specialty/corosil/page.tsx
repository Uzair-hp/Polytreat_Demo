import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SpecialtyProductDetail from "@/components/SpecialtyProductDetail";
import {
  corosilFinishingSystems,
  corosilProcessSteps,
  corosilSpecifications,
  findSpecialtyProduct,
} from "@/data/specialtyProducts";
import styles from "@/components/solutions/specialtyProducts.module.css";

export const metadata: Metadata = {
  title: "COROSIL | Rust Converter Primer | PolyTreat Chemicals",
  description:
    "COROSIL, PolyTreat's water-based rust inhibitor and converter primer: the surface preparation, treatment and topcoat sequence, physical data and finishing-system compatibility.",
};

export default function CorosilPage() {
  const product = findSpecialtyProduct("corosil");

  if (!product) return null;

  return (
    <SpecialtyProductDetail product={product} icon={ShieldCheck}>
      {/* 3 Process Steps */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="corosil-steps"
        aria-labelledby="corosil-steps-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>How it works</span>
              <h2 id="corosil-steps-title" className={styles.sectionTitle}>
                Three steps, in this order.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              The product literature presents COROSIL as a treatment and primer step inside
              a coating system rather than a standalone finish.
            </p>
          </header>

          <div className={styles.stepsGrid} data-stagger-group>
            {corosilProcessSteps.map((step, index) => (
              <article className={styles.stepCard} key={step.title} data-stagger-item>
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Published Specifications */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="corosil-specs"
        aria-labelledby="corosil-specs-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Physical data</span>
              <h2 id="corosil-specs-title" className={styles.sectionTitle}>
                Published product data.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              These figures are as published in our COROSIL product literature.
              Request the current Technical Data Sheet before specifying for a project.
            </p>
          </header>

          <dl className={styles.specsGrid}>
            {corosilSpecifications.map((spec) => (
              <div key={spec.label} className={styles.specRow}>
                <dt className={styles.specLabel}>{spec.label}</dt>
                <dd className={styles.specValue}>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Finishing Systems Compatibility */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="corosil-systems"
        aria-labelledby="corosil-systems-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Finishing systems</span>
              <h2 id="corosil-systems-title" className={styles.sectionTitle}>
                Compatible with most finishing systems.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              The literature states that COROSIL is compatible with most finishing systems.
              Confirm compatibility against the specific paint system you intend to apply.
            </p>
          </header>

          <div className={styles.applicationsGrid} data-stagger-group>
            {corosilFinishingSystems.map((system) => (
              <div className={styles.applicationItem} key={system} data-stagger-item>
                <span className={styles.appBullet} aria-hidden="true" />
                <span>{system}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SpecialtyProductDetail>
  );
}
