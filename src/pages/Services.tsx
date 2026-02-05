import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 md:pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20">
              <span className="text-minimal text-muted-foreground mb-4 block">WHAT WE DO</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-6">
                Digital product development services
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
                Design, engineering, and growth support—shipped with a clear process.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
                From MVP builds to complex integrations, we help teams launch faster and scale with confidence. Choose a service below, or contact us for a tailored scope.
              </p>
              <Button asChild>
                <Link to="/contact">Request a quote</Link>
              </Button>
            </div>
            
            <h2 className="text-2xl md:text-3xl text-architectural mb-6">Choose the right service</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
              Each service includes a clear scope, timeline, and deliverables. If you're unsure, we'll recommend the fastest path to launch after a short discovery call.
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {servicesData.map((service, index) => (
                <Link 
                  key={index} 
                  to={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground/50 mt-1">
                      {service.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        {service.subtitle} {service.description.slice(0, 120)}
                        {service.description.length > 120 ? "…" : ""}
                      </p>
                      {service.bestFor && (
                        <p className="text-sm text-muted-foreground/80">
                          Best for: {service.bestFor}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t border-border">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Compare timelines and starting budgets
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
