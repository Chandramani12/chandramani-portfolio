
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Github, Code, Database, Layout, Server, Terminal, Cpu } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "PHP"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring MVC", "React", "Angular", "Node.js", "Express", "Laravel", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MSSQL", "Oracle", "MongoDB", "NoSQL"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "RESTful APIs", "Microservices", "WebSocket", "STOMP", "Maven", "Hibernate"]
  },
  {
    category: "Development Areas",
    items: ["Full Stack Development", "Web Development", "UI/UX Design", "Mobile App Development", "Testing/QA"]
  }
];

const expertiseSkills = [
  { name: "Java Development", level: 90 },
  { name: "Spring Framework", level: 85 },
  { name: "Frontend Development", level: 80 },
  { name: "SQL & Databases", level: 85 },
  { name: "RESTful API Design", level: 80 }
];

const GithubInfo = () => {
  const [githubData, setGithubData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const githubUsername = "chandramani12";

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (response.ok) {
          const data = await response.json();
          setGithubData(data);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div className="mt-8 bg-card/50 rounded-lg p-6 border border-border/30 reveal">
      <div className="flex items-center gap-4 mb-4">
        <Github className="text-primary h-6 w-6 animate-bounce-slow" />
        <h3 className="text-xl font-semibold">GitHub Profile</h3>
      </div>

      {loading ? (
        <div className="flex justify-center p-4">
          <div className="animate-pulse w-full">
            <div className="h-12 bg-muted/30 rounded mb-4"></div>
            <div className="h-8 bg-muted/30 rounded w-3/4"></div>
          </div>
        </div>
      ) : githubData ? (
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 hover-rotate">
            <img 
              src={githubData.avatar_url} 
              alt="GitHub Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-medium glow-text">{githubData.name || githubUsername}</h4>
            {githubData.bio && <p className="text-foreground/70 mb-2 animate-slide-in-delay-1">{githubData.bio}</p>}
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-1 text-foreground/80 hover-scale">
                <span className="font-medium">{githubData.public_repos || 0}</span> repositories
              </div>
              <div className="flex items-center gap-1 text-foreground/80 hover-scale">
                <span className="font-medium">{githubData.followers || 0}</span> followers
              </div>
              <div className="flex items-center gap-1 text-foreground/80 hover-scale">
                <span className="font-medium">{githubData.following || 0}</span> following
              </div>
            </div>
            <a 
              href={`https://github.com/${githubUsername}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-card hover:bg-card/80 text-foreground border border-border/30 px-4 py-2 rounded-md transition-colors hover-glow"
            >
              <Github className="h-4 w-4" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      ) : (
        <div className="p-4 text-center text-foreground/70">
          GitHub profile information unavailable. Please visit directly at{" "}
          <a 
            href={`https://github.com/${githubUsername}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/{githubUsername}
          </a>
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal-scale">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary rounded mb-6 reveal"></div>
          <p className="text-foreground/80 max-w-2xl reveal">
            My technical expertise and proficiencies across various technologies and domains
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
            <Cpu className="mr-2 text-primary h-5 w-5 animate-pulse" /> Skill Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseSkills.map((skill, index) => (
              <div key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 animate-progress" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:border-primary/20 transition-all duration-300 reveal reveal-left hover-lift"
              style={{transitionDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  {index === 0 && <Terminal className="text-primary h-5 w-5 animate-bounce-slow" />}
                  {index === 1 && <Layout className="text-primary h-5 w-5 animate-bounce-slow" />}
                  {index === 2 && <Database className="text-primary h-5 w-5 animate-bounce-slow" />}
                  {index === 3 && <Server className="text-primary h-5 w-5 animate-bounce-slow" />}
                  {index === 4 && <Code className="text-primary h-5 w-5 animate-bounce-slow" />}
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      className="bg-primary/10 hover:bg-primary/20 text-primary border-none hover-pop"
                      style={{transitionDelay: `${skillIndex * 0.05}s`, animation: "fadeSlideUp 0.5s ease-out forwards"}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <GithubInfo />
      </div>
    </section>
  );
};

export default Skills;
