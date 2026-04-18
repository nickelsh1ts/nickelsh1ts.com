import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['localhost:3024'],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: false,
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/original/**',
      },
    ],
  },
};

export default nextConfig;
