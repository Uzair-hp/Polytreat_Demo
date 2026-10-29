import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { industrySectors } from "@/data/industries";
import styles from "./industries.module.css";

export default function IndustrySectors() {
  return (
    <section
      className={styles.sectorsSection}
      id="industry-sectors"
      aria-labelledby="industry-sectors-title"
      data-reveal
    >
      <Container>
        <SectionHeading
          id="industry-sectors-title"
          eyebrow="Industries we work in"
          title="The settings our ranges are documented for."
          intro="These are the environments our product ranges are written for. Tell us your sector and we will confirm what we can supply today."
          align="split"
        />

        <div className={styles.sectorsGrid} data-stagger-group>
          {industrySectors.map((sector) => (
            <article
              className={styles.sectorCard}
              key={sector.id}
              data-stagger-item
            >
              <h3 className={styles.sectorTitle}>{sector.title}</h3>
              <p className={styles.sectorDescription}>{sector.description}</p>

              <ul
                className={styles.sectorAreaList}
                aria-label={`${sector.title} recommended solutions`}
              >
                {sector.areas.map((area) => (
                  <li key={area.label}>
                    <Link className={styles.sectorAreaLink} href={area.href}>
                      <span>{area.label}</span>
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
