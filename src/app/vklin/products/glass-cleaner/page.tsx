import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "streak-free-glass-cleaner";

export const metadata: Metadata = {
  title: "Streak-Free Glass Cleaner | V-Klin by PolyTreat",
  description:
    "Streak-Free Glass Cleaner from the V-Klin glass and window care range: what it does, where it is used, pack sizes and technical details.",
};

export default function GlassCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}