import Link from "next/link";
import styles from "./ContactTile.module.css";

export interface ContactTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  className?: string;
}

export default function ContactTile({ icon, label, value, href, external, className }: ContactTileProps) {
  const inner = (
    <>
      <span className={styles.iconWrapper} aria-hidden="true">{icon}</span>
      <span className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </span>
      {href && (
        <svg
          className={styles.arrow}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </>
  );

  const classes = `${styles.tile}${href ? ` ${styles.linked}` : ""} ${className ?? ""}`;

  if (!href) {
    return <div className={classes}>{inner}</div>;
  }

  if (external ?? /^https?:/i.test(href)) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {inner}
    </Link>
  );
}
