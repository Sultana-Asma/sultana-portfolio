import React from "react";
import { GraduationCap, Calendar, Code2, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Badge from "@/components/ui/Badge";

const factIcons = [GraduationCap, Calendar, Code2, MapPin];

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-hairline py-16 sm:py-24"
    >
      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={about.sectionIndex}
          eyebrow={about.eyebrow}
          title={about.heading}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Biography & Primary Interests (7 Cols) */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-ink-secondary">
              {about.paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-hairline bg-elevated/60 p-6"
                >
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>

            {/* Primary Interests Strip */}
            <div className="mt-6 rounded-xl border border-hairline bg-surface p-6">
              <div className="mb-3.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink-primary">
                <Sparkles
                  className="h-4 w-4 text-accent-primary"
                  aria-hidden="true"
                />
                <span>Primary Professional Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.primaryInterests.map((interest) => (
                  <Badge key={interest} variant="accent">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Academic & Location Bento Cards (5 Cols) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {about.quickFacts.map((fact, idx) => {
              const IconComponent = factIcons[idx % factIcons.length];
              return (
                <SurfaceCard
                  key={fact.label}
                  interactive
                  className="flex items-start gap-4 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-ink-primary">
                      {fact.value}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-secondary">
                      {fact.meta}
                    </p>
                  </div>
                </SurfaceCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
