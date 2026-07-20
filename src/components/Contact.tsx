"use client";

import { useState, type FormEvent } from "react";
import { Corners } from "./Blueprint";
import styles from "./Contact.module.css";
import shared from "@/styles/shared.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const submitting = status === "submitting";

  return (
    <section id="contact" className={`${shared.container} ${styles.contact}`} data-reveal>
      <form className={`blueprint ${styles.form}`} onSubmit={handleSubmit}>
        <Corners />
        <h3>Send a message</h3>
        <div className="field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            className="input"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            className="input"
            type="email"
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            className="input"
            rows={4}
            placeholder="What are you building?"
            required
          />
        </div>
        <button className="btn btn-primary btn-block" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
        </button>
        {status === "success" && (
          <p className={`${styles.status} ${styles.statusSuccess}`}>
            Thanks — I&apos;ll get back to you within a day or two.
          </p>
        )}
        {status === "error" && (
          <p className={`${styles.status} ${styles.statusError}`}>{errorMessage}</p>
        )}
      </form>
      <div>
        <h6 className={shared.eyebrow}>Get in touch</h6>
        <h2>Open to full-time and freelance work</h2>
        <p className={styles.copy}>
          Reach out directly, or use the form — I read every message and reply within a
          day or two.
        </p>
        <div className={styles.actions}>
          <a className="btn btn-secondary" href="mailto:andrew@robles.dev">
            Email
          </a>
          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-secondary"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
