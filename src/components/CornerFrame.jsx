import React from "react";

/** Blueprint-style corner bracket frame — the site's signature visual motif. */
export default function CornerFrame({ children, className = "", dark = false }) {
  return (
    <div className={`corner-frame ${dark ? "corner-frame--dark" : ""} ${className}`}>
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      {children}
    </div>
  );
}
