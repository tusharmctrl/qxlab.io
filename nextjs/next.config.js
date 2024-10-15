/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_IP ?? "",
        port: "1337",
        pathname: "/**"
      }
    ]
  }
};

export default config;
