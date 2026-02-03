const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Left Column */}
            <div>
              <span className="text-minimal text-secondary-foreground/60 mb-4 block">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-8">
                We're a Team of
                <br />
                <span className="text-primary">Builders</span>
              </h2>
              
              <div className="space-y-6 text-secondary-foreground/70">
                <p className="leading-relaxed">
                  We're a remote-first digital agency focused on building products that matter. 
                  No fluff, no unnecessary features — just clean, functional software that solves real problems.
                </p>
                
                <p className="leading-relaxed">
                  Founded in 2019, we've shipped over 150 projects for startups and established businesses 
                  across fintech, e-commerce, SaaS, and web3.
                </p>
              </div>
            </div>
            
            {/* Right Column - Stats & Approach */}
            <div className="space-y-12">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-4xl md:text-5xl font-light text-secondary-foreground mb-2">150+</div>
                  <span className="text-minimal text-secondary-foreground/50">Projects Delivered</span>
                </div>
                <div className="border-l-2 border-secondary-foreground/20 pl-6">
                  <div className="text-4xl md:text-5xl font-light text-secondary-foreground mb-2">50+</div>
                  <span className="text-minimal text-secondary-foreground/50">Happy Clients</span>
                </div>
                <div className="border-l-2 border-secondary-foreground/20 pl-6">
                  <div className="text-4xl md:text-5xl font-light text-secondary-foreground mb-2">5+</div>
                  <span className="text-minimal text-secondary-foreground/50">Years Experience</span>
                </div>
                <div className="border-l-2 border-secondary-foreground/20 pl-6">
                  <div className="text-4xl md:text-5xl font-light text-secondary-foreground mb-2">100%</div>
                  <span className="text-minimal text-secondary-foreground/50">Remote Team</span>
                </div>
              </div>
              
              {/* Approach */}
              <div className="pt-8 border-t border-secondary-foreground/10">
                <span className="text-minimal text-secondary-foreground/60 mb-4 block">Our Approach</span>
                <ul className="space-y-3 text-secondary-foreground/70">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Understand first, build second
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Ship fast, iterate faster
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Code quality over shortcuts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
