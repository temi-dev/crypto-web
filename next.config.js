/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: "https://api.kochure.com/test",
  },
  swcMinify: false
}

module.exports = nextConfig
