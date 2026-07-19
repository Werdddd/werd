import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import styles from "./Skills.module.css";
import shared from "@/styles/shared.module.css";

export function Skills() {
  return (
    <section id="skills" className={shared.container}>
      <h6 className={shared.eyebrow}>Skills &amp; tools</h6>
      <h2 className={shared.sectionHeading}>What I work with</h2>
      <div className={styles.grid}>
        {portfolio.skills.map((group) => (
          <div key={group.name} className={`blueprint ${styles.group}`}>
            <Corners />
            <h5>{group.name}</h5>
            <p className={`card-body ${styles.items}`}>{group.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
