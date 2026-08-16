"use client";

import Image from "next/image";
import { motion } from "motion/react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import styles from "./ExperienceTimeline.module.css";

export function ExperienceTimeline() {
  return (
    <motion.ol
      className={`${styles.timeline} reveal`}
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {portfolio.experience.map((job) => (
        <motion.li key={`${job.org}-${job.period}`} variants={fadeUp} className={styles.item}>
          <div className={styles.rail}>
            <div className={`blueprint ${styles.node}`}>
              <Image
                src={job.logo}
                alt={`${job.org} logo`}
                fill
                sizes="40px"
                className={styles.nodeImg}
              />
            </div>
            <span className={styles.line} aria-hidden="true" />
          </div>

          <div className={`blueprint ${styles.card}`}>
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
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
