"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  Leaf,
  ShieldCheck,
  Waves,
} from "lucide-react";

const slides = [
  {
    id: "water",
    label: "Water treatment",
    sceneTitle: "Industrial water",
    sceneNote: "Boiler · Cooling · RO · Effluent",
    icon: Droplets,
  },
  {
    id: "construction",
    label: "Construction",
    sceneTitle: "Construction & protection",
    sceneNote: "Waterproofing · Coatings · Repair",
    icon: Layers3,
  },
  {
    id: "vklin",
    label: "V-Klin care",
    sceneTitle: "V-Klin care",
    sceneNote: "Surface · Hand · Dish · Facility",
    icon: Leaf,
  },
];

function SlideArtwork({ slideId }: { slideId: string }) {
  if (slideId === "construction") {
    return (
      <div className="hero-scene-art hero-construction-art" aria-hidden="true">
        <div className="construction-halo" />
        <div className="construction-surface construction-surface-back" />
        <div className="construction-surface construction-surface-mid" />
        <div className="construction-surface construction-surface-front" />
        <span className="construction-seal construction-seal-one"><ShieldCheck size={21} /></span>
        <span className="construction-seal construction-seal-two"><Layers3 size={18} /></span>
        <span className="construction-measure construction-measure-one" />
        <span className="construction-measure construction-measure-two" />
        <span className="construction-orbit-dot construction-orbit-dot-one" />
        <span className="construction-orbit-dot construction-orbit-dot-two" />
      </div>
    );
  }

  if (slideId === "vklin") {
    return (
      <div className="hero-scene-art hero-vklin-art" aria-hidden="true">
        <div className="vklin-glass-orb vklin-glass-orb-one" />
        <div className="vklin-glass-orb vklin-glass-orb-two" />
        <div className="vklin-leaf-shape vklin-leaf-shape-one"><Leaf size={24} /></div>
        <div className="vklin-leaf-shape vklin-leaf-shape-two"><Leaf size={17} /></div>
        <div className="vklin-bottle vklin-bottle-tall">
          <span className="vklin-bottle-cap" />
          <span className="vklin-bottle-neck" />
          <span className="vklin-bottle-body"><Droplets size={18} /><b>V-Klin</b><small>CARE</small></span>
        </div>
        <div className="vklin-bottle vklin-bottle-short">
          <span className="vklin-bottle-cap" />
          <span className="vklin-bottle-neck" />
          <span className="vklin-bottle-body"><Leaf size={16} /><b>V-Klin</b></span>
        </div>
        <span className="vklin-bubble vklin-bubble-one" />
        <span className="vklin-bubble vklin-bubble-two" />
        <span className="vklin-bubble vklin-bubble-three" />
      </div>
    );
  }

  return (
    <div className="hero-scene-art hero-water-art" aria-hidden="true">
      <div className="water-grid-floor" />
      <div className="water-orbit water-orbit-one" />
      <div className="water-orbit water-orbit-two" />
      <div className="water-orbit water-orbit-three" />
      <div className="water-treatment-core"><Waves size={56} strokeWidth={1.35} /></div>
      <span className="water-particle water-particle-one" />
      <span className="water-particle water-particle-two" />
      <span className="water-particle water-particle-three" />
      <span className="water-tech-chip water-tech-chip-one"><Factory size={16} /> Process water</span>
      <span className="water-tech-chip water-tech-chip-two"><FlaskConical size={16} /> Applied chemistry</span>
      <span className="water-tech-chip water-tech-chip-three"><Building2 size={16} /> Plant systems</span>
    </div>
  );
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
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
  }, [activeIndex, isHovered, isFocused, prefersReducedMotion]);

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <section
      className="home-hero"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
    >
      <div className="home-hero-glow home-hero-glow-one" aria-hidden="true" />
      <div className="home-hero-glow home-hero-glow-two" aria-hidden="true" />
      <div className="container home-hero-grid">
        <div className="home-hero-copy">
          <span className="eyebrow eyebrow-light hero-carousel-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Water treatment · Construction chemistry · V-Klin care
          </span>
          <h1 id="hero-title">
            Water treatment.{" "}
            <span className="hero-highlight">Construction chemistry. Facility care.</span>
          </h1>
          <p className="home-hero-description">
            Products for industrial water systems, construction applications, and V-Klin institutional care.
          </p>
          <div className="home-hero-actions">
            <Link className="btn btn-accent" href="#solutions">
              Explore solutions <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              className="btn btn-outline"
              href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
              target="_blank"
              rel="noreferrer"
            >
              Talk to our team <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="hero-carousel-visual"
          role="group"
          aria-label={`${activeSlide.label} visual`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
          }}
        >
          <div className="hero-scene-stage">
            {slides.map((slide, index) => {
              const SlideIcon = slide.icon;
              const isActive = index === activeIndex;
              return (
                <div
                  className={`hero-scene hero-scene-${slide.id}${isActive ? " is-active" : ""}`}
                  key={slide.id}
                  aria-hidden={!isActive}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
                >
                  <div className="hero-scene-caption">
                    <span className="hero-scene-caption-icon"><SlideIcon size={17} aria-hidden="true" /></span>
                    <span>
                      <strong>{slide.sceneTitle}</strong>
                      <small>{slide.sceneNote}</small>
                    </span>
                  </div>
                  <SlideArtwork slideId={slide.id} />
                </div>
              );
            })}
          </div>

          <div className="hero-carousel-controls" role="group" aria-label="Hero slides">
            <div className="hero-carousel-pagination">
              {slides.map((slide, index) => (
                <button
                  className={`hero-carousel-dot${index === activeIndex ? " is-active" : ""}`}
                  key={slide.id}
                  type="button"
                  aria-label={`Show ${slide.label} slide`}
                  aria-pressed={index === activeIndex}
                  onClick={() => showSlide(index)}
                >
                  <span className="hero-carousel-dot-number">{`0${index + 1}`}</span>
                  <strong>{slide.label}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true" />
    </section>
  );
}
