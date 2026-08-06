import React from "react";

/** Small monospace label used above section headings. */
export default function SectionEyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-dash" />
      {children}
    </div>
  );
}
