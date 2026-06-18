/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from a subpath (/Auto-Parts) and so needs a
// basePath. Vercel (and local dev) serve from the root, so no basePath there.
// Vercel sets VERCEL=1 during its builds, which we use to detect it.
const isVercel = !!process.env.VERCEL;
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd && !isVercel ? "/Auto-Parts" : "";

const nextConfig = {
  output: "export", // emit a static site into ./out
  basePath,
  trailingSlash: true, // map routes to folders (index.html) for static hosting
  images: { unoptimized: true },
  reactStrictMode: true,
  // expose the base path to the client so plain <img> srcs can be prefixed
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
