module.exports = {
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      'pbs.twimg.com', // Twitter Profile Picture
    ],
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
};
