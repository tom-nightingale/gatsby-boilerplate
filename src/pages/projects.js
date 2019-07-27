import React from "react"
import { graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

import TemplateWrapper from "../components/TemplateWrapper"
import Header from "../components/Header"

import LeagueIconBeige from "../svg/league-icon-beige.svg";


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
            title: "Midland Speed Champs.",
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

                <Header />

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

                                <BackgroundImage fluid={props.data.leagueBg.childImageSharp.fluid} className="cursor-pointer relative overflow-hidden bg-cover bg-center group">

                                    <AniLink
                                        paintDrip
                                        duration={.75}
                                        hex="#1BB6BA"
                                        to={project.url}
                                        className="cursor-pointer relative top-0 left-0 translate-x-full group-hover:translate-x-0 flex flex-wrap content-center justify-center w-full bg-teal-500 opacity-95 transition-all transition-cubic transition-750 min-h-64 lg:min-h-128 "
                                    >

                                        <div className="transition-all transition-250 text-beige-100 text-center p-8">

                                            <LeagueIconBeige className="w-8 mx-auto mb-4"/>

                                            <h2 className="font-MRextrabold text-2xl lg:mb-4 text-beige-100">{project.title}</h2>
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
