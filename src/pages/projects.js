import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import PageHeader from "../components/PageHeader.js"
import ContactForm from "../components/ContactForm.js"
import NavigationHolder from "../components/nav/NavigationHolder.js"

import LeagueIconBeige from "../svg/league-icon-beige.svg"


const ProjectsPage = (props) => {

    //Declare projects dataset
    const projects = props.data.allDatoCmsProject.edges;

    return (

        <>

          <HelmetDatoCms seo={props.data.datoCmsProjectsMain.seoMetaTags} />

          <NavigationHolder />

          <PageHeader img={props.data.datoCmsProjectsMain.pageHeader.fluid} />

          <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

              <BackgroundImage className="latest-project w-full" fluid={props.data.allDatoCmsProject.edges[0].node.mainImage.fluid}>
              </BackgroundImage>

                  <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                      <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Latest Projects</h2>
                      <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{props.data.datoCmsProjectsMain.heroHeadline}</p>
                      <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsProjectsMain.content }} />
                      <AniLink
                          to={`/projects/${props.data.allDatoCmsProject.edges[0].node.slug}`}
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

                      return (
                          <div key={project.node.projectName} className="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8 mb-4">

                              <AniLink
                                  to={`/projects/${project.node.slug}`}
                                  className="block cursor-pointer relative overflow-hidden bg-cover bg-center group bg-beige-100"
                                  paintDrip
                                  duration={.75}
                                  hex="#1BB6BA">

                                  <BackgroundImage
                                      fluid={project.node.mainImage.fluid}>

                                      <div className="cursor-pointer relative top-0 left-0 translate-x-full group-hover:translate-x-0 transition-all transition-750 text-beige-100 text-center p-8 flex flex-wrap flex-col content-center justify-center w-full bg-teal-500 opacity-95 transition-cubic min-h-64 lg:min-h-128">

                                          <LeagueIconBeige className="w-8 mx-auto mb-4"/>

                                          <h2 className="text-2xl lg:mb-4 text-beige-100">{project.node.projectName}</h2>
                                          <p>{project.node.services}</p>

                                      </div>

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
          content
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
