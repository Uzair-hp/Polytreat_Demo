import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "protector-floor-cleaner-lemon";

export const metadata: Metadata = {
  title: "Protector Floor Cleaner, Lemon | V-Klin by PolyTreat",
  description:
    "Protector Floor Cleaner Lemon from the V-Klin floor and surface care range: what it does, where it is used, pack sizes and technical details.",
};

export default function ProtectorFloorCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}