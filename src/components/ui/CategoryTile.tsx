import Link from "next/link";
import styles from "./CategoryTile.module.css";

export interface CategoryTileProps {
  label: string;
  href?: string;
  className?: string;
}

export default function CategoryTile({ label, href, className }: CategoryTileProps) {
  const classes = `${styles.tile}${href ? ` ${styles.linked}` : ""} ${className ?? ""}`;

  if (!href) {
    return <span className={classes}>{label}</span>;
  }

  return (
    <Link className={classes} href={href}>
      {label}
    </Link>
  );
}
