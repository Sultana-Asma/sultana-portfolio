import React from "react";
import { ArrowLeft, Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function NotFoundSection() {
  return (
    <section className="swiss-grid-bg flex min-h-[75vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-2xl border border-hairline bg-elevated p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-hairlineStrong bg-surface text-accent-primary">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </div>

        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-primary">
          ERROR 404 // ROUTE NOT FOUND
        </p>

        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
          This page is outside the viewport.
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-ink-secondary sm:text-base">
          The URL you requested does not exist on{" "}
          <strong className="font-semibold text-ink-primary">
            {portfolioData.owner.fullName}
          </strong>
          &apos;s portfolio. Let&apos;s bring you back to the main showcase.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Portfolio Home</span>
          </a>
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-hairlineStrong bg-surface px-5 py-3 text-sm font-semibold text-ink-primary transition-colors hover:border-accent-primary hover:text-accent-primary"
          >
            <span>Explore Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}

