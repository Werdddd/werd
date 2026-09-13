"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { HeroSlideshow } from "./HeroSlideshow";
import { fadeUp } from "@/lib/motion";
import styles from "./HeroPhoto.module.css";

// Whole-frame "phone turning in space" rotation, kept small so it reads as physical.
const MAX_ROTATE_DEG = 8;
// Per-layer translate ranges (px) at full tilt — back layers move less, foreground moves more.
const LAYER_RANGE = {
  glow: 4,
  frame: 9,
  gloss: 12,
  badge: 15,
};
// Damped-spring constants tuned for a slight overshoot-and-settle, not a linear snap.
const SPRING_STIFFNESS = 0.14;
const SPRING_DAMPING = 0.8;
// Exponential low-pass filter applied to raw mouse input to kill jitter.
const LOW_PASS_ALPHA = 0.18;
const REST_EPSILON = 0.001;

type Vec = { x: number; y: number };

export function HeroPhoto({ className }: { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<Array<HTMLSpanElement | null>>([]);

  // On touch devices the mockup shares AmbientTilt's site-wide gyro reading
  // (via the --tilt-x/--tilt-y CSS vars it writes on <html>) instead of
  // running its own device-orientation listener and permission flow, so the
  // whole page and the mockup move together from one input. Desktop keeps
  // its own precise mouse-over-card spring below, independent of that.
  const isTouchLikeRef = useRef(false);
  const sharedTiltRafRef = useRef<number | null>(null);

  // Animation state for the desktop mouse-driven spring lives in refs so
  // updates run imperatively at rAF cadence, bypassing React re-renders
  // entirely for smooth GPU-accelerated transforms.
  const targetRef = useRef<Vec>({ x: 0, y: 0 });
  const smoothedRef = useRef<Vec>({ x: 0, y: 0 });
  const positionRef = useRef<Vec>({ x: 0, y: 0 });
  const velocityRef = useRef<Vec>({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  const applyTransforms = useCallback((x: number, y: number) => {
    const rotateX = -y * MAX_ROTATE_DEG;
    const rotateY = x * MAX_ROTATE_DEG;

    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    }
    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${(x * LAYER_RANGE.glow).toFixed(1)}px, ${(y * LAYER_RANGE.glow).toFixed(1)}px, 0)`;
    }
    if (frameRef.current) {
      frameRef.current.style.transform = `translate3d(${(x * LAYER_RANGE.frame).toFixed(1)}px, ${(y * LAYER_RANGE.frame).toFixed(1)}px, 0)`;
    }
    if (glossRef.current) {
      const intensity = Math.min(1, Math.hypot(x, y));
      glossRef.current.style.transform = `translate3d(${(-x * LAYER_RANGE.gloss).toFixed(1)}px, ${(-y * LAYER_RANGE.gloss).toFixed(1)}px, 0)`;
      glossRef.current.style.opacity = (0.22 + intensity * 0.28).toFixed(2);
    }
    badgeRefs.current.forEach((el, i) => {
      if (!el) return;
      const rate = LAYER_RANGE.badge * (i === 0 ? 1 : 0.85);
      el.style.transform = `translate3d(${(x * rate).toFixed(1)}px, ${(y * rate).toFixed(1)}px, 0)`;
    });
  }, []);

  // Recursive rAF loops can't reference their own useCallback binding directly, so the
  // latest tick implementation is kept in a ref and invoked indirectly.
  const tickRef = useRef<() => void>(() => {});

  const tick = useCallback(() => {
    smoothedRef.current.x += (targetRef.current.x - smoothedRef.current.x) * LOW_PASS_ALPHA;
    smoothedRef.current.y += (targetRef.current.y - smoothedRef.current.y) * LOW_PASS_ALPHA;

    const dx = smoothedRef.current.x - positionRef.current.x;
    const dy = smoothedRef.current.y - positionRef.current.y;
    velocityRef.current.x = (velocityRef.current.x + dx * SPRING_STIFFNESS) * SPRING_DAMPING;
    velocityRef.current.y = (velocityRef.current.y + dy * SPRING_STIFFNESS) * SPRING_DAMPING;
    positionRef.current.x += velocityRef.current.x;
    positionRef.current.y += velocityRef.current.y;

    applyTransforms(positionRef.current.x, positionRef.current.y);

    const atRest =
      Math.abs(dx) < REST_EPSILON &&
      Math.abs(dy) < REST_EPSILON &&
      Math.abs(velocityRef.current.x) < REST_EPSILON &&
      Math.abs(velocityRef.current.y) < REST_EPSILON;

    rafIdRef.current = atRest ? null : requestAnimationFrame(() => tickRef.current());
  }, [applyTransforms]);

  useEffect(() => {
    tickRef.current = tick;
  }, [tick]);

  const scheduleTick = useCallback(() => {
    if (rafIdRef.current == null) {
      rafIdRef.current = requestAnimationFrame(() => tickRef.current());
    }
  }, []);

  const setTarget = useCallback(
    (x: number, y: number) => {
      const clampedX = Math.max(-1, Math.min(1, x));
      const clampedY = Math.max(-1, Math.min(1, y));
      targetRef.current = { x: clampedX, y: clampedY };

      if (reducedMotionRef.current) {
        // Drastically dampen instead of running the spring loop at all.
        applyTransforms(clampedX * 0.15, clampedY * 0.15);
        return;
      }
      scheduleTick();
    },
    [applyTransforms, scheduleTick],
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchLikeRef.current) return;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      setTarget(offsetX * 2, offsetY * 2);
    },
    [setTarget],
  );

  const handleMouseLeave = useCallback(() => {
    if (isTouchLikeRef.current) return;
    setTarget(0, 0);
  }, [setTarget]);

  // Mobile path: AmbientTilt (mounted once, site-wide) already applies the
  // low-pass filter and spring smoothing to the gyro reading and publishes
  // it as --tilt-x/--tilt-y on <html>, so this just samples that shared,
  // already-smoothed value each frame and maps it through this mockup's own
  // per-layer ranges — no independent spring or orientation listener needed.
  const readSharedTiltRef = useRef<() => void>(() => {});

  const readSharedTilt = useCallback(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const x = parseFloat(rootStyle.getPropertyValue("--tilt-x")) || 0;
    const y = parseFloat(rootStyle.getPropertyValue("--tilt-y")) || 0;
    applyTransforms(x, y);
    sharedTiltRafRef.current = requestAnimationFrame(() => readSharedTiltRef.current());
  }, [applyTransforms]);

  useEffect(() => {
    readSharedTiltRef.current = readSharedTilt;
  }, [readSharedTilt]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const handleChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
      if (event.matches && !isTouchLikeRef.current) {
        if (rafIdRef.current != null) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
        targetRef.current = { x: 0, y: 0 };
        smoothedRef.current = { x: 0, y: 0 };
        positionRef.current = { x: 0, y: 0 };
        velocityRef.current = { x: 0, y: 0 };
        applyTransforms(0, 0);
      }
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [applyTransforms]);

  useEffect(() => {
    const isTouchLike = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
    isTouchLikeRef.current = isTouchLike;
    if (!isTouchLike) return; // desktop: mouse-over-card spring above handles it

    sharedTiltRafRef.current = requestAnimationFrame(readSharedTilt);
    return () => {
      if (sharedTiltRafRef.current != null) cancelAnimationFrame(sharedTiltRafRef.current);
    };
  }, [readSharedTilt]);

  useEffect(() => {
    return () => {
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <motion.div variants={fadeUp} className={`${styles.stage} ${className ?? ""}`}>
      <div className={styles.dashedCircle} aria-hidden />
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={glowRef} className={styles.cardGlow} aria-hidden />
        <div ref={frameRef} className={styles.cardFrame}>
          <HeroSlideshow className={styles.slideshow} plain />
        </div>
        <div ref={glossRef} className={styles.gloss} aria-hidden />
        <span
          ref={(el) => {
            badgeRefs.current[0] = el;
          }}
          className={`${styles.badge} ${styles.badgeAvailable}`}
        >
          <span className={styles.badgeBob}>
            <i className={styles.dot} aria-hidden />
            Available for hire
          </span>
        </span>
        <span
          ref={(el) => {
            badgeRefs.current[1] = el;
          }}
          className={`${styles.badge} ${styles.badgeRole}`}
        >
          <span className={styles.badgeBob}>UI/UX &middot; Full-Stack</span>
        </span>
      </div>
    </motion.div>
  );
}
