import styles from "./Nav.module.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
];

export function Nav() {
  return (
    <nav className={`nav ${styles.nav}`}>
      <span className="nav-brand">Andrew Robles</span>
      <div className={styles.links}>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <a className="btn btn-primary" href="#contact">
        Contact
      </a>
    </nav>
  );
}
