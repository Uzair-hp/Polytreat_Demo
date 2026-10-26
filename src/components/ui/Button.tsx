import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";
import type { RangeName } from "./range";

export type ButtonVariant = "primary" | "secondary" | "inverse";

export interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  range?: RangeName;
  onDark?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  href,
  external,
  range,
  onDark,
  icon,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const isExternal = external ?? Boolean(href && /^https?:/i.test(href));
  const iconElement = icon ?? (href && !isExternal ? <ArrowRight size={16} aria-hidden="true" /> : null);
  const classes = `${styles.button} ${styles[variant]}${onDark ? ` ${styles.onDark}` : ""} ${className ?? ""}`;
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {iconElement && <span className={styles.icon} aria-hidden="true">{iconElement}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a className={classes} href={href} data-range={range} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link className={classes} href={href} data-range={range}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} data-range={range} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
