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
              Digital Product Agency
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-architectural text-white mb-6 reveal">
            Build and ship digital products that scale
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-6 reveal-delayed">
            Web apps, mobile apps, and Telegram Mini Apps—designed and engineered for speed, reliability, and conversion.
          </p>
          
          <p className="text-base md:text-lg text-white/70 font-light max-w-xl mb-8 reveal-delayed">
            Rabitah is a remote-first product team for founders and growing companies. We take you from concept to launch, then iterate with clear priorities and measurable outcomes.
          </p>
          
          <p className="text-sm text-white/60 mb-2 reveal-delayed">Best for: MVPs, redesigns, and scaling existing products.</p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 reveal-delayed">
            <Button 
              asChild
              size="lg" 
              className="group text-sm px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/contact">
                Book a discovery call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <a 
              href="/work" 
              className="text-sm text-white/80 hover:text-white border-b border-white/40 hover:border-white transition-colors py-2"
            >
              View case studies
            </a>
          </div>
          
          <p className="text-xs text-white/50 mt-6 reveal-delayed">
            Trusted by 50+ teams • 150+ launches since 2019
          </p>
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
