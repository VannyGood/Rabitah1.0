import { ArrowUpRight } from "lucide-react";
import { workProjects } from "@/data/workProjects";

const Portfolio = () => {
  const projects = workProjects.slice(0, 3).map((p, i) => ({
    slug: p.slug,
    image: p.image,
    number: `0${i + 1}`,
    title: p.title,
    category: p.category,
    description: p.oneLiner,
    tech: p.tech.split(", "),
    result: p.outcome
  }));

  return (
    <section id="work" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-minimal text-muted-foreground mb-4 block">SELECTED WORK</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-6">
              Selected work and outcomes
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
              A few examples of products we've designed and built—focused on performance, usability, and real business results.
            </p>
            <a 
              href="/work" 
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all work
            </a>
          </div>
          
          {/* Projects */}
          <div className="space-y-20 md:space-y-32">
            {projects.map((project, index) => (
              <div 
                key={project.slug} 
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
                    <a href="/contact" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                      Request a similar build
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
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
