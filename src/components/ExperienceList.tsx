"use client";

import Image from "next/image";
import { motion } from "motion/react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import styles from "./Experience.module.css";

export function ExperienceList() {
  return (
    <motion.div
      className={`${styles.list} reveal`}
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {portfolio.experience.map((job) => (
        <motion.div
          key={`${job.org}-${job.period}`}
          variants={fadeUp}
          className={`blueprint ${styles.row}`}
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
              <Image
                src={job.logo}
                alt={`${job.org} logo`}
                fill
                sizes="44px"
                className={styles.logoImg}
              />
            </div>
            <div>
              <h4 className={styles.role}>{job.role}</h4>
              <p className={`card-body ${styles.org}`}>{job.org}</p>
              <p className="card-body">{job.blurb}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
