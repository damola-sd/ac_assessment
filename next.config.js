module.exports = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["media.autochek.africa", "storage.googleapis.com"],
  },
};
