"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Gauge,
  Headset,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import styles from "./quality.module.css";

interface PqrsItem {
  letter: "P" | "Q" | "R" | "S";
  index: string;
  title: string;
  subtitle: string;
  color: string;
  bgLight: string;
  icon: LucideIcon;
  desc: string;
  features: string[];
  metric: string;
  scope: string;
}

const pqrsData: PqrsItem[] = [
  {
    letter: "P",
    index: "01",
    title: "Performance",
    subtitle: "Targeted Operational Outcomes",
    color: "#1B5FA8",
    bgLight: "#EBF3FA",
    icon: Gauge,
    desc: "Formulations engineered for measurable operational outcomes in scale prevention, corrosion inhibition, and thermal efficiency.",
    features: [
      "Targeted active concentrations for maximum field efficiency",
      "Optimised dosage rates that reduce total treatment operating costs",
      "Validated against raw water analyses and system metallurgy",
    ],
    metric: "High Heat Transfer & Low Dosage",
    scope: "Boiler, Cooling, RO & Effluent Systems",
  },
  {
    letter: "Q",
    index: "02",
    title: "Quality",
    subtitle: "Calibrated Analytical Consistency",
    color: "#E07B1A",
    bgLight: "#FEF3E7",
    icon: ShieldCheck,
    desc: "Strict raw material screening, controlled synthesis cycles, and calibrated analytical QC testing ensure lot-to-lot consistency.",
    features: [
      "Inward testing of raw materials against purity benchmarks",
      "Calibrated checks for pH, active solids, and specific gravity at 25 °C",
      "Zero unverified solvents or unapproved inert fillers",
    ],
    metric: "100% In-House Batch QC Verified",
    scope: "Admixtures, Grouts, Sealants & Coatings",
  },
  {
    letter: "R",
    index: "03",
    title: "Reliability",
    subtitle: "Continuous Supply & Full Traceability",
    color: "#5B4BC4",
    bgLight: "#F1EFFF",
    icon: Truck,
    desc: "Dependable dispatch timelines, heavy-duty industrial packaging, and systematic batch sample archiving for supply continuity.",
    features: [
      "Tamper-evident carboys, standard drums, and IBC tote packaging",
      "Stable manufacturing schedules and buffer inventory management",
      "100% batch sample retention for full shelf-life traceability",
    ],
    metric: "Full Shelf-Life Sample Archiving",
    scope: "Corosil, Polydor-WS, Polyklin & Cleaners",
  },
  {
    letter: "S",
    index: "04",
    title: "Service",
    subtitle: "Formulator-Backed Technical Partnership",
    color: "#0E8F5E",
    bgLight: "#E6F7F0",
    icon: Headset,
    desc: "Direct access to chemical specialists for application consulting, dosing calculations, water analysis interpretation, and rapid support.",
    features: [
      "Direct technical consultation with experienced formulators",
      "Prompt delivery of product TDS, SDS, and batch COA documents",
      "On-demand dosing guidance and plant troubleshooting support",
    ],
    metric: "Dedicated Chemical Consultation",
    scope: "Water Audits, Plant Dosing & Hygiene",
  },
];

export default function PqrsAnimatedGrid() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const handle = requestAnimationFrame(() => setIsIntersecting(true));
      return () => cancelAnimationFrame(handle);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const handlePillClick = (letter: string | null) => {
    setSelectedLetter((prev) => (prev === letter ? null : letter));
  };

  return (
    <div className={styles.pqrsInteractiveContainer} ref={gridRef}>
      {/* Interactive Segmented Filter Tabs */}
      <div className={styles.pqrsFilterBar} role="tablist" aria-label="PQRS Principle Selector">
        <button
          type="button"
          role="tab"
          aria-selected={selectedLetter === null}
          className={`${styles.pqrsPill} ${selectedLetter === null ? styles.pqrsPillActive : ""}`}
          onClick={() => handlePillClick(null)}
        >
          <Sparkles size={14} aria-hidden="true" />
          <span>All Principles</span>
        </button>

        {pqrsData.map((item) => {
          const isActive = selectedLetter === item.letter;
          return (
            <button
              key={item.letter}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.pqrsPill} ${isActive ? styles.pqrsPillActive : ""}`}
              onClick={() => handlePillClick(item.letter)}
              style={
                isActive
                  ? ({
                      "--pill-accent": item.color,
                      "--pill-bg": item.bgLight,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <span className={styles.pqrsPillLetter}>{item.letter}</span>
              <span className={styles.pqrsPillTitle}>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Animated 4-Card Grid */}
      <div
        className={`${styles.pqrsGrid} ${isIntersecting ? styles.pqrsGridVisible : ""}`}
        role="list"
        aria-label="PQRS Framework Principles"
      >
        {pqrsData.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = selectedLetter === item.letter;
          const isDimmed = selectedLetter !== null && !isSelected;

          return (
            <article
              key={item.letter}
              className={`${styles.pqrsCard} ${isSelected ? styles.pqrsCardSelected : ""} ${
                isDimmed ? styles.pqrsCardDimmed : ""
              }`}
              style={
                {
                  "--card-accent": item.color,
                  "--card-bg-light": item.bgLight,
                  "--stagger-delay": `${idx * 110}ms`,
                } as React.CSSProperties
              }
              role="listitem"
              tabIndex={0}
              onClick={() => handlePillClick(item.letter)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePillClick(item.letter);
                }
              }}
            >
              {/* Decorative Background Watermark */}
              <span className={styles.pqrsWatermark} aria-hidden="true">
                {item.letter}
              </span>

              {/* Accent Header Bar */}
              <div className={styles.pqrsCardAccentBar} aria-hidden="true" />

              <div className={styles.pqrsTopline}>
                <div className={styles.pqrsLetterGroup}>
                  <span className={styles.pqrsLetter}>{item.letter}</span>
                  <span className={styles.pqrsIndex}>{item.index}</span>
                </div>
                <div className={styles.pqrsIconChip} aria-hidden="true">
                  <Icon size={22} strokeWidth={2} />
                </div>
              </div>

              <div className={styles.pqrsTitleGroup}>
                <h3 className={styles.pqrsTitle}>{item.title}</h3>
                <span className={styles.pqrsSubtitle}>{item.subtitle}</span>
              </div>

              <p className={styles.pqrsDesc}>{item.desc}</p>

              <div className={styles.pqrsDivider} aria-hidden="true" />

              <ul className={styles.pqrsFeatures} role="list">
                {item.features.map((feature, featureIdx) => (
                  <li className={styles.pqrsFeature} key={featureIdx}>
                    <CheckCircle2
                      size={14}
                      className={styles.pqrsFeatureIcon}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.pqrsFooterBadges}>
                <span className={styles.pqrsMetricBadge}>
                  {item.metric}
                </span>
                <span className={styles.pqrsScopeText}>{item.scope}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
