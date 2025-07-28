import { GraduationCap, MapPin, Calendar, Award, Users, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "B.Tech in Computer Science & Engineering",
      detail: "Pranveer Singh Institute of Technology • 8.1 SGPA • 2021-2025"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Current Role",
      description: "Software Developer Trainee",
      detail: "W3Villa Technologies • January 2025 - Present"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Vice President - Algo Club",
      detail: "Leading coding community with 200+ members"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievements",
      description: "3 Star Overall at GFG",
      detail: "1100+ problems solved across platforms"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative solutions and contributing to the tech community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello, I'm Pranav! 👋</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate B.Tech Computer Science graduate specializing in full-stack web development. 
                Currently working as a Software Developer Trainee at W3Villa Technologies, where I'm building 
                responsive web applications and exploring cutting-edge technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in modern web technologies like React.js, Node.js, and Python, I enjoy creating 
                solutions that make a real impact. I've led tech communities, solved 1100+ coding problems, 
                and built projects ranging from AI-powered applications to real-time chat systems.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kanpur, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Available for full-time opportunities</span>
              </div>
            </div>

            {/* Coursework */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Operating Systems", "DBMS", "Object Oriented Programming"].map((course) => (
                  <span key={course} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground mb-1">{item.description}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
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

export default About;