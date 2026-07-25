"use client";

import { useEffect, useState } from "react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { PhotoCarousel } from "./PhotoCarousel";
import styles from "./HackathonsList.module.css";

export function HackathonsList() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFrame((f) => f + 1), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.grid}>
      {portfolio.hackathons.map((h) => (
        <article key={h.event} className={`blueprint ${styles.card}`}>
          <Corners />
          <PhotoCarousel
            photos={h.photos}
            activeIndex={frame % h.photos.length}
            label={h.event}
            aspect="4 / 3"
            className={styles.thumb}
          />
          <div className={styles.body}>
            <span className={`${styles.rank} ${h.rank === 1 ? styles.rankFirst : ""}`}>
              {h.place}
            </span>
            <h3 className={styles.project}>{h.project}</h3>
            <p className="card-body">{h.event}</p>
            <p className={`text-muted ${styles.meta}`}>
              {h.organizer} — {h.date}
            </p>
            <p className="card-body">{h.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
