import Link from "next/link";
import { Fan, Paintbrush, Wind } from "lucide-react";
import { specialtyOtherLines, specialtyProducts } from "@/data/specialtyProducts";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecialtyRow from "@/components/ui/SpecialtyRow";
import TextLink from "@/components/ui/TextLink";
import type { RangeName } from "@/components/ui/range";
import styles from "./home.module.css";

const flagshipChips: Record<string, string[]> = {
  corosil: ["Structural steel", "Railings & grills", "Pipelines & sheet metal", "Rolling shutters"],
  "polydor-ws": ["Waste & wastewater", "Food & animal processing", "Exhaust scrubbers", "Facilities"],
  polyklin: ["Evaporator coils", "Condenser coils", "AHU & FCU", "Window & split units"],
};

const flagshipIcons: Record<string, typeof Paintbrush> = {
  corosil: Paintbrush,
  "polydor-ws": Wind,
  polyklin: Fan,
};

const flagshipNotes: Record<string, string> = {
  corosil: "A treatment and primer step — a compatible paint system is still required over it.",
  "polydor-ws": "Odour control only — not a disinfectant, sanitiser or insecticide.",
  polyklin: "Directions are as published in our product literature; ask for the current sheet.",
};

const flagshipRanges: Record<string, RangeName> = {
  corosil: "construction",
  "polydor-ws": "specialty",
  polyklin: "water",
};

const flagshipProducts = specialtyProducts.filter((product) => product.slug in flagshipIcons);

export default function Specialty() {
  return (
    <Section id="specialty" labelledBy="specialty-title" className={styles.specialtySection} data-reveal>
      <Container>
        <SectionHeading
          id="specialty-title"
          eyebrow="Specialty products"
          title="Specialty products, in detail."
          intro="COROSIL, POLYDOR-WS and POLYKLIN each solve one specific problem. Their full pages carry the product literature, application lists, and document requests."
          align="split"
        />

        <div className={styles.specialtyList}>
          {flagshipProducts.map((product) => {
            const Icon = flagshipIcons[product.slug];
            return (
              <SpecialtyRow
                key={product.slug}
                range={flagshipRanges[product.slug]}
                icon={<Icon size={14} strokeWidth={2} />}
                category={product.category}
                name={product.name}
                tagline={product.headline}
                text={product.summary}
                note={flagshipNotes[product.slug]}
                chips={flagshipChips[product.slug] ?? []}
                href={`/specialty/${product.slug}`}
              />
            );
          })}
        </div>

        <div className={styles.specialtyFoot}>
          <p className={styles.specialtyMore}>
            Also in the specialty range:{" "}
            {specialtyOtherLines.map((line, index) => (
              <span key={line.title}>
                {index > 0 && <span aria-hidden="true"> · </span>}
                <Link href="/specialty">{line.title}</Link>
              </span>
            ))}
          </p>
          <TextLink href="/specialty">Open the specialty hub</TextLink>
        </div>
      </Container>
    </Section>
  );
}