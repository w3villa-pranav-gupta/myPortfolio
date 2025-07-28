import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-900 border-t border-border/50">
      {/* Scroll to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-glow"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Pranav Gupta</h3>
            <p className="text-muted-foreground">
              Software Developer & Problem Solver
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Let's build something amazing together
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/pranavgupta022"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranavgupta022"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pranavgupta022@gmail.com"
                className="p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Pranav
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;