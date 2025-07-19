import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Wrench, Target } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Mechanical Engineering",
      description: "CAD modeling, product design, and system simulation"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Software Development", 
      description: "Python, Flask, C programming, and backend systems"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Analytics",
      description: "Data cleaning, SQL queries, and automated reporting"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Problem Solving",
      description: "Creative thinking, user focus, and cross field integration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am <span className="text-foreground font-semibold">Dickens Owuor</span>, an engineer and technology enthusiast from Nairobi, Kenya. My background spans mechanical systems, software development, and data interpretation. I enjoy exploring how physical design and digital intelligence can work together to solve important problems.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My tools include Python, SQL, SolidWorks, and Flask. I enjoy working on projects in mobility, energy, and healthcare. As a student in the ALX Data Science program, I am expanding my skills to include machine learning and advanced analytics, all with a focus on real impact.
              </p>

              {/* Improved Elevator Pitch */}
              <div className="bg-gradient-primary text-white p-6 rounded-xl shadow-glow border border-white/10">
                <h3 className="text-xl font-semibold mb-4 tracking-wide uppercase">Elevator Pitch</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  I combine engineering intuition with software logic and data precision to craft meaningful solutions. My strength lies in blending mechanical understanding with backend development and data storytelling. Whether optimizing systems or building tools for people, I work with empathy, creativity, and technical focus to deliver outcomes that matter.
                </p>
              </div>
            </div>
            
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl"></div>
                <img 
                  src="/uploads/0da387e9-9f3f-4a3c-9570-c7cce8d96db3.png"
                  alt="Dickens Owuor Professional"
                  className="relative w-80 h-96 object-cover rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
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
