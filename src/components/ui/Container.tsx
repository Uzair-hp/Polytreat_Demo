import styles from "./Container.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export default function Container({
  as: Component = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Component className={`${styles.container} ${className ?? ""}`} {...rest}>
      {children}
    </Component>
  );
}
