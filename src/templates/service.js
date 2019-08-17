import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import ContactForm from "../components/ContactForm.js"
import PageHeader from "../components/PageHeader.js"
import NavigationHolder from "../components/nav/NavigationHolder.js"


const ServicePage = ( props ) => {

    return (

        <>

          <HelmetDatoCms seo={props.data.datoCmsService.seoMetaTags} />

          <NavigationHolder />

          <PageHeader
              img={props.data.datoCmsService.mainImage.fluid}
              heroTitle={props.data.datoCmsService.heroHeadline} />

          <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

              <BackgroundImage className="latest-project w-full" fluid={props.data.datoCmsService.mainImage.fluid}>
              </BackgroundImage>

                <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                    <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Our Services</h2>
                    <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{props.data.datoCmsService.serviceName}</p>
                    <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsService.content }}></div>
                </div>

          </div>

          <ContactForm />

        </>

    );
}

export default ServicePage;

export const query = graphql`
  query ServiceQuery($slug: String!) {
    datoCmsService(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      },
      serviceName
      heroHeadline
      excerpt
      content
      mainImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
