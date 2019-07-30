import React from "react"
import { graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import TemplateWrapper from "../../components/TemplateWrapper"
import PageHeader from "../../components/PageHeader"

import LeagueIconBeige from "../../svg/league-icon-beige.svg"


const ProjectsPage = (props) => {

    //Declare projects dataset
    const project = {
        title: "Carlton Town Football Club",
        intro: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia quasi sit eaque magnam temporibus, repellendus ipsa, architecto enim dolorem debitis autem, explicabo quis molestiae omnis quia aliquam nobis laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae cumque dicta excepturi ducimus molestiae voluptatem delectus autem ab quisquam hic, placeat reiciendis labore odit rerum maxime earum, id voluptatum officiis!</p>",
        bgColor: '#000',
        coverImage: "leagueBg",
        services: ["Web Design & Development"],
        url: "https://www.carltontownfc.co.uk",
    }

    return (

        <TemplateWrapper>

            <div>

                <PageHeader img={props.data.leagueBg.childImageSharp.fluid} heroTitle={project.title} projectServices={project.services} />

                <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

                    <BackgroundImage className="latest-project w-full" fluid={props.data.leagueBg.childImageSharp.fluid}>
                    </BackgroundImage>

                        <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                            <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Latest Projects</h2>
                            <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{project.title}</p>
                            <div dangerouslySetInnerHTML={{ __html: project.intro }}></div>
                        </div>

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
