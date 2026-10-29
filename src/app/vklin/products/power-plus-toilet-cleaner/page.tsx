import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "power-plus-toilet-cleaner";

export const metadata: Metadata = {
  title: "VKLIN Power Plus Toilet Cleaner | V-Klin by PolyTreat",
  description:
    "VKLIN Power Plus Toilet Cleaner removes tough stains, eliminates odors, and leaves toilets sparkling clean. Its biodegradable, non-corrosive formula is safe for ceramic and metal surfaces while providing long-lasting freshness and effective hygiene.",
};

export default function PowerPlusToiletCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}