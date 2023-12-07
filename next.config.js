/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
