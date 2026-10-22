import type { Metadata } from "next";
import { Droplets, FlaskConical, ShieldCheck, ThermometerSun, Waves, Wheat } from "lucide-react";
import IndustrialFamilyPage from "@/components/IndustrialFamilyPage";
import { findIndustrialFamily } from "@/data/industrialFamilies";

export const metadata: Metadata = {
  title: "Sugar-Process Chemicals | PolyTreat Chemicals",
  description:
    "PolyTreat's sugar-process chemical categories: mill-hygiene compounds, antiscalants, viscosity reducers and scale softeners for evaporator bodies.",
};

const categoryIcons = {
  "quaternary-ammonium": Droplets,
  carbamate: FlaskConical,
  antiscalants: ShieldCheck,
  "viscosity-reducers": Waves,
  "evaporator-scale-softeners": ThermometerSun,
};

export default function SugarProcessChemicalsPage() {
  const family = findIndustrialFamily("sugar-process-chemicals");

  if (!family) return null;

  return <IndustrialFamilyPage family={family} icon={Wheat} categoryIcons={categoryIcons} />;
}
