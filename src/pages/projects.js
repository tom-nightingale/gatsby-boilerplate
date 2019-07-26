import React from "react"
import { Link, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

import TemplateWrapper from "../components/TemplateWrapper"
import Navigation from "../components/Navigation"

import LeagueLogoText from "../svg/league-logo-text.svg";


const ProjectsPage = (props) => {

    // console.log(props);
    console.log(props.data.leagueBg.childImageSharp.fluid)

    //Declare projects dataset
    const projects = [
        {
            title: "Carlton Town Football Club",
            bgColor: '#000',
            coverImage: "carlton-town-bg",
            services: ["Web Design & Development"],
            url: "/",
        },
        {
            title: "Safe Haven Day Nursery",
            bgColor: 'red',
            coverImage: "safe-haven-bg",
            services: ["Web Design & Development"],
            url: "/",
        },
        {
            title: "Esland Care",
            bgColor: 'blue',
            coverImage: "esland-care-bg",
            services: ["Web Design & Development"],
            url: "/",
        },
        {
            title: "Midland Speed Champs",
            bgColor: 'green',
            coverImage: "msc-bg",
            services: ["Web Development"],
            url: "/",
        },
        {
            title: "Trust Precision Engineering",
            bgColor: 'yellow',
            coverImage: "league-bg",
            services: ["Web Design & Development"],
            url: "/",
        }
    ];

    return (

        <TemplateWrapper>

            <div>

                <div className="relative container max-w-full md:flex md:flex-wrap md:justify-between mx-auto">

                    <div className="md:w-1/2 lg:w-2/12 p-10 py-16 md:p-16 lg:pl-20 flex flex-wrap flex-col bg-navy-600 text-beige-100">

                        <AniLink
                            paintDrip
                            duration={.75}
                            hex="#0b1529"
                            to="/"
                            className="w-32">
                            <LeagueLogoText className="inline-block" />
                        </AniLink>

                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5 lg:pl-16 overflow-y-visible">

                        <Navigation />

                    </div>

                </div>

                <div className="container max-w-full w-11/12 flex flex-wrap mx-auto py-4 sm:py-8 md:py-12 lg:py-16">

                {
                    projects.map(function(project) {

                        var services = project.services.map(function(service) {
                            return(
                                <li key={service}>{service}</li>
                            )
                        });

                        return (
                            <div key={project.title} className="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8 mb-4">

                                <BackgroundImage fluid={props.data.leagueBg.childImageSharp.fluid} className="relative overflow-hidden bg-cover bg-center group">

                                    <AniLink
                                        paintDrip
                                        duration={.75}
                                        hex="#0b1529"
                                        to={project.url}
                                        className="absolute top-0 left-0 min-h-full w-100 translate-y-full group-hover:translate-y-0 flex flex-wrap content-center justify-center relative overflow-hidden w-full bg-white min-h-64 lg:min-h-128 bg-navy-500"
                                    >

                                        <div className="transition-all transition-250 text-beige-100 text-center p-8">
                                            <h2 className="font-MRextrabold text-2xl lg:mb-4 text-teal-500">{project.title}</h2>
                                            <p>{project.coverImage}</p>
                                            <ul>
                                                {services}
                                            </ul>
                                        </div>

                                    </AniLink>

                                </BackgroundImage>

                            </div>
                        )
                    })
                }

                </div>

            </div>

        </TemplateWrapper>
    );
}

export default ProjectsPage;

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
