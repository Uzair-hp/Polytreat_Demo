import styles from "./SectionHeading.module.css";

export type SectionHeadingAlign = "split" | "left";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: SectionHeadingAlign;
  id?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${styles[align]} ${className ?? ""}`}>
      <div className={styles.titleGroup}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
      </div>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
