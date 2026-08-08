import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { CATEGORIES } from "../data/categories";
import { COMPANY } from "../data/company";
import logo from '../assets/zmeg-logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-stripe" />
      <div className="footer-inner">


        <div className="footer-col">
   <img 
     src={logo} 
     alt="ZMEG — Zhejiang Machinery & Electric Group" 
     className="brand-logo" 
   />
  <p>{COMPANY.fullName}</p>
  <p className="muted">{COMPANY.about}</p>
</div>

        <div className="footer-col">
          <h4>Product Lines</h4>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About ZMEG</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact / Get a Quote</Link>
        </div>

        <div className="footer-col">
          <h4>Reach Us</h4>
          <p><Mail size={14} /> sales@zmeg-group.com</p>
          <p><MapPin size={14} /> 
          No. 99, Wuxing West Road, Cao'e Street, Shangyu District Hangzhou, Zhejiang, 312352 China
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Zhejiang Machinery &amp; Electric Group Co., Ltd. All rights reserved.</span>
      </div>
    </footer>
  );
}


