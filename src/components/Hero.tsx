import { Github, Linkedin, Mail, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Shuttle Animation */}
      <div className="absolute top-10 left-0 w-8 h-8 text-primary/30 animate-shuttle">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M9.5 2L4 7l2 2 3-3v12l3-3-2-2 5.5-5.5z"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-primary p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center">
              <span className="text-5xl font-bold gradient-text">PG</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
            <span className="gradient-text">PRANAV</span>
            <br />
            <span className="text-foreground">GUPTA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Software Developer Trainee at W3Villa Technologies
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            B.Tech CS Graduate 2025 | Building responsive web applications and innovative solutions
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button variant="outline" size="lg" className="group hover:bg-primary/10 hover:border-primary">
              <Mail className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              <a href="mailto:pranavgupta022@gmail.com">Email</a>
            </Button>
            
            <Button variant="outline" size="lg" className="group hover:bg-primary/10 hover:border-primary">
              <Github className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              <a href="https://github.com/pranavgupta022" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
            
            <Button variant="outline" size="lg" className="group hover:bg-primary/10 hover:border-primary">
              <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              <a href="https://www.linkedin.com/in/pranavgupta022" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            
            <Button variant="outline" size="lg" className="group hover:bg-primary/10 hover:border-primary">
              <Code className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              <a href="https://leetcode.com/u/pranavgupta022/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            
            <Button variant="outline" size="lg" className="hover:bg-white/5">
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;