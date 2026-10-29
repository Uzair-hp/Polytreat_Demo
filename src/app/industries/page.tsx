import type { Metadata } from "next";
import HomeMotion from "@/components/home/HomeMotion";
import PqrsBand from "@/components/home/PqrsBand";
import IndustriesHero from "@/components/industries/IndustriesHero";
import OperatingEnvironments from "@/components/industries/OperatingEnvironments";
import ProductMap from "@/components/industries/ProductMap";
import IndustrySectors from "@/components/industries/IndustrySectors";
import IndustriesContact from "@/components/industries/IndustriesContact";
import styles from "@/components/industries/industries.module.css";

export const metadata: Metadata = {
  title: "Industries & Applications | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial water, construction, specialty and V-Klin ranges, and the industries and settings each one is documented for.",
};

export default function IndustriesPage() {
  return (
    <main className={styles.industriesPage} id="main-content">
      <HomeMotion />
      <IndustriesHero />
      <PqrsBand />
      <OperatingEnvironments />
      <ProductMap />
      <IndustrySectors />
      <IndustriesContact />
    </main>
  );
}
