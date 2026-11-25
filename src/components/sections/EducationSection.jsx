import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Award,
} from "lucide-react";
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
      className="relative overflow-hidden border-b border-hairline bg-surface/40 py-16 sm:py-24"
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
        <SectionHeader
          index={education.sectionIndex}
          eyebrow={education.eyebrow}
          title={education.heading}
        />

        {/* 1. Main Undergraduate Degree Card */}
        <SurfaceCard interactive className="p-6 sm:p-10">
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
                  <MapPin
                    className="h-4 w-4 text-accent-secondary"
                    aria-hidden="true"
                  />
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
                  <Calendar
                    className="h-3.5 w-3.5 text-accent-secondary"
                    aria-hidden="true"
                  />
                  Class of {education.expectedGraduation}
                </span>
                <span>B.Sc. in CSE</span>
              </div>
            </div>
          </div>
        </SurfaceCard>

        {/* 2. Higher Secondary (HSC) & Secondary School (SSC) Cards (2-Column Grid) */}
        {education.academicHistory && education.academicHistory.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {education.academicHistory.map((item) => {
              const isHSC = item.id === "hsc";

              return (
                <SurfaceCard
                  key={item.id}
                  interactive
                  className="flex flex-col justify-between p-6 sm:p-8"
                >
                  <div>
                    {/* Header: Icon, Level code, Degree name & GPA Badge */}
                    <div className="flex items-start justify-between border-b border-hairline pb-4">
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                            isHSC
                              ? "border-accent-secondary/35 bg-accent-secondary/10 text-accent-secondary shadow-[0_0_14px_rgba(139,92,246,0.25)]"
                              : "border-cyan-500/35 bg-cyan-500/10 text-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.25)]"
                          }`}
                        >
                          {isHSC ? (
                            <GraduationCap className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <Award className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                            {item.code}
                          </span>
                          <h4 className="font-display text-lg font-bold text-ink-primary sm:text-xl">
                            {item.degree}
                          </h4>
                        </div>
                      </div>

                      {/* GPA Badge */}
                      <span
                        className={`shrink-0 rounded-full border px-3 py-1 font-mono text-xs font-bold shadow-sm ${
                          isHSC
                            ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                            : "border-cyan-500/40 bg-cyan-950/40 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                        }`}
                      >
                        GPA: {item.gpa}
                      </span>
                    </div>

                    {/* Institution Name */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-primary">
                      <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{item.institution}</span>
                    </div>

                    {/* Summary */}
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {item.summary}
                    </p>
                  </div>

                  {/* Footer: Year & Location */}
                  <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 font-mono text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-1.5 font-medium text-ink-secondary">
                      <Calendar
                        className="h-3.5 w-3.5 text-accent-primary"
                        aria-hidden="true"
                      />
                      Passing Year: {item.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin
                        className="h-3.5 w-3.5 text-accent-secondary"
                        aria-hidden="true"
                      />
                      {item.location}
                    </span>
                  </div>
                </SurfaceCard>
              );
            })}
          </div>
        )}

        {/* 3. Academic Summary & Qualifications Matrix Table */}
        <div className="mt-8 overflow-hidden rounded-xl border border-hairline bg-surface p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h4 className="font-display text-lg font-bold text-ink-primary">
                Academic Qualifications & Coursework Matrix
              </h4>
              <p className="font-mono text-xs text-ink-muted">
                Structured overview of formal academic milestones
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[580px] text-left text-sm text-ink-secondary">
              <thead className="border-b border-hairline bg-surface/80 font-mono text-xs uppercase tracking-wider text-ink-primary">
                <tr>
                  <th scope="col" className="px-4 py-3">Exam / Degree</th>
                  <th scope="col" className="px-4 py-3">Institution</th>
                  <th scope="col" className="px-4 py-3">Board / Dept</th>
                  <th scope="col" className="px-4 py-3">Passing Year</th>
                  <th scope="col" className="px-4 py-3">Result / GPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr className="transition-colors hover:bg-surface/50">
                  <td className="px-4 py-3.5 font-medium text-ink-primary">B.Sc. in CSE</td>
                  <td className="px-4 py-3.5">Daffodil International University</td>
                  <td className="px-4 py-3.5">Dept. of CSE, FSIT</td>
                  <td className="px-4 py-3.5 font-mono text-xs">2026 (Expected)</td>
                  <td className="px-4 py-3.5 font-mono text-xs font-semibold text-cyan-400">Enrolled (Final Sem)</td>
                </tr>
                <tr className="transition-colors hover:bg-surface/50">
                  <td className="px-4 py-3.5 font-medium text-ink-primary">HSC (Science)</td>
                  <td className="px-4 py-3.5">Govt. Yasin College, Faridpur</td>
                  <td className="px-4 py-3.5">Dhaka Board</td>
                  <td className="px-4 py-3.5 font-mono text-xs">2022</td>
                  <td className="px-4 py-3.5 font-mono text-xs font-semibold text-emerald-400">GPA 5.00</td>
                </tr>
                <tr className="transition-colors hover:bg-surface/50">
                  <td className="px-4 py-3.5 font-medium text-ink-primary">SSC (Science)</td>
                  <td className="px-4 py-3.5">Sarada Sundari Girls' High School</td>
                  <td className="px-4 py-3.5">Dhaka Board</td>
                  <td className="px-4 py-3.5 font-mono text-xs">2020</td>
                  <td className="px-4 py-3.5 font-mono text-xs font-semibold text-cyan-400">GPA 4.94</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}