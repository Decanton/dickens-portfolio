import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// EmailJS credentials
const SERVICE_ID = "service_3aq5xm9";
const TEMPLATE_ID = "template_uwxlq6w";
const PUBLIC_KEY = "HKFXOAyTguC1nkSH9";
const RESUME_URL = "https://drive.google.com/uc?export=download&id=1hOvoII8wakL_TCFXJCZAdVs6xG31_Om-";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,              // ✅ Must match EmailJS template
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString() // Optional: For {{time}}
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message Sent",
        description: "Thank you! I'll get back to you shortly."
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Error",
        description: "Message failed to send. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Downloaded",
      description: "Your download should begin shortly."
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Nairobi, Kenya"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "owuordickens0001@gmail.com",
      link: "mailto:owuordickens0001@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/dickens-owuor"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View my repositories",
      link: "https://github.com/decanton"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? I welcome opportunities in software development, data science, and problem-solving focused on real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm open to partnerships, freelance projects, and collaborative innovation. If you're working on something exciting or looking for a versatile contributor, I’d love to connect.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-background transition-colors"
                >
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href={RESUME_URL}
                onClick={handleResumeDownload}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white border-0">
                  <Download size={16} className="mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What’s this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your idea or opportunity here..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  <Send size={16} className="mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
