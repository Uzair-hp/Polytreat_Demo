import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "power-plus-toilet-cleaner";

export const metadata: Metadata = {
  title: "Power Plus Toilet Cleaner | V-Klin by PolyTreat",
  description:
    "Power Plus Toilet Cleaner from the V-Klin bathroom and toilet care range: what it does, how to use it, pack sizes and technical details.",
};

export default function PowerPlusToiletCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}