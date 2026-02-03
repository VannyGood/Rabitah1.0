import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-8">
                  We Build Digital
                  <br />
                  Products That Scale
                </h1>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed">
                    We're a remote-first digital agency focused on building products that matter. 
                    No fluff, no unnecessary features — just clean, functional software that solves real problems.
                  </p>
                  
                  <p className="leading-relaxed">
                    Founded in 2019, we've shipped over 150 projects for startups and established 
                    businesses across fintech, e-commerce, SaaS, and web3. Our team spans multiple 
                    time zones, bringing diverse perspectives to every project.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <span className="text-minimal text-muted-foreground mb-6 block">APPROACH</span>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-6">
                      <h4 className="text-lg font-medium mb-2">Understand First</h4>
                      <p className="text-muted-foreground text-sm">Deep understanding of your goals, users, and constraints</p>
                    </div>
                    <div className="border-l-2 border-border pl-6">
                      <h4 className="text-lg font-medium mb-2">Build Fast</h4>
                      <p className="text-muted-foreground text-sm">Rapid prototyping and iterative development</p>
                    </div>
                    <div className="border-l-2 border-border pl-6">
                      <h4 className="text-lg font-medium mb-2">Ship Quality</h4>
                      <p className="text-muted-foreground text-sm">Clean code, tested features, production-ready</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
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
