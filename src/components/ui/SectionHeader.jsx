import React from "react";

export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <div
        className={`mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted ${
          isCentered ? "justify-center" : "justify-start"
        }`}
      >
        {index && (
          <span className="inline-flex items-center rounded border border-hairline bg-surface px-2 py-0.5 font-medium text-accent-primary">
            {index}
          </span>
        )}
        <span className="h-px w-6 bg-hairlineStrong" aria-hidden="true" />
        <span className="font-semibold tracking-[0.14em] text-ink-secondary">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-display text-fluid-h2 font-bold text-ink-primary">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

