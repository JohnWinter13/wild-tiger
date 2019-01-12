module.exports = {
  siteMetadata: {
    title: `Wild Tiger Thai Restaurant & Bar`,
    description: `Wild Tiger Thai is a well established restaurant and bar in the heart of Vancouver, Washington (US).`,
    author: `Youssef Rizkalla`,
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
        name: `Wild Tiger Thai Restaurant & Bar`,
        short_name: `Wild Tiger Thai`,
        start_url: `/`,
        background_color: `#FFA500`,
        theme_color: `#FFA500`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
