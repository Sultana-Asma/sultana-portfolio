import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Badge from "@/components/ui/Badge";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-hairline bg-surface/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={education.sectionIndex}
          eyebrow={education.eyebrow}
          title={education.heading}
        />

        <SurfaceCard className="p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Degree, University & Metadata (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="accent">{education.currentStatus}</Badge>
                <Badge variant="secondary">
                  Expected Graduation: {education.expectedGraduation}
                </Badge>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-ink-primary sm:text-3xl">
                {education.degree}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-accent-primary">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  {education.institution}
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-secondary">
                  <MapPin className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                  {education.location}
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-ink-secondary">
                {education.summary}
              </p>
            </div>

            {/* Right Column: Academic Highlights & Focus (5 Cols) */}
            <div className="flex flex-col justify-between rounded-xl border border-hairline bg-surface p-6 lg:col-span-5">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink-primary">
                  <BookOpen
                    className="h-4 w-4 text-accent-primary"
                    aria-hidden="true"
                  />
                  <span>Academic Highlights & Focus</span>
                </div>

                <ul className="mt-4 space-y-3">
                  {education.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 font-mono text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
                  Class of {education.expectedGraduation}
                </span>
                <span>B.Sc. in CSE</span>
              </div>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}

