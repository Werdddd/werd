"use client";

import { motionValue, useTransform, type MotionValue } from "motion/react";

// Shared, site-wide tilt signal in MotionValue form — the same -1..1
// numbers AmbientTilt.tsx smooths (spring + low-pass) and writes onto
// <html> as --tilt-x/--tilt-y for CSS consumers (TiltVeil, globals.css'
// ambient background). Motion owns `transform` via inline styles on any
// element it's animating, so a plain CSS transform on those nodes gets
// silently overridden the moment Motion touches them — feeding the same
// numbers through Motion's own value system instead lets each element's
// parallax compose alongside its own `variants` reveal, rather than
// fighting it.
export const tiltX: MotionValue<number> = motionValue(0);
export const tiltY: MotionValue<number> = motionValue(0);

/**
 * depthPx: how far the element shifts at full tilt (x from left/right
 * tilt, y from front/back tilt).
 * rotateDeg: how far it tilts in 3D at full tilt (0 skips rotation).
 *
 * Returns all four channels regardless of rotateDeg; callers whose own
 * `variants` already animate `y` (anything using fadeUp) should
 * destructure only `{ x, rotateX, rotateY }` to avoid two sources
 * fighting over the same transform channel — see the AGENTS note in
 * this file's callers for which ones apply.
 */
export function useTiltParallax(depthPx: number, rotateDeg = 0) {
  const x = useTransform(tiltX, (v) => v * depthPx);
  const y = useTransform(tiltY, (v) => v * depthPx);
  const rotateX = useTransform(tiltY, (v) => v * -rotateDeg);
  const rotateY = useTransform(tiltX, (v) => v * rotateDeg);
  return { x, y, rotateX, rotateY };
}
