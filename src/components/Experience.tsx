import { Briefcase, Calendar, MapPin, ExternalLink, Code, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experience = {
    company: "W3Villa Technologies",
    position: "Software Developer Trainee",
    location: "Onsite",
    duration: "January 2025 - Present",
    type: "Training",
    description: "Comprehensive software development training program focusing on modern web technologies and industry best practices.",
    responsibilities: [
      "Building responsive web applications and mini projects using modern frameworks",
      "Working with technologies like BrainBase, Past-NoteSaver, and landing pages",
      "Utilizing HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap",
      "Implementing full-stack features with Python and SQL database operations",
      "Developing CRM AI Agent for query automation using Google ADK",
      "Integrating FAISS-based semantic search for real-time data retrieval",
      "Building multi-platform solutions with React Native for mobile applications"
    ],
    technologies: ["React.js", "JavaScript", "Python", "SQL", "Tailwind CSS", "Bootstrap", "React Native", "Google ADK", "FAISS"],
    highlights: [
      "Successfully completed multiple full-stack projects during training",
      "Gained expertise in modern web development frameworks",
      "Implemented AI-powered solutions for business automation",
      "Developed mobile applications using React Native"
    ]
  };

  const projects = [
    {
      name: "BrainBase",
      description: "Knowledge management platform with collaborative features",
      technologies: ["React.js", "Node.js", "MongoDB"]
    },
    {
      name: "Past-NoteSaver",
      description: "Note-taking application with advanced search capabilities",
      technologies: ["JavaScript", "HTML/CSS", "Local Storage"]
    },
    {
      name: "CRM AI Agent",
      description: "Automated query processing system with Google ADK integration",
      technologies: ["Python", "Google ADK", "FAISS", "AI/ML"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the skills I've gained along the way
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="hover:shadow-elegant transition-all duration-500 bg-gradient-card border-border/50 overflow-hidden">
            <CardHeader className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{experience.position}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{experience.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {experience.type}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {experience.description}
              </p>

              {/* Key Responsibilities */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Key Responsibilities & Projects
                </h4>
                <div className="grid gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {experience.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Projects */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Training Projects</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{project.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-primary">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;