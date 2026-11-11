import React from "react";
import { Check, FileCode2, Palette, Terminal, Atom, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";

const skillIcons = {
  html: FileCode2,
  css: Palette,
  javascript: Terminal,
  react: Atom,
};

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

        {/* 4 Verified Core Skills (2x2 Grid) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.primarySkills.map((skill, idx) => {
            const IconComponent = skillIcons[skill.id] || Layers;
            const isViolet = skill.accent === "violet";
            return (
              <SurfaceCard
                key={skill.id}
                interactive
                className="flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-hairline pb-4">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                          isViolet
                            ? "border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary"
                            : "border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" aria-hidden="true" />
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
                          : "border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                      }`}
                    >
                      Verified Skill
                    </span>
                  </div>

                  <p className="mt-4 font-display text-sm font-semibold text-ink-primary">
                    {skill.tagline}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {skill.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary"
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isViolet
                              ? "text-accent-secondary"
                              : "text-accent-primary"
                          }`}
                          aria-hidden="true"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SurfaceCard>
            );
          })}
        </div>

        {/* 5 Primary Focus & Interest Cards */}
        <div className="mt-12">
          <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Primary Areas of Focus & Specialization //
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skills.interestsDetail.map((interest, idx) => (
              <div
                key={interest.title}
                className="rounded-xl border border-hairline bg-elevated p-5 transition-colors hover:border-accent-primary/50"
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
