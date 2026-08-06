import React from "react";
import { useNavigate } from "react-router-dom";
import CornerFrame from "../components/CornerFrame";
import HazardButton from "../components/HazardButton";
import SectionEyebrow from "../components/SectionEyebrow";
import { INDUSTRIES } from "../data/industries";
import { ICONS } from "../lib/icons";

export default function Industries() {
  const navigate = useNavigate();

  return (
    <section className="section section--paper">
      <SectionEyebrow>INDUSTRY SOLUTIONS</SectionEyebrow>
      <h1 className="section-title">Built for heavy-duty, high-stakes inspection.</h1>
      <p className="section-lede">
        ZMEG's 3D scanning and precision-machining product lines are deployed across
        engineering machinery, maritime, and rail transit — anywhere a part needs to be
        measured, matched, or remanufactured to spec.
      </p>

      <div className="industry-detail-list">
        {INDUSTRIES.map((ind, i) => {
          const Icon = ICONS[ind.icon];
          return (
            <div key={ind.id} className="industry-detail-row">
              <div className="industry-detail-num">{String(i + 1).padStart(2, "0")}</div>
              <CornerFrame className="industry-detail-icon">
                <Icon size={28} strokeWidth={1.5} />
              </CornerFrame>
              <div className="industry-detail-copy">
                <h2>{ind.name}</h2>
                <p className="muted">{ind.tagline}</p>
                <p>{ind.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cta-band cta-band--inline">
        <div>
          <h2>Not sure which scanner fits your inspection workflow?</h2>
          <p>Tell us the part size, tolerance, and environment — we'll recommend a configuration.</p>
        </div>
        <HazardButton onClick={() => navigate("/contact")}>Talk to ZMEG</HazardButton>
      </div>
    </section>
  );
}
