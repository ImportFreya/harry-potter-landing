
import styles from "./Badge.module.scss";

interface BadgeProps {
  label: string;
  variant: "house" | "status";
  house?: string;
  alive?: boolean;
}

export function Badge({ label, variant, house, alive }: BadgeProps) {
  return (
    <span
      className={styles.badge}
      data-variant={variant}
      data-house={house?.toLowerCase()}
      data-alive={alive}
      
    >
      {label}
    </span>
  );
}
