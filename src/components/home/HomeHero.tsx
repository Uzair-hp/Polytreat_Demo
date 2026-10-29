"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Droplet, Layers, Leaf, MessageCircle, type LucideIcon } from "lucide-react";
import { homeStockImages } from "@/data/homeImages";
import { companyInfo } from "@/data/companyInfo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import styles from "./home.module.css";

export interface HeroSlide {
  id: string;
  label: string;
  selectorLabel: string;
  imageSrc: string;
  alt: string;
  captionTitle: string;
  captionScope: string;
  icon: LucideIcon;
  range: "water" | "construction" | "vklin";
  dotColor: string;
  activeTint: string;
  iconBg: string;
}

const slides: HeroSlide[] = [
  {
    id: "water",
    label: "Industrial water & process",
    selectorLabel: "Water",
    imageSrc: homeStockImages.heroWater.activeUrl,
    alt: homeStockImages.heroWater.alt,
    captionTitle: "Industrial water & process",
    captionScope: "Boiler · Cooling · RO · Effluent",
    icon: Droplet,
    range: "water",
    dotColor: "var(--pt-teal)",
    activeTint: "var(--pt-water-t)",
    iconBg: "rgba(15, 143, 138, 0.25)",
  },
  {
    id: "construction",
    label: "Construction & protection",
    selectorLabel: "Construction",
    imageSrc: homeStockImages.heroConstruction.activeUrl,
    alt: homeStockImages.heroConstruction.alt,
    captionTitle: "Construction & protection",
    captionScope: "Waterproofing · Coatings · Repair",
    icon: Layers,
    range: "construction",
    dotColor: "var(--pt-orange)",
    activeTint: "var(--pt-construction-t)",
    iconBg: "rgba(224, 123, 26, 0.25)",
  },
  {
    id: "vklin",
    label: "V-Klin care",
    selectorLabel: "V-Klin",
    imageSrc: homeStockImages.heroVklin.activeUrl,
    alt: homeStockImages.heroVklin.alt,
    captionTitle: "V-Klin everyday care",
    captionScope: "Floor · Hand · Dish · Facility",
    icon: Leaf,
    range: "vklin",
    dotColor: "var(--pt-green)",
    activeTint: "var(--pt-vklin-t)",
    iconBg: "rgba(14, 143, 94, 0.25)",
  },
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

const pqrsTaglineItems = [
  { word: "Performance", color: "var(--pt-blue)" },
  { word: "Quality", color: "var(--pt-orange)" },
  { word: "Reliability", color: "var(--pt-purple)" },
  { word: "Service", color: "var(--pt-green)" },
];

const AUTO_PLAY_MS = 6000;

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [statsVisible, setStatsVisible] = useState(true);
  const [statValues, setStatValues] = useState<number[]>(statItems.map((item) => item.value));

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const slideStartRef = useRef(0);
  const pausedRef = useRef(false);

  const activeSlide = slides[activeIndex];
  const ActiveIcon = activeSlide.icon;

  useEffect(() => {
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(motionPref.matches);
    updateMotion();
    motionPref.addEventListener("change", updateMotion);
    return () => motionPref.removeEventListener("change", updateMotion);
  }, []);

  // Autoplay switcher
  useEffect(() => {
    if (isHovered || isFocused || prefersReducedMotion) return;
    pausedRef.current = false;
    slideStartRef.current = Date.now();

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isHovered, isFocused, prefersReducedMotion]);

  // Autoplay progress line
  useEffect(() => {
    if (prefersReducedMotion || !progressRef.current) return;
    const progressEl = progressRef.current;
    slideStartRef.current = Date.now();
    let frame = 0;

    const tick = () => {
      if (pausedRef.current) {
        frame = window.requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(Math.max((Date.now() - slideStartRef.current) / AUTO_PLAY_MS, 0), 1);
      progressEl.style.transform = `scaleX(${progress})`;
      progressEl.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      progressEl.style.transform = "scaleX(0)";
      progressEl.setAttribute("aria-valuenow", "0");
    };
  }, [activeIndex, prefersReducedMotion]);

  // Pause on hidden document tab
  useEffect(() => {
    const onVisibilityChange = () => {
      pausedRef.current = Boolean(document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const countUpStats = useCallback(() => {
    const duration = 1200;
    const start = Date.now();
    const targets = statItems.map((item) => item.value);

    const tick = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);

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

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const { key } = event;
    if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "Home" && key !== "End") return;
    event.preventDefault();

    const last = slides.length - 1;
    let next = activeIndex;

    if (key === "ArrowRight") next = activeIndex === last ? 0 : activeIndex + 1;
    if (key === "ArrowLeft") next = activeIndex === 0 ? last : activeIndex - 1;
    if (key === "Home") next = 0;
    if (key === "End") next = last;

    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        {/* Two columns: left copy, right cohesive media component */}
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
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

            <h1 id="hero-title" className={styles.heroTitle}>
              Applied chemistry for{" "}
              <span className={styles.heroHighlight}>water, structures,</span> and everyday care.
            </h1>

            <p className={styles.heroSubline}>
              Manufactured in Maharashtra since 1987, surface protection and water treatment
              chemistry built around the material and the problem.
            </p>

            <div className={styles.heroActions}>
              <Button variant="primary" href="#ranges">
                Explore solutions
              </Button>
              <Button
                variant="secondary"
                href={companyInfo.whatsappUrl}
                external
                icon={<MessageCircle size={16} strokeWidth={1.75} />}
              >
                Talk to our team
              </Button>
            </div>
          </div>

          <div
            className={styles.heroVisual}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsFocused(false);
              }
            }}
          >
            {/* Cohesive Media Component: Frame with scrim & inset caption */}
            <div className={styles.heroMedia}>
              <div
                id="hero-panel"
                role="tabpanel"
                aria-labelledby={`hero-tab-${activeSlide.id}`}
                className={styles.heroFigure}
              >
                {slides.map((slide, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`${styles.heroSlide}${isActive ? ` ${styles.heroSlideActive}` : ""}`}
                      aria-hidden={!isActive}
                    >
                      <Image
                        src={slide.imageSrc}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className={styles.heroSlideImg}
                      />
                    </div>
                  );
                })}

                <div className={styles.heroScrim} aria-hidden="true" />

                <div className={styles.heroCaption}>
                  <div
                    className={styles.heroCaptionIcon}
                    style={{ backgroundColor: activeSlide.iconBg }}
                    aria-hidden="true"
                  >
                    <ActiveIcon size={20} strokeWidth={2} />
                  </div>
                  <div className={styles.heroCaptionText}>
                    <strong>{activeSlide.captionTitle}</strong>
                    <small>{activeSlide.captionScope}</small>
                  </div>
                </div>
              </div>

              {/* Segmented Switcher below Frame */}
              <div
                className={styles.heroTabs}
                role="tablist"
                aria-label="Product range highlights"
                style={{ "--active-tint": activeSlide.activeTint } as React.CSSProperties}
              >
                {slides.map((slide, index) => {
                  const isSelected = index === activeIndex;
                  return (
                    <button
                      key={slide.id}
                      ref={(element) => {
                        tabRefs.current[index] = element;
                      }}
                      id={`hero-tab-${slide.id}`}
                      role="tab"
                      type="button"
                      aria-selected={isSelected}
                      aria-controls="hero-panel"
                      tabIndex={isSelected ? 0 : -1}
                      className={styles.heroTab}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={handleTabKeyDown}
                    >
                      <span
                        className={styles.heroTabDot}
                        style={{ backgroundColor: slide.dotColor }}
                        aria-hidden="true"
                      />
                      <span>{slide.selectorLabel}</span>
                    </button>
                  );
                })}

                <div
                  className={styles.heroProgress}
                  ref={progressRef}
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Slide rotation progress"
                  style={{ backgroundColor: activeSlide.dotColor }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card - 52px below hero grid (4 columns desktop) */}
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
          <div className={styles.certChips} aria-label="Certifications">
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
