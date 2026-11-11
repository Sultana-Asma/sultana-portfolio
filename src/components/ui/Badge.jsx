import React from "react";

export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default:
      "border-hairline bg-surface text-ink-secondary hover:border-hairlineStrong",
    accent:
      "border-accent-primary/30 bg-accent-primary/10 text-accent-primary",
    secondary:
      "border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary",
    outline:
      "border-hairlineStrong bg-transparent text-ink-primary",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium tracking-wide transition-colors ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
}

