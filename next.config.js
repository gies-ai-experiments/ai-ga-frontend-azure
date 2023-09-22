/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
  target: 'serverless',
};
