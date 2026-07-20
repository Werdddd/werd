"use client";

import { useEffect, useState } from "react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { PhotoCarousel } from "./PhotoCarousel";
import styles from "./Hackathons.module.css";
import shared from "@/styles/shared.module.css";

export function Hackathons() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFrame((f) => f + 1), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hackathons" className={shared.container} data-reveal>
      <h6 className={shared.eyebrow}>Hackathons</h6>
      <h2 className={shared.sectionHeading}>Podium finishes</h2>
      <div className={styles.podium}>
        {portfolio.hackathons.map((h) => {
          const isOpen = expanded === h.event;
          return (
            <div
              key={h.event}
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
            </div>
          );
        })}
      </div>
      <div className={styles.githubHeader}>
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
      </div>
      <div className={styles.githubChartWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element -- dynamically generated SVG chart */}
        <img
          src="/api/github-chart"
          alt="Werdddd's GitHub contribution graph"
          className={styles.githubChart}
          loading="lazy"
        />
      </div>
    </section>
  );
}
