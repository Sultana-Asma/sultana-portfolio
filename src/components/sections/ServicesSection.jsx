import React from "react";
import {
  Code2,
  Check,
  ArrowRight,
  Handshake,
  Mail,
  FileText,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SurfaceCard from "@/components/ui/SurfaceCard";

function ServiceOrbitalIcon({ type, accent }) {
  const isViolet = accent === "violet";
  const isCyan = accent === "cyan";

  const ringColor = isViolet
    ? "border-accent-secondary/40 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
    : isCyan
    ? "border-cyan-500/40 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
    : "border-accent-primary/40 shadow-[0_0_12px_rgba(59,130,246,0.3)]";

  const boxStyles = isViolet
    ? "border-accent-secondary/40 bg-accent-secondary/15 text-accent-secondary shadow-[0_0_16px_rgba(139,92,246,0.3)]"
    : isCyan
    ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.3)]"
    : "border-accent-primary/40 bg-accent-primary/15 text-accent-primary shadow-[0_0_16px_rgba(59,130,246,0.3)]";

  return (
    <div className="relative mb-6 flex h-20 w-full items-center justify-center">
      {/* Orbital Elliptical Ring (Matching Picture 1) */}
      <div
        className={`pointer-events-none absolute h-14 w-28 rounded-[50%] border -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 ${ringColor}`}
        aria-hidden="true"
      />

      {/* Centered Glowing Icon Box */}
      <div
        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${boxStyles}`}
      >
        {type === "html" && (
          <span className="font-mono text-lg font-extrabold tracking-wider">
            &lt;/&gt;
          </span>
        )}
        {type === "c" && (
          <span className="font-display text-2xl font-black">C</span>
        )}
        {type === "word" && (
          <span className="font-display text-2xl font-black">W</span>
        )}
      </div>
    </div>
  );
}

export default function ServicesSection({ onSelectService }) {
  const { services } = portfolioData;

  const handleServiceInquire = (subject) => {
    if (onSelectService) {
      onSelectService(subject);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
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
        {/* Section Header - Matching the site's unified header language */}
        <div className="mb-10 sm:mb-12">
          <div className="mb-3 flex items-center justify-start gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
            <span className="inline-flex items-center rounded border border-hairline bg-surface px-2 py-0.5 font-medium text-accent-primary">
              {services.sectionIndex}
            </span>
            <span className="h-px w-6 bg-hairlineStrong" aria-hidden="true" />
            <span className="font-semibold tracking-[0.14em] text-ink-secondary">
              {services.eyebrow}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h2
                id="services-heading"
                className="font-display text-fluid-h2 font-bold text-ink-primary"
              >
                {services.heading}{" "}
                <span className="about-name-gradient">
                  {services.headingAccent}
                </span>
              </h2>
              <div className="hidden h-px w-16 bg-gradient-to-r from-accent-primary/60 to-transparent sm:block" />
            </div>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-secondary sm:text-base">
              {services.description}
            </p>
            {/* Short horizontal gradient accent pill */}
            <div
              className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* 3 Service Cards Grid (Matching Picture 1 layout with Picture 2 site UI) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => {
            const isViolet = service.accent === "violet";
            const isCyan = service.accent === "cyan";

            return (
              <SurfaceCard
                key={service.id}
                interactive
                className="group flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  {/* Orbital Icon at the top */}
                  <ServiceOrbitalIcon
                    type={service.iconType}
                    accent={service.accent}
                  />

                  {/* Title and Short Description (Centered as in Picture 1) */}
                  <div className="text-center">
                    <h3 className="font-display text-xl font-bold text-ink-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {service.summary}
                    </p>
                  </div>

                  {/* Checklist of Deliverables with Checkmarks */}
                  <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink-secondary"
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isViolet
                              ? "text-accent-secondary"
                              : isCyan
                              ? "text-cyan-400"
                              : "text-accent-primary"
                          }`}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action: Circular Arrow Button & Inquire Trigger */}
                <div className="mt-8 flex items-center justify-between border-t border-hairline/60 pt-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {service.number} // Available
                  </span>
                  <button
                    type="button"
                    onClick={() => handleServiceInquire(service.inquirySubject)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-ink-secondary transition-all duration-200 hover:scale-110 hover:border-accent-primary hover:bg-accent-primary hover:text-white"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </SurfaceCard>
            );
          })}
        </div>

        {/* Bottom Collaboration Banner ("Let's Work Together!" from Picture 1) */}
        {services.collaborationBanner && (
          <div className="mt-10 sm:mt-12">
            <SurfaceCard className="p-5 sm:p-6">
              <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
                {/* Left Side: Handshake Icon + Divider + Text */}
                <div className="flex w-full items-center gap-4 sm:w-auto">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-secondary/35 bg-accent-secondary/10 text-accent-secondary shadow-[0_0_16px_rgba(139,92,246,0.25)]">
                    <Handshake className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="hidden h-10 w-px bg-hairline sm:block" />
                  <div>
                    <h4 className="font-display text-base font-bold text-ink-primary sm:text-lg">
                      {services.collaborationBanner.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-ink-secondary sm:text-sm">
                      {services.collaborationBanner.description}
                    </p>
                  </div>
                </div>

                {/* Right Side: Contact Button */}
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent-primary/40 bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-2.5 font-sans text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_28px_rgba(139,92,246,0.5)] sm:w-auto"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{services.collaborationBanner.buttonLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </SurfaceCard>
          </div>
        )}
      </div>
    </section>
  );
}