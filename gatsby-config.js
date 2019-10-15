/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'League Digital | Web Design & Digital Marketing Agency Nottingham',
    description:
      'League Digital are a digital design and marketing agency based in Nottingham. We work with small businesses to increase your online presence',
    siteUrl: `http://www.weareleague.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/img/`
        }
    },
    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /svg/
          }
        }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true,
        whitelist: ['whitelist', 'tl-edges', 'tl-wrapper', 'tl-wrapper + tl-wrapper'] // Don't remove this selector
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150195377-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
  ],

}
