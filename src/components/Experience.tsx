import Link from "next/link";
import { ExperienceList } from "./ExperienceList";
import shared from "@/styles/shared.module.css";

export function Experience() {
  return (
    <section id="experience" className={shared.container} data-reveal>
      <div className={shared.sectionHeader}>
        <div>
          <h6 className={shared.eyebrow}>Experience</h6>
          <h2 className={shared.sectionHeading}>Where I&apos;ve worked</h2>
        </div>
        <Link className={shared.viewAll} href="/experience">
          View full history →
        </Link>
      </div>
      <ExperienceList />
    </section>
  );
}
