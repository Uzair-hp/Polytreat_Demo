import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "perfumed-floor-cleaner-floral";

export const metadata: Metadata = {
  title: "VKLIN Perfumed Floor Cleaner - Floral | V-Klin by PolyTreat",
  description:
    "VKLIN Floral Perfumed Floor Cleaner removes tough stains, helps protect against germs, eliminates unpleasant odors, and leaves a long-lasting floral fragrance. Ideal for homes, offices, hospitals, and commercial facilities.",
};

export default function PerfumedFloorCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}