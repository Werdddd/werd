"use client";

import { MotionConfig } from "motion/react";

// Central switch for every motion.* component in the tree: when the OS-level
// "reduce motion" preference is on, Motion collapses transform/layout
// animations to instant so opening/scroll reveals don't fight the CSS
// `prefers-reduced-motion` rules already used elsewhere on the site.
export function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
