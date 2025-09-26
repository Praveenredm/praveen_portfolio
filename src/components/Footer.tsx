import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main Content */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-primary mb-2">
              Praveen P
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Aspiring Software Developer passionate about creating innovative solutions 
              and building the future with code.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Praveenredm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-accent transition-smooth hover-lift"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/praveen-p-5a0182287/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-accent transition-smooth hover-lift"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:pp873093@gmail.com"
              className="p-3 rounded-full glass hover:glow-accent transition-smooth hover-lift"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-8 text-sm">
            {[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" }
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-primary opacity-20" />

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              © 2024 Praveen P. Built with  using React & TypeScript
            </p>
            <p className="mt-2">
              Computer Science Engineering Student | SMVEC, Puducherry
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mx-auto block glass px-6 py-2 rounded-full text-sm hover:glow-accent transition-smooth hover-lift"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;