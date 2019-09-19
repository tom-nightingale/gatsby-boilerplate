import React from "react"

import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from "gatsby-background-image"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { motion } from "framer-motion"
import { IoIosMailUnread, IoIosCode, IoMdMegaphone, IoMdSync } from "react-icons/io";

import NavigationHolder from "../components/nav/NavigationHolder.js"
import DesktopNavItems from "../components/nav/DesktopNavItems.js"
import ImageCard from "../components/ImageCard.js"
import ContactForm from "../components/ContactForm.js"
import LeagueLogoText from "../svg/league-logo-text.svg"

const IndexPage = ( props ) => {

    const imageCards = props.data.allDatoCmsHome.edges[0].node.imagecards;

    return (

        <>

          <HelmetDatoCms seo={props.data.datoCmsHome.seoMetaTags} />

          <NavigationHolder isHomepage="is-homepage" />

          <div className="relative z-10 container max-w-full md:flex md:flex-wrap md:items-start mx-auto overflow-hidden">

              <BackgroundImage
                  fluid={props.data.datoCmsHome.leftImage.fluid}
                  className="bg-multiply bg-cover bg-center min-h-screen p-10 py-8 flex flex-wrap flex-col justify-between bg-navy-600 text-beige-100 md:w-1/2 md:p-12 lg:w-2/5">

                  <motion.a className="w-32">
                      <LeagueLogoText className="inline-block"/>
                  </motion.a>

                  <div>

                      <h1 className="text-3xl mb-5 sm:text-5xl md:text-3xl xl:text-5xl" dangerouslySetInnerHTML={{ __html: props.data.datoCmsHome.heroHeadline }} />

                      <p className="font-MRbold leading-loose max-w-md lg:max-w-md sm:text-lg md:text-base xl:text-xl">{props.data.datoCmsHome.heroIntro}</p>

                      <AniLink
                          paintDrip
                          duration={.75}
                          hex="#1BB6BA"
                          to="/projects"
                          className="link-underline link-teal">View our work</AniLink>

                  </div>

                  <AniLink
                      paintDrip
                      duration={.75}
                      hex="#0b1529"
                      to="/contact"
                      className="flex flex-wrap align-bottom hover:text-teal-500 transition-all transition-250"><IoIosMailUnread className="text-2xl sm:text-3xl md:text-2xl" /> <span className="font-MRbold ml-1 sm:text-base">work with us</span></AniLink>

              </BackgroundImage>

              <div className="md:w-1/2 lg:w-3/5 lg:pl-16">

                    <DesktopNavItems />

                    <BackgroundImage fluid={props.data.datoCmsHome.heroImage.fluid} className="min-h-50 bg-gray-200 bg-center bg-cover lg:min-h-screen" />

              </div>

          </div>

          <div className="relative recent-projects">

              <div className="relative z-10 container max-w-full flex flex-wrap mx-auto p-6 lg:py-0 lg:justify-between lg:my-16">

                  <div className="w-full my-5 lg:mb-0 lg:w-1/3 xl:p-10">

                      <h2 className="text-2xl lg:text-3xl lg:mb-4">{props.data.datoCmsHome.recentProjectsHeading}</h2>

                      <p className="lg:text-lg">{props.data.datoCmsHome.recentProjectsIntro}</p>

                      <AniLink
                          paintDrip
                          duration={.75}
                          hex="#1BB6BA"
                          className="mt-4 mb-4 link-underline link-teal"
                          to="/projects">
                          See all projects
                      </AniLink>

                  </div>

                  <div className="flex flex-wrap w-full lg:w-2/3 lg:pl-5">

                      <BackgroundImage
                          className="home-project-image bg-cover bg-center py-40 w-full bg-beige-100 md:w-1/2 md:py-0"
                          fluid={props.data.allDatoCmsProject.edges[0].node.mainImage.fluid}
                          >
                      </BackgroundImage>

                      <div className="bg-teal-500 text-beige-100 p-6 w-full md:w-1/2 md:p-10 xl:p-20">

                          <h2 className="text-xl lg:text-2xl mb-4">{props.data.allDatoCmsProject.edges[0].node.heroHeadline}</h2>

                          <div dangerouslySetInnerHTML={{ __html: props.data.allDatoCmsProject.edges[0].node.excerpt }} />

                          <AniLink
                              paintDrip
                              duration={.75}
                              hex="#FEFAEF"
                              className="mt-4 mb-4 text-beige-100 link-underline link-beige"
                              to={`/projects/${props.data.allDatoCmsProject.edges[0].node.slug}`}>
                              View project
                          </AniLink>
                      </div>

                  </div>

              </div>

          </div>

          <div className="container max-w-full flex flex-wrap my-4 px-6 lg:my-16">

              <div className="mb-12 sm:w-1/2 sm:px-4 md:w-1/3 lg:px-12">
                  <span className="inline-block p-4 mb-4 bg-navy-500 text-beige-100 text-2xl rounded-full"><IoIosCode /></span>
                  <h2 className="text-xl md:text-2xl text-teal-800 mb-2">Plan</h2>
                  <p className="font-MRbold mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                  <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
              </div>

              <div className="mb-12 sm:w-1/2 sm:px-4 md:w-1/3 lg:px-12">
                  <span className="inline-block p-4 mb-4 bg-navy-500 text-beige-100 text-2xl rounded-full"><IoMdMegaphone /></span>
                  <h2 className="text-xl md:text-2xl text-teal-800 mb-2">Develop</h2>
                  <p className="font-MRbold mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                  <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
              </div>

              <div className="flex-grow mb-12 sm:w-1/2 sm:px-4 md:w-1/3 lg:px-12">
                  <span className="inline-block p-4 mb-4 bg-navy-500 text-beige-100 text-2xl rounded-full"><IoMdSync /></span>
                  <h2 className="text-xl md:text-2xl text-teal-800 mb-2">Market</h2>
                  <p className="font-MRbold mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                  <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
              </div>


          </div>

          <div className="container max-w-full flex flex-wrap my-4 lg:my-16 px-4 md:px-0">

            {
              imageCards.map(function(card) {
                return(
                  <ImageCard heading={card.heading} intro={card.intro} url={card.url} img={card.image.fluid} />
                )
              })
            }

          </div>

          <ContactForm />

        </>
    );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDatoCmsHome {
      edges {
        node {
          imagecards {
            heading
            intro
            url
            image {
              fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
    },
    datoCmsHome {
      heroHeadline
      heroIntro
      recentProjectsHeading
      recentProjectsIntro
      heroImage {
        fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      },
      leftImage {
        fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      },
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      },
    }
    allDatoCmsProject(limit: 1) {
      edges {
        node {
          projectName
          projectUrl
          content
          heroHeadline
          excerpt
          slug
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
