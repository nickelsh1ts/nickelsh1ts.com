/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    commitTag: process.env.COMMIT_TAG || 'local',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    scrollRestoration: true,
    largePageDataBytes: 256000,
  },
};

export default nextConfig;
