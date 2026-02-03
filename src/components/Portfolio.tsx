import { ArrowUpRight } from "lucide-react";
import projectWebApp from "@/assets/project-web-app.jpg";
import projectMobileApp from "@/assets/project-mobile-app.jpg";
import projectTelegram from "@/assets/project-telegram.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: projectWebApp,
      number: "01",
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "Full-stack marketplace with real-time inventory, payment processing, and analytics dashboard.",
      tech: ["Next.js", "Supabase", "Stripe"],
      result: "3x conversion increase"
    },
    {
      image: projectMobileApp,
      number: "02",
      title: "FinTech Mobile App",
      category: "Mobile Application",
      description: "Cross-platform banking app with biometric auth, instant transfers, and investment tracking.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      result: "100K+ downloads"
    },
    {
      image: projectTelegram,
      number: "03",
      title: "Telegram Mini App",
      category: "Telegram Bot",
      description: "Gamified loyalty platform with rewards, leaderboards, and in-app payments via TON.",
      tech: ["Telegram API", "TON", "React"],
      result: "50K active users"
    }
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-minimal text-muted-foreground mb-4 block">SELECTED WORK</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-architectural">
              Portfolio
            </h2>
          </div>
          
          {/* Projects */}
          <div className="space-y-20 md:space-y-32">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="text-minimal text-white/70 bg-black/50 px-3 py-1 backdrop-blur-sm">
                      {project.number}
                    </span>
                  </div>
                </div>
                
                {/* Info */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="text-minimal text-muted-foreground mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-architectural mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <span className="text-minimal text-muted-foreground block mb-1">Result</span>
                      <span className="text-primary font-medium">{project.result}</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
