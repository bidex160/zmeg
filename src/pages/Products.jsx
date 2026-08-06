import React from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CornerFrame from "../components/CornerFrame";
import SectionEyebrow from "../components/SectionEyebrow";
import ProductImage from "../components/ProductImage";
import { CATEGORIES } from "../data/categories";

export default function Products() {
  const { category } = useParams();
  const navigate = useNavigate();
  const cat = CATEGORIES.find((c) => c.slug === category);

  if (!cat) {
    return <Navigate to={`/products/${CATEGORIES[0].slug}`} replace />;
  }

  return (
    <section className="section section--paper products-page">
      <SectionEyebrow>PRODUCT LINES</SectionEyebrow>
      <h2 className="section-title">{cat.name}</h2>
      <p className="section-lede">{cat.blurb}</p>

      <div className="tab-row">
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            className={`tab ${c.slug === cat.slug ? "tab--active" : ""}`}
            onClick={() => navigate(`/products/${c.slug}`)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {cat.products.map((p) => (
          <CornerFrame key={p.id} className="product-card">
            <Link className="product-card-inner" to={`/products/${cat.slug}/${p.id}`}>
              <div className="product-card-image">
                <ProductImage src={p.image} alt={p.name} />
              </div>
              <div className="product-card-body">
                <h3>{p.name}</h3>
                <p className="muted">{p.tagline}</p>
                <div className="chip-row">
                  {p.bullets.slice(0, 2).map((b) => <span key={b} className="chip">{b}</span>)}
                </div>
                <span className="cat-link">Datasheet <ChevronRight size={15} /></span>
              </div>
            </Link>
          </CornerFrame>
        ))}
      </div>
    </section>
  );
}
