import type { Metadata } from "next";
import { Car, ThermometerSun } from "lucide-react";
import IndustrialFamilyPage from "@/components/IndustrialFamilyPage";
import { findIndustrialFamily } from "@/data/industrialFamilies";

export const metadata: Metadata = {
  title: "Automotive Chemicals | PolyTreat Chemicals",
  description:
    "PolyTreat's automotive chemical range: engine cooling-system coolants for vehicles, and what the industrial catalogue covers.",
};

const categoryIcons = {
  "engine-coolants": ThermometerSun,
};

export default function AutomotiveChemicalsPage() {
  const family = findIndustrialFamily("automotive-chemicals");

  if (!family) return null;

  return <IndustrialFamilyPage family={family} icon={Car} categoryIcons={categoryIcons} />;
}
