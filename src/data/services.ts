export interface ServiceData {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor?: string;
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
    title: "Web Development",
    subtitle: "Fast, scalable builds with SEO-ready foundations.",
    description: "We deliver a clear scope, weekly progress, and production-ready quality. Expect a product that loads fast, stays stable, and is easy to maintain as you grow.",
    bestFor: "MVP launches, marketing sites, SaaS rebuilds, performance fixes.",
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
    title: "Mobile Apps",
    subtitle: "Native and cross-platform apps that users love.",
    description: "We deliver a clear scope, weekly progress, and production-ready quality. Expect an app that performs well, follows platform guidelines, and scales with your business.",
    bestFor: "Consumer apps, fintech, e-commerce, internal tools.",
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
    title: "Telegram Solutions",
    subtitle: "Mini Apps and bots that engage and convert.",
    description: "We deliver a clear scope, weekly progress, and production-ready quality. Expect a Mini App or bot that integrates smoothly with Telegram and your backend.",
    bestFor: "Communities, games, e-commerce, loyalty, payments.",
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
    title: "UI/UX Design",
    subtitle: "User-centered design that converts.",
    description: "We deliver a clear scope, weekly progress, and production-ready deliverables. Expect intuitive interfaces backed by research and ready for development.",
    bestFor: "Product redesigns, design systems, usability audits.",
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
    title: "Custom Software",
    subtitle: "Tailored solutions for complex problems.",
    description: "We deliver a clear scope, weekly progress, and production-ready quality. Expect software that fits your workflows and scales with your business.",
    bestFor: "Internal tools, APIs, integrations, automation.",
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
    title: "Growth & Marketing",
    subtitle: "Launch strategies that get results.",
    description: "We deliver a clear scope, ongoing collaboration, and measurable outcomes. Expect branding and growth tactics that align with your product and audience.",
    bestFor: "Launch campaigns, SEO, content strategy, conversion optimization.",
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
