import styles from "./IconTile.module.css";
import type { RangeName } from "./range";

export interface IconTileProps {
  icon: React.ReactNode;
  range?: RangeName;
  className?: string;
  "aria-label"?: string;
}

export default function IconTile({ icon, range, className, "aria-label": ariaLabel }: IconTileProps) {
  return (
    <span
      className={`${styles.tile} ${className ?? ""}`}
      data-range={range}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <span className={styles.icon}>{icon}</span>
    </span>
  );
}
