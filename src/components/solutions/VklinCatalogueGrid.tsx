"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { VKlinProductGroup } from "@/data/vklinProducts";
import styles from "./vklin.module.css";

interface VklinCatalogueGridProps {
  groups: VKlinProductGroup[];
  totalCount: number;
}

export default function VklinCatalogueGrid({ groups, totalCount }: VklinCatalogueGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Read URL hash on mount and hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && groups.some((g) => g.id === hash)) {
        setActiveCategory(hash);
        const el = document.getElementById("catalogue-view");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (hash === "all") {
        setActiveCategory("all");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [groups]);

  // Handle filter selection
  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    window.history.replaceState(null, "", catId === "all" ? "#all" : `#${catId}`);
  };

  // Flatten all products with group title attached
  const allProducts = groups.flatMap((group) =>
    group.products.map((p) => ({
      ...p,
      groupTitle: group.title,
    }))
  );

  // Filtered products list
  const displayedProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.groupId === activeCategory);

  const activeGroup = groups.find((g) => g.id === activeCategory);

  return (
    <div id="catalogue-view" className={styles.catalogueWrapper}>
      {/* Category Filter Tabs */}
      <nav className={styles.catalogueFilterBar} aria-label="Filter products by cleaning category">
        <button
          type="button"
          onClick={() => handleSelectCategory("all")}
          className={`${styles.filterPill} ${activeCategory === "all" ? styles.filterPillActive : ""}`}
          aria-pressed={activeCategory === "all"}
        >
          {activeCategory === "all" && <Check size={14} className={styles.pillCheck} aria-hidden="true" />}
          <span>All Products</span>
          <span className={styles.filterPillCount}>{totalCount}</span>
        </button>

        {groups.map(({ id, title, products }) => {
          const isActive = activeCategory === id;
          return (
            <button
              type="button"
              key={id}
              onClick={() => handleSelectCategory(id)}
              className={`${styles.filterPill} ${isActive ? styles.filterPillActive : ""}`}
              aria-pressed={isActive}
            >
              {isActive && <Check size={14} className={styles.pillCheck} aria-hidden="true" />}
              <span>{title}</span>
              <span className={styles.filterPillCount}>{products.length}</span>
            </button>
          );
        })}
      </nav>

      {/* Active Category Intro Note */}
      <div className={styles.filterStatusLine}>
        <div className={styles.filterStatusCopy}>
          <span className={styles.filterStatusEyebrow}>
            {activeCategory === "all" ? "Complete V-Klin Range" : "Category Selection"}
          </span>
          <h2 className={styles.filterStatusTitle}>
            {activeCategory === "all"
              ? "All Formulated Cleaning Products"
              : activeGroup?.title}
          </h2>
          <p className={styles.filterStatusDesc}>
            {activeCategory === "all"
              ? `Showing all ${totalCount} task-specific cleaning formulations across floor care, hygiene, kitchenware, glass, washroom, and wellness.`
              : activeGroup?.intro}
          </p>
        </div>

        {activeCategory !== "all" && (
          <button
            type="button"
            onClick={() => handleSelectCategory("all")}
            className={styles.resetFilterBtn}
          >
            <span>Show all {totalCount} products</span>
            <ArrowRight size={14} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Product Cards Grid */}
      <div className={styles.productCatalogueGrid}>
        {displayedProducts.map(({ id: prodId, name, image, href, summary, packSizes, groupTitle }) => (
          <article className={styles.productCatalogueCard} key={prodId}>
            <div className={styles.productImageFrame}>
              <Image
                src={`/vklin-products/${image}`}
                alt={`V-Klin ${name} packaged formulation`}
                fill
                sizes="(max-width: 560px) 90vw, (max-width: 900px) 45vw, 320px"
                className={styles.productBottleImg}
              />
            </div>

            <div className={styles.productCardBody}>
              <span className={styles.productCategoryTag}>{groupTitle}</span>
              <h3 className={styles.productCardTitle}>{name}</h3>
              <p className={styles.productCardDesc}>{summary}</p>

              <ul className={styles.productPacksList} aria-label={`${name} pack sizes`}>
                {packSizes.map((size) => (
                  <li key={size} className={styles.productPackBadge}>
                    {size}
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className={styles.cardLinkPinned}
                aria-label={`View ${name} specifications`}
              >
                <span>View product specification</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
