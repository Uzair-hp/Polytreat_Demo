"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Gauge, Headset, ShieldCheck } from "lucide-react";

const principles = [
  {
    letter: "P",
    title: "Performance",
    description: "Formulations considered in the context of the task and operating system.",
    icon: Gauge,
  },
  {
    letter: "Q",
    title: "Quality",
    description: "A focus on product quality and clear technical documentation.",
    icon: BadgeCheck,
  },
  {
    letter: "R",
    title: "Reliability",
    description: "A dependable working relationship from product enquiry through supply.",
    icon: ShieldCheck,
  },
  {
    letter: "S",
    title: "Service",
    description: "A direct conversation with the team about the product and its intended use.",
    icon: Headset,
  },
];

export default function QualityPrinciples() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (!("IntersectionObserver" in window)) {
      queueMicrotask(() => setIsVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 12% 0px" },
    );

    observer.observe(grid);

    const bounds = grid.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      queueMicrotask(() => setIsVisible(true));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`quality-principles${isVisible ? " is-visible" : ""}`}
      ref={gridRef}
      role="list"
      aria-label="Performance, Quality, Reliability, and Service principles"
    >
      {principles.map(({ letter, title, description, icon: Icon }, index) => (
        <article className={`quality-principle quality-principle-${letter.toLowerCase()}`} key={letter} role="listitem">
          <div className="quality-principle-topline">
            <span className="quality-principle-letter" aria-hidden="true">{letter}</span>
            <span className="quality-principle-index">0{index + 1}</span>
            <Icon size={19} aria-hidden="true" />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}
