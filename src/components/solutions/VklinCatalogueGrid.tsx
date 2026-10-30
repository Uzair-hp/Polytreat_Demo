"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Search, SearchX, X } from "lucide-react";
import type { VKlinProductGroup } from "@/data/vklinProducts";
import styles from "./vklin.module.css";

interface VklinCatalogueGridProps {
  groups: VKlinProductGroup[];
  totalCount: number;
}

export default function VklinCatalogueGrid({ groups, totalCount }: VklinCatalogueGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
  const allProducts = useMemo(
    () =>
      groups.flatMap((group) =>
        group.products.map((p) => ({
          ...p,
          groupTitle: group.title,
        }))
      ),
    [groups]
  );

  // Category filter
  const categoryProducts = useMemo(
    () =>
      activeCategory === "all"
        ? allProducts
        : allProducts.filter((p) => p.groupId === activeCategory),
    [activeCategory, allProducts]
  );

  // Search filter across name, summary, applications, features, fragrances, pack sizes
  const displayedProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return categoryProducts;

    return categoryProducts.filter((p) => {
      const searchableString = [
        p.name,
        p.shortName,
        p.summary,
        p.description,
        p.groupTitle,
        ...p.features,
        ...p.applications,
        ...p.packSizes,
        ...p.fragrances,
      ]
        .join(" ")
        .toLowerCase();
      return searchableString.includes(normalizedQuery);
    });
  }, [categoryProducts, searchQuery]);

  const activeGroup = groups.find((g) => g.id === activeCategory);

  return (
    <div id="catalogue-view" className={styles.catalogueWrapper}>
      {/* Search Bar & Filter Controls */}
      <div className={styles.catalogueControls}>
        {/* Real-time Search Input */}
        <div className={styles.searchBarWrap}>
          <div className={styles.searchIconWrap} aria-hidden="true">
            <Search size={18} strokeWidth={2} />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by product name, surface, fragrance, or pack size (e.g. 'lemon', 'glass', '5 L', 'floor')..."
            className={styles.searchInput}
            aria-label="Search V-Klin products"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className={styles.searchClearBtn}
              aria-label="Clear search query"
            >
              <X size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
          )}
        </div>

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
      </div>

      {/* Active Filter & Search Status Line */}
      <div className={styles.filterStatusLine}>
        <div className={styles.filterStatusCopy}>
          <span className={styles.filterStatusEyebrow}>
            {searchQuery
              ? `Search Results (${displayedProducts.length})`
              : activeCategory === "all"
              ? "Complete V-Klin Range"
              : "Category Selection"}
          </span>
          <h2 className={styles.filterStatusTitle}>
            {searchQuery
              ? `Results for "${searchQuery}"`
              : activeCategory === "all"
              ? "All Formulated Cleaning Products"
              : activeGroup?.title}
          </h2>
          <p className={styles.filterStatusDesc}>
            {searchQuery
              ? `Found ${displayedProducts.length} product${displayedProducts.length === 1 ? "" : "s"} matching "${searchQuery}"${
                  activeCategory !== "all" ? ` in ${activeGroup?.title}` : ""
                }.`
              : activeCategory === "all"
              ? `Showing all ${totalCount} task-specific cleaning formulations across floor care, hygiene, kitchenware, glass, washroom, and wellness.`
              : activeGroup?.intro}
          </p>
        </div>

        {(activeCategory !== "all" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
              window.history.replaceState(null, "", "#all");
            }}
            className={styles.resetFilterBtn}
          >
            <span>Reset filters &amp; view all {totalCount} products</span>
            <ArrowRight size={14} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Zero Results State */}
      {displayedProducts.length === 0 ? (
        <div className={styles.noResultsBox}>
          <div className={styles.noResultsIconWrap} aria-hidden="true">
            <SearchX size={32} strokeWidth={1.8} />
          </div>
          <h3 className={styles.noResultsTitle}>No formulations matched your search</h3>
          <p className={styles.noResultsDesc}>
            No products match &ldquo;{searchQuery}&rdquo;
            {activeCategory !== "all" && ` in ${activeGroup?.title}`}. Try checking your spelling or searching for common terms like &ldquo;floor&rdquo;, &ldquo;lemon&rdquo;, &ldquo;5 L&rdquo;, or &ldquo;spray&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className={styles.noResultsResetBtn}
          >
            Clear search &amp; show all {totalCount} products
          </button>
        </div>
      ) : (
        /* Product Cards Grid */
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
      )}
    </div>
  );
}
