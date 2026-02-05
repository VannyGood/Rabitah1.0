import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicesData } from "@/data/services";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-lg font-light tracking-tight">
          RABITAH<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="group flex items-center gap-0.5 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none data-[state=open]:text-foreground">
              Services
              <ChevronDown className="h-4 w-4 ml-0.5 opacity-70 transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[200px]">
              {servicesData.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <a href={`/services/${service.slug}`}>
                    {service.title.replace(/\s+/g, " ").trim()}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild className="border-t border-border mt-1 pt-1">
                <a href="/services">View all services</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild size="sm" className="px-6">
            <a href="/contact">Contact</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <div>
              <button
                type="button"
                className="flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors w-full"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l border-border">
                  {servicesData.map((service) => (
                    <a
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block text-base text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title.replace(/\s+/g, " ").trim()}
                    </a>
                  ))}
                  <a
                    href="/services"
                    className="block text-base text-muted-foreground hover:text-foreground transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View all services
                  </a>
                </div>
              )}
            </div>
            <a 
              href="/work" 
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="/about" 
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/blog" 
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            
            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full">
                <a href="/contact">Contact</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
