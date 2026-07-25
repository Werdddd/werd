"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Root layout persists across client-side navigations, so this effect
    // must re-run per route (keyed on pathname) to pick up the new page's
    // [data-reveal] elements — otherwise they're never observed and stay
    // invisible until a full page reload remounts everything.
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
    );
    if (targets.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
