"use client";

import { useCallback, useRef, useState } from "react";
import { HeroSlideshow } from "./HeroSlideshow";
import styles from "./HeroPhoto.module.css";

const MAX_TILT_DEG = 16;

export function HeroPhoto({ className }: { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -offsetY * MAX_TILT_DEG,
      y: offsetX * MAX_TILT_DEG,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div className={`${styles.stage} ${className ?? ""}`}>
      <div className={styles.dashedCircle} aria-hidden />
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className={styles.cardGlow} aria-hidden />
        <div className={styles.cardFrame}>
          <HeroSlideshow className={styles.slideshow} plain />
        </div>
        <span className={`${styles.badge} ${styles.badgeAvailable}`}>
          <i className={styles.dot} aria-hidden />
          Available for hire
        </span>
        <span className={`${styles.badge} ${styles.badgeRole}`}>UI/UX &middot; Full-Stack</span>
      </div>
    </div>
  );
}
