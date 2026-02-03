import { Github, Linkedin, Twitter, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = {
    services: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Telegram Solutions", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { label: "GitHub", href: "https://github.com", icon: Github },
      { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
      { label: "Twitter", href: "https://twitter.com", icon: Twitter },
      { label: "Telegram", href: "https://t.me", icon: Send },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="/" className="text-xl font-light tracking-tight inline-block mb-4">
                RABITAH<span className="text-primary">.</span>
              </a>
              <p className="text-secondary-foreground/60 text-sm mb-6 max-w-xs leading-relaxed">
                Building digital products that scale. 
                From idea to launch — fast.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {links.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-minimal mb-6">Services</h4>
              <ul className="space-y-3">
                {links.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-minimal mb-6">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-minimal mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-secondary-foreground/60">
                <p>
                  <a href="mailto:hello@rabitah.com" className="hover:text-primary transition-colors">
                    hello@rabitah.com
                  </a>
                </p>
                <p>
                  <a href="https://t.me/rabitah" className="hover:text-primary transition-colors">
                    @rabitah on Telegram
                  </a>
                </p>
                <p>Remote-first, Worldwide</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-secondary-foreground/40">
              © {currentYear} Rabitah. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-secondary-foreground/40">
              <a href="/privacy" className="hover:text-secondary-foreground transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-secondary-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
