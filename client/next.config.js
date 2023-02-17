/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spotify-oopf.onrender.com',
        port: '10000',
      },
    ],
  },
  env: {
    API_URL: 'https://spotify-oopf.onrender.com/',
  },
}

module.exports = nextConfig
