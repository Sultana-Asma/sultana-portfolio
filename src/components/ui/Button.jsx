import React from "react";

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  download = false,
  external = false,
  disabled = false,
  ariaLabel,
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-sans text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-accent-primary text-white hover:bg-accent-hover shadow-sm hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "border border-hairlineStrong bg-elevated text-ink-primary hover:border-accent-primary hover:text-accent-primary hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent text-ink-secondary hover:bg-surface hover:text-ink-primary",
  };

  const combinedClasses = `${baseClasses} ${
    variants[variant] || variants.primary
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}

