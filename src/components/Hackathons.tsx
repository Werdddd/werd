"use client";

import { useState } from "react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./Hackathons.module.css";
import shared from "@/styles/shared.module.css";

export function Hackathons() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="hackathons" className={shared.container}>
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
                <ImagePlaceholder
                  label={`${h.event} photo`}
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
    </section>
  );
}
