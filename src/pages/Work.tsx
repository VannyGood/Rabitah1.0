import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { workProjects, getProjectBySlug } from "@/data/workProjects";
import ProjectDetailContent from "@/components/ProjectDetailContent";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalSlug, setModalSlug] = useState<string | null>(null);

  const categories = ["All", "Web App", "Telegram"];

  const filteredProjects =
    activeCategory === "All"
      ? workProjects
      : workProjects.filter((project) => project.category === activeCategory);

  const projectInModal = modalSlug ? getProjectBySlug(modalSlug) : null;
  const modalOpen = !!modalSlug;

  const openModal = (slug: string) => {
    setModalSlug(slug);
  };

  const closeModal = () => {
    setModalSlug(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural mb-6">
                Case studies and product launches
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
                Real builds. Real outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Explore selected web, mobile, and Telegram products we've
                shipped—from MVPs to mature platforms. Each case study focuses on
                the problem, the solution, and measurable results.
              </p>
              <Button asChild className="mt-8">
                <Link to="/contact">Start a project brief</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-6">
              Filter by platform
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Choose a category to quickly find relevant work.
            </p>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                      activeCategory === category
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-architectural mb-12">
              Selected projects
            </h2>
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group cursor-pointer"
                  onClick={() => openModal(project.slug)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(project.slug);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} case study`}
                >
                  <div className="relative overflow-hidden mb-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {project.subtitle} · {project.location}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.oneLiner}
                    </p>
                    <p className="text-primary font-medium text-sm">
                      Outcome: {project.outcome}
                    </p>

                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">
                          Tech
                        </p>
                        <p className="text-foreground">{project.tech}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">
                          Year
                        </p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                      View case study
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Want results like these?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Send your goals and target date. We'll reply within 1 business day
              with next steps and a recommended approach.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Project detail modal: scrollable popup when a project is clicked */}
      <Dialog open={modalOpen} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden"
          onPointerDownOutside={closeModal}
          onEscapeKeyDown={closeModal}
        >
          <DialogTitle className="sr-only">
            {projectInModal?.title ?? "Project detail"}
          </DialogTitle>
            <div className="p-6 pb-8 overflow-y-auto flex-1">
              {projectInModal && (
                <ProjectDetailContent project={projectInModal} compact />
              )}
            </div>
            {projectInModal && (
              <div className="px-6 pb-6 pt-2 border-t border-border">
                <Link
                  to={`/work/${projectInModal.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Open as full page
                </Link>
              </div>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Work;
