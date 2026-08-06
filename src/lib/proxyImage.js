// goodcutcnc.com and some shining3d assets sit behind hotlink protection,
// so product images are routed through a read-only image proxy
// (images.weserv.nl) that fetches server-side and re-serves the bytes.
export function proxied(url) {
  if (!url) return url;
  const bare = url.replace(/^https?:\/\//, "");
  return `https://images.weserv.nl/?url=${encodeURIComponent(bare)}&w=900&fit=inside&we`;
}
