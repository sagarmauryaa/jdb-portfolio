import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 604800,
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "/",
        permanent: false, // use true if you want SEO 301
      },
    ];
  },
  output: "export", 
};

export default nextConfig;
