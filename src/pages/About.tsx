import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 md:pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
              <div>
                <span className="text-minimal text-muted-foreground mb-4 block">ABOUT</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-6">
                  A product team built for shipping
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Senior design and engineering, delivered with a clear process.
                </p>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed">
                    Rabitah is a remote-first digital product agency. We help teams launch, improve, and scale products with disciplined scope, clear communication, and production-ready quality.
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    150+ projects shipped since 2019.
                  </p>
                </div>
                <Button asChild className="mt-8">
                  <Link to="/#approach">See our process</Link>
                </Button>
              </div>
              
              <div className="space-y-12">
                <div>
                  <span className="text-minimal text-muted-foreground mb-6 block">HOW WE WORK</span>
                  <h2 className="text-2xl text-architectural mb-6">How we work</h2>
                  <p className="text-muted-foreground mb-8">
                    We keep delivery simple and transparent:
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-6">
                      <h3 className="text-lg font-medium mb-2">Align</h3>
                      <p className="text-muted-foreground text-sm">Understand goals, users, constraints, and success metrics</p>
                    </div>
                    <div className="border-l-2 border-border pl-6">
                      <h3 className="text-lg font-medium mb-2">Ship</h3>
                      <p className="text-muted-foreground text-sm">Ship in weekly increments with clear priorities</p>
                    </div>
                    <div className="border-l-2 border-border pl-6">
                      <h3 className="text-lg font-medium mb-2">Optimize</h3>
                      <p className="text-muted-foreground text-sm">Measure, iterate, and keep performance high</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-8">
                    <Link to="/contact">Book a discovery call</Link>
                  </Button>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <h2 className="text-2xl text-architectural mb-4">Proof you can trust</h2>
                  <p className="text-muted-foreground mb-8">
                    150+ launches across SaaS, fintech, e-commerce, and community products. Remote-first team working across time zones.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="text-minimal text-muted-foreground mb-2 block">FOUNDED</span>
                      <p className="text-2xl font-light">2019</p>
                    </div>
                    <div>
                      <span className="text-minimal text-muted-foreground mb-2 block">PROJECTS</span>
                      <p className="text-2xl font-light">150+</p>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-6"
                  >
                    Talk to the team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
