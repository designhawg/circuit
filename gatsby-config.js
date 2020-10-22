module.exports = {
  siteMetadata: {
    title: `TheCircuit`,
    description: `The Circuit is a multi-yearlong collaborative journalism project focused on investigating and revealing the inner workings of the Cook County Circuit Court system.`,
    author: `@bettergov`,
    image: `src/images/OG_card3.jpg`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: [
          "https://api.sheety.co/6046887e0770da7b870275652c7d60f0/circuitCms/home"
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-circuit-homepage`,
        short_name: `the-circuit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-512.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
