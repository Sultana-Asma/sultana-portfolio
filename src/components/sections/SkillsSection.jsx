import React from "react";
import {
  ArrowRight,
  Lightbulb,
  FileCode2,
  FileText,
  Code2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-b border-hairline bg-surface/40 py-16 sm:py-24"
    >
      {/* Background Ambient Glows - matching Projects and About sections */}
      <div
        className="project-ambient-glow project-ambient-glow--top"
        aria-hidden="true"
      />
      <div
        className="project-ambient-glow project-ambient-glow--bottom"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        {/* Section Header - Exact same standard design as 01 About, 03 Projects, 04 Education */}
        <div className="mb-10 sm:mb-12">
          <div className="mb-3 flex items-center justify-start gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
            <span className="inline-flex items-center rounded border border-hairline bg-surface px-2 py-0.5 font-medium text-accent-primary">
              {skills.sectionIndex}
            </span>
            <span className="h-px w-6 bg-hairlineStrong" aria-hidden="true" />
            <span className="font-semibold tracking-[0.14em] text-ink-secondary">
              {skills.eyebrow}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h2
                id="skills-heading"
                className="font-display text-fluid-h2 font-bold text-ink-primary"
              >
                {skills.heading}{" "}
                <span className="about-name-gradient">
                  {skills.headingAccent}
                </span>
              </h2>
              <div className="hidden h-px w-16 bg-gradient-to-r from-accent-primary/60 to-transparent sm:block" />
            </div>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-secondary sm:text-base">
              {skills.description}
            </p>
          </div>
        </div>

        {/* 2x2 Grid of Skill Cards (Matching the site's glassmorphic subcard architecture) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1, 2, 3: Technical Skills with Glowing Progress Bars */}
          {skills.skillCards.map((card) => {
            const isViolet = card.levelBadgeColor === "purple";
            const isCyan = card.levelBadgeColor === "cyan";

            return (
              <div
                key={card.id}
                className="project-subcard group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4">
                    {/* Consistent icon box with matching color accents */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                        isViolet
                          ? "border-accent-secondary/35 bg-accent-secondary/12 text-accent-secondary"
                          : isCyan
                          ? "border-cyan-500/35 bg-cyan-500/12 text-cyan-400"
                          : "border-accent-primary/35 bg-accent-primary/12 text-accent-primary"
                      }`}
                    >
                      {card.iconType === "c" && (
                        <span className="font-display text-xl font-black">C</span>
                      )}
                      {card.iconType === "html" && (
                        <Code2 className="h-6 w-6" aria-hidden="true" />
                      )}
                      {card.iconType === "word" && (
                        <span className="font-display text-xl font-black">W</span>
                      )}
                    </div>

                    {/* Skill Title, Badge & Tagline */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="truncate font-display text-lg font-bold text-ink-primary sm:text-xl">
                          {card.name}
                        </h3>
                        <span
                          className={`rounded-full border px-3 py-0.5 font-mono text-xs font-medium ${
                            isViolet
                              ? "border-accent-secondary/35 bg-accent-secondary/10 text-accent-secondary"
                              : isCyan
                              ? "border-cyan-500/35 bg-cyan-500/10 text-cyan-400"
                              : "border-accent-primary/35 bg-accent-primary/10 text-accent-primary"
                          }`}
                        >
                          {card.level}
                        </span>
                      </div>

                      <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      Proficiency Level
                    </span>
                    <span className="font-mono font-bold text-ink-primary">
                      {card.percentage}%
                    </span>
                  </div>

                  <div
                    className="relative h-2 w-full overflow-hidden rounded-full border border-hairline bg-surface"
                    role="progressbar"
                    aria-valuenow={card.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${card.name} proficiency level`}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        isViolet
                          ? "bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                          : isCyan
                          ? "bg-gradient-to-r from-accent-primary to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                          : "bg-gradient-to-r from-blue-600 to-accent-primary shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                      }`}
                      style={{ width: `${card.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Card 4: Special Highlighted "Currently Learning" Card */}
          <div className="project-subcard group flex flex-col justify-between border-accent-secondary/50 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.55),0_0_24px_-8px_rgba(139,92,246,0.3)] hover:border-accent-secondary">
            <div>
              <div className="flex items-start gap-4">
                {/* Glowing Lightbulb Icon Container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-secondary/40 bg-accent-secondary/15 text-accent-secondary shadow-[0_0_14px_rgba(139,92,246,0.35)]">
                  <Lightbulb className="h-6 w-6 animate-pulse" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-secondary">
                      {skills.currentlyLearning.eyebrow}
                    </span>
                    <a
                      href={skills.currentlyLearning.link}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-secondary/40 bg-accent-secondary/10 text-accent-secondary transition-all duration-200 group-hover:scale-110 group-hover:bg-accent-secondary group-hover:text-white"
                      aria-label={`Explore ${skills.currentlyLearning.tech}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="mt-1 font-display text-lg font-bold sm:text-xl">
                    <span className="about-name-gradient">
                      {skills.currentlyLearning.tech}
                    </span>
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                    {skills.currentlyLearning.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom In-Progress Status Bar */}
            <div className="mt-6 flex items-center justify-between border-t border-hairline pt-3.5 text-xs">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-accent-secondary">
                <span className="h-2 w-2 rounded-full bg-accent-secondary animate-pulse" />
                Active Focus
              </span>
              <a
                href={skills.currentlyLearning.link}
                className="inline-flex items-center gap-1 font-sans text-xs font-medium text-ink-secondary transition-colors hover:text-accent-primary"
              >
                <span>View Projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 5 Primary Areas of Focus & Specialization (Restored from Picture 2 to maintain site depth) */}
        <div className="mt-12 border-t border-hairline pt-8">
          <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Primary Areas of Focus & Specialization //
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skills.interestsDetail.map((interest, idx) => (
              <div
                key={interest.title}
                className="rounded-xl border border-hairline bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent-primary/50"
              >
                <span className="font-mono text-xs font-semibold text-accent-primary">
                  0{idx + 1}
                </span>
                <h4 className="mt-1.5 font-display text-sm font-bold text-ink-primary">
                  {interest.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                  {interest.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}