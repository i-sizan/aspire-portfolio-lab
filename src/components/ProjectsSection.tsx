
import { useState } from "react";
import { Github, Globe, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard for an e-commerce platform with analytics and product management features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Weather Application",
    description: "A weather application with real-time data, location-based forecasts, and interactive maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "API Integration", "Geolocation", "CSS3"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for task management with drag-and-drop interface and progress tracking.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2032&auto=format&fit=crop",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Personal Blog Platform",
    description: "A minimalist blog platform with content management system and responsive design.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Markdown", "Tailwind CSS", "Vercel"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A fitness tracking application with workout plans, progress charts, and social features.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Chart.js", "Health API"],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe search engine with filtering options, saved favorites, and meal planning tools.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2128&auto=format&fit=crop",
    tags: ["JavaScript", "API Integration", "LocalStorage", "CSS Grid"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was built to solve a specific problem
            and showcases different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={cn(
                "group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden",
                "transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700",
                "hover:transform hover:-translate-y-2"
              )}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-medium",
                      "text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  
                  <a
                    href={project.demo}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-medium",
                      "text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
              
              {activeProject === project.id && (
                <div className="absolute top-2 right-2">
                  <a
                    href={project.demo}
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full",
                      "bg-white/90 dark:bg-gray-800/90 text-primary",
                      "border border-gray-200 dark:border-gray-700",
                      "hover:bg-primary hover:text-white transition-colors"
                    )}
                    title="View Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
