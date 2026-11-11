import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import LearningJourneySection from "@/components/sections/LearningJourneySection";
import ConditionalSections from "@/components/sections/ConditionalSections";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import NotFoundSection from "@/components/sections/NotFoundSection";

export default function App() {
  const [selectedServiceSubject, setSelectedServiceSubject] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname !== "/" && pathname !== "/index.html") {
      setIsNotFound(true);
    }
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <main id="main-content" className="flex-1">
        {isNotFound ? (
          <NotFoundSection />
        ) : (
          <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <EducationSection />
            <LearningJourneySection />
            <ConditionalSections />
            <ServicesSection onSelectService={setSelectedServiceSubject} />
            <ContactSection preselectedSubject={selectedServiceSubject} />
          </div>
        )}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

