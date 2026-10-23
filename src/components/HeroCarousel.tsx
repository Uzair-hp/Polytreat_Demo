"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Droplets,
  FlaskConical,
  Layers3,
  Leaf,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { homeStockImages } from "@/data/homeImages";

const slides = [
  {
    id: "water",
    label: "Industrial water & process",
    selectorLabel: "Water",
    image: homeStockImages.heroWater,
    lead: "Water treatment for critical plant systems.",
    captionTitle: "Boiler · Cooling · RO · Effluent",
    icon: Droplets,
  },
  {
    id: "construction",
    label: "Construction & protection",
    selectorLabel: "Construction",
    image: homeStockImages.heroConstruction,
    lead: "Surface protection built around the material and the problem.",
    captionTitle: "Waterproofing · Coatings · Repair",
    icon: Layers3,
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
      className="hp-hero"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
    >
      <div className="container hp-hero-grid">
        <div className="hp-hero-copy">
          <span className="eyebrow eyebrow-dark hp-hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            PolyTreat Chemicals Pvt. Ltd.
          </span>
          <h1 id="hero-title">
            Applied chemistry for{" "}
            <span className="hp-hero-highlight">
              water, structures, and everyday care.
            </span>
          </h1>
          <p className="hp-hero-lead" aria-live="polite" key={activeSlide.id}>
            {activeSlide.lead}
          </p>

          <ul className="hp-hero-proof" aria-label="Company facts">
            {proofChips.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="hp-hero-actions">
            <Link className="btn btn-accent" href="#ranges">
              Explore solutions <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              className="btn hp-btn-whatsapp"
              href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Talk to our team
            </a>
          </div>
        </div>

        <div className="hp-hero-visual">
          <div
            className="hp-hero-stage"
            role="group"
            aria-label={`${activeSlide.label} image`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
            }}
          >
            {slides.map((slide, index) => {
              const SlideIcon = slide.icon;
              const isActive = index === activeIndex;
              return (
                <div
                  className={`hp-hero-slide${isActive ? " is-active" : ""}`}
                  key={slide.id}
                  aria-hidden={!isActive}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
                >
                  <Image
                    src={slide.image.activeUrl}
                    alt={slide.image.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 760px) 92vw, 46vw"
                    className="hp-hero-slide-img"
                  />
                  <div className="hp-hero-slide-shade" aria-hidden="true" />
                  <div className="hp-hero-slide-caption">
                    <span className="hp-hero-caption-icon"><SlideIcon size={16} strokeWidth={2} aria-hidden="true" /></span>
                    <span className="hp-hero-caption-text">
                      <strong>{slide.label}</strong>
                      <small>{slide.captionTitle}</small>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hp-hero-tabs" role="group" aria-label="Hero slides">
            {slides.map((slide, index) => (
              <button
                className={`hp-hero-tab${index === activeIndex ? " is-active" : ""}`}
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.label} slide`}
                aria-pressed={index === activeIndex}
                onClick={() => showSlide(index)}
              >
                <span className="hp-hero-tab-mark" aria-hidden="true" />
                <span className="hp-hero-tab-label">{slide.selectorLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
