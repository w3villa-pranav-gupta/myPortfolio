import { Code2, Database, Globe, Wrench, GitBranch, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-500" },
        { name: "Python", level: 85, color: "from-blue-400 to-blue-500" },
        { name: "C/C++", level: 80, color: "from-purple-400 to-purple-500" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 88, color: "from-cyan-400 to-cyan-500" },
        { name: "Node.js", level: 82, color: "from-green-400 to-green-500" },
        { name: "HTML/CSS", level: 92, color: "from-orange-400 to-orange-500" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-500" }
      ]
    },
    {
      title: "Databases & Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 80, color: "from-green-500 to-emerald-500" },
        { name: "MySQL", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "Express.js", level: 78, color: "from-gray-500 to-gray-600" },
        { name: "REST APIs", level: 85, color: "from-indigo-400 to-indigo-500" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub", level: 85, color: "from-gray-700 to-gray-800" },
        { name: "Bootstrap", level: 80, color: "from-purple-500 to-purple-600" },
        { name: "TensorFlow", level: 70, color: "from-orange-500 to-red-500" },
        { name: "Keras", level: 68, color: "from-red-400 to-red-500" }
      ]
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "3 Star Overall at GFG",
      description: "Top performer in competitive programming"
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "1100+ Problems Solved",
      description: "Across LeetCode, GFG, and other platforms"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Multiple Certifications",
      description: "Web Development, Data Structures & Algorithms"
    }
  ];

  const certifications = [
    "Data Structure and Algorithm Master Course, CodeHelp (02/2023 - 01/2024)",
    "The Complete 2023 Web Development Bootcamp, Udemy (05/2023 - 01/2024)",
    "Completed 5 Coursework of Python on Geeks Board"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional achievements
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border/50 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;