import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 md:pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20">
              <span className="text-minimal text-muted-foreground mb-4 block">WHAT WE DO</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-architectural">
                Services
              </h1>
            </div>
            
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
                      <p className="text-muted-foreground leading-relaxed">
                        {service.subtitle}. {service.description.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
