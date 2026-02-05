export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  projectType: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Alex Kovalenko",
    role: "Founder",
    company: "FinFlow",
    projectType: "FinTech Mobile App",
    quote: "Rabitah took our messy requirements and delivered a clean, scalable app in 12 weeks. The team communicated every step of the way. We're now live in two markets with zero major bugs at launch."
  },
  {
    id: "2",
    clientName: "Maria Santos",
    role: "Product Lead",
    company: "Street.rf",
    projectType: "Web Application",
    quote: "We needed a reliable partner to rebuild our listing platform. Rabitah delivered on time and the codebase is maintainable—our own devs took over without a hitch. Professional from day one."
  },
  {
    id: "3",
    clientName: "Dmitry Volkov",
    role: "CTO",
    company: "Planeton",
    projectType: "Telegram Mini App",
    quote: "The Telegram Mini App they built for us handles 50K+ monthly users. Clean architecture, fast iterations, and they actually understood TON integration. Would work with them again."
  },
  {
    id: "4",
    clientName: "Elena Park",
    role: "Head of Digital",
    company: "Mansarda Fakro",
    projectType: "Web Platform",
    quote: "From concept to launch in under 10 weeks. Rabitah focused on what mattered: performance, SEO, and a smooth UX. Our lead quality from the site improved noticeably."
  },
  {
    id: "5",
    clientName: "James Chen",
    role: "Co-founder",
    company: "DITKURS",
    projectType: "Content Platform",
    quote: "We had a lot of content and a vague idea. Rabitah helped us structure it into a scalable platform with clear navigation and search. They ask the right questions and ship."
  },
  {
    id: "6",
    clientName: "Nina Richter",
    role: "Operations Director",
    company: "LogiScale",
    projectType: "Custom Software",
    quote: "Our internal tools were a mess. Rabitah built us a custom dashboard and API integrations that our team actually uses daily. No fluff, just solutions that work."
  }
];
