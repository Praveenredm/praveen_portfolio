import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  MessageCircle,
  Shield,
  Globe,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  icon: JSX.Element;
  category: string;
  status: "Completed" | "In Development" | "Planned";
  githubUrl?: string | null;
  liveUrl?: string | null;
};

const projects: Project[] = [
  {
    title: "AI-Powered Health Symptom Checker",
    description:
      "A machine learning tool that predicts possible health conditions based on user symptoms and provides preliminary recommendations.",
    tech: ["Python", "Machine Learning", "NLP", "Flask API", "React"],
    features: [
      "Symptom input through chatbot",
      "Disease prediction with ML models",
      "Preventive health recommendations",
      "Integration with medical resources",
      "User history tracking",
    ],
    icon: <Globe className="text-primary" size={32} />,
    category: "Web App",
    status: "Completed",
    githubUrl: "https://github.com/Praveenredm/Ai_ignite",
    liveUrl: "https://ai-ignite-ten.vercel.app/",
  },
  {
    title: "Smart Note Sharing App",
    description:
      "A chat-style document sharing application that revolutionizes how students and professionals share and collaborate on notes.",
    tech: [
      "React Native",
      "Firebase",
      "Real-time Database",
      "Authentication",
      "Cloud Storage",
    ],
    features: [
      "Real-time chat functionality",
      "Document upload & sharing",
      "User authentication & profiles",
      "Smart categorization",
      "Offline synchronization",
    ],
    icon: <MessageCircle className="text-accent" size={32} />,
    category: "Mobile App",
    status: "Completed",
    githubUrl: "https://github.com/Praveenredm/Notes/tree/main/Desktop/all%20apps/2025/mini_project/React/notes",
    liveUrl: "",
  },
  {
    title: "SOS Emergency App",
    description:
      "A life-saving web application that provides instant emergency assistance through GPS tracking and automated SMS alerts.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "GPS API",
      "SMS Gateway",
      "Geolocation",
    ],
    features: [
      "One-click SOS activation",
      "GPS location tracking",
      "Automatic SMS alerts",
      "Emergency contact management",
      "Location sharing with authorities",
    ],
    icon: <Shield className="text-destructive" size={32} />,
    category: "Web App",
    status: "Completed",
    githubUrl: "https://github.com/Praveenredm/Indehub_hackathon",
    liveUrl: "",
  },
  {
    title: "Smart Expense Predictor",
    description:
      "A financial assistant that uses machine learning to predict monthly expenses and detect unusual spending patterns.",
    tech: ["Python", "TensorFlow", "React", "Flask", "PostgreSQL"],
    features: [
      "Expense categorization",
      "Monthly budget prediction",
      "Anomaly detection",
      "Personalized saving tips",
      "Visual analytics dashboard",
    ],
    icon: <Globe className="text-primary" size={32} />,
    category: "Web + Mobile",
    status: "In Development",
    githubUrl: "https://github.com/praveenredm/smart-expense-predictor",
    liveUrl: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of real, verifiable projects with live demos and source
            code.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="glass p-8 hover-lift group">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-card rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="outline">{project.category}</Badge>
                      <div className="flex items-center gap-2 mt-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            project.status === "Completed"
                              ? "bg-success"
                              : project.status === "In Development"
                              ? "bg-warning"
                              : "bg-muted"
                          }`}
                        />
                        <span className="text-sm text-muted-foreground">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Right */}
                <div className="lg:w-2/3 space-y-6">
                  {/* Tech */}
                  <div>
                    <h4 className="font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    <Button
                      asChild
                      size="sm"
                      disabled={!project.liveUrl}
                      className="bg-gradient-primary disabled:opacity-50"
                    >
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Live
                        </a>
                      ) : (
                        <span>Not Live</span>
                      )}
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      disabled={!project.githubUrl}
                      className="disabled:opacity-50"
                    >
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          Source Code
                        </a>
                      ) : (
                        <span>Private</span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-primary px-8"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let’s Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
