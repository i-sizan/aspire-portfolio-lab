
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add scroll reveal animation for each section
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight * 0.75;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        if (scrollPosition > sectionTop && !section.classList.contains("animate-fade-in")) {
          section.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", revealSections);
    // Initial check to reveal sections that might be in view on load
    revealSections();

    return () => window.removeEventListener("scroll", revealSections);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
