import styles from "./Section.module.css";
import type { RangeName } from "./range";

export type SectionTone = "default" | "tint" | "dark" | "vklin";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  id?: string;
  labelledBy?: string;
  range?: RangeName;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  tone = "default",
  id,
  labelledBy,
  range,
  children,
  className,
  ...rest
}: SectionProps) {
  const toneClass = tone !== "default" ? styles[tone] : "";
  const activeRange = range ?? (tone === "vklin" ? "vklin" : undefined);

  return (
    <section
      id={id}
      className={`${styles.section} ${toneClass} ${className ?? ""}`}
      data-range={activeRange}
      aria-labelledby={labelledBy}
      {...rest}
    >
      {children}
    </section>
  );
}
