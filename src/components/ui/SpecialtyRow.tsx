import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Chip from "./Chip";
import styles from "./SpecialtyRow.module.css";
import type { RangeName } from "./range";

export interface SpecialtyRowProps {
  range: RangeName;
  icon?: React.ReactNode;
  category: string;
  name: string;
  tagline: string;
  text: string;
  note: string;
  chips: string[];
  href: string;
  className?: string;
}

export default function SpecialtyRow({
  range,
  icon,
  category,
  name,
  tagline,
  text,
  note,
  chips,
  href,
  className,
}: SpecialtyRowProps) {
  return (
    <Link
      href={href}
      data-range={range}
      className={`${styles.row} ${className ?? ""}`}
    >
      <div className={styles.lead}>
        <span className={styles.tag}>
          {icon && <span className={styles.tagIcon} aria-hidden="true">{icon}</span>}
          {category}
        </span>
        <h3 className={styles.name}>{name}</h3>
      </div>

      <div className={styles.bodyCol}>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.text}>{text}</p>
        <p className={styles.note}>{note}</p>
      </div>

      <ul className={styles.chips} aria-label={`${name} application areas`}>
        {chips.map((chip) => (
          <li key={chip}>
            <Chip range={range}>{chip}</Chip>
          </li>
        ))}
      </ul>

      <span className={styles.arrow} aria-hidden="true">
        <ArrowRight size={20} strokeWidth={1.75} />
      </span>
    </Link>
  );
}
