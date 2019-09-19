import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import PageHeader from "../components/PageHeader.js"
import ContactForm from "../components/ContactForm.js"
import NavigationHolder from "../components/nav/NavigationHolder.js"

// import LeagueIconBeige from "../svg/league-icon-beige.svg"


const ProjectsPage = (props) => {

    //Declare projects dataset
    const projects = props.data.allDatoCmsProject.edges;

    return (

        <>

          <HelmetDatoCms seo={props.data.datoCmsProjectsMain.seoMetaTags} />

          <NavigationHolder />

          <PageHeader img={props.data.datoCmsProjectsMain.pageHeader.fluid} />

          {
              projects.map(function(project) {
                  return (
                    <div key={project.node.projectName} className="project-container container max-w-full w-full mb-8 md:mb-0 md:flex flex-wrap items-center md:px-0">

                        <BackgroundImage className="min-h-25 w-full md:min-h-screen md:w-1/3 xl:w-1/2" fluid={project.node.mainImage.fluid}>
                        </BackgroundImage>

                        <div className="project-container__content p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                            <p className="text-teal-500 md:text-teal-300 text-lg md:text-2xl opacity-50 mb-0 font-MRextrabold">{project.node.services}</p>
                            <h2 className="text-3xl lg:text-5xl leading-tight mt-0 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{project.node.projectName}</h2>
                            <div dangerouslySetInnerHTML={{ __html: project.node.excerpt }} />
                            <AniLink
                                to={`/projects/${project.node.slug}`}
                                className="link-underline link-teal"
                                paintDrip
                                duration={.75}
                                hex="#1BB6BA">View project
                            </AniLink>
                        </div>

                    </div>
                )
              })
            }

          <ContactForm />

        </>
    );
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    datoCmsProjectsMain {
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
    allDatoCmsProject(limit: 9) {
      edges {
        node {
          slug
          projectName
          projectUrl
          excerpt
          heroHeadline
          services
          excerpt
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
