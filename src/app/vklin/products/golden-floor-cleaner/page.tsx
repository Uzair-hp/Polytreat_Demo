import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "golden-floor-cleaner";

export const metadata: Metadata = {
  title: "VKLIN Golden Floor Cleaner & Deodoriser | V-Klin by PolyTreat",
  description:
    "VKLIN Golden Floor Cleaner & Deodoriser is a dual-action floor cleaner and deodoriser formulated with effective cleaning compounds and sanitising agents for superior cleaning and long-lasting freshness. Fully biodegradable, safe on multiple surfaces.",
};

export default function GoldenFloorCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}