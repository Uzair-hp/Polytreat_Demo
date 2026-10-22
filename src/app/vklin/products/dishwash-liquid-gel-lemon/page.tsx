import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "dishwash-liquid-gel-lemon";

export const metadata: Metadata = {
  title: "Dishwash Liquid Gel, Lemon | V-Klin by PolyTreat",
  description:
    "Dishwash Liquid Gel Lemon from the V-Klin dishwashing range: what it does, where it is used, pack sizes and technical details.",
};

export default function DishwashLiquidGelPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}