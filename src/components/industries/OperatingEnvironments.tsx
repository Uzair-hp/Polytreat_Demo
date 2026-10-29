import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { operatingEnvironments, environmentIcons } from "@/data/industries";
import styles from "./industries.module.css";

const environmentColorConfig = {
  "process-manufacturing": {
    accent: "var(--pt-teal)",
    tint: "var(--pt-water-t)",
    dark: "var(--pt-water-d)",
  },
  "utilities-infrastructure": {
    accent: "var(--pt-orange)",
    tint: "var(--pt-construction-t)",
    dark: "var(--pt-construction-d)",
  },
  "facilities-institutions": {
    accent: "var(--pt-green)",
    tint: "var(--pt-vklin-t)",
    dark: "var(--pt-vklin-d)",
  },
} as const;

export default function OperatingEnvironments() {
  return (
    <section
      className={styles.environmentsSection}
      id="industry-areas"
      aria-labelledby="industry-areas-title"
      data-reveal
    >
      <Container>
        <SectionHeading
          id="industry-areas-title"
          eyebrow="Where our ranges fit"
          title="Start with the operating environment."
          intro="Different sites have different needs. Browse the broad application areas and follow the link to the related product range."
          align="split"
        />

        <div className={styles.environmentsGrid} data-stagger-group>
          {operatingEnvironments.map((env) => {
            const Icon = environmentIcons[env.id];
            const colors = environmentColorConfig[env.id] || {
              accent: "var(--pt-blue)",
              tint: "var(--pt-hero-bg)",
              dark: "var(--pt-blue)",
            };

            return (
              <article
                className={styles.environmentCard}
                id={env.id}
                key={env.id}
                style={
                  {
                    "--card-accent": colors.accent,
                    "--card-tint": colors.tint,
                    "--card-dark": colors.dark,
                  } as React.CSSProperties
                }
                data-stagger-item
              >
                <div className={styles.cardTopline}>
                  <span className={styles.cardNumber}>{env.number}</span>
                  <div className={styles.cardIconWrapper} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <span className={styles.cardEyebrow}>{env.eyebrow}</span>
                <h3 className={styles.cardTitle}>{env.title}</h3>
                <p className={styles.cardDescription}>{env.description}</p>

                <ul
                  className={styles.contextChipList}
                  aria-label={`${env.eyebrow} application categories`}
                >
                  {env.contexts.map((ctx) => (
                    <li key={ctx} className={styles.contextChipItem}>
                      {ctx}
                    </li>
                  ))}
                </ul>

                <Link className={styles.cardLinkPinned} href={env.link}>
                  <span>{env.linkLabel}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
