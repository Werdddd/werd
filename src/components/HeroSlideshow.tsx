"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Corners } from "./Blueprint";
import portfolio from "@/lib/portfolio-data";
import styles from "./HeroSlideshow.module.css";

const images = ["/hero/heropic1.JPG", "/hero/heropic2.JPG", "/hero/heropic3.JPG"];
const INTERVAL_MS = 5200;

export function HeroSlideshow({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (
      images.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`blueprint ${styles.slideshow} ${className ?? ""}`}
      style={{ aspectRatio: "4 / 5" }}
    >
      <Corners />
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${portfolio.name} — ${portfolio.role}`}
          fill
          sizes="(max-width: 900px) 420px, 40vw"
          preload={i === 0}
          className={styles.image}
          data-active={i === index || undefined}
        />
      ))}
    </div>
  );
}
