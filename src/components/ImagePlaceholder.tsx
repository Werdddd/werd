import { Corners } from "./Blueprint";
import styles from "./ImagePlaceholder.module.css";

export function ImagePlaceholder({
  label,
  aspect,
  className,
}: {
  label: string;
  aspect: string;
  className?: string;
}) {
  return (
    <div
      className={`blueprint duotone ${styles.placeholder} ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
    >
      <Corners />
      <div className={styles.inner}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="0" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span>{label}</span>
      </div>
    </div>
  );
}
