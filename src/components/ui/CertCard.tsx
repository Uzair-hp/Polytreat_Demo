import Link from "next/link";
import { Check } from "lucide-react";
import styles from "./CertCard.module.css";

export interface CertCardProps {
  label: string;
  href?: string;
  className?: string;
}

export default function CertCard({ label, href, className }: CertCardProps) {
  const inner = (
    <>
      <span className={styles.check} aria-hidden="true">
        <Check size={20} strokeWidth={2.4} />
      </span>
      <span className={styles.label}>{label}</span>
    </>
  );

  const classes = `${styles.card}${href ? ` ${styles.linked}` : ""} ${className ?? ""}`;

  if (!href) {
    return <div className={classes}>{inner}</div>;
  }

  return (
    <Link className={classes} href={href}>
      {inner}
    </Link>
  );
}
