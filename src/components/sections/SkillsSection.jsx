import React from "react";
import {
  Code2,
  FileCode2,
  FileText,
  Lightbulb,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";

function SkillCardIcon({ type, className = "" }) {
  if (type === "c") {
    return <span className={`font-display text-lg font-black ${className}`}>C</span>;
  }
  if (type === "html") {
    return <Code2 className={`h-5 w-5 ${className}`} aria-hidden="true" />;
  }
  if (type === "word") {
    return <span className={`font-display text-lg font-black ${className}`}>W</span>;
  }
  if (type === "learning") {
    return <Lightbulb className={`h-5 w-5 ${className}`} aria-hidden="true" />;
  }
  return <Terminal className={`h-5 w-5 ${className}`} aria-hidden="true" />;
}

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-hairline bg-surface/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={skills.sectionIndex}
          eyebrow={skills.eyebrow}
          title={skills.heading}
          description={skills.description}
        />

        {/* 4 Core Skills (2x2 Grid matching Picture 2 UI & Picture 1 Skills + Progress Bars) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.primarySkills.map((skill, idx) => {
            const isViolet = skill.accent === "violet";
            const isCyan = skill.accent === "cyan";

            return (
              <SurfaceCard
                key={skill.id}
                interactive
                className="flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  {/* Card Header matching Picture 2 */}
                  <div className="flex items-center justify-between border-b border-hairline pb-4">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                          isViolet
                            ? "border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary"
                            : isCyan
                            ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                            : "border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                        }`}
                      >
                        <SkillCardIcon
                          type={skill.iconType}
                          className={
                            isViolet
                              ? "text-accent-secondary"
                              : isCyan
                              ? "text-cyan-400"
                              : "text-accent-primary"
                          }
                        />
                      </span>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                          0{idx + 1} // {skill.category}
                        </span>
                        <h3 className="font-display text-xl font-bold text-ink-primary">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 font-mono text-[11px] font-medium ${
                        isViolet
                          ? "border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary"
                          : isCyan
                          ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                          : "border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <p className="mt-4 font-display text-sm font-semibold text-ink-primary">
                    {skill.tagline}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {skill.description}
                  </p>
                </div>

                {/* Glowing Progress Bar (from Picture 1) */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      Proficiency Level
                    </span>
                    <span className="font-mono font-bold text-ink-primary">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div
                    className="relative h-2 w-full overflow-hidden rounded-full border border-hairline bg-surface"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${skill.name} proficiency level`}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        isViolet
                          ? "bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                          : isCyan
                          ? "bg-gradient-to-r from-accent-primary to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                          : "bg-gradient-to-r from-blue-600 to-accent-primary shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                  {/* Optional Interactive Link for Currently Learning */}
                  {skill.link && (
                    <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3 text-xs">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-accent-secondary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary animate-pulse" />
                        Active Focus
                      </span>
                      <a
                        href={skill.link}
                        className="inline-flex items-center gap-1 font-sans text-xs font-medium text-ink-secondary transition-colors hover:text-accent-primary"
                      >
                        <span>View Projects</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </SurfaceCard>
            );
          })}
        </div>

        {/* 5 Primary Focus & Interest Cards (Exact same as Picture 2) */}
        <div className="mt-12">
          <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Primary Areas of Focus & Specialization //
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skills.interestsDetail.map((interest, idx) => (
              <div
                key={interest.title}
                className="rounded-xl border border-accent-primary/40 bg-elevated p-5 transition-all duration-300 shadow-[0_0_24px_-4px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:border-accent-primary/75 hover:shadow-[0_0_36px_-2px_rgba(59,130,246,0.5)]"
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