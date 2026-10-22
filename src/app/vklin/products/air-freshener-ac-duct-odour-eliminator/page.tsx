import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VklinProductDetail from "@/components/VklinProductDetail";
import { findVKlinProduct } from "@/data/vklinProducts";

const PRODUCT_ID = "air-freshener-ac-duct-odour-eliminator";

export const metadata: Metadata = {
  title: "Air Freshener & AC-Duct Odour Eliminator | V-Klin by PolyTreat",
  description:
    "V-Klin Air Freshener and AC-Duct Odour Eliminator: what it does, where it is used, dilution, coverage and pack sizes.",
};

export default function AirFreshenerPage() {
  const product = findVKlinProduct(PRODUCT_ID);

  if (!product) notFound();

  return <VklinProductDetail product={product} />;
}