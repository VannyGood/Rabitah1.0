import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex flex-1 items-center justify-center px-6 py-32">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-6xl font-light text-architectural mb-6">
            Page not found
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
            Let's get you back on track.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            The page may have moved, or the link may be outdated. Use one of the options below to continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild>
              <Link to="/">Go to homepage</Link>
            </Button>
            <Link 
              to="/services" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View services
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Rabitah
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
