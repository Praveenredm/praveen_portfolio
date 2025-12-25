import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Brain, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "Java", level: 85, category: "Programming", icon: <Code size={20} /> },
  { name: "Python", level: 45, category: "Programming", icon: <Code size={20} /> },
  { name: "HTML/CSS", level: 90, category: "Frontend", icon: <Globe size={20} /> },
  { name: "React", level: 85, category: "Frontend", icon: <Globe size={20} /> },
  { name: "SQL", level: 75, category: "Backend", icon: <Database size={20} /> },
  { name: "Firebase", level: 85, category: "Backend", icon: <Database size={20} /> },
  { name: "Data Science", level: 65, category: "AI/ML", icon: <Brain size={20} /> },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning multiple technologies and domains, 
            constantly evolving with the latest industry trends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category} className="glass p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category === "Programming" && <Code className="text-primary" size={24} />}
                  {category === "Frontend" && <Globe className="text-primary" size={24} />}
                  {category === "Mobile" && <Smartphone className="text-primary" size={24} />}
                  {category === "Backend" && <Database className="text-primary" size={24} />}
                  {category === "AI/ML" && <Brain className="text-primary" size={24} />}
                  {category === "Tools" && <Wrench className="text-primary" size={24} />}
                </div>
                <h3 className="text-xl font-semibold text-gradient-accent">{category}</h3>
              </div>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-2000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: isVisible ? "0.2s" : "0s"
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gradient-accent">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "HTML", "Python", 
              "Java", "Java Springboot","Firebase", "SQL", "Git", "Expo", 
              "VS Code", "IntelliJ IDEA", "Figma", "N8N"
            ].map((tech) => (
              <div 
                key={tech}
                className="glass px-4 py-2 rounded-full hover:glow-accent transition-smooth cursor-default hover-lift"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;