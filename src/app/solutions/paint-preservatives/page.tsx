import type { Metadata } from "next";
import { BrickWall, House, PaintBucket, PaintRoller, Sun } from "lucide-react";
import IndustrialFamilyPage from "@/components/IndustrialFamilyPage";
import { findIndustrialFamily } from "@/data/industrialFamilies";

export const metadata: Metadata = {
  title: "Paint Preservatives | PolyTreat Chemicals",
  description:
    "PolyTreat's paint preservative categories: wet-state preservatives for paint in storage, and dry-state preservatives for exterior, interior and cement paints.",
};

const categoryIcons = {
  "wet-state": PaintRoller,
  "dry-state-exterior": Sun,
  "dry-state-interior": House,
  "cement-paints": BrickWall,
};

export default function PaintPreservativesPage() {
  const family = findIndustrialFamily("paint-preservatives");

  if (!family) return null;

  return <IndustrialFamilyPage family={family} icon={PaintBucket} categoryIcons={categoryIcons} />;
}
