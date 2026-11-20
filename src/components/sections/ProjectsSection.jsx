import React, { useState, useEffect } from "react";
import {
  Code2,
  Layers,
  Monitor,
  Github,
  Play,
  CheckCircle2,
  Star,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Minus,
  Square,
  X,
  ArrowRight,
  Sun,
  Moon,
  CloudRain,
  Eye,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import VillageSimulationCanvas from "@/components/common/VillageSimulationCanvas";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const project = projects.featuredProject;
  const caseStudy = project.caseStudy;

  const [imageError, setImageError] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [activeMode, setActiveMode] = useState("day"); // "day" | "night" | "rain"

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCaseStudyOpen(false);
      }
    };
    if (isCaseStudyOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCaseStudyOpen]);

  const currentModeInfo =
    caseStudy?.modes?.find((m) => m.id === activeMode) ||
    caseStudy?.modes?.[0];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="project-showcase-section relative overflow-hidden border-b border-hairline py-16 sm:py-24"
    >
      {/* Background Ambient Glows */}
      <div
        className="project-ambient-glow project-ambient-glow--top"
        aria-hidden="true"
      />
      <div
        className="project-ambient-glow project-ambient-glow--bottom"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="mb-3 flex items-center justify-start gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
            <span className="inline-flex items-center rounded border border-hairline bg-surface px-2 py-0.5 font-medium text-accent-primary">
              {projects.sectionIndex}
            </span>
            <span className="h-px w-6 bg-hairlineStrong" aria-hidden="true" />
            <span className="font-semibold tracking-[0.14em] text-ink-secondary">
              {projects.eyebrow}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h2
                id="projects-heading"
                className="font-display text-fluid-h2 font-bold text-ink-primary"
              >
                {projects.heading}
              </h2>
              <div className="hidden h-px w-16 bg-gradient-to-r from-accent-primary/60 to-transparent sm:block" />
            </div>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-secondary sm:text-base">
              {projects.description}
            </p>
          </div>
        </div>

        {/* 1. Main Project Card */}
        <article className="project-main-card">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Content Column (7 cols) */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                {/* Academic / Featured Project Badge */}
                <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-accent-primary/35 bg-accent-primary/10 px-3.5 py-1 text-xs font-mono font-medium text-accent-primary shadow-sm shadow-blue-500/10">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{project.badge}</span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-primary sm:text-3xl lg:text-4xl">
                  {project.title}
                </h3>

                {/* Subtitle / Short Tagline */}
                <p className="mt-1.5 font-sans text-sm font-semibold text-accent-primary sm:text-base">
                  {project.subtitle}
                </p>

                {/* Description Paragraph */}
                <p className="mt-3.5 text-sm leading-relaxed text-ink-secondary sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* 3 Information Boxes (Language, Library, Domain) */}
              <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Box 1: Language */}
                <div className="project-meta-box">
                  <div className="flex items-center gap-2 text-accent-primary">
                    <Code2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-muted">
                      Language
                    </span>
                  </div>
                  <p className="mt-1 font-sans text-xs font-bold text-ink-primary sm:text-sm">
                    {project.language}
                  </p>
                </div>

                {/* Box 2: Library */}
                <div className="project-meta-box">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Layers className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-muted">
                      Library
                    </span>
                  </div>
                  <p className="mt-1 font-sans text-xs font-bold text-ink-primary sm:text-sm">
                    {project.library}
                  </p>
                </div>

                {/* Box 3: Domain */}
                <div className="project-meta-box">
                  <div className="flex items-center gap-2 text-accent-secondary">
                    <Monitor className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-muted">
                      Domain
                    </span>
                  </div>
                  <p className="mt-1 font-sans text-xs font-bold text-ink-primary sm:text-sm">
                    {project.domain}
                  </p>
                </div>
              </div>

              {/* Action Buttons: View Case Study + GitHub Code */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* View Case Study Button */}
                <button
                  type="button"
                  onClick={() => setIsCaseStudyOpen(true)}
                  className="project-btn-primary group"
                  aria-haspopup="dialog"
                  aria-expanded={isCaseStudyOpen}
                >
                  <Eye className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span>View Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>

                {/* GitHub Code Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-secondary"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub Code</span>
                  <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Window Mockup Column (5 cols) matching Picture 2 */}
            <div className="relative flex justify-center lg:col-span-5">
              {/* Radial Backdrop Glow */}
              <div className="project-window-glow" aria-hidden="true" />

              {/* Window Frame Mockup - Clickable to open Case Study */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsCaseStudyOpen(true)}
                onKeyDown={(e) => e.key === "Enter" && setIsCaseStudyOpen(true)}
                className="project-window-frame group cursor-pointer"
                title="Click to view interactive case study (Day / Night / Rain modes)"
              >
                {/* Window Title Bar */}
                <div className="project-window-titlebar">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-primary/80" />
                    <span className="font-mono text-[11px] text-ink-muted">
                      {project.previewLabel || "village_scenery.exe"}
                    </span>
                  </div>
                  <div className="project-window-controls" aria-hidden="true">
                    <span className="project-window-btn">
                      <Minus className="h-2.5 w-2.5" />
                    </span>
                    <span className="project-window-btn">
                      <Square className="h-2 w-2" />
                    </span>
                    <span className="project-window-btn project-window-btn--close">
                      <X className="h-2.5 w-2.5" />
                    </span>
                  </div>
                </div>

                {/* Window Screen Area with Badge Overlay */}
                <div className="project-window-screen relative">
                  {project.previewImage && !imageError ? (
                    <>
                      <VillageSimulationCanvas
                        activeMode={activeMode}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      {/* Floating Badge (matching classmate's 3 SCREENSHOTS badge) */}
                      <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>3 Modes • Interactive</span>
                      </div>
                    </>
                  ) : (
                    <div className="project-screen-mockup">
                      <p className="font-mono text-xs text-accent-primary">
                        village_scenery.exe
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 2. Bottom Two Sub-Cards (Key Features & Technologies Used) */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card A: Key Features */}
          <div className="project-subcard">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="project-subcard-icon project-subcard-icon--blue">
                <Star className="h-4 w-4" aria-hidden="true" />
              </span>
              <h4 className="font-display text-base font-bold text-ink-primary sm:text-lg">
                Key Features
              </h4>
            </div>

            <ul className="space-y-3">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-secondary sm:text-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card B: Technologies Used */}
          <div className="project-subcard">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="project-subcard-icon project-subcard-icon--cyan">
                <Layers className="h-4 w-4" aria-hidden="true" />
              </span>
              <h4 className="font-display text-base font-bold text-ink-primary sm:text-lg">
                Technologies Used
              </h4>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {project.technologies.map((tech) => (
                <div key={tech.name} className="project-tech-badge">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                  <span className="font-mono text-xs font-medium text-ink-primary">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-ink-muted">
                    ({tech.category})
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Summary Note */}
            <div className="mt-5 rounded-xl border border-hairline bg-surface/50 p-3.5">
              <div className="flex items-center gap-2 text-xs text-ink-muted">
                <Sparkles className="h-3.5 w-3.5 text-accent-primary" />
                <span>
                  Academic Computer Graphics coursework project at Daffodil International University.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. INTERACTIVE CASE STUDY MODAL (Matching Reference Image) */}
      {/* ========================================================= */}
      {isCaseStudyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="case-study-overlay"
        >
          {/* Backdrop Blur Overlay - Solid Dark Tint */}
          <div
            className="case-study-backdrop"
            style={{ backgroundColor: "rgba(3, 6, 16, 0.92)" }}
            onClick={() => setIsCaseStudyOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container - 100% Solid Dark Charcoal Surface */}
          <div
            className="case-study-modal"
            style={{ backgroundColor: "#0c101d" }}
          >
            {/* Modal Header Bar */}
            <div
              className="case-study-header"
              style={{ backgroundColor: "#11172a" }}
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400">
                {caseStudy?.headerTag || "03 / 2026 // COMPUTER GRAPHICS • C++ / OPENGL"}
              </span>
              <button
                type="button"
                onClick={() => setIsCaseStudyOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface text-ink-secondary transition-all hover:border-accent-primary hover:bg-accent-primary hover:text-white"
                aria-label="Close Case Study Modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Scrollable Content Body */}
            <div
              className="case-study-body space-y-6"
              style={{ backgroundColor: "#0c101d" }}
            >
              {/* Interactive Screen Display Area */}
              <div
                className="case-study-screen-box"
                style={{ backgroundColor: "#05070e" }}
              >
                {/* Visual Image Container with Enhanced Multi-Layer Simulation */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black rounded-t-2xl">
                  <VillageSimulationCanvas
                    activeMode={activeMode}
                    className="h-full w-full"
                  />
                </div>

                {/* Mode Selector Tabs (Matching Reference Image) */}
                <div
                  className="case-study-controls-bar"
                  style={{ backgroundColor: "#11172a" }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveMode("day")}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all ${
                        activeMode === "day"
                          ? "border border-accent-primary/60 bg-accent-primary text-white shadow-[0_0_16px_rgba(59,130,246,0.5)]"
                          : "border border-hairline bg-surface text-ink-secondary hover:text-white"
                      }`}
                    >
                      <Sun className="h-3.5 w-3.5" />
                      <span>Daytime Scene</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveMode("night")}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all ${
                        activeMode === "night"
                          ? "border border-purple-500/60 bg-purple-600 text-white shadow-[0_0_16px_rgba(168,85,247,0.5)]"
                          : "border border-hairline bg-surface text-ink-secondary hover:text-white"
                      }`}
                    >
                      <Moon className="h-3.5 w-3.5" />
                      <span>Night & Solar Lamps</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveMode("rain")}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all ${
                        activeMode === "rain"
                          ? "border border-cyan-500/60 bg-cyan-600 text-white shadow-[0_0_16px_rgba(34,211,238,0.5)]"
                          : "border border-hairline bg-surface text-ink-secondary hover:text-white"
                      }`}
                    >
                      <CloudRain className="h-3.5 w-3.5" />
                      <span>Night Rain Mode</span>
                    </button>
                  </div>

                  {/* Mode Dynamic Caption */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {currentModeInfo?.caption}
                  </p>
                </div>
              </div>

              {/* Case Study Title & Overview */}
              <div>
                <h3
                  id="case-study-title"
                  className="font-display text-2xl font-bold text-white sm:text-3xl"
                >
                  {caseStudy?.title || "Smart Village Scenario — 2D OpenGL Simulation"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {caseStudy?.description}
                </p>
              </div>

              {/* 2 Subcards: Problem/Context & Approach/Execution */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Problem / Context */}
                <div
                  className="case-study-info-card"
                  style={{ backgroundColor: "#13192e" }}
                >
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                    Problem / Context
                  </span>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {caseStudy?.problemContext}
                  </p>
                </div>

                {/* Approach & Execution */}
                <div
                  className="case-study-info-card"
                  style={{ backgroundColor: "#13192e" }}
                >
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent-primary">
                    Approach & Execution
                  </span>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {caseStudy?.approachExecution}
                  </p>
                </div>
              </div>

              {/* Key Deliverables Card */}
              <div
                className="case-study-info-card"
                style={{ backgroundColor: "#13192e" }}
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Key Deliverables
                </span>
                <ul className="mt-3 space-y-2.5">
                  {caseStudy?.keyDeliverables?.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech Pills & GitHub Action */}
              <div className="case-study-footer">
                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {["C++", "OpenGL", "GLUT", "Computer Graphics"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700 bg-surface px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Code Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent-primary/50 bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2.5 font-sans text-xs font-semibold text-white shadow-[0_0_18px_rgba(59,130,246,0.4)] transition-all hover:scale-105"
                >
                  <Github className="h-4 w-4" />
                  <span>View on GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}