import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import FactsBar from "@/components/home/FactsBar";
import Ranges from "@/components/home/Ranges";
import Applications from "@/components/home/Applications";
import Specialty from "@/components/home/Specialty";
import Certificates from "@/components/home/Certificates";
import VKlin from "@/components/home/VKlin";
import Story from "@/components/home/Story";
import Contact from "@/components/home/Contact";
import styles from "@/components/home/home.module.css";

export const metadata: Metadata = {
  title: "PolyTreat Chemicals Pvt. Ltd. | Water Treatment, Construction Chemistry & V-Klin Care",
  description:
    "Mumbai manufacturer since 1987 of industrial water-treatment, construction and surface-protection, specialty, and V-Klin home and facility-care chemistry. Explore 28 product areas across four ranges.",
};

export default function Home() {
  return (
    <main className={styles.home}>
      <HomeHero />
      <FactsBar />
      <Ranges />
      <Applications />
      <Specialty />
      <Certificates />
      <VKlin />
      <Story />
      <Contact />
    </main>
  );
}
