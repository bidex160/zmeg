import React, { useState } from "react";
import { Scan } from "lucide-react";
import { proxied } from "../lib/proxyImage";

/**
 * Renders a product photo via the hotlink-bypass proxy first, falls back to
 * the original URL if that fails, and finally shows a labeled placeholder
 * so a broken source image never shows as a broken-image icon.
 */
export default function ProductImage({ src, alt, className = "" }) {
  const [stage, setStage] = useState(0); // 0: proxy, 1: original, 2: fallback
  const attempts = [proxied(src), src];

  if (stage >= attempts.length) {
    return (
      <div className={`img-fallback ${className}`}>
        <Scan size={22} strokeWidth={1.4} />
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={attempts[stage]}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setStage((s) => s + 1)}
    />
  );
}
