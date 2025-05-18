
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react";
const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 md:pt-36 md:pb-24 flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 fade-slide-up">
            <div>
              <p className="text-secondary font-medium mb-2 animate-pulse-text">Full Stack Developer</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight typing">
                Chandramani <br />
                <span className="text-primary">Tiwari</span>
              </h1>
            </div>
            
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl animate-slide-in-delay-1">
              Full Stack Developer specializing in Java, Python, and modern web technologies. 
              Passionate about creating user-centric applications and solving complex problems.
            </p>

            <div className="flex flex-wrap gap-3 animate-slide-in-delay-2">
              <a href="mailto:chandramaninet1002@gmail.com" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                chandramaninet1002@gmail.com
              </a>
              <a href="tel:+919653173371" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +91 9653173371
              </a>
            </div>

            <div className="flex gap-4 pt-2 animate-slide-in-delay-3">
              <a href="https://github.com/chandramani12" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors hover-scale">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors hover-scale">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="/lovable-uploads/resume.pdf" target="_blank" download className="text-foreground/70 hover:text-primary transition-colors hover-scale">
                <FileText className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale animate-bounce-slow" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover-scale" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-foreground/60 text-sm mb-4 animate-slide-in-delay-2">Tech Stack</p>
              <div className="flex flex-wrap gap-6 stagger-children">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center hover-scale">
                    <span className="text-lg font-semibold text-primary">J</span>
                  </div>
                  <span className="text-xs mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center hover-scale">
                    <span className="text-lg font-semibold text-primary">Py</span>
                  </div>
                  <span className="text-xs mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center hover-scale">
                    <span className="text-lg font-semibold text-primary">R</span>
                  </div>
                  <span className="text-xs mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center hover-scale">
                    <span className="text-lg font-semibold text-primary">S</span>
                  </div>
                  <span className="text-xs mt-2">Spring</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-first md:order-last">
            <div className="aspect-square max-w-md mx-auto relative float">
              <div className="absolute inset-0 rounded-2xl animated-gradient opacity-40"></div>
              <div className="absolute inset-4 rounded-xl bg-card glow-effect"></div>
                  <img 
                    src="/lovable-uploads/images/Nakuri.png" width={500}  height={300}
                    alt="Chandramani Tiwari"
                    className="absolute inset-4 rounded-xl object-cover z-10 mix-blend-luminosity"
                  />
              {/* <div className="absolute -bottom-6 -right-6 bg-card rounded-lg px-4 py-3 shadow-lg pop-in">
                <p className="text-sm font-medium">3+ Years Experience</p>
                <p className="text-xs text-foreground/60">Software Development</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
