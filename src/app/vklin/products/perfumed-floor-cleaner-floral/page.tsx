import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "perfumed-floor-cleaner-floral";

export const metadata: Metadata = {
  title: "Perfumed Floor Cleaner, Floral | V-Klin by PolyTreat",
  description:
    "Perfumed Floor Cleaner Floral from the V-Klin floor and surface care range: what it does, where it is used, pack sizes and technical details.",
};

export default function PerfumedFloorCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}