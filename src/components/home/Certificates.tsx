import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CertCard from "@/components/ui/CertCard";
import TextLink from "@/components/ui/TextLink";
import styles from "./home.module.css";

const certificates = [
  "ISO 9001:2015 QMS",
  "UKcert WHO-GMP reference",
  "Private FDA reference",
  "UKcert Eco-Friendly certificate",
];

export default function Certificates() {
  return (
    <Section id="certificates" labelledBy="certificates-title">
      <Container>
        <div className={styles.certsHead}>
          <SectionHeading
            id="certificates-title"
            eyebrow="Quality & compliance"
            title="Certificates and their scope"
          />
          <TextLink href="/certifications">View Certifications</TextLink>
        </div>

        <div className={styles.certsGrid}>
          {certificates.map((label) => (
            <CertCard key={label} label={label} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
