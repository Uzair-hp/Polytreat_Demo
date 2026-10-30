import type { Metadata } from "next";
import { Snowflake } from "lucide-react";
import Container from "@/components/ui/Container";
import SpecialtyProductDetail from "@/components/SpecialtyProductDetail";
import {
  findSpecialtyProduct,
  polyklinEquipment,
  polyklinMethod,
} from "@/data/specialtyProducts";
import styles from "@/components/solutions/specialtyProducts.module.css";

export const metadata: Metadata = {
  title: "POLYKLIN | AHU & FCU Coil Cleaner | PolyTreat Chemicals",
  description:
    "POLYKLIN, PolyTreat's AHU and FCU coil cleaning compound: the equipment it serves, the method of application, pack sizes and published product data.",
};

export default function PolyklinPage() {
  const product = findSpecialtyProduct("polyklin");

  if (!product) return null;

  return (
    <SpecialtyProductDetail product={product} icon={Snowflake}>
      {/* The Equipment Section */}
      <section
        className={`${styles.section} ${styles.sectionTint}`}
        id="polyklin-equipment"
        aria-labelledby="polyklin-equipment-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>The equipment</span>
              <h2 id="polyklin-equipment-title" className={styles.sectionTitle}>
                What a coil is, and why it needs care.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              An air conditioner transfers heat using finned coils. Dirt and atmospheric
              tarnish on a coil surface reduce heat exchange and air volume, making coil
              maintenance essential.
            </p>
          </header>

          <div className={styles.otherLinesGrid} data-stagger-group>
            {polyklinEquipment.map((item) => (
              <article className={styles.otherLineCard} key={item.title} data-stagger-item>
                <h3 className={styles.otherLineTitle}>{item.title}</h3>
                <p className={styles.otherLineText}>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Method of Application Section */}
      <section
        className={`${styles.section} ${styles.sectionLight}`}
        id="polyklin-method"
        aria-labelledby="polyklin-method-title"
        data-reveal
      >
        <Container>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingSplit}`}>
            <div className={styles.headingGroup}>
              <span className={styles.sectionEyebrow}>Method of application</span>
              <h2 id="polyklin-method-title" className={styles.sectionTitle}>
                Spray, let it work, rinse it off.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Standard instructions as published in our POLYKLIN literature. Review the
              current product data sheet and equipment maker guidance before servicing a coil.
            </p>
          </header>

          <div className={styles.stepsGrid} data-stagger-group>
            {polyklinMethod.map((step, index) => (
              <article className={styles.stepCard} key={step} data-stagger-item>
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className={styles.stepText}>{step}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SpecialtyProductDetail>
  );
}
