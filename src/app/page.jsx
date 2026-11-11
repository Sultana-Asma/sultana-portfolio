"use client";

import React, { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import LearningJourneySection from "@/components/sections/LearningJourneySection";
import ConditionalSections from "@/components/sections/ConditionalSections";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  const [selectedServiceSubject, setSelectedServiceSubject] = useState("");

  return (
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
  );
}
