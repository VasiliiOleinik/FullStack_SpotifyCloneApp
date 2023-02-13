"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost',
      port: '4000'
    }]
  },
  env: {
    API_URL: 'http://localhost:4000/'
  }
};
module.exports = nextConfig;