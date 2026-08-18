"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { PhotoCarousel } from "./PhotoCarousel";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import styles from "./Hackathons.module.css";
import shared from "@/styles/shared.module.css";

const SWIPE_THRESHOLD = 40;

export function Hackathons() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFrame((f) => f + 1), 2600);
    return () => clearInterval(id);
  }, []);

  const podiumHackathons = portfolio.hackathons.filter((h) => h.podium);

  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeExtended, setActiveExtended] = useState(1);
  const [offset, setOffset] = useState(0);
  const [instant, setInstant] = useState(true);
  const dragStartX = useRef<number | null>(null);

  const n = podiumHackathons.length;
  // Clone the last card before the first, and the first after the last, so
  // the track can slide one step past either end and silently reset to the
  // matching real card — giving the illusion of an infinite loop.
  const extended = [podiumHackathons[n - 1], ...podiumHackathons, podiumHackathons[0]];
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

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOffset(centerOffset(1));
  }, []);

  // Recenter (without animating) if the viewport is resized, since this
  // carousel is only visible below the mobile breakpoint and the card width
  // is fluid there.
  useEffect(() => {
    function onResize() {
      setInstant(true);
      setOffset(centerOffset(activeExtended));
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeExtended]);

  useEffect(() => {
    if (!instant) return;
    const frame = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(frame);
  }, [instant, offset]);

  function handleTransitionEnd(e: React.TransitionEvent) {
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
    <motion.section
      id="hackathons"
      className={`${shared.container} reveal`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <motion.div variants={fadeUp} className={shared.sectionHeader}>
        <div>
          <h6 className={shared.eyebrow}>Hackathons</h6>
          <h2 className={shared.sectionHeading}>Podium finishes</h2>
        </div>
        <Link className={shared.viewAll} href="/hackathons">
          View all hackathons →
        </Link>
      </motion.div>
      <motion.div variants={staggerContainer(0.1)} className={`${styles.podium} ${styles.podiumDesktop}`}>
        {podiumHackathons.map((h) => {
          const isOpen = expanded === h.event;
          return (
            <motion.div
              key={h.event}
              variants={fadeUp}
              className={`${styles.step} ${
                h.rank === 1 ? styles.stepFirst : styles.stepSecond
              }`}
            >
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                className={`blueprint ${styles.card} ${isOpen ? styles.cardOpen : ""}`}
                onClick={() => setExpanded(isOpen ? null : h.event)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpanded(isOpen ? null : h.event);
                  }
                }}
                suppressHydrationWarning
              >
                <Corners />
                <PhotoCarousel
                  photos={h.photos}
                  activeIndex={frame % h.photos.length}
                  label={h.event}
                  aspect="4 / 3"
                  className={styles.thumb}
                />
                <div className={styles.body}>
                  <span className="card-kicker">{h.place}</span>
                  <h4 className={styles.project}>{h.project}</h4>
                  <p className="card-body">{h.event}</p>
                  <p className={`text-muted ${styles.meta}`}>
                    {h.organizer} — {h.date}
                  </p>
                  <p
                    className={`card-body ${styles.description} ${
                      isOpen ? styles.descriptionOpen : ""
                    }`}
                  >
                    {h.description}
                  </p>
                  <span className={styles.toggle}>
                    {isOpen ? "Show less" : "Show more"}
                  </span>
                </div>
              </div>
              <div className={styles.riser}>
                <span className={styles.rank}>{h.rank === 1 ? "1st" : "2nd"}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className={styles.mobileCarousel}>
        <div className={styles.mobileControls}>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            aria-label="Previous hackathon"
            onClick={() => goTo(activeExtended - 1)}
            suppressHydrationWarning
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            aria-label="Next hackathon"
            onClick={() => goTo(activeExtended + 1)}
            suppressHydrationWarning
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className={styles.viewport} ref={viewportRef}>
          <div
            className={`${styles.track} ${instant ? styles.instant : ""}`}
            style={{ transform: `translateX(${-offset}px)` }}
            onTransitionEnd={handleTransitionEnd}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {extended.map((h, i) => {
              const isOpen = expanded === h.event;
              return (
                <div
                  key={`${h.event}-${i}`}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  className={`blueprint ${styles.mobileCard} ${
                    i === activeExtended ? styles.mobileCardActive : ""
                  } ${isOpen ? styles.cardOpen : ""}`}
                  onClick={() => setExpanded(isOpen ? null : h.event)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpanded(isOpen ? null : h.event);
                    }
                  }}
                  suppressHydrationWarning
                >
                  <Corners />
                  <PhotoCarousel
                    photos={h.photos}
                    activeIndex={frame % h.photos.length}
                    label={h.event}
                    aspect="4 / 3"
                    className={styles.thumb}
                  />
                  <div className={styles.body}>
                    <span className="card-kicker">
                      {h.place} · {h.rank === 1 ? "1st" : "2nd"}
                    </span>
                    <h4 className={styles.project}>{h.project}</h4>
                    <p className="card-body">{h.event}</p>
                    <p className={`text-muted ${styles.meta}`}>
                      {h.organizer} — {h.date}
                    </p>
                    <p
                      className={`card-body ${styles.description} ${
                        isOpen ? styles.descriptionOpen : ""
                      }`}
                    >
                      {h.description}
                    </p>
                    <span className={styles.toggle}>
                      {isOpen ? "Show less" : "Show more"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.dots}>
          {podiumHackathons.map((h, i) => (
            <button
              key={h.event}
              type="button"
              className={`${styles.dot} ${i === activeReal ? styles.dotActive : ""}`}
              aria-label={`Go to ${h.project}`}
              onClick={() => goTo(i + 1)}
              suppressHydrationWarning
            />
          ))}
        </div>
      </div>
      <motion.div variants={fadeUp} className={styles.githubHeader}>
        <div>
          <h6 className={shared.eyebrow}>GitHub Activity</h6>
          <h2 className={shared.sectionHeading}>Commit history</h2>
        </div>
        <a
          className={styles.githubLink}
          href="https://github.com/Werdddd"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Werdddd on GitHub →
        </a>
      </motion.div>
      <motion.div variants={fadeUp} className={styles.githubChartWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element -- dynamically generated SVG chart */}
        <img
          src="/api/github-chart"
          alt="Werdddd's GitHub contribution graph"
          className={styles.githubChart}
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
}
