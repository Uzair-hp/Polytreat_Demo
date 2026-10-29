import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./home.module.css";

const pqrsCards = [
  {
    letter: "P",
    title: "Performance",
    description: "Formulations considered in the context of the task and the operating system.",
    proof: "Built around the application",
    range: "water",
    tint: "var(--pt-blue-tint)",
  },
  {
    letter: "Q",
    title: "Quality",
    description: "A focus on product quality and clear technical documentation.",
    proof: "In-house QC lab · ISO 9001:2015",
    range: "construction",
    tint: "var(--pt-orange-tint)",
  },
  {
    letter: "R",
    title: "Reliability",
    description: "A dependable working relationship from product enquiry through supply.",
    proof: "Manufacturing since 1987",
    range: "specialty",
    tint: "var(--pt-purple-tint)",
  },
  {
    letter: "S",
    title: "Service",
    description: "A direct conversation with the team about the product and its intended use.",
    proof: "TDS and safety documents on request",
    range: "vklin",
    tint: "var(--pt-green-tint)",
  },
];

export default function PqrsBand() {
  return (
    <Section id="pqrs" tone="dark" labelledBy="pqrs-title" className={styles.pqrsBand} data-reveal>
      <Container>
        <SectionHeading
          id="pqrs-title"
          eyebrow="The PQRS framework"
          title="Four principles behind every product we make."
          intro="Our work is guided by Performance, Quality, Reliability, and Service — four principles that shape how we formulate, document, supply, and support every product."
          align="split"
        />

        <div className={styles.pqrsGrid} role="list" data-stagger-group>
          {pqrsCards.map((card) => (
            <article
              key={card.letter}
              className={styles.pqrsCard}
              data-range={card.range}
              role="listitem"
              tabIndex={0}
              style={{ "--pt-accent-tint": card.tint } as React.CSSProperties}
              data-stagger-item
            >
              <div className={styles.pqrsLetterWrapper}>
                <span className={styles.pqrsLetter} aria-hidden="true">{card.letter}</span>
              </div>
              <h3 className={styles.pqrsTitle}>{card.title}</h3>
              <p className={styles.pqrsText}>{card.description}</p>
              <div className={styles.pqrsProof}>
                <span className={styles.pqrsDivider} aria-hidden="true" />
                <span className={styles.pqrsProofText}>{card.proof}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}