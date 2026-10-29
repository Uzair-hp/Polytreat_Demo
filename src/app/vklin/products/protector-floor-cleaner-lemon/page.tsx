import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "protector-floor-cleaner-lemon";

export const metadata: Metadata = {
  title: "VKLIN Protector Floor Cleaner Lemon | V-Klin by PolyTreat",
  description:
    "VKLIN Protector Floor Cleaner Lemon delivers strong cleaning performance, removes unpleasant odors, and leaves a refreshing lemon fragrance. Its biodegradable and phosphate-free formula is suitable for homes, offices, hospitals, schools, and commercial facilities.",
};

export default function ProtectorFloorCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}