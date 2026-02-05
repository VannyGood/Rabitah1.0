import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProjectBySlug } from "@/data/workProjects";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const WorkProject = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl text-architectural mb-4">Project not found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/work">Back to Work</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <article className="pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-minimal">Back to Work</span>
            </Link>
            <ProjectDetailContent project={project} compact={false} />
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default WorkProject;
