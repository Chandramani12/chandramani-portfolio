
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "User Authentication System",
    description: "Robust authentication system with sign-up/sign-in functionality and CRUD operations for user data management, featuring front-end validation with JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    responsibility: "System design, database integration, and security features"
  },
  {
    title: "Digital Society",
    description: "Android application for society registration, payments, and operations management with MySQL backend for scalable data management.",
    tags: ["Android", "Java", "MySQL"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    responsibility: "Design, implementation, and testing"
  },
  {
    title: "NFT Marketplace",
    description: "Decentralized platform for minting and trading NFTs with crypto wallet integration using smart contracts.",
    tags: ["React.js", "Bootstrap", "Solidity"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    responsibility: "UI/UX design, contract deployment, and integration"
  },
  {
    title: "Attendance System",
    description: "JSP and Servlet-based attendance system with secure login, real-time updates, and reporting features using MSSQL database.",
    tags: ["JSP", "Servlet", "MSSQL", "HTML", "CSS"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    responsibility: "Database schema design, business logic implementation"
  },
  {
    title: "Real-Time Chat Application",
    description: "Seamless messaging platform built with React, Spring Boot with Maven, WebSocket, and STOMP without using a database. Features real-time updates, typing indicators, and message history.",
    tags: ["React", "Spring Boot", "WebSocket", "STOMP"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    responsibility: "Architecture design, real-time integration, UI development"
  }
];

const Portfolio = () => {
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
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-scale">My Projects</h2>
          <div className="h-1 w-20 bg-primary rounded mb-6 reveal"></div>
          <p className="text-foreground/80 max-w-2xl reveal animate-fade-in-up">
            A collection of my recent work showcasing my skills and expertise in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card overflow-hidden transition-all duration-300 hover-lift ${
                project.featured ? 'border-primary/20 hover-glow' : 'border-border/50 hover-scale'
              } reveal`}
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-video bg-muted relative shimmer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full"
                />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary pulse">Featured</Badge>
                )}
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="group">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{project.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4 min-h-[80px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20 hover-pop">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 text-xs text-foreground/70">
                  <strong>Role:</strong> {project.responsibility}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="hover-scale group" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:text-primary" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 hover-scale group" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center reveal animate-fade-in-up">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover-scale hover-glow" asChild>
            <a href="https://github.com/chandramani12" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
