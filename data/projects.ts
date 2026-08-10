import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "chama-pamoja",
    title: "Chama Pamoja",
    category: "FinTech / Group Savings",
    tags: ["FinTech", "Web App"],
    shortDescription:
      "A digital platform for managing group savings, contributions, and member records for chamas across Kenya.",
    fullDescription:
      "Chama Pamoja is a web application designed to help savings groups (chamas) manage contributions, track member activity, and streamline financial records. It eliminates manual bookkeeping and gives group treasurers a clean digital system.",
    problem:
      "Many savings groups in Kenya still manage contributions and member records in physical notebooks, leading to errors, disputes, and lost data.",
    solution:
      "A centralized web platform where group admins can register members, record contributions, generate reports, and track balances in real time.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/037teddy/Chama_pamoja",
    liveUrl: "",
    featured: true,
    coverImage: "/images/projects/chama.png",
    screenshots: [
      "/images/projects/chama.png",
    ],
    features: [
      "Member registration and profile management",
      "Contribution tracking per cycle",
      "Group dashboard with balance overview",
      "Payment record management",
      "Report generation",
    ],
    challenges: [
      "Designing a financial data model that supports multiple group cycles",
      "Making the UI simple enough for non-technical treasurers",
    ],
    lessons: [
      "Simple UX is more important than feature richness for non-technical users",
      "Data integrity is critical in any financial application",
    ],
  },
  {
    slug: "iot-blind-corner-detection",
    title: "IoT Blind Corner Collision Detection",
    category: "IoT / Embedded Systems",
    tags: ["IoT", "ESP32", "Firebase"],
    shortDescription:
      "An ESP32-based system using ultrasonic sensors to detect approaching vehicles at blind corners, with a live web dashboard.",
    fullDescription:
      "A hardware-software IoT project that places ultrasonic sensors at blind road corners to detect vehicles and warn approaching drivers in real time. Data is streamed to a Firebase Realtime Database and visualized on a web dashboard built with Chart.js.",
    problem:
      "Blind corners in warehouses, parking lots, and narrow roads are a major cause of low-speed vehicle collisions that could be easily prevented with early warning systems.",
    solution:
      "An ESP32 microcontroller reads data from multiple HC-SR04 ultrasonic sensors and triggers LED/buzzer alerts. Vehicle count and sensor data are pushed to Firebase and displayed on a live dashboard.",
    techStack: ["ESP32", "Arduino C++", "Firebase Realtime DB", "Chart.js", "HTML/CSS/JS"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    coverImage: "/images/projects/iot.png",
    screenshots: [
      "/images/projects/iot.png",
    ],
    features: [
      "Dual ultrasonic sensor setup for entry/exit detection",
      "Real-time vehicle counting logic",
      "LED and buzzer alert system",
      "WiFi-hosted web dashboard",
      "Firebase Realtime Database integration",
      "Chart.js visualization of traffic data",
    ],
    challenges: [
      "Resolving sensor crosstalk between adjacent ultrasonic sensors",
      "Implementing accurate exit-based vehicle counting logic",
      "Maintaining stable WiFi connection on the ESP32",
    ],
    lessons: [
      "Sensor placement and physical setup matters as much as the code",
      "Debouncing and timing logic is critical in embedded systems",
      "Firebase is an excellent quick backend for IoT prototypes",
    ],
  },
  {
    slug: "daycare-management",
    title: "Daycare Management System",
    category: "Business System / Web App",
    tags: ["Web App", "Management System"],
    shortDescription:
      "A web-based system for managing daycare operations including child enrollment, attendance, and parent communication.",
    fullDescription:
      "A business management web application built for daycare centers to handle child enrollment, daily attendance, staff records, and parent notifications in one place.",
    problem:
      "Small daycare centers struggle to manage records manually and communicate efficiently with parents.",
    solution:
      "A clean web dashboard for daycare administrators to manage enrollment, attendance, and send updates to parents.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    coverImage: "/images/projects/daycare.png",
    screenshots: ["/images/projects/daycare.png"],
    features: [
      "Child enrollment and profile management",
      "Daily attendance tracking",
      "Staff management module",
      "Parent communication log",
      "Basic reporting",
    ],
    challenges: ["Designing a simple enough UI for non-technical daycare staff"],
    lessons: ["Understanding the user's workflow before designing the system saves rework"],
  },
  {
    slug: "car-rental-system",
    title: "Car Rental System",
    category: "Business System / Web App",
    tags: ["Web App", "Management System"],
    shortDescription:
      "A full-stack web platform for renting vehicles, complete with search filtering, bookings scheduling, and an admin operations panel.",
    fullDescription:
      "The Car Rental System is a web database application designed for vehicle rental agencies. It allows customers to view active fleet vehicles, search by category/pricing, and reserve cars. Admins can manage fleet status, track reservations, and log customer contracts.",
    problem:
      "Managing bookings and vehicles manually via spreadsheets leads to rental collisions, vehicle double-booking, and slow service check-outs.",
    solution:
      "An automated system that validates vehicle availability before confirming reservations and provides admins with a centralized booking control panel.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    coverImage: "/images/projects/car-rental.png",
    screenshots: ["/images/projects/car-rental.png"],
    features: [
      "Real-time fleet availability checking",
      "Interactive booking reservation forms",
      "Car categorization and rate filters",
      "Admin vehicle fleet log (add, edit status)",
      "Rental duration pricing auto-calculator",
    ],
    challenges: [
      "Developing overlapping date validation queries in SQL for vehicle reservations",
      "Designing a clean checkout experience for mobile viewports",
    ],
    lessons: [
      "Handling database race conditions is critical in reservation platforms",
      "Dynamic cost calculations are best handled server-side to prevent client tampering",
    ],
  },
  {
    slug: "space-finder",
    title: "Space Finder",
    category: "SaaS / Booking Discovery",
    tags: ["Web App", "Travel", "Booking"],
    shortDescription:
      "A search platform for finding meeting spaces, short-term rentals, and Airbnb-style venues across cities.",
    fullDescription:
      "Space Finder is a location discovery app that helps users search for available meeting rooms, BnBs, and short-term rental spaces. It combines a clean browsing experience with filters for space type, amenities, and availability so users can book the right venue quickly.",
    problem:
      "Finding the right space for meetings, events, or short stays requires browsing multiple sites, each with different layouts and availability rules.",
    solution:
      "A single application that aggregates searchable space listings, surfaces key details, and makes it easy to compare meeting rooms, BnBs, and short-term rental spaces in one place.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/037teddy/Space-finder",
    liveUrl: "",
    featured: true,
    coverImage: "/images/projects/space-finder.png",
    screenshots: ["/images/projects/space-finder.png"],
    features: [
      "Search and filter for meeting spaces, BnBs, and rentals",
      "Space detail pages with amenities, pricing, and availability",
      "Location-based browsing and map discovery",
      "Responsive booking-focused design for fast decisions",
    ],
    challenges: [
      "Designing a clear UI for multiple space types and booking needs",
      "Presenting availability and key details without overwhelming users",
    ],
    lessons: [
      "A strong discovery experience is essential for marketplace-style apps",
      "Clear filters reduce decision fatigue when comparing venue options",
    ],
  },
  {
    slug: "weather-dashboard-ai",
    title: "Weather Dashboard AI",
    category: "AI / Weather App",
    tags: ["Web App", "AI", "Forecast"],
    shortDescription:
      "A weather app with live conditions, 5-day forecasts, saved locations, station lookup, and AI weather chat.",
    fullDescription:
      "Weather Dashboard AI provides current conditions, multi-day forecasts, saved locations, and station search. It also adds an AI-powered weather chat so users can ask natural-language questions and get weather insights without parsing charts.",
    problem:
      "Existing weather apps often overwhelm users with charts and menus, making it hard to get a quick, conversational weather summary for a location.",
    solution:
      "A streamlined weather experience that combines dashboard metrics, forecast summaries, saved location management, and an AI chat assistant for natural-language weather queries.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    githubUrl: "https://github.com/037teddy/weather-dashboard-ai",
    liveUrl: "https://weather-dashboard-ai-tau.vercel.app",
    featured: true,
    coverImage: "/images/projects/weather-dashboard.png",
    screenshots: ["/images/projects/weather-dashboard.png"],
    features: [
      "Live current conditions with temperature, sky state, and wind speed",
      "5-day forecast with highs, lows, and precipitation chances",
      "Saved locations for quick weather switching",
      "Station lookup by location name",
      "AI weather chat for conversational weather insights",
    ],
    challenges: [
      "Balancing rich weather data with a simple, easy-to-scan interface",
      "Integrating conversational AI without distracting from core forecast features",
    ],
    lessons: [
      "Conversational UI can make weather information feel more accessible",
      "Saved location workflows improve return visits and usability",
    ],
  },
  {
    slug: "portfolio-flyrank",
    title: "Portfolio Flyrank",
    category: "Portfolio / Brand Site",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    shortDescription:
      "A personal brand website with Home, Work, About, Contact pages and an embedded AI chat widget.",
    fullDescription:
      "Portfolio Flyrank is a capstone portfolio website built with Next.js, TypeScript, and Tailwind. It features a home hero, work case study page, bio-focused about page, contact links, and a floating AI chat widget powered by a Gemini-backed /api/chat route.",
    problem:
      "Many portfolios lack a way for visitors to ask questions directly or explore the developer’s work through a conversational experience.",
    solution:
      "A polished personal site with a strong brand narrative, case study showcase, and an AI chat widget that answers visitor questions on every page.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Gemini API"],
    githubUrl: "https://github.com/037teddy/Portfolio-flyrank",
    liveUrl: "https://portfolio-flyrank-henna.vercel.app",
    featured: true,
    coverImage: "/images/projects/portfolio-flyrank.png",
    screenshots: ["/images/projects/portfolio-flyrank.png"],
    features: [
      "Home hero with role, pitch, and CTA",
      "Work page case study for Weather Dashboard",
      "About page with bio, tech stack, and availability",
      "Contact page with email, GitHub, and LinkedIn links",
      "Floating AI chat widget across all pages",
    ],
    challenges: [
      "Building a cohesive personal brand voice across four site sections",
      "Embedding an AI chat experience without disrupting the portfolio flow",
    ],
    lessons: [
      "AI chat can enhance engagement when it’s integrated naturally",
      "A strong landing page makes project case studies more compelling",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
