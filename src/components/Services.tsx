import { 
  Globe, 
  Smartphone, 
  MessageSquare, 
  Palette, 
  Code2, 
  Megaphone 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      icon: Globe,
      title: "Web Development",
      description: "High-performance websites and web applications. SEO-optimized, fast, and built to convert."
    },
    {
      number: "02",
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android apps that users love. From fintech to e-commerce, built to scale."
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Telegram Solutions",
      description: "Custom Mini Apps and bots that engage. Payments, games, communities — all integrated."
    },
    {
      number: "04",
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts. Intuitive interfaces backed by research."
    },
    {
      number: "05",
      icon: Code2,
      title: "Custom Software",
      description: "Tailored solutions for complex problems. APIs, automation, blockchain — we handle it."
    },
    {
      number: "06",
      icon: Megaphone,
      title: "Growth & Marketing",
      description: "Launch strategies that get results. Branding to digital marketing, we help you grow."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-minimal text-muted-foreground mb-4 block">SERVICES</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-6">
              Digital product development services
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Choose a lane—or let us scope the fastest path to launch. We design, build, and optimize products that are easy to use, fast to load, and ready to scale.
            </p>
            <a 
              href="/services" 
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Explore all services
            </a>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  <span className="text-minimal text-muted-foreground/50 mt-1">
                    {service.number}
                  </span>
                  <div>
                    <div className="w-10 h-10 mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      <service.icon className="w-full h-full stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-light mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
