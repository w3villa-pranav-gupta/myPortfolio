import { ExternalLink, Github, Brain, MessageCircle, Trophy, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DeepPneumoAI",
      subtitle: "Pneumonia Detection System",
      description: "Machine learning powered system for early detection of pneumonia from chest X-ray images. Uses advanced CNN architecture to analyze medical images and provide probability scores for accurate diagnosis.",
      icon: <Stethoscope className="w-6 h-6" />,
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      features: [
        "Chest X-ray image analysis using deep learning",
        "Convolutional neural network for pattern recognition", 
        "Real-time probability scoring for diagnosis",
        "Medical-grade accuracy for healthcare applications"
      ],
      liveDemo: "#",
      github: "#",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      title: "Talk-A-Tive",
      subtitle: "Real-time Chat Application",
      description: "Modern web chat application with real-time messaging, group conversations, and secure user authentication. Built with Socket.io for instant communication and MongoDB for data persistence.",
      icon: <MessageCircle className="w-6 h-6" />,
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
      features: [
        "One-on-one and group messaging capabilities",
        "Real-time message delivery with Socket.io",
        "Secure user authentication and session management",
        "Admin controls for group management"
      ],
      liveDemo: "#",
      github: "https://github.com/pranavgupta022/TALK-A-TIVE",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "BrainBash",
      subtitle: "Interactive Quiz Platform",
      description: "Dynamic quiz application with topic selection, difficulty levels, and real-time scoring. Features an interactive interface with comprehensive analytics and progress tracking.",
      icon: <Trophy className="w-6 h-6" />,
      technologies: ["HTML", "CSS", "JavaScript", "Open Trivia DB API"],
      features: [
        "Dynamic quiz generation with multiple topics",
        "Difficulty level selection and adaptive questioning", 
        "Real-time answer validation and scoring",
        "Progress tracking and performance analytics"
      ],
      liveDemo: "#",
      github: "https://github.com/pranavgupta022/Brainbash-quizapp",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Telegram Quiz Bot",
      subtitle: "Automated Technical Quiz Bot",
      description: "Intelligent Telegram bot that sends technical quiz questions every 2 hours using Gemini AI. Features automated question generation, poll-based quizzes, and ensures unique questions with smart randomization across multiple tech topics.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Python", "Telegram Bot API", "Gemini AI", "Schedule", "Asyncio"],
      features: [
        "Automated quiz delivery every 2 hours with real-time polls",
        "Gemini AI integration for unique question generation",
        "Smart randomization avoiding last 24 questions",
        "Covers DBMS, OS, DSA, React, JavaScript, Python, C++ topics"
      ],
      liveDemo: "#",
      github: "https://github.com/pranavgupta022/telegram-bot",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, machine learning, and software engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-elegant transition-all duration-500 bg-gradient-card border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-white/5" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-white/5">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;