"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CalendarClock, Droplet, FlaskConical, Layers, Leaf, MapPin, MessageCircle } from "lucide-react";
import { homeStockImages } from "@/data/homeImages";
import { companyInfo } from "@/data/companyInfo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import ColorBar from "@/components/ui/ColorBar";
import styles from "./home.module.css";

const slides = [
  {
    id: "water",
    label: "Industrial water & process",
    selectorLabel: "Water",
    image: homeStockImages.heroWater,
    lead: "Water treatment for critical plant systems.",
    captionTitle: "Boiler · Cooling · RO · Effluent",
    icon: Droplet,
  },
  {
    id: "construction",
    label: "Construction & protection",
    selectorLabel: "Construction",
    image: homeStockImages.heroConstruction,
    lead: "Surface protection built around the material and the problem.",
    captionTitle: "Waterproofing · Coatings · Repair",
    icon: Layers,
  },
  {
    id: "vklin",
    label: "V-Klin care",
    selectorLabel: "V-Klin",
    image: homeStockImages.heroVklin,
    lead: "Everyday cleaning for homes, institutions, and facilities.",
    captionTitle: "Floor · Hand · Dish · Facility",
    icon: Leaf,
  },
];

const proofChips = [
  { icon: CalendarClock, text: "Manufacturing since 1987" },
  { icon: MapPin, text: "Three sites in Maharashtra" },
  { icon: FlaskConical, text: "In-house QC laboratory" },
];

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isHovered || isFocused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6800);
    return () => window.clearInterval(timer);
  }, [isHovered, isFocused, prefersReducedMotion]);

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

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
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={`${styles.heroEyebrow} ${styles.animUp} ${styles["animUp-1"]}`}>
              POLYTREAT CHEMICALS PVT. LTD.
            </span>

            <h1 id="hero-title" className={`${styles.heroTitle} ${styles.animUp} ${styles["animUp-2"]}`}>
              Applied chemistry for{" "}
              <span className={styles.heroHighlight}>water, structures, and everyday care.</span>
            </h1>

            <div className={styles.animDraw}>
              <ColorBar />
            </div>

            <p
              className={`${styles.heroLead} ${styles.animUp} ${styles["animUp-3"]}`}
              aria-live="polite"
              key={activeSlide.id}
            >
              {activeSlide.lead}
            </p>

            <ul className={`${styles.heroChips} ${styles.animUp} ${styles["animUp-3"]}`} aria-label="Company facts">
              {proofChips.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <Chip icon={<Icon size={14} strokeWidth={1.9} />}>{text}</Chip>
                </li>
              ))}
            </ul>

            <div className={`${styles.heroActions} ${styles.animUp} ${styles["animUp-4"]}`}>
              <Button variant="primary" href="#ranges">Explore solutions</Button>
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
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
            }}
          >
            <div className={styles.heroMedia}>
              <div
                id="hero-panel"
                role="tabpanel"
                aria-labelledby={`hero-tab-${activeSlide.id}`}
                className={`${styles.heroFigure} ${styles.animWipe}`}
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
                        src={slide.image.activeUrl}
                        alt={slide.image.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 92vw, 46vw"
                        className={styles.heroSlideImg}
                      />
                    </div>
                  );
                })}
              </div>

              <div className={`${styles.heroCaption} ${styles.animBob}`}>
                <span className={styles.heroCaptionIcon} aria-hidden="true">
                  <activeSlide.icon size={18} strokeWidth={1.75} />
                </span>
                <span className={styles.heroCaptionText}>
                  <strong>{activeSlide.label}</strong>
                  <small>{activeSlide.captionTitle}</small>
                </span>
              </div>
            </div>

            <div className={styles.heroTabs} role="tablist" aria-label="Hero slides">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={`hero-tab-${slide.id}`}
                  role="tab"
                  type="button"
                  aria-selected={index === activeIndex}
                  aria-controls="hero-panel"
                  tabIndex={index === activeIndex ? 0 : -1}
                  className={styles.heroTab}
                  onClick={() => showSlide(index)}
                  onKeyDown={handleTabKeyDown}
                >
                  {slide.selectorLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
