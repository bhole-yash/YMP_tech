/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/YMP_tech',
  assetPrefix: '/YMP_tech/',
}

module.exports = nextConfig 