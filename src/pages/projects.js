import React from "react"
import { Link, graphql } from "gatsby"

import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import TemplateWrapper from "../components/TemplateWrapper"
import Navigation from "../components/Navigation"

import { IoIosMailUnread, IoIosCode, IoMdMegaphone, IoMdSync } from "react-icons/io";

import LeagueLogoText from "../svg/league-logo-text.svg";
import LeagueBgImage from "../img/league-bg.jpg";


const IndexPage = (props) => {

    console.log(props);

    return (

        <TemplateWrapper>

            <div>

                <div className="relative container max-w-full md:flex md:flex-wrap md:justify-between mx-auto overflow-hidden">

                    <div className="md:w-1/2 lg:w-2/12 p-10 py-16 md:p-16 lg:pl-20 flex flex-wrap flex-col bg-navy-600 text-beige-100">

                        <Link to="/" className="w-32">
                            <LeagueLogoText className="inline-block" />
                        </Link>

                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5 lg:pl-16 overflow-y-visible">

                        <Navigation />

                    </div>

                </div>

                <div className="container max-w-full w-11/12 flex flex-wrap mx-auto">

                    <Link to="/" className="w-100 sm:w-1/2 lg:w-1/3 p-4 bg-beige-100">

                        <div className="relative group overflow-hidden w-100 bg-white">

                            <div className="transition-all transition-250">
                                <h2 className="text-teal-500">title</h2>
                                <p>qLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis veritatis obcaecati doloribus labore neque, repellendus est, explicabo deleniti, tempora, nam assumenda sint aperiam! Qui cum dolores labore nihil est!</p>
                            </div>

                        </div>

                    </Link>
                    <Link to="/" className="w-100 sm:w-1/2 lg:w-1/3 p-4 bg-beige-100">

                        <div className="relative group overflow-hidden w-100 bg-white">

                            <div className="transition-all transition-250">
                                <h2 className="text-teal-500">title</h2>
                                <p>qLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis veritatis obcaecati doloribus labore neque, repellendus est, explicabo deleniti, tempora, nam assumenda sint aperiam! Qui cum dolores labore nihil est!</p>
                            </div>

                        </div>

                    </Link>

                    <Link to="/" className="w-100 sm:w-1/2 lg:w-1/3 p-4 bg-beige-100">

                        <div className="relative group overflow-hidden w-100 bg-white">

                            <div className="transition-all transition-250">
                                <h2 className="text-teal-500">title</h2>
                                <p>qLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis veritatis obcaecati doloribus labore neque, repellendus est, explicabo deleniti, tempora, nam assumenda sint aperiam! Qui cum dolores labore nihil est!</p>
                            </div>



                        </div>

                    </Link>

                    <Link to="/" className="w-100 sm:w-1/2 lg:w-1/3 p-4 bg-beige-100">

                        <div className="relative group overflow-hidden w-100 bg-white">

                            <div className="transition-all transition-250">
                                <h2 className="text-teal-500">title</h2>
                                <p>qLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis veritatis obcaecati doloribus labore neque, repellendus est, explicabo deleniti, tempora, nam assumenda sint aperiam! Qui cum dolores labore nihil est!</p>
                            </div>



                        </div>

                    </Link>

                </div>

            </div>

        </TemplateWrapper>
    );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
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
