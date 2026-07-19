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
  location: string;
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
      title: "Simoy",
      blurb:
        "A community-powered air quality monitoring platform with a live AQI dashboard, interactive air quality maps, and crowdsourced reporting for real-time conditions nationwide.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
    },
    {
      num: "02",
      title: "Beep",
      blurb:
        "A crowdsourced fuel tracker that helps drivers find the cheapest nearby stations, with a live fuel map, trip cost estimator, and a gamified community system.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
    },
    {
      num: "03",
      title: "33rd Asia-Pacific Regional Scout Jamboree App",
      blurb:
        "The official companion app for an international Scout jamboree with 25,000+ participants — QR-linked digital IDs, live event maps, announcements, and emergency access.",
      tags: ["React Native", "Supabase", "App Store"],
      platform: "Mobile",
    },
    {
      num: "04",
      title: "UE Connect",
      blurb:
        "A centralized, algorithm-driven social and organization-management app for university student life, built to boost engagement across student orgs.",
      tags: ["React Native", "Firebase", "Mobile"],
      platform: "Mobile",
    },
    {
      num: "05",
      title: "GabAI",
      blurb:
        "An AI-assisted study companion that generates personalized study guides adapted to each student's learning style, language, and dialect preferences.",
      tags: ["React Native", "Firebase", "Gemini AI"],
      platform: "Mobile",
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
      role: "Junior Developer",
      org: "Impulse 101 IT Solutions OPC — Bebe Live",
      location: "Quezon City, Philippines",
      period: "Dec 2025 — Jun 2026",
      blurb:
        "Built interactive in-app games for Bebe Live, a livestreaming platform with 35,000+ users, including Bato Bato Pick and Minesweeper under Zenith Gaming.",
    },
    {
      role: "Full-Stack Developer",
      org: "Boy Scouts of the Philippines",
      location: "Manila, Philippines",
      period: "Sep 2025 — Dec 2025",
      blurb:
        "Designed and built the official mobile app and web-admin portal for the 33rd Asia-Pacific Regional Scout Jamboree, an event with 25,000+ participants — registration, role-based access, maps, and QR-based ID.",
    },
    {
      role: "Software Developer Intern",
      org: "Exakt IT Services",
      location: "Pasig, Philippines",
      period: "Jun 2025 — Jul 2025",
      blurb:
        "Supported feature development and testing on the Frontline Services and Transactions System (FSTS) for the DENR, improving an internal system used to manage frontline transactions.",
    },
    {
      role: "UI/UX Designer",
      org: "PB Visions LLC — TRAK",
      location: "Pittsburg, California",
      period: "Apr 2025 — Sep 2025",
      blurb:
        "Led end-to-end UI/UX for TRAK, a fitness-focused social startup app, from wireframes through interactive prototypes to final visual design.",
    },
    {
      role: "Junior Frontend Developer",
      org: "Leaving Cert Plus",
      location: "Dublin, Ireland",
      period: "Jan 2024 — Dec 2025",
      blurb:
        "Built and refined user-facing features for an education platform, focused on responsiveness, performance, and accessible content delivery.",
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
