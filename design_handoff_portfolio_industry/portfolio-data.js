export default {
  name: "Andrew Emmanuel Robles",
  role: "Software Engineer & UI/UX Designer",
  tagline: "I build creative interfaces and the systems underneath them.",
  subhead: "I build creative interfaces and the systems underneath them.",
  bio: "I'm a full-stack engineer and UI/UX designer who moves fluidly between code and interface. I design and build modern websites and mobile apps end to end. I'm driven by solving real problems and building things that push a little past the obvious.",
  facts: [
    { k: "Based in", v: "Seattle, WA" },
    { k: "Focus", v: "Design systems, frontend architecture, product design" },
    { k: "Currently", v: "Senior Software Engineer at Northwind Labs" },
    { k: "Stack", v: "TypeScript, React, Swift, Figma" }
  ],
  projects: [
    { num: "01", title: "Ledger", blurb: "A financial reporting dashboard rebuilt for scale — from a 40s load time to under 2s, with a component library that outlived the rewrite.", tags: ["React", "TypeScript", "D3"] },
    { num: "02", title: "Pulse", blurb: "Real-time infrastructure monitoring for on-call engineers: live topology, alert triage, and a WebSocket layer handling 50k events/sec.", tags: ["Next.js", "WebSockets", "Go"] },
    { num: "03", title: "Formwork", blurb: "A component library and design system adopted across four product teams, cutting new-screen build time by half.", tags: ["React", "Storybook", "Design tokens"] },
    { num: "04", title: "Transit", blurb: "A trip-planning app redesign focused on one-handed use and transit-delay recovery, prototyped and shipped in six weeks.", tags: ["Swift", "Figma", "iOS"] },
    { num: "05", title: "Signal", blurb: "An admin console for an internal API gateway — access control, request replay, and rate-limit tuning for platform teams.", tags: ["Vue", "Node", "PostgreSQL"] }
  ],
  skills: [
    { name: "Frontend", items: "React, TypeScript, Next.js, CSS/Layout, D3, Accessibility" },
    { name: "Backend", items: "Node.js, Go, PostgreSQL, REST/GraphQL, WebSockets" },
    { name: "Design", items: "Figma, Design systems, Prototyping, Motion/interaction, User research" },
    { name: "Tooling", items: "Git, CI/CD, Storybook, Testing, Docker" }
  ],
  experience: [
    { role: "Senior Software Engineer", org: "Northwind Labs", period: "2023 — Present", blurb: "Leading frontend architecture for the platform team; built the internal design system now used by four product groups." },
    { role: "Product Designer", org: "Fieldstone", period: "2021 — 2023", blurb: "Owned end-to-end design for the core booking flow, from research through shipped UI; partnered directly with engineering on implementation." },
    { role: "Frontend Engineer", org: "Basecamp Studio", period: "2019 — 2021", blurb: "Built and maintained the client-facing dashboard; introduced component testing and cut regression bugs by 60%." },
    { role: "UI Designer, Freelance", org: "Independent", period: "2017 — 2019", blurb: "Designed interfaces for eight early-stage startups, spanning fintech, healthcare, and developer tools." }
  ],
  testimonials: [
    { quote: "Andrew is the rare engineer who designs and the rare designer who ships. Our system got measurably more consistent within a quarter of him joining.", name: "Priya Nathan", role: "VP Engineering, Northwind Labs" },
    { quote: "He caught problems in the flow before they ever reached a whiteboard review. That kind of judgment is hard to hire for.", name: "Marcus Webb", role: "Head of Product, Fieldstone" },
    { quote: "Precise, fast, and completely unsentimental about his own earlier work — he'll rebuild something twice if the second version is actually better.", name: "Dana Iyer", role: "Design Director, Basecamp Studio" }
  ],
  posts: [
    { title: "Why design tokens fail without a review process", date: "May 2026", excerpt: "Tokens don't stay in sync by themselves. Notes on the review loop that kept ours honest across four teams." },
    { title: "Rebuilding a dashboard without a rewrite", date: "Feb 2026", excerpt: "Strangler-fig patterns for the frontend: how we replaced a legacy dashboard one route at a time." },
    { title: "The interface is the API", date: "Nov 2025", excerpt: "What happens when you design your component props and your UI copy in the same sitting." }
  ]
};
