import React from "react";

export default function SurfaceCard({
  children,
  className = "",
  interactive = false,
  as: Component = "div",
}) {
  return (
    <Component
      className={`surface-card rounded-xl border border-accent-primary/40 bg-elevated p-6 transition-all duration-300 ${
        interactive
          ? "hover:-translate-y-1 hover:border-accent-primary/75"
          : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}

