import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Chip from "./Chip";
import IconTile from "./IconTile";
import styles from "./RangeCard.module.css";
import type { RangeName } from "./range";

export type RangeCardLayout = "tall" | "wide" | "compact";

export interface RangeCardMedia {
  src: string;
  alt: string;
}

export interface RangeCardProps {
  icon: React.ReactNode;
  number?: string;
  title: string;
  text: string;
  href: string;
  chips?: string[];
  linkText?: string;
  range?: RangeName;
  layout?: RangeCardLayout;
  media?: RangeCardMedia;
  className?: string;
}

const mediaSizes: Record<RangeCardLayout, string> = {
  tall: "(max-width: 1024px) 100vw, 32vw",
  wide: "(max-width: 1024px) 100vw, 44vw",
  compact: "",
};

export default function RangeCard({
  icon,
  number,
  title,
  text,
  href,
  chips,
  linkText,
  range,
  layout = "compact",
  media,
  className,
}: RangeCardProps) {
  return (
    <Link
      href={href}
      data-range={range}
      className={`${styles.card} ${styles[layout]} ${className ?? ""}`}
    >
      {media && layout !== "compact" && (
        <div className={styles.media}>
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes={mediaSizes[layout]}
            className={styles.mediaImg}
          />
        </div>
      )}

      <div className={styles.body}>
        <IconTile icon={icon} range={range} />
        {number && <span className={styles.number}>{number}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>

        {chips && chips.length > 0 && (
          <ul className={styles.chips} aria-label={`${title} areas`}>
            {chips.map((chip) => (
              <li key={chip}>
                <Chip range={range}>{chip}</Chip>
              </li>
            ))}
          </ul>
        )}

        {linkText && (
          <span className={styles.linkLine}>
            {linkText}
            <ArrowRight size={15} aria-hidden="true" />
          </span>
        )}
      </div>
    </Link>
  );
}
