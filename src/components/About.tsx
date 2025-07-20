import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Wrench, Target } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Mechanical Engineering",
      description:
        "System design, fluid-thermal analysis, CAD modeling, and control systems"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      description:
        "Python, C, Flask, Express.js, Django, and RESTful API design"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Analytics",
      description:
        "SQL, Python (Pandas), Tableau, Excel automation, and visualization"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Adaptability & Collaboration",
      description:
        "Teamwork, iterative problem-solving, continuous learning, and cross-domain thinking"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          {/* Bio and Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I’m <span className="text-foreground font-semibold">Dickens Owuor</span>, a mechanical engineering graduate now focused on software engineering and data science. Based in Nairobi, Kenya, I bring together the analytical mindset of an engineer with the adaptability of a developer to craft purposeful, data-backed solutions.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My academic foundation, rooted in mechanics, thermodynamics, materials science, and control systems, continues to shape how I approach challenges. I later transitioned into backend-focused development, working with tools like Python, Flask, Express.js, and Django, and expanded into data analytics through tools like SQL, Pandas, Tableau, and Excel. Currently enrolled in the ALX Data Science program, I’m deepening my knowledge in machine learning and ethical AI, driven by insights gained from software engineering and analytics.
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl"></div>
                <img
                  src="/uploads/0da387e9-9f3f-4a3c-9570-c7cce8d96db3.png"
                  alt="Dickens Owuor Professional"
                  className="relative w-full h-[20rem] sm:h-[22rem] object-cover object-top rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>

          {/* Elevator Pitch */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-primary text-white px-10 py-10 rounded-2xl shadow-glow border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 tracking-wide uppercase text-center">
                Elevator Pitch
              </h3>
              <p className="leading-relaxed text-base sm:text-lg text-center max-w-3xl mx-auto">
                I approach challenges at the intersection of engineering, code, and analytics, where physical insight meets digital logic and data clarity. Whether I’m simulating thermofluid systems, structuring backend services, or uncovering insights from messy data, I bring critical thinking, flexibility, and systems awareness to the table. I'm eager to contribute to projects that demand cross-functional collaboration and deliver scalable, UCD solutions.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
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
