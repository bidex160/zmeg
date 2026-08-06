import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Gauge } from "lucide-react";
import CornerFrame from "../components/CornerFrame";
import HazardButton from "../components/HazardButton";
import GhostButton from "../components/GhostButton";
import SectionEyebrow from "../components/SectionEyebrow";
import ProductImage from "../components/ProductImage";
import { CATEGORIES } from "../data/categories";

export default function ProductDetail() {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  const [galleryIndex, setGalleryIndex] = useState(0);

  const cat = CATEGORIES.find((c) => c.slug === category);
  const product = cat?.products.find((p) => p.id === productId);

  useEffect(() => {
    setGalleryIndex(0);
    window.scrollTo(0, 0);
  }, [productId]);

  if (!cat || !product) {
    return <Navigate to={`/products/${CATEGORIES[0].slug}`} replace />;
  }

  const p = product;

  return (
    <section className="section section--paper product-detail">
      <Link className="back-link" to={`/products/${cat.slug}`}>
        <ChevronLeft size={16} /> Back to {cat.name}
      </Link>

      <div className="product-detail-grid">
        <div>
          <CornerFrame className="pd-image-frame">
            <ProductImage src={p.gallery[galleryIndex] || p.image} alt={p.name} />
          </CornerFrame>
          {p.gallery.length > 1 && (
            <div className="thumb-row">
              {p.gallery.map((src, i) => (
                <button
                  key={src + i}
                  className={`thumb ${i === galleryIndex ? "thumb--active" : ""}`}
                  onClick={() => setGalleryIndex(i)}
                >
                  <ProductImage src={src} alt={`${p.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <SectionEyebrow>{cat.name.toUpperCase()}</SectionEyebrow>
          <h1 className="pd-title">{p.name}</h1>
          <p className="pd-tagline">{p.tagline}</p>
          <div className="chip-row">
            {p.bullets.map((b) => <span key={b} className="chip">{b}</span>)}
          </div>
          <p className="pd-desc">{p.description}</p>
          <div className="pd-actions">
            <HazardButton onClick={() => navigate("/contact")}>Request Pricing</HazardButton>
            <GhostButton onClick={() => navigate(`/products/${cat.slug}`)}>
              View other {cat.name.toLowerCase()}
            </GhostButton>
          </div>
        </div>
      </div>

      <div className="spec-sheet">
        <div className="spec-sheet-head">
          <Gauge size={18} /> <span>Technical Datasheet</span>
        </div>
        <table>
          <tbody>
            {p.specs.map(([k, v]) => (
              <tr key={k}>
                <td className="spec-key">{k}</td>
                <td className="spec-val">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section-title-row">
        <SectionEyebrow>MORE IN THIS LINE</SectionEyebrow>
      </div>
      <div className="product-grid">
        {cat.products.filter((x) => x.id !== p.id).map((rp) => (
          <CornerFrame key={rp.id} className="product-card">
            <Link className="product-card-inner" to={`/products/${cat.slug}/${rp.id}`}>
              <div className="product-card-image">
                <ProductImage src={rp.image} alt={rp.name} />
              </div>
              <div className="product-card-body">
                <h3>{rp.name}</h3>
                <p className="muted">{rp.tagline}</p>
                <span className="cat-link">Datasheet <ChevronRight size={15} /></span>
              </div>
            </Link>
          </CornerFrame>
        ))}
      </div>
    </section>
  );
}
