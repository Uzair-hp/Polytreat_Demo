import styles from "./Chip.module.css";
import type { RangeName } from "./range";

export interface ChipProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  range?: RangeName;
  className?: string;
  style?: React.CSSProperties;
}

export default function Chip({ children, icon, range, className, style }: ChipProps) {
  return (
    <span
      className={`${styles.chip}${range ? ` ${styles.ranged}` : ""} ${className ?? ""}`}
      data-range={range}
      style={style}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span className={styles.text}>{children}</span>
    </span>
  );
}
