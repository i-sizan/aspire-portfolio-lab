
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

type ExperienceItem = {
  id: number;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Junior Frontend Developer',
    company: 'TechSolutions Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2024 - Present',
    description: 'Developing responsive web applications using React and TypeScript. Collaborating with designers and backend developers to implement new features and improve user experience.',
  },
  {
    id: 2,
    type: 'work',
    title: 'Web Development Intern',
    company: 'Digital Innovators',
    location: 'Remote',
    period: 'Jun 2023 - Dec 2023',
    description: 'Assisted in building and maintaining client websites. Implemented responsive designs and worked on optimizing site performance. Learned to work in an agile development environment.',
  },
  {
    id: 3,
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'Tech University',
    location: 'Boston, MA',
    period: '2019 - 2023',
    description: 'Focused on web development, algorithms, and software engineering. Completed a capstone project building a full-stack web application for local businesses.',
  },
  {
    id: 4,
    type: 'education',
    title: 'Full-Stack Web Development Bootcamp',
    company: 'Code Academy',
    location: 'Online',
    period: 'Summer 2022',
    description: 'Intensive 12-week program covering modern web technologies including React, Node.js, Express, and MongoDB. Built multiple projects from scratch with real-world applications.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden">
          {experiences.map((item) => (
            <div 
              key={item.id}
              className="mb-8 last:mb-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full",
                  "bg-primary/10 dark:bg-primary/20 text-primary"
                )}>
                  {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                </div>
                <div>
                  <span className={cn(
                    "inline-block px-3 py-1 text-xs font-medium rounded-full mb-1",
                    item.type === 'work' 
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" 
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  )}>
                    {item.type === 'work' ? 'Work Experience' : 'Education'}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              
              <div className="ml-15 pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-medium">{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
                
                <time className="block text-sm font-medium text-primary mb-3">{item.period}</time>
                
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {/* Timeline Items */}
          {experiences.map((item, index) => (
            <div 
              key={item.id} 
              className={cn(
                "relative flex items-center mb-16 last:mb-0 group",
                index % 2 === 0 ? "flex-row-reverse" : ""
              )}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className={cn(
                  "flex items-center justify-center w-14 h-14 rounded-full",
                  "bg-white dark:bg-gray-800 shadow-lg border-4 border-primary",
                  "text-primary transition-all duration-300 group-hover:scale-110"
                )}>
                  {item.type === 'work' ? <Briefcase size={22} /> : <GraduationCap size={22} />}
                </div>
              </div>
              
              {/* Content */}
              <div className={cn(
                "w-1/2 px-4",
                index % 2 === 0 ? "text-right pr-16" : "pl-16"
              )}>
                <div className={cn(
                  "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg",
                  "border border-gray-100 dark:border-gray-700",
                  "transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                )}>
                  <span className={cn(
                    "inline-block px-3 py-1 text-xs font-medium rounded-full mb-3",
                    item.type === 'work' 
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" 
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  )}>
                    {item.type === 'work' ? 'Work Experience' : 'Education'}
                  </span>
                  
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <span className="font-medium">{item.company}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                  
                  <time className="block text-sm font-medium text-primary mb-4">{item.period}</time>
                  
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
