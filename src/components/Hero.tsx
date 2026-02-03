import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/nasa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <div className="mb-6 reveal">
            <span className="text-minimal text-white/70">
              Digital Agency
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-architectural text-white mb-8 reveal">
            We Build
            <br />
            Digital Products
            <br />
            <span className="text-primary">That Scale</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 font-light max-w-xl mb-12 reveal-delayed">
            From idea to launch — fast. Web apps, mobile apps, and custom software 
            built with precision and purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 reveal-delayed">
            <Button 
              asChild
              size="lg" 
              className="group text-sm px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="text-sm px-8 py-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="/work">View Our Work</a>
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-white/20 grid grid-cols-3 gap-8 max-w-lg reveal-delayed">
          <div>
            <div className="text-3xl md:text-4xl font-light text-white mb-1">150+</div>
            <div className="text-minimal text-white/50">Projects</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-white mb-1">50+</div>
            <div className="text-minimal text-white/50">Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-white mb-1">5+</div>
            <div className="text-minimal text-white/50">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
