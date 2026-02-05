import project1 from "@/assets/project-1.svg";
import project2 from "@/assets/project-2.svg";
import project3 from "@/assets/project-3.svg";
import telegramPlaneton from "@/assets/Telegram-Planeton.png";

export interface WorkProject {
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  oneLiner: string;
  whatWeBuilt: string;
  outcome: string;
  tech: string;
  year: string;
}

export const workProjects: WorkProject[] = [
  {
    slug: "mansarda-fakro",
    image: project1,
    title: "Mansarda Fakro",
    subtitle: "Web platform",
    location: "Russia",
    category: "Web App",
    oneLiner: "A product showcase platform for architectural projects and inspiration.",
    whatWeBuilt: "Built a fast, searchable experience with performance and SEO in mind.",
    outcome: "Improved discovery and lead quality.",
    tech: "Next.js, Supabase, Stripe",
    year: "2024"
  },
  {
    slug: "street-rf",
    image: project2,
    title: "Street.rf",
    subtitle: "Commercial listings",
    location: "Russia",
    category: "Web App",
    oneLiner: "A marketplace for renting and selling commercial spaces.",
    whatWeBuilt: "Built filtering, inquiry capture, and broker workflows for high-intent leads.",
    outcome: "Faster inquiries and better broker matching.",
    tech: "React, Node.js",
    year: "2023"
  },
  {
    slug: "ditkurs",
    image: project3,
    title: "DITKURS.ru",
    subtitle: "Education content",
    location: "Russia",
    category: "Web App",
    oneLiner: "A content platform for exploring IT careers and course comparisons.",
    whatWeBuilt: "Built a scalable publishing experience with clear navigation and search.",
    outcome: "Higher engagement on key guides.",
    tech: "React, Node.js",
    year: "2023"
  },
  {
    slug: "telegram-planeton",
    image: telegramPlaneton,
    title: "Telegram Planeton",
    subtitle: "Telegram Mini App",
    location: "International",
    category: "Telegram",
    oneLiner: "A Telegram clicker game with rewards and on-chain payments.",
    whatWeBuilt: "Built a Mini App UX with secure integrations and analytics.",
    outcome: "Higher retention and recurring activity.",
    tech: "Telegram API, React, TON Blockchain",
    year: "2024"
  }
];

export const getProjectBySlug = (slug: string): WorkProject | undefined =>
  workProjects.find((p) => p.slug === slug);
