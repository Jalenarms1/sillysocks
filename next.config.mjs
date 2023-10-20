// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  publicRuntimeConfig: {
    PAYPAL_KEY: process.env.PAYPAL_KEY,
    LIVE_KEY: process.env.LIVE_KEY
    // add more variables here as needed
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['cdn-dynmedia-1.microsoft.com', 'via.placeholder.com', 'shop-cdn.sockittome.com', 'cdn.shopify.com', 'res.cloudinary.com']
  }
};
export default config;
