import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, MessageCircle, Shield } from "lucide-react";

const projects = [
  {
    title: "Smart Note Sharing App",
    description: "A chat-style document sharing application that revolutionizes how students and professionals share and collaborate on notes. Features real-time messaging, file sharing, and intelligent organization.",
    tech: ["React Native", "Firebase", "Real-time Database", "Authentication", "Cloud Storage"],
    features: [
      "Real-time chat functionality",
      "Document upload & sharing",
      "User authentication & profiles",
      "Smart categorization",
      "Offline synchronization"
    ],
    icon: <MessageCircle className="text-accent" size={32} />,
    category: "Mobile App",
    status: "Completed"
  },
  {
    title: "SOS Emergency App",
    description: "A life-saving web application that provides instant emergency assistance through GPS location tracking and automated SMS alerts to emergency contacts and authorities.",
    tech: ["HTML", "CSS", "JavaScript", "GPS API", "SMS Gateway", "Geolocation"],
    features: [
      "One-click SOS activation",
      "GPS location tracking",
      "Automatic SMS alerts",
      "Emergency contact management",
      "Location sharing with authorities"
    ],
    icon: <Shield className="text-destructive" size={32} />,
    category: "Web App",
    status: "Completed"
  },
  {
  title: "AI-Powered Health Symptom Checker",
  description: "A machine learning tool that predicts possible health conditions based on user symptoms and provides preliminary recommendations.",
  tech: ["Python", "Machine Learning", "NLP", "Flask API", "React"],
  features: [
    "Symptom input through chatbot",
    "Disease prediction with ML models",
    "Preventive health recommendations",
    "Integration with online medical resources",
    "User history tracking"
  ],
  icon: <Globe className="text-primary" size={32} />,
  category: "Web App",
  status: "Planned"
},
{
  title: "Smart Expense Predictor",
  description: "A financial assistant that uses machine learning to predict monthly expenses, detect unusual spending patterns, and suggest saving tips.",
  tech: ["Python", "TensorFlow", "React", "Flask", "PostgreSQL"],
  features: [
    "Expense categorization",
    "Monthly budget prediction",
    "Anomaly detection for unusual spending",
    "Personalized financial tips",
    "Visual analytics dashboard"
  ],
  icon: <Globe className="text-primary" size={32} />,
  category: "Web + Mobile",
  status: "In Development"
}


];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built, demonstrating my passion for 
            creating impactful applications that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="glass p-8 hover-lift group">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Icon & Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-card rounded-lg group-hover:glow-accent transition-smooth">
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          project.status === "Completed" ? "bg-success" : "bg-warning"
                        }`} />
                        <span className="text-sm text-muted-foreground">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gradient-accent">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="lg:w-2/3 space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:glow-primary transition-smooth"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:glow-primary transition-smooth px-8"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;