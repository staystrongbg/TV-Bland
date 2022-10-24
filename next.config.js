/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['static.tvmaze.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
