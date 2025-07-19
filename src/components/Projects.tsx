import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Car, Droplets, Home, Terminal, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EV Dashboard Design",
      year: "2025",
      role: "Product Designer",
      description: "Designed an ergonomic electric vehicle dashboard using SolidWorks with a focus on user experience, safety, and manufacturability.",
      outcome: "Delivered a high-fidelity prototype ready for real-world integration in electric vehicles, addressing driver comfort and usability.",
      icon: <Car className="w-6 h-6" />,
      tags: ["SolidWorks", "Product Design", "Ergonomics", "CAD"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Low-Flush Toilet Design",
      year: "2024",
      role: "Mechanical Design Lead",
      description: "Engineered a sustainable low-flush toilet concept aimed at reducing water consumption while maintaining effective waste clearance.",
      outcome: "Proposed a viable prototype for use in underserved regions, addressing water scarcity and promoting eco-responsible sanitation.",
      icon: <Droplets className="w-6 h-6" />,
      tags: ["CAD", "Sustainability", "Fluid Mechanics", "Design Thinking"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Airbnb Console Clone",
      year: "2024",
      role: "Backend Developer",
      description: "Built a command-line application in Python that mimics Airbnb’s property rental logic using object-oriented principles.",
      outcome: "Reinforced back-end skills in file management, CLI interactions, and application logic through an end-to-end mini-platform.",
      icon: <Home className="w-6 h-6" />,
      tags: ["Python", "OOP", "CLI", "Backend"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Decanton/AirBnB_clone"
    },
    {
      title: "Unix Shell in C",
      year: "2023",
      role: "Systems Programmer",
      description: "Programmed a Unix-style shell from scratch in C, including features like I/O redirection, piping, and command parsing.",
      outcome: "Demonstrated low-level proficiency in memory management and process handling using C programming fundamentals.",
      icon: <Terminal className="w-6 h-6" />,
      tags: ["C", "Systems Programming", "Unix", "Shell"],
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/Decanton/simple_shell"
    },
    {
      title: "Custom Printf Function",
      year: "2023",
      role: "Low-Level Developer",
      description: "Reimplemented the core logic behind C’s printf function, including parsing of format specifiers and variadic arguments.",
      outcome: "Gained in-depth experience with string manipulation, memory allocation, and error handling using C language.",
      icon: <Code className="w-6 h-6" />,
      tags: ["C", "Low-Level", "String Handling", "Pointers"],
      gradient: "from-indigo-500 to-blue-500",
      github: "https://github.com/Decanton/printf"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in mechanical systems, back-end development, and data-driven problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4`}
                >
                  {project.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{project.year}</Badge>
                  <span className="text-sm text-muted-foreground">{project.role}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-primary mb-1">Outcome:</p>
                  <p className="text-sm">{project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.github && (
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button size="sm" variant="outline" className="w-full justify-center">
                        <Github size={16} className="mr-2" />
                        View Code
                      </Button>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
