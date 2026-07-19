export interface Fact {
  k: string;
  v: string;
}

export interface Project {
  num: string;
  title: string;
  blurb: string;
  tags: [string, string, string];
  platform: "Web" | "Mobile";
}

export interface Skill {
  name: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  blurb: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Post {
  title: string;
  date: string;
  excerpt: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  subhead: string;
  bio: string;
  facts: Fact[];
  projects: Project[];
  skills: Skill[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
  posts: Post[];
}

const portfolioData: PortfolioData = {
  name: "Andrew Emmanuel Robles",
  role: "Software Engineer & UI/UX Designer",
  tagline: "Andrew Robles",
  subhead:
    "I build creative interfaces and the systems underneath them.",
  bio: "I care about the details most people skip past — the interaction that feels obvious only in hindsight, the API that still reads cleanly a year later. I work across the full stack, from interface down to infrastructure, treating design and engineering as one continuous craft rather than two separate jobs.",
  facts: [
    { k: "Based in", v: "Navotas City, Metro Manila, Philippines" },
    {
      k: "Focus",
      v: "Full-stack web and mobile systems, design interfaces",
    },
    { k: "Currently", v: "Open to full-time roles and freelance work" },
    { k: "Stack", v: "TypeScript, React, NextJS, React Native, Figma" },
  ],
  projects: [
    {
      num: "01",
      title: "Ledger",
      blurb:
        "A financial reporting dashboard rebuilt for scale — from a 40s load time to under 2s, with a component library that outlived the rewrite.",
      tags: ["React", "TypeScript", "D3"],
      platform: "Web",
    },
    {
      num: "02",
      title: "Pulse",
      blurb:
        "Real-time infrastructure monitoring for on-call engineers: live topology, alert triage, and a WebSocket layer handling 50k events/sec.",
      tags: ["Next.js", "WebSockets", "Go"],
      platform: "Web",
    },
    {
      num: "03",
      title: "Formwork",
      blurb:
        "A component library and design system adopted across four product teams, cutting new-screen build time by half.",
      tags: ["React", "Storybook", "Design tokens"],
      platform: "Web",
    },
    {
      num: "04",
      title: "Transit",
      blurb:
        "A trip-planning app redesign focused on one-handed use and transit-delay recovery, prototyped and shipped in six weeks.",
      tags: ["Swift", "Figma", "iOS"],
      platform: "Mobile",
    },
    {
      num: "05",
      title: "Signal",
      blurb:
        "An admin console for an internal API gateway — access control, request replay, and rate-limit tuning for platform teams.",
      tags: ["Vue", "Node", "PostgreSQL"],
      platform: "Web",
    },
  ],
  skills: [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Java" },
    { name: "React" },
    { name: "React Native" },
    { name: "Vue" },
    { name: "Angular" },
    { name: "Next JS" },
    { name: "Node.js" },
    { name: "HTML/CSS" },
    { name: "Claude Code" },
    { name: "Cursor" },
    { name: "MySQL" },
    { name: "Firebase" },
    { name: "Supabase" },
    { name: "Kotlin" },
    { name: "Flutter" },
    { name: "Figma" },
    { name: "Canva" },
    { name: "Adobe Illustrator" },
    { name: "Adobe Premiere Pro" },
    { name: "CapCut" },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      org: "Northwind Labs",
      period: "2023 — Present",
      blurb:
        "Leading frontend architecture for the platform team; built the internal design system now used by four product groups.",
    },
    {
      role: "Product Designer",
      org: "Fieldstone",
      period: "2021 — 2023",
      blurb:
        "Owned end-to-end design for the core booking flow, from research through shipped UI; partnered directly with engineering on implementation.",
    },
    {
      role: "Frontend Engineer",
      org: "Basecamp Studio",
      period: "2019 — 2021",
      blurb:
        "Built and maintained the client-facing dashboard; introduced component testing and cut regression bugs by 60%.",
    },
    {
      role: "UI Designer, Freelance",
      org: "Independent",
      period: "2017 — 2019",
      blurb:
        "Designed interfaces for eight early-stage startups, spanning fintech, healthcare, and developer tools.",
    },
  ],
  testimonials: [
    {
      quote:
        "Andrew is the rare engineer who designs and the rare designer who ships. Our system got measurably more consistent within a quarter of him joining.",
      name: "Priya Nathan",
      role: "VP Engineering, Northwind Labs",
    },
    {
      quote:
        "He caught problems in the flow before they ever reached a whiteboard review. That kind of judgment is hard to hire for.",
      name: "Marcus Webb",
      role: "Head of Product, Fieldstone",
    },
    {
      quote:
        "Precise, fast, and completely unsentimental about his own earlier work — he'll rebuild something twice if the second version is actually better.",
      name: "Dana Iyer",
      role: "Design Director, Basecamp Studio",
    },
  ],
  posts: [
    {
      title: "Why design tokens fail without a review process",
      date: "May 2026",
      excerpt:
        "Tokens don't stay in sync by themselves. Notes on the review loop that kept ours honest across four teams.",
    },
    {
      title: "Rebuilding a dashboard without a rewrite",
      date: "Feb 2026",
      excerpt:
        "Strangler-fig patterns for the frontend: how we replaced a legacy dashboard one route at a time.",
    },
    {
      title: "The interface is the API",
      date: "Nov 2025",
      excerpt:
        "What happens when you design your component props and your UI copy in the same sitting.",
    },
  ],
};

export default portfolioData;
