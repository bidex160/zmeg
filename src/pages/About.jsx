import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import CornerFrame from "../components/CornerFrame";
import HazardButton from "../components/HazardButton";
import SectionEyebrow from "../components/SectionEyebrow";
import { COMPANY } from "../data/company";
import { ICONS } from "../lib/icons";
import teamPhoto from "../assets/team-photo.jpg";
import aboutUS from "../assets/about-us.jpeg";
import Breadcrumb from "../components/Breadcrumb";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
     <Breadcrumb
            image={aboutUS}
            title="About Us"
            trail={[{ label: "Home", to: "/" }, { label: "About Us" }]}
     />
    <section className="section section--paper">
      <SectionEyebrow>ABOUT ZMEG</SectionEyebrow>
      <h1 className="section-title">{COMPANY.fullName}</h1>
      <p className="section-lede">{COMPANY.about}</p>

      <CornerFrame className="about-photo-frame">
        <img src={teamPhoto} alt="ZMEG engineering and production team at the Jinan facility" />
      </CornerFrame>
      <p className="photo-caption">The ZMEG engineering &amp; production team, Jinan facility.</p>

      <div className="pillar-grid pillar-grid--paper">
        {COMPANY.pillars.map((p) => {
          const Icon = ICONS[p.icon];
          return (
            <CornerFrame key={p.title} className="pillar-card pillar-card--paper">
              <div style={{ padding: 24 }}>
                <Icon size={22} strokeWidth={1.6} />
                <h3>{p.title}</h3>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}><CheckCircle2 size={14} />{pt}</li>
                  ))}
                </ul>
              </div>
            </CornerFrame>
          );
        })}
      </div>

      <div className="about-stats">
        <div><span>300</span><small>Machines manufactured per month</small></div>
        <div><span>15+</span><small>Engineers, 10+ years experience each</small></div>
        <div><span>4</span><small>Dedicated QC staff</small></div>
        <div><span>5</span><small>Machine categories in production</small></div>
      </div>

      <div className="cta-band cta-band--inline">
        <div>
          <h2>Want to see it on your shop floor?</h2>
          <p>Request specs, pricing, or a live video walkthrough of any ZMEG machine.</p>
        </div>
        <HazardButton onClick={() => navigate("/contact")}>Contact ZMEG</HazardButton>
      </div>
    </section>
    </>
  );
}
