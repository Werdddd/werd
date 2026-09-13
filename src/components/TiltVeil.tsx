import styles from "./TiltVeil.module.css";

// Site-wide lighting layer: two viewport-fixed gradients driven purely by
// CSS, reading the --tilt-x/--tilt-y vars AmbientTilt.tsx writes on <html>.
// Mounted once here so every page gets the same "surface catching light as
// it tilts" cue on top of whatever content is on screen, without each page
// or component wiring up its own effect (most content transforms are
// already owned by Motion's inline styles, so box-shadow/gradients — not
// transform — are what read as depth without fighting those).
export function TiltVeil() {
  return (
    <div className={styles.veil} aria-hidden>
      <div className={styles.shadow} />
      <div className={styles.sheen} />
    </div>
  );
}
