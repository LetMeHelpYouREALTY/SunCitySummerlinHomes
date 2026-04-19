const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  experimental: {},
  // For images, ensure you're using the latest format
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Define your remote patterns here if needed
    ]
  },
  // Enable standalone output for improved deployment
  output: 'standalone',
  // Suppress hydration warnings in production
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  compiler: {
    // Suppress hydration warnings in production
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Skip ESLint during build as well
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
