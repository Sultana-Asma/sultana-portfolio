"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, FileDown, Github, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { owner, navigation } = portfolioData;
  const { theme, toggleTheme, mounted } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sectionIds = navigation.map((item) => item.href.replace("#", ""));
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-hairline shadow-lg shadow-black/20"
          : "border-b border-hairline/70"
      }`}
      style={{
        backgroundColor: "var(--surface-glass)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-portfolio items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus-visible:rounded-md"
          aria-label={`${owner.fullName} — Home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-primary/40 bg-accent-primary/10 font-display text-xs font-extrabold tracking-wider text-accent-primary transition-all group-hover:border-accent-primary group-hover:bg-accent-primary group-hover:text-white">
            {owner.monogram}
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-ink-primary sm:text-base">
              {owner.fullName}
            </span>
            <span className="hidden font-mono text-[11px] text-ink-muted sm:inline">
              CSE Student · Front-End Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-accent-primary/15 font-semibold text-accent-primary"
                    : "text-ink-secondary hover:bg-elevated hover:text-ink-primary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions: GitHub + Theme Toggle + Resume CTA + Mobile Menu */}
        <div className="flex items-center gap-2">
          <a
            href={owner.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sultana Asma Islam GitHub Profile"
            title="GitHub: Sultana-Asma"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-elevated text-ink-secondary transition-colors hover:border-accent-primary hover:text-accent-primary sm:inline-flex"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted && theme === "light"
                ? "Switch to Dark Theme"
                : "Switch to Light Theme"
            }
            title={
              mounted && theme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-elevated text-ink-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
          >
            {mounted && theme === "light" ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a
            href={owner.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-lg bg-accent-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-accent-hover sm:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-elevated text-ink-primary transition-colors hover:border-accent-primary lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="border-t border-hairline bg-elevated px-4 pb-6 pt-3 shadow-2xl lg:hidden"
        >
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent-primary/15 font-semibold text-accent-primary"
                      : "text-ink-primary hover:bg-surface"
                  }`}
                >
                  <span>
                    <span className="mr-2 font-mono text-xs text-ink-muted">
                      {item.index}.
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-ink-muted"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-hairline pt-4">
            <a
              href={owner.resumeUrl}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href={owner.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-hairlineStrong bg-surface px-4 py-2.5 text-xs font-medium text-ink-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>{owner.githubHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
