import React, { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, CheckCircle2, Send } from "lucide-react";
import CornerFrame from "../components/CornerFrame";
import HazardButton from "../components/HazardButton";
import GhostButton from "../components/GhostButton";
import SectionEyebrow from "../components/SectionEyebrow";
import { CATEGORIES } from "../data/categories";

const EMPTY_FORM = { name: "", email: "", whatsapp: "", machine: "", message: "" };

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sent | error
  const [form, setForm] = useState(EMPTY_FORM);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    // TODO: wire this up to a real backend / form service (e.g. your own
    // API route, Formspree, or EmailJS) — this currently only simulates success.
    setStatus("sent");
  };

  return (
    <section className="section section--paper contact-page">
      <SectionEyebrow>GET IN TOUCH</SectionEyebrow>
      <h1 className="section-title">Request a quote or spec sheet.</h1>
      <p className="section-lede">
        Tell us what you're building, cutting, marking or measuring — we'll route it to the right engineer.
      </p>

      <div className="contact-grid">
        <CornerFrame className="contact-form-frame">
          {status === "sent" ? (
            <div className="contact-success">
              <CheckCircle2 size={36} />
              <h3>Request received.</h3>
              <p className="muted">A ZMEG sales engineer will follow up by email or WhatsApp shortly.</p>
              <GhostButton
                onClick={() => {
                  setStatus("idle");
                  setForm(EMPTY_FORM);
                }}
              >
                Send another request
              </GhostButton>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name *
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
              </label>
              <label>
                Email *
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </label>
              <label>
                WhatsApp / WeChat number
                <input
                  type="text"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="+ country code and number"
                />
              </label>
              <label>
                Machine of interest
                <select
                  value={form.machine}
                  onChange={(e) => setForm({ ...form, machine: e.target.value })}
                >
                  <option value="">Select a product line</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Other">Other / not sure</option>
                </select>
              </label>
              <label>
                Requirements *
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Material, working size, tolerance, quantity, timeline..."
                />
              </label>
              {status === "error" && (
                <p className="form-error">Please fill in your name, email, and requirements.</p>
              )}
              <HazardButton type="submit" full>
                Send Request <Send size={15} />
              </HazardButton>
            </form>
          )}
        </CornerFrame>

        <div className="contact-info">
          <h3>Direct Contact</h3>
          <p><Mail size={16} /> sales@zmeg-group.com</p>
          {/* <p><Phone size={16} /> +86 183 9685 7273</p>
          <p><MessageCircle size={16} /> WhatsApp / WeChat: +86 183 9685 7273</p> */}
          <p><MapPin size={16} /> High-tech District, Jinan City, Shandong Province, China</p>
          <div className="contact-note">
            <h4>Good Service, by the numbers</h4>
            <ul>
              <li><CheckCircle2 size={14} /> English manuals &amp; video for every machine</li>
              <li><CheckCircle2 size={14} /> 24-hour online after-sales support</li>
              <li><CheckCircle2 size={14} /> Free technical training &amp; factory walkthroughs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
