/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    if (!config.module) {
      config.module = { rules: [] };
    }

    config.module.rules.push({
      test: /\.lottie$/,
      type: 'asset/resource',
    });

    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ }
    ];

    return config;
  },
};

module.exports = nextConfig;
