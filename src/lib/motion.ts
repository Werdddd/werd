import type { Transition, Variants } from "motion/react";

// Same expo-out curve used by the site's hand-rolled CSS transitions
// (hover states, the theme-toggle iris) — keeping Motion on it so
// scroll/opening animations read as one motion language, not two.
export const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUpTransition: Transition = { duration: 0.7, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: fadeUpTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

// Quicker, shallower drop for the fixed nav bar — it's already on screen at
// first paint, so it shouldn't hold up as long as a below-the-fold reveal.
export const dropIn: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.05 } },
};

export function staggerContainer(stagger = 0.09, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

// Once-only scroll trigger: fires a bit before a section's bottom edge
// clears the viewport, matching the old IntersectionObserver's rootMargin.
export const revealViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -8% 0px",
} as const;
