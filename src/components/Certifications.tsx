
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Java Developer Course",
    issuer: "Aptech",
    year: "2020",
    description: "Comprehensive training in Java technologies, Spring Framework, and web development.",
    icon: "☕"
  },
  {
    title: "HTML, CSS, JavaScript Certification",
    issuer: "Coursera",
    year: "2019",
    description: "Mastery of front-end web development technologies and responsive design.",
    icon: "🌐"
  },
  {
    title: "The Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2024",
    description: "Intensive program covering modern full stack development including React, Node.js, and MongoDB.",
    icon: "💻"
  }
];

const Certifications = () => {
  // Scroll animation functionality
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-scale">Certifications</h2>
          <div className="h-1 w-20 bg-primary rounded mb-6 reveal"></div>
          <p className="text-foreground/80 max-w-2xl reveal">
            Professional certifications that have enhanced my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 hover-lift reveal"
              style={{transitionDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-4 float">{cert.icon}</div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg animate-slide-in-delay-1">{cert.title}</h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {cert.year}
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <Award className="h-4 w-4 text-secondary mr-2 animate-pulse" />
                  <p className="text-sm text-foreground/70">{cert.issuer}</p>
                </div>
                <p className="text-sm text-foreground/80 mt-4 animate-slide-in-delay-2">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card/50 p-6 rounded-lg border border-border/30 reveal fade-in">
          <h3 className="text-xl font-semibold mb-4 text-center animate-slide-in-delay-1">Hobbies & Interests</h3>
          <ul className="space-y-2 max-w-2xl mx-auto">
            <li className="flex items-center text-foreground/80 animate-slide-in-delay-2">
              <span className="inline-block mr-2 text-secondary">•</span>
              Passionate about Artificial Intelligence, Full Stack Development, and Programming.
            </li>
            <li className="flex items-center text-foreground/80 animate-slide-in-delay-3">
              <span className="inline-block mr-2 text-secondary">•</span>
              Continuously exploring new frameworks, tools, and research areas in technology.
            </li>
            <li className="flex items-center text-foreground/80 animate-slide-in-delay-4">
              <span className="inline-block mr-2 text-secondary">•</span>
              Always eager to learn new coding skills and frameworks to improve as a developer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
