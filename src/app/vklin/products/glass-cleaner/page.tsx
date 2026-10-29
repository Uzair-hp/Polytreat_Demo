import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "streak-free-glass-cleaner";

export const metadata: Metadata = {
  title: "VKLIN Streak-Free Glass Cleaner | V-Klin by PolyTreat",
  description:
    "VKLIN Streak-Free Glass Cleaner delivers sparkling, streak-free shine on windows, mirrors, glass tables, refrigerators, and electronic appliances. Its ammonia-free, biodegradable formula quickly removes dust, grease, and grime while leaving a fresh fragrance.",
};

export default function GlassCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}