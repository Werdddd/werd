import Link from "next/link";
import { SkillsGrid } from "./SkillsGrid";
import shared from "@/styles/shared.module.css";

export function Skills() {
  return (
    <section id="skills" className={shared.container} data-reveal>
      <div className={shared.sectionHeader}>
        <div>
          <h6 className={shared.eyebrow}>Skills &amp; tools</h6>
          <h2 className={shared.sectionHeading}>What I work with</h2>
        </div>
        <Link className={shared.viewAll} href="/tools">
          View all tools →
        </Link>
      </div>
      <SkillsGrid />
    </section>
  );
}
