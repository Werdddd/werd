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
  image?: string;
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
  logo: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Hackathon {
  rank: 1 | 2;
  place: string;
  project: string;
  event: string;
  organizer: string;
  date: string;
  description: string;
  photos: string[];
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
  hackathons: Hackathon[];
}

const portfolioData: PortfolioData = {
  name: "Andrew Emmanuel Robles",
  role: "Full-Stack Engineer & UI/UX Designer",
  tagline: "Andrew Robles",
  subhead:
    "I build creative interfaces and the systems underneath them.",
  bio: "I'm a full-stack engineer and UI/UX designer who moves fluidly between code and interface. I design and build modern websites and mobile apps end to end. I'm driven by solving real problems and building things that push a little past the obvious.",
  facts: [
    { k: "Based in", v: "Navotas City, Metro Manila, Philippines" },
    {
      k: "Focus",
      v: "Full-stack web and mobile systems, design interfaces",
    },
    {
      k: "Currently",
      v: "Open to full-time roles, freelance projects, and meaningful collaborations.",
    },
  ],
  projects: [
    {
      num: "01",
      title: "Simoy",
      blurb:
        "A community-powered air quality monitoring platform with a live AQI dashboard, interactive air quality maps, and crowdsourced reporting for real-time conditions nationwide.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/simoy1.png",
    },
    {
      num: "02",
      title: "Beep",
      blurb:
        "A crowdsourced fuel tracker that helps drivers find the cheapest nearby stations, with a live fuel map, trip cost estimator, and a gamified community system.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/beep1.png",
    },
    {
      num: "03",
      title: "33rd Asia-Pacific Regional Scout Jamboree App",
      blurb:
        "The official companion app for an international Scout jamboree with 25,000+ participants — QR-linked digital IDs, live event maps, announcements, and emergency access.",
      tags: ["React Native", "Supabase", "App Store"],
      platform: "Mobile",
      image: "/projects/aprsj1.png",
    },
    {
      num: "04",
      title: "UE Connect",
      blurb:
        "A centralized, algorithm-driven social and organization-management app for university student life, built to boost engagement across student orgs.",
      tags: ["React Native", "Firebase", "Mobile"],
      platform: "Mobile",
      image: "/projects/ueconnect1.png",
    },
    {
      num: "05",
      title: "SynseAI",
      blurb:
        "An AI-powered collaboration platform that helps BPI find the right partners and streamline document workflows, transforming partnerships into faster, smarter, and more seamless opportunities. Hashi Agent handles AI synergy scoring, while the Nagare System automates document handling.",
      tags: ["Next.js", "MySQL", "OpenAI"],
      platform: "Web",
      image: "/projects/synseai1.png",
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
      period: "2025 — 2026",
      blurb:
        "Built interactive in-app games for Bebe Live, a livestreaming platform with 35,000+ users, including Bato Bato Pick and Minesweeper under Zenith Gaming.",
      logo: "/impulse.png",
    },
    {
      role: "Full-Stack Developer",
      org: "Boy Scouts of the Philippines",
      location: "Manila, Philippines",
      period: "2025",
      blurb:
        "Designed and built the official mobile app and web-admin portal for the 33rd Asia-Pacific Regional Scout Jamboree, an event with 25,000+ participants — registration, role-based access, maps, and QR-based ID.",
      logo: "/bsp.png",
    },
    {
      role: "Software Developer Intern",
      org: "Exakt IT Services",
      location: "Pasig, Philippines",
      period: "2025",
      blurb:
        "Supported feature development and testing on the Frontline Services and Transactions System (FSTS) for the DENR, improving an internal system used to manage frontline transactions.",
      logo: "/exakt.png",
    },
    {
      role: "UI/UX Designer",
      org: "PB Visions LLC — TRAK",
      location: "Pittsburg, California",
      period: "2025",
      blurb:
        "Led end-to-end UI/UX for TRAK, a fitness-focused social startup app, from wireframes through interactive prototypes to final visual design.",
      logo: "/pbvision.png",
    },
    {
      role: "Junior Frontend Developer",
      org: "Leaving Cert Plus",
      location: "Dublin, Ireland",
      period: "2024 — 2025",
      logo: "/leavingcertplus.png",
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
    {
      quote:
        "He's the person who notices the edge case nobody else thought to test, then quietly fixes it before it becomes an incident.",
      name: "Theo Marsh",
      role: "Engineering Manager, Haven Systems",
    },
    {
      quote:
        "Andrew moves between design and code faster than anyone I've worked with — mockups turn into working UI in the same afternoon.",
      name: "Renee Okafor",
      role: "Founder, Loop & Co.",
    },
    {
      quote:
        "Calm under deadline pressure, and his instincts for what to cut versus keep are consistently right.",
      name: "Sam Whitfield",
      role: "CTO, Anchor Point",
    },
  ],
  hackathons: [
    {
      rank: 2,
      place: "1st Runner-Up",
      project: "SynseAI",
      event: "BPI DATA Wave Hackathon 2025 — Track 5",
      organizer: "Asian Institute of Management, Makati",
      date: "Jul – Oct 2025",
      description:
        "An AI-powered platform that helps BPI discover compatible partners and improve operational efficiency through AI-driven synergy scoring and automated document processing.",
      photos: [
        "/hackathons/datawave1.jpg",
        "/hackathons/datawave6.jpg",
        "/hackathons/datawave2.jpg",
        "/hackathons/datawave3.JPG",
        "/hackathons/datawave4.jpg",
        "/hackathons/datawave5.jpg",
        
      ],
    },
    {
      rank: 1,
      place: "Champion",
      project: "GabAI",
      event: "InnOlympics 2025 — GDSC PLM Hackathon",
      organizer: "ING Hubs, Ayala, Makati",
      date: "Jan 2025",
      description:
        "An AI-assisted study companion built with React Native, Firebase, and Gemini AI, generating personalized study guides adapted to each student's learning style — champion out of 30 teams and 120 participants.",
      photos: [
        "/hackathons/innolympics1.jpg",
        "/hackathons/innolympics2.jpg",
        "/hackathons/innolympics3.jpg",
        "/hackathons/innolympics4.jpg",
        "/hackathons/innolympics5.JPG",
        "/hackathons/innolympics6.JPG",
        
      ],
    },
    {
      rank: 2,
      place: "1st Runner-Up",
      project: "GaBank",
      event: "Hack-It: The New Era of Banking",
      organizer: "Springboard Labs PH, Pasig",
      date: "Apr 2025",
      description:
        "A centralized, AI-powered fintech app that helps users manage multiple bank accounts, track their finances, and achieve their financial goals — all in one place.",
      photos: [
        "/hackathons/hackit1.jpg",
        "/hackathons/hackit2.jpg",
        "/hackathons/hackit3.jpg",
        "/hackathons/hackit4.jpg",
        "/hackathons/hackit5.JPG",
        "/hackathons/hackit6.JPG",
      ],
    },
  ],
};

export default portfolioData;
