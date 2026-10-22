import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "perfumed-liquid-soap-aqua";

export const metadata: Metadata = {
  title: "Perfumed Liquid Soap, Aqua | V-Klin by PolyTreat",
  description:
    "Perfumed Liquid Soap Aqua from the V-Klin hand care and hygiene range: what it does, where it is used, pack sizes and technical details.",
};

export default function PerfumedLiquidSoapPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}