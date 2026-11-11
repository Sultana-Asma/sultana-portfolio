import React from "react";
import { ArrowUpRight, Check, Layout, Code2, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";

const serviceIcons = [Layout, Code2, Sparkles];

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
      className="border-b border-hairline bg-surface/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={services.sectionIndex}
          eyebrow={services.eyebrow}
          title={services.heading}
          description={services.description}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.items.map((service, idx) => {
            const IconComponent = serviceIcons[idx % serviceIcons.length];
            return (
              <SurfaceCard
                key={service.id}
                interactive
                className="flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-hairline pb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-bold text-ink-muted">
                      SERVICE // {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {service.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-hairline pt-4">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-secondary sm:text-sm"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={() => handleServiceInquire(service.inquirySubject)}
                    className="inline-flex w-full items-center justify-between rounded-lg border border-hairlineStrong bg-surface px-4 py-3 font-mono text-xs font-semibold text-ink-primary transition-all hover:border-accent-primary hover:bg-accent-primary hover:text-white"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </SurfaceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

