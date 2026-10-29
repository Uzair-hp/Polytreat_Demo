"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Droplet, Layers, Leaf, type LucideIcon } from "lucide-react";
import styles from "./industries.module.css";

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
    imageSrc: "/images/home/solution-water-cooling-tower.jpg",
    alt: "Industrial cooling tower water treatment and recirculating pipe manifold",
    captionTitle: "Industrial water systems",
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
    imageSrc: "/images/home/solution-construction-waterproofing.webp",
    alt: "Application of liquid elastomeric waterproofing membrane over a concrete surface",
    captionTitle: "Construction & protection",
    captionScope: "Waterproofing · Coatings · Concrete repair",
    icon: Layers,
    range: "construction",
    dotColor: "var(--pt-orange)",
    activeTint: "var(--pt-construction-t)",
    iconBg: "rgba(224, 123, 26, 0.25)",
  },
  {
    id: "vklin",
    label: "V-Klin facility care",
    selectorLabel: "V-Klin",
    imageSrc: "/images/home/everyday-cleaning-facility-care.webp",
    alt: "Facility cleaning staff working in a commercial building lobby with cleaning trolley and supplies",
    captionTitle: "Facility & institutional care",
    captionScope: "Workplaces · Institutions · Shared facilities",
    icon: Leaf,
    range: "vklin",
    dotColor: "var(--pt-green)",
    activeTint: "var(--pt-vklin-t)",
    iconBg: "rgba(14, 143, 94, 0.25)",
  },
];

const AUTO_PLAY_MS = 6000;

export default function IndustriesHeroMedia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const slideStartRef = useRef(0);
  const pausedRef = useRef(false);

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(motionPref.matches);
    updateMotion();
    motionPref.addEventListener("change", updateMotion);
    return () => motionPref.removeEventListener("change", updateMotion);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isHovered || isFocused || prefersReducedMotion) return;
    pausedRef.current = false;
    slideStartRef.current = Date.now();

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isHovered, isFocused, prefersReducedMotion]);

  // Autoplay progress bar animation
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

  // Document visibility change (pause on background tabs)
  useEffect(() => {
    const onVisibilityChange = () => {
      pausedRef.current = Boolean(document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

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

  const ActiveIcon = activeSlide.icon;

  return (
    <div
      className={styles.heroMediaContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
      {/* 1. Image Frame with Scrim and Inset Caption */}
      <div
        className={styles.heroMediaFrame}
        id="industries-hero-panel"
        role="tabpanel"
        aria-labelledby={`industries-tab-${activeSlide.id}`}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              className={`${styles.slideLayer}${isActive ? ` ${styles.slideActive}` : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.slideImage}
              />
            </div>
          );
        })}

        <div className={styles.mediaScrim} aria-hidden="true" />

        <div className={styles.mediaCaption}>
          <div
            className={styles.captionIconChip}
            style={{ backgroundColor: activeSlide.iconBg }}
            aria-hidden="true"
          >
            <ActiveIcon size={20} strokeWidth={2} />
          </div>
          <div className={styles.captionTexts}>
            <span className={styles.captionTitle}>{activeSlide.captionTitle}</span>
            <span className={styles.captionScope}>{activeSlide.captionScope}</span>
          </div>
        </div>
      </div>

      {/* 2. Segmented Switcher below Frame */}
      <div
        className={styles.switcher}
        role="tablist"
        aria-label="Industries operating environment preview"
        style={{ "--active-tint": activeSlide.activeTint } as React.CSSProperties}
      >
        {slides.map((slide, index) => {
          const isSelected = index === activeIndex;
          return (
            <button
              key={slide.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`industries-tab-${slide.id}`}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls="industries-hero-panel"
              tabIndex={isSelected ? 0 : -1}
              className={styles.switcherTab}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleTabKeyDown}
            >
              <span
                className={styles.switcherDot}
                style={{ backgroundColor: slide.dotColor }}
                aria-hidden="true"
              />
              <span>{slide.selectorLabel}</span>
            </button>
          );
        })}

        <div
          className={styles.switcherProgressBar}
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
  );
}
