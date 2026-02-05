import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { WorkProject } from "@/data/workProjects";

interface ProjectDetailContentProps {
  project: WorkProject;
  /** When true, use compact spacing for modal; when false, use full page spacing */
  compact?: boolean;
}

const ProjectDetailContent = ({ project, compact = false }: ProjectDetailContentProps) => {
  const containerClass = compact ? "space-y-6" : "space-y-10 md:space-y-14";

  return (
    <div className={containerClass}>
      <div className="relative overflow-hidden rounded-sm bg-muted/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[50vh] object-cover"
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2">
          <span className="text-minimal text-foreground">{project.category}</span>
        </div>
      </div>

      <div>
        <p className="text-minimal text-muted-foreground mb-2">
          {project.subtitle} · {project.location}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-architectural mb-4">
          {project.title}
        </h1>
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{project.oneLiner}</p>
        <p className="text-muted-foreground leading-relaxed">{project.whatWeBuilt}</p>
        <p className="text-primary font-medium">Outcome: {project.outcome}</p>
      </div>

      <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
        <div>
          <p className="text-minimal text-muted-foreground mb-1">Tech</p>
          <p className="text-foreground">{project.tech}</p>
        </div>
        <div>
          <p className="text-minimal text-muted-foreground mb-1">Year</p>
          <p className="text-foreground">{project.year}</p>
        </div>
      </div>

      <div className="pt-4">
        <Button asChild>
          <Link to="/contact">Request a similar build</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetailContent;
