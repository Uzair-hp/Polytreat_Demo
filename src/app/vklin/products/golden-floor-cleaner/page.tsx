import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "golden-floor-cleaner";

export const metadata: Metadata = {
  title: "Golden Floor Cleaner | V-Klin by PolyTreat",
  description:
    "Golden Floor Cleaner from the V-Klin floor and surface care range: what it does, where it is used, pack sizes and technical details.",
};

export default function GoldenFloorCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}