import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 604800,
    formats: ["image/webp", "image/avif"],
  },
  output: "export", 
};

export default nextConfig;
