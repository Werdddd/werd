"use client";

import { useEffect, useRef, useState } from "react";
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

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeExtended, setActiveExtended] = useState(1);
  const [ready, setReady] = useState(false);

  const projects = portfolio.projects;
  const n = projects.length;
  // Clone the last project before the first, and the first after the last,
  // so the track can be scrolled one step past either end and silently
  // snapped back to the matching real card — giving the illusion of a loop.
  const extended = [projects[n - 1], ...projects, projects[0]];
  const activeReal = ((activeExtended - 1) % n + n) % n;

  function jumpTo(extIndex: number, behavior: ScrollBehavior) {
    const track = trackRef.current;
    const card = cardRefs.current[extIndex];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
      behavior,
    });
    setActiveExtended(extIndex);
  }

  useEffect(() => {
    jumpTo(1, "auto");
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let settleTimer: ReturnType<typeof setTimeout>;

    function closestExtended() {
      const trackEl = trackRef.current;
      if (!trackEl) return 1;
      const center = trackEl.scrollLeft + trackEl.clientWidth / 2;
      let closest = 1;
      let closestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      return closest;
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setActiveExtended(closestExtended()));

      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const closest = closestExtended();
        if (closest === 0) jumpTo(n, "auto");
        else if (closest === n + 1) jumpTo(1, "auto");
      }, 120);
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(settleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

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
            onClick={() => jumpTo(activeExtended - 1, "smooth")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            aria-label="Next project"
            onClick={() => jumpTo(activeExtended + 1, "smooth")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${styles.track} ${ready ? styles.trackReady : ""}`}
        ref={trackRef}
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
              <ImagePlaceholder
                label="Project screenshot"
                aspect="16 / 10"
                className={styles.thumb}
              />
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

      <div className={styles.dots}>
        {projects.map((project, i) => (
          <button
            key={project.num}
            type="button"
            className={`${styles.dot} ${i === activeReal ? styles.dotActive : ""}`}
            aria-label={`Go to ${project.title}`}
            onClick={() => jumpTo(i + 1, "smooth")}
          />
        ))}
      </div>
    </section>
  );
}
