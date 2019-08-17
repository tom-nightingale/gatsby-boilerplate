import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import PageHeader from "../components/PageHeader.js"
import ContactForm from "../components/ContactForm.js"
import NavigationHolder from "../components/nav/NavigationHolder.js"

import LeagueIconBeige from "../svg/league-icon-beige.svg"


const ServicesPage = (props) => {

    console.log(props);
    const services = props.data.allDatoCmsService.edges;

    return (


        <>

          <HelmetDatoCms seo={props.data.datoCmsServicesMain.seoMetaTags} />

          <NavigationHolder />

          <PageHeader img={props.data.datoCmsServicesMain.pageHeader.fluid} />

          <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

              <BackgroundImage className="latest-project w-full" fluid={props.data.allDatoCmsService.edges[0].node.mainImage.fluid}>
              </BackgroundImage>

                  <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                      <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">League Digital</h2>
                      <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{props.data.datoCmsServicesMain.heroHeadline}</p>
                      <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsServicesMain.content }} />
                      <AniLink
                          to={`/projects/${props.data.allDatoCmsService.edges[0].node.slug}`}
                          className="link-underline link-teal"
                          paintDrip
                          duration={.75}
                          hex="#1BB6BA">View project
                      </AniLink>
                  </div>

          </div>

          <div className="container max-w-full w-11/12 flex flex-wrap mx-auto py-4 sm:py-8 md:py-12 lg:py-16">

              <h2 className="w-full text-center text-2xl ">We specialise in...</h2>

              {
                  services.map(function(service) {

                      return (

                          <div key={service.node.serviceName}>

                              <AniLink
                                  to={`/services/${service.node.slug}`}
                                  className=""
                                  paintDrip
                                  duration={.75}
                                  hex="#1BB6BA">


                                  <BackgroundImage fluid={service.node.mainImage.fluid}>

                                    <h2>{service.node.serviceName}</h2>

                                  </BackgroundImage>

                              </AniLink>

                          </div>
                      )
                  })
              }

          </div>

          <ContactForm />

        </>
    );
}

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesQuery {
    datoCmsServicesMain {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      },
      heroHeadline
      content
      pageHeader {
        fluid(imgixParams: {maxW: 600, fm: "jpg", auto: "compress"}) {
          ...GatsbyDatoCmsSizes
        }
      }
    },
    allDatoCmsService {
      edges {
        node {
          slug
          serviceName
          heroHeadline
          excerpt
          content
          mainImage {
            fluid(imgixParams: {maxW: 600, fm: "jpg", auto: "compress"}) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
