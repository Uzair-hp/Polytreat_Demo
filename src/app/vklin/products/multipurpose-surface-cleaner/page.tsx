import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "multipurpose-surface-cleaner";

export const metadata: Metadata = {
  title: "VKLIN Multipurpose Cleaner | V-Klin by PolyTreat",
  description:
    "VKLIN Multipurpose Cleaner is a powerful biodegradable surface cleaner that removes grease, dirt, and grime from household, office, and commercial surfaces. Its low-foam, non-corrosive formula delivers sparkling clean results without residue.",
};

export default function MultipurposeSurfaceCleanerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}