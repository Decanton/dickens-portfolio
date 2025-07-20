import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Car,
  Droplets,
  Home,
  Terminal,
  Code,
  ShoppingCart,
  Briefcase
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EV Dashboard Design",
      year: "2025",
      role: "Product Designer",
      description:
        "Designed an ergonomic electric vehicle dashboard using SolidWorks with a focus on user experience, safety, and manufacturability.",
      outcome:
        "Delivered a high-fidelity prototype ready for real-world integration in electric vehicles, addressing driver comfort and usability.",
      icon: <Car className="w-6 h-6" />,
      tags: ["SolidWorks", "Product Design", "Ergonomics", "CAD"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Low-Flush Toilet Design",
      year: "2024",
      role: "Mechanical Design Lead",
      description:
        "Engineered a sustainable low-flush toilet concept aimed at reducing water consumption while maintaining effective waste clearance.",
      outcome:
        "Proposed a viable prototype for use in underserved regions, addressing water scarcity and promoting eco-responsible sanitation.",
      icon: <Droplets className="w-6 h-6" />,
      tags: ["CAD", "Sustainability", "Fluid Mechanics", "Design Thinking"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Airbnb Console Clone",
      year: "2024",
      role: "Backend Developer",
      description:
        "Built a command-line application in Python that mimics Airbnb’s property rental logic using object-oriented principles.",
      outcome:
        "Reinforced backend skills in file management, CLI interactions, and application logic through an end-to-end mini-platform.",
      icon: <Home className="w-6 h-6" />,
      tags: ["Python", "OOP", "CLI", "Backend"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Decanton/AirBnB_clone"
    },
    {
      title: "Unix Shell in C",
      year: "2023",
      role: "Systems Programmer",
      description:
        "Programmed a Unix-style shell from scratch in C, including features like I/O redirection, piping, and command parsing.",
      outcome:
        "Demonstrated low-level proficiency in memory management and process handling using C programming fundamentals.",
      icon: <Terminal className="w-6 h-6" />,
      tags: ["C", "Systems Programming", "Unix", "Shell"],
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/Decanton/simple_shell"
    },
    {
      title: "Custom Printf Function",
      year: "2023",
      role: "Low-Level Developer",
      description:
        "Reimplemented the core logic behind C’s printf function, including parsing of format specifiers and variadic arguments.",
      outcome:
        "Gained in-depth experience with string manipulation, memory allocation, and error handling using C language.",
      icon: <Code className="w-6 h-6" />,
      tags: ["C", "Low-Level", "String Handling", "Pointers"],
      gradient: "from-indigo-500 to-blue-500",
      github: "https://github.com/Decanton/printf"
    },
    {
      title: "E-commerce Web Platform",
      year: "2024",
      role: "Full-Stack Developer",
      description:
        "Built a responsive and scalable e-commerce platform with full cart functionality, user authentication, payment integration, and an admin dashboard for managing orders and inventory.",
      outcome:
        "Enabled a complete buying experience with admin tools for product and user management. Demonstrated capabilities in React, Node.js, and MongoDB stack.",
      icon: <ShoppingCart className="w-6 h-6" />,
      tags: ["React", "Node.js", "MongoDB", "REST API", "Admin Panel"],
      gradient: "from-yellow-500 to-orange-500",
      github: "https://github.com/Decanton/ecommerce-platform"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Graduated with BSc in Mechanical Engineering, University of Nairobi",
      description:
        "Completed a rigorous engineering program with a focus on energy systems, product design, and sustainable technology. This experience sharpened my problem-solving mindset and introduced me to CAD, SolidWorks, and engineering simulations."
    },
    {
      year: "2023",
      title: "ALX Software Engineering Program",
      description:
        "Built robust backend applications in C and Python, including a custom Unix shell and command-line tools. Gained hands-on experience in Git, Linux, REST APIs, and systems programming."
    },
    {
      year: "2024",
      title: "Denaco Data Analytics Program",
      description:
        "Developed strong skills in SQL, Excel, Python, and Tableau. Specialized in data storytelling, process optimization, and generating actionable insights from raw data."
    },
    {
      year: "2025",
      title: "ALX Data Science Program (Ongoing)",
      description:
        "Currently learning supervised and unsupervised machine learning, data preprocessing, and model deployment. Exploring ethical AI and real-world data science pipelines."
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">

        {/* Experience & Motivation */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-secondary/10 border-none shadow-none">
            <CardHeader>
              <div className="flex items-center gap-4 text-primary mb-4">
                <Briefcase className="w-6 h-6" />
                <h3 className="text-2xl font-semibold">Experience & Motivation</h3>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 leading-relaxed text-base">
              <p>
  My journey began with a deep interest in how physical systems operate, from the intricacies of machine dynamics to the principles behind sustainable energy use. Studying mechanical engineering gave me a solid technical foundation, but it also ignited a broader curiosity: how data and code could further optimize, automate, and extend these systems into smarter solutions. Over time, that curiosity evolved into a passion for software engineering and data science, disciplines that allow me to merge analytical thinking with real-world impact. Through projects that span design, development, and performance analysis, I’ve come to appreciate how powerful technology becomes when it’s guided by systems-level insight and built for human-centered outcomes.
</p>
<p>
  Today, I thrive at the intersection of engineering and innovation. Whether I’m prototyping a mechanical device, building backend architectures, or drawing insights from raw data, I bring a structured, outcome-driven mindset to everything I do. I believe the best solutions are not just functional, they’re intentional, ethical, and thoughtfully designed. I’m now seeking full-time roles or collaborative research opportunities that challenge me to grow technically while contributing to projects with purpose, especially those focused on social impact, innovation, and continuous learning.
</p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h4 className="text-xl font-semibold text-center mb-8 text-primary">
            Professional Timeline
          </h4>
          <div className="relative before:absolute before:top-0 before:bottom-0 before:left-4 before:w-1 before:bg-primary/40">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 relative">
                <div className="z-10 flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {item.year}
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in mechanical systems, back-end development, and data-driven problem-solving.
          </p>
        </div>

        {/* Projects List */}
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
                <div className="flex gap-2 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full justify-center">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full justify-center">
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
