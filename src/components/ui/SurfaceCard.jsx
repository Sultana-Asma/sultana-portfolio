import React from "react";

export default function SurfaceCard({
  children,
  className = "",
  interactive = false,
  as: Component = "div",
}) {
  return (
    <Component
      className={`rounded-xl border border-hairline bg-elevated p-6 transition-all duration-200 ${
        interactive
          ? "hover:-translate-y-1 hover:border-accent-primary/60"
          : ""
      } ${className}`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </Component>
  );
}

