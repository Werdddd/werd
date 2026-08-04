"use client";

import { useEffect, useState } from "react";
import styles from "./LiveViewers.module.css";

const STORAGE_KEY = "viewer-id";
const HEARTBEAT_MS = 10_000;

function getVisitorId() {
  let id = sessionStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(STORAGE_KEY, id);
  }
  return id;
}

export function LiveViewers() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const id = getVisitorId();
    let cancelled = false;

    async function heartbeat() {
      try {
        const res = await fetch("/api/viewers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) setCount(data.count);
      } catch {
        // Offline or the store is unreachable — keep showing the last known count.
      }
    }

    heartbeat();
    const interval = setInterval(heartbeat, HEARTBEAT_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (count === null) return null;

  return (
    <span className={`text-muted ${styles.badge}`}>
      <span className={styles.dot} aria-hidden="true" />
      {count} {count === 1 ? "viewer" : "viewers"} live
    </span>
  );
}
