"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#hackathons", label: "Hackathons" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
      <a className={`btn btn-primary ${styles.contact}`} href="#contact">
        Contact
      </a>
      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.menuIcon} data-open={open || undefined} />
      </button>
      <div id="mobile-menu" className={styles.mobileMenu} data-open={open || undefined}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
