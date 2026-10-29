import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomeMotion from "@/components/home/HomeMotion";
import PqrsBand from "@/components/home/PqrsBand";
import Ranges from "@/components/home/Ranges";
import Specialty from "@/components/home/Specialty";
import WhereWeMakeIt from "@/components/home/WhereWeMakeIt";
import VKlin from "@/components/home/VKlin";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "PolyTreat Chemicals Pvt. Ltd. | Water Treatment, Construction Chemistry & V-Klin Care",
  description:
    "Mumbai manufacturer since 1987 of industrial water-treatment, construction and surface-protection, specialty, and V-Klin home and facility-care chemistry. Explore 28 product areas across four ranges.",
};

export default function Home() {
  return (
    <main id="main-content">
      <HomeMotion />
      <HomeHero />
      <PqrsBand />
      <Ranges />
      <Specialty />
      <WhereWeMakeIt />
      <VKlin />
      <Contact />
    </main>
  );
}