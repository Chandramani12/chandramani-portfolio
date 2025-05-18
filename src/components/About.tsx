
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { File, Briefcase } from "lucide-react";

const About = () => {
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
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-scale">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded mb-6 reveal"></div>
          <p className="text-foreground/80 max-w-2xl reveal">
            Highly motivated and results-driven Full Stack Java Developer with expertise in full stack development, AI/ML, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="reveal-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-primary" />
              Professional Summary
            </h3>
            <div className="space-y-6 text-foreground/80">
              <p className="animate-pulse-text">
               I am a passionate Software Developer / Software Engineer with over 3 years of hands-on experience in backend development using PHP (Laravel) and frontend technologies, along with strong exposure to CMS platforms like WordPress, Shopify, Joomla, Wix, and GoDaddy. I have a solid foundation in software architecture, UI/UX design, and database management (MySQL), gained through both academic study and real-world development.

My journey began during my undergraduate studies, where I discovered my passion for building scalable and user-friendly web applications. Since then, I have worked on multiple client-facing projects involving custom CMS integration, responsive web design, API development, and CRM systems (e.g., HubSpot).

Now, I am actively seeking opportunities as a Software Developer or Software Engineer, where I can contribute to innovative projects, expand my tech stack, and deliver high-quality digital solutions.
              </p>
              <p className="animate-slide-in-delay-1">
                I specialize in full stack development with expertise in Java, Python,php and modern web technologies. 
                My approach combines technical expertise with problem-solving skills to deliver high-quality solutions 
                that meet client needs.
              </p>
              <p className="animate-slide-in-delay-2">
                My objective is to leverage my expertise in full-stack development to contribute to innovative 
                and scalable solutions in a dynamic and technology-driven environment.
              </p>
            </div>
            <div className="mt-8">
              <Button className="hover-scale" asChild>
                <a href="/lovable-uploads/resume.pdf" target="_blank" download>
                  <File className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-8 reveal-right">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
                <File className="mr-2 h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <Card className="bg-background border-0 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">MSc in Information Technology with AI</h4>
                        <p className="text-sm text-foreground/60">University of Mumbai</p>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">2021-2023</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-background border-0 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">BSc in Information Technology</h4>
                        <p className="text-sm text-foreground/60">University of Mumbai</p>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">2017-2020</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Experience
              </h3>
              <Card className="bg-background border-0 hover-scale">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Junior Programmer</h4>
                      <p className="text-sm text-foreground/60">May 2022 - Present</p>
                      <ul className="text-sm mt-2 list-disc list-inside space-y-1">
                        <li className="animate-slide-in-delay-1">Managed and optimized CMS platforms</li>
                        <li className="animate-slide-in-delay-2">Developed applications using PHP, MySQL, CSS, and JavaScript</li>
                        <li className="animate-slide-in-delay-3">Improved platform performance and security</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-0 hover-scale mt-4">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Software Developer Intern</h4>
                      <p className="text-sm text-foreground/60">May 2021 - August 2021</p>
                      <ul className="text-sm mt-2 list-disc list-inside space-y-1">
                        <li className="animate-slide-in-delay-1">Developed applications using WPF and SQL</li>
                        <li className="animate-slide-in-delay-2">Enhanced XML and .cs files to meet requirements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
