import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
    transition: "transform 0.2s ease-out"
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_center,_#0f0f0f,_#1e1e1e)]"
    >
      {/* Parallax Circles */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-accent rounded-full"
          style={parallaxStyle}
        ></div>
        <div
          className="absolute bottom-40 right-32 w-24 h-24 border border-accent/40 rounded-full"
          style={parallaxStyle}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-16 h-16 border border-accent/20 rounded-full"
          style={parallaxStyle}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-white animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-accent" />
              <span className="text-white/80">Nairobi, Kenya</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bridging Engineering, Code, and Data to Build Purposeful Solutions.
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              I design and develop meaningful digital and physical systems, from intuitive web tools to efficient hardware, rooted in empathy and engineered for impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/dickens-owuor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white border-0 shadow-glow"
                >
                  Let's Connect
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => {
                  const section = document.getElementById("projects");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="mailto:owuordickens0001@gmail.com"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Email Dickens"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/dickens-owuor"
                className="text-white/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/decanton"
                className="text-white/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl"></div>
              <img
                src="/uploads/998bc194-c7e4-4f67-ba61-824fffc553bf.png"
                alt="Dickens Owuor"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
