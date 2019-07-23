import React from "react"
import { Link, graphql } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import TemplateWrapper from "../components/TemplateWrapper"
import Navigation from "../components/Navigation"
import Bucket from "../components/Bucket"
import ContactForm from "../components/ContactForm.js"

import { IoIosMailUnread, IoIosCode, IoMdMegaphone, IoMdSync } from "react-icons/io";

import LeagueLogoText from "../svg/league-logo-text.svg";
import LeagueBgImage from "../img/league-bg.jpg";
import HeroImg from "../img/hero-bg.jpg";


const IndexPage = (props) => {

    console.log(props);

    return (

        <TemplateWrapper>

            <div>

                <div className="relative container max-w-full md:flex md:flex-wrap md:items-start mx-auto overflow-hidden">

                    <BackgroundImage
                        fluid={props.data.leagueBg.childImageSharp.fluid}
                        className="home-league-image bg-multiply bg-cover bg-center min-h-screen p-10 py-16 flex flex-wrap flex-col justify-between bg-navy-600 text-beige-100"
                      >

                        <AniLink
                            to="/"
                            className="w-32 mb-8"
                            paintDrip
                            duration={.75}
                            hex="#0b1529">
                            <LeagueLogoText className="inline-block"/>
                        </AniLink>

                        <div>

                            <h1 className="font-bold text-3xl mb-5 font-MRextrabold sm:text-5xl md:text-3xl xl:text-5xl">We are <span className="text-teal-500">League</span>.</h1>

                            <p className="font-MRbold leading-loose max-w-md lg:max-w-md sm:text-lg md:text-base xl:text-xl">We pair beautifully designed websites with brilliant online marketing to help your business grow.</p>

                        </div>

                        <AniLink
                            paintDrip
                            duration={.75}
                            hex="#0b1529"
                            to="/"
                            className="flex flex-wrap align-bottom hover:text-teal-500 transition-all transition-250"><IoIosMailUnread className="text-2xl sm:text-3xl md:text-2xl" /> <span className="font-MRbold ml-1 sm:text-base">work with us</span></AniLink>

                    </BackgroundImage>

                    <div className="w-full md:w-1/2 lg:w-3/5 lg:pl-16 lg:min-h-screen">

                        <Navigation />

                        <BackgroundImage
                            fluid={props.data.leagueBg.childImageSharp.fluid}
                            className="home-hero-image min-h-50 bg-gray-200 bg-center bg-cover">
                        </BackgroundImage>

                    </div>

                </div>


                <div className="container max-w-full flex flex-wrap mx-auto p-6 lg:py-0 lg:justify-between lg:my-16">

                    <div className="w-full my-5 lg:mb-0 lg:w-1/3 xl:p-10">

                        <h2 className="font-MRextrabold text-2xl lg:text-3xl lg:mb-4">Recent projects</h2>

                        <p className="lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit eget libero quis volutpat. Nunc ac ornare sem. Ut placerat vitae ex ut rhoncus.</p>

                        <Link className="inline-block mt-4 mb-4 btn text-teal-500 text-lg font-MRextrabold link-underline link-teal" to="/">See all projects</Link>

                    </div>

                    <div className="flex flex-wrap w-full lg:w-2/3 lg:pl-5">

                        <BackgroundImage
                            className="home-project-image bg-cover bg-center py-40 w-full bg-beige-100"
                            fluid={props.data.eslandCare.childImageSharp.fluid}
                            >
                        </BackgroundImage>

                        <div className="bg-teal-500 text-beige-100 p-6 w-full md:w-1/2 md:p-10 xl:p-20">

                            <h2 className="text-xl lg:text-2xl font-MRextrabold mb-4">Esland Care</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestiae quidem dolore qui a optio earum maxime magni eius, quas, explicabo ea quo? Minima, veniam. Blanditiis soluta numquam, ullam sequi?</p>

                            <Link className="inline-block mt-4 mb-4 btn text-beige-100 text-lg font-MRextrabold link-underline link-beige" to="/">See more projects</Link>
                        </div>

                    </div>

                </div>

                <div className="container max-w-full flex flex-wrap my-4 px-6 lg:my-16">

                    <div className="mb-12 sm:w-1/2 sm:px-4 md:w-1/3 lg:px-12">
                        <span className="inline-block p-4 mb-4 bg-navy-500 text-beige-100 text-2xl rounded-full"><IoIosCode /></span>
                        <h2 className="font-MRextrabold text-xl md:text-2xl text-teal-800 mb-2">Plan</h2>
                        <p className="font-MRbold mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                        <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
                    </div>

                    <div className="mb-12 sm:w-1/2 sm:px-4 md:w-1/3 lg:px-12">
                        <span className="inline-block p-4 mb-4 bg-navy-500 text-beige-100 text-2xl rounded-full"><IoMdMegaphone /></span>
                        <h2 className="font-MRextrabold text-xl md:text-2xl text-teal-800 mb-2">Develop</h2>
                        <p className="font-MRbold mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                        <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
                    </div>

                    <div className="flex-grow mb-12 sm:w-1/2 sm:px-4 md:w-1/3 lg:px-12">
                        <span className="inline-block p-4 mb-4 bg-navy-500 text-beige-100 text-2xl rounded-full"><IoMdSync /></span>
                        <h2 className="font-MRextrabold text-xl md:text-2xl text-teal-800 mb-2">Market</h2>
                        <p className="font-MRbold mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                        <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
                    </div>


                </div>

                <div className="container max-w-full flex flex-wrap my-4 lg:my-16 px-4 md:px-0">

                    <Bucket heading="Strategy" intro="How we start every project" img={props.data.heroBg} alt="" />
                    <Bucket heading="Development" intro="Built with the latest standards" img={props.data.heroBg} alt="" />
                    <Bucket heading="Results" intro="Continual analysis to achieve your goals" img={props.data.heroBg} alt=""/>

                </div>

                <ContactForm />

            </div>

        </TemplateWrapper>
    );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
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
    }
  }
`;
