/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from https://<user>.github.io/Auto-Parts/
// so a base path is required in production. Local dev stays at "/".
const basePath = process.env.NODE_ENV === "production" ? "/Auto-Parts" : "";

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
