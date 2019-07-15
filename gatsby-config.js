/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'League Digital | Web Design & Digital Marketing Agency Nottingham',
    description:
      'League Digital are a digital design and marketing agency based in Nottingham. We work with small businesses to increase your online presence',
    siteUrl: `http://www.weareleague.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],

}
