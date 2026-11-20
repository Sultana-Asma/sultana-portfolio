import React, { useState } from "react";
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
  ImageIcon,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const project = projects.featuredProject;
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="project-showcase-section relative border-b border-hairline py-16 sm:py-24 overflow-hidden"
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
        {/* Section Header: Aligned with the rest of the site + Picture 2's My Project Pill */}
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

        {/* 1. Main Project Card (Layout matching Picture 2) */}
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

              {/* Action Buttons: Live Demo + GitHub Code */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-primary"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    title="Live demo link will be attached once deployed"
                    className="project-btn-primary opacity-90 cursor-default"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    <span>Live Demo</span>
                  </button>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-secondary"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub Code</span>
                </a>
              </div>
            </div>

            {/* Right Window Mockup Column (5 cols) matching Picture 2 */}
            <div className="relative flex justify-center lg:col-span-5">
              {/* Radial Backdrop Glow */}
              <div className="project-window-glow" aria-hidden="true" />

              {/* Window Frame Mockup */}
              <div className="project-window-frame">
                {/* Window Title Bar with — □ ✕ controls on the right */}
                <div className="project-window-titlebar">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-primary/80" />
                    <span className="font-mono text-[11px] text-ink-muted">
                      preview.view
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

                {/* Window Screen Area */}
                <div className="project-window-screen">
                  {project.previewImage && !imageError ? (
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      onError={() => setImageError(true)}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    /* Stylized Image Frame Mockup matching Picture 2 (Mountain & Sun silhouette with glowing radial blue background) */
                    <div className="project-screen-mockup">
                      <div className="project-mockup-inner-glow" />
                      <div className="project-mockup-icon-wrapper">
                        <svg
                          viewBox="0 0 160 120"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-28 sm:h-24 sm:w-32 drop-shadow-[0_10px_20px_rgba(59,130,246,0.35)]"
                          aria-hidden="true"
                        >
                          {/* Outer Rounded Frame */}
                          <rect
                            x="4"
                            y="4"
                            width="152"
                            height="112"
                            rx="12"
                            stroke="#3B82F6"
                            strokeWidth="3.5"
                            strokeOpacity="0.8"
                            fill="#0F121B"
                          />
                          {/* Sun Circle */}
                          <circle
                            cx="114"
                            cy="38"
                            r="11"
                            fill="#60A5FA"
                            fillOpacity="0.85"
                          />
                          {/* Mountains Silhouette */}
                          <path
                            d="M20 96L58 52L86 80L108 58L140 96H20Z"
                            fill="#3B82F6"
                            fillOpacity="0.5"
                          />
                          <path
                            d="M58 52L86 80L108 58L140 96H78L58 52Z"
                            fill="#6366F1"
                            fillOpacity="0.65"
                          />
                        </svg>
                      </div>
                      <p className="mt-3 font-mono text-[11px] font-semibold tracking-wider uppercase text-accent-primary">
                        {project.previewLabel}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-muted">
                        Clean Architecture & Responsive UI
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
                  className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-secondary"
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
                  Built with verified skills: HTML5, CSS3, JavaScript, and React.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
