import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import TextLink from "@/components/ui/TextLink";
import IconTile from "@/components/ui/IconTile";
import FactList from "@/components/ui/FactList";
import ContactTile from "@/components/ui/ContactTile";
import RangeCard from "@/components/ui/RangeCard";
import SpecialtyRow from "@/components/ui/SpecialtyRow";
import StatCard from "@/components/ui/StatCard";
import CertCard from "@/components/ui/CertCard";
import CategoryTile from "@/components/ui/CategoryTile";
import ColorBar from "@/components/ui/ColorBar";
import type { RangeName } from "@/components/ui/range";
import {
  BadgeCheck,
  Droplet,
  Layers,
  Hexagon,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Paintbrush,
  Wind,
  Fan,
} from "lucide-react";

export const metadata = {
  title: "Design System | PolyTreat",
};

const ranges: RangeName[] = ["water", "construction", "specialty", "vklin"];
const rangeLabels: Record<RangeName, string> = {
  water: "Industrial water & process",
  construction: "Construction & protection",
  specialty: "Specialty products",
  vklin: "V-Klin care",
};

const rangeIcons: Record<RangeName, React.ReactNode> = {
  water: <Droplet size={24} strokeWidth={1.75} />,
  construction: <Layers size={24} strokeWidth={1.75} />,
  specialty: <Hexagon size={24} strokeWidth={1.75} />,
  vklin: <Leaf size={24} strokeWidth={1.75} />,
};

