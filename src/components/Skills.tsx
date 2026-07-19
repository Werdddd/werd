import {
  siTypescript,
  siJavascript,
  siPython,
  siReact,
  siVuedotjs,
  siAngular,
  siNextdotjs,
  siNodedotjs,
  siHtml5,
  siCss,
  siClaudecode,
  siCursor,
  siMysql,
  siFirebase,
  siSupabase,
  siKotlin,
  siFlutter,
  siFigma,
  type SimpleIcon,
} from "simple-icons";
import portfolio from "@/lib/portfolio-data";
import styles from "./Skills.module.css";
import shared from "@/styles/shared.module.css";

const ICONS: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  React: siReact,
  "React Native": siReact,
  Vue: siVuedotjs,
  Angular: siAngular,
  "Next JS": siNextdotjs,
  "Node.js": siNodedotjs,
  "Claude Code": siClaudecode,
  Cursor: siCursor,
  MySQL: siMysql,
  Firebase: siFirebase,
  Supabase: siSupabase,
  Kotlin: siKotlin,
  Flutter: siFlutter,
  Figma: siFigma,
};

// A few tools in the stack don't have an entry in the icon set this site
// uses. Rather than mix in unrelated art, these get a letter badge — the
// same convention Adobe uses for its own app icons (Ai, Pr).
const MONOGRAMS: Record<string, string> = {
  Java: "J",
  Canva: "C",
  "Adobe Illustrator": "Ai",
  "Adobe Premiere Pro": "Pr",
  CapCut: "Cc",
};

function IconPath({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      className={styles.icon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

function SkillMark({ name }: { name: string }) {
  if (name === "HTML/CSS") {
    return (
      <span className={styles.iconPair}>
        <IconPath icon={siHtml5} />
        <IconPath icon={siCss} />
      </span>
    );
  }

  const icon = ICONS[name];
  if (icon) return <IconPath icon={icon} />;

  const letters = MONOGRAMS[name];
  return (
    <span className={styles.monogram} aria-hidden="true">
      {letters}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className={shared.container}>
      <h6 className={shared.eyebrow}>Skills &amp; tools</h6>
      <h2 className={shared.sectionHeading}>What I work with</h2>
      <div className={styles.grid}>
        {portfolio.skills.map((skill) => (
          <span key={skill.name} className={styles.chip}>
            <SkillMark name={skill.name} />
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
