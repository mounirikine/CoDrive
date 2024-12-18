import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript build errors during the build process
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during the build process
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Disable Turbopack as it is causing issues
    turbo: false,
    serverActions: {
      bodySizeLimit: "100MB", // Increase body size limit for server actions
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
};

export default nextConfig;
