import styles from "./ColorBar.module.css";

export interface ColorBarProps {
  className?: string;
}

export default function ColorBar({ className }: ColorBarProps) {
  return (
    <div className={`${styles.bar} ${className ?? ""}`} aria-hidden="true">
      <span className={`${styles.segment} ${styles.water}`} />
      <span className={`${styles.segment} ${styles.construction}`} />
      <span className={`${styles.segment} ${styles.specialty}`} />
      <span className={`${styles.segment} ${styles.vklin}`} />
    </div>
  );
}
