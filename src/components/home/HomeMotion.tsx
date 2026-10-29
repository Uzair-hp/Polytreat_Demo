"use client";

import { useEffect } from "react";

/**
 * Scroll reveals for the home page.
 * - `[data-reveal]` elements fade up once when they enter the viewport.
 * - `[data-stagger-group]` containers reveal their `[data-stagger-item]` children
 *   with an 80ms stagger (used for the PQRS cards).
 * Everything is skipped under prefers-reduced-motion, where final states are shown.
 */
export default function HomeMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeUp");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const group = entry.target as HTMLElement;
            const items = Array.from(group.querySelectorAll<HTMLElement>("[data-stagger-item]"));
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("fadeUp");
              }, index * 80);
            });
            staggerObserver.unobserve(group);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (!reduced) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => revealObserver.observe(el));
      document.querySelectorAll<HTMLElement>("[data-stagger-group]").forEach((el) => staggerObserver.observe(el));
    } else {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, []);

  return null;
}
