import type { Metadata } from "next";
import { Flame, Layers3, ShieldAlert, Wind } from "lucide-react";
import IndustrialFamilyPage from "@/components/IndustrialFamilyPage";
import { findIndustrialFamily } from "@/data/industrialFamilies";

export const metadata: Metadata = {
  title: "Fireside Treatment | PolyTreat Chemicals",
  description:
    "PolyTreat's fireside treatment categories for the combustion side of a boiler: pre-combustion and post-combustion catalysts, chromate-based treatments, and combined catalysts.",
};

const categoryIcons = {
  "pre-combustion": Flame,
  "post-combustion": Wind,
  "chromate-based": ShieldAlert,
  "combined-catalysts": Layers3,
};

export default function FiresideTreatmentPage() {
  const family = findIndustrialFamily("fireside-treatment");

  if (!family) return null;

  return (
    <IndustrialFamilyPage
      family={family}
      icon={Flame}
      categoryIcons={categoryIcons}
      mainClassName="fireside-page"
      figureImage={{
        src: "/images/home/boiler-combustion.webp",
        alt: "Unsafe boiler combustion furnace with heavy deposits and workers inspecting",
        caption: "Fireside treatment",
      }}
    />
  );
}
