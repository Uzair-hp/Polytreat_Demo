import { Droplet, Hexagon, Layers, Leaf, MessageCircle } from "lucide-react";
import { homeStockImages } from "@/data/homeImages";
import { companyInfo } from "@/data/companyInfo";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RangeCard from "@/components/ui/RangeCard";
import TextLink from "@/components/ui/TextLink";
import type { RangeName } from "@/components/ui/range";
import styles from "./home.module.css";

const specialtyAreas = ["Odour control", "HVAC coil cleaning", "Rust conversion", "Pool & drinking water"];

type RangeEntry = {
  id: string;
  number: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkText: string;
  range: RangeName;
  layout: "tall" | "wide" | "compact";
  positionClass: string;
  media?: { src: string; alt: string };
};

const ranges: RangeEntry[] = [
  {
    id: "ranges-water",
    number: "01 · INDUSTRIAL WATER & PROCESS",
    icon: <Droplet size={24} strokeWidth={1.75} />,
    eyebrow: "Industrial water & process",
    title: "Treatment for the systems that keep your plant running.",
    description: "Water-treatment chemistry for boiler, cooling-water, reverse-osmosis, and effluent systems.",
    tags: ["Boilers", "Cooling towers", "RO", "Effluent"],
    link: "/solutions/industrial-water",
    linkText: "Explore water treatment",
    range: "water",
    layout: "tall",
    positionClass: styles.rangeWater,
    media: { src: homeStockImages.rangeWater.activeUrl, alt: homeStockImages.rangeWater.alt },
  },
  {
    id: "ranges-construction",
    number: "02 · CONSTRUCTION & PROTECTION",
    icon: <Layers size={24} strokeWidth={1.75} />,
    eyebrow: "Construction & protection",
    title: "Surface protection built around the material and the problem.",
    description: "Waterproofing, coatings, concrete repair, flooring, and specialty surface-treatment products.",
    tags: ["Waterproofing", "Coatings", "Flooring", "Rust treatment"],
    link: "/solutions/construction-chemistry",
    linkText: "Explore construction chemistry",
    range: "construction",
    layout: "wide",
    positionClass: styles.rangeConstruction,
    media: { src: homeStockImages.rangeConstruction.activeUrl, alt: homeStockImages.rangeConstruction.alt },
  },
  {
    id: "ranges-specialty",
    number: "03 · SPECIALTY PRODUCTS",
    icon: <Hexagon size={24} strokeWidth={1.75} />,
    eyebrow: "Specialty products",
    title: "Single-purpose products, each aimed at one problem.",
    description: "A dedicated line for jobs the main ranges do not cover, from odour control to HVAC coil care.",
    tags: specialtyAreas.slice(0, 2),
    link: "/specialty",
    linkText: "Explore specialty products",
    range: "specialty",
    layout: "compact",
    positionClass: styles.rangeSpecialty,
  },
  {
    id: "ranges-vklin",
    number: "04 · V-KLIN CARE",
    icon: <Leaf size={24} strokeWidth={1.75} />,
    eyebrow: "V-Klin care",
    title: "Everyday cleaning for homes, institutions, and facilities.",
    description: "Cleaning and facility-care products grouped under PolyTreat's V-Klin brand.",
    tags: ["Floor & surface", "Handwash"],
    link: "/vklin/products",
    linkText: "Explore the V-Klin range",
    range: "vklin",
    layout: "compact",
    positionClass: styles.rangeVklin,
  },
];

export default function Ranges() {
  return (
    <Section id="ranges" labelledBy="ranges-title">
      <Container>
        <SectionHeading
          id="ranges-title"
          eyebrow="What we make"
          title="Four ranges, one manufacturer."
          intro="PolyTreat formulates and produces all four of its product ranges at its own sites, organized around the systems, surfaces, and spaces they serve."
          align="split"
        />

        <div className={styles.rangesGrid}>
          {ranges.map((range) => (
            <RangeCard
              key={range.id}
              range={range.range}
              icon={range.icon}
              number={range.number}
              title={range.title}
              text={range.description}
              chips={range.tags}
              href={range.link}
              linkText={range.linkText}
              layout={range.layout}
              media={range.media}
              className={range.positionClass}
            />
          ))}
        </div>

        <div className={styles.rangesFoot}>
          <div className={styles.rangesPrompt}>
            <p className={styles.rangesFootnote}>Not sure which range fits your requirement?</p>
            <a
              className={styles.whatsappLink}
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
          <TextLink href="/industries#product-map">See all product areas</TextLink>
        </div>
      </Container>
    </Section>
  );
}
