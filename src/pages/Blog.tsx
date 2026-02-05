import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural mb-6">
                What clients say about us
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Real feedback from teams we've built products with—startups, scale-ups, and established brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="p-8 border border-border bg-background hover:border-primary/30 transition-colors duration-300 flex flex-col"
                >
                  <Quote className="w-8 h-8 text-primary/40 mb-6" />
                  <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div className="pt-6 border-t border-border">
                    <p className="font-medium text-foreground">{t.clientName}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                    <p className="text-xs text-primary mt-2">{t.projectType}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-light text-architectural mb-6">
              Ready to be next?
            </h2>
            <p className="text-muted-foreground mb-10">
              Join the teams who ship with Rabitah. Tell us your goal and we'll reply within 1 business day.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
