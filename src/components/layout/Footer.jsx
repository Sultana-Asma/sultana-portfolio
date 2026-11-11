"use client";

import React from "react";
import { ArrowUp, Github, Mail, MapPin, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { owner, navigation } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-hairline bg-surface text-ink-secondary">
      <div className="mx-auto max-w-portfolio px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Column 1: Brand Identity & University Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-primary/40 bg-accent-primary/10 font-display text-xs font-extrabold text-accent-primary">
                {owner.monogram}
              </span>
              <span className="font-display text-lg font-bold text-ink-primary">
                {owner.fullName}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-secondary">
              {owner.title}. Final-semester CSE student at{" "}
              <span className="text-ink-primary">{owner.university}</span>{" "}
              (Class of {owner.graduationYear}) building clean, responsive web
              interfaces with HTML, CSS, JavaScript, and React.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
                {owner.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
                CSE · {owner.graduationYear}
              </span>
            </div>
          </div>

          {/* Column 2: Sitemap Links */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-primary">
              Quick Navigation
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-accent-primary"
                  >
                    <span className="mr-1.5 font-mono text-xs text-ink-muted">
                      {item.index}.
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Connect & Back to Top */}
          <div className="flex flex-col justify-between md:col-span-3">
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-primary">
                Direct Channels
              </h3>
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href={`mailto:${owner.email}`}
                  aria-label={`Email ${owner.fullName}`}
                  title={owner.email}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-elevated text-ink-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={owner.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title={owner.githubUrl}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-elevated text-ink-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-3 truncate font-mono text-xs text-ink-muted">
                {owner.email}
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-lg border border-hairlineStrong bg-elevated px-3.5 py-2 font-mono text-xs font-medium text-ink-primary transition-colors hover:border-accent-primary hover:text-accent-primary"
              >
                <span>Back to top</span>
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 text-xs text-ink-muted sm:flex-row">
          <p>
            © {currentYear} {owner.fullName}. All rights reserved.
          </p>
          <p className="font-mono">
            Built with HTML5 · CSS3 · JavaScript · React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
