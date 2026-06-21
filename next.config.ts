import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/blog',
  assetPrefix: '/blog/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
