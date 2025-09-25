import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Aspiring Software Developer | AI & App Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-primary">Praveen P</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-foreground/90">
              {displayText}
              <span className="animate-blink-cursor border-r-2 border-accent ml-1" />
            </p>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science Engineering student passionate about creating innovative solutions 
            with modern technologies. Specialized in AI, mobile app development, and web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:glow-primary transition-smooth px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/Praveenredm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-accent transition-smooth hover-lift"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/praveen-p-5a0182287/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-accent transition-smooth hover-lift"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:pp873093@gmail.com"
              className="p-3 rounded-full glass hover:glow-accent transition-smooth hover-lift"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float hover:glow-accent transition-smooth"
      >
        <ArrowDown size={32} className="text-accent" />
      </button>
    </section>
  );
};

export default Hero;