import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import CornerFrame from "../components/CornerFrame";
import HazardButton from "../components/HazardButton";
import GhostButton from "../components/GhostButton";
import SectionEyebrow from "../components/SectionEyebrow";
import { CATEGORIES } from "../data/categories";
import { INDUSTRIES } from "../data/industries";
import { COMPANY } from "../data/company";
import { ICONS } from "../lib/icons";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="blueprint-grid" />
        <div className="hero-inner">
          <SectionEyebrow>ZMEG · MACHINERY / ELECTRIC / METROLOGY</SectionEyebrow>
          <h1 className="hero-title">
            Precision equipment,<br />built to spec.
          </h1>
          <p className="hero-copy">
            Zhejiang Machinery &amp; Electric Group manufactures CNC routers, fiber laser
            cutting &amp; marking machines, wood lathes, and 3D scanning systems — engineered
            for shop floors that can't afford downtime.
          </p>
          <div className="hero-actions">
            <HazardButton onClick={() => navigate(`/products/${CATEGORIES[0].slug}`)}>
              Browse Product Lines
            </HazardButton>
            <GhostButton onClick={() => navigate("/contact")}>Request a Quote</GhostButton>
          </div>
          <div className="hero-stats">
            <div><span>300</span><small>Machines built / month</small></div>
            <div><span>15</span><small>Senior engineers</small></div>
            <div><span>72h</span><small>Test-run before shipping</small></div>
            <div><span>24/7</span><small>After-sales support</small></div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <SectionEyebrow>PRODUCT LINES</SectionEyebrow>
        <h2 className="section-title">Five machine categories, one factory floor.</h2>
        <div className="cat-grid">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon];
            return (
              <CornerFrame key={cat.slug} className="cat-card">
                <Link className="cat-card-inner" to={`/products/${cat.slug}`}>
                  <div className="cat-card-top">
                    <Icon size={26} strokeWidth={1.6} />
                    <span className="cat-tag">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{cat.name}</h3>
                  <p className="muted">{cat.short}</p>
                  <p className="cat-blurb">{cat.blurb}</p>
                  <span className="cat-link">View {cat.products.length} models <ChevronRight size={15} /></span>
                </Link>
              </CornerFrame>
            );
          })}
        </div>
      </section>

      <section className="section section--navy">
        <div className="blueprint-grid blueprint-grid--light" />
        <SectionEyebrow>WHY ZMEG</SectionEyebrow>
        <h2 className="section-title section-title--light">Good Quality. Good Price. Good Service.</h2>
        <div className="pillar-grid">
          {COMPANY.pillars.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <div key={p.title} className="pillar-card">
                <Icon size={22} strokeWidth={1.6} />
                <h3>{p.title}</h3>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}><CheckCircle2 size={14} />{pt}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--paper">
        <SectionEyebrow>INDUSTRIES SERVED</SectionEyebrow>
        <h2 className="section-title">Where ZMEG scanning &amp; machining go to work.</h2>
        <div className="industry-grid">
          {INDUSTRIES.map((ind) => {
            const Icon = ICONS[ind.icon];
            return (
              <CornerFrame key={ind.id} className="industry-card">
                <div className="industry-card-inner">
                  <Icon size={24} strokeWidth={1.6} />
                  <h3>{ind.name}</h3>
                  <p className="muted">{ind.tagline}</p>
                </div>
              </CornerFrame>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <GhostButton onClick={() => navigate("/industries")}>
            Read industry solutions <ChevronRight size={15} />
          </GhostButton>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Tell us what you need to build, cut, mark, or measure.</h2>
          <p>Our engineers will match you to the right ZMEG machine and configuration.</p>
        </div>
        <HazardButton onClick={() => navigate("/contact")} variant="light">Get a Quote</HazardButton>
      </section>
    </>
  );
}
