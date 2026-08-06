import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CATEGORIES } from "../data/categories";
import logo from '../assets/zmeg-logo.png'


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const close = () => setMenuOpen(false);

  const firstCategorySlug = CATEGORIES[0].slug;

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="nav">
      <div className="nav-stripe" />
      <div className="nav-inner">
        {/* <button
          className="brand"
          onClick={() => {
            navigate("/");
            close();
          }}
        >
          <span className="brand-mark">ZMEG</span>
          <span className="brand-sub">Zhejiang Machinery &amp; Electric Group</span>
        </button> */}

        <button
  className="brand"
  onClick={() => {
    navigate("/");
    close();
  }}
  aria-label="ZMEG Home"
>
  <img 
    src={logo} 
    alt="ZMEG — Zhejiang Machinery & Electric Group" 
    className="brand-logo" 
  />
</button>

        <nav className="nav-links">
          <NavLink to="/" end className={linkClass} onClick={close}>Home</NavLink>
          <NavLink to={`/products/${firstCategorySlug}`} className={() => (location.pathname.startsWith("/products") ? "active" : "")} onClick={close}>
            Products
          </NavLink>
          <NavLink to="/industries" className={linkClass} onClick={close}>Industries</NavLink>
          <NavLink to="/about" className={linkClass} onClick={close}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-cta ${isActive ? "active" : ""}`} onClick={close}>Contact</NavLink>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to={`/products/${firstCategorySlug}`} onClick={close}>Products</NavLink>
          <NavLink to="/industries" onClick={close}>Industries</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
