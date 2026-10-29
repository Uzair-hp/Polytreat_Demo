import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "herbal-mosquito-repellent";

export const metadata: Metadata = {
  title: "VKLIN Herbal Mosquito Repellent | V-Klin by PolyTreat",
  description:
    "VKLIN Herbal Mosquito Repellent is a natural herbal mosquito repellent formulated with Lemongrass, Citronella, Neem Oil and Eucalyptus Oil. Provides long-lasting protection without harsh chemicals. Chemical-free, 100% family safe, non-toxic, and environment friendly.",
};

export default function HerbalMosquitoRepellentPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}