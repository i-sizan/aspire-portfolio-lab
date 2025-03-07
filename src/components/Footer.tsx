
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
              © {currentYear} <span className="font-medium">John Developer</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>using React and Tailwind CSS</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
