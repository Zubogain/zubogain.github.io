/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // i18n,
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
