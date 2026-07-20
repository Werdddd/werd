"use client";

import { useLayoutEffect, useEffect, useRef, useState } from "react";
import Image from "next/image";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./Work.module.css";
import shared from "@/styles/shared.module.css";

function PlatformIcon({ platform }: { platform: "Web" | "Mobile" }) {
  if (platform === "Mobile") {
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    );
  }
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
    </svg>
  );
}

const SWIPE_THRESHOLD = 40;

export function Work() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeExtended, setActiveExtended] = useState(1);
  const [offset, setOffset] = useState(0);
  const [instant, setInstant] = useState(true);
  const dragStartX = useRef<number | null>(null);

  const projects = portfolio.projects;
  const n = projects.length;
  // Clone the last project before the first, and the first after the last,
  // so the track can slide one step past either end and silently reset to
  // the matching real card — giving the illusion of an infinite loop.
  const extended = [projects[n - 1], ...projects, projects[0]];
  const activeReal = ((activeExtended - 1) % n + n) % n;

  function centerOffset(extIndex: number) {
    const viewport = viewportRef.current;
    const card = cardRefs.current[extIndex];
    if (!viewport || !card) return 0;
    return card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2;
  }

  function goTo(extIndex: number) {
    setActiveExtended(extIndex);
    setOffset(centerOffset(extIndex));
  }

  // Center the first card before paint so there's no load-in slide. Reading
  // layout (offsetLeft/offsetWidth) and syncing it to state is exactly what
  // useLayoutEffect is for — see https://react.dev/reference/react/useLayoutEffect.
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOffset(centerOffset(1));
  }, []);

  // Recenter (without animating) if the viewport is resized, since card
  // width is fluid below the desktop breakpoint.
  useEffect(() => {
    function onResize() {
      setInstant(true);
      setOffset(centerOffset(activeExtended));
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeExtended]);

  // Drop the "instant" flag one frame after any instant reposition, so the
  // next state change is animated again.
  useEffect(() => {
    if (!instant) return;
    const frame = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(frame);
  }, [instant, offset]);

  function handleTransitionEnd(e: React.TransitionEvent) {
    // Ignore bubbled transitions from the cards' own scale/opacity change —
    // only react to the track's own translateX finishing.
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (activeExtended === 0) {
      setInstant(true);
      setActiveExtended(n);
      setOffset(centerOffset(n));
    } else if (activeExtended === n + 1) {
      setInstant(true);
      setActiveExtended(1);
      setOffset(centerOffset(1));
    }
  }

  function onPointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
  }

  function onPointerUp(e: React.PointerEvent) {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = null;
    if (delta > SWIPE_THRESHOLD) goTo(activeExtended - 1);
    else if (delta < -SWIPE_THRESHOLD) goTo(activeExtended + 1);
  }

  return (
    <section id="work" className={shared.container} data-reveal>
      <div className={styles.header}>
        <div>
          <h6 className={shared.eyebrow}>Selected work</h6>
          <h2 className={styles.heading}>Projects, end to end</h2>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            aria-label="Previous project"
            onClick={() => goTo(activeExtended - 1)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            aria-label="Next project"
            onClick={() => goTo(activeExtended + 1)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.viewport} ref={viewportRef}>
        <div
          className={`${styles.track} ${instant ? styles.instant : ""}`}
          style={{ transform: `translateX(${-offset}px)` }}
          onTransitionEnd={handleTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {extended.map((project, i) => (
            <div
              key={`${project.num}-${i}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`blueprint ${styles.card} ${i === activeExtended ? styles.cardActive : ""}`}
            >
              <Corners />
              <div className={styles.thumbWrap}>
                {project.image ? (
                  <div
                    className={`blueprint ${styles.thumb}`}
                    style={{ aspectRatio: "16 / 10", position: "relative" }}
                  >
                    <Corners />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 760px) 84vw, 360px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    label="Project screenshot"
                    aspect="16 / 10"
                    className={styles.thumb}
                  />
                )}
                <span
                  className={`${styles.platform} ${
                    project.platform === "Mobile" ? styles.platformMobile : ""
                  }`}
                >
                  <PlatformIcon platform={project.platform} />
                  {project.platform}
                </span>
              </div>
              <span className="card-kicker">{project.num} — case study</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-body">{project.blurb}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag tag-outline">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {projects.map((project, i) => (
          <button
            key={project.num}
            type="button"
            className={`${styles.dot} ${i === activeReal ? styles.dotActive : ""}`}
            aria-label={`Go to ${project.title}`}
            onClick={() => goTo(i + 1)}
          />
        ))}
      </div>
    </section>
  );
}
