import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  allowedDevOrigins: ['192.168.0.36:3000', 'localhost:3000'],
};

export default nextConfig;
