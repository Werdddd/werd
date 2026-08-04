"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorGlow.module.css";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    const root = document.documentElement;
    let frame = 0;
    let pending: { x: number; y: number } | null = null;

    const apply = () => {
      frame = 0;
      if (!pending) return;
      root.style.setProperty("--cursor-x", `${pending.x}px`);
      root.style.setProperty("--cursor-y", `${pending.y}px`);
    };

    const onMove = (e: MouseEvent) => {
      pending = { x: e.clientX, y: e.clientY };
      ref.current?.setAttribute("data-active", "true");
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      ref.current?.setAttribute("data-active", "false");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className={styles.glow} aria-hidden="true" />;
}
