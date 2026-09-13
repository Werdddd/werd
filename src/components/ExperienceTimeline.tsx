"use client";

import Image from "next/image";
import { motion } from "motion/react";
import portfolio, { type ExperienceItem } from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { useTiltParallax } from "@/lib/tilt";
import styles from "./ExperienceTimeline.module.css";

// Pulled out so useTiltParallax (a hook) has a proper per-item component
// to live in — calling hooks inside portfolio.experience.map() below
// would violate the rules of hooks.
function TimelineItem({ job }: { job: ExperienceItem }) {
  // fadeUp owns y/opacity on this element, so only x/rotate are used here.
  const { x, rotateX, rotateY } = useTiltParallax(14, 2.5);

  return (
    <motion.li variants={fadeUp} className={styles.item}>
      <div className={styles.rail}>
        <div className={`blueprint ${styles.node}`}>
          <Image src={job.logo} alt={`${job.org} logo`} fill sizes="40px" className={styles.nodeImg} />
        </div>
        <span className={styles.line} aria-hidden="true" />
      </div>

      <motion.div
        className={`blueprint ${styles.card}`}
        style={{ x, rotateX, rotateY, transformPerspective: 700 }}
      >
        <Corners />
        <div className={styles.headRow}>
          <div>
            <h3 className={styles.role}>{job.role}</h3>
            <p className={styles.org}>
              {job.org} <span className={styles.dot}>·</span> {job.employmentType}
            </p>
          </div>
          <div className={styles.periodBlock}>
            <span className={styles.period}>{job.period}</span>
            <span className={styles.duration}>{job.duration}</span>
          </div>
        </div>

        <div className={styles.tagsRow}>
          <span className="tag tag-neutral">{job.location}</span>
          <span className="tag tag-outline">{job.setup}</span>
        </div>

        {job.details.map((paragraph, i) => (
          <p key={i} className={`card-body ${styles.details}`}>
            {paragraph}
          </p>
        ))}
      </motion.div>
    </motion.li>
  );
}

export function ExperienceTimeline() {
  // staggerContainer has no y/opacity of its own — x and y both free here.
  const { x, y } = useTiltParallax(6);

  return (
    <motion.ol
      className={`${styles.timeline} reveal`}
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      style={{ x, y }}
    >
      {portfolio.experience.map((job) => (
        <TimelineItem key={`${job.org}-${job.period}`} job={job} />
      ))}
    </motion.ol>
  );
}
