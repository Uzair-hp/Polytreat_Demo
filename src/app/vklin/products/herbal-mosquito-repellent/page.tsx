import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "herbal-mosquito-repellent";

export const metadata: Metadata = {
  title: "Herbal Mosquito Repellent | V-Klin by PolyTreat",
  description:
    "V-Klin Herbal Mosquito Repellent: a water-based plant-oil room spray, where it is used, how to apply it, and pack sizes.",
};

export default function HerbalMosquitoRepellentPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}