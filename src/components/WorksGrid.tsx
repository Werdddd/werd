"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Corners } from "@/components/Blueprint";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PlatformIcon } from "@/components/PlatformIcon";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";
import styles from "@/app/works/works.module.css";

export function WorksGrid() {
  return (
    <motion.div
      className={`${styles.grid} reveal`}
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {portfolio.projects.map((project) => {
        const cardBody = (
          <>
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
                    sizes="(max-width: 760px) 90vw, 420px"
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
            <span className="card-kicker">{project.num}</span>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-body">{project.blurb}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag tag-outline">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && <span className={shared.viewAll}>Visit ↗</span>}
          </>
        );

        return project.link ? (
          <motion.a
            key={project.num}
            variants={fadeUp}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`blueprint ${styles.card} ${styles.cardLink}`}
          >
            {cardBody}
          </motion.a>
        ) : (
          <motion.article key={project.num} variants={fadeUp} className={`blueprint ${styles.card}`}>
            {cardBody}
          </motion.article>
        );
      })}
    </motion.div>
  );
}
