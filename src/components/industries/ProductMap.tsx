import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { productMapGroups } from "@/data/industries";
import styles from "./industries.module.css";

const rangeColorMap: Record<
  string,
  { accent: string; tint: string; dark: string }
> = {
  "industrial-water": {
    accent: "var(--pt-teal)",
    tint: "var(--pt-water-t)",
    dark: "var(--pt-water-d)",
  },
  construction: {
    accent: "var(--pt-orange)",
    tint: "var(--pt-construction-t)",
    dark: "var(--pt-construction-d)",
  },
  specialty: {
    accent: "var(--pt-purple)",
    tint: "var(--pt-specialty-t)",
    dark: "var(--pt-specialty-d)",
  },
  vklin: {
    accent: "var(--pt-green)",
    tint: "var(--pt-vklin-t)",
    dark: "var(--pt-vklin-d)",
  },
};

export default function ProductMap() {
  return (
    <section
      className={styles.productMapSection}
      id="product-map"
      aria-labelledby="product-map-title"
      data-reveal
    >
      <Container>
        <SectionHeading
          id="product-map-title"
          eyebrow="The full range"
          title="Everything PolyTreat makes, in one place."
          intro="Four groups cover the whole range. Follow any category to the page that sets out what it is for and where it is used."
          align="split"
        />

        <div className={styles.productMapGrid} data-stagger-group>
          {productMapGroups.map((group) => {
            const colors = rangeColorMap[group.id] || {
              accent: "var(--pt-blue)",
              tint: "rgba(27, 95, 168, 0.08)",
              dark: "var(--pt-blue)",
            };

            return (
              <article
                className={styles.productMapCard}
                key={group.id}
                style={
                  {
                    "--map-accent": colors.accent,
                    "--map-tint": colors.tint,
                    "--map-dark": colors.dark,
                  } as React.CSSProperties
                }
                data-stagger-item
              >
                <h3 className={styles.productMapTitle}>{group.title}</h3>
                <p className={styles.productMapSummary}>{group.summary}</p>
                <hr className={styles.productMapDivider} />

                <ul className={styles.productMapList}>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link className={styles.productMapLink} href={item.href}>
                        <span>{item.label}</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
