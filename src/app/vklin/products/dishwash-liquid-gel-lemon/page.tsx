import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "dishwash-liquid-gel-lemon";

export const metadata: Metadata = {
  title: "VKLIN Dishwash Liquid Gel - Lemon | V-Klin by PolyTreat",
  description:
    "VKLIN Lemon Dishwash Liquid Gel effectively removes grease, oil, and food stains while remaining gentle on hands. Its concentrated, phosphate-free formula provides superior cleaning performance and a refreshing lemon fragrance.",
};

export default function DishwashLiquidGelPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}