export default function DesignSystemPage() {
  // This page is dev-only; return 404 in production
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main style={{ fontFamily: "var(--pt-font-body)" }}>
      <Container>
        <Section labelledBy="tokens-heading">
          <SectionHeading
            id="tokens-heading"
            eyebrow="Foundation"
            title="Design tokens"
            intro="Every value below comes from src/styles/tokens.css."
          />
          <div style={{ display: "grid", gap: "var(--pt-space-4)", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            <Swatch name="--pt-brand" />
            <Swatch name="--pt-page-tint" />
            <Swatch name="--pt-water-c" />
            <Swatch name="--pt-construction-c" />
            <Swatch name="--pt-specialty-c" />
            <Swatch name="--pt-vklin-c" />
            <Swatch name="--pt-vklin-section" />
            <Swatch name="--pt-navy" />
          </div>
        </Section>

        <Section labelledBy="ranges-heading">
          <SectionHeading
            id="ranges-heading"
            eyebrow="Accents"
            title="Four ranges"
            intro="The same components take each range's c / t / d variables through data-range."
            align="split"
          />
          <div data-testid="all-ranges" style={{ display: "grid", gap: "var(--pt-space-6)" }}>
            {ranges.map((range) => (
              <div
                key={range}
                data-range={range}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--pt-space-4)",
                  alignItems: "center",
                  padding: "var(--pt-space-5)",
                  border: "1px solid var(--pt-border)",
                  borderTop: "5px solid var(--pt-c)",
                  borderRadius: "var(--pt-radius-lg)",
                  background: "var(--pt-t)",
                }}
              >
                <IconTile icon={rangeIcons[range]} range={range} />
                <strong style={{ color: "var(--pt-d)", fontFamily: "var(--pt-font-heading)" }}>
                  {rangeLabels[range]}
                </strong>
                <Chip range={range}>Ranged chip</Chip>
                <Chip>Neutral chip</Chip>
                <Button variant="primary" range={range} icon={<BadgeCheck size={16} />}>
                  Primary
                </Button>
                <Button variant="secondary" range={range}>Secondary</Button>
              </div>
            ))}
          </div>
        </Section>

        <Section labelledBy="section-heading">
          <SectionHeading id="section-heading" title="Section" intro="Four tones: default, tint, dark, vklin." />
          <div style={{ display: "grid", gap: "var(--pt-space-4)" }}>
            <Section style={{ borderRadius: "var(--pt-radius-md)" }}>
              <strong>Default</strong> — var(--pt-surface)
            </Section>
            <Section tone="tint" style={{ borderRadius: "var(--pt-radius-md)" }}>
              <strong>Tint</strong> — var(--pt-page-tint)
            </Section>
            <Section tone="vklin" style={{ borderRadius: "var(--pt-radius-md)" }}>
              <strong>V-Klin</strong> — var(--pt-vklin-section), data-range=vklin
            </Section>
            <Section tone="dark" style={{ borderRadius: "var(--pt-radius-md)" }}>
              <strong>Dark</strong> — var(--pt-navy) with on-dark text
            </Section>
          </div>
        </Section>

        <Section labelledBy="heading-heading">
          <SectionHeading id="heading-heading" title="SectionHeading" />
          <div style={{ display: "grid", gap: "var(--pt-space-6)" }}>
            <SectionHeading
              eyebrow="Eyebrow"
              title="Split alignment"
              intro="Title on the left, intro on the right at 1024px and above. Stacked below."
              align="split"
            />
            <SectionHeading eyebrow="Eyebrow" title="Left alignment" intro="Title and intro stacked, left-aligned." />
          </div>
        </Section>

        <Section labelledBy="button-heading">
          <SectionHeading id="button-heading" title="Button" intro="Three variants, 46px minimum height." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--pt-space-3)", alignItems: "center" }}>
            <Button variant="primary" href="#button-heading">Primary link</Button>
            <Button variant="secondary" href="#button-heading">Secondary link</Button>
            <Button variant="primary" icon={<Mail size={16} />}>With icon</Button>
          </div>
          <div style={{ marginTop: "var(--pt-space-5)" }}>
            <Section tone="dark" style={{ borderRadius: "var(--pt-radius-md)", display: "flex", flexWrap: "wrap", gap: "var(--pt-space-3)" }}>
              <Button variant="inverse" href="#button-heading">Inverse</Button>
              <Button variant="secondary" onDark href="#button-heading">Secondary on dark</Button>
            </Section>
          </div>
        </Section>

        <Section labelledBy="textlink-heading">
          <SectionHeading id="textlink-heading" title="TextLink" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--pt-space-5)", alignItems: "center" }}>
            <TextLink href="#textlink-heading">Standard link</TextLink>
            <TextLink href="https://example.com" external>External link</TextLink>
          </div>
        </Section>

        <Section labelledBy="colorbar-heading">
          <SectionHeading id="colorbar-heading" title="ColorBar" intro="The four-segment signature motif, 168 x 6px." />
          <ColorBar />
        </Section>

        <Section labelledBy="statcard-heading">
          <SectionHeading id="statcard-heading" title="StatCard" />
          <StatCard
            items={[
              { value: "1987", label: "Manufacturing since" },
              { value: "3", label: "Sites in Maharashtra" },
              { value: "4", label: "Product ranges" },
              { value: "28", label: "Product areas" },
            ]}
          />
        </Section>

        <Section labelledBy="rangecard-heading">
          <SectionHeading id="rangecard-heading" title="RangeCard" intro="tall, wide and compact layouts." />
          <div style={{ display: "grid", gap: "var(--pt-space-5)", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <RangeCard
              range="water"
              icon={rangeIcons.water}
              number="01 · INDUSTRIAL WATER & PROCESS"
              title="Treatment for the systems that keep your plant running."
              text="Water-treatment chemistry for boiler, cooling-water, reverse-osmosis and effluent systems."
              chips={["Boilers", "Cooling towers"]}
              href="#rangecard-heading"
              linkText="Explore water treatment"
            />
            <RangeCard
              range="construction"
              icon={rangeIcons.construction}
              number="02 · CONSTRUCTION & PROTECTION"
              title="Surface protection built around the material and the problem."
              text="Waterproofing, coatings, concrete repair, flooring and specialty surface-treatment products."
              chips={["Waterproofing", "Coatings"]}
              href="#rangecard-heading"
              linkText="Explore construction chemistry"
            />
            <RangeCard
              range="specialty"
              icon={rangeIcons.specialty}
              number="03 · SPECIALTY PRODUCTS"
              title="Single-purpose products, each aimed at one problem."
              text="A dedicated line for jobs the main ranges do not cover."
              chips={["Odour control", "HVAC coil cleaning"]}
              href="#rangecard-heading"
              linkText="Explore specialty products"
            />
          </div>
        </Section>

        <Section labelledBy="specialtyrow-heading">
          <SectionHeading id="specialtyrow-heading" title="SpecialtyRow" />
          <div style={{ border: "1px solid var(--pt-border)", borderRadius: "var(--pt-radius-lg)", overflow: "hidden" }}>
            <SpecialtyRow
              range="construction"
              icon={<Paintbrush size={14} strokeWidth={2} />}
              category="Corrosion control"
              name="COROSIL"
              tagline="Treat the rust, then paint over it."
              text="A water-based rust inhibitor and converter primer for ferrous metal."
              note="A treatment and primer step — a compatible paint system is still required over it."
              chips={["Structural steel", "Railings & grills"]}
              href="#specialtyrow-heading"
            />
            <SpecialtyRow
              range="specialty"
              icon={<Wind size={14} strokeWidth={2} />}
              category="Odour control"
              name="POLYDOR-WS"
              tagline="For odours you cannot mask."
              text="An odour neutraliser for industrial, process and facility odour problems."
              note="Odour control only — not a disinfectant, sanitiser or insecticide."
              chips={["Waste & wastewater", "Facilities"]}
              href="#specialtyrow-heading"
            />
            <SpecialtyRow
              range="water"
              icon={<Fan size={14} strokeWidth={2} />}
              category="HVAC coil care"
              name="POLYKLIN"
              tagline="Coil cleaning for air-conditioning equipment."
              text="A cleaning compound for contaminated evaporator and condenser coils."
              note="Directions are as published in our product literature; ask for the current sheet."
              chips={["Evaporator coils", "Condenser coils"]}
              href="#specialtyrow-heading"
            />
          </div>
        </Section>

        <Section labelledBy="smallcards-heading">
          <SectionHeading id="smallcards-heading" title="CertCard & CategoryTile" />
          <div style={{ display: "grid", gap: "var(--pt-space-4)", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <CertCard label="ISO 9001:2015 QMS" />
            <CertCard label="UKcert WHO-GMP reference" />
            <CertCard label="Private FDA reference" />
            <CertCard label="UKcert Eco-Friendly certificate" href="#smallcards-heading" />
          </div>
          <div style={{ marginTop: "var(--pt-space-5)", display: "grid", gap: "var(--pt-space-3)", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <CategoryTile label="Floor & surface care" href="#smallcards-heading" />
            <CategoryTile label="Hand care & hygiene" href="#smallcards-heading" />
            <CategoryTile label="Dishwashing" href="#smallcards-heading" />
          </div>
        </Section>

        <Section labelledBy="factlist-heading">
          <SectionHeading id="factlist-heading" title="FactList" intro="Semantic dl for label / value pairs." />
          <FactList
            items={[
              { label: "Founded", value: "1987" },
              { label: "Sites", value: "3 in Maharashtra" },
              { label: "QC laboratory", value: "In-house, daily monitoring" },
            ]}
          />
        </Section>

        <Section tone="dark" labelledBy="contacttile-heading">
          <SectionHeading id="contacttile-heading" title="ContactTile" intro="Dark tiles for the contact band." />
          <div style={{ display: "grid", gap: "var(--pt-space-4)", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <ContactTile icon={<Mail size={24} strokeWidth={1.75} />} label="Email enquiries" value="polyind2@gmail.com" href="mailto:polyind2@gmail.com" />
            <ContactTile icon={<Phone size={24} strokeWidth={1.75} />} label="Technical & sales" value="+91 98202 35995" href="tel:+919820235995" />
            <ContactTile
              icon={<MessageCircle size={24} strokeWidth={1.75} />}
              label="WhatsApp"
              value="Chat with the team"
              href="https://wa.me/919820235995"
              external
            />
            <ContactTile icon={<MapPin size={24} strokeWidth={1.75} />} label="Corporate office" value="7-A Topiwala Building, Goregaon (West), Mumbai 400104" />
          </div>
        </Section>
      </Container>
    </main>
  );
}

function Swatch({ name }: { name: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--pt-space-2)", padding: "var(--pt-space-3)", border: "1px solid var(--pt-border)", borderRadius: "var(--pt-radius-md)" }}>
      <div style={{ width: "100%", height: "56px", borderRadius: "var(--pt-radius-sm)", background: `var(${name})`, border: "1px solid var(--pt-border)" }} />
      <code style={{ fontSize: "var(--pt-text-xs)", fontFamily: "var(--pt-font-body)" }}>{name}</code>
    </div>
  );
}
