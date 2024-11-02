import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/step1',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;