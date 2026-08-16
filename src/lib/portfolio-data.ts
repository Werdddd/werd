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
  /** Shown in the landing page carousel. All projects always show on /works. */
  featured?: boolean;
  /** Live URL (site or app store listing), if the project is deployed. */
  link?: string;
}

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases & Services"
  | "Mobile"
  | "AI Tools"
  | "Design"
  | "DevOps & Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface ExperienceItem {
  role: string;
  org: string;
  employmentType: string;
  location: string;
  setup: "Onsite" | "Remote" | "Hybrid";
  startDate: string;
  endDate: string;
  duration: string;
  period: string;
  blurb: string;
  details: [string, string];
  logo: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Hackathon {
  rank: number;
  podium: boolean;
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
  
  tagline: string;
  subhead: string;
  bio: string;
  facts: Fact[];
  projects: Project[];
  skills: Skill[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
  fillerTestimonials: Testimonial[];
  hackathons: Hackathon[];
}

const portfolioData: PortfolioData = {
  name: "Andrew Emmanuel Robles",
  
  tagline: "Andrew Robles",
  subhead:
    "Designing what people see. Engineering what they don't.",
  bio: "I design intuitive experiences and engineer the systems that power them—from concept to deployment.",
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
      featured: true,
      link: "https://simoy.xyz",
    },
    {
      num: "02",
      title: "Beep",
      blurb:
        "A crowdsourced fuel tracker that helps drivers find the cheapest nearby stations, with a live fuel map, trip cost estimator, and a gamified community system.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/beep1.png",
      featured: true,
      link: "https://beep-fuel.xyz",
    },
    {
      num: "03",
      title: "33rd Asia-Pacific Regional Scout Jamboree App",
      blurb:
        "The official companion app for an international Scout jamboree with 25,000+ participants — QR-linked digital IDs, live event maps, announcements, and emergency access.",
      tags: ["React Native", "Supabase", "App Store"],
      platform: "Mobile",
      image: "/projects/aprsj1.png",
      featured: true,
      link: "https://apps.apple.com/ph/app/33rd-apr-scout-jamboree-app/id6756312226",
    },
    {
      num: "04",
      title: "UE Connect",
      blurb:
        "A centralized, algorithm-driven social and organization-management app for university student life, built to boost engagement across student orgs.",
      tags: ["React Native", "Firebase", "Mobile"],
      platform: "Mobile",
      image: "/projects/ueconnect1.png",
      featured: true,
    },
    {
      num: "05",
      title: "TOBSPA Website",
      blurb:
        "The official web platform of the Ten Outstanding Boy Scouts of the Philippines Associations, showcasing the awardees and initiatives.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/tobspa1.png",
      link: "https://tobspa.org.ph",
    },
    {
      num: "06",
      title: "SynseAI",
      blurb:
        "An AI-powered collaboration platform that helps BPI find the right partners and streamline document workflows, transforming partnerships into faster, smarter, and more seamless opportunities. Hashi Agent handles AI synergy scoring, while the Nagare System automates document handling.",
      tags: ["Next.js", "MySQL", "OpenAI"],
      platform: "Web",
      image: "/projects/synseai1.png",
      featured: true,
    },
    {
      num: "07",
      title: "Agapay",
      blurb:
        "A community assistance platform connecting people in need with nearby help and resources in real time.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/agapay1.png",
    },
    {
      num: "08",
      title: "GabAI",
      blurb:
        "An AI-assisted study companion that generates personalized study guides adapted to each student's learning style — champion at InnOlympics 2025.",
      tags: ["React Native", "Firebase", "Gemini AI"],
      platform: "Mobile",
      image: "/projects/gabai1.png",
    },
    {
      num: "09",
      title: "GaBank",
      blurb:
        "A centralized, AI-powered fintech app that helps users manage multiple bank accounts, track finances, and achieve their financial goals — 1st Runner-Up at Hack-It 2025.",
      tags: ["React Native", "Firebase", "AI"],
      platform: "Mobile",
      image: "/projects/gabank1.png",
    },
    {
      num: "10",
      title: "iNEast",
      blurb:
        "A mobile app designed for UE Caloocan students, specifically aimed at helping freshmen navigate the campus with ease. It features an interactive map that allows users to locate all campus buildings and key facilities.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/ineast1.png",
    },
    {
      num: "11",
      title: "APRSJ Website",
      blurb:
        "The official web platform and admin portal for the 33rd Asia-Pacific Regional Scout Jamboree, supporting registration, announcements, and event information.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/aprsjwebsite1.png",
    },
    {
      num: "12",
      title: "TRAK",
      blurb:
        "A fitness-focused social app combining workout tracking with community-driven engagement, designed end to end from wireframes to final UI.",
      tags: ["React Native", "Firebase", "Mobile"],
      platform: "Mobile",
      image: "/projects/trak1.png",
    },
    {
      num: "13",
      title: "Ease Resume",
      blurb:
        "A resume builder that helps students and job seekers create polished, professional resumes quickly with guided templates.",
      tags: ["NextJS", "Supabase", "Vercel"],
      platform: "Web",
      image: "/projects/easeresume1.png",
    },
    {
      num: "14",
      title: "Emotion Escape",
      blurb:
        "A 3D puzzle game exploring human emotions. Players navigate a maze with four rooms, each representing Sadness, Anger, Joy, and Fear.",
      tags: ["Unity", "WebGL", "3D"],
      platform: "Web",
      image: "/projects/emotionescape1.png",
    },
    {
      num: "15",
      title: "Kamayan",
      blurb:
        "An online marketplace promoting sustainable consumption, production, and community collaboration. It enables individuals to buy, sell, and swap goods, emphasizing responsible consumption and the circular economy.",
      tags: ["React", "MySQL", "Python"],
      platform: "Web",
      image: "/projects/kamayan1.png",
    },
    {
      num: "16",
      title: "Roadmap AI",
      blurb:
        "An AI-powered planning tool that helps user generate and visualize learning roadmaps specifically for programming/software development high-level goals.",
      tags: ["NextJS", "OpenAI", "Vercel"],
      platform: "Web",
      image: "/projects/roadmapai1.png",
    },
    {
      num: "17",
      title: "Safelet",
      blurb:
        "A personal safety companion app that lets users quickly alert trusted contacts and share their location in an emergency.",
      tags: ["React Native", "Firebase", "Mobile"],
      platform: "Mobile",
      image: "/projects/safelet1.png",
    },
    {
      num: "18",
      title: "Salad Navotenos Website",
      blurb:
        "The offical website of SALAD Navotenos, a scout-led fund-raising project supporting Navoteño families, using lettuce from the GGC-BSP vertical urban farm.",
      tags: ["HTML", "CSS", "Bootstrap"],
      platform: "Web",
      image: "/projects/saladnav1.png",
    },
    {
      num: "19",
      title: "TaraPinas!",
      blurb:
        "A travel discovery app for exploring destinations, itineraries, and local experiences around the Philippines.",
      tags: ["Angular", "TypeScript", "Tailwind"],
      platform: "Web",
      image: "/projects/tarapinas1.png",
    },
    {
      num: "20",
      title: "TechDer",
      blurb:
        "A Fun, swipe-based learning app for programming languages built using Flutter.",
      tags: ["Flutter", "Supabase", "Dart"],
      platform: "Mobile",
      image: "/projects/techder1.png",
    },
    {
      num: "21",
      title: "BSP Navotas City Council Website",
      blurb:
        "The offical website of the BSP Navotas City Council Website, which goal is to equip young people with skills and values for a fulfilling life.",
      tags: ["HTML", "CSS", "Bootstrap"],
      platform: "Web",
      image: "/projects/bspnav1.png",
    },
    {
      num: "22",
      title: "Creation Myth",
      blurb:
        "An interactive storytelling experience exploring creation myths from around the world through rich visuals and narrative design.",
      tags: ["React", "Framer Motion", "Vercel"],
      platform: "Web",
      image: "/projects/creationmyth1.png",
    },
    {
      num: "23",
      title: "Fast Feed",
      blurb:
        "A fast, streamlined content feed app for browsing and staying up to date with the latest updates on the go.",
      tags: ["React", "Framer Motion", "Web"],
      platform: "Web",
      image: "/projects/fastfeed1.png",
    },
    {
      num: "24",
      title: "Numwais",
      blurb:
        "A gamified math learning app that helps students build number sense and problem-solving skills.",
      tags: ["React", "Firebase", "Web"],
      platform: "Web",
      image: "/projects/numwais1.png",
    },
    {
      num: "25",
      title: "Werd Sports",
      blurb:
        "A sports content and community platform for following teams, scores, and highlights.",
      tags: ["Vue", "CSS", "Tailwind"],
      platform: "Web",
      image: "/projects/werdsports1.png",
    },
  ],
  skills: [
    // Languages
    { name: "TypeScript", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "Kotlin", category: "Languages" },
    { name: "Swift", category: "Languages" },
    { name: "PHP", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Dart", category: "Languages" },

    // Frontend
    { name: "React", category: "Frontend" },
    { name: "Vue", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Next JS", category: "Frontend" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
  

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "Flask", category: "Backend" },
    
    

    // Databases & Services
    { name: "MySQL", category: "Databases & Services" },
    { name: "PostgreSQL", category: "Databases & Services" },
    { name: "MongoDB", category: "Databases & Services" },
    { name: "Firebase", category: "Databases & Services" },
    { name: "Supabase", category: "Databases & Services" },
    
    // Mobile
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Expo", category: "Mobile" },
    { name: "Apple App Store", category: "Mobile" },
    { name: "Google Play Store", category: "Mobile" },

    // AI Tools
    { name: "Claude Code", category: "AI Tools" },
    { name: "Cursor", category: "AI Tools" },
    { name: "GitHub Copilot", category: "AI Tools" },
    { name: "OpenAI", category: "AI Tools" },
    { name: "Gemini", category: "AI Tools" },

    // Design
    { name: "Figma", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "Adobe Illustrator", category: "Design" },
    { name: "Adobe Premiere Pro", category: "Design" },
    { name: "Adobe Photoshop", category: "Design" },
    { name: "CapCut", category: "Design" },

    // DevOps & Tools
    { name: "Git", category: "DevOps & Tools" },
    { name: "GitHub", category: "DevOps & Tools" },
    { name: "Docker", category: "DevOps & Tools" },
    { name: "Vercel", category: "DevOps & Tools" },
    { name: "AWS", category: "DevOps & Tools" },
    { name: "Postman", category: "DevOps & Tools" },
    { name: "Jira", category: "DevOps & Tools" },
    
  ],
  experience: [
    {
      role: "Junior Developer",
      org: "Impulse 101 IT Solutions OPC — Bebe Live",
      employmentType: "Full-time",
      location: "Quezon City, National Capital Region, Philippines",
      setup: "Hybrid",
      startDate: "Dec 2025",
      endDate: "Jul 2026",
      duration: "8 mos",
      period: "Dec 2025 — Jul 2026",
      blurb:
        "Built interactive in-app games for Bebe Live, a livestreaming platform with 35,000+ users, including Bato Bato Pick and Minesweeper under Zenith Gaming.",
      details: [
        "Contributed to the development and continuous improvement of Bebe Live, a live-streaming platform serving more than 35,000 users. Worked as part of the development team to build, integrate, and refine interactive features designed to increase user engagement within the live-streaming environment.",
        "Under the Zenith Gaming initiative, designed and implemented in-app games such as Bato Bato Pick and Minesweeper, developing their core game logic, user interactions, and integration with the broader application ecosystem. Collaborated with other developers and stakeholders to translate requirements into functional features, troubleshoot technical issues, and optimize the overall user experience.",
      ],
      logo: "/impulse.png",
    },
    {
      role: "Software Engineer",
      org: "Pandas Freelancing Inc.",
      employmentType: "Part-time",
      location: "Taguig, National Capital Region, Philippines",
      setup: "Hybrid",
      startDate: "May 2024",
      endDate: "Jun 2026",
      duration: "2 yrs 2 mos",
      period: "May 2024 — Jun 2026",
      blurb:
        "Delivered full-stack web and mobile projects for clients as an independent freelance software engineer.",
      details: [
        "Worked as a part-time independent software engineer through Pandas Freelancing Inc., delivering full-stack web and mobile applications for a diverse range of clients and projects.",
        "Managed projects across the full software development lifecycle, from gathering and analyzing requirements and defining technical solutions to designing system architecture, developing frontend and backend features, integrating databases and third-party services, testing functionality, and deploying applications to production. Worked closely with clients and project stakeholders to understand business objectives, translate requirements into scalable technical solutions, and deliver products that balance functionality, usability, and performance.",
      ],
      logo: "/pandas.png",
    },
    {
      role: "Full-Stack Developer",
      org: "Boy Scouts of the Philippines",
      employmentType: "Contract",
      location: "Manila, National Capital Region, Philippines",
      setup: "Hybrid",
      startDate: "Sep 2025",
      endDate: "Dec 2025",
      duration: "4 mos",
      period: "Sep 2025 — Dec 2025",
      blurb:
        "Designed and built the official mobile app and web-admin portal for the 33rd Asia-Pacific Regional Scout Jamboree, an event with 25,000+ participants — registration, role-based access, maps, and QR-based ID.",
      details: [
        "Designed and developed the official mobile application and web-based administrative portal for the 33rd Asia-Pacific Regional Scout Jamboree, an international event attended by more than 25,000 participants. Led the development of end-to-end digital solutions supporting participant registration, role-based access control, real-time announcements, event maps, schedules, QR code-based identification, and emergency access features.",
        "Worked across both frontend and backend systems to create a cohesive platform capable of supporting the operational and communication needs of a large-scale international event. Collaborated with event stakeholders to translate complex operational requirements into accessible and reliable digital tools, ensuring that participants, staff, and administrators could efficiently access critical information throughout the jamboree.",
      ],
      logo: "/bsp.png",
    },
    {
      role: "Software Developer Intern",
      org: "Exakt, Inc.",
      employmentType: "Internship",
      location: "Pasig, National Capital Region, Philippines",
      setup: "Onsite",
      startDate: "Jun 2025",
      endDate: "Jul 2025",
      duration: "2 mos",
      period: "Jun 2025 — Jul 2025",
      blurb:
        "Supported feature development and testing on the Frontline Services and Transactions System (FSTS) for the DENR, improving an internal system used to manage frontline transactions.",
      details: [
        "Worked on the Frontline Services and Transactions System (FSTS) developed for the Department of Environment and Natural Resources (DENR). Contributed to the development, testing, and optimization of features for a large-scale web-based information system designed to support the management of frontline services and government transactions. Participated in the software development lifecycle by assisting with feature implementation, debugging, quality assurance, and system improvements.",
        "Collaborated with the development team to understand requirements, address technical issues, and ensure that new functionality integrated effectively with the existing system. Through this experience, gained practical exposure to developing enterprise-level software, working within an established development environment, and contributing to a system designed to improve the efficiency and reliability of internal government operations.",
      ],
      logo: "/exakt.png",
    },
    {
      role: "UI/UX Designer",
      org: "PB Vision",
      employmentType: "Full-time",
      location: "Pittsburg, California, United States",
      setup: "Remote",
      startDate: "Apr 2025",
      endDate: "Sep 2025",
      duration: "6 mos",
      period: "Apr 2025 — Sep 2025",
      blurb:
        "Led end-to-end UI/UX for TRAK, a fitness-focused social startup app, from wireframes through interactive prototypes to final visual design.",
      details: [
        "Led the end-to-end UI/UX design process for TRAK, a startup fitness-focused social application, from initial product exploration and wireframing through to final high-fidelity visual designs and interactive prototypes. Translated product requirements and business objectives into intuitive user flows and engaging digital experiences designed around the needs of fitness-focused users. Created wireframes, information architectures, user flows, prototypes, and polished interface designs while maintaining consistency across the application's visual system.",
        "Collaborated with the development and product teams to ensure that design decisions were practical, scalable, and aligned with the technical implementation. Focused on simplifying complex interactions, improving usability, and creating a cohesive experience that combined social engagement with fitness tracking and community-driven features.",
      ],
      logo: "/pbvision.png",
    },
    {
      role: "Junior Frontend Developer",
      org: "Leaving Cert Plus",
      employmentType: "Full-time",
      location: "Dublin, County Dublin, Ireland",
      setup: "Remote",
      startDate: "Jan 2024",
      endDate: "Dec 2025",
      duration: "2 yrs",
      period: "Jan 2024 — Dec 2025",
      blurb:
        "Built and refined user-facing features for an education platform, focused on responsiveness, performance, and accessible content delivery.",
      details: [
        "Over two years as a remote Junior Frontend Developer for Leaving Cert Plus, an Irish education platform, I built and refined user-facing features with a consistent focus on responsiveness, performance, and accessible content delivery for students studying for their Leaving Certificate exams.",
        "Working fully remote across a significant time difference, I took ownership of frontend tasks independently, from implementing new study-content views to optimizing load times on content-heavy pages. The long tenure meant getting deeply familiar with the platform's frontend architecture and gradually taking on more complex features as trust with the team grew.",
      ],
      logo: "/leavingcertplus.png",
    },
  ],
  testimonials: [
    {
      quote:
        "Andrew's work as the developer of the 33rd APRSJ App is a remarkable example of a Scout giving back to the Scouting community. As an Eagle Scout and TOBS Awardee himself, he used his technical expertise, and dedication to create a platform that enhanced the experience of our Scouts.",
      name: "Atty. Emilio B. Aquino",
      role: "National President, Boy Scouts of the Philippines",
    },
    {
      quote:
        "Mr. Robles demonstrates excellent oral communication skills and expresses ideas clearly and confidently. He has a strong leadership potential and can be relied upon to lead a team effectively while fostering collaboration. Technically knowledgeable and well-equipped with relevant skills and competencies, Mr. Robles consistently performs tasks with professionalism and competence.",
      name: "Prof. Kathleen Martin-Dimaano",
      role: "Department Chair, Department of Computer Studies and Systems - UE Caloocan",
    },
    {
      quote: "Andrew is the type of person that breathes life into apps. A value-bringer and a great communicator",
      name: "Zyldjan Lanticse",
      role: "AI Engineer, Cadre Crew",
    },
    {
      quote:
        "What truly sets him apart is his commitment to building solutions with purpose. He's reliable, incredibly detail-oriented, and never settles for \"good enough\"—he's always learning, improving, and pushing himself to do more. I have complete confidence in his work and would wholeheartedly recommend him to anyone looking for a developer they can truly trust.",
      name: "Hazel Miranda",
      role: "My Love ♥️",
    },
    {
      quote:
        "He is an exceptionally talented computer science graduate whose technical skill shines through in his software development. For the 33rd APR Scout Jamboree, he engineered a highly reliable, responsive, and polished mobile application from scratch. His professionalism, attention to detail, and ability to deliver a top-tier digital product make him a valuable asset to any engineering team.",
      name: "Mark Leo Sales",
      role: "National Executive Board Member, Boy Scouts of the Philippines",
    },
  ],
  fillerTestimonials: [
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
    
  ],
  hackathons: [
    {
      rank: 2,
      podium: true,
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
      podium: true,
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
      podium: true,
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
    {
      rank: 2,
      podium: false,
      place: "Top 10 Finalist",
      project: "GDream",
      event: "GCash AI Week — PartyRock Student Hackathon",
      organizer: "GCash",
      date: "2025",
      description:
        "An AI-powered concept built with Amazon PartyRock during GCash's AI Week student hackathon, exploring generative AI tools for everyday Filipino users.",
      photos: [
        "/hackathons/gcashhackathon.jpg",
        "/hackathons/gcashhackathon2.jpg",
        "/hackathons/gcashhackathon3.jpg",
        "/hackathons/gcashhackathon4.jpg",
      ],
    },
    {
      rank: 2,
      podium: false,
      place: "Finalist",
      project: "Safelet",
      event: "AppCon 2024",
      organizer: "OTIS Japan Inc.",
      date: "2024",
      description:
        "An IoT wearable for safety and location tracking paired with a mobile app, built for AppCon 2024's theme on AI and IoT solutions for social issues in the Philippines.",
      photos: ["/hackathons/appcon.jpg"],
    },
    {
      rank: 2,
      podium: false,
      place: "Participant",
      project: "UnRavel",
      event: "Game Jam Manila 2025",
      organizer: "Devcon Manila Chapter",
      date: "Aug 2025",
      description:
        "A short game about looping through emotions, built during Devcon Manila's Game Jam Manila 2025.",
      photos: ["/hackathons/gamejam.jpg"],
    },
    {
      rank: 2,
      podium: false,
      place: "Participant",
      project: "Agapay",
      event: "DDB Hackathon — Design the DDB Mobile App Challenge",
      organizer: "Dangerous Drugs Board, Office of the President",
      date: "2026",
      description:
        "A mobile app concept built for the Dangerous Drugs Board's hackathon around IDADAIT 2026, supporting drug abuse prevention and awareness.",
      photos: ["/hackathons/ddbhackathon.jpg"],
    },
    {
      rank: 2,
      podium: false,
      place: "Participant",
      project: "Drip Gemini",
      event: "Gemini API Hackathon",
      organizer: "Google Cloud",
      date: "2025",
      description:
        "A project built with the Gemini API during Google Cloud's Gemini Hackathon, exploring generative AI use cases.",
      photos: ["/hackathons/googlehackathon.png"],
    },
  ],
};

export default portfolioData;
