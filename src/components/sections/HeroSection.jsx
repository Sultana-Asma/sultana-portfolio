import React, { useState } from "react";
import {
  ArrowRight,
  FileDown,
  Github,
  MapPin,
  GraduationCap,
  Code2,
  CheckCircle2,
  User,
  Layers,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const { owner, hero } = portfolioData;
  const [activeView, setActiveView] = useState("portrait"); // "portrait" | "code"
  const [photoSrc, setPhotoSrc] = useState(
    owner.profilePhotoUrl || "/profile-avatar.svg"
  );

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="swiss-grid-bg relative overflow-hidden border-b border-hairline py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle Top Ambient Accent Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-accent-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Introduction, Value Proposition & CTAs (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge variant="accent">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                <span>{hero.badgeText}</span>
              </Badge>
              <span className="font-mono text-xs text-ink-muted">
                Class of {owner.graduationYear} · {owner.university}
              </span>
            </div>

            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-primary">
              {hero.greeting} {owner.fullName} — {owner.title}
            </p>

            <h1
              id="hero-heading"
              className="mt-3 font-display text-fluid-display font-extrabold tracking-tight text-ink-primary"
            >
              Building Clean,{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Responsive & Modern
              </span>{" "}
              Web Interfaces.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
              {hero.description}
            </p>

            {/* Primary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href={hero.primaryCta.href} variant="primary">
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                download
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                <span>{hero.secondaryCta.label}</span>
              </Button>
              <Button
                href={owner.githubUrl}
                variant="ghost"
                external
                className="border border-hairline bg-elevated/60"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </Button>
            </div>

            {/* Verified Core Skills Bar */}
            <div className="mt-10 border-t border-hairline pt-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="mr-1 font-mono text-xs font-medium uppercase tracking-wider text-ink-muted">
                  Core Stack:
                </span>
                {hero.coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-hairlineStrong bg-elevated px-3.5 py-1.5 font-mono text-xs font-semibold text-ink-primary"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-accent-primary"
                      aria-hidden="true"
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Portrait Frame & Interactive Developer Spec (5 Cols) */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-hairlineStrong bg-elevated p-5 lg:max-w-none"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Top Header Bar with View Switcher */}
              <div className="mb-4 flex items-center justify-between border-b border-hairline pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-primary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-secondary" />
                  <span className="font-mono text-xs font-medium text-ink-secondary">
                    {activeView === "portrait"
                      ? "portrait.profile"
                      : "developer.config.js"}
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="Profile card view switcher"
                  className="inline-flex rounded-lg border border-hairline bg-surface p-0.5"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeView === "portrait"}
                    onClick={() => setActiveView("portrait")}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-colors ${
                      activeView === "portrait"
                        ? "bg-accent-primary text-white"
                        : "text-ink-secondary hover:text-ink-primary"
                    }`}
                  >
                    <User className="h-3 w-3" aria-hidden="true" />
                    <span>Portrait</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeView === "code"}
                    onClick={() => setActiveView("code")}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-colors ${
                      activeView === "code"
                        ? "bg-accent-primary text-white"
                        : "text-ink-secondary hover:text-ink-primary"
                    }`}
                  >
                    <Code2 className="h-3 w-3" aria-hidden="true" />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {activeView === "portrait" ? (
                /* View 1: Profile Photo Container (Automatically loads /profile-photo.jpg or falls back cleanly to /profile-avatar.svg) */
                <div className="relative aspect-[4/4] w-full overflow-hidden rounded-xl border border-hairline bg-surface">
                  <img
                    src={photoSrc}
                    alt={`${owner.fullName} — ${owner.title}`}
                    onError={() => {
                      if (photoSrc !== "/profile-avatar.svg") {
                        setPhotoSrc("/profile-avatar.svg");
                      }
                    }}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ) : (
                /* View 2: Interactive Developer Spec Code View */
                <div className="flex aspect-[4/4] w-full flex-col justify-between rounded-xl border border-hairline bg-surface p-5 font-mono text-xs leading-relaxed">
                  <div className="space-y-1.5 text-ink-primary">
                    <p className="text-ink-muted">
                      {"// Verified Profile Configuration"}
                    </p>
                    <p>
                      <span className="text-accent-primary">export const</span>{" "}
                      <span className="font-semibold text-white">
                        developer
                      </span>{" "}
                      = {"{"}
                    </p>
                    <div className="space-y-1 pl-4">
                      <p>
                        name:{" "}
                        <span className="text-emerald-400">
                          &quot;{owner.fullName}&quot;
                        </span>
                        ,
                      </p>
                      <p>
                        title:{" "}
                        <span className="text-emerald-400">
                          &quot;{owner.shortRole}&quot;
                        </span>
                        ,
                      </p>
                      <p>
                        university:{" "}
                        <span className="text-accent-primary">
                          &quot;{owner.university}&quot;
                        </span>
                        ,
                      </p>
                      <p>
                        semester:{" "}
                        <span className="text-accent-secondary">
                          &quot;{owner.semester}&quot;
                        </span>
                        ,
                      </p>
                      <p>
                        graduation:{" "}
                        <span className="text-amber-400">
                          {owner.graduationYear}
                        </span>
                        ,
                      </p>
                      <p>
                        location:{" "}
                        <span className="text-emerald-400">
                          &quot;{owner.location}&quot;
                        </span>
                        ,
                      </p>
                      <p>
                        skills: [
                        <span className="text-accent-primary">
                          &quot;HTML&quot;, &quot;CSS&quot;, &quot;JS&quot;, &quot;React&quot;
                        </span>
                        ],
                      </p>
                    </div>
                    <p>{"};"}</p>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-hairline bg-elevated px-3 py-2 text-[11px] text-ink-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <Layers
                        className="h-3.5 w-3.5 text-accent-primary"
                        aria-hidden="true"
                      />
                      Ready for Internships & Freelance
                    </span>
                    <span className="text-accent-primary">UTF-8</span>
                  </div>
                </div>
              )}

              {/* Verified Quick Metadata Strip */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-hairline bg-surface p-3.5">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
                    <GraduationCap
                      className="h-3.5 w-3.5 text-accent-primary"
                      aria-hidden="true"
                    />
                    <span>University</span>
                  </div>
                  <p className="mt-1 truncate text-xs font-semibold text-ink-primary">
                    {owner.university}
                  </p>
                  <p className="font-mono text-[11px] text-ink-secondary">
                    {owner.semester} · {owner.graduationYear}
                  </p>
                </div>

                <div className="rounded-xl border border-hairline bg-surface p-3.5">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
                    <MapPin
                      className="h-3.5 w-3.5 text-accent-secondary"
                      aria-hidden="true"
                    />
                    <span>Location & Focus</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-ink-primary">
                    {owner.location}
                  </p>
                  <p className="font-mono text-[11px] text-ink-secondary">
                    Front-End & UI/UX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
