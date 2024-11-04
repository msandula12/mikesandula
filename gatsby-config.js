/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Mike Sandula",
    siteUrl: "https://www.mikesandula.dev",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-simple-analytics",
      options: {
        events: true,
        eventsGlobal: "sa_event",
        ignorePages: [],
        trackPageViews: true,
      },
    },
  ],
};
