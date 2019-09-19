import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import ContactForm from "../components/ContactForm.js"
import PageHeader from "../components/PageHeader.js"
import NavigationHolder from "../components/nav/NavigationHolder.js"


class ServicePage extends React.Component {

  componentDidMount() {
    const links = document.querySelectorAll("a[href$='/services']");
    links.forEach(each => (each.setAttribute('aria-current', 'page')));
  }

  render() {

    return (

        <>

          <HelmetDatoCms seo={this.props.data.datoCmsService.seoMetaTags} />

          <NavigationHolder />

          <PageHeader
              img={this.props.data.datoCmsService.mainImage.fluid}
               />

          <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

              <BackgroundImage className="min-h-25 w-full md:min-h-screen md:w-1/3 xl:w-1/2" fluid={this.props.data.datoCmsService.mainImage.fluid}>
              </BackgroundImage>

                <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                    <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Our Services</h2>
                    <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{this.props.data.datoCmsService.serviceName}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsService.content }}></div>
                </div>

          </div>

          <ContactForm />

        </>

    )

  }
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
