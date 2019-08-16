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
            siteName
          }
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsHome {
          seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `}
  render={data => (

    <>

        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />

        {children}

        <Footer />

    </>

    )}
  />
)

export default TemplateWrapper
