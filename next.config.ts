import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hp-api.onrender.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io", 
      },
    ],
  },
};

export default nextConfig;
