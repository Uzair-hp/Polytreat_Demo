import { BadgeCheck, Building2, Factory, MapPin } from "lucide-react";
import { locationSites } from "@/data/locations";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FactList from "@/components/ui/FactList";
import TextLink from "@/components/ui/TextLink";
import type { RangeName } from "@/components/ui/range";
import styles from "./home.module.css";

const storyFacts = [
  {
    icon: <BadgeCheck size={16} strokeWidth={1.75} />,
    label: "In-house QC laboratory",
    value: "with daily product monitoring",
  },
  {
    icon: <Building2 size={16} strokeWidth={1.75} />,
    label: "Three sites",
    value: "Mumbai offices and green products facility, plus Tarapur MIDC manufacturing",
  },
  {
    icon: <Factory size={16} strokeWidth={1.75} />,
    label: "Formulated in our own plants",
    value: "in continuous operation since 1987",
  },
];

const pqrsTiles: Array<{ letter: string; title: string; description: string; range: RangeName }> = [
  {
    letter: "P",
    title: "Performance",
    description: "Formulations considered in the context of the task and operating system.",
    range: "water",
  },
  {
    letter: "Q",
    title: "Quality",
    description: "A focus on product quality and clear technical documentation.",
    range: "construction",
  },
  {
    letter: "R",
    title: "Reliability",
    description: "A dependable working relationship from product enquiry through supply.",
    range: "specialty",
  },
  {
    letter: "S",
    title: "Service",
    description: "A direct conversation with the team about the product and its intended use.",
    range: "vklin",
  },
];

export default function Story() {
  return (
    <Section id="story" labelledBy="story-title">
      <Container>
        <div className={styles.storyGrid}>
          <div className={styles.storyCopy}>
            <span className={styles.storyEyebrow}>About PolyTreat</span>
            <h2 id="story-title" className={styles.storyTitle}>A manufacturer first, since 1987.</h2>
            <p className={styles.storyText}>
              PolyTreat Chemicals Pvt. Ltd. formulates and produces its ranges at its own
              plants, with an in-house laboratory monitoring quality daily — and a direct
              technical conversation behind every enquiry.
            </p>

            <FactList items={storyFacts} />

            <div className={styles.storyLocations} aria-label="PolyTreat locations">
              {locationSites.map((site) => (
                <span className={styles.storyLocation} key={site.id}>
                  <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
                  <span>
                    {site.title} <em>{site.role}</em>
                  </span>
                </span>
              ))}
            </div>

            <div className={styles.storyActions}>
              <TextLink href="/about">More about PolyTreat</TextLink>
              <TextLink href="/certifications">Certificates and their scope</TextLink>
            </div>
          </div>

          <div className={styles.pqrs}>
            <span className={styles.pqrsLabel}>The PQRS framework</span>

            <div className={styles.pqrsGrid}>
              {pqrsTiles.map(({ letter, title, description, range }) => (
                <article className={styles.pqrsTile} key={letter} data-range={range}>
                  <span className={styles.pqrsLetter} aria-hidden="true">{letter}</span>
                  <h3 className={styles.pqrsTitle}>{title}</h3>
                  <p className={styles.pqrsText}>{description}</p>
                </article>
              ))}
            </div>

            <p className={styles.pqrsNote}>
              Request product TDS and safety documents for application and handling details.
            </p>
            <TextLink href="/quality">Explore the PQRS framework</TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
