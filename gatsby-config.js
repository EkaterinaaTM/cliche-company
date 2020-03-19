module.exports = {
 siteMetadata: {
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
 },
 plugins: [
  (pathPrefix: "/cliche-company"),
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
    icon: `src/images/favicon.png`, // This path is relative to the root of the site.
   },
  },
  `gatsby-plugin-sass`,
  // {
  //   resolve: `gatsby-plugin-postcss`,
  //   options: {
  //     postCssPlugins: [
  //       require(`postcss-preset-env`)({ stage: 0 }),
  //       require(`postcss-mixins`),
  //       require("postcss-simple-vars"),
  //       require("postcss-nested"),
  //       // require(`postcss-url`)({ url: 'copy', useHash: true})
  //     ],
  //   },
  // },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
 ],
}
