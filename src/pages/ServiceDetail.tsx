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
                {service.bestFor && (
                  <p className="text-sm text-muted-foreground/80 mt-2">
                    Best for: {service.bestFor}
                  </p>
                )}
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {service.description}
            </p>
            
            <Button asChild>
              <Link to="/contact">Get a quote for this service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-architectural mb-4">What's included</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              You get the essentials for a strong launch—product UX, engineering, and the foundations for performance and growth.
            </p>
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
            <h2 className="text-2xl md:text-3xl text-architectural mb-4">A simple process that keeps you in control</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Each step ends with a clear deliverable—so you always know what's done, what's next, and what decisions you need to make.
            </p>
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
            <h2 className="text-2xl md:text-3xl text-architectural mb-12">Timeline and starting budget</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Timeline */}
              <div className="p-8 bg-background border border-border">
                <span className="text-minimal text-muted-foreground mb-4 block">TIMELINE</span>
                <p className="text-4xl md:text-5xl font-light text-foreground mb-4">
                  {service.timeline}
                </p>
                <p className="text-muted-foreground mb-2">
                  Typical project duration from kickoff to launch
                </p>
                <p className="text-sm text-muted-foreground/80">
                  Includes: design (if needed), development, QA, launch support.
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
                <p className="text-sm text-muted-foreground/80 mt-2">
                  We price based on scope, complexity, and speed. After a short call, you'll receive a clear estimate with milestones and deliverables.
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
              Let's scope this in one call
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Tell us what you're building and your target date. We'll propose the fastest path to launch, plus options if you want to phase the work.
            </p>
            <p className="text-sm text-muted-foreground/80 mb-8">Reply in 1 business day.</p>
            <Button asChild size="lg" className="px-8">
              <Link to="/contact">Book a service call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation between services */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link 
              to="/services" 
              className="text-sm font-medium text-primary hover:underline"
            >
              View all services
            </Link>
            <div className="flex gap-8">
              {prevService ? (
                <Link 
                  to={`/services/${prevService.slug}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <span className="text-minimal block">Previous</span>
                    <span className="text-foreground">{prevService.title}</span>
                  </div>
                </Link>
              ) : null}
              {nextService ? (
                <Link 
                  to={`/services/${nextService.slug}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                >
                  <div>
                    <span className="text-minimal block">Next</span>
                    <span className="text-foreground">{nextService.title}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
