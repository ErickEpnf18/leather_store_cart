/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  //target: 'serverless', // not working very well
  images: {
    domains: ['xcdn.next.co.uk']
  }
}

module.exports = nextConfig
