// /** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.rohlik.cz"],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
