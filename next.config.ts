import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern image formats for better compression
    formats: ["image/avif", "image/webp"],
    // Remote patterns for any CDN or external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.organizemyteam.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable standalone output for optimal Vercel deployment
  output: "standalone",
  // Enable compression
  compress: true,
  // Power optimizations
  poweredByHeader: false,
  // React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
