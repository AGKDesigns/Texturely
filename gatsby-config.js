module.exports = {
  siteMetadata: {
    title: `Texturely - Free high resolution textures`,
    description: `Free to use, incredibly high resolution textures for personal and commercial use.`,
    author: `Alex Knight // AGK42`,
    keywords: `Textures, free, download, instant, commercial, personal, share, design, photoshop, sketch, figma `,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "s512kt34wq90",
        accessToken: "H_DzW9CiNeXCcFF309WU9CuHDMqfjMTGnj7cuuXPfYw",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
