import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Full-width page-header banner: background image + dark overlay,
 * page title, and a "Home / Current page" breadcrumb trail.
 *
 * trail: [{ label: "Home", to: "/" }, { label: "Contact" }]
 * (the last item has no `to` and renders as the current page)
 */
export default function Breadcrumb({ image, title, trail = [] }) {
  return (
    <div className="breadcrumb-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="breadcrumb-overlay" />
      <div className="breadcrumb-inner">
        <h1>{title}</h1>
        <nav className="breadcrumb-trail" aria-label="Breadcrumb">
          {trail.map((item, i) => (
            <span key={item.label} className="breadcrumb-item">
              {i > 0 && <ChevronRight size={13} />}
              {item.to ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
