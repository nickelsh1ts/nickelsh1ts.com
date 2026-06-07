/** @type {import('next').NextConfig} */

const nextConfig = {
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
    unoptimized: true,
  },
};

export default nextConfig;
