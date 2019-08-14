import React from "react"

import { graphql } from "gatsby"
import { motion } from "framer-motion"
import { IoIosMailUnread, IoIosCode, IoMdMegaphone, IoMdSync } from "react-icons/io";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from "gatsby-background-image"

import NavigationHolder from "../components/nav/NavigationHolder"
import DesktopNavItems from "../components/nav/DesktopNavItems"
import ImageCard from "../components/ImageCard"
import ContactForm from "../components/ContactForm.js"
import LeagueLogoText from "../svg/league-logo-text.svg"

const IndexPage = ( props ) => {

    return (

        <>

            <NavigationHolder isHomepage="is-homepage" />

            <div className="relative z-10 container max-w-full md:flex md:flex-wrap md:items-start mx-auto overflow-hidden">

                <BackgroundImage
                    fluid={props.data.leagueBg.childImageSharp.fluid}
                    className="home-league-image bg-multiply bg-cover bg-center min-h-screen p-10 py-8 flex flex-wrap flex-col justify-between bg-navy-600 text-beige-100"
                  >

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

                <div className="md:w-1/2 lg:w-3/5 lg:pl-16 lg:min-h-screen">

                      <DesktopNavItems />

                      <BackgroundImage fluid={props.data.datoCmsHome.heroImage.fluid} className="home-hero-image min-h-50 bg-gray-200 bg-center bg-cover" />

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
                            className="home-project-image bg-cover bg-center py-40 w-full bg-beige-100"
                            fluid={props.data.eslandCare.childImageSharp.fluid}
                            >
                        </BackgroundImage>

                        <div className="bg-teal-500 text-beige-100 p-6 w-full md:w-1/2 md:p-10 xl:p-20">

                            <h2 className="text-xl lg:text-2xl mb-4">Esland Care</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestiae quidem dolore qui a optio earum maxime magni eius, quas, explicabo ea quo? Minima, veniam. Blanditiis soluta numquam, ullam sequi?</p>

                            <AniLink
                                paintDrip
                                duration={.75}
                                hex="#FEFAEF"
                                className="mt-4 mb-4 text-beige-100 link-underline link-beige"
                                to="/projects/esland-care">
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

                <ImageCard heading="Strategy" intro="How we start every project" img={props.data.strategyBg} alt="" />
                <ImageCard heading="Development" intro="Built with the latest standards" img={props.data.developmentBg} alt="" />
                <ImageCard heading="Results" intro="Continual analysis to achieve your goals" img={props.data.resultsBg} alt=""/>

            </div>

            <ContactForm />

        </>
    );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    heroBg: file(relativePath: { eq: "hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eslandCare: file(relativePath: { eq: "esland-care.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leagueBg: file(relativePath: { eq: "league-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    strategyBg: file(relativePath: { eq: "strategy-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    developmentBg: file(relativePath: { eq: "development-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    resultsBg: file(relativePath: { eq: "results-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    datoCmsHome {
      heroHeadline
      heroIntro
      recentProjectsHeading
      recentProjectsIntro
      heroImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
