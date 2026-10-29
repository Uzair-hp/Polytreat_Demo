import Image from "next/image";
import { Leaf } from "lucide-react";
import { homeStockImages } from "@/data/homeImages";
import { vklinProductCount, vklinProductGroups } from "@/data/vklinProducts";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CategoryTile from "@/components/ui/CategoryTile";
import TextLink from "@/components/ui/TextLink";
import styles from "./home.module.css";

export default function VKlin() {
  return (
    <Section id="vklin" tone="vklin" labelledBy="vklin-title" className={styles.vklinSection} data-reveal>
      <Container>
        <div className={styles.vklinGrid}>
          <div className={styles.vklinCopy}>
            <Image
              src="/vklin-logo.webp"
              alt="V-Klin brand logo"
              width={140}
              height={48}
              className={styles.vklinLogo}
            />
            <span className={styles.vklinEyebrow}>
              <Leaf size={14} strokeWidth={1.75} aria-hidden="true" /> A PolyTreat brand
            </span>
            <h2 id="vklin-title" className={styles.vklinTitle}>
              Meet V-Klin. Care for everyday spaces.
            </h2>
            <p className={styles.vklinLead}>
              V-Klin brings PolyTreat&apos;s formulated cleaning range to homes, workplaces,
              and shared facilities, organized by the task each product handles.
            </p>
            <Button variant="primary" range="vklin" href="/vklin">
              Explore V-Klin
            </Button>
            <TextLink href="/vklin/products">See all {vklinProductCount} products</TextLink>
          </div>

          <div className={styles.vklinVisual}>
            <div className={styles.vklinPanel}>
              <Image
                src={homeStockImages.rangeVklin.activeUrl}
                alt={homeStockImages.rangeVklin.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className={styles.vklinPanelImg}
                data-reveal
              />
            </div>

            <div className={styles.vklinCats}>
              {vklinProductGroups.map(({ id, title }) => (
                <CategoryTile key={id} label={title} href={`/vklin/products#${id}`} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}