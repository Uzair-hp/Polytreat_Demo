import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "air-freshener-ac-duct-odour-eliminator";

export const metadata: Metadata = {
  title: "VKLIN Air Freshener Multipurpose Odour Eliminator | V-Klin by PolyTreat",
  description:
    "VKLIN Air Freshener Multipurpose Odour Eliminator effectively neutralizes smoke, pet, cooking, and musty odors while improving indoor air quality. Its natural plant-based biodegradable formula is ideal for HVAC systems, homes, offices, hotels, and commercial spaces.",
};

export default function AirFreshenerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}