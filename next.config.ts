import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname: "**.tiktokcdn.com"}
    ],
  },
};

export default nextConfig;
