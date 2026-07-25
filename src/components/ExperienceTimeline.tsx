import Image from "next/image";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import styles from "./ExperienceTimeline.module.css";

export function ExperienceTimeline() {
  return (
    <ol className={styles.timeline}>
      {portfolio.experience.map((job) => (
        <li key={`${job.org}-${job.period}`} className={styles.item}>
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
        </li>
      ))}
    </ol>
  );
}
