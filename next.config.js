const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Smaller client bundles for libraries that export many modules (Next.js 15+).
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      // Define your remote patterns here if needed
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://www.googletagmanager.com https://maps.googleapis.com",
              "connect-src 'self' https://www.realscout.com https://em.realscout.com https://calendly.com https://assets.calendly.com https://www.google-analytics.com https://region1.google-analytics.com https://maps.googleapis.com https://*.cloudfront.net",
              "img-src 'self' data: blob: https:",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "font-src 'self' data:",
              "frame-src 'self' https://calendly.com https://www.google.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
