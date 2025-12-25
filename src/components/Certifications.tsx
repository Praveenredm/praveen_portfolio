import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  type: string;
  description: string;
  skills: string[];
  credentialId: string;
  verified: boolean;
  certificateUrl?: string | null;
};

// ✅ BASE URL FIX (CRITICAL)
const BASE = import.meta.env.BASE_URL;

const certifications: Certification[] = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2025",
    type: "Course Completion",
    description:
      "Comprehensive course covering Java programming fundamentals and OOPS concepts.",
    skills: ["Java Basics", "OOPS", "JVM"],
    credentialId: "NPTEL24CS01",
    verified: true,
    certificateUrl: `${BASE}certificates/java-nptel.pdf`,
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "2024",
    type: "Course Completion",
    description:
      "Python programming with focus on data analysis, visualization, and data science workflows.",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib"],
    credentialId: "NPTEL24CS02",
    verified: true,
    certificateUrl: `${BASE}certificates/python-ds-nptel.pdf`,
  },
  {
    title: "Python Programming",
    issuer: "NPTEL",
    date: "2024",
    type: "Course Completion",
    description:
      "In-depth Python programming including OOP, data structures, and algorithmic thinking.",
    skills: ["Python", "OOP", "Data Structures"],
    credentialId: "NPTEL24CS03",
    verified: true,
    certificateUrl: `${BASE}certificates/python-nptel.pdf`,
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "2024",
    type: "Professional Certification",
    description:
      "Industry-standard networking certification covering routing, switching, security, and IP fundamentals.",
    skills: ["Networking", "Routing", "Switching", "TCP/IP"],
    credentialId: "CISCO2024NET",
    verified: true,
    certificateUrl: `${BASE}certificates/ccna-cisco.pdf`,
  },
  {
    title: "Google Android Development Internship",
    issuer: "Google",
    date: "2024",
    type: "Internship Program",
    description:
      "Hands-on internship focused on Android app development using modern tools and best practices.",
    skills: ["Android", "Kotlin", "Java", "Firebase"],
    credentialId: "GOOGLE2024AND",
    verified: true,
    certificateUrl: `${BASE}certificates/google-android-internship.pdf`,
  },
  {
    title: "Figma for Beginners",
    issuer: "Udemy",
    date: "2023",
    type: "Course Completion",
    description:
      "UI/UX design fundamentals including wireframing, prototyping, and collaborative workflows.",
    skills: ["Figma", "UI/UX", "Prototyping"],
    credentialId: "UDEMY2023FIG",
    verified: true,
    certificateUrl: `${BASE}certificates/figma-udemy.pdf`,
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    date: "2023",
    type: "Course Completion",
    description:
      "Core concepts of computer hardware, operating systems, and system-level programming.",
    skills: ["Hardware", "Operating Systems"],
    credentialId: "COURSERA2023OS",
    verified: true,
    certificateUrl: `${BASE}certificates/hardware-os-coursera.pdf`,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications with verifiable credentials.
          </p>
        </div>

        {/* Certificates */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.title} className="glass p-6 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="text-accent" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    {cert.verified && (
                      <Badge className="bg-success/10 text-success">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={14} />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {cert.date}
                    </span>
                  </div>

                  <Badge variant="outline">{cert.type}</Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Skills Acquired</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <span className="text-xs text-muted-foreground">
                  ID: {cert.credentialId}
                </span>

                <Button asChild size="sm">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
