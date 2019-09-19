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

    // console.log(props);
    const services = props.data.allDatoCmsService.edges;

    return (


        <>

          <HelmetDatoCms seo={props.data.datoCmsServicesMain.seoMetaTags} />

          <NavigationHolder />

          <PageHeader img={props.data.datoCmsServicesMain.pageHeader.fluid} />

          <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

              <BackgroundImage className="min-h-25 w-full md:min-h-screen md:w-1/3 xl:w-1/2" fluid={props.data.allDatoCmsService.edges[0].node.mainImage.fluid}>
              </BackgroundImage>

                  <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                      <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">League Digital</h2>
                      <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{props.data.datoCmsServicesMain.heroHeadline}</p>
                      <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsServicesMain.content }} />
                  </div>

          </div>

          <div className="container max-w-full w-11/12 mx-auto py-4 sm:py-8 md:py-12 lg:py-16">

              <h2 className="text-center text-2xl ">We specialise in...</h2>

              <div className="w-full flex flex-wrap justify-between">

                {
                    services.map(function(service) {

                        return (

                          <div key={service.node.serviceName} className="block w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8 mb-4">

                            <AniLink
                                to={`/services/${service.node.slug}`}
                                paintDrip
                                duration={.75}
                                hex="#1BB6BA"
                                className="block group"
                                >

                                <BackgroundImage fluid={service.node.mainImage.fluid} className="block">

                                  <div className="cursor-pointer relative top-0 left-0 transition-all transition-750 text-beige-100 text-center p-8 flex flex-wrap flex-col content-center justify-center w-full bg-navy-500 opacity-75 group-hover:opacity-95 min-h-64 lg:min-h-128">

                                      <LeagueIconBeige className="w-8 mx-auto mb-4"/>

                                      <h2 className="text-2xl lg:mb-4 text-beige-100">{service.node.serviceName}</h2>

                                  </div>

                                </BackgroundImage>

                            </AniLink>

                          </div>

                        )
                    })
                }

              </div>

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
    allDatoCmsService(sort: {order: ASC, fields: slug}) {
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
