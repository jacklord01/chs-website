/**
 * @type {import('next').NextConfig}
 */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com", "d3tohjtfj26dsg.cloudfront.net"],
  },
};

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})(nextConfig);

module.exports = pwaConfig;
