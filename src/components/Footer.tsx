import { Github, Linkedin, Mail, MessageSquareText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:owuordickens0001@gmail.com?subject=Let’s Connect&body=Hi Dickens,"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Dickens"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dickens-owuor"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/decanton"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://wa.me/254706921015"
              className="hover:text-green-600 transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquareText size={24} className="text-green-500" />
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-muted-foreground">
            <p className="text-sm">
              Software crafted with purpose, solving real-world problems through clean code and design.
            </p>
            <p className="text-sm mt-2">
              &copy; {currentYear} Dickens Owuor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
