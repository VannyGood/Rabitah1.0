export interface ServiceData {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  timeline: string;
  pricing: {
    starting: string;
    note: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "web-development",
    number: "01",
    title: "WEB DEVELOPMENT",
    subtitle: "High-performance websites and web applications",
    description: "We build modern, scalable web applications that drive business results. From landing pages to complex SaaS platforms, our development process ensures clean code, optimal performance, and seamless user experiences.",
    features: [
      "Custom website development",
      "E-commerce platforms",
      "SaaS applications",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "Performance optimization",
      "SEO-optimized architecture",
      "Responsive design"
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap."
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description: "Interactive wireframes and high-fidelity designs ensure alignment before development begins."
      },
      {
        step: "03",
        title: "Development",
        description: "Agile development with regular updates, using modern frameworks like React, Next.js, and Node.js."
      },
      {
        step: "04",
        title: "Testing & Launch",
        description: "Rigorous QA, performance testing, and smooth deployment to production."
      }
    ],
    timeline: "4-12 weeks",
    pricing: {
      starting: "$5,000",
      note: "Final pricing depends on project scope and complexity"
    }
  },
  {
    slug: "mobile-apps",
    number: "02",
    title: "MOBILE APPS",
    subtitle: "Native iOS and Android applications",
    description: "We create mobile applications that users love. Whether you need a consumer app or enterprise solution, we deliver polished, performant apps that scale with your business.",
    features: [
      "Native iOS development (Swift)",
      "Native Android development (Kotlin)",
      "Cross-platform (React Native, Flutter)",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
      "Biometric authentication",
      "Payment integration"
    ],
    process: [
      {
        step: "01",
        title: "Strategy & Research",
        description: "Market analysis, user research, and technical feasibility assessment."
      },
      {
        step: "02",
        title: "UX/UI Design",
        description: "Platform-specific design following iOS and Android guidelines."
      },
      {
        step: "03",
        title: "Development & Iteration",
        description: "Sprint-based development with regular builds and feedback cycles."
      },
      {
        step: "04",
        title: "Launch & Support",
        description: "App store submission, monitoring, and ongoing maintenance."
      }
    ],
    timeline: "8-16 weeks",
    pricing: {
      starting: "$15,000",
      note: "Varies based on platforms, features, and complexity"
    }
  },
  {
    slug: "telegram-solutions",
    number: "03",
    title: "TELEGRAM SOLUTIONS",
    subtitle: "Custom Mini Apps and bots",
    description: "Leverage Telegram's massive user base with custom Mini Apps and bots. We build engaging experiences for communities, e-commerce, games, and more—all within the Telegram ecosystem.",
    features: [
      "Telegram Mini Apps",
      "Custom bot development",
      "Payment integration",
      "Gamification systems",
      "Community management tools",
      "E-commerce solutions",
      "Analytics dashboards",
      "Multi-language support"
    ],
    process: [
      {
        step: "01",
        title: "Concept & Scope",
        description: "Define use cases, user flows, and integration requirements."
      },
      {
        step: "02",
        title: "Design",
        description: "Create intuitive interfaces optimized for Telegram's UI patterns."
      },
      {
        step: "03",
        title: "Development",
        description: "Build using Telegram's APIs with robust backend infrastructure."
      },
      {
        step: "04",
        title: "Deployment",
        description: "Launch, monitor, and iterate based on user feedback."
      }
    ],
    timeline: "3-8 weeks",
    pricing: {
      starting: "$3,000",
      note: "Depends on bot complexity and Mini App features"
    }
  },
  {
    slug: "ui-ux-design",
    number: "04",
    title: "UI/UX DESIGN",
    subtitle: "User-centered design that converts",
    description: "Great design is invisible—it just works. We create intuitive, beautiful interfaces backed by research and user testing. Every pixel serves a purpose.",
    features: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "Visual design",
      "Design systems",
      "Usability testing",
      "Accessibility compliance",
      "Design handoff"
    ],
    process: [
      {
        step: "01",
        title: "Research",
        description: "User interviews, competitor analysis, and requirements gathering."
      },
      {
        step: "02",
        title: "Information Architecture",
        description: "Site maps, user flows, and content structure."
      },
      {
        step: "03",
        title: "Design",
        description: "Wireframes, mockups, and interactive prototypes."
      },
      {
        step: "04",
        title: "Validation",
        description: "User testing, refinement, and design system documentation."
      }
    ],
    timeline: "2-6 weeks",
    pricing: {
      starting: "$2,500",
      note: "Based on project scope and number of screens"
    }
  },
  {
    slug: "custom-software",
    number: "05",
    title: "CUSTOM SOFTWARE",
    subtitle: "Tailored solutions for complex problems",
    description: "When off-the-shelf doesn't cut it, we build custom. From internal tools to complex integrations, we create software that fits your unique business needs perfectly.",
    features: [
      "Custom CRM/ERP systems",
      "API development",
      "Third-party integrations",
      "Automation workflows",
      "Data processing pipelines",
      "Legacy system modernization",
      "Cloud infrastructure",
      "Security & compliance"
    ],
    process: [
      {
        step: "01",
        title: "Analysis",
        description: "Deep dive into your workflows, pain points, and requirements."
      },
      {
        step: "02",
        title: "Architecture",
        description: "System design, technology selection, and integration planning."
      },
      {
        step: "03",
        title: "Build",
        description: "Modular development with continuous integration and testing."
      },
      {
        step: "04",
        title: "Deploy & Train",
        description: "Deployment, documentation, and team training."
      }
    ],
    timeline: "6-20 weeks",
    pricing: {
      starting: "$10,000",
      note: "Custom quote based on technical requirements"
    }
  },
  {
    slug: "growth-marketing",
    number: "06",
    title: "GROWTH & MARKETING",
    subtitle: "Launch strategies that get results",
    description: "Building great products is only half the battle. We help you reach your audience with strategic branding, digital marketing, and growth tactics that drive real results.",
    features: [
      "Brand strategy & identity",
      "Digital marketing campaigns",
      "SEO optimization",
      "Content strategy",
      "Social media management",
      "Analytics & reporting",
      "Conversion optimization",
      "Launch planning"
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description: "Analyze current position, competitors, and growth opportunities."
      },
      {
        step: "02",
        title: "Brand Development",
        description: "Define positioning, messaging, and visual identity."
      },
      {
        step: "03",
        title: "Campaign Execution",
        description: "Launch targeted campaigns across relevant channels."
      },
      {
        step: "04",
        title: "Optimize & Scale",
        description: "Data-driven optimization and scaling successful strategies."
      }
    ],
    timeline: "Ongoing",
    pricing: {
      starting: "$2,000/month",
      note: "Retainer-based or project pricing available"
    }
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};
