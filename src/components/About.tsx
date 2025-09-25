import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating impactful solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-lg hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-gradient-accent">
                Hello, I'm Praveen P
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science Engineering student with a passion for developing 
                innovative applications and exploring the frontiers of artificial intelligence. 
                My journey in technology is driven by curiosity and a desire to solve 
                real-world problems through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                participating in hackathons, or collaborating on projects that push 
                the boundaries of what's possible with modern development tools.
              </p>
            </div>
          </div>

          {/* Education & Stats */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="glass p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground mb-2">
                    Bachelor of Technology in Computer Science & Engineering
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <MapPin size={16} />
                    <span>Sri Manakula Vinayagar Engineering College, Puducherry</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    <span>2023 - 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="text-accent" size={16} />
                    <span className="text-accent font-semibold">CGPA: 8.58</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass p-6 text-center hover-lift">
                <div className="text-2xl font-bold text-gradient-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="glass p-6 text-center hover-lift">
                <div className="text-2xl font-bold text-gradient-accent mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>
            </div>

            {/* Interests */}
            <Card className="glass p-6 hover-lift">
              <h4 className="font-semibold mb-4">Interests & Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Mobile App Development", 
                  "Web Development",
                  "Data Science",
                  "Innovation & Research",
                  "Hackathons"
                ].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;