"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import portfolio, { type Hackathon } from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { PhotoCarousel } from "./PhotoCarousel";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { useTiltParallax } from "@/lib/tilt";
import styles from "./HackathonsList.module.css";

// Pulled out so useTiltParallax (a hook) has a proper per-item component
// to live in — calling hooks inside portfolio.hackathons.map() below
// would violate the rules of hooks.
function HackathonCard({ h, frame }: { h: Hackathon; frame: number }) {
  // fadeUp owns y/opacity on this element, so only x/rotate are used here.
  const { x, rotateX, rotateY } = useTiltParallax(16, 3);

  return (
    <motion.article
      variants={fadeUp}
      className={`blueprint ${styles.card}`}
      style={{ x, rotateX, rotateY, transformPerspective: 700 }}
    >
      <Corners />
      <PhotoCarousel
        photos={h.photos}
        activeIndex={frame % h.photos.length}
        label={h.event}
        aspect="4 / 3"
        className={styles.thumb}
      />
      <div className={styles.body}>
        <span className={`${styles.rank} ${h.rank === 1 ? styles.rankFirst : ""}`}>{h.place}</span>
        <h3 className={styles.project}>{h.project}</h3>
        <p className="card-body">{h.event}</p>
        <p className={`text-muted ${styles.meta}`}>
          {h.organizer} — {h.date}
        </p>
        <p className="card-body">{h.description}</p>
      </div>
    </motion.article>
  );
}

export function HackathonsList() {
  const [frame, setFrame] = useState(0);
  // staggerContainer has no y/opacity of its own — x and y both free here.
  const { x, y } = useTiltParallax(6);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFrame((f) => f + 1), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className={`${styles.grid} reveal`}
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      style={{ x, y }}
    >
      {portfolio.hackathons.map((h) => (
        <HackathonCard key={h.event} h={h} frame={frame} />
      ))}
    </motion.div>
  );
}
