import React from "react"
import { graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import TemplateWrapper from "../../components/TemplateWrapper"
import ContactForm from "../../components/ContactForm"
import PageHeader from "../../components/PageHeader"
import NavigationHolder from "../../components/nav/NavigationHolder"

import { IoLogoWordpress, IoMdCodeWorking, IoIosPeople, IoIosAnalytics, IoIosLock, IoMdSwitch } from "react-icons/io"

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

        <>

            <NavigationHolder />

            <PageHeader
                img={props.data.carltonTown.childImageSharp.fluid}
                heroTitle={project.title}
                projectServices={project.services} />

            <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

                <BackgroundImage className="latest-project w-full" fluid={props.data.carltonTown.childImageSharp.fluid}>
                </BackgroundImage>

                    <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                        <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Latest Projects</h2>
                        <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{project.title}</p>
                        <div dangerouslySetInnerHTML={{ __html: project.intro }}></div>
                        <a className="link-underline link-teal" href={project.url} target="_blank" rel="noopener noreferrer">View live website</a>
                    </div>

            </div>

            <ul className="flex flex-wrap p-8 mb-8 text-center font-MRbold">
                <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-8 flex flex-col items-center text-lg"><IoLogoWordpress className="text-6xl opacity-75 mb-4" /> Wordpress CMS</li>
                <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-8 flex flex-col items-center text-lg"><IoMdCodeWorking className="text-6xl opacity-75 mb-4" /> Custom Theme</li>
                <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-8 flex flex-col items-center text-lg"><IoIosPeople className="text-6xl opacity-75 mb-4" />User profiles for each manager & club executive</li>
                <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-8 flex flex-col items-center text-lg"><IoIosAnalytics className="text-6xl opacity-75 mb-4" />Search optimised</li>
                <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-8 flex flex-col items-center text-lg"><IoIosLock className="text-6xl opacity-75 mb-4" /> Secure hosting</li>
                <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-8 flex flex-col items-center text-lg"><IoMdSwitch className="text-6xl opacity-75 mb-4" />Customisable options</li>
            </ul>

            <div className="w-full mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full md:w-2/6 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.carltonTown.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
                <div className="w-full md:w-2/6 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.carltonTown.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
                <div className="w-full md:w-2/6 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.carltonTown.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full md:w-2/4 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.carltonTown.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.carltonTown.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
            </div>

            <ContactForm />

        </>

    );
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    carltonTown: file(relativePath: { eq: "carlton-town.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
