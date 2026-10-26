import { environmentIcons, operatingEnvironments } from "@/data/industries";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RangeCard from "@/components/ui/RangeCard";
import styles from "./home.module.css";

export default function Applications() {
  return (
    <Section tone="tint" id="applications" labelledBy="applications-title">
      <Container>
        <SectionHeading
          id="applications-title"
          eyebrow="Industries & applications"
          title="Where the chemistry goes to work."
          intro="The same ranges serve plants, infrastructure projects, and everyday facilities. Start with the environment you operate in."
          align="split"
        />

        <div className={styles.applicationsGrid}>
          {operatingEnvironments.map((environment) => {
            const Icon = environmentIcons[environment.id];
            return (
              <RangeCard
                key={environment.id}
                icon={<Icon size={24} strokeWidth={1.75} />}
                title={environment.eyebrow}
                text={environment.description}
                chips={environment.contexts}
                href={environment.link}
                linkText={environment.linkLabel}
                layout="compact"
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
