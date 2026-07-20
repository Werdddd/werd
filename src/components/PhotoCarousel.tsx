import Image from "next/image";
import { Corners } from "./Blueprint";
import styles from "./PhotoCarousel.module.css";

export function PhotoCarousel({
  photos,
  activeIndex,
  label,
  aspect,
  className,
}: {
  photos: string[];
  activeIndex: number;
  label: string;
  aspect: string;
  className?: string;
}) {
  return (
    <div
      className={`blueprint ${styles.carousel} ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
    >
      <Corners />
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${label} photo ${i + 1}`}
          fill
          sizes="(max-width: 700px) 90vw, 340px"
          className={styles.photo}
          style={{ opacity: i === activeIndex ? 1 : 0 }}
          priority={i === 0}
        />
      ))}
    </div>
  );
}
