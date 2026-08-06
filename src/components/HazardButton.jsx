import React from "react";
import { ArrowRight } from "lucide-react";

/** Primary CTA button with a hazard-stripe corner accent. */
export default function HazardButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  full = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hazard-btn hazard-btn--${variant} ${full ? "hazard-btn--full" : ""}`}
    >
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={2.5} />
    </button>
  );
}
