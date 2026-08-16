"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { dropIn } from "@/lib/motion";
import styles from "./Nav.module.css";

const links = [
  { href: "/works", label: "Projects" },
  { href: "/tools", label: "Stack" },
  { href: "/experience", label: "Experience" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/hackathons", label: "Hackathons" },
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
    <motion.nav
      className={`nav ${styles.nav} reveal`}
      variants={dropIn}
      initial="hidden"
      animate="visible"
    >
      <Link className="nav-brand" href="/">
        Andrew Robles
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <ThemeToggle />
      <Link className={`btn btn-primary ${styles.contact}`} href="/#contact">
        Contact
      </Link>
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
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="btn btn-primary" href="/#contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
