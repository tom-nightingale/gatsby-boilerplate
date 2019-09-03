import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import Footer from './Footer'

const TemplateWrapper = ({ children }) => (
    <StaticQuery query={graphql`
      query LayoutQuery
      {
        datoCmsSite {
          globalSeo {
            fallbackSeo {
              title
              description
              image {
                url
              }
              twitterCard
            }
          }
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
      }
    `}
  render={data => (

    <>

        <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />

        {children}

        <Footer />

    </>

    )}
  />
)

export default TemplateWrapper
