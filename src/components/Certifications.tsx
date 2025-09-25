import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const certifications = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "2024",
    type: "Course Completion",
    description: "Comprehensive course covering Python programming fundamentals, data manipulation, analysis, and visualization techniques for data science applications.",
    skills: ["Python", "Data Analysis", "NumPy", "Pandas", "Matplotlib"],
    credentialId: "NPTEL24CS01",
    verified: true
  },
  {
    title: "Python Programming",
    issuer: "NPTEL",
    date: "2024",
    type: "Course Completion", 
    description: "In-depth Python programming course covering object-oriented programming, advanced concepts, and practical application development.",
    skills: ["Python", "OOP", "Data Structures", "Algorithms"],
    credentialId: "NPTEL24CS02",
    verified: true
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "2024",
    type: "Professional Certification",
    description: "Industry-standard networking certification covering network fundamentals, IP connectivity, security, and automation.",
    skills: ["Networking", "Routing", "Switching", "Network Security", "TCP/IP"],
    credentialId: "CISCO2024NET",
    verified: true
  },
  {
    title: "Google Android Development Internship",
    issuer: "Google",
    date: "2024",
    type: "Internship Program",
    description: "Intensive internship program focused on Android app development, modern development practices, and Google's development ecosystem.",
    skills: ["Android Development", "Kotlin", "Java", "Material Design", "Firebase"],
    credentialId: "GOOGLE2024AND",
    verified: true
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized 
            certifications and specialized training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="glass p-6 hover-lift group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:glow-accent transition-smooth">
                  <Award className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gradient-accent leading-tight">
                      {cert.title}
                    </h3>
                    {cert.verified && (
                      <Badge variant="secondary" className="bg-success/10 text-success ml-2">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Building size={14} />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {cert.type}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs text-accent hover:text-accent-foreground hover:bg-accent/10 px-2 py-1 rounded transition-smooth">
                      <ExternalLink size={12} />
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="glass p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gradient-accent">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These certifications represent my commitment to staying current with 
              industry standards and continuously expanding my technical expertise 
              across multiple domains.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-gradient-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Providers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-accent mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Recent Year</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;