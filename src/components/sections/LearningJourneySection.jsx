import React from "react";
import { Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Badge from "@/components/ui/Badge";

export default function LearningJourneySection() {
  const { learningJourney } = portfolioData;

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="border-b border-hairline py-16 sm:py-24"
    >
      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={learningJourney.sectionIndex}
          eyebrow={learningJourney.eyebrow}
          title={learningJourney.heading}
          description={learningJourney.description}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {learningJourney.milestones.map((milestone) => {
            const isActive = milestone.status === "Active Specialization";
            return (
              <SurfaceCard
                key={milestone.step}
                interactive
                className={`flex flex-col justify-between p-6 ${
                  isActive ? "border-accent-primary/60" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-accent-primary">
                      STEP {milestone.step}
                    </span>
                    <Badge variant={isActive ? "accent" : "default"}>
                      {milestone.status}
                    </Badge>
                  </div>

                  <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    {milestone.phase}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink-primary">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-hairline pt-4">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SurfaceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

