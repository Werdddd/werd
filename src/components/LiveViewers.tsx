"use client";

import { useEffect, useState } from "react";
import styles from "./LiveViewers.module.css";

const STORAGE_KEY = "viewer-id";
const HEARTBEAT_MS = 10_000;
const RETRY_MS = 3_000;

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
    let timer: ReturnType<typeof setTimeout>;

    async function heartbeat() {
      let nextDelay: number = HEARTBEAT_MS;
      try {
        const res = await fetch("/api/viewers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (res.ok) {
          const data = await res.json();
          if (!cancelled) setCount(data.count);
        } else {
          nextDelay = RETRY_MS;
        }
      } catch {
        // Offline or the store is unreachable — retry sooner instead of
        // leaving the badge hidden for a full heartbeat cycle.
        nextDelay = RETRY_MS;
      }
      if (!cancelled) timer = setTimeout(heartbeat, nextDelay);
    }

    heartbeat();
    return () => {
      cancelled = true;
      clearTimeout(timer);
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
