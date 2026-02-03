import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getServiceBySlug, servicesData } from "@/data/services";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl text-architectural mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Find previous and next services
  const currentIndex = servicesData.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-minimal">BACK TO SERVICES</span>
            </Link>
            
            <div className="flex items-start gap-6 mb-8">
              <span className="text-6xl md:text-8xl font-light text-muted-foreground/20">
                {service.number}
              </span>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {service.subtitle}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-architectural mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-architectural mb-12">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <span className="text-5xl font-light text-primary/20 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-light mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Pricing Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Timeline */}
              <div className="p-8 bg-background border border-border">
                <span className="text-minimal text-muted-foreground mb-4 block">TIMELINE</span>
                <p className="text-4xl md:text-5xl font-light text-foreground mb-4">
                  {service.timeline}
                </p>
                <p className="text-muted-foreground">
                  Typical project duration from kickoff to launch
                </p>
              </div>
              
              {/* Pricing */}
              <div className="p-8 bg-background border border-border">
                <span className="text-minimal text-muted-foreground mb-4 block">STARTING AT</span>
                <p className="text-4xl md:text-5xl font-light text-foreground mb-4">
                  {service.pricing.starting}
                </p>
                <p className="text-muted-foreground">
                  {service.pricing.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-architectural mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Button asChild size="lg" className="px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation between services */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {prevService ? (
              <Link 
                to={`/services/${prevService.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-minimal block">PREVIOUS</span>
                  <span className="text-foreground">{prevService.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextService ? (
              <Link 
                to={`/services/${nextService.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                <div>
                  <span className="text-minimal block">NEXT</span>
                  <span className="text-foreground">{nextService.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
