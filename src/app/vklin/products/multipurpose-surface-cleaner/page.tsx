import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "multipurpose-surface-cleaner";

export const metadata: Metadata = {
  title: "Multipurpose Surface Cleaner | V-Klin by PolyTreat",
  description:
    "Multipurpose Surface Cleaner from the V-Klin range: what it does, where it is used, pack sizes and technical details.",
};

export default function MultipurposeSurfaceCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}