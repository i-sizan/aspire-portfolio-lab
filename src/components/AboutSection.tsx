
import { Code, Code2, Database, Globe, Layout, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  { 
    icon: <Code size={24} />, 
    name: "JavaScript", 
    level: 90,
    color: "bg-yellow-400" 
  },
  { 
    icon: <Layout size={24} />, 
    name: "React", 
    level: 85,
    color: "bg-blue-500" 
  },
  { 
    icon: <Code2 size={24} />, 
    name: "TypeScript", 
    level: 75,
    color: "bg-blue-700" 
  },
  { 
    icon: <Globe size={24} />, 
    name: "HTML/CSS", 
    level: 95,
    color: "bg-orange-500" 
  },
  { 
    icon: <PenTool size={24} />, 
    name: "Tailwind CSS", 
    level: 80,
    color: "bg-teal-500" 
  },
  { 
    icon: <Database size={24} />, 
    name: "Node.js", 
    level: 70,
    color: "bg-green-600" 
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a junior developer passionate about creating modern, user-friendly web applications. 
            With a strong foundation in front-end technologies and a growing expertise in back-end development, 
            I approach each project with creativity and attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Background</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I recently graduated with a degree in Computer Science and have been building web applications
              for the past two years. My journey began with HTML, CSS, and JavaScript, and has evolved to include
              modern frameworks like React and Next.js.
            </p>
            
            <h3 className="text-2xl font-bold">What I Do</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in building responsive, accessible web applications with modern UI/UX principles.
              I'm passionate about creating intuitive interfaces that provide exceptional user experiences
              while maintaining clean, efficient code.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all",
                  "bg-primary text-white hover:bg-primary/90",
                  "shadow-md shadow-primary/20"
                )}
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-primary">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-1000", 
                        skill.color
                      )} 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
