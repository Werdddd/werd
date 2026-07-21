"use client";

import { useRef, useState } from "react";
import {
  siTypescript,
  siJavascript,
  siPython,
  siReact,
  siVuedotjs,
  siAngular,
  siNextdotjs,
  siNodedotjs,
  siHtml5,
  siCss,
  siClaudecode,
  siCursor,
  siMysql,
  siFirebase,
  siSupabase,
  siKotlin,
  siFlutter,
  siFigma,
  type SimpleIcon,
} from "simple-icons";
import portfolio from "@/lib/portfolio-data";
import styles from "./Skills.module.css";
import shared from "@/styles/shared.module.css";

const ICONS: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  React: siReact,
  "React Native": siReact,
  Vue: siVuedotjs,
  Angular: siAngular,
  "Next JS": siNextdotjs,
  "Node.js": siNodedotjs,
  "Claude Code": siClaudecode,
  Cursor: siCursor,
  MySQL: siMysql,
  Firebase: siFirebase,
  Supabase: siSupabase,
  Kotlin: siKotlin,
  Flutter: siFlutter,
  Figma: siFigma,
};

// A few tools in the stack don't have an entry in the icon set this site
// uses. Rather than mix in unrelated art, these get a letter badge — the
// same convention Adobe uses for its own app icons (Ai, Pr).
const MONOGRAMS: Record<string, string> = {
  Java: "J",
  Canva: "C",
  "Adobe Illustrator": "Ai",
  "Adobe Premiere Pro": "Pr",
  CapCut: "Cc",
};

function IconPath({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      className={styles.icon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

function SkillMark({ name }: { name: string }) {
  if (name === "HTML/CSS") {
    return (
      <span className={styles.iconPair}>
        <IconPath icon={siHtml5} />
        <IconPath icon={siCss} />
      </span>
    );
  }

  const icon = ICONS[name];
  if (icon) return <IconPath icon={icon} />;

  const letters = MONOGRAMS[name];
  return (
    <span className={styles.monogram} aria-hidden="true">
      {letters}
    </span>
  );
}

const STUMBLE_MS = 640;
const RIPPLE_MAX_MS = 180;

type Offset = { x: number; y: number; rot: number; delay: number };

export function Skills() {
  const [offsets, setOffsets] = useState<Offset[] | null>(null);
  const [trippedIndex, setTrippedIndex] = useState<number | null>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleStumble(index: number) {
    if (offsets) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const originEl = chipRefs.current[index];
    if (!originEl) return;
    const originRect = originEl.getBoundingClientRect();
    const originX = originRect.left + originRect.width / 2;
    const originY = originRect.top + originRect.height / 2;

    // Push every other chip directly away from the one that was clicked,
    // like it got shoved into its neighbors — closer chips (and the
    // clicked one itself) take the hardest hit, farther ones barely move.
    const vectors = portfolio.skills.map((_, i) => {
      if (i === index) return { dx: 0, dy: 0, distance: 0 };
      const el = chipRefs.current[i];
      if (!el) return { dx: 0, dy: 0, distance: 0 };
      const rect = el.getBoundingClientRect();
      const dx = rect.left + rect.width / 2 - originX;
      const dy = rect.top + rect.height / 2 - originY;
      return { dx, dy, distance: Math.hypot(dx, dy) || 1 };
    });
    const maxDistance = Math.max(...vectors.map((v) => v.distance), 1);

    setOffsets(
      vectors.map(({ dx, dy, distance }, i) => {
        if (i === index) {
          return { x: 0, y: 0, rot: (Math.random() - 0.5) * 8, delay: 0 };
        }
        const nx = dx / distance;
        const ny = dy / distance;
        const falloff = Math.max(0.3, 1 - distance / (maxDistance * 1.15));
        const push = 20 + falloff * 40;
        const jitter = (Math.random() - 0.5) * 8;

        return {
          x: nx * push + jitter,
          y: ny * push * 0.55 + falloff * 12,
          rot: nx * 18 * falloff + (Math.random() - 0.5) * 6,
          delay: (distance / maxDistance) * RIPPLE_MAX_MS,
        };
      })
    );
    setTrippedIndex(index);

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      setOffsets(null);
      setTrippedIndex(null);
    }, STUMBLE_MS + RIPPLE_MAX_MS);
  }

  return (
    <section id="skills" className={shared.container} data-reveal>
      <h6 className={shared.eyebrow}>Skills &amp; tools</h6>
      <h2 className={shared.sectionHeading}>What I work with</h2>
      <div className={styles.grid}>
        {portfolio.skills.map((skill, i) => {
          const offset = offsets?.[i];
          const isTripped = trippedIndex === i;

          return (
            <button
              key={skill.name}
              type="button"
              ref={(el) => {
                chipRefs.current[i] = el;
              }}
              className={`${styles.chip} ${offset ? styles.messy : ""} ${
                isTripped ? styles.tripped : ""
              }`}
              style={
                offset
                  ? ({
                      "--tx": `${offset.x}px`,
                      "--ty": `${offset.y}px`,
                      "--rot": `${offset.rot}deg`,
                      animationDelay: `${offset.delay}ms`,
                    } as React.CSSProperties)
                  : undefined
              }
              onClick={() => handleStumble(i)}
            >
              <SkillMark name={skill.name} />
              {skill.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
