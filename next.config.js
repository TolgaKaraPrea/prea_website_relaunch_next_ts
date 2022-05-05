const nextTranslate = require("next-translate");
const withVideos = require("next-videos");

module.exports = {
  ...nextTranslate(),
  ...withVideos(),
  distDir: "build", // GAE not support .next folder => renaming to build
  reactStrictMode: true,
  images: {
    domains: [
      "media-exp1.licdn.com",
      "storage.googleapis.com",
      "img.youtube.com",
      "www.youtube.com",
      "www.google.com",
      "cdn-eu.prea.cloud",
      "imgsrv-2.prea.eu",
      "emojipedia-us.s3.dualstack.us-west-1.amazonaws.com",
      "files.stripe.com"
    ]
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: "/career",
        destination: "/who-we-are/workat/career",
        permanent: true
      },
      {
        source: "/teams",
        destination: "/who-we-are/workat/teams",
        permanent: true
      },
      {
        source: "/team",
        destination: "/who-we-are/workat/teams",
        permanent: true
      },
      {
        source: "/workat",
        destination: "/who-we-are/workat",
        permanent: true
      },
      {
        source: "/jobs",
        destination: "/who-we-are/workat/career/jobs",
        permanent: true
      },
      {
        source: "/job",
        destination: "/who-we-are/workat/career/jobs",
        permanent: true
      },
      {
        source: "/leadership",
        destination: "/who-we-are/leaders",
        permanent: true
      },
      {
        source: "/leaders",
        destination: "/who-we-are/leaders",
        permanent: true
      },
      {
        source: "/api/northdata",
        destination: "/",
        permanent: true
      }
    ];
  },
  env: {
    BASE_URL: process.env.SITE_URL,
    RECAPTCHA_API_KEY: process.env.RECAPTCHA_API_KEY,
    CONTACT_FORM_ENDPOINT: process.env.CONTACT_FORM_ENDPOINT,
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    EMPLOYEE_DATA_ENDPOINT: process.env.EMPLOYEE_DATA_ENDPOINT,
    NEXT_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    DATABASE_URL: process.env.DATABASE_URL
  }
};
