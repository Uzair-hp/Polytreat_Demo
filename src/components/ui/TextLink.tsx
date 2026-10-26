import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./TextLink.module.css";

export interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onDark?: boolean;
}

export default function TextLink({ href, children, className, external, onDark }: TextLinkProps) {
  const isExternal = external ?? /^https?:/i.test(href);
  const classes = `${styles.link}${onDark ? ` ${styles.onDark}` : ""} ${className ?? ""}`;
  const content = (
    <>
      <span className={styles.text}>{children}</span>
      <ArrowRight size={16} aria-hidden="true" className={styles.arrow} />
    </>
  );

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
