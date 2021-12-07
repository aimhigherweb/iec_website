module.exports = {
  siteMetadata: {
    title: `Innovative Eye Care`,
    siteUrl: `https://www.innovativeeyecare.com.au`,
    description: ``,
    author: `Jake Brown`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://4c1a454d26da427b88743f511014e57e@o447628.ingest.sentry.io/5462810",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-129433065-1",
        head: true,
        anonymize: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/icon-logo03.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
  mapping: {
    "MarkdownRemark.fields.author": `MarkdownRemark`,
  },
}
