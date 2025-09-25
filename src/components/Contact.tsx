import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link
    const subject = formData.subject || "Portfolio Contact";
    const body = `Hi Praveen,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}`;
    const mailtoLink = `mailto:pp873093@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink);

    toast({
      title: "Email Client Opened",
      description: "Your email client should now be open with the pre-filled message.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gradient-accent">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="glass"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="glass"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="glass"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  required
                  className="glass resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:glow-primary transition-smooth py-6 text-lg"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="glass p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-gradient-accent">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:pp873093@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-smooth group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:glow-accent transition-smooth">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">pp873093@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Puducherry, India</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-gradient-accent">
                Connect with Me
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/Praveenredm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-smooth group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:glow-primary transition-smooth">
                    <Github className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">View my repositories</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/praveen-p-5a0182287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/10 transition-smooth group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:glow-accent transition-smooth">
                    <Linkedin className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Professional network</div>
                  </div>
                </a>
              </div>
            </Card>

            {/* Availability */}
            <Card className="glass p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-gradient-accent">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm">Open to internship opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm">Interested in collaborative projects</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-success/10 rounded-lg">
                <div className="text-sm text-success">
                  ⚡ Usually responds within 24 hours
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Prefer a quick message? Reach out directly through my social channels.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline"
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
              onClick={() => window.open("https://github.com/Praveenredm", "_blank")}
            >
              <Github size={20} className="mr-2" />
              GitHub
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:glow-primary transition-smooth"
              onClick={() => window.open("https://linkedin.com/in/praveen-p-5a0182287/", "_blank")}
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;