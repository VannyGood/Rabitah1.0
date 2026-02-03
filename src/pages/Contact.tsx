import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 md:pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20">
              <div>
                <span className="text-minimal text-muted-foreground mb-4 block">GET IN TOUCH</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-8">
                  Let's Build
                  <br />
                  Something Great
                </h1>
                
                <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
                  Have a project in mind? We'd love to hear about it. 
                  Drop us a message and we'll get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-border flex items-center justify-center">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <span className="text-minimal text-muted-foreground block mb-1">Email</span>
                      <a href="mailto:hello@nexus.dev" className="hover:text-primary transition-colors">
                        hello@nexus.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-border flex items-center justify-center">
                      <Send className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <span className="text-minimal text-muted-foreground block mb-1">Telegram</span>
                      <a href="https://t.me/nexusdev" className="hover:text-primary transition-colors">
                        @nexusdev
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-minimal text-muted-foreground mb-2 block">Name</label>
                      <Input 
                        placeholder="Your name" 
                        className="border-border bg-transparent h-12"
                      />
                    </div>
                    <div>
                      <label className="text-minimal text-muted-foreground mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="border-border bg-transparent h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-minimal text-muted-foreground mb-2 block">Subject</label>
                    <Input 
                      placeholder="Project inquiry" 
                      className="border-border bg-transparent h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="text-minimal text-muted-foreground mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="border-border bg-transparent min-h-[150px] resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full sm:w-auto px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
