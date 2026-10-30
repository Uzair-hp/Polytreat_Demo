import type { Metadata } from "next";
import { Wind } from "lucide-react";
import Container from "@/components/ui/Container";
import SpecialtyProductDetail from "@/components/SpecialtyProductDetail";
import {
  findSpecialtyProduct,
  specialtyApplicationGroups,
} from "@/data/specialtyProducts";
import styles from "@/components/solutions/specialtyProducts.module.css";

export const metadata: Metadata = {
  title: "POLYDOR-WS | Odour Neutraliser | PolyTreat Chemicals",
  description:
    "POLYDOR-WS, PolyTreat's odour neutraliser: application areas across waste, wastewater, food and animal processing, scrubbers and facility settings.",
};

export default function PolydorWsPage() {
  const product = findSpecialtyProduct("polydor-ws");

  if (!product) return null;

  return (
    <SpecialtyProductDetail product={product} icon={Wind}>
      {/* Application Areas Grid */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="polydor-areas"
        aria-labelledby="polydor-areas-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Application areas</span>
              <h2 id="polydor-areas-title" className={styles.sectionTitle}>
                Where the odour comes from.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Our application literature covers a wide spectrum of industrial and municipal
              settings. Share your specific context and our team will confirm the application method.
            </p>
          </header>

          <div className={styles.otherLinesGrid} data-stagger-group>
            {specialtyApplicationGroups.map((group) => (
              <article className={styles.otherLineCard} key={group.id} data-stagger-item>
                <h3 className={styles.otherLineTitle}>{group.title}</h3>
                <ul className={styles.contextPills} style={{ marginTop: "12px" }}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.contextPill}>
                      <span className={styles.contextPillBullet} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Distinction Callout */}
          <div className={styles.distinctionCallout} data-reveal>
            <h2 id="polydor-distinction-title" className={styles.distinctionTitle}>
              Odour control is not disinfection.
            </h2>
            <p className={styles.distinctionText}>
              POLYDOR-WS is an odour-control product. It is not a disinfectant, a sanitiser,
              an insecticide, or a food-contact-safe treatment, and makes no claim to kill
              microorganisms.
            </p>
            <p className={styles.distinctionText}>
              Neutralising an unpleasant smell and inactivating a pathogen are different jobs,
              and the second requires certified evidence and approved regulatory directions. If
              your site requires antimicrobial claims, consult our team for dedicated biocidal lines.
            </p>
          </div>
        </Container>
      </section>
    </SpecialtyProductDetail>
  );
}
