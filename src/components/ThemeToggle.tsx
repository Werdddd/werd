"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import styles from "./ThemeToggle.module.css";

type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";

const options: { mode: ThemeMode; label: string }[] = [
  { mode: "system", label: "Use system theme" },
  { mode: "light", label: "Use light theme" },
  { mode: "dark", label: "Use dark theme" },
];

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return mode;
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", resolveTheme(mode));
}

// Traces a faceted polygon — like a camera aperture — collapsed to a point
// at (cx, cy) and rotated by `rotationDeg`.
function iris(cx: number, cy: number, radius: number, rotationDeg: number, blades = 9) {
  const points: string[] = [];
  for (let i = 0; i < blades; i++) {
    const angle = (Math.PI * 2 * i) / blades + (rotationDeg * Math.PI) / 180;
    points.push(`${cx + Math.cos(angle) * radius}px ${cy + Math.sin(angle) * radius}px`);
  }
  return `polygon(${points.join(", ")})`;
}

// Spins an aperture open from (x, y) to reveal the new theme, blades
// unfurling and rotating like a lens iris. Falls back to an instant swap
// where the View Transitions API or motion is unavailable.
function revealThemeFrom(x: number, y: number) {
  // Inflate past the exact corner distance: a polygon's flat edges fall
  // short of its own vertex radius, so a plain hypot() would clip corners.
  const radius =
    1.15 *
    Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

  document.documentElement.animate(
    {
      clipPath: [iris(x, y, 0, 0), iris(x, y, radius, 55)],
    },
    {
      duration: 700,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

function canAnimate() {
  return (
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");

  // Read the persisted choice after mount only — the DOM's data-theme
  // attribute is already correct via the inline script in layout.tsx, this
  // just brings the toggle's own highlighted option in sync without risking
  // a server/client render mismatch.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      setMode(stored);
    }
  }, []);

  useEffect(() => {
    if (mode !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!canAnimate()) {
        applyTheme("system");
        return;
      }
      const transition = document.startViewTransition(() => applyTheme("system"));
      transition.ready.then(() =>
        revealThemeFrom(window.innerWidth / 2, window.innerHeight / 2)
      );
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode]);

  function selectMode(next: ThemeMode, event: React.MouseEvent<HTMLButtonElement>) {
    localStorage.setItem(STORAGE_KEY, next);

    const current = document.documentElement.getAttribute("data-theme");
    const themeChanges = resolveTheme(next) !== current;

    if (!themeChanges || !canAnimate()) {
      setMode(next);
      applyTheme(next);
      return;
    }

    const { clientX: x, clientY: y } = event;
    const transition = document.startViewTransition(() => {
      flushSync(() => setMode(next));
      applyTheme(next);
    });
    transition.ready.then(() => revealThemeFrom(x, y));
  }

  return (
    <div className={styles.group} role="radiogroup" aria-label="Theme">
      {options.map(({ mode: m, label }) => (
        <button
          key={m}
          type="button"
          role="radio"
          aria-checked={mode === m}
          aria-label={label}
          title={label}
          className={styles.button}
          data-active={mode === m || undefined}
          onClick={(event) => selectMode(m, event)}
        >
          {m === "system" && <SystemIcon />}
          {m === "light" && <SunIcon />}
          {m === "dark" && <MoonIcon />}
        </button>
      ))}
    </div>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}
