# ZMEG Website

A multi-page marketing site for Zhejiang Machinery & Electric Group (ZMEG),
built with React + Vite + React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The production build is written to `dist/`.

## Project structure

```
src/
  data/            Product catalog, industries, and company copy (plain JS, no JSX)
  lib/              Color tokens, icon lookup map, image-proxy helper
  components/       Reusable UI pieces (Nav, Footer, CornerFrame, buttons, ProductImage...)
  pages/            One file per route (Home, Products, ProductDetail, Industries, About, Contact)
  assets/           Static assets (team photo)
  App.jsx           Route definitions
  main.jsx          React + Router entry point
  index.css         Global stylesheet (blueprint-industrial design system)
```

## Routes

- `/` — Home
- `/products/:category` — product line listing (e.g. `/products/3d-scanners`)
- `/products/:category/:productId` — product detail + spec sheet
- `/industries` — industry solution pages
- `/about` — company profile
- `/contact` — quote request form

## Known follow-ups

  hotlink protection, so `src/lib/proxyImage.js` routes images through
  `images.weserv.nl` as a read-only proxy, with graceful fallback if that also
  fails (see `ProductImage.jsx`). For a real production launch, download and
  re-host these photos on your own storage/CDN instead of depending on a
  third-party proxy long-term.
- **Contact form**: `src/pages/Contact.jsx` currently only simulates a
  successful submission. Wire the `handleSubmit` function up to a real
  backend endpoint or a form service (Formspree, EmailJS, etc.) before launch.
- **Editing product data**: everything under `src/data/categories.js` is
  plain data (name, images, bullets, description, specs) — no need to touch
  any component to add/edit a product.
