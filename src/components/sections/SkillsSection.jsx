import React from "react";
import { ArrowRight, Lightbulb, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Dot Grid Matrix (5x3)
function DotGrid({ className = "" }) {
  return (
    <div
      className={`grid grid-cols-5 gap-2.5 w-fit ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-cyan-400/50 shadow-[0_0_6px_rgba(34,211,238,0.5)]"
        />
      ))}
    </div>
  );
}

// 3D-styled Laptop Graphic with Floating Elements
function SkillsLaptopGraphic() {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center py-4 lg:py-0">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Floating Gear (Top Left) */}
      <div
        className="absolute -left-2 top-4 z-20 flex h-10 w-10 animate-pulse items-center justify-center rounded-xl border border-purple-500/40 bg-[#1e1338]/90 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md transition-transform hover:rotate-45 sm:-left-4 sm:top-2 sm:h-12 sm:w-12"
        aria-hidden="true"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </div>

      {/* Floating Code Bracket Tag (Below Gear) */}
      <div
        className="absolute left-4 top-24 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-purple-400/40 bg-[#160d2e]/90 font-mono text-xs font-bold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.35)] backdrop-blur-md sm:left-2 sm:top-28 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <span>&lt;/&gt;</span>
      </div>

      {/* Floating Mouse Pointer Arrow (Right) */}
      <div
        className="absolute -right-1 top-12 z-20 flex h-9 w-9 items-center justify-center text-purple-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] sm:-right-4 sm:top-10 sm:h-11 sm:w-11"
        aria-hidden="true"
      >
        <svg
          className="h-7 w-7 sm:h-8 sm:w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 2l16 12-7.5 1.5L9 22 4 2z" />
        </svg>
      </div>

      {/* 3D Laptop Perspective Wrapper */}
      <div className="relative z-10 w-full max-w-[340px] transition-transform duration-500 hover:scale-105 sm:max-w-[380px]">
        {/* Laptop Screen Portion */}
        <div className="mx-auto w-[82%] rounded-t-2xl border-2 border-slate-700/80 bg-gradient-to-b from-[#141829] to-[#0a0d18] p-3 shadow-[0_12px_36px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.25)]">
          {/* Top screen camera dot */}
          <div className="mb-2 flex justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500/80" />
          </div>

          {/* Screen Display Area */}
          <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-purple-500/30 bg-[#090b16] shadow-inner">
            {/* Screen Inner Ambient Radial Glow */}
            <div className="absolute inset-0 bg-radial from-purple-600/30 via-indigo-900/20 to-transparent" />

            {/* Glowing Code Symbol */}
            <div className="relative z-10 flex items-center justify-center font-mono text-3xl font-extrabold tracking-widest sm:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(168,85,247,0.9)]">
                &lt;/&gt;
              </span>
            </div>

            {/* Scanlines / tech matrix effect */}
            <div
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(168,85,247,0.2) 1px, transparent 1px)",
                backgroundSize: "100% 4px",
              }}
            />
          </div>
        </div>

        {/* Laptop Hinge & Base Deck */}
        <div className="relative -mt-0.5 mx-auto w-full">
          {/* Upper Base Notch */}
          <div className="mx-auto h-2 w-[86%] rounded-t-sm bg-gradient-to-b from-slate-600 to-slate-800 shadow-md" />

          {/* Lower Base Deck with Perspective */}
          <div className="h-6 w-full rounded-b-2xl border-t border-purple-500/40 bg-gradient-to-b from-slate-800 via-[#131728] to-[#0a0d18] px-6 shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_24px_rgba(139,92,246,0.35)]">
            {/* Trackpad Notch */}
            <div className="mx-auto mt-1 h-1 w-16 rounded-full bg-slate-600/70" />
          </div>

          {/* Base bottom ambient neon line */}
          <div className="mx-auto -mt-1 h-1 w-[90%] rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
        </div>
      </div>
    </div>
  );
}

// Custom Skill Icon Renderer
function SkillIcon({ type }) {
  if (type === "c") {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#2a1b54] to-[#140d2d] shadow-[0_4px_16px_rgba(168,85,247,0.25)] sm:h-16 sm:w-16">
        <span className="font-display text-2xl font-black text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] sm:text-3xl">
          C
        </span>
      </div>
    );
  }

  if (type === "html") {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#e44d26] to-[#f16529] shadow-[0_4px_16px_rgba(241,101,41,0.35)] sm:h-16 sm:w-16">
        {/* HTML5 Shield shape with 5 */}
        <div className="flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] sm:text-3xl">
            5
          </span>
        </div>
      </div>
    );
  }

  if (type === "word") {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#185abd] to-[#0c3b82] shadow-[0_4px_16px_rgba(24,90,189,0.35)] sm:h-16 sm:w-16">
        <span className="font-display text-2xl font-black text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] sm:text-3xl">
          W
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-900/40 text-purple-300">
      *
    </div>
  );
}

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-b border-hairline bg-[#090b14] py-16 sm:py-24"
    >
      {/* Background ambient lighting and subtle organic waves */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        {/* Top Header Section with Left Content & Right 3D Laptop */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Eyebrow, Title, Subtitle, Underline */}
          <div className="lg:col-span-7">
            {/* 5x3 Dot Grid Pattern */}
            <DotGrid className="mb-4 text-cyan-400" />

            {/* Eyebrow badge matching reference */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-purple-500/40 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold tracking-wider text-purple-300 backdrop-blur-md">
              <span className="flex h-5 w-5 items-center justify-center rounded-md border border-purple-400/50 bg-purple-900/60 font-mono text-[11px] font-bold text-white">
                {skills.sectionIndex}
              </span>
              <span className="text-purple-400/60">—</span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-purple-200">
                {skills.eyebrow}
              </span>
            </div>

            {/* Main Title with Gradient Accent */}
            <h2
              id="skills-heading"
              className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {skills.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(168,85,247,0.4)]">
                {skills.headingAccent}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {skills.description}
            </p>

            {/* Short horizontal gradient underline pill */}
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_12px_rgba(168,85,247,0.7)]"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: 3D Laptop Graphic */}
          <div className="lg:col-span-5">
            <SkillsLaptopGraphic />
          </div>
        </div>

        {/* 2x2 Grid of Skill Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Card 1, 2, 3: Technical Skills with Progress Bars */}
          {skills.skillCards.map((card) => {
            const isCyanBadge = card.levelBadgeColor === "cyan";
            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-gradient-to-b from-[#141829]/90 to-[#0e1220]/80 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(168,85,247,0.2)] sm:p-7"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Skill Icon */}
                  <SkillIcon type={card.iconType} />

                  {/* Title, Badge & Description */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="truncate font-display text-lg font-bold text-white sm:text-xl">
                        {card.name}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full border px-3 py-0.5 text-xs font-semibold ${
                          isCyanBadge
                            ? "border-cyan-500/40 bg-cyan-950/40 text-cyan-300"
                            : "border-purple-500/40 bg-purple-950/40 text-purple-300"
                        }`}
                      >
                        {card.level}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-400">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="mt-6 flex items-center gap-4">
                  <div
                    className="relative h-2.5 flex-1 overflow-hidden rounded-full border border-slate-700/50 bg-[#0a0d18]"
                    role="progressbar"
                    aria-valuenow={card.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${card.name} proficiency level`}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-all duration-700 ease-out"
                      style={{ width: `${card.percentage}%` }}
                    />
                  </div>
                  <span className="font-mono text-sm font-bold text-white">
                    {card.percentage}%
                  </span>
                </div>
              </div>
            );
          })}

          {/* Card 4: Special Highlighted "Currently Learning" Card */}
          <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-purple-500/60 bg-gradient-to-br from-[#1a1338]/95 via-[#131429]/90 to-[#0e1122]/95 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_35px_rgba(168,85,247,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_45px_rgba(168,85,247,0.45)] sm:p-7">
            {/* Ambient inner glow */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-purple-500/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="flex items-center gap-4 sm:gap-5">
              {/* Glowing Lightbulb with radiant pulse */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/50 bg-gradient-to-br from-purple-600/30 to-indigo-900/40 text-purple-300 shadow-[0_0_24px_rgba(168,85,247,0.5)] sm:h-16 sm:w-16">
                <Lightbulb className="h-7 w-7 text-purple-300 drop-shadow-[0_0_12px_rgba(216,180,254,0.9)]" />
                {/* Radiating Ray accents */}
                <span
                  className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_8px_rgba(216,180,254,1)] animate-ping"
                  aria-hidden="true"
                />
              </div>

              {/* Text Content */}
              <div className="min-w-0 flex-1">
                <span className="font-display text-sm font-semibold tracking-wide text-slate-200">
                  {skills.currentlyLearning.eyebrow}
                </span>
                <h3 className="mt-0.5 truncate font-display text-lg font-extrabold sm:text-xl">
                  <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(168,85,247,0.5)]">
                    {skills.currentlyLearning.tech}
                  </span>
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  {skills.currentlyLearning.description}
                </p>
              </div>

              {/* Interactive Arrow Button */}
              <a
                href={skills.currentlyLearning.link}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-400/50 bg-purple-950/60 text-purple-300 shadow-[0_0_16px_rgba(168,85,247,0.35)] transition-all duration-200 group-hover:scale-110 group-hover:bg-purple-800/60 group-hover:text-white"
                aria-label={`Explore ${skills.currentlyLearning.tech}`}
              >
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Bottom mini indicator */}
            <div className="mt-6 flex items-center justify-between border-t border-purple-500/20 pt-4 text-xs text-purple-300/80">
              <span className="font-mono uppercase tracking-wider">
                In Active Progress
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-purple-200">
                <span>View Projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Right Dot Grid Matrix */}
        <div className="mt-10 flex justify-end">
          <DotGrid className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
}