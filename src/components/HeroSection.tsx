
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="section-container flex flex-col items-center text-center">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full filter blur-3xl top-1/4 -left-48 animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl bottom-0 -right-48 animate-pulse-slow" />
        
        <div className="max-w-3xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-down">
            <span className="block">Hi, I'm </span>
            <span className="text-gradient">John Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up delay-100">
            A passionate junior developer crafting beautiful, functional web experiences with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <a 
              href="#projects" 
              className={cn(
                "px-8 py-3 rounded-lg font-medium transition-all",
                "bg-primary text-white hover:bg-primary/90",
                "shadow-lg shadow-primary/20"
              )}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className={cn(
                "px-8 py-3 rounded-lg font-medium transition-all",
                "bg-white dark:bg-gray-800 text-gray-800 dark:text-white",
                "hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className={cn(
            "absolute bottom-10 left-1/2 transform -translate-x-1/2",
            "flex items-center justify-center w-12 h-12 rounded-full",
            "bg-white dark:bg-gray-800 text-gray-800 dark:text-white",
            "shadow-lg border border-gray-200 dark:border-gray-700",
            "animate-bounce hover:shadow-xl transition-all"
          )}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
