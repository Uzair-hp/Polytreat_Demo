import styles from "./StatCard.module.css";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatCardProps {
  items: StatItem[];
  className?: string;
}

export default function StatCard({ items, className }: StatCardProps) {
  return (
    <dl className={`${styles.card} ${className ?? ""}`}>
      {items.map(({ value, label }) => (
        <div className={styles.item} key={label}>
          <dt className={styles.label}>{label}</dt>
          <dd className={styles.value}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
