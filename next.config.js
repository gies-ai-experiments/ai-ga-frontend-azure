/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  standalone: true,
  images: {
    domains: ['localhost'],
  },
};
