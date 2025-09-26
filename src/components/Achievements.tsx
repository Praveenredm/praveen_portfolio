import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Lightbulb, Target, MapPin, Calendar } from "lucide-react";

const achievements = [
 {
  title: "GeeksforGeeks Vultr cloud innovative hackathon",
  location: "Online",
  date: "2024",
  type: "Hackathon",
  description: "Participated in the GeeksforGeeks x Vultr Cloud Innovative Hackathon, where our team developed a cloud-based solution leveraging cutting-edge technologies to address real-world challenges. Successfully advanced to Round 2 of the competition by showcasing strong problem-solving, innovation, and technical implementation skills.",
  impact: "Developed AI-Enhanced career guidance System.",
  skills: ["Innovation", "Problem Solving"],
  icon: <Trophy className="text-warning" size={24} />,
  color: "warning"
 },
  {
    title: "MLH DSU Hacks Participation",
    location: "Bangalore",
    date: "2025",
    type: "Hackathon",
    description: "Participated in Major League Hacking's DSU Hacks, one of India's premier hackathon events. Collaborated with developers from across the country to build innovative solutions within 36 hours.",
    impact: "Enhanced problem-solving skills and learned rapid prototyping techniques",
    skills: ["Team Collaboration", "Rapid Development", "Innovation", "Presentation"],
    icon: <Trophy className="text-warning" size={24} />,
    color: "warning"
  },
   {
    title: "<Hack Beyond Limit$> online odyssey",
    location: "online",
    date: "2025",
    type: "Hackathon",
    description: "Participated in the Hack Beyond Limits Hackathon, collaborating with peers to build innovative solutions under time constraints. Gained hands-on experience in problem-solving, teamwork, and rapid prototyping of ideas.",
    impact: "Developed a Smart Note Sharing System",
    skills: ["Project Management", "Communication", "Team Coordination", "Presentation"],
    icon: <Users className="text-primary" size={24} />,
    color: "primary"
  },
   {
    title: "Indehub - Hackathon",
    location: "online",
    date: "2025",
    type: "Hackathon",
    description: "Participated in IndeHub Hackathon conducted by Zoho Apptics and Swift Community, where I developed a Women Safety SOS System. My application was recognized and featured on the ‘Wall of Honour’ for its innovation and impact.",
    impact: "Developed a Women safety SOS emergency system",
    skills: ["Project Management", "Communication", "Presentation"],
    icon: <Users className="text-primary" size={24} />,
    color: "primary"
  },
  {
    title: "Anurag University project Expo",
    location: "Hyderabad",
    date: "2025",
    type: "Project Expo",
    description: "Participated in a Project Expo event, contributing to the development of a women’s safety device for pregnancy. Worked on presenting and enhancing the solution’s safety and monitoring features.",
    impact: "Developed a Women safety Gadget during pregnancy",
    skills: ["Research", "Innovation", "Technical Documentation", "Problem Solving"],
    icon: <Lightbulb className="text-accent" size={24} />,
    color: "accent"
  },
  {
    title: "Academic Excellence",
    location: "SMVEC, Puducherry",
    date: "2023-Present",
    type: "Academic",
    description: "Maintaining consistent academic performance with a CGPA of 8.58 while actively participating in extracurricular activities and projects.",
    impact: "Top 15% of the class while balancing academics with practical learning",
    skills: ["Time Management", "Academic Excellence", "Consistent Performance"],
    icon: <Target className="text-success" size={24} />,
    color: "success"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Achievements & Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that showcase my dedication to excellence, 
            innovation, and collaborative growth in the technology field.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform md:-translate-x-1/2 z-10 glow-primary" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <Card className="glass p-6 hover-lift group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg group-hover:glow-${achievement.color} transition-smooth ${
                        achievement.color === 'warning' ? 'bg-warning/10' :
                        achievement.color === 'accent' ? 'bg-accent/10' :
                        achievement.color === 'primary' ? 'bg-primary/10' :
                        achievement.color === 'success' ? 'bg-success/10' : 'bg-primary/10'
                      }`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {achievement.type}
                          </Badge>
                        </div>
                        <h3 className="font-bold text-lg text-gradient-accent mb-2">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{achievement.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    <div className="space-y-3">
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <div className="text-xs font-medium text-muted-foreground mb-1">Impact</div>
                        <div className="text-sm">{achievement.impact}</div>
                      </div>

                      <div>
                        <div className="text-xs font-medium text-muted-foreground mb-2">Key Skills</div>
                        <div className="flex flex-wrap gap-2">
                          {achievement.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary" 
                              className={`text-xs ${
                                achievement.color === 'warning' ? 'bg-warning/10 text-warning' :
                                achievement.color === 'accent' ? 'bg-accent/10 text-accent' :
                                achievement.color === 'primary' ? 'bg-primary/10 text-primary' :
                                achievement.color === 'success' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                              }`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20">
          <Card className="glass p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gradient-accent mb-4">
                Leadership & Collaboration
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My achievements reflect strong teamwork abilities, coordination skills, 
                and leadership qualities developed through diverse project experiences 
                and collaborative environments.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gradient-primary mb-2">1+</div>
                <div className="text-sm text-muted-foreground">Team Projects Led</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-accent mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Collaborations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Innovation Programs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-accent mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Project Success Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;