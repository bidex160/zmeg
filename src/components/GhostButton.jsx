import React from "react";

/** Secondary/outline button used alongside HazardButton. */
export default function GhostButton({ children, onClick, className = "", type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={`ghost-btn ${className}`}>
      {children}
    </button>
  );
}
