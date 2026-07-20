import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import styles from "./Experience.module.css";
import shared from "@/styles/shared.module.css";

function LogoPlaceholder() {
  return (
    <div className={`blueprint ${styles.logo}`} aria-hidden>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" />
        <line x1="8" y1="6" x2="10" y2="6" />
        <line x1="14" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="14" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
        <line x1="10" y1="22" x2="10" y2="18" />
        <line x1="14" y1="22" x2="14" y2="18" />
      </svg>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className={shared.container} data-reveal>
      <h6 className={shared.eyebrow}>Experience</h6>
      <h2 className={shared.sectionHeading}>Where I&apos;ve worked</h2>
      <div className={styles.list}>
        {portfolio.experience.map((job) => (
          <div key={`${job.org}-${job.period}`} className={`blueprint ${styles.row}`}>
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
              <LogoPlaceholder />
              <div>
                <h4 className={styles.role}>{job.role}</h4>
                <p className={`card-body ${styles.org}`}>{job.org}</p>
                <p className="card-body">{job.blurb}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
