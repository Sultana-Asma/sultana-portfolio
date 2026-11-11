import React, { useState, useMemo, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Layers,
  Eye,
  X,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects.items;
    }
    return projects.items.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [projects.items, selectedCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeProjectModal) {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProjectModal]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-hairline py-16 sm:py-24"
    >
      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionHeader
              index={projects.sectionIndex}
              eyebrow={projects.eyebrow}
              title={projects.heading}
              description={projects.description}
            />
          </div>

          {/* Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mb-12 flex flex-wrap items-center gap-2 lg:mb-16"
          >
            {projects.categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg border px-3.5 py-2 font-mono text-xs font-medium transition-all ${
                    isSelected
                      ? "border-accent-primary bg-accent-primary text-white shadow-sm"
                      : "border-hairline bg-elevated text-ink-secondary hover:border-hairlineStrong hover:text-ink-primary"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <SurfaceCard
              key={project.id}
              interactive
              as="article"
              className="flex flex-col justify-between overflow-hidden p-0"
            >
              <div>
                {/* Dark UI Preview Header Frame */}
                <div className="relative border-b border-hairline bg-surface p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent-primary">
                      <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                      <span>PROJECT // {project.index}</span>
                    </span>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>

                  {/* Stylized Dark Mockup Frame for Project Screenshot */}
                  <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-xl border border-dashed border-hairlineStrong bg-elevated/80 p-6 text-center">
                    <Layers
                      className="mb-2.5 h-8 w-8 text-accent-primary/80"
                      aria-hidden="true"
                    />
                    <p className="font-display text-sm font-bold text-ink-primary">
                      {project.previewLabel}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-ink-muted">
                      [PLACEHOLDER: Project Screenshot / Preview]
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="font-display text-fluid-h3 font-bold text-ink-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-surface/50 px-6 py-4">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent-primary transition-colors hover:text-accent-hover"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Project Details</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-elevated px-3 py-1.5 font-mono text-xs font-medium text-ink-secondary transition-colors hover:border-accent-primary hover:text-ink-primary"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent-primary px-3 py-1.5 font-mono text-xs font-medium text-white transition-colors hover:bg-accent-hover"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-lg border border-hairline bg-surface px-3 py-1.5 font-mono text-[11px] text-ink-muted">
                      Demo Pending
                    </span>
                  )}
                </div>
              </div>
            </SurfaceCard>
          ))}
        </div>

        {/* Accessible Project Detail Modal */}
        {activeProjectModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setActiveProjectModal(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-hairlineStrong bg-elevated p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-hairline pb-4">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-primary">
                    PROJECT {activeProjectModal.index} //{" "}
                    {activeProjectModal.category}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="mt-1 font-display text-xl font-bold text-ink-primary sm:text-2xl"
                  >
                    {activeProjectModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  aria-label="Close project details modal"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-surface text-ink-secondary transition-colors hover:border-accent-primary hover:text-ink-primary"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Overview & Architecture
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {activeProjectModal.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Key Highlights
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {activeProjectModal.keyFeatures.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm text-ink-secondary"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Technologies Used
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {activeProjectModal.technologies.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-hairline pt-5">
                <Button
                  href={activeProjectModal.githubUrl}
                  variant="secondary"
                  external
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>View GitHub Profile</span>
                </Button>
                <Button
                  onClick={() => setActiveProjectModal(null)}
                  variant="primary"
                >
                  <span>Close Preview</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

