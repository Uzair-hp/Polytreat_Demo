import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "perfumed-liquid-soap-aqua";

export const metadata: Metadata = {
  title: "VKLIN Aqua Perfumed Liquid Soap | V-Klin by PolyTreat",
  description:
    "VKLIN Aqua Perfumed Liquid Soap is a premium Aloe Vera enriched hand wash that provides effective germ protection, gentle cleansing, rich lather, and moisturizing care. Its biodegradable and phosphate-free formula makes it suitable for homes, offices, hospitals, hotels, and commercial establishments.",
};

export default function PerfumedLiquidSoapPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}