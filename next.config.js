const i18n = require("./i18n.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  i18n: {
    locales: i18n.locales,
    defaultLocale: i18n.defaultLocale,
  },
};

module.exports = nextConfig;
