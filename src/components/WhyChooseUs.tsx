import { Zap, Code2, TrendingUp, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Typical MVP launch: 4–8 weeks. We move quickly without compromising quality. Your project, launched on time."
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Scalable, maintainable code that grows with your business. No technical debt."
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "We focus on outcomes that matter. Conversions, engagement, growth."
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Transparent process with regular updates. You're always in the loop."
    },
    {
      icon: Shield,
      title: "Long-term Support",
      description: "We don't disappear after launch. Ongoing maintenance and improvements."
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-minimal text-muted-foreground mb-4 block">WHY RABITAH</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-6">
              Why teams choose Rabitah
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
              You get senior execution with a simple process: clear scope, weekly progress, and a product that's stable at launch. No surprises. No "black box" delivery.
            </p>
            <Button asChild size="sm" className="px-6">
              <a href="/contact">Start with a project scope call</a>
            </Button>
          </div>
          
          {/* Reasons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {reasons.map((reason, index) => (
              <div key={index} className="group">
                <div className="border-l-2 border-border group-hover:border-primary pl-6 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary mb-4 transition-colors duration-300" />
                  <h3 className="text-lg font-medium mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
