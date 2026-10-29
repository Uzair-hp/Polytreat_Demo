import Link from "next/link";
import { ArrowRight, Factory, FlaskConical, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import styles from "./home.module.css";

const siteCards = [
  {
    id: "corporate-office",
    eyebrow: "Corporate office",
    title: "Goregaon (West), Mumbai",
    description: "Head office of PolyTreat Chemicals Pvt. Ltd.",
    accent: "#1B5FA8",
    tint: "#E3EEF9",
  },
  {
    id: "green-products",
    eyebrow: "Green products facility",
    title: "Goregaon (East), Mumbai",
    description: "Mumbai facility for the green products range.",
    accent: "#0E8F5E",
    tint: "#DDF3E8",
  },
  {
    id: "manufacturing-plant",
    eyebrow: "Manufacturing plant",
    title: "Tarapur MIDC, Palghar",
    description:
      "Manufacturing in continuous operation since 1987, with in-house QC and daily product monitoring.",
    accent: "#E07B1A",
    tint: "#FBEAD3",
  },
];

const proofRows = [
  {
    title: "In-house QC laboratory",
    subtitle: "Daily product monitoring",
    icon: FlaskConical,
    accent: "#1B5FA8",
    tint: "#E3EEF9",
  },
  {
    title: "Three sites in Maharashtra",
    subtitle: "Mumbai and Palghar",
    icon: MapPin,
    accent: "#0E8F5E",
    tint: "#DDF3E8",
  },
  {
    title: "Formulated in our own plants",
    subtitle: "Continuous operation since 1987",
    icon: Factory,
    accent: "#E07B1A",
    tint: "#FBEAD3",
  },
];

export default function WhereWeMakeIt() {
  return (
    <Section
      id="where-we-make-it"
      labelledBy="where-we-make-it-title"
      className={styles.whereWeMakeIt}
      data-reveal
    >
      <Container>
        <div className={styles.whereWeMakeItGrid}>
          {/* Left Column: Story, Proof Rows, and Links */}
          <div className={styles.whereWeMakeItLeft}>
            <header className={styles.whereWeMakeItHeader}>
              <span className={styles.whereWeMakeItEyebrow}>Where we make it</span>
              <h2 id="where-we-make-it-title" className={styles.whereWeMakeItTitle}>
                A manufacturer first, since 1987.
              </h2>
              <p className={styles.whereWeMakeItLead}>
                PolyTreat Chemicals Pvt. Ltd. formulates and produces its ranges at its own
                plants, with an in-house laboratory monitoring quality daily and a direct
                technical conversation behind every product.
              </p>
            </header>

            <div className={styles.whereWeMakeItProofList}>
              {proofRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.title} className={styles.whereWeMakeItProofRow}>
                    <div
                      className={styles.whereWeMakeItProofTile}
                      style={{ backgroundColor: row.tint, color: row.accent }}
                      aria-hidden="true"
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div className={styles.whereWeMakeItProofContent}>
                      <strong className={styles.whereWeMakeItProofTitle}>{row.title}</strong>
                      <span className={styles.whereWeMakeItProofSub}>{row.subtitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.whereWeMakeItLinks}>
              <Link href="/about" className={styles.whereWeMakeItLink}>
                <span>Read about PolyTreat</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/certifications" className={styles.whereWeMakeItLink}>
                <span>Certifications and their scope</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Stacked Site Cards */}
          <div className={styles.whereWeMakeItRight} data-stagger-group>
            {siteCards.map((card) => (
              <article
                key={card.id}
                className={styles.whereWeMakeItCard}
                data-stagger-item
                style={{ "--accent": card.accent } as React.CSSProperties}
              >
                <div className={styles.whereWeMakeItCardHeader}>
                  <div
                    className={styles.whereWeMakeItPinTile}
                    style={{ backgroundColor: card.tint, color: card.accent }}
                    aria-hidden="true"
                  >
                    <MapPin size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className={styles.whereWeMakeItCardEyebrow}>{card.eyebrow}</span>
                    <h3 className={styles.whereWeMakeItCardTitle}>{card.title}</h3>
                  </div>
                </div>
                <p className={styles.whereWeMakeItCardDesc}>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
