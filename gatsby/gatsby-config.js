require("dotenv").config()

console.log(process.env.EXPRESS_URL)

module.exports = {
  siteMetadata: {
    title: `BA-Grant`,
    description: `Tutorial site for the BA Rumination and Regulatory Focus Research study`,
    author: `Sarah Burnett`,
  },
  plugins: [
    `gatsby-plugin-page-transitions`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "pg",
        fieldName: "pg",
        url: "http://localhost:5000/graphql",
      },
    },
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
        name: `ba-grant`,
        short_name: `ba-grant`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
