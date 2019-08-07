import React from "react"
import { graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

import TemplateWrapper from "../../components/TemplateWrapper"
import PageHeader from "../../components/PageHeader"
import NavigationHolder from "../../components/nav/NavigationHolder"
import ContactForm from "../../components/ContactForm"

import LeagueIconBeige from "../../svg/league-icon-beige.svg"


const ProjectsPage = (props) => {

    //Declare projects dataset
    const projects = [
        {
            title: "Carlton Town Football Club",
            bgColor: '#000',
            coverImage: "leagueBg",
            services: ["Web Design & Development"],
            url: "projects/carlton-town-fc",
        },
        {
            title: "Safe Haven Day Nursery",
            bgColor: 'red',
            coverImage: "eslandCare",
            services: ["Web Design & Development"],
            url: "projects/safe-haven-day-nursery",
        },
        {
            title: "Esland Care",
            bgColor: 'blue',
            coverImage: "leagueBg",
            services: ["Web Design & Development"],
            url: "projects/esland-care",
        },
        {
            title: "Midland Speed Champs.",
            bgColor: 'green',
            coverImage: "eslandCare",
            services: ["Web Development", "Custom Development"],
            url: "projects/midland-speed-champs",
        },
        {
            title: "Trust Precision Engineering",
            bgColor: 'yellow',
            coverImage: "leagueBg",
            services: ["Web Design & Development"],
            url: "projects/trust-precision-engineering",
        }
    ];

    return (

        <TemplateWrapper>

            <PageHeader img={props.data.leagueBg.childImageSharp.fluid} />

            <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

                <BackgroundImage className="latest-project w-full" fluid={props.data.leagueBg.childImageSharp.fluid}>
                </BackgroundImage>

                    <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                        <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Latest Projects</h2>
                        <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">Midland Speed Championships</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, porro. Alias iste ex, quas nisi temporibus adipisci fugiat voluptates vel hic blanditiis, sunt illo eligendi? Voluptatibus sunt suscipit ut fugiat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, expedita blanditiis odit maxime. Laudantium veniam est, temporibus quas aperiam rerum tempora deleniti, eaque cum quidem quisquam quam, culpa iusto ad.</p>
                        <AniLink
                            to="/projects/midland-speed-champs"
                            className="link-underline link-teal"
                            paintDrip
                            duration={.75}
                            hex="#1BB6BA">View project
                        </AniLink>
                    </div>

            </div>



            <div className="container max-w-full w-11/12 flex flex-wrap mx-auto py-4 sm:py-8 md:py-12 lg:py-16">

                <h2 className="w-full text-center text-2xl ">Recent projects</h2>

                {
                    projects.map(function(project) {

                        var services = project.services.map(function(service) {
                            return(
                                <li key={service}>{service}</li>
                            )
                        });

                        return (
                            <div key={project.title} className="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8 mb-4">

                                <AniLink
                                    to={project.url}
                                    className="cursor-pointer relative overflow-hidden bg-cover bg-center group bg-beige-100"
                                    paintDrip
                                    duration={.75}
                                    hex="#1BB6BA">

                                    <BackgroundImage
                                        fluid={props.data.leagueBg.childImageSharp.fluid}
                                        className="">

                                        <div className="cursor-pointer relative top-0 left-0 translate-x-full group-hover:translate-x-0 transition-all transition-750 text-beige-100 text-center p-8 flex flex-wrap flex-col content-center justify-center w-full bg-teal-500 opacity-95 transition-cubic min-h-64 lg:min-h-128">

                                            <LeagueIconBeige className="w-8 mx-auto mb-4"/>

                                            <h2 className="text-2xl lg:mb-4 text-beige-100">{project.title}</h2>
                                            <p>{project.coverImage}</p>
                                            <ul>
                                                {services}
                                            </ul>
                                        </div>

                                    </BackgroundImage>

                                </AniLink>

                            </div>
                        )
                    })
                }

            </div>

            <ContactForm />

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
