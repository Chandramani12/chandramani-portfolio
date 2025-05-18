
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development with modern frameworks and technologies.",
    icon: "💻",
    details: [
      "Frontend development with React, Angular, Vue",
      "Backend development with Java, Spring, Node.js",
      "Database design and integration",
      "RESTful API development"
    ]
  },
  {
    title: "Software Engineering",
    description: "Building scalable and maintainable software solutions with best practices.",
    icon: "🔧",
    details: [
      "Software architecture design",
      "Code optimization and refactoring",
      "Test-driven development",
      "Continuous integration and deployment"
    ]
  },
  {
    title: "Java Development",
    description: "Expertise in Java ecosystems from desktop applications to enterprise solutions.",
    icon: "☕",
    details: [
      "Java EE and Spring Framework",
      "Microservice architecture",
      "Enterprise application development",
      "Performance optimization"
    ]
  },
  {
    title: "AI/ML Solutions",
    description: "Implementing intelligent systems and machine learning models for business problems.",
    icon: "🤖",
    details: [
      "Data analysis and preprocessing",
      "ML model development and training",
      "Deep learning implementations",
      "AI integration with existing systems"
    ]
  }
];

const Services = () => {
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
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-scale">Services I Offer</h2>
          <div className="h-1 w-20 bg-primary rounded mb-6 reveal"></div>
          <p className="text-foreground/80 max-w-2xl reveal">
            Specialized services that help businesses build powerful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-background border border-border/50 transition-all duration-300 hover-scale hover:shadow-lg hover:border-primary/30 reveal"
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="text-4xl mb-4 float">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start">
                      <span className="inline-block mr-2 text-primary">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="text-primary text-sm hover:underline hover-scale">
                  Request Service
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
