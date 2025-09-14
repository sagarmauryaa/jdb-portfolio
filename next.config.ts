import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 604800,
    formats: ["image/webp", "image/avif"],
  },  
};

export default nextConfig;
