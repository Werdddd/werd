import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import styles from "./Experience.module.css";
import shared from "@/styles/shared.module.css";

export function Experience() {
  return (
    <section id="experience" className={shared.container}>
      <h6 className={shared.eyebrow}>Experience</h6>
      <h2 className={shared.sectionHeading}>Where I&apos;ve worked</h2>
      <div className={styles.list}>
        {portfolio.experience.map((job) => (
          <div key={`${job.org}-${job.period}`} className={`blueprint ${styles.row}`}>
            <Corners />
            <span className="text-muted" style={{ fontSize: 13 }}>
              {job.period}
            </span>
            <div>
              <h4 className={styles.role}>{job.role}</h4>
              <p className={`card-body ${styles.org}`}>{job.org}</p>
              <p className="card-body">{job.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
