import styles from "./Chip.module.css";
import type { RangeName } from "./range";

export interface ChipProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  range?: RangeName;
  className?: string;
}

export default function Chip({ children, icon, range, className }: ChipProps) {
  return (
    <span
      className={`${styles.chip}${range ? ` ${styles.ranged}` : ""} ${className ?? ""}`}
      data-range={range}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span className={styles.text}>{children}</span>
    </span>
  );
}
