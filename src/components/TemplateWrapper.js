import React from 'react'
import Helmet from 'react-helmet'
import "../styles/global.css"

import Header from "./Header"
import useSiteMetadata from './SiteMeta'

const TemplateWrapper = ({ children }) => {
  // set the title and description from the meta data
  const { title, description, siteURL } = useSiteMetadata()
  return(
      <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={siteURL} />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Header />
      {children}
      </div>
  )
}

export default TemplateWrapper
