import React from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";

/**
 * Experience & Certifications Sections
 * Strictly conditional: Neither section renders unless enabled is true in portfolioData.js,
 * preventing any fabricated experience or credentials.
 */
export default function ConditionalSections() {
  const { experience, certifications } = portfolioData;

  return (
    <>
      {experience.enabled && experience.items.length > 0 && (
        <section
          id="experience"
          className="border-b border-hairline py-16 sm:py-24"
        >
          <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
            <SectionHeader
              index={experience.sectionIndex}
              eyebrow={experience.eyebrow}
              title={experience.heading}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {experience.items.map((item, idx) => (
                <SurfaceCard key={idx}>
                  <h3 className="font-display text-lg font-bold text-ink-primary">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-accent-primary">
                    {item.organization} · {item.period}
                  </p>
                  <p className="mt-2 text-sm text-ink-secondary">
                    {item.description}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {certifications.enabled && certifications.items.length > 0 && (
        <section
          id="certifications"
          className="border-b border-hairline py-16 sm:py-24"
        >
          <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
            <SectionHeader
              index={certifications.sectionIndex}
              eyebrow={certifications.eyebrow}
              title={certifications.heading}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {certifications.items.map((cert, idx) => (
                <SurfaceCard key={idx}>
                  <h3 className="font-display text-lg font-bold text-ink-primary">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-ink-muted">
                    {cert.issuer} · {cert.date}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

