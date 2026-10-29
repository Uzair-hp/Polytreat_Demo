"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import IndustriesHeroMedia from "./IndustriesHeroMedia";
import styles from "./industries.module.css";

const pqrsTaglineItems = [
  { word: "Performance", color: "var(--pt-blue)" },
  { word: "Quality", color: "var(--pt-orange)" },
  { word: "Reliability", color: "var(--pt-purple)" },
  { word: "Service", color: "var(--pt-green)" },
];

const statItems = [
  { value: 1987, label: "Manufacturing since" },
  { value: 3, label: "Sites in Maharashtra" },
  { value: 4, label: "Product ranges" },
  { value: 28, label: "Product areas" },
];

const certificateLabels = [
  "ISO 9001:2015 QMS",
  "UKcert WHO-GMP reference",
  "Private FDA reference",
  "UKcert Eco-Friendly certificate",
];

export default function IndustriesHero() {
  const [statValues, setStatValues] = useState<number[]>(statItems.map(() => 0));
  const [statsVisible, setStatsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(motionPref.matches);
    updateMotion();
    motionPref.addEventListener("change", updateMotion);
    return () => motionPref.removeEventListener("change", updateMotion);
  }, []);

  const countUpStats = useCallback(() => {
    const duration = 1200;
    const start = Date.now();
    const targets = statItems.map((item) => item.value);

    const tick = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic

      setStatValues(targets.map((target) => Math.round(target * ease)));

      if (t < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setStatsVisible(true);
        setStatValues(statItems.map((item) => item.value));
      }, 0);
      return () => clearTimeout(timer);
    }

    const statsEl = document.querySelector(`.${styles.statsCard}`);
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            countUpStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(statsEl);
    return () => observer.disconnect();
  }, [prefersReducedMotion, countUpStats]);

  return (
    <section className={styles.hero} aria-labelledby="industries-page-title">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator} aria-hidden="true">
            /
          </span>
          <span className={styles.breadcrumbCurrent} aria-current="page">
            Industries
          </span>
        </nav>

        {/* PQRS Tagline above H1 */}
        <div className={styles.pqrsTagline} aria-label="PolyTreat PQRS framework">
          {pqrsTaglineItems.map((item, i) => (
            <span key={item.word} className={styles.pqrsTaglineItem}>
              <span
                className={styles.pqrsDot}
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              {item.word}
              {i < pqrsTaglineItems.length - 1 && (
                <span className={styles.pqrsSeparator} aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Hero 2-Column Grid */}
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 id="industries-page-title" className={styles.heroTitle}>
              Chemistry for{" "}
              <span className={styles.heroHighlight}>plants, infrastructure,</span> and shared
              facilities.
            </h1>

            <p className={styles.heroSubline}>
              PolyTreat makes water treatment, construction and protection, specialty and
              cleaning chemistry. Start with the setting you work in, then follow the range that
              serves it.
            </p>

            <div className={styles.heroActions}>
              <Button variant="primary" href="#industry-areas" icon={<ArrowRight size={17} />}>
                Explore application areas
              </Button>
              <Button variant="secondary" href="#product-map">
                See the full range
              </Button>
            </div>
          </div>

          <div className={styles.heroVisualCol}>
            <IndustriesHeroMedia />
          </div>
        </div>

        {/* Stats Card - 52px below hero grid */}
        <div className={styles.statsContainer}>
          <dl
            className={`${styles.statsCard} ${statsVisible ? styles.statsVisible : ""}`}
            aria-label="Company statistics"
          >
            {statItems.map((item, index) => (
              <div key={item.label} className={styles.statItem}>
                <dd className={styles.statValue}>
                  {statsVisible ? statValues[index] : item.value}
                </dd>
                <dt className={styles.statLabel}>{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Certificate Chips - directly under stats */}
        <div className={styles.certsContainer}>
          <div className={styles.certChips} aria-label="Company accreditations and references">
            {certificateLabels.map((label) => (
              <Chip key={label} className={styles.certChip}>
                {label}
              </Chip>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
