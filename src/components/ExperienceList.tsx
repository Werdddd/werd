"use client";

import Image from "next/image";
import { motion } from "motion/react";
import portfolio, { type ExperienceItem } from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { useTiltParallax } from "@/lib/tilt";
import styles from "./Experience.module.css";

// Pulled out so useTiltParallax (a hook) has a proper per-item component
// to live in — calling hooks inside portfolio.experience.map() below
// would violate the rules of hooks.
function ExperienceRow({ job }: { job: ExperienceItem }) {
  // fadeUp owns y/opacity on this element, so only x/rotate are used here.
  const { x, rotateX, rotateY } = useTiltParallax(14, 2.5);

  return (
    <motion.div
      variants={fadeUp}
      className={`blueprint ${styles.row}`}
      style={{ x, rotateX, rotateY, transformPerspective: 700 }}
    >
      <Corners />
      <div className={styles.meta}>
        <span className="text-muted" style={{ fontSize: 13 }}>
          {job.period}
        </span>
        <span className="text-muted" style={{ fontSize: 12 }}>
          {job.location}
        </span>
      </div>
      <div className={styles.content}>
        <div className={`blueprint ${styles.logo}`}>
          <Image src={job.logo} alt={`${job.org} logo`} fill sizes="44px" className={styles.logoImg} />
        </div>
        <div>
          <h4 className={styles.role}>{job.role}</h4>
          <p className={`card-body ${styles.org}`}>{job.org}</p>
          <p className="card-body">{job.blurb}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceList() {
  // staggerContainer has no y/opacity of its own — x and y both free here.
  const { x, y } = useTiltParallax(6);

  return (
    <motion.div
      className={`${styles.list} reveal`}
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      style={{ x, y }}
    >
      {portfolio.experience.map((job) => (
        <ExperienceRow key={`${job.org}-${job.period}`} job={job} />
      ))}
    </motion.div>
  );
}
