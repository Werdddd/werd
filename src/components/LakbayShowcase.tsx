"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Corners } from "./Blueprint";
import { EASE, fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import styles from "./LakbayShowcase.module.css";
import shared from "@/styles/shared.module.css";

// Shared by the drawn route and the plane's animateMotion so the plane rides
// exactly on the line. Coordinates are in the SVG's viewBox, so both scale
// together at any width.
const ROUTE = "M16 70 C 110 -6, 290 -6, 384 70";

// Small airliner glyph, nose pointing +x so animateMotion's rotate="auto"
// keeps it facing along the route.
const PLANE =
  "M13 0 L-3 -2.2 L-8 -11 L-11 -11 L-8 -2.2 L-14 -2.2 L-16.5 -6.5 L-18.5 -6.5 L-17 0 L-18.5 6.5 L-16.5 6.5 L-14 2.2 L-8 2.2 L-11 11 L-8 11 L-3 2.2 Z";

export function LakbayShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="lakbay"
      className={`${shared.container} reveal`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <motion.div variants={fadeUp} className={shared.sectionHeader}>
        <div>
          <h6 className={shared.eyebrow}>
            <span className={styles.liveDot} aria-hidden="true" />
            Now boarding · Live on the App Store
          </h6>
          <h2 className={shared.sectionHeading}>Lakbay is cleared for takeoff</h2>
        </div>
        <Link href="/lakbay" className={shared.viewAll}>
          About the app →
        </Link>
      </motion.div>

      <motion.article
        variants={fadeUp}
        className={`blueprint ${styles.pass}`}
        aria-label="Lakbay boarding pass"
      >
        <Corners />

        <a
          href="/lakbay/download"
          className={styles.visual}
          aria-label="Download Lakbay on the App Store"
        >
          <Image
            src="/projects/lakbay1.webp"
            alt="Lakbay app screens showing trip picks and a day-by-day itinerary"
            fill
            sizes="(max-width: 900px) 100vw, 640px"
            className={styles.visualImage}
          />
        </a>

        <div className={styles.perforation} aria-hidden="true" />

        <div className={styles.details}>
          <div className={styles.passTop}>
            <span className="text-muted">Boarding pass</span>
            <span className={styles.flightNo}>LKB 001</span>
          </div>

          <div className={styles.route}>
            <div className={styles.stop}>
              <span className={styles.code}>MNL</span>
              <span className={styles.city}>Manila, PH</span>
            </div>

            <svg
              className={styles.flight}
              viewBox="0 0 400 84"
              aria-hidden="true"
            >
              <path d={ROUTE} className={styles.routeGhost} />
              <motion.path
                d={ROUTE}
                className={styles.routeLine}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
              />
              <circle cx="16" cy="70" r="4" className={styles.node} />
              <circle cx="384" cy="70" r="4" className={styles.node} />

              {reduceMotion ? (
                <path
                  d={PLANE}
                  className={styles.plane}
                  transform="translate(200 13)"
                />
              ) : (
                <g>
                  <path d={PLANE} className={styles.plane} />
                  <animateMotion
                    dur="5.5s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path={ROUTE}
                    keyPoints="0;1;1"
                    keyTimes="0;0.8;1"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0 0 1 1"
                  />
                </g>
              )}
            </svg>

            <div className={`${styles.stop} ${styles.stopEnd}`}>
              <span className={styles.code}>iOS</span>
              <span className={styles.city}>App Store</span>
            </div>
          </div>

          <dl className={styles.fields}>
            <div>
              <dt>Passenger</dt>
              <dd>You</dd>
            </div>
            <div>
              <dt>Class</dt>
              <dd>Travel companion</dd>
            </div>
            <div>
              <dt>Gate</dt>
              <dd>iPhone</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                Departed
              </dd>
            </div>
          </dl>

          <p className={styles.copy}>
            Plan trips, organize day-by-day itineraries, and keep the photos and
            memories from every journey in one place. Bound for the world.
          </p>

          <div className={styles.actions}>
            <a className="btn btn-primary" href="/lakbay/download">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28z"
                />
              </svg>
              Download on the App Store
            </a>
            <Link className="btn btn-secondary" href="/lakbay">
              Learn more
            </Link>
          </div>

          <div className={styles.barcode} aria-hidden="true" />
        </div>
      </motion.article>
    </motion.section>
  );
}
