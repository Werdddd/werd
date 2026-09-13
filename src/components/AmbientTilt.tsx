"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AmbientTilt.module.css";

// Damped-spring + low-pass constants tuned softer than the hero mockup's —
// this drives the whole page's background, so it should read as ambient
// mood, not a focal interaction.
const SPRING_STIFFNESS = 0.1;
const SPRING_DAMPING = 0.82;
const LOW_PASS_ALPHA = 0.15;
const GYRO_RANGE_DEG = 26;
const REST_EPSILON = 0.0005;

type Vec = { x: number; y: number };
type OrientationPermissionAPI = {
  requestPermission?: () => Promise<"granted" | "denied">;
};

/**
 * Site-wide tilt source: writes --tilt-x/--tilt-y (unitless -1..1) onto the
 * root element from the device gyroscope (touch devices, once permission is
 * granted) or window-relative mouse position (desktop). globals.css's
 * ambient background reads these vars directly; HeroPhoto's mobile layer
 * reads them too, so the mockup and the page background move from the same
 * input on mobile while desktop keeps HeroPhoto's own card-hover tilt.
 */
export function AmbientTilt() {
  const [needsPermission, setNeedsPermission] = useState(false);
  const requestPermissionRef = useRef<() => void>(() => {});

  const handleRequestClick = useCallback(() => {
    requestPermissionRef.current();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = reducedMotionQuery.matches;

    const target: Vec = { x: 0, y: 0 };
    const smoothed: Vec = { x: 0, y: 0 };
    const position: Vec = { x: 0, y: 0 };
    const velocity: Vec = { x: 0, y: 0 };
    let baseline: { beta: number; gamma: number } | null = null;
    let rafId: number | null = null;
    let lastOrientationTs = 0;

    const applyToRoot = (x: number, y: number) => {
      root.style.setProperty("--tilt-x", x.toFixed(3));
      root.style.setProperty("--tilt-y", y.toFixed(3));
    };

    const tick = () => {
      smoothed.x += (target.x - smoothed.x) * LOW_PASS_ALPHA;
      smoothed.y += (target.y - smoothed.y) * LOW_PASS_ALPHA;

      const dx = smoothed.x - position.x;
      const dy = smoothed.y - position.y;
      velocity.x = (velocity.x + dx * SPRING_STIFFNESS) * SPRING_DAMPING;
      velocity.y = (velocity.y + dy * SPRING_STIFFNESS) * SPRING_DAMPING;
      position.x += velocity.x;
      position.y += velocity.y;

      applyToRoot(position.x, position.y);

      const atRest =
        Math.abs(dx) < REST_EPSILON &&
        Math.abs(dy) < REST_EPSILON &&
        Math.abs(velocity.x) < REST_EPSILON &&
        Math.abs(velocity.y) < REST_EPSILON;
      rafId = atRest ? null : requestAnimationFrame(tick);
    };

    const scheduleTick = () => {
      if (rafId == null) rafId = requestAnimationFrame(tick);
    };

    const setTarget = (x: number, y: number) => {
      target.x = Math.max(-1, Math.min(1, x));
      target.y = Math.max(-1, Math.min(1, y));
      if (reducedMotion) {
        applyToRoot(target.x * 0.15, target.y * 0.15);
        return;
      }
      scheduleTick();
    };

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        if (rafId != null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        target.x = target.y = smoothed.x = smoothed.y = position.x = position.y = velocity.x = velocity.y = 0;
        applyToRoot(0, 0);
      }
    };
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    const handleWindowMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setTarget(x, y);
    };

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta == null || event.gamma == null) return;
      const now = performance.now();
      if (now - lastOrientationTs < 16) return; // ~60fps ceiling
      lastOrientationTs = now;

      if (!baseline) baseline = { beta: event.beta, gamma: event.gamma };
      const deltaBeta = event.beta - baseline.beta;
      const deltaGamma = event.gamma - baseline.gamma;
      setTarget(deltaGamma / GYRO_RANGE_DEG, deltaBeta / GYRO_RANGE_DEG);
    };

    const isTouchLike = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
    let removeInputListener = () => {};

    if (isTouchLike) {
      const DeviceOrientationEventCtor = window.DeviceOrientationEvent as unknown as
        | (typeof DeviceOrientationEvent & OrientationPermissionAPI)
        | undefined;

      if (typeof DeviceOrientationEventCtor !== "undefined") {
        if (typeof DeviceOrientationEventCtor.requestPermission === "function") {
          setNeedsPermission(true);
          requestPermissionRef.current = () => {
            DeviceOrientationEventCtor.requestPermission!()
              .then((result) => {
                if (result === "granted") {
                  window.addEventListener("deviceorientation", handleOrientation);
                  removeInputListener = () => window.removeEventListener("deviceorientation", handleOrientation);
                }
              })
              .catch(() => {
                // Denied or unsupported — page stays static, matching the mockup's fallback.
              })
              .finally(() => setNeedsPermission(false));
          };
        } else {
          window.addEventListener("deviceorientation", handleOrientation);
          removeInputListener = () => window.removeEventListener("deviceorientation", handleOrientation);
        }
      }
    } else {
      window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
      removeInputListener = () => window.removeEventListener("mousemove", handleWindowMouseMove);
    }

    return () => {
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      removeInputListener();
      if (rafId != null) cancelAnimationFrame(rafId);
      applyToRoot(0, 0);
    };
  }, []);

  if (!needsPermission) return null;

  return (
    <button
      type="button"
      className={styles.prompt}
      onClick={handleRequestClick}
      aria-label="Enable tilt effect using device motion"
    >
      Enable tilt effect
    </button>
  );
}
