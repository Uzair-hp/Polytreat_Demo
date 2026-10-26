import styles from "./FactList.module.css";

export interface FactListItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface FactListProps {
  items: FactListItem[];
  className?: string;
}

export default function FactList({ items, className }: FactListProps) {
  return (
    <dl className={`${styles.list} ${className ?? ""}`}>
      {items.map(({ label, value, icon }, index) => (
        <div key={index} className={styles.item}>
          <dt className={styles.label}>
            {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
            <span>{label}</span>
          </dt>
          <dd className={styles.value}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
