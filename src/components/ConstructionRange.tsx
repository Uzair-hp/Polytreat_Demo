import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  constructionRangeNote,
  findConstructionFamilies,
} from "@/data/constructionRange";
import styles from "@/components/solutions/constructionChemistry.module.css";

/**
 * The product range of the construction profiles: every product the client's
 * construction profile lists, grouped into families, with its type, its
 * applications and the indicative coverage figure from the profile.
 *
 * Implements the Home v4 Design System with orange range accent (#E07B1A).
 */
export default function ConstructionRange({
  familyIds,
  title,
  intro,
  showCorosil = false,
}: {
  familyIds: string[];
  title: string;
  intro: string;
  showCorosil?: boolean;
}) {
  const families = findConstructionFamilies(familyIds);

  return (
    <section
      className={`${styles.section} ${styles.sectionLight}`}
      id="construction-range"
      aria-labelledby="construction-range-title"
      data-reveal
    >
      <Container>
        <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
          <div className={styles.headingGroup}>
            <span className={styles.sectionEyebrow}>The product range</span>
            <h2 id="construction-range-title" className={styles.sectionTitle}>
              {title}
            </h2>
          </div>
          <p className={styles.sectionLead}>{intro}</p>
        </header>

        <div className={styles.rangeList} data-stagger-group>
          {families.map((family) => (
            <article className={styles.familyCard} key={family.id} data-stagger-item>
              <div className={styles.familyHead}>
                <h3 className={styles.familyTitle}>{family.title}</h3>
                <p className={styles.familySummary}>{family.summary}</p>
              </div>

              <div className={styles.productsGrid}>
                {family.products.map((product) => (
                  <div className={styles.productCard} key={product.name}>
                    <div className={styles.productTop}>
                      <strong className={styles.productName}>{product.name}</strong>
                      <span className={styles.productType}>{product.type}</span>
                    </div>

                    <ul
                      className={styles.productUsesList}
                      aria-label={`${product.name} applications`}
                    >
                      {product.uses.map((use) => (
                        <li className={styles.productUseItem} key={use}>
                          <span className={styles.productBullet} aria-hidden="true" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>

                    {product.coverage && (
                      <span className={styles.productCoverage}>
                        Catalogue coverage: {product.coverage}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}

          {showCorosil && (
            <article className={styles.specialLinkedFamily} data-stagger-item>
              <div className={styles.specialLinkedCopy}>
                <h3>Rust converters</h3>
                <p>
                  Treatment for rusty iron and steel before a paint system is
                  applied. COROSIL has its own page, with the published physical
                  data and the finishing systems it is compatible with.
                </p>
              </div>
              <Link className={styles.specialLinkedLink} href="/specialty/corosil">
                <span>Open COROSIL</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          )}
        </div>

        <p className={styles.disclaimerNote}>{constructionRangeNote}</p>
      </Container>
    </section>
  );
}
