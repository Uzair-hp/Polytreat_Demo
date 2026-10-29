import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Fan, Paintbrush, Wind } from "lucide-react";
import { homeStockImages } from "@/data/homeImages";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { RangeName } from "@/components/ui/range";
import styles from "./home.module.css";

interface Range {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkText: string;
  range: RangeName;
  media?: { src: string; alt: string };
}

const rangesData: Range[] = [
  {
    id: "water",
    eyebrow: "01 Water & process",
    title: "Treatment for the systems that keep your plant running.",
    description: "Water-treatment chemistry for boiler, cooling-water, reverse-osmosis, and effluent systems.",
    tags: ["Boilers", "Cooling towers", "RO", "Effluent"],
    link: "/solutions/industrial-water",
    linkText: "Explore water treatment",
    range: "water",
    media: { src: homeStockImages.rangeWater.activeUrl, alt: homeStockImages.rangeWater.alt },
  },
  {
    id: "construction",
    eyebrow: "02 Construction",
    title: "Surface protection built around the material and the problem.",
    description: "Waterproofing, coatings, concrete repair, flooring, and specialty surface-treatment products.",
    tags: ["Waterproofing", "Coatings", "Flooring", "Rust treatment"],
    link: "/solutions/construction-chemistry",
    linkText: "Explore construction chemistry",
    range: "construction",
    media: { src: homeStockImages.rangeConstruction.activeUrl, alt: homeStockImages.rangeConstruction.alt },
  },
  {
    id: "specialty",
    eyebrow: "03 Specialty",
    title: "Single-purpose products, each aimed at one problem.",
    description: "A dedicated line for jobs the main ranges do not cover, from odour control to HVAC coil care.",
    tags: ["Odour control", "HVAC coil cleaning"],
    link: "/specialty",
    linkText: "Explore specialty products",
    range: "specialty",
  },
  {
    id: "vklin",
    eyebrow: "04 V-Klin care",
    title: "Everyday cleaning for homes, institutions, and facilities.",
    description: "Cleaning and facility-care products grouped under PolyTreat's V-Klin brand.",
    tags: ["Floor & surface", "Handwash"],
    link: "/vklin/products",
    linkText: "Explore the V-Klin range",
    range: "vklin",
    media: { src: homeStockImages.rangeVklin.activeUrl, alt: homeStockImages.rangeVklin.alt },
  },
];

export default function Ranges() {
  return (
    <Section id="ranges" labelledBy="ranges-title" data-reveal>
      <Container>
        <header className={styles.rangesHeader}>
          <div className={styles.rangesHeadGroup}>
            <span className={styles.rangesEyebrow}>What we make</span>
            <h2 id="ranges-title" className={styles.rangesTitle}>
              Four ranges, one manufacturer.
            </h2>
          </div>
          <p className={styles.rangesLead}>
            PolyTreat formulates and produces all four of its product ranges at its own sites,
            organized around the systems, surfaces, and spaces they serve.
          </p>
        </header>

        <div className={styles.rangesGrid} data-stagger-group>
          {rangesData.map((range) => (
            <Link
              key={range.id}
              href={range.link}
              className={`${styles.rangeBento} ${styles[`range${range.id.charAt(0).toUpperCase() + range.id.slice(1)}`]}`}
              data-range={range.range}
              data-stagger-item
            >
              {range.media ? (
                <div className={styles.bentoMedia}>
                  <Image
                    src={range.media.src}
                    alt={range.media.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className={styles.bentoImg}
                    priority={range.id === "water"}
                  />
                </div>
              ) : (
                <div className={styles.bentoIconPanel}>
                  <div className={styles.bentoIconChips}>
                    <span className={styles.bentoIconItem} title="COROSIL Rust Converter Primer">
                      <Paintbrush size={18} strokeWidth={2} />
                      <small>COROSIL</small>
                    </span>
                    <span className={styles.bentoIconItem} title="POLYDOR-WS Odour Neutraliser">
                      <Wind size={18} strokeWidth={2} />
                      <small>POLYDOR-WS</small>
                    </span>
                    <span className={styles.bentoIconItem} title="POLYKLIN HVAC Coil Cleaner">
                      <Fan size={18} strokeWidth={2} />
                      <small>POLYKLIN</small>
                    </span>
                  </div>
                </div>
              )}
              <div className={styles.bentoBody}>
                <span className={styles.bentoEyebrow}>{range.eyebrow}</span>
                <h3 className={styles.bentoTitle}>{range.title}</h3>
                <p className={styles.bentoText}>{range.description}</p>
                <ul className={styles.bentoPills}>
                  {range.tags.map((tag) => (
                    <li key={tag}>
                      <span className={styles.bentoPill}>{tag}</span>
                    </li>
                  ))}
                </ul>
                <span className={styles.bentoLink}>
                  {range.linkText}
                  <ArrowRight size={15} className={styles.bentoArrow} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